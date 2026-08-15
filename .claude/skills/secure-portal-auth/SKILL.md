---
name: secure-portal-auth
description: Replace a shared/hardcoded access token on a Next.js + Vercel portal with identity-based authentication (Auth.js v5, Google OAuth + email OTP, Upstash Redis allowlist, database sessions, server-side data fetching). Use this skill whenever the user mentions securing a portal, a leaked or public token, NEXT_PUBLIC_ secrets, gating pages behind login, adding an allowlist, revoking someone's access, or protecting a Vercel deployment. Also use it if the user says people are sharing their access link or asks how to see who is viewing their site, even if they do not name a specific auth library.
---

# Secure Portal Auth Migration

Migrate a Next.js App Router site on Vercel from a shared access token to per-person authenticated access.

**Assume the operator is not a developer.** Write every file in full rather than describing diffs, run the commands yourself, and stop at the marked checkpoints where a human has to click through a console. Never ask the operator to "add the usual imports" or "wire this up."

## Threat model this fixes

A shared token is a bearer secret with no identity. Anyone holding it is indistinguishable from the intended recipient, forwarding is undetectable, and revoking it breaks access for everyone at once. If the token was ever compared in client-side code or exposed through a `NEXT_PUBLIC_` variable, it was never secret at all: it shipped inside the JavaScript bundle.

The replacement principle: **stop distributing credentials, start verifying identity.** The visitor proves who they are, the server checks a list, and the browser never receives anything reusable.

## Non-negotiable invariants

Check these against every file written. They are the difference between this migration working and recreating the original bug in a new shape.

1. No secret is ever readable by the browser. No `NEXT_PUBLIC_` secrets, no credential compared in a client component, no API key passed as a prop, no client-side `fetch` carrying a key.
2. Every protected route enforces authorization at the route itself, not only in middleware. Middleware is a fast filter that has had bypass CVEs and silently misses anything absent from its matcher.
3. Sessions are database-backed, not JWT. A JWT stays valid until it expires no matter what the operator does; a database session dies the moment the record is deleted.
4. Protected data is fetched in server components and route handlers, so it crosses to the browser already authorized rather than carrying the means to authorize itself.
5. Nothing sensitive lives in `/public`. That directory is unauthenticated by definition.

---

## Phase 0: Contain the existing leak

Do this before writing any new code. The old token should be treated as permanently public.

```bash
# Find every reference to the old token and to public env vars
grep -rn "NEXT_PUBLIC_" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" . | grep -v node_modules
grep -rni "token\|secret\|apikey\|api_key" app/ components/ lib/ 2>/dev/null | grep -v node_modules

# Check whether the token is in git history, which is public if the repo is public
git log -p --all -S "<the-old-token-value>" | head -50
```

Report findings to the operator, then:

- Delete or rotate the old token value in Vercel so it stops working immediately.
- If the token appears in git history and the repo is public, tell the operator plainly: rewriting history with `git filter-repo` is possible, but any value already pushed to a public repo should be considered compromised regardless. Rotation is the real fix.
- If the portal fetched data client-side using that token, tell the operator that the data behind it should be treated as already exposed. Do not soften this.

---

## Phase 1: Operator checkpoint, accounts and keys

**Stop here and give the operator this list.** Nothing further works without these values. Ask them to paste the results back, or to add them to `.env.local` themselves if they prefer not to share.

**Upstash Redis** (session store, allowlist, audit log)
1. Go to console.upstash.com, create a free Redis database, pick the region closest to the Vercel deployment region.
2. From the database page, copy `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`.

**Google OAuth** (primary sign-in)
1. Go to console.cloud.google.com, create a project.
2. APIs and Services, OAuth consent screen, choose External, fill in the app name and support email, save.
3. Credentials, Create Credentials, OAuth client ID, Web application.
4. Authorized redirect URIs, add both:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://<production-domain>/api/auth/callback/google`
5. Copy the client ID and client secret.

