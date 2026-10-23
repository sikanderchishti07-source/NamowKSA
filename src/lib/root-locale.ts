import { locale as rootLocale } from "next/root-params";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

/** Locale for components that don't receive params (e.g. not-found). */
export async function lang(): Promise<Locale> {
  const value = await rootLocale();
  return value && isLocale(value) ? value : defaultLocale;
}
