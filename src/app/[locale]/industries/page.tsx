import type { Metadata } from "next";
import Link from "next/link";
import { images } from "@/content/images";
import { segments } from "@/content/segments";
import { findService, servicePath, type Service } from "@/content/services";
import { getDictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/cn";
import { resolveLocale } from "@/lib/route";
import { pageMetadata } from "@/lib/seo";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";
import { CtaBand, PageHero } from "@/components/sections/sections";

export async function generateMetadata({ params }: PageProps<"/[locale]/industries">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: "/industries", title: d.industries.title, description: d.industries.intro });
}

export default async function IndustriesPage({ params }: PageProps<"/[locale]/industries">) {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  const lp = (p: string) => `/${locale}${p}`;

  return (
    <>
      <PageHero locale={locale} trail={[{ name: d.industries.title, path: "/industries" }]} title={d.industries.title} intro={d.industries.intro} />

      {segments.map((s, i) => {
        const services = s.services.map(findService).filter((x): x is Service => Boolean(x));
        return (
          <section key={s.id} id={s.id} className={cn("scroll-mt-24 py-20 lg:py-24", i > 0 && "border-t border-line")}>
            <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <Photo
                src={images[s.image].src}
                alt={images[s.image].alt[locale]}
                sizes="(min-width: 1024px) 480px, 100vw"
                className={cn("aspect-[4/3] rounded-sm lg:col-span-5", i % 2 === 1 && "lg:order-2 lg:col-start-8")}
              />
              <div className={cn("lg:col-span-6", i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-7")}>
                <h2 className="text-[length:var(--text-display-md)]">{s.name[locale]}</h2>
                <p className="mt-4 text-lg text-stone">{s.summary[locale]}</p>
                <h3 className="mt-8 text-sm font-semibold text-sage-dark [font-family:var(--font-sans)]">{d.industries.prioritiesLabel}</h3>
                <ul className="mt-3 space-y-2">
                  {s.priorities.map((p) => (
                    <li key={p.en} className="flex gap-3">
                      <span className="mt-[0.75em] h-px w-3 shrink-0 bg-teal-dark" aria-hidden="true" />
                      {p[locale]}
                    </li>
                  ))}
                </ul>
                <h3 className="mt-8 text-sm font-semibold text-sage-dark [font-family:var(--font-sans)]">{d.industries.servicesLabel}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {services.map((sv) => (
                    <li key={sv.slug}>
                      <Link href={lp(servicePath(sv))} className="inline-block rounded-full border border-line bg-white px-3 py-1 text-sm hover:border-teal hover:text-teal-dark">
                        {sv.title[locale]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </section>
        );
      })}

      <CtaBand locale={locale} />
    </>
  );
}
