import type { MetadataRoute } from "next";
import { publishedArticles } from "@/content/insights";
import { allServices, servicePath } from "@/content/services";
import { locales, localeTags } from "@/i18n/config";
import { absoluteUrl } from "@/lib/seo";

const staticPaths = [
  "",
  "/about",
  "/services",
  "/digital-solutions",
  "/packages",
  "/methodology",
  "/industries",
  "/case-studies",
  "/insights",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: { path: string; priority: number; lastModified?: string }[] = [
    ...staticPaths.map((p) => ({ path: p, priority: p === "" ? 1 : p.startsWith("/privacy") || p.startsWith("/terms") || p.startsWith("/cookies") ? 0.2 : 0.7 })),
    ...allServices.map((s) => ({ path: servicePath(s), priority: 0.8 })),
    ...publishedArticles.map((a) => ({ path: `/insights/${a.slug}`, priority: 0.5, lastModified: a.date })),
  ];

  return paths.flatMap(({ path, priority, lastModified }) =>
    locales.map((locale) => ({
      url: absoluteUrl(`/${locale}${path}`),
      priority,
      ...(lastModified ? { lastModified } : {}),
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [localeTags[l], absoluteUrl(`/${l}${path}`)])),
      },
    })),
  );
}
