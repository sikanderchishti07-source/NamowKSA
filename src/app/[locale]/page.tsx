import type { Metadata } from "next";
import Link from "next/link";
import { ChartColumn, ChartPie, ChefHat, ClipboardList, Gift, Languages, LayoutGrid, ListChecks, MapPin, MonitorSmartphone, Settings2, ShieldCheck, Store, Users } from "lucide-react";
import { notFound } from "next/navigation";
import { publishedCaseStudies, publishedTestimonials } from "@/content/case-studies";
import { homeFaqs } from "@/content/faqs";
import { images } from "@/content/images";
import { publishedArticles } from "@/content/insights";
import { methodology } from "@/content/methodology";
import { segments } from "@/content/segments";
import { findService, serviceCardImage, servicePath, servicesBy } from "@/content/services";
import { dirOf, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/seo";
import { whatsappLink } from "@/config/site";
import { Photo } from "@/components/ui/Photo";
import { Arrow, ButtonLink, Container, SectionHeading, TextLink } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ArticleList, CtaBand, FaqSection } from "@/components/sections/sections";
import { DashboardMockup, QrMenuMockup } from "@/components/visuals/Demos";
import { MethodRail } from "@/components/visuals/MethodRail";
import { RotatingWord } from "@/components/visuals/RotatingWord";
import { ServiceExplorer } from "@/components/visuals/ServiceExplorer";

