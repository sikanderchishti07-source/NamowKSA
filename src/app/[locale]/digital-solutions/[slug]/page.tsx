import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, servicesBy } from "@/content/services";
import { images } from "@/content/images";
import { resolveLocale } from "@/lib/route";
import { pageMetadata } from "@/lib/seo";
import { ServiceDetail } from "@/components/templates/ServiceDetail";

export function generateStaticParams() {
  return servicesBy("digital").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/digital-solutions/[slug]">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const service = getService("digital", slug);
  if (!service) return {};
  return pageMetadata({
    locale,
    path: `/digital-solutions/${slug}`,
    title: service.title[locale],
    description: service.seoDescription[locale],
    image: `${images[service.image].src}?auto=format&fit=crop&w=1200&h=630&q=70`,
  });
}

export default async function DigitalServicePage({ params }: PageProps<"/[locale]/digital-solutions/[slug]">) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const service = getService("digital", slug);
  if (!service) notFound();
  return <ServiceDetail locale={locale} service={service} />;
}
