import { NextResponse } from 'next/server';

const COOKIE_NAME = 'aol_session';
const COOKIE_VALUE = 'authorized';

// Paths that are always public (auth machinery + static assets)
const PUBLIC_PREFIXES = [
  '/_next',
  '/favicon',
  '/api/auth',
  '/access',
];

function isPublic(pathname) {
  return PUBLIC_PREFIXES.some(p => pathname.startsWith(p));
}

function isValidToken(token) {
  const raw = process.env.ACCESS_TOKENS || '';
  const valid = raw.split(',').map(t => t.trim()).filter(Boolean);
  return valid.includes(token);
}

export function proxy(request) {
  const { pathname, searchParams } = request.nextUrl;

  if (isPublic(pathname)) return NextResponse.next();

  // Already authorized via cookie — let through
  const cookie = request.cookies.get(COOKIE_NAME);
  if (cookie?.value === COOKIE_VALUE) return NextResponse.next();

  // Token in URL — validate, set cookie, redirect to clean URL
  const token = searchParams.get('token');
  if (token && isValidToken(token)) {
    const cleanUrl = new URL(request.url);
    cleanUrl.searchParams.delete('token');
    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
    return response;
  }

  // No token, no cookie — show access denied
  return NextResponse.redirect(new URL('/access', request.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
