# NamowKSA — Restaurant Consultancy & Digital Solutions

A premium bilingual (English/Arabic) marketing website for NamowKSA, a Saudi Arabia-focused restaurant consultancy combining professional consulting with digital solutions.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS v4** for styling
- **React Router v6** for client-side routing
- **Framer Motion** for animations
- **Lucide React** for icons

## Design System

| Token | Color | Usage |
|-------|-------|-------|
| Navy | `#102B36` | Primary background, headings |
| Ivory | `#F7F5EF` | Secondary backgrounds |
| Teal | `#159A9C` | Primary accent, CTAs |
| Sage | `#8AA79A` | Secondary accent, borders |
| Charcoal | `#26343A` | Body text |
| White | `#FFFFFF` | Cards, clean backgrounds |

## Pages Implemented

### Public Pages (22 routes)
- `/` — Home
- `/about` — About NamowKSA
- `/services` — Services Overview
- `/services/operations` — Operations Management
- `/services/menu-engineering` — Menu Engineering & Development
- `/services/food-costing` — Food Costing & Profitability
- `/services/inventory` — Inventory & Waste Control
- `/services/staffing` — Staffing & Training
- `/services/food-safety` — Food Safety & Compliance
- `/services/launch` — Restaurant Launch & Expansion
- `/digital-solutions` — Digital Solutions Overview
- `/digital/qr-menus` — QR Digital Menus
- `/digital/websites` — Restaurant Website Development
- `/digital/dashboards` — Dashboards & Reporting
- `/digital/automation` — Workflow Automation
- `/packages` — Consultancy Packages
- `/methodology` — Our Methodology
- `/industries` — Industries Served
- `/case-studies` — Case Studies
- `/insights` — Insights / Blog
- `/contact` — Contact & Consultation Booking
- `/privacy` — Privacy Policy

## Features

### Bilingual Support (EN/AR)
- Full English and Arabic translations
- Automatic RTL/LTR direction switching
- Arabic-compatible fonts (Noto Kufi Arabic)
- Direction-aware spacing and components
- Language preference persisted in localStorage

### Navigation & UX
- Responsive navigation with mobile menu
- Scroll-aware header with backdrop blur
- Smooth scroll-to-top on route changes
- Active route highlighting
- WhatsApp floating button (configurable)

### Forms & Interactions
- Contact form with validation
- Error states and success confirmation
- FAQ accordions
- Hover and focus states throughout
- Reduced-motion support

### SEO & Performance
- Semantic HTML structure
- Page-specific meta descriptions
- Open Graph metadata
- Optimized font loading
- Minimal bundle size

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_WHATSAPP_NUMBER` | WhatsApp number for floating button | No |
| `VITE_CONTACT_EMAIL` | Contact email address | No |
| `VITE_CONTACT_PHONE` | Contact phone number | No |
| `VITE_FORM_ENDPOINT` | Backend API for form submissions | No* |
| `VITE_FORM_API_KEY` | API key for form endpoint | No* |

*Form submissions currently show a success message. Configure a backend endpoint for actual email/CRM delivery.

## Setup & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run typecheck
```

## Deployment

The production build outputs to `dist/`. Deploy the `dist` folder to any static hosting:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop `dist/` folder
- **AWS S3**: Upload `dist/` contents with public read access
- **Any static host**: Upload `dist/` contents

For SPA routing, configure your host to serve `index.html` for all routes.

## Architecture

```
src/
├── App.tsx              # Router and app shell
├── main.tsx             # Entry point
├── index.css            # Tailwind + design tokens
├── i18n.ts              # Translation system & context
├── vite-env.d.ts        # TypeScript env types
├── components/
│   ├── Layout.tsx       # Navbar, Footer, WhatsApp button
│   └── Shared.tsx       # Reusable UI components
└── pages/
    ├── Home.tsx         # Homepage with all sections
    ├── About.tsx        # About page
    ├── Services.tsx     # Services overview + 7 service pages
    ├── DigitalSolutions.tsx  # Digital overview + 4 solution pages
    ├── Packages.tsx     # Consultancy packages
    ├── Methodology.tsx  # Our methodology
    ├── Industries.tsx   # Industries served
    ├── CaseStudies.tsx  # Case studies (placeholder)
    ├── Insights.tsx     # Blog/insights (placeholder)
    ├── Contact.tsx      # Contact form
    └── Privacy.tsx      # Privacy policy
```

## Content Notes

- **Case Studies**: Placeholder page — will be populated with verified client results
- **Insights/Blog**: Placeholder articles — content to be published regularly
- **Packages**: Enquiry-based pricing (no prices shown)
- **Testimonials**: Not included — will be added with verified client permission
- **Contact details**: Phone/email shown as placeholders — configure via environment variables

## Future Enhancements

The architecture supports adding:
- Client portal / authentication
- Live operational dashboards
- POS integration
- Staff scheduling
- Subscription billing
- Multi-language support beyond EN/AR
