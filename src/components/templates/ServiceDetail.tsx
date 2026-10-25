import { images } from "@/content/images";
import { findService, servicePath, type Service } from "@/content/services";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Photo } from "@/components/ui/Photo";
import { ButtonLink, Container, JsonLd } from "@/components/ui/primitives";
import { Breadcrumbs, CtaBand, FaqSection, RelatedServices } from "@/components/sections/sections";
import { ServiceDemo } from "@/components/visuals/Demos";
import { absoluteUrl } from "@/lib/seo";

export function ServiceDetail({ locale, service }: { locale: Locale; service: Service }) {
  const d = getDictionary(locale);
  const lp = (p: string) => `/${locale}${p}`;
  const isDigital = service.category === "digital";
  const parent = isDigital ? { name: d.nav.digital, path: "/digital-solutions" } : { name: d.nav.services, path: "/services" };
  const related = service.related.map(findService).filter((s): s is Service => Boolean(s));
  const img = images[service.image];
  const enquireHref = `${lp("/contact")}?service=${service.slug}`;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <Container className="grid gap-12 pb-16 pt-10 lg:grid-cols-12 lg:gap-16 lg:pb-24 lg:pt-14">
          <div className="lg:col-span-6 lg:pt-4">
            <Breadcrumbs locale={locale} trail={[parent, { name: service.title[locale], path: servicePath(service) }]} />
            <p className="mt-10 font-semibold text-teal-dark">{service.title[locale]}</p>
            <h1 className="mt-3 max-w-[16ch] text-[length:var(--text-display-lg)]">{service.headline[locale]}</h1>
            <p className="mt-7 max-w-[38rem] text-lg leading-relaxed text-stone">{service.intro[locale]}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href={enquireHref}>{d.common.enquire}</ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-6">
            {isDigital && service.visual ? (
              <div className="relative">
                <Photo
                  src={img.src}
                  alt={img.alt[locale]}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  priority
                  className="absolute inset-0 hidden rounded-sm opacity-90 lg:block"
                />
                <div className="relative bg-ivory-deep/60 p-4 sm:p-8 lg:my-10 lg:ms-12 lg:bg-transparent lg:p-0">
                  <ServiceDemo visual={service.visual} locale={locale} sampleLabel={d.common.sampleData} sampleNote={d.common.sampleDataNote} />
                </div>
              </div>
            ) : (
              <Photo
                src={img.src}
                alt={img.alt[locale]}
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
                className="aspect-[4/3] w-full rounded-sm lg:aspect-[5/6]"
              />
            )}
          </div>
        </Container>
      </section>

      {/* Problems */}
      <section className="py-20 lg:py-28">
        <Container className="grid gap-10 lg:grid-cols-12">
          <h2 className="text-[length:var(--text-display-md)] lg:col-span-4">{d.service.problemsTitle}</h2>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {service.problems.map((p) => (
              <li key={p.en} className="border-t border-line py-6 text-lg leading-relaxed text-charcoal">
                {p[locale]}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Approach: a genuine sequence, so numbered */}
      <section className="on-dark bg-navy py-20 text-ivory lg:py-28">
        <Container>
          <h2 className="text-[length:var(--text-display-md)] text-ivory">{d.service.approachTitle}</h2>
          <ol className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {service.approach.map((step, i) => (
              <li key={step.title.en} className="border-t border-ivory/20 pt-6">
                <span className="font-[family-name:var(--font-display-latin)] text-4xl text-teal-light font-semibold tabular-nums" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-[1.4rem] text-ivory">{step.title[locale]}</h3>
                <p className="mt-3 text-ivory/70">{step.body[locale]}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Deliverables + benefits */}
      <section className="py-20 lg:py-28">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-[length:var(--text-display-md)]">{d.service.deliverablesTitle}</h2>
            <ul className="mt-8 space-y-0">
              {service.deliverables.map((x) => (
                <li key={x.en} className="flex gap-4 border-b border-line py-4">
                  <svg viewBox="0 0 20 20" className="mt-1 size-5 shrink-0 text-teal" aria-hidden="true">
                    <path d="m4.5 10.5 3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{x[locale]}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm bg-ivory-deep p-8 sm:p-10 lg:col-span-5 lg:col-start-8">
            <h2 className="text-[length:var(--text-display-sm)]">{d.service.benefitsTitle}</h2>
            <ul className="mt-6 space-y-4">
              {service.benefits.map((b) => (
                <li key={b.en} className="flex gap-3">
                  <span className="mt-[0.75em] h-px w-4 shrink-0 bg-teal-dark" aria-hidden="true" />
                  <span>{b[locale]}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-line pt-5 text-sm text-stone">{d.service.benefitsNote}</p>
          </div>
        </Container>
      </section>

      {service.faqs.length > 0 && <FaqSection locale={locale} faqs={service.faqs} className="border-t border-line" />}

      <RelatedServices locale={locale} services={related} title={d.common.relatedServices} />

      <CtaBand locale={locale} title={d.service.ctaTitle} body={d.service.ctaBody} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title[locale],
          description: service.seoDescription[locale],
          serviceType: isDigital ? d.service.digitalLabel : d.service.consultancyLabel,
          areaServed: { "@type": "Country", name: "Saudi Arabia" },
          provider: { "@id": `${absoluteUrl("")}/#organization` },
          url: absoluteUrl(lp(servicePath(service))),
          inLanguage: locale,
        }}
      />
    </>
  );
}
