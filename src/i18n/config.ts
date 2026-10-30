export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
/** Arabic is the site's first language: visitors land on /ar unless they chose English. */
export const defaultLocale: Locale = "ar";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dirOf(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/** BCP-47 tags used for hreflang and Open Graph. */
export const localeTags: Record<Locale, string> = {
  en: "en-SA",
  ar: "ar-SA",
};

export const ogLocales: Record<Locale, string> = {
  en: "en_SA",
  ar: "ar_SA",
};
