import { consultancyServices } from "./consultancy";
import { digitalServices } from "./digital";
import type { Service, ServiceCategory } from "./types";

export type { Service, ServiceCategory, ServiceVisual } from "./types";

export const allServices: Service[] = [...consultancyServices, ...digitalServices].filter((s) => s.enabled);

export function servicesBy(category: ServiceCategory): Service[] {
  return allServices.filter((s) => s.category === category);
}

export function getService(category: ServiceCategory, slug: string): Service | undefined {
  return allServices.find((s) => s.category === category && s.slug === slug);
}

export function findService(slug: string): Service | undefined {
  return allServices.find((s) => s.slug === slug);
}

/** Public path for a service, without locale prefix. */
export function servicePath(service: Pick<Service, "category" | "slug">): string {
  return service.category === "consultancy" ? `/services/${service.slug}` : `/digital-solutions/${service.slug}`;
}

/**
 * Preview image for the homepage services panel, in public/images/services/.
 * Consultancy services use a photograph (<slug>.jpg). Digital services use a
 * picture of their own sample screen (<slug>-screen.jpg, Arabic <slug>-screen-ar.jpg).
 */
export function serviceCardImage(service: Pick<Service, "slug" | "category">, locale: "en" | "ar"): string {
  if (service.category === "digital") return `/images/services/${service.slug}-screen${locale === "ar" ? "-ar" : ""}.jpg`;
  return `/images/services/${service.slug}.jpg`;
}
