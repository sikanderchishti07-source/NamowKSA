import type { Metadata } from "next";
import Link from "next/link";
import { activePackages } from "@/content/packages";
import { findService, servicePath, type Service } from "@/content/services";
import { getDictionary } from "@/i18n/get-dictionary";
import { resolveLocale } from "@/lib/route";
import { pageMetadata } from "@/lib/seo";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { CtaBand, PageHero } from "@/components/sections/sections";

export async function generateMetadata({ params }: PageProps<"/[locale]/packages">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: "/packages", title: d.packages.title, description: d.packages.intro });
}

export default async function PackagesPage({ params }: PageProps<"/[locale]/packages">) {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  const p = d.packages;
  const lp = (x: string) => `/${locale}${x}`;

  return (
    <>
      <PageHero locale={locale} trail={[{ name: d.nav.packages, path: "/packages" }]} title={p.title} intro={p.intro} />

      <section className="py-20 lg:py-24">
        <Container>
          <ul className="space-y-6">
            {activePackages.map((pkg) => {
              const services = pkg.services.map(findService).filter((s): s is Service => Boolean(s));
              return (
                <li key={pkg.id} id={pkg.id} className="grid gap-8 rounded-sm border border-line bg-white p-7 sm:p-10 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-4">
                    <h2 className="text-[length:var(--text-display-sm)]">{pkg.name[locale]}</h2>
                    <p className="mt-3 text-stone">{pkg.summary[locale]}</p>
                    {services.length > 0 && (
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link href={lp(servicePath(s))} className="inline-block rounded-full border border-line px-3 py-1 text-sm hover:border-teal hover:text-teal-dark">
                              {s.title[locale]}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="text-sm font-semibold text-sage-dark [font-family:var(--font-sans)]">{p.forWhom}</h3>
                    <p className="mt-2 text-charcoal">{pkg.forWhom[locale]}</p>
                    <h3 className="mt-6 text-sm font-semibold text-sage-dark [font-family:var(--font-sans)]">{p.scope}</h3>
                    <ul className="mt-2 space-y-2">
                      {pkg.scope.map((s) => (
                        <li key={s.en} className="flex gap-3">
                          <span className="mt-[0.75em] h-px w-3 shrink-0 bg-teal-dark" aria-hidden="true" />
                          {s[locale]}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between gap-6 border-line lg:col-span-3 lg:border-s lg:ps-8">
                    <div>
                      <h3 className="text-sm font-semibold text-sage-dark [font-family:var(--font-sans)]">{p.nextStep}</h3>
                      <p className="mt-2 text-charcoal">{pkg.nextStep[locale]}</p>
                    </div>
                    <ButtonLink href={`${lp("/contact")}?package=${pkg.id}`} variant="secondary">
                      {d.common.discussPackage}
                    </ButtonLink>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-10 max-w-3xl border-s-2 border-teal ps-5 text-stone">{p.pricingNote}</p>
        </Container>
      </section>

      <section className="border-t border-line bg-ivory-deep/60 py-20 lg:py-28">
        <Container>
          <h2 className="text-[length:var(--text-display-md)]">{p.modelsTitle}</h2>
          <dl className="mt-12 grid gap-10 md:grid-cols-3">
            {p.models.map((m) => (
              <div key={m.title} className="border-t border-navy/20 pt-6">
                <dt className="font-[family-name:var(--font-display)] text-[1.5rem] text-navy">{m.title}</dt>
                <dd className="mt-3 text-stone">{m.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
