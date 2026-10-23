import { getLegalDoc, type LegalDoc } from "@/content/legal";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Container } from "@/components/ui/primitives";
import { Blocks, Breadcrumbs, formatDate } from "@/components/sections/sections";

export function LegalPage({ locale, slug }: { locale: Locale; slug: LegalDoc["slug"] }) {
  const d = getDictionary(locale);
  const doc = getLegalDoc(slug);
  return (
    <Container className="max-w-[920px] pb-24 pt-10 lg:pt-14">
      <Breadcrumbs locale={locale} trail={[{ name: doc.title[locale], path: `/${slug}` }]} />
      <h1 className="mt-10 text-[length:var(--text-display-lg)]">{doc.title[locale]}</h1>
      <p className="mt-4 text-sm text-stone">
        {d.legal.updated}: <time dateTime={doc.updated}>{formatDate(doc.updated, locale)}</time>
      </p>
      <p className="mt-6 border-s-2 border-[#d08a3a] bg-[#fbf1e6] px-4 py-3 text-sm text-[#6e4413]">{d.legal.reviewNote}</p>
      <div className="mt-10">
        <Blocks blocks={doc.body} locale={locale} />
      </div>
    </Container>
  );
}
