import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { activePackages } from "@/content/packages";
import { servicesBy } from "@/content/services";
import { getDictionary } from "@/i18n/get-dictionary";
import { resolveLocale } from "@/lib/route";
import { pageMetadata } from "@/lib/seo";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { Breadcrumbs, ContactChannels } from "@/components/sections/sections";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { deliveryChannels } from "@/lib/server/delivery";

export async function generateMetadata({ params }: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: "/contact", title: d.contact.title, description: d.contact.intro });
}

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  const booking = siteConfig.contact.bookingUrl;
  const location = siteConfig.contact.location[locale];
  // Until email or a CRM webhook is configured, the form hands the enquiry to WhatsApp instead.
  const whatsappOnly = deliveryChannels().length === 0 ? siteConfig.contact.whatsapp : undefined;

  const serviceOptions = [
    ...servicesBy("consultancy").map((s) => ({ value: s.slug, label: s.title[locale], group: d.nav.consultancy })),
    ...servicesBy("digital").map((s) => ({ value: s.slug, label: s.title[locale], group: d.nav.digital })),
  ];

  return (
    <section className="pb-24 pt-10 lg:pb-32 lg:pt-14">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Breadcrumbs locale={locale} trail={[{ name: d.contact.title, path: "/contact" }]} />
          <h1 className="mt-10 text-[length:var(--text-display-lg)]">{d.contact.title}</h1>
          <p className="mt-6 text-lg text-stone">{d.contact.intro}</p>
          <p className="mt-4 text-sm text-stone">{d.contact.responseNote}</p>

          {booking && (
            <div className="mt-10 rounded-sm bg-navy p-7 text-ivory on-dark">
              <h2 className="text-[1.5rem] text-ivory">{d.contact.bookTitle}</h2>
              <p className="mt-2 text-ivory/75">{d.contact.bookBody}</p>
              <ButtonLink href={booking} external variant="accent" className="mt-5">
                {d.contact.bookCta}
              </ButtonLink>
            </div>
          )}

          <div className="mt-10 border-t border-line pt-8">
            <h2 className="text-sm font-semibold text-sage-dark [font-family:var(--font-sans)]">{d.contact.otherWays}</h2>
            <div className="mt-5">
              <ContactChannels locale={locale} />
            </div>
            {location && <p className="mt-6 text-stone">{location}</p>}
          </div>
        </div>

        <div className="lg:col-span-8 lg:col-start-5">
          <div className="rounded-sm border border-line bg-white p-6 sm:p-10">
            <h2 className="text-[length:var(--text-display-sm)]">{d.form.legend}</h2>
            <p className="mb-8 mt-2 text-sm text-stone">{d.form.allRequired}</p>
            <ConsultationForm locale={locale} t={d.form} serviceOptions={serviceOptions} packageOptions={activePackages.map((p) => ({ value: p.id, label: p.name[locale] }))} privacyHref={`/${locale}/privacy`} whatsappNumber={whatsappOnly} />
          </div>
        </div>
      </Container>
    </section>
  );
}
