# agentopslab-landing

Next.js marketing site and agent catalog for AgentOpsLab.

![Language](https://img.shields.io/badge/language-JavaScript-yellow?style=flat-square)
![Framework](https://img.shields.io/badge/Next.js-16.2.1-black?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/vinaygangidi/agentopslab-landing?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

**Live site:** https://agentopslab-landing.vercel.app/

## What This Does

A statically rendered Next.js site that catalogs the AgentOpsLab agent portfolio and hosts
three interactive demos. The homepage is the catalog itself — 37 single-purpose agents
grouped by business function, plus 3 multi-agent systems that have their own walkthrough
and architecture pages.

The catalog is data-driven: everything renders from `lib/agentsData.js`, so adding an agent
means editing one file rather than touching components.

## How It Works

```
lib/agentsData.js          single source of truth
  ├── techBadges           per-stack badge styling (Python/CrewAI, n8n, Claude, Azure OpenAI)
  ├── multiAgentSystems    3 systems with demo + architecture links
  ├── businessFunctions    4 functions → 10 sub-functions → 37 agents
  └── helpers              getAgentsByCategory, getCategoryCount, getTotalAgentCount
        │
        ▼
components/AgentCard.jsx   renders one catalog entry
        │
        ▼
app/**/page.js             App Router pages (server components, no client data fetching)
```

Routes:

| Route | Purpose |
|---|---|
| `/` | Agent catalog homepage |
| `/solutions` | Solution overview |
| `/playbook` | Agentic playbook |
| `/finance-map` | Finance function map |
| `/about` | About page |
| `/access` | Access request page |
| `/demo/ap-invoice-processing` | Interactive AP invoice demo |
| `/demo/ap-exception-resolution` | Interactive AP exception demo |
| `/demo/nda-review` | Interactive NDA review demo |
| `/agentic-systems/<name>` | Architecture write-up for each of the 3 systems |

The four business functions are Go-to-Market, Finance & ERP, Human Resources, and Legal &
Compliance, subdivided into ten sub-functions (Sales Ops, Revenue Ops, GTM Strategy,
Finance, Accounts Payable, Cash & ERP, Financial Risk, Talent Acquisition, Employee
Lifecycle, Contract Ops, Regulatory).

Demos run entirely on committed fixtures in `public/` — JSON and PDF files under
`public/invoice-fixtures/` and `public/ap-exception-demo-fixture.json`. No backend call is
made and no API key is needed.

## Quickstart

1. Clone and install:
   ```bash
   git clone https://github.com/vinaygangidi/agentopslab-landing.git
   cd agentopslab-landing
   npm install
   ```

2. Run the dev server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

No `.env` file is required. Nothing in `app/`, `lib/`, or `components/` reads an
environment variable.

## Configuration

The application code on this branch reads **no environment variables**. Configuration is
limited to `next.config.js`:

| Setting | Value | Description |
|---|---|---|
| `reactStrictMode` | `true` | React strict mode |
| `images.unoptimized` | `true` | Disables the Next.js image optimizer, required for static export |

| Name | Required | Default | Description |
|---|---|---|---|
| `ACCESS_TOKENS` | No | `''` | Read only by `proxy.js`, which Next.js never loads. Setting it has no effect — see Limitations |

### Adding an agent

Edit `lib/agentsData.js`. Append an entry to the appropriate `subFunctions[].agents` array
with `name`, `desc`, `tech` (one of `python`, `n8n`, `claude`, `azure`), and `github`.
`getTotalAgentCount()` derives its total from the data, so no count needs updating by hand.

## Limitations

- **`proxy.js` is dead code, and the demo routes are unprotected.** It defines
  bearer-token auth over a `PUBLIC_PREFIXES` allowlist and reads `ACCESS_TOKENS`, but the
  file is not named `middleware.js` and exports no `middleware` function — only a `config`
  object. Next.js never loads it, so **no authentication runs on this site** and
  `/demo/*` is publicly reachable. Anyone with the URL can open the demos.
- **The session cookie design is not secure.** `proxy.js` compares a cookie against the
  literal string `'authorized'`. There is no signing, expiry, or revocation, so the value
  is trivially forgeable if the file were ever wired up as-is.
- **No tests and no CI.** No test runner, no `test` script in `package.json`, no workflow
  in `.github/`.
- **No linting configured.** No ESLint config and no `lint` script, despite Next.js
  shipping ESLint support.
- **TypeScript is a dependency but unused for application code.** `typescript`,
  `@types/react`, and `@types/node` are installed and `tsconfig.json` exists, but every
  page and component is `.js` or `.jsx`. Only `next-env.d.ts` is TypeScript.
- **Demo output is fixtures, not live agents.** The three demos replay committed JSON. They
  demonstrate interface and reasoning shape, not a running pipeline — the actual agents
  live in separate repositories.
- **Catalog links point to repositories that are private.** Most `github` URLs in
  `lib/agentsData.js` target per-agent repositories that are not public, so a visitor
  clicking through will hit 404s.
- **`react-dom` and `react` are pinned exactly (`18.2.0`) while `next` floats (`^16.2.1`).**
  A `npm install` months apart can resolve a different Next.js minor against a fixed React.
- **Content claims are not independently verified.** Accuracy figures and agent counts
  shown in the UI come from `lib/agentsData.js` and are descriptive copy, not measured
  benchmarks.

## Related Repositories

| Repository | Contents |
|---|---|
| [revops-ai-agents](https://github.com/vinaygangidi/revops-ai-agents) | Claude Code subagent definitions for RevOps |
| [n8n-enterprise-ai-agents](https://github.com/vinaygangidi/n8n-enterprise-ai-agents) | n8n workflow JSONs for finance, GTM, loan origination |
| [agentopslab-api](https://github.com/vinaygangidi/agentopslab-api) | FastAPI service behind the NDA review demo |

## License

MIT — see [LICENSE](LICENSE).
