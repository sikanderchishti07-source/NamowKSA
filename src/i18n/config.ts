export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
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
