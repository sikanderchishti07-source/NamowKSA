import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { locales, localeTags, ogLocales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path}`;
}

/** Path with locale prefix. `path` is "" for home or starts with "/". */
export function localizedPath(locale: Locale, path: string): string {
  return `/${locale}${path}`;
}

type Args = {
  locale: Locale;
  path: string;
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function pageMetadata({ locale, path, title, description, image, type = "website", publishedTime }: Args): Metadata {
  const dict = getDictionary(locale);
  const desc = description ?? dict.meta.defaultDescription;
  const url = absoluteUrl(localizedPath(locale, path));
  const languages: Record<string, string> = {};
  for (const l of locales) languages[localeTags[l]] = absoluteUrl(localizedPath(l, path));
  languages["x-default"] = absoluteUrl(localizedPath("en", path));

  const ogImage = image ?? absoluteUrl("/og.png");

  return {
    title: title ? { absolute: `${title} | NamowKSA` } : { absolute: dict.meta.defaultTitle },
    description: desc,
    alternates: { canonical: url, languages },
    openGraph: {
      type,
      url,
      title: title ?? dict.meta.defaultTitle,
      description: desc,
      siteName: dict.meta.siteName,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
      images: [{ url: ogImage, width: 1200, height: 630, alt: dict.meta.siteName }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? dict.meta.defaultTitle,
      description: desc,
      images: [ogImage],
    },
  };
}

/** JSON-LD for the organisation. Only includes contact fields that are configured. */
export function organizationJsonLd(locale: Locale) {
  const dict = getDictionary(locale);
  const { email, phone } = siteConfig.contact;
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: dict.meta.siteName,
    url: absoluteUrl(localizedPath(locale, "")),
    logo: absoluteUrl("/icon.png"),
    description: dict.meta.defaultDescription,
    areaServed: { "@type": "Country", name: "Saudi Arabia" },
    knowsLanguage: ["ar", "en"],
    ...(email ? { email } : {}),
    ...(phone ? { telephone: phone } : {}),
    ...(siteConfig.social.length ? { sameAs: siteConfig.social.map((s) => s.url) } : {}),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
