import type { FAQ, L } from "../types";
import type { ImageKey } from "../images";

export type ServiceCategory = "consultancy" | "digital";
export type ServiceVisual = "qr" | "website" | "dashboard" | "automation";

export type Service = {
  slug: string;
  category: ServiceCategory;
  /** Set to false to remove a service from navigation, listings, sitemap and routing. */
  enabled: boolean;
  image: ImageKey;
  /** Digital services show a designed demonstration instead of a photograph. */
  visual?: ServiceVisual;
  title: L;
  short: L;
  headline: L;
  intro: L;
  problems: L[];
  approach: { title: L; body: L }[];
  deliverables: L[];
  benefits: L[];
  faqs: FAQ[];
  related: string[];
  seoDescription: L;
};