**Resend** (email one-time-code fallback)
1. Go to resend.com, create an API key.
2. Verify a sending domain if one is available. Without a verified domain, sending is limited to the account owner's own address, which is fine for initial testing.

Then generate the session secret locally:

```bash
npx auth secret
```

Write `.env.local` (and confirm `.env*.local` is in `.gitignore`):

```bash
AUTH_SECRET=<from npx auth secret>
AUTH_URL=http://localhost:3000
AUTH_GOOGLE_ID=<google client id>
AUTH_GOOGLE_SECRET=<google client secret>
AUTH_RESEND_KEY=<resend api key>
UPSTASH_REDIS_REST_URL=<upstash url>
UPSTASH_REDIS_REST_TOKEN=<upstash token>
```

Note the absence of `NEXT_PUBLIC_` on every line. That is the point.

---

## Phase 2: Install

```bash
npm install next-auth@beta @auth/upstash-redis-adapter @upstash/redis @upstash/ratelimit
```

---

## Phase 3: Write the code

### `auth.ts` (project root)

```ts
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter";
import { Redis } from "@upstash/redis";

export const redis = Redis.fromEnv();

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: UpstashRedisAdapter(redis),
  providers: [
    Google,
    Resend({ from: "access@yourdomain.com" }),
  ],
  session: {
    strategy: "database",
    maxAge: 60 * 60 * 8,
    updateAge: 60 * 15,
  },
  pages: {
    signIn: "/access",
    error: "/denied",
    verifyRequest: "/access?check-email=1",
  },
  callbacks: {
    async signIn({ user }) {
      const email = user.email?.toLowerCase();
      if (!email) return false;

      const allowed = (await redis.sismember("portal:allowlist", email)) === 1;

      await redis.lpush(
        "portal:audit",
        JSON.stringify({ email, at: Date.now(), granted: allowed })
      );
      await redis.ltrim("portal:audit", 0, 999);

      return allowed;
    },
    async session({ session, user }) {
      if (session.user) session.user.id = user.id;
      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: "__Host-portal.session",
      options: { httpOnly: true, secure: true, sameSite: "lax", path: "/" },
    },
  },
  trustHost: true,
});
```

Two choices worth explaining to the operator if they ask. Database sessions mean revocation is instant instead of waiting for a token to expire. The `__Host-` cookie prefix is a browser-enforced rule that the cookie must be secure, path `/`, and carry no domain attribute, which blocks a whole class of subdomain cookie-injection attacks.

The Upstash adapter talks over HTTP rather than a TCP socket, which is what makes database sessions usable from edge middleware. Do not swap it for a TCP-connected database without moving the session check off the edge.

### `app/api/auth/[...nextauth]/route.ts`

```ts
import { handlers } from "@/auth";
export const { GET, POST } = handlers;
```

### `lib/ratelimit.ts`

```ts
import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "@/auth";

export const authLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "60 s"),
  prefix: "rl:auth",
});
```

### `middleware.ts` (project root)

```ts
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { authLimiter } from "@/lib/ratelimit";

export default auth(async (req) => {
  const { pathname } = req.nextUrl;

  // Throttle the sign-in endpoints so one-time codes cannot be sprayed.
  if (pathname.startsWith("/api/auth")) {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const { success } = await authLimiter.limit(ip);
    if (!success) {
      return new NextResponse("Too many requests", { status: 429 });
    }
    return NextResponse.next();
  }

  if (!req.auth) {
    // API routes get a status code; pages get a redirect.
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
    const url = new URL("/access", req.nextUrl.origin);
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/portal/:path*", "/api/portal/:path*", "/api/auth/:path*"],
};
```

Extend the matcher to cover every protected path in this specific project. Enumerate the app directory and confirm nothing sensitive is left outside it, then tell the operator exactly which paths are covered.

### `app/portal/page.tsx` (the check that actually matters)

```tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function PortalPage() {
  const session = await auth();
  if (!session?.user?.email) redirect("/access");

  // Fetch server-side. Credentials stay on the server; only rendered data crosses.
  const data = await getPortalData();

  return (
    <main>
      <p>Signed in as {session.user.email}</p>
      {/* render data */}
    </main>
  );
}
```

