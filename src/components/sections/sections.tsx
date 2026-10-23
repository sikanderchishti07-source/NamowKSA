import Link from "next/link";
import type { ReactNode } from "react";
import { phoneHref, siteConfig, whatsappLink } from "@/config/site";
import type { ImageAsset } from "@/content/images";
import { images } from "@/content/images";
import type { Article, Block } from "@/content/insights";
import type { Service } from "@/content/services";
import { servicePath } from "@/content/services";
import type { FAQ } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/cn";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { Accordion } from "@/components/ui/Accordion";
import { Photo } from "@/components/ui/Photo";
import { Arrow, ButtonLink, Container, JsonLd, SectionHeading } from "@/components/ui/primitives";

const lp = (locale: Locale, p: string) => `/${locale}${p}`;

/* ───────── Breadcrumbs ───────── */
export function Breadcrumbs({ locale, trail }: { locale: Locale; trail: { name: string; path: string }[] }) {
  const d = getDictionary(locale);
  const items = [{ name: d.nav.home, path: "" }, ...trail];
  return (
    <>
      <nav aria-label={d.nav.breadcrumb} className="text-sm text-stone">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((it, i) => {
            const last = i === items.length - 1;
            return (
              <li key={it.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-charcoal">{it.name}</span>
                ) : (
                  <>
                    <Link href={lp(locale, it.path)} className="hover:text-teal-dark hover:underline">
                      {it.name}
                    </Link>
                    <span aria-hidden="true" className="text-line">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(items.map((it) => ({ name: it.name, path: lp(locale, it.path) })))} />
    </>
  );
}

/* ───────── Inner page hero ───────── */
export function PageHero({
  locale,
  trail,
  title,
  intro,
  image,
  kicker,
  aside,
}: {
  locale: Locale;
  trail: { name: string; path: string }[];
  title: string;
  intro?: string;
  image?: ImageAsset;
  kicker?: string;
  aside?: ReactNode;
}) {
  return (
    <section className="border-b border-line">
      <Container className={cn("grid gap-10 pb-14 pt-10 lg:gap-16 lg:pb-20 lg:pt-14", (image || aside) && "lg:grid-cols-12")}>
        <div className={cn((image || aside) && "lg:col-span-7")}>
          <Breadcrumbs locale={locale} trail={trail} />
          {kicker && <p className="mt-10 font-semibold text-teal-dark">{kicker}</p>}
          <h1 className={cn("max-w-[18ch] text-[length:var(--text-display-lg)]", kicker ? "mt-3" : "mt-10")}>{title}</h1>
          {intro && <p className="mt-7 max-w-[40rem] text-lg leading-relaxed text-stone sm:text-xl">{intro}</p>}
        </div>
        {image && (
          <div className="lg:col-span-5">
            <Photo
              src={image.src}
              alt={image.alt[locale]}
              sizes="(min-width: 1024px) 460px, 100vw"
              priority
              className="aspect-[4/5] w-full rounded-sm max-lg:aspect-[16/10]"
            />
          </div>
        )}
        {aside && !image && <div className="self-end lg:col-span-5">{aside}</div>}
      </Container>
    </section>
  );
}

/* ───────── Service index (editorial rows, not cards) ───────── */
export function ServiceIndex({ locale, services, withImages = false }: { locale: Locale; services: Service[]; withImages?: boolean }) {
  return (
    <ul className="border-t border-line">
      {services.map((s) => (
        <li key={s.slug} className="border-b border-line">
          <Link href={lp(locale, servicePath(s))} className="group grid items-center gap-x-8 gap-y-3 py-7 sm:grid-cols-12 sm:py-8">
            {withImages && (
              <Photo
                src={images[s.image].src}
                alt=""
                sizes="140px"
                className="hidden aspect-[4/3] rounded-sm sm:col-span-2 sm:block"
                imgClassName="transition-transform duration-700 group-hover:scale-[1.04]"
              />
            )}
            <h3 className={cn("text-[1.5rem] leading-tight transition-colors group-hover:text-teal-dark sm:text-[1.75rem]", withImages ? "sm:col-span-4" : "sm:col-span-5")}>
              {s.title[locale]}
            </h3>
            <p className={cn("text-stone", withImages ? "sm:col-span-5" : "sm:col-span-6")}>{s.short[locale]}</p>
            <span className="hidden justify-self-end text-teal-dark sm:col-span-1 sm:flex">
              <Arrow className="size-6 transition-transform duration-300 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ───────── FAQ ───────── */
export function FaqSection({ locale, faqs, title, className }: { locale: Locale; faqs: FAQ[]; title?: string; className?: string }) {
  const d = getDictionary(locale);
  const items = faqs.map((f) => ({ q: f.q[locale], a: f.a[locale] }));
  return (
    <section className={cn("py-20 lg:py-28", className)} aria-labelledby="faq-heading">
      <Container className="grid gap-10 lg:grid-cols-12">
        <h2 id="faq-heading" className="text-[length:var(--text-display-md)] lg:col-span-4">
          {title ?? d.common.faqTitle}
        </h2>
        <Accordion items={items} className="lg:col-span-8" />
      </Container>
      <JsonLd data={faqJsonLd(items)} />
    </section>
  );
}

/* ───────── Contact channels ───────── */
export function ContactChannels({ locale, tone = "dark" }: { locale: Locale; tone?: "dark" | "light" }) {
  const d = getDictionary(locale);
  const wa = whatsappLink(d.contact.whatsappMessage);
  const tel = phoneHref();
  const { email, phone } = siteConfig.contact;
  const items = [
    wa && { label: d.footer.whatsapp, value: d.common.whatsappUs, href: wa, external: true },
    tel && phone && { label: d.footer.call, value: phone, href: tel, ltr: true },
    email && { label: d.footer.email, value: email, href: `mailto:${email}` },
  ].filter(Boolean) as { label: string; value: string; href: string; external?: boolean; ltr?: boolean }[];
  if (!items.length) return null;
  return (
    <ul className="space-y-4">
      {items.map((it) => (
        <li key={it.label}>
          <p className={cn("text-sm", tone === "light" ? "text-ivory/60" : "text-stone")}>{it.label}</p>
          <a
            href={it.href}
            {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            dir={it.ltr ? "ltr" : undefined}
            className={cn("text-lg font-semibold underline-offset-4 hover:underline", tone === "light" ? "text-ivory" : "text-navy")}
          >
            {it.value}
          </a>
        </li>
      ))}
    </ul>
  );
}

/* ───────── Closing call to action ───────── */
export function CtaBand({ locale, title, body }: { locale: Locale; title?: string; body?: string }) {
  const d = getDictionary(locale);
  const wa = whatsappLink(d.contact.whatsappMessage);
  return (
    <section className="on-dark relative overflow-hidden bg-navy text-ivory">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 end-[-8rem] size-[34rem] rounded-full border border-ivory/[0.07]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 end-[-2rem] size-[22rem] rounded-full border border-teal/25" />
      <Container className="relative grid gap-10 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-8">
          <h2 className="max-w-[20ch] text-[length:var(--text-display-lg)] text-ivory">{title ?? d.home.ctaTitle}</h2>
          <p className="mt-6 max-w-[38rem] text-lg text-ivory/75">{body ?? d.home.ctaBody}</p>
        </div>
        <div className="flex flex-wrap items-end gap-3 lg:col-span-4 lg:justify-end">
          <ButtonLink href={lp(locale, "/contact")} variant="accent">{d.nav.book}</ButtonLink>
          {wa && (
            <ButtonLink href={wa} variant="ghostLight" external>
              {d.common.whatsappUs}
            </ButtonLink>
          )}
        </div>
      </Container>
    </section>
  );
}

/* ───────── Article teasers ───────── */
export function formatDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-SA-u-ca-gregory-nu-latn" : "en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${iso}T12:00:00Z`));
}

export function ArticleList({ locale, articles }: { locale: Locale; articles: Article[] }) {
  const d = getDictionary(locale);
  return (
    <ul className="grid gap-x-8 gap-y-14 md:grid-cols-3">
      {articles.map((a) => (
        <li key={a.slug}>
          <Link href={lp(locale, `/insights/${a.slug}`)} className="group block">
            <Photo
              src={images[a.image].src}
              alt=""
              sizes="(min-width: 768px) 33vw, 100vw"
              className="aspect-[3/2] rounded-sm"
              imgClassName="transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <p className="mt-5 flex items-center gap-3 text-sm text-stone">
              <time dateTime={a.date}>{formatDate(a.date, locale)}</time>
              <span aria-hidden="true" className="h-3.5 w-px bg-line" />
              <span>
                {a.minutes} {d.common.minutes}
              </span>
            </p>
            <h3 className="mt-2 text-[1.45rem] leading-snug transition-colors group-hover:text-teal-dark">{a.title[locale]}</h3>
            <p className="mt-3 text-stone">{a.excerpt[locale]}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ───────── Rich text blocks (articles, legal) ───────── */
export function Blocks({ blocks, locale }: { blocks: Block[]; locale: Locale }) {
  return (
    <div className="prose-copy max-w-[68ch] text-[1.075rem] leading-[1.8]">
      {blocks.map((b, i) => {
        if (b.type === "h2") return <h2 key={i}>{b.text[locale]}</h2>;
        if (b.type === "ul")
          return (
            <ul key={i}>
              {b.items.map((it) => (
                <li key={it.en}>{it[locale]}</li>
              ))}
            </ul>
          );
        return <p key={i}>{b.text[locale]}</p>;
      })}
    </div>
  );
}

/* ───────── Related services ───────── */
export function RelatedServices({ locale, services, title }: { locale: Locale; services: Service[]; title: string }) {
  if (!services.length) return null;
  return (
    <section className="border-t border-line py-20 lg:py-24">
      <Container>
        <SectionHeading title={title} />
        <div className="mt-10">
          <ServiceIndex locale={locale} services={services} withImages />
        </div>
      </Container>
    </section>
  );
}
