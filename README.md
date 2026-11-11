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

## Enquiries, leads & admin dashboard

| Piece | Where |
| --- | --- |
| Short contact form | `/contact/` → `POST /api/contact/` |
| Multi-step quote form | `/get-a-quote/` → `POST /api/quote/` |
| Lead dashboard (login, search, filters, status, follow-up, notes, CSV) | `/admin/` |
| Server code | `src/lib/server/*` (MongoDB, leads, mailer, auth), `src/lib/captcha.js` |

Every enquiry gets a reference ID (`SI-YYMMDD-XXXX`), is **saved to MongoDB** and **emailed** to `site.email`.
If one of the two is unavailable the other still captures it; the visitor sees an error (with email/WhatsApp
fallbacks) only if both fail. Spam protection: server-verified image captcha (single-use, 5-minute expiry),
honeypot field and per-IP rate limits. Admin: scrypt-hashed passwords, HMAC-signed HTTP-only cookie (8 h),
same-origin checks on every change, roles **admin** (all + CSV export), **staff** (edit leads), **viewer** (read-only).

### Environment variables (Vercel → Settings → Environments → Production → Environment Variables)

| Variable | Purpose |
| --- | --- |
| `MONGODB_URI` | MongoDB Atlas connection string (Atlas → Connect → Drivers). Allow Vercel in Atlas Network Access (`0.0.0.0/0` on the free tier). |
| `MONGODB_DB` | Optional database name (default `siddhiinfo`) |
| `GMAIL_USER`, `GMAIL_APP_PASSWORD` | Gmail account + 16-character App password for enquiry emails |
| `CAPTCHA_SECRET` | Long random string that signs form security codes |
| `ADMIN_SESSION_SECRET` | Long random string (32+ characters) that signs admin sessions |

Generate secrets with `openssl rand -hex 32`. Redeploy after changing variables.

### Create an admin user

```bash
# local (uses .env.local) — the password comes from an env var, never the command line
ADMIN_PASSWORD='a-long-passphrase' node --env-file=.env.local scripts/create-admin.mjs you@example.com admin "Your Name"
# production: run the same command with MONGODB_URI set to the Atlas URI
```

Roles: `admin`, `staff`, `viewer`. Run again with the same email to change a role or reset a password.

### Analytics events (Google Tag Manager)

`window.dataLayer` receives `whatsapp_click`, `phone_click`, `email_click`, `consultation_click`, `demo_click`,
`quote_submit` and `contact_submit`. In GTM, create Custom Event triggers with these names and GA4 event tags.

### URL changes (Nov 2026)

Old service and industry URLs permanently redirect (308) to the new ones — see `moved` in `next.config.mjs`.

## Before going live — owner checklist

- [ ] **Phone & WhatsApp** — add verified values in `src/lib/site.js`. Until then, WhatsApp buttons become
      "Request a call back" links, and the phone number and QR code are hidden. The QR code is generated from the
      WhatsApp link automatically.
- [ ] **Business hours** — add `site.hours` (also add `openingHoursSpecification` in `src/app/layout.js`).
- [x] **Prices** — ₹4,999 / ₹9,999 / ₹19,999 / ₹29,999+ confirmed (Nov 2026). Confirm each package's pages, domain/hosting and support wording in `plans`.
- [ ] **All package prices, limits, renewals and `pricingTerms`** — confirm each line in `src/lib/data.js`.
- [ ] **Custom software "from ₹40,000"** (`planFrom` on Custom Software) — confirm or remove.
- [ ] **Live products** — confirm Siddhi Info built AskReview, PrizeWheel, Vyapari Chat and Magic Scratch, and set
      `ownership` to `"siddhi-info"` or `"client"` for each.
- [ ] **Team / founder, GSTIN, registration** — add to `site.team` / `site.legal` only if you want them public.
- [ ] **Analytics** — `site.gtmId` loads Google Tag Manager; the privacy policy describes it. Check which tags the
      container fires and whether you need a cookie-consent banner for them.
- [ ] **About → "How we build"** — keep only the practices you actually follow on every project.
- [ ] **MongoDB Atlas** + the environment variables above in Vercel, then create your admin user.
- [ ] **Primary domain** — `siddhiinfo.in` redirects to `www.`; set `site.url` in `src/lib/site.js` to the primary domain.
- [ ] Verify the domain in Google Search Console and submit the sitemap.
