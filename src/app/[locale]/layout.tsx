import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { siteConfig } from "@/config/site";
import { dirOf, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { fontVariables } from "@/lib/fonts";
import { organizationJsonLd } from "@/lib/seo";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Preloader } from "@/components/layout/Preloader";
import { JsonLd } from "@/components/ui/primitives";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: "NamowKSA",
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#102B36",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);

  return (
    <html lang={locale} dir={dirOf(locale)} className={fontVariables}>
      <body className="min-h-dvh">
        <Preloader />
        <a
          href="#main"
          className="fixed start-4 top-3 z-[60] -translate-y-24 rounded-sm bg-navy px-4 py-3 font-semibold text-ivory transition-transform focus:translate-y-0"
        >
          {d.nav.skip}
        </a>
        <Header locale={locale} />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer locale={locale} />
        <JsonLd data={organizationJsonLd(locale)} />
      </body>
    </html>
  );
}
