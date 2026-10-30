import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "@/i18n/config";
import { publishedArticles } from "@/content/insights";
import { servicesBy } from "@/content/services";

// Known slugs for dynamic routes, so unknown ones get a real 404 status.
const knownSlugs: Record<string, Set<string>> = {
  services: new Set(servicesBy("consultancy").map((s) => s.slug)),
  "digital-solutions": new Set(servicesBy("digital").map((s) => s.slug)),
  insights: new Set(publishedArticles.map((a) => a.slug)),
};

function preferredLocale(request: NextRequest): Locale {
  // A visitor who switched language keeps their choice; everyone else starts in Arabic.
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && isLocale(cookie)) return cookie;
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/");
  const first = segments[1] ?? "";
  if (isLocale(first)) {
    const [, , section, slug, extra] = segments;
    const known = section ? knownSlugs[section] : undefined;
    if (known && slug && (!known.has(slug) || extra !== undefined)) {
      const url = request.nextUrl.clone();
      url.pathname = `/${first}/not-found`;
      return NextResponse.rewrite(url, { status: 404 });
    }
    return;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|sitemap.xml|robots.txt|.*\\..*).*)"],
};
