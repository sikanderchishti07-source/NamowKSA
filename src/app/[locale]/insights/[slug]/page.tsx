import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { images } from "@/content/images";
import { getArticle, publishedArticles } from "@/content/insights";
import { findService, type Service } from "@/content/services";
import { getDictionary } from "@/i18n/get-dictionary";
import { resolveLocale } from "@/lib/route";
import { PageSkeleton } from "@/components/ui/PageSkeleton";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { Photo } from "@/components/ui/Photo";
import { Container, JsonLd, TextLink } from "@/components/ui/primitives";
import { Blocks, Breadcrumbs, CtaBand, formatDate, RelatedServices } from "@/components/sections/sections";

export function generateStaticParams() {
  return publishedArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/insights/[slug]">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return pageMetadata({
    locale,
    path: `/insights/${slug}`,
    title: a.title[locale],
    description: a.excerpt[locale],
    type: "article",
    publishedTime: a.date,
    image: `${images[a.image].src}?auto=format&fit=crop&w=1200&h=630&q=70`,
  });
}

// Route params are read inside <Suspense> so client navigation between
// slugs shows the skeleton instantly instead of blocking.
export default function ArticlePage({ params }: PageProps<"/[locale]/insights/[slug]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <ArticlePageContent params={params} />
    </Suspense>
  );
}

async function ArticlePageContent({ params }: { params: PageProps<"/[locale]/insights/[slug]">["params"] }) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const d = getDictionary(locale);
  const related = article.services.map(findService).filter((s): s is Service => Boolean(s));
  const img = images[article.image];

  return (
    <>
      <article>
        <header className="border-b border-line">
          <Container className="max-w-[920px] pb-12 pt-10 lg:pt-14">
            <Breadcrumbs locale={locale} trail={[{ name: d.insights.title, path: "/insights" }, { name: article.title[locale], path: `/insights/${slug}` }]} />
            <h1 className="mt-10 text-[length:var(--text-display-lg)]">{article.title[locale]}</h1>
            <p className="mt-6 text-xl text-stone">{article.excerpt[locale]}</p>
            <p className="mt-8 flex items-center gap-3 text-sm text-stone">
              <span>{d.insights.published}</span>
              <time dateTime={article.date} className="text-charcoal">{formatDate(article.date, locale)}</time>
              <span aria-hidden="true" className="h-3.5 w-px bg-line" />
              <span>
                {article.minutes} {d.common.minutes}
              </span>
            </p>
          </Container>
          <Container className="max-w-[1100px] pb-14">
            <Photo src={img.src} alt={img.alt[locale]} sizes="(min-width: 1100px) 1100px, 100vw" priority className="aspect-[16/8] rounded-sm" />
          </Container>
        </header>
        <Container className="max-w-[920px] py-16 lg:py-20">
          <Blocks blocks={article.body} locale={locale} />
          <div className="mt-14 border-t border-line pt-8">
            <TextLink href={`/${locale}/insights`}>{d.common.backToInsights}</TextLink>
          </div>
        </Container>
      </article>

      <RelatedServices locale={locale} services={related} title={d.common.relatedServices} />
      <CtaBand locale={locale} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title[locale],
          description: article.excerpt[locale],
          datePublished: article.date,
          inLanguage: locale,
          image: `${img.src}?auto=format&fit=crop&w=1200&q=70`,
          author: { "@id": `${absoluteUrl("")}/#organization` },
          publisher: { "@id": `${absoluteUrl("")}/#organization` },
          mainEntityOfPage: absoluteUrl(`/${locale}/insights/${slug}`),
        }}
      />
    </>
  );
}
