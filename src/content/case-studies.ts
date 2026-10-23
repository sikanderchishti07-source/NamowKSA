import type { L } from "./types";
import type { ImageKey } from "./images";

/**
 * Case studies. Intentionally empty: add entries only with genuine,
 * client-approved information. While this list is empty the homepage section
 * is hidden and the case studies page explains what will be published.
 */
export type CaseStudy = {
  slug: string;
  client: L; // or an anonymised description, e.g. "A 6-branch café group in Riyadh"
  segment: L;
  challenge: L;
  approach: L;
  outcome: L; // measured results with baseline and period
  services: string[];
  image: ImageKey;
  clientApproved: boolean;
};

export const caseStudies: CaseStudy[] = [];

export const publishedCaseStudies = caseStudies.filter((c) => c.clientApproved);

/**
 * Testimonials. Add only authentic, attributable testimonials with the
 * client's written permission. The section is hidden while this list is empty.
 */
export type Testimonial = { quote: L; name: string; role: L; business: L; approved: boolean };

export const testimonials: Testimonial[] = [];

export const publishedTestimonials = testimonials.filter((t) => t.approved);
