import type { Metadata } from "next";
import { publishedArticles } from "@/content/insights";
import { getDictionary } from "@/i18n/get-dictionary";
import { resolveLocale } from "@/lib/route";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/primitives";
import { ArticleList, CtaBand, PageHero } from "@/components/sections/sections";

export async function generateMetadata({ params }: PageProps<"/[locale]/insights">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: "/insights", title: d.insights.title, description: d.insights.intro });
}

export default async function InsightsPage({ params }: PageProps<"/[locale]/insights">) {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  return (
    <>
      <PageHero locale={locale} trail={[{ name: d.insights.title, path: "/insights" }]} title={d.insights.title} intro={d.insights.intro} />
      <section className="py-20 lg:py-28">
        <Container>
          <ArticleList locale={locale} articles={publishedArticles} />
        </Container>
      </section>
      <CtaBand locale={locale} />
    </>
  );
}