const valueIcons = [ClipboardList, ChartPie, MonitorSmartphone, Languages];
const offerIcons = [Store, ChartPie, ListChecks];

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
  const wa = whatsappLink(d.offer.title);

  return (
    <>
      <Hero locale={locale} />

      {/* Value proposition: points on one side, kitchen photo on the other */}
      <section className="overflow-hidden py-24 lg:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="inline-flex rounded-full bg-teal/10 px-3.5 py-1 text-sm font-semibold text-teal-dark">{h.valueLabel}</p>
            <h2 className="mt-5 text-[length:var(--text-display-md)]">{h.valueTitle}</h2>
            <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-stone">{h.valueBody}</p>
            <dl className="mt-10 space-y-7">
              {h.valuePoints.map((v, i) => {
                const Icon = valueIcons[i % valueIcons.length];
                return (
                  <div key={v.title} className="flex gap-5">
                    <span aria-hidden="true" className="grid size-12 shrink-0 place-items-center rounded-md bg-teal/10 text-teal-dark">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <dt className="text-lg font-semibold text-navy">{v.title}</dt>
                      <dd className="mt-1 text-stone">{v.body}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
          <div className="relative lg:col-span-6 lg:ps-6">
            <div className="relative">
              <div aria-hidden="true" className="absolute -inset-3 rounded-lg bg-teal/10 sm:-inset-5" />
              <Photo
                src={images.chefPass.src}
                alt={h.valueImageAlt}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="relative aspect-[4/5] rounded-md shadow-[0_30px_60px_-30px_rgba(16,43,54,0.45)]"
              />
            </div>
            <div className="relative -mt-10 ms-auto flex w-fit max-w-full items-center gap-4 rounded-md bg-white p-4 shadow-[0_20px_40px_-20px_rgba(16,43,54,0.35)] sm:-me-2 sm:p-5 lg:absolute lg:-bottom-8 lg:-end-8 lg:mt-0">
              <span aria-hidden="true" className="grid size-12 shrink-0 place-items-center rounded-full bg-teal/10 text-teal-dark">
                <MapPin className="size-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-semibold text-navy sm:whitespace-nowrap">{h.valueBadgeTitle}</p>
                <p className="mt-0.5 text-sm text-stone">{h.valueBadgeBody}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services index with a live preview panel; each service opens its own page */}
      <section className="border-y border-line bg-ivory-deep py-24 lg:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[44rem]">
              <p className="inline-flex rounded-full bg-teal/10 px-3.5 py-1 text-sm font-semibold text-teal-dark">{h.servicesLabel}</p>
              <h2 className="mt-5 text-[length:var(--text-display-md)]">{h.servicesTitle}</h2>
              <p className="mt-4 text-lg text-stone">{h.servicesBody}</p>
            </div>
            <TextLink href={lp("/services")}>{d.nav.allServices}</TextLink>
          </div>
          <div className="mt-14">
            <ServiceExplorer
              viewLabel={d.common.viewService}
              includesLabel={d.service.deliverablesTitle}
              groups={(["consultancy", "digital"] as const).map((cat) => ({
                label: cat === "consultancy" ? h.consultancyPillarTitle : h.digitalPillarTitle,
                items: servicesBy(cat).map((s) => ({
                  href: lp(servicePath(s)),
                  title: s.title[locale],
                  short: s.short[locale],
                  image: serviceCardImage(s, locale),
                  includes: s.deliverables.slice(0, 4).map((x) => x[locale]),
                })),
              }))}
            />
          </div>
        </Container>
      </section>
      {/* Free business analysis visit */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="on-dark relative isolate grid overflow-hidden rounded-md bg-navy text-ivory shadow-[0_40px_80px_-40px_rgba(11,31,39,0.6)] lg:grid-cols-12">
            <div aria-hidden="true" className="absolute -start-24 -top-24 -z-10 size-80 rounded-full bg-teal/25 blur-3xl" />
            <div className="p-8 sm:p-12 lg:col-span-7 lg:p-14">
              <p className="inline-flex items-center gap-2 rounded-full bg-teal-light/15 px-3.5 py-1 text-sm font-semibold text-teal-light">
                <Gift aria-hidden="true" className="size-4" strokeWidth={2} />
                {d.offer.label}
              </p>
              <h2 className="mt-5 text-[length:var(--text-display-md)] text-ivory">{d.offer.title}</h2>
              <p className="mt-4 max-w-[34rem] text-lg leading-relaxed text-ivory/80">{d.offer.body}</p>
              <ol className="mt-8 grid gap-4 sm:grid-cols-3">
                {d.offer.points.map((pt, i) => {
                  const Icon = offerIcons[i];
                  return (
                    <li key={pt} className="rounded-sm border border-ivory/12 bg-ivory/[0.04] p-4">
                      <Icon aria-hidden="true" className="size-5 text-teal-light" strokeWidth={1.75} />
                      <p className="mt-3 text-[0.95rem] font-semibold leading-snug text-ivory">{pt}</p>
                    </li>
                  );
                })}
              </ol>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href={lp("/contact?service=free-visit")} variant="accent">
                  {d.offer.cta}
                </ButtonLink>
                {wa && (
                  <ButtonLink href={wa} external variant="ghostLight">
                    {d.offer.whatsapp}
                  </ButtonLink>
                )}
                <span className="text-sm text-ivory/60">{d.offer.note}</span>
              </div>
            </div>
            <div className="relative min-h-64 lg:col-span-5">
              <Photo src="/images/services/dashboards-reporting-photo.jpg" alt={d.offer.imageAlt} sizes="(min-width: 1024px) 480px, 100vw" className="absolute inset-0" />
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-navy)_0%,rgba(16,43,54,0)_35%)] rtl:-scale-x-100 max-lg:bg-[linear-gradient(180deg,var(--color-navy)_0%,rgba(16,43,54,0)_40%)]" />
            </div>
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

const heroStrip = [
  { slug: "restaurant-operations", icon: Settings2 },
  { slug: "menu-engineering", icon: ChefHat },
  { slug: "food-costing", icon: ChartColumn },
  { slug: "staffing-training", icon: Users },
  { slug: "food-safety-compliance", icon: ShieldCheck },
  { slug: null, icon: MonitorSmartphone },
] as const;
const heroTrustIcons = [LayoutGrid, Languages, MapPin];
const tealText = "bg-[linear-gradient(180deg,#7fe0db_0%,#2fb8b4_100%)] bg-clip-text text-transparent";

function Hero({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const h = d.home;
  const img = images.heroBackground;
  return (
    <section className="on-dark relative isolate flex min-h-[calc(100svh-118px)] flex-col overflow-hidden bg-navy-deep text-ivory lg:max-h-[1000px]">
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
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,31,39,0.92)_0%,rgba(11,31,39,0.7)_34%,rgba(11,31,39,0.12)_62%,rgba(11,31,39,0)_100%)] rtl:-scale-x-100 max-lg:bg-[linear-gradient(180deg,rgba(11,31,39,0.35)_0%,rgba(11,31,39,0.8)_55%,rgba(11,31,39,0.95)_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-deep/80 to-transparent" />
      <Container className="flex flex-1 flex-col justify-end pb-12 pt-28 sm:pt-36 lg:justify-center lg:py-16">
        <p className="hero-rise flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-teal-light [:lang(ar)_&]:text-sm [:lang(ar)_&]:tracking-normal">
          <span aria-hidden="true" className="h-px w-10 bg-gold" />
          {h.heroEyebrow}
        </p>
        <h1 className="hero-rise mt-6 text-[length:var(--text-display-xl)] font-semibold leading-[0.95] text-ivory [animation-delay:60ms]">
          <span className="block [text-shadow:0_2px_24px_rgba(11,31,39,0.45)]">{h.heroTitle[0]}</span>
          <span className="block">
            <span className="sr-only">
              {h.heroTitle[1]} {h.heroWords[0]}
            </span>
            <span aria-hidden="true" className="inline-grid overflow-hidden pb-[0.08em] align-bottom">
              <span className={tealText}>{h.heroTitle[1]}&nbsp;</span>
            </span>
            <RotatingWord words={h.heroWords} wordClassName={tealText} />
          </span>
        </h1>
        <p className="hero-rise mt-7 max-w-[34rem] text-lg leading-relaxed text-ivory/90 [animation-delay:120ms] sm:text-xl">
          {h.heroBody}
        </p>
        <div className="hero-rise mt-9 flex flex-wrap gap-3 [animation-delay:220ms]">
          <ButtonLink href={`/${locale}/contact`} variant="gold">
            {h.heroPrimary}
            <span aria-hidden="true" className="rtl:-scale-x-100">→</span>
          </ButtonLink>
          <ButtonLink href={`/${locale}/services`} variant="ghostLight" className="backdrop-blur-sm">
            {h.heroSecondary}
          </ButtonLink>
        </div>
        <ul className="hero-rise mt-12 flex flex-wrap gap-x-8 gap-y-5 [animation-delay:300ms]">
          {h.heroTrust.map((item, i) => {
            const Icon = heroTrustIcons[i];
            return (
              <li key={item.label} className="flex items-center gap-3 sm:border-e sm:border-ivory/20 sm:pe-8 sm:last:border-0">
                <Icon aria-hidden="true" className="size-7 text-gold" strokeWidth={1.5} />
                <span>
                  <span className="block text-lg font-semibold leading-tight text-gold-light" dir="ltr">
                    {item.value}
                  </span>
                  <span className="block text-sm text-ivory/75">{item.label}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </Container>

      {/* Service strip along the bottom of the hero */}
      <nav aria-label={d.nav.services} className="border-t border-gold/25 bg-navy-deep/90 backdrop-blur-md">
        <Container>
          <ul className="grid grid-cols-3 lg:grid-cols-6">
            {heroStrip.map((s, i) => {
              const svc = s.slug ? findService(s.slug) : undefined;
              const href = svc ? `/${locale}${servicePath(svc)}` : `/${locale}/digital-solutions`;
              const Icon = s.icon;
              return (
                <li key={i} className="border-ivory/10 max-lg:[&:nth-child(-n+3)]:border-b lg:border-e lg:last:border-e-0 lg:first:border-s">
                  <Link href={href} className="group flex h-full flex-col items-center gap-3 px-2 py-6 text-center transition-colors hover:bg-ivory/5">
                    <Icon aria-hidden="true" className="size-7 text-gold transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                    <span className="text-[0.7rem] font-semibold uppercase leading-snug tracking-[0.14em] text-ivory/90 group-hover:text-gold-light [:lang(ar)_&]:text-sm [:lang(ar)_&]:tracking-normal">
                      {h.heroStrip[i]}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </nav>
    </section>
  );
}
