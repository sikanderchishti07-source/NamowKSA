# NamowKSA Restaurant Consultancy — website

Bilingual (Arabic / English) marketing website for NamowKSA, a restaurant consultancy and digital solutions company serving restaurants, cafés and multi-branch food businesses in Saudi Arabia.

Built with **Next.js 16** (App Router, Cache Components), **React 19**, **TypeScript**, **Tailwind CSS 4** and **Motion** (used only for the methodology ticket rail).

---

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in what you have; everything is optional for local dev
npm run dev                  # http://localhost:3000 → redirects to /en or /ar
```

| Script              | What it does                                          |
| ------------------- | ----------------------------------------------------- |
| `npm run dev`       | Development server                                    |
| `npm run build`     | Production build                                      |
| `npm start`         | Serve the production build                            |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TypeScript rules)   |
| `npm run typecheck` | Generate route types, then `tsc --noEmit`             |
| `npm test`          | Vitest: translation parity, content integrity, form validation |
| `npm run check`     | All of the above in sequence                          |

Requires Node.js 20.9 or later (developed on Node 22).

---

## Deployment

The site is designed for **Vercel** (zero config), but any host that runs `next start` on Node.js works.

1. Push the repository to GitHub and import it in Vercel.
2. Add the environment variables from `.env.example` in **Project → Settings → Environment Variables**. At minimum:
   - `NEXT_PUBLIC_SITE_URL`: the production domain, e.g. `https://www.namowksa.sa`
   - One enquiry delivery channel (see below)
   - The contact channels you want shown (email, phone, WhatsApp, booking link)
3. Deploy. Connect the custom domain in Vercel.

> `NEXT_PUBLIC_*` values are baked into the static pages at build time. **Redeploy after changing them.**
> Server secrets (`RESEND_API_KEY`, `CRM_WEBHOOK_URL`…) are read at request time.

### Enquiry delivery

`/api/contact` validates every submission on the server (same rules as the browser), rejects bot submissions via a honeypot field, rate-limits each IP to 5 enquiries per 10 minutes, then delivers to whichever channels are configured:

| Channel | Variables | Notes |
| --- | --- | --- |
| Email (Resend) | `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | The from-address must be on a domain verified in Resend. Reply-to is set to the enquirer's email. |
| CRM / automation webhook | `CRM_WEBHOOK_URL`, optional `CRM_WEBHOOK_SECRET` | JSON POST; works with HubSpot workflows, Zoho, Make, Zapier, n8n etc. |

The visitor sees the success message **only when every configured channel accepts the enquiry**. With no channel configured the API returns `503` and the form tells the visitor to use the direct contact details; it never pretends a message was sent.

The rate limiter is in-memory (per server instance). For stricter limits on serverless, replace `src/lib/server/rate-limit.ts` with a shared store such as Upstash Redis; the function signature stays the same.

---

## Project structure

```
src/
  app/
    [locale]/              All pages, under /en and /ar
      layout.tsx           <html lang dir>, fonts, header, footer, organisation JSON-LD
      page.tsx             Homepage
      services/[slug]      Consultancy service pages (shared template)
      digital-solutions/[slug]  Digital service pages (shared template)
      insights/[slug]      Articles
      about, packages, methodology, industries, case-studies, contact,
      privacy, terms, cookies, not-found.tsx, [...rest] (localized 404)
    api/contact/route.ts   Enquiry endpoint
    sitemap.ts, robots.ts
    globals.css            Design tokens (colour, type scale), base styles
  proxy.ts                 Locale detection/redirect + real 404s for unknown slugs
  i18n/
    config.ts              Locales, direction, hreflang tags
    dictionaries/en.ts     All interface copy (English)
    dictionaries/ar.ts     All interface copy (Arabic), type-checked against en.ts
  content/                 Editable business content (bilingual)
    services/consultancy.ts, services/digital.ts
    packages.ts, methodology.ts, segments.ts, faqs.ts, insights.ts,
    case-studies.ts (+ testimonials), legal.ts, images.ts
  config/site.ts           Contact channels & social links (from env vars)
  components/
    layout/                Header (mega menu + mobile drawer), footer, language switcher
    sections/              Page hero, breadcrumbs, service index, FAQ, CTA band, articles
    templates/             ServiceDetail, LegalPage
    visuals/               QR menu, dashboard, website and automation demos; MethodRail
    forms/                 ConsultationForm
    ui/                    Buttons, Photo (with fallback), Accordion, Logo, Reveal
  lib/                     SEO helpers, validation, fonts, server delivery & rate limit
tests/                     Vitest suites
```

A future client portal can live under `src/app/[locale]/portal` (or a separate subdomain) without touching the marketing routes; `src/lib/server` is the place for shared server logic.

---

## Editing content

All copy lives in plain TypeScript files. Every string is an `{ en, ar }` pair, and `npm test` fails if any Arabic text is missing or left in English.

- **Add, edit or remove a service:** `src/content/services/*.ts`. Set `enabled: false` to remove a service everywhere (navigation, listings, sitemap, routing).
- **Packages:** `src/content/packages.ts`. Packages are enquiry-based; no prices are published.
- **Articles:** `src/content/insights.ts`. Add an entry with `enabled: true`.
- **Case studies and testimonials:** `src/content/case-studies.ts`. Both lists are **intentionally empty**. Add only genuine, client-approved entries (`clientApproved: true` / `approved: true`). The homepage sections appear automatically once entries exist.
- **Interface copy** (navigation, headings, form labels and errors): `src/i18n/dictionaries/`.
- **Photography:** `src/content/images.ts`. Currently loaded from Unsplash (free licence). To use your own photography, put files in `public/images/` and change `src` to `/images/…`. If any image fails to load, a branded placeholder keeps the layout intact.

---

## Design notes

- **Palette:** deep navy `#102B36`, warm ivory `#F7F5EF`, teal `#159A9C`, muted sage `#8AA79A`, charcoal `#26343A`. Accessible working shades were added after measuring contrast: buttons on light backgrounds use teal `#0F7577` with white text (5.5:1); buttons on navy use bright teal with navy text (4.9:1); small sage labels use `#4F6D60` (≥4.6:1). The original teal and sage remain for accents, rules and icons.
- **Type:** Oswald (bold condensed display, main titles in capitals) + Manrope (text) for English; Cairo (bold display) + IBM Plex Sans Arabic (text) for Arabic. All self-hosted from npm, with no request to Google Fonts.
- **Signature element:** the methodology as order tickets clipped to a kitchen pass rail (`components/visuals/MethodRail.tsx`), an accessible tab list whose arrow keys follow reading direction.
- **Motion:** one hero entrance sequence, a gentle reveal on the digital showcase, and the ticket rail interaction. `prefers-reduced-motion` disables all of it.
- **RTL:** layouts use logical properties (`ms-`, `pe-`, `start-`), directional icons flip, and charts, phone numbers and emails stay left-to-right where they should.

---

## Before going live

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real domain
- [ ] Configure an enquiry channel (Resend and/or webhook) and send a test enquiry
- [ ] Add real contact details: email, phone, WhatsApp, booking link, location
- [ ] Add social media links, if any
- [ ] Have a fluent Arabic copywriter review the Arabic copy, particularly marketing headlines
- [ ] Have legal counsel review Privacy, Terms and Cookie pages (drafts written with the Saudi PDPL in mind) and fill in the company's legal name, CR number and address in `src/content/legal.ts`
- [ ] Replace stock photography with your own when available
- [ ] Add genuine case studies and testimonials once clients approve them
- [ ] Add analytics if wanted, and update the cookie notice and consent handling accordingly
