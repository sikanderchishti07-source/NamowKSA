import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, servicesBy } from "@/content/services";
import { images } from "@/content/images";
import { resolveLocale } from "@/lib/route";
import { pageMetadata } from "@/lib/seo";
import { ServiceDetail } from "@/components/templates/ServiceDetail";

export function generateStaticParams() {
  return servicesBy("consultancy").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/services/[slug]">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const service = getService("consultancy", slug);
  if (!service) return {};
  return pageMetadata({
    locale,
    path: `/services/${slug}`,
    title: service.title[locale],
    description: service.seoDescription[locale],
    image: `${images[service.image].src}?auto=format&fit=crop&w=1200&h=630&q=70`,
  });
}

export default async function ConsultancyServicePage({ params }: PageProps<"/[locale]/services/[slug]">) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const service = getService("consultancy", slug);
  if (!service) notFound();
  return <ServiceDetail locale={locale} service={service} />;
}
