import type { Metadata } from "next";
import { images } from "@/content/images";
import { getDictionary } from "@/i18n/get-dictionary";
import { resolveLocale } from "@/lib/route";
import { pageMetadata } from "@/lib/seo";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";
import { CtaBand, PageHero } from "@/components/sections/sections";

export async function generateMetadata({ params }: PageProps<"/[locale]/about">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  return pageMetadata({ locale, path: "/about", title: d.nav.about, description: d.about.intro });
}

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const locale = await resolveLocale(params);
  const d = getDictionary(locale);
  const a = d.about;

  return (
    <>
      <PageHero locale={locale} trail={[{ name: d.nav.about, path: "/about" }]} title={a.title} intro={a.intro} image={images.diningRoom} />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <h2 className="text-[length:var(--text-display-md)] lg:col-span-4">{a.storyTitle}</h2>
          <div className="space-y-6 text-lg leading-relaxed lg:col-span-7 lg:col-start-6">
            {a.story.map((p, i) => (
              <p key={i} className={i === 0 ? "text-xl text-navy" : "text-charcoal"}>
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-ivory-deep/60 py-20 lg:py-28">
        <Container>
          <h2 className="text-[length:var(--text-display-md)]">{a.principlesTitle}</h2>
          <dl className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {a.principles.map((p) => (
              <div key={p.title} className="border-t border-navy/20 pt-6">
                <dt className="font-[family-name:var(--font-display)] text-[1.6rem] text-navy">{p.title}</dt>
                <dd className="mt-3 max-w-lg text-stone">{p.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <Photo src={images.spices.src} alt={images.spices.alt[locale]} sizes="(min-width: 1024px) 520px, 100vw" className="aspect-[4/3] rounded-sm lg:col-span-5" />
          <div className="space-y-12 lg:col-span-6 lg:col-start-7">
            <div>
              <h2 className="text-[length:var(--text-display-sm)]">{a.scopeTitle}</h2>
              <p className="mt-4 text-lg text-stone">{a.scopeBody}</p>
            </div>
            <div>
              <h2 className="text-[length:var(--text-display-sm)]">{a.notTitle}</h2>
              <p className="mt-4 text-lg text-stone">{a.notBody}</p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
