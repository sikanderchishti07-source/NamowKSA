import type { Locale } from "@/i18n/config";

/** A string supplied in both site languages. */
export type L = { en: string; ar: string };

export function tr(value: L, locale: Locale): string {
  return value[locale];
}

export type FAQ = { q: L; a: L };
