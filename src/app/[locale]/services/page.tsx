import type { Metadata } from "next";
import { images } from "@/content/images";
import { servicesBy } from "@/content/services";
import { getDictionary } from "@/i18n/get-dictionary";
import { resolveLocale } from "@/lib/route";
import { pageMetadata } from "@/lib/seo";
import { ButtonLink, Container, SectionHeading } from "@/components/ui/primitives";
import { CtaBand, PageHero, ServiceIndex } from "@/components/sections/sections";

export async function generateMetadata({ params }: PageProps<"/[locale]/services">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: "/services", title: d.services.title, description: d.services.intro });
}

export default async function ServicesPage({ params }: PageProps<"/[locale]/services">) {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  const lp = (p: string) => `/${locale}${p}`;

  return (
    <>
      <PageHero locale={locale} trail={[{ name: d.services.title, path: "/services" }]} title={d.services.title} intro={d.services.intro} image={images.kitchenPots} />

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading title={d.services.consultancyTitle} body={d.services.consultancyBody} />
          <div className="mt-12">
            <ServiceIndex locale={locale} services={servicesBy("consultancy")} withImages />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-ivory-deep/60 py-20 lg:py-28">
        <Container>
          <SectionHeading title={d.services.digitalTitle} body={d.services.digitalBody} />
          <div className="mt-12">
            <ServiceIndex locale={locale} services={servicesBy("digital")} withImages />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid items-center gap-8 border-y border-line py-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="text-[length:var(--text-display-sm)]">{d.services.notSureTitle}</h2>
            <p className="mt-3 max-w-2xl text-stone">{d.services.notSureBody}</p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <ButtonLink href={lp("/contact")}>{d.nav.book}</ButtonLink>
          </div>
        </Container>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
