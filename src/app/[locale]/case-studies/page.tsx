import type { Metadata } from "next";
import { images } from "@/content/images";
import { publishedCaseStudies } from "@/content/case-studies";
import { getDictionary } from "@/i18n/get-dictionary";
import { resolveLocale } from "@/lib/route";
import { pageMetadata } from "@/lib/seo";
import { Photo } from "@/components/ui/Photo";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { CtaBand, PageHero } from "@/components/sections/sections";

export async function generateMetadata({ params }: PageProps<"/[locale]/case-studies">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: "/case-studies", title: d.caseStudies.title, description: d.caseStudies.intro });
}

export default async function CaseStudiesPage({ params }: PageProps<"/[locale]/case-studies">) {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  const c = d.caseStudies;

  return (
    <>
      <PageHero locale={locale} trail={[{ name: c.title, path: "/case-studies" }]} title={c.title} intro={c.intro} />

      {publishedCaseStudies.length > 0 ? (
        <section className="py-20 lg:py-28">
          <Container className="space-y-20">
            {publishedCaseStudies.map((cs) => (
              <article key={cs.slug} id={cs.slug} className="grid gap-10 lg:grid-cols-12">
                <Photo src={images[cs.image].src} alt={images[cs.image].alt[locale]} sizes="(min-width: 1024px) 480px, 100vw" className="aspect-[4/3] rounded-sm lg:col-span-5" />
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="text-sm text-stone">{cs.segment[locale]}</p>
                  <h2 className="mt-2 text-[length:var(--text-display-sm)]">{cs.client[locale]}</h2>
                  <dl className="mt-6 space-y-5">
                    {(
                      [
                        [c.challenge, cs.challenge],
                        [c.approach, cs.approach],
                        [c.outcome, cs.outcome],
                      ] as const
                    ).map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-sm font-semibold text-sage-dark">{label}</dt>
                        <dd className="mt-1">{value[locale]}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </Container>
        </section>
      ) : (
        <section className="py-20 lg:py-28">
          <Container className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="text-[length:var(--text-display-md)]">{c.emptyTitle}</h2>
              <p className="mt-5 text-lg text-stone">{c.emptyBody}</p>
              <div className="mt-8">
                <ButtonLink href={`/${locale}/contact`}>{d.nav.book}</ButtonLink>
              </div>
            </div>
            <div className="rounded-sm border border-line bg-white p-8 sm:p-10 lg:col-span-5 lg:col-start-8">
              <h3 className="text-[length:var(--text-display-sm)]">{c.howTitle}</h3>
              <ol className="mt-6 space-y-4">
                {c.how.map((h, i) => (
                  <li key={h} className="flex gap-4">
                    <span className="font-[family-name:var(--font-display-latin)] text-xl text-teal tabular-nums" aria-hidden="true">
                      {i + 1}
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>
      )}

      <CtaBand locale={locale} />
    </>
  );
}
