# siddhiinfo.in

Static marketing website for **Siddhi Info** — digital solutions for Indian small businesses.
Next.js 16 (App Router, plain JavaScript) + Tailwind CSS v4, exported as pure HTML/CSS/JS.

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out
```

## Edit content

| What | File |
| --- | --- |
| Phone, WhatsApp, email, hours, team, GSTIN, analytics ID | `src/lib/site.js` (single source — empty values are hidden) |
| Package prices, limits, renewals, pricing terms, third-party fees | `plans`, `pricingTerms`, `thirdPartyFees` in `src/lib/data.js` |
| Services (problem, included/excluded, timelines, fees) | `services` in `src/lib/data.js` |
| Portfolio (live products / concept demos) | `portfolio` in `src/lib/data.js` |
| Client testimonials (real, approved ones only) | `testimonials` in `src/lib/data.js` — section hidden while empty |
| Industries | `src/lib/industries.js` |
| Interface translations (EN / हिन्दी / বাংলা) | `src/lib/translations.js` |
| Blog posts | `src/lib/blog.js` |

## SEO included

- Per-page title, description, canonical, Open Graph & Twitter cards (`pageMeta()` in `src/lib/site.js`)
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, favicon, 1200×630 OG image
- JSON-LD: ProfessionalService + WebSite, Service, BreadcrumbList, FAQPage, BlogPosting, OfferCatalog
- Semantic HTML, skip link, `lang="en-IN"`, no client JS except header menu & contact form

## Deploy

Hosted on **Vercel** (import the repo; framework preset: Next.js). Pages are prerendered as static HTML;
only `/api/contact/` runs on the server. URLs use trailing slashes (`/about/`).

After going live, verify the domain in Google Search Console and submit `https://siddhiinfo.in/sitemap.xml`.

## Enquiry form

"Send enquiry" posts to `/api/contact/` (`src/app/api/contact/route.js`), which emails the enquiry to
`site.email` through Gmail SMTP. "Send on WhatsApp" remains as a secondary option. A hidden honeypot field
drops basic bot spam.

Set these environment variables — in `.env.local` for local dev (git-ignored) and in
Vercel → Project Settings → Environment Variables for production:

```bash
GMAIL_USER=hellosiddhiinfo@gmail.com
GMAIL_APP_PASSWORD=xxxxxxxxxxxxxxxx   # 16-char Google App password, no spaces
```

## Before going live — owner checklist

- [ ] **Phone & WhatsApp** — add verified values in `src/lib/site.js`. Until then, WhatsApp buttons become
      "Request a call back" links, and the phone number and QR code are hidden. The QR code is generated from the
      WhatsApp link automatically.
- [ ] **Business hours** — add `site.hours` (also add `openingHoursSpecification` in `src/app/layout.js`).
- [ ] **Digital Dukaan price** — the old site showed both ₹4,999 and ₹3,999. `plans` uses ₹4,999; confirm it.
- [ ] **All package prices, limits, renewals and `pricingTerms`** — confirm each line in `src/lib/data.js`.
- [ ] **Custom software "from ₹40,000"** (`planFrom` on Custom Software) — confirm or remove.
- [ ] **Live products** — confirm Siddhi Info built AskReview, PrizeWheel, Vyapari Chat and Magic Scratch, and set
      `ownership` to `"siddhi-info"` or `"client"` for each.
- [ ] **Team / founder, GSTIN, registration** — add to `site.team` / `site.legal` only if you want them public.
- [ ] **Analytics** — `site.gtmId` loads Google Tag Manager; the privacy policy describes it. Check which tags the
      container fires and whether you need a cookie-consent banner for them.
- [ ] Verify the domain in Google Search Console and submit `https://siddhiinfo.in/sitemap.xml`.
