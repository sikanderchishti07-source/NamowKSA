import Link from "next/link";
import { phoneHref, siteConfig, whatsappLink } from "@/config/site";
import { servicesBy, servicePath } from "@/content/services";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/primitives";

async function copyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const lp = (p: string) => `/${locale}${p}`;
  const year = await copyrightYear();
  const { email, phone, location } = siteConfig.contact;
  const wa = whatsappLink(d.contact.whatsappMessage);
  const tel = phoneHref();
  const loc = location[locale];

  const columns = [
    { span: "lg:col-span-3", title: d.nav.consultancy, links: servicesBy("consultancy").map((s) => ({ href: lp(servicePath(s)), label: s.title[locale] })) },
    { span: "lg:col-span-2", title: d.nav.digital, links: servicesBy("digital").map((s) => ({ href: lp(servicePath(s)), label: s.title[locale] })) },
    {
      span: "lg:col-span-2",
      title: d.footer.company,
      links: [
        { href: lp("/about"), label: d.nav.about },
        { href: lp("/packages"), label: d.nav.packages },
        { href: lp("/methodology"), label: d.nav.methodology },
        { href: lp("/industries"), label: d.nav.industries },
        { href: lp("/case-studies"), label: d.nav.caseStudies },
        { href: lp("/insights"), label: d.nav.insights },
        { href: lp("/contact"), label: d.nav.contact },
      ],
    },
  ];

  return (
    <footer className="on-dark bg-navy-deep text-ivory/80">
      <Container className="grid gap-12 pb-12 pt-20 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <Link href={lp("")} aria-label="NamowKSA">
            <Logo tone="light" />
          </Link>
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-ivory/65">{d.footer.tagline}</p>

          {(email || tel || wa || loc) && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold text-sage-light [font-family:var(--font-sans)]">{d.footer.contact}</h2>
              <ul className="mt-3 space-y-2 text-[0.95rem]">
                {wa && (
                  <li>
                    <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      {d.footer.whatsapp}
                    </a>
                  </li>
                )}
                {tel && phone && (
                  <li>
                    <a href={tel} className="hover:text-white" dir="ltr">
                      {phone}
                    </a>
                  </li>
                )}
                {email && (
                  <li>
                    <a href={`mailto:${email}`} className="hover:text-white">
                      {email}
                    </a>
                  </li>
                )}
                {loc && <li className="text-ivory/60">{loc}</li>}
              </ul>
            </div>
          )}
        </div>

        {columns.map((col) => (
          <div key={col.title} className={col.span}>
            <h2 className="text-sm font-semibold text-sage-light [font-family:var(--font-sans)]">{col.title}</h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ivory/75 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-sage-light [font-family:var(--font-sans)]">{d.footer.legal}</h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            <li><Link href={lp("/privacy")} className="text-ivory/75 hover:text-white">{d.footer.privacy}</Link></li>
            <li><Link href={lp("/terms")} className="text-ivory/75 hover:text-white">{d.footer.terms}</Link></li>
            <li><Link href={lp("/cookies")} className="text-ivory/75 hover:text-white">{d.footer.cookies}</Link></li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-4 border-t border-ivory/10 py-7 text-sm text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} NamowKSA. {d.footer.rights}
        </p>
        {siteConfig.social.length > 0 && (
          <ul className="flex flex-wrap gap-5" aria-label={d.footer.social}>
            {siteConfig.social.map((s) => (
              <li key={s.key}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </footer>
  );
}
