/**
 * Business configuration. Contact channels are read from environment
 * variables so they can be changed without touching code. Any channel left
 * empty is hidden from the site rather than shown with placeholder data.
 */

function clean(value: string | undefined): string | undefined {
  const v = value?.trim();
  return v ? v : undefined;
}

function digitsOnly(value: string | undefined): string | undefined {
  const v = clean(value)?.replace(/[^\d]/g, "");
  return v ? v : undefined;
}

export const siteConfig = {
  name: "NamowKSA",
  /** Full public URL, no trailing slash. Used for canonical URLs, sitemap and Open Graph. */
  url: (clean(process.env.NEXT_PUBLIC_SITE_URL) ?? "https://www.namowksa.com").replace(/\/$/, ""),
  contact: {
    email: clean(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
    /** Display format, e.g. "+966 5X XXX XXXX". */
    phone: clean(process.env.NEXT_PUBLIC_CONTACT_PHONE),
    /** International format digits only, e.g. 9665XXXXXXXX. The business WhatsApp number is the default. */
    whatsapp: digitsOnly(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER) ?? "966503361798",
    /** External scheduling link (Calendly, Cal.com, Microsoft Bookings…). */
    bookingUrl: clean(process.env.NEXT_PUBLIC_BOOKING_URL),
    /** Optional office location text shown in the footer and contact page. */
    location: {
      en: clean(process.env.NEXT_PUBLIC_LOCATION_EN),
      ar: clean(process.env.NEXT_PUBLIC_LOCATION_AR),
    },
  },
  social: [
    { key: "linkedin", label: "LinkedIn", url: clean(process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN) },
    { key: "instagram", label: "Instagram", url: clean(process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM) },
    { key: "x", label: "X", url: clean(process.env.NEXT_PUBLIC_SOCIAL_X) },
    { key: "tiktok", label: "TikTok", url: clean(process.env.NEXT_PUBLIC_SOCIAL_TIKTOK) },
    { key: "snapchat", label: "Snapchat", url: clean(process.env.NEXT_PUBLIC_SOCIAL_SNAPCHAT) },
  ].filter((s): s is { key: string; label: string; url: string } => Boolean(s.url)),
} as const;

export function whatsappLink(message?: string): string | undefined {
  const n = siteConfig.contact.whatsapp;
  if (!n) return undefined;
  return `https://wa.me/${n}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}

export function phoneHref(): string | undefined {
  const p = siteConfig.contact.phone;
  return p ? `tel:${p.replace(/[^\d+]/g, "")}` : undefined;
}
