import type { Metadata } from "next";
import { servicePath, servicesBy } from "@/content/services";
import { getDictionary } from "@/i18n/get-dictionary";
import { resolveLocale } from "@/lib/route";
import { pageMetadata } from "@/lib/seo";
import { Container, TextLink } from "@/components/ui/primitives";
import { CtaBand, PageHero } from "@/components/sections/sections";
import { ServiceDemo } from "@/components/visuals/Demos";
import { cn } from "@/lib/cn";

export async function generateMetadata({ params }: PageProps<"/[locale]/digital-solutions">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: "/digital-solutions", title: d.digital.title, description: d.digital.intro });
}

export default async function DigitalPage({ params }: PageProps<"/[locale]/digital-solutions">) {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  const lp = (p: string) => `/${locale}${p}`;
  const services = servicesBy("digital");

  return (
    <>
      <PageHero locale={locale} trail={[{ name: d.nav.digital, path: "/digital-solutions" }]} title={d.digital.title} intro={d.digital.intro} />

      {services.map((s, i) => (
        <section key={s.slug} className={cn("py-20 lg:py-28", i % 2 === 1 && "bg-ivory-deep/60", i > 0 && "border-t border-line")}>
          <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className={cn("lg:col-span-5", i % 2 === 1 && "lg:order-2 lg:col-start-8")}>
              <h2 className="text-[length:var(--text-display-md)]">{s.title[locale]}</h2>
              <p className="mt-5 text-lg text-stone">{s.intro[locale]}</p>
              <ul className="mt-7 space-y-2.5">
                {s.benefits.slice(0, 3).map((b) => (
                  <li key={b.en} className="flex gap-3">
                    <span className="mt-[0.75em] h-px w-4 shrink-0 bg-teal-dark" aria-hidden="true" />
                    {b[locale]}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-6">
                <TextLink href={lp(servicePath(s))}>{d.common.viewService}</TextLink>
                <TextLink href={`${lp("/contact")}?service=${s.slug}`}>{d.common.enquire}</TextLink>
              </div>
            </div>
            <div className={cn("lg:col-span-7", i % 2 === 1 && "lg:order-1 lg:col-start-1")}>
              {s.visual && <ServiceDemo visual={s.visual} locale={locale} sampleLabel={d.common.sampleData} sampleNote={d.common.sampleDataNote} />}
            </div>
          </Container>
        </section>
      ))}

      <section className="on-dark bg-navy-deep py-20 text-ivory lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-[length:var(--text-display-md)] text-ivory">{d.digital.transformTitle}</h2>
            <p className="mt-6 text-lg text-ivory/75">{d.digital.transformBody}</p>
          </div>
          <ol className="space-y-0 lg:col-span-5 lg:col-start-8">
            {d.digital.transformPoints.map((p, i) => (
              <li key={p} className="flex gap-5 border-b border-ivory/15 py-5">
                <span className="font-[family-name:var(--font-display-latin)] text-2xl text-teal-light tabular-nums" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="text-ivory/85">{p}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
