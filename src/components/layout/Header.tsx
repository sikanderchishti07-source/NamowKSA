import { servicesBy, servicePath } from "@/content/services";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { HeaderClient, type NavData } from "./HeaderClient";

export function Header({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const lp = (p: string) => `/${locale}${p}`;
  const toItem = (s: ReturnType<typeof servicesBy>[number]) => ({
    href: lp(servicePath(s)),
    label: s.title[locale],
    short: s.short[locale],
  });

  const data: NavData = {
    locale,
    homeHref: lp(""),
    labels: {
      services: d.nav.services,
      consultancy: d.nav.consultancy,
      digital: d.nav.digital,
      allServices: d.nav.allServices,
      allDigital: d.nav.allDigital,
      book: d.nav.book,
      openMenu: d.nav.openMenu,
      closeMenu: d.nav.closeMenu,
      mainNav: d.nav.mainNav,
      switchLanguage: d.nav.switchLanguage,
      switchLanguageLabel: d.nav.switchLanguageLabel,
      home: d.nav.home,
    },
    servicesHref: lp("/services"),
    digitalHref: lp("/digital-solutions"),
    bookHref: lp("/contact"),
    consultancy: servicesBy("consultancy").map(toItem),
    digital: servicesBy("digital").map(toItem),
    links: [
      { href: lp("/packages"), label: d.nav.packages },
      { href: lp("/methodology"), label: d.nav.methodology },
      { href: lp("/industries"), label: d.nav.industries },
      { href: lp("/insights"), label: d.nav.insights },
      { href: lp("/about"), label: d.nav.about },
    ],
    secondary: [
      { href: lp("/case-studies"), label: d.nav.caseStudies },
      { href: lp("/contact"), label: d.nav.contact },
    ],
  };

  return <HeaderClient data={data} />;
}
