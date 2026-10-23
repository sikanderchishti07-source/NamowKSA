import type { Metadata } from "next";
import { getLegalDoc } from "@/content/legal";
import { resolveLocale } from "@/lib/route";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/templates/LegalPage";

export async function generateMetadata({ params }: PageProps<"/[locale]/terms">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata({ locale, path: "/terms", title: getLegalDoc("terms").title[locale] });
}

export default async function TermsPage({ params }: PageProps<"/[locale]/terms">) {
  const locale = await resolveLocale(params);
  return <LegalPage locale={locale} slug="terms" />;
}
