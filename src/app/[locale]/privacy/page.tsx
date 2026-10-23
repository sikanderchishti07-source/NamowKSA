import type { Metadata } from "next";
import { getLegalDoc } from "@/content/legal";
import { resolveLocale } from "@/lib/route";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/templates/LegalPage";

export async function generateMetadata({ params }: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata({ locale, path: "/privacy", title: getLegalDoc("privacy").title[locale] });
}

export default async function PrivacyPage({ params }: PageProps<"/[locale]/privacy">) {
  const locale = await resolveLocale(params);
  return <LegalPage locale={locale} slug="privacy" />;
}