Apply this same opening pair of lines to every protected page and to every route handler under `/api/portal`:

```ts
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();
  if (!session?.user?.email) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }
  // ...
}
```

Never rely on middleware having run. Duplicating the check is intentional.

### `app/access/page.tsx`

```tsx
import { signIn } from "@/auth";

export default function AccessPage() {
  return (
    <main>
      <h1>Portal access</h1>
      <p>Sign in with an approved email address.</p>

      <form action={async () => { "use server"; await signIn("google", { redirectTo: "/portal" }); }}>
        <button type="submit">Continue with Google</button>
      </form>

      <form action={async (formData: FormData) => {
        "use server";
        await signIn("resend", { email: formData.get("email"), redirectTo: "/portal" });
      }}>
        <input type="email" name="email" placeholder="you@company.com" required />
        <button type="submit">Email me a sign-in link</button>
      </form>
    </main>
  );
}
```

Delete the old token input, the old comparison logic, and any env var it read. Grep to confirm nothing still references it.

### `app/denied/page.tsx`

```tsx
export default function DeniedPage() {
  return (
    <main>
      <h1>Access not granted</h1>
      <p>That address is not on the access list. Contact the portal owner to request access.</p>
    </main>
  );
}
```

Keep this page vague. Do not confirm whether an address exists on the list.

### `next.config.js` security headers

Merge into the existing config rather than overwriting it:

```js
const securityHeaders = [
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "img-src 'self' data: https://lh3.googleusercontent.com",
      "style-src 'self' 'unsafe-inline'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

module.exports = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};
```

A strict CSP can break a working site. Load every page after adding it, check the browser console for CSP violations, and loosen only the specific directive that broke, never the whole policy.

### `scripts/allowlist.mjs` (operator's day-to-day tool)

```js
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();
const [cmd, arg] = process.argv.slice(2);
const email = arg?.toLowerCase();

switch (cmd) {
  case "add":
    await redis.sadd("portal:allowlist", email);
    console.log(`Added ${email}`);
    break;

  case "list":
    console.log((await redis.smembers("portal:allowlist")).sort().join("\n") || "(empty)");
    break;

  case "remove": {
    await redis.srem("portal:allowlist", email);
    // Removing from the list blocks future sign-ins. Kill any live session too.
    const keys = await redis.keys("user:session:*");
    let killed = 0;
    for (const key of keys) {
      const value = await redis.get(key);
      const userId = typeof value === "object" && value !== null ? value.userId : null;
      if (!userId) continue;
      const user = await redis.get(`user:${userId}`);
      if (user?.email?.toLowerCase() === email) {
        await redis.del(key);
        await redis.del(`user:session:by-user-id:${userId}`);
        killed++;
      }
    }
    console.log(`Removed ${email}, revoked ${killed} live session(s)`);
    break;
  }

  case "audit": {
    const rows = await redis.lrange("portal:audit", 0, 49);
    for (const row of rows) {
      const r = typeof row === "string" ? JSON.parse(row) : row;
      console.log(`${new Date(r.at).toISOString()}  ${r.granted ? "GRANTED" : "DENIED "}  ${r.email}`);
    }
    break;
  }

  default:
    console.log("Usage: add <email> | remove <email> | list | audit");
}
```

The revoke path reads session records to match a user, which depends on the adapter's key naming. After writing this, verify it against the live store by signing in as a test user and running `remove`, then confirming the session is gone. If the key shapes differ from what the script expects, inspect them with `redis.keys("*")` and correct the script rather than leaving revocation broken.

Add to `package.json`:

```json
"scripts": {
  "allowlist": "node --env-file=.env.local scripts/allowlist.mjs"
}
```

Requires Node 20.6 or newer for `--env-file`.

---

## Phase 4: Verify locally

Run all of these and report each result. Do not proceed on a failure.

```bash
npm run build
```

**Leak scan. This is the gate that catches the original bug returning:**

