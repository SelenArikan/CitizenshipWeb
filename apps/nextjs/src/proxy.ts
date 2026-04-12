import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getLocaleDirection, SEO_LOCALES } from "@/lib/seo";

const locales = [...SEO_LOCALES];
const defaultLocale = "tr";

function getLocaleFromPath(pathname: string): string | null {
  return locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  ) ?? null;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const detectedLocale = getLocaleFromPath(pathname);

  if (!detectedLocale && !pathname.startsWith("/admin")) {
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  const effectiveLocale = detectedLocale ?? defaultLocale;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-cw-locale", effectiveLocale);
  requestHeaders.set("x-cw-dir", getLocaleDirection(effectiveLocale));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|hero.png|news1.png|news2.png|news3.png).*)'],
};
