import type { Metadata } from "next";
import { getLegalDoc } from "@/content/legal";
import { resolveLocale } from "@/lib/route";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/templates/LegalPage";

export async function generateMetadata({ params }: PageProps<"/[locale]/cookies">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata({ locale, path: "/cookies", title: getLegalDoc("cookies").title[locale] });
}

export default async function CookiesPage({ params }: PageProps<"/[locale]/cookies">) {
  const locale = await resolveLocale(params);
  return <LegalPage locale={locale} slug="cookies" />;
}