```bash
grep -rE "AUTH_SECRET|UPSTASH_REDIS_REST_TOKEN|AUTH_GOOGLE_SECRET|AUTH_RESEND_KEY|re_[A-Za-z0-9]" .next/static/ \
  && echo "FAIL: secret found in client bundle" \
  || echo "PASS: client bundle clean"
```

Anything this finds is public. Fix it before continuing.

```bash
npm run allowlist add <operator-own-email>
npm run dev
```

Manual checks, walk the operator through each:

1. Visit `/portal` while signed out. Expect a redirect to `/access`.
2. `curl -i http://localhost:3000/api/portal/<a-real-endpoint>` with no cookie. Expect 401, and confirm no data appears in the body.
3. Sign in with the allowlisted Google account. Expect to land on `/portal`.
4. Sign out, then try an address that is not on the list. Expect `/denied`.
5. `npm run allowlist audit`. Expect both attempts logged with the correct granted flag.
6. Open DevTools, Application, Cookies. Expect `__Host-portal.session` marked HttpOnly and Secure.
7. Open DevTools, Sources, search the loaded scripts for any old token string. Expect nothing.

---

## Phase 5: Deploy

1. Add every variable from `.env.local` to Vercel, Settings, Environment Variables, **Production scope only**. Set `AUTH_URL` to the production URL. Do not reuse production secrets in Preview.
2. Add the production callback URL to the Google OAuth client if it is not already there.
3. Enable Deployment Protection on the Preview environment (Settings, Deployment Protection). Preview URLs are publicly reachable by default, so an unprotected preview is a working copy of the portal with no allowlist in front of it.
4. Deploy, then repeat the Phase 4 manual checks against production.
5. Confirm the old access URL and old token no longer grant entry.

**Rollback:** revert the deployment in the Vercel dashboard. It does not restore the old token, and it should not. If sign-in breaks in production, the fastest recovery is fixing forward, most often a missing environment variable or a callback URL mismatch.

---

## Phase 6: Hand over operations

Give the operator this cheat sheet in plain language:

| Task | Command |
|---|---|
| Grant access | `npm run allowlist add someone@company.com` |
| Revoke access and kill live session | `npm run allowlist remove someone@company.com` |
| See who has access | `npm run allowlist list` |
| See who tried to sign in | `npm run allowlist audit` |

And the one rule that prevents a repeat: **anything the browser can read is public.** Before every deploy, run the Phase 4 leak scan.

---

## Tradeoff to surface, not bury

An allowlist means nobody gets in at 9pm without the operator adding them first. If that friction is unacceptable, the softer variant is to let any verified email address sign in while keeping the audit log, and reserve the allowlist for a `/portal/private` subtree holding the genuinely sensitive material. Implement it by returning `true` from the `signIn` callback for the general case and checking `sismember` inside the private subtree's pages instead.

That is strictly weaker, so name it as a choice rather than making it silently. For a work portfolio, knowing exactly who looked is often worth more than keeping everyone out.

---

## Troubleshooting

| Symptom | Cause and fix |
|---|---|
| `redirect_uri_mismatch` at Google | The callback URL in Google Cloud does not match exactly, including scheme and trailing path. Add both localhost and production entries. |
| Redirect loop between `/access` and `/portal` | `/access` is caught by the middleware matcher. Remove it from the matcher. |
| Signed in but `auth()` returns null in a page | The page is a client component. Move the check to a server component parent, or into a route handler. |
| `UPSTASH_REDIS_REST_URL is missing` in middleware | Environment variables are not set for the environment being run. Check the Vercel scope, and check `.env.local` locally. |
| Email sign-in never arrives | Unverified Resend domain limits sending to the account owner. Verify a domain, or test with the owner's address. |
| Page renders blank after adding headers | A CSP directive blocked a script or style. Read the browser console, loosen that one directive. |
| Session survives after `remove` | The revoke script's key assumptions are wrong for this adapter version. Inspect `redis.keys("*")` and correct the script. |
