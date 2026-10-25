import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import { publishedCaseStudies, publishedTestimonials } from "@/content/case-studies";
import { homeFaqs } from "@/content/faqs";
import { images } from "@/content/images";
import { publishedArticles } from "@/content/insights";
import { methodology } from "@/content/methodology";
import { segments } from "@/content/segments";
import { findService, servicePath, servicesBy } from "@/content/services";
import { dirOf, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/seo";
import { Photo } from "@/components/ui/Photo";
import { Arrow, ButtonLink, Container, SectionHeading, TextLink } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ArticleList, CtaBand, FaqSection, ServiceIndex } from "@/components/sections/sections";
import { DashboardMockup, QrMenuMockup } from "@/components/visuals/Demos";
import { MethodRail } from "@/components/visuals/MethodRail";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata({ locale, path: "" });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);
  const h = d.home;
  const lp = (p: string) => `/${locale}${p}`;

  return (
    <>
      <Hero locale={locale} />

      {/* Value proposition */}
      <section className="py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-12">
          <h2 className="text-[length:var(--text-display-md)] lg:col-span-6">{h.valueTitle}</h2>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-relaxed text-stone">{h.valueBody}</p>
          </div>
          <dl className="grid gap-x-10 gap-y-8 border-t border-line pt-10 sm:grid-cols-3 lg:col-span-12">
            {h.valuePoints.map((v) => (
              <div key={v.title}>
                <dt className="font-[family-name:var(--font-display)] text-[1.45rem] text-navy">{v.title}</dt>
                <dd className="mt-2 text-stone">{v.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Two pillars */}
      <section className="bg-ivory-deep py-24 lg:py-32">
        <Container>
          <SectionHeading title={h.pillarsTitle} body={h.pillarsBody} />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-line md:grid-cols-2">
            <Pillar
              href={lp("/services")}
              title={h.consultancyPillarTitle}
              body={h.consultancyPillarBody}
              cta={d.nav.allServices}
              image={images.kitchenBrigade.src}
              items={servicesBy("consultancy").map((s) => s.title[locale])}
            />
            <Pillar
              href={lp("/digital-solutions")}
              title={h.digitalPillarTitle}
              body={h.digitalPillarBody}
              cta={d.nav.allDigital}
              image={images.cafeTable.src}
              items={servicesBy("digital").map((s) => s.title[locale])}
            />
          </div>
        </Container>
      </section>

      {/* Challenges and responses */}
      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeading title={h.challengesTitle} />
          <div className="mt-14 hidden grid-cols-12 gap-8 border-b border-navy pb-3 text-sm font-semibold text-stone md:grid">
            <span className="col-span-5">{h.challengeHeard}</span>
            <span className="col-span-7">{h.challengeResponse}</span>
          </div>
          <ul className="mt-6 md:mt-0">
            {h.challenges.map((c) => {
              const s = findService(c.service);
              return (
                <li key={c.service} className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-8">
                  <p className="font-[family-name:var(--font-display)] text-[1.35rem] leading-snug text-navy md:col-span-5">{c.heard}</p>
                  <div className="md:col-span-7">
                    <p className="text-lg text-charcoal">{c.response}</p>
                    {s && (
                      <TextLink href={lp(servicePath(s))} className="mt-3 text-[0.95rem]">
                        {s.title[locale]}
                      </TextLink>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Operations & profitability services */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading title={h.operationsTitle} body={h.operationsBody} />
              <Photo src={images.garnish.src} alt={images.garnish.alt[locale]} sizes="(min-width: 1024px) 380px, 100vw" className="mt-10 hidden aspect-[4/5] rounded-sm lg:block" />
            </div>
          </div>
          <div className="lg:col-span-8">
            <ServiceIndex locale={locale} services={servicesBy("consultancy")} />
          </div>
        </Container>
      </section>

      {/* Digital showcase */}
      <section className="on-dark overflow-hidden bg-navy py-24 text-ivory lg:py-32">
        <Container>
          <SectionHeading title={h.digitalTitle} body={h.digitalBody} tone="light" />
          <div className="mt-16 grid items-start gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <QrMenuMockup locale={locale} sampleLabel={d.common.sampleData} className="[&_figcaption]:text-ivory/70" />
              <p className="mx-auto mt-6 max-w-xs text-center text-ivory/75">{h.digitalQrCaption}</p>
              <div className="mt-4 flex justify-center">
                <TextLink href={lp("/digital-solutions/qr-digital-menus")} tone="light">{findService("qr-digital-menus")?.title[locale]}</TextLink>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-8 lg:pt-16" delay={120}>
              <DashboardMockup locale={locale} sampleLabel={d.common.sampleData} sampleNote={d.common.sampleDataNote} tone="dark" />
              <p className="mt-6 max-w-md text-ivory/75">{h.digitalDashCaption}</p>
              <div className="mt-4">
                <TextLink href={lp("/digital-solutions/dashboards-reporting")} tone="light">{findService("dashboards-reporting")?.title[locale]}</TextLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Methodology: the ticket rail */}
      <section className="on-dark bg-navy-deep py-24 text-ivory lg:py-32" aria-labelledby="method-heading">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading id="method-heading" title={h.methodTitle} body={h.methodBody} tone="light" />
            <TextLink href={lp("/methodology")} tone="light">{d.nav.methodology}</TextLink>
          </div>
          <div className="mt-16">
            <MethodRail
              dir={dirOf(locale)}
              labels={{
                activities: d.methodology.activitiesLabel,
                outputs: d.methodology.outputsLabel,
                stage: d.methodology.stageLabel,
                tablist: d.methodology.tablistLabel,
              }}
              stages={methodology.map((m) => ({
                id: m.id,
                name: m.name[locale],
                summary: m.summary[locale],
                activities: m.activities.map((a) => a[locale]),
                outputs: m.outputs.map((o) => o[locale]),
              }))}
            />
          </div>
        </Container>
      </section>

      {/* Segments */}
      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeading title={h.segmentsTitle} body={h.segmentsBody} />
          <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map((s) => (
              <li key={s.id}>
                <Link href={`${lp("/industries")}#${s.id}`} className="group block">
                  <Photo
                    src={images[s.image].src}
                    alt={images[s.image].alt[locale]}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[3/4] rounded-sm"
                    imgClassName="transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <h3 className="mt-5 flex items-center justify-between gap-3 text-[1.45rem] group-hover:text-teal-dark">
                    {s.name[locale]}
                    <Arrow className="size-5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 text-stone">{s.summary[locale]}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Case studies & testimonials: rendered only when genuine, approved entries exist */}
      {publishedCaseStudies.length > 0 && (
        <section className="border-t border-line py-24 lg:py-32">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading title={h.caseStudiesTitle} />
              <TextLink href={lp("/case-studies")}>{d.nav.caseStudies}</TextLink>
            </div>
            <ul className="mt-12 grid gap-10 md:grid-cols-2">
              {publishedCaseStudies.slice(0, 2).map((c) => (
                <li key={c.slug} className="border-t border-line pt-6">
                  <p className="text-sm text-stone">{c.segment[locale]}</p>
                  <h3 className="mt-2 text-[1.5rem]">{c.client[locale]}</h3>
                  <p className="mt-3 text-stone">{c.outcome[locale]}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
      {publishedTestimonials.length > 0 && (
        <section className="bg-ivory-deep py-24">
          <Container className="grid gap-12 md:grid-cols-2">
            {publishedTestimonials.slice(0, 2).map((tm) => (
              <figure key={tm.name}>
                <blockquote className="font-[family-name:var(--font-display)] text-2xl leading-snug text-navy">{tm.quote[locale]}</blockquote>
                <figcaption className="mt-5 text-stone">
                  {tm.name}, {tm.role[locale]}, {tm.business[locale]}
                </figcaption>
              </figure>
            ))}
          </Container>
        </section>
      )}

      {/* Insights */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title={h.insightsTitle} body={h.insightsBody} />
            <TextLink href={lp("/insights")}>{h.allInsights}</TextLink>
          </div>
          <div className="mt-14">
            <ArticleList locale={locale} articles={publishedArticles.slice(0, 3)} />
          </div>
        </Container>
      </section>

      <FaqSection locale={locale} faqs={homeFaqs} title={h.faqTitle} className="border-t border-line bg-ivory-deep/50" />

      <CtaBand locale={locale} />
    </>
  );
}

function Hero({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const h = d.home;
  const img = images.heroBackground;
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy-deep text-ivory">
      {/* Full-bleed background, mirrored in Arabic so the dark side stays behind the text */}
      <Photo
        src={img.src}
        alt={img.alt[locale]}
        sizes="100vw"
        priority
        className="hero-image absolute inset-0 -z-10 bg-navy-deep"
        imgClassName="object-[70%_50%] rtl:-scale-x-100"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,31,39,0.94)_0%,rgba(11,31,39,0.82)_38%,rgba(11,31,39,0.35)_68%,rgba(11,31,39,0.15)_100%)] rtl:-scale-x-100 max-lg:bg-[linear-gradient(180deg,rgba(11,31,39,0.55)_0%,rgba(11,31,39,0.85)_55%,rgba(11,31,39,0.96)_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-navy-deep/70 to-transparent" />
      <Container className="flex min-h-[min(calc(100svh-76px),860px)] flex-col justify-end pb-16 pt-40 sm:pt-48 lg:justify-center lg:py-28">
        <h1 className="hero-rise max-w-[12ch] text-[length:var(--text-display-xl)] font-semibold leading-[0.95] text-ivory [text-shadow:0_2px_24px_rgba(11,31,39,0.45)]">
          {/* Keep compound words like "Better-Run" together without relying on a special hyphen glyph */}
          {h.heroTitle.split(" ").map((word, i) => (
            <Fragment key={i}>
              {i > 0 && " "}
              <span className="whitespace-nowrap">{word}</span>
            </Fragment>
          ))}
        </h1>
        <p className="hero-rise mt-8 max-w-[34rem] text-lg leading-relaxed text-ivory/85 [animation-delay:120ms] sm:text-xl">
          {h.heroBody}
        </p>
        <div className="hero-rise mt-10 flex flex-wrap gap-3 [animation-delay:220ms]">
          <ButtonLink href={`/${locale}/contact`} variant="accent">
            {h.heroPrimary}
          </ButtonLink>
          <ButtonLink href={`/${locale}/services`} variant="ghostLight">
            {h.heroSecondary}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

function Pillar({ href, title, body, cta, image, items }: { href: string; title: string; body: string; cta: string; image: string; items: string[] }) {
  return (
    <Link href={href} className="group flex flex-col bg-ivory p-8 transition-colors hover:bg-white sm:p-10">
      <div className="flex items-start justify-between gap-6">
        <h3 className="text-[length:var(--text-display-sm)] group-hover:text-teal-dark">{title}</h3>
        <Photo src={image} alt="" sizes="96px" className="size-20 shrink-0 rounded-full sm:size-24" />
      </div>
      <p className="mt-4 max-w-md text-stone">{body}</p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {items.map((it) => (
          <li key={it} className="rounded-full border border-line px-3 py-1 text-sm text-charcoal">
            {it}
          </li>
        ))}
      </ul>
      <span className="mt-auto inline-flex items-center gap-2 pt-10 font-semibold text-teal-dark">
        {cta}
        <Arrow className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
      </span>
    </Link>
  );
}
