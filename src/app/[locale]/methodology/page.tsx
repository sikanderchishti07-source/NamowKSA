import type { Metadata } from "next";
import { methodology } from "@/content/methodology";
import { getDictionary } from "@/i18n/get-dictionary";
import { resolveLocale } from "@/lib/route";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/primitives";
import { CtaBand, PageHero } from "@/components/sections/sections";

export async function generateMetadata({ params }: PageProps<"/[locale]/methodology">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: "/methodology", title: d.methodology.title, description: d.methodology.intro });
}

export default async function MethodologyPage({ params }: PageProps<"/[locale]/methodology">) {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  const m = d.methodology;

  return (
    <>
      <PageHero
        locale={locale}
        trail={[{ name: d.nav.methodology, path: "/methodology" }]}
        title={m.title}
        intro={m.intro}
        aside={
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-[family-name:var(--font-display)] text-xl text-navy">
            {methodology.map((s, i) => (
              <span key={s.id} className="inline-flex items-center gap-3">
                {s.name[locale]}
                {i < methodology.length - 1 && (
                  <svg viewBox="0 0 20 20" className="size-4 text-teal rtl:-scale-x-100" aria-hidden="true">
                    <path d="M4 10h11m0 0-4-4m4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                )}
              </span>
            ))}
          </p>
        }
      />

      <section className="py-20 lg:py-28">
        <Container>
          <ol className="relative">
            {methodology.map((stage, i) => (
              <li key={stage.id} className="grid gap-6 border-b border-line py-12 first:pt-0 lg:grid-cols-12 lg:gap-12">
                <div className="flex items-baseline gap-5 lg:col-span-4">
                  <span className="font-[family-name:var(--font-display-latin)] text-5xl font-light text-teal tabular-nums [font-variation-settings:'opsz'_144]" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-[length:var(--text-display-sm)]">{stage.name[locale]}</h2>
                    <p className="mt-2 text-stone">{stage.summary[locale]}</p>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="text-sm font-semibold text-sage-dark [font-family:var(--font-sans)]">{m.activitiesLabel}</h3>
                  <ul className="mt-3 space-y-2">
                    {stage.activities.map((a) => (
                      <li key={a.en} className="flex gap-3">
                        <span className="mt-[0.75em] h-px w-3 shrink-0 bg-teal-dark" aria-hidden="true" />
                        {a[locale]}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-sm font-semibold text-sage-dark [font-family:var(--font-sans)]">{m.outputsLabel}</h3>
                  <ul className="mt-3 space-y-2">
                    {stage.outputs.map((o) => (
                      <li key={o.en} className="font-semibold text-navy">
                        {o[locale]}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line bg-ivory-deep/60 py-20">
        <Container className="grid gap-10 lg:grid-cols-12">
          <h2 className="text-[length:var(--text-display-sm)] lg:col-span-4">{m.principlesTitle}</h2>
          <ul className="space-y-5 text-lg lg:col-span-8">
            {m.principles.map((p) => (
              <li key={p} className="border-b border-line pb-5">
                {p}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
