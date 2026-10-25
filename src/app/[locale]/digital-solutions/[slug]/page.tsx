import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, servicesBy } from "@/content/services";
import { images } from "@/content/images";
import { resolveLocale } from "@/lib/route";
import { PageSkeleton } from "@/components/ui/PageSkeleton";
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

// Route params are read inside <Suspense> so client navigation between
// slugs shows the skeleton instantly instead of blocking.
export default function DigitalServicePage({ params }: PageProps<"/[locale]/digital-solutions/[slug]">) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <DigitalServicePageContent params={params} />
    </Suspense>
  );
}

async function DigitalServicePageContent({ params }: { params: PageProps<"/[locale]/digital-solutions/[slug]">["params"] }) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const service = getService("digital", slug);
  if (!service) notFound();
  return <ServiceDetail locale={locale} service={service} />;
}
