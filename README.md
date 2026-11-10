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
| Phone, email, WhatsApp, address, socials | `src/lib/site.js` |
| Services, industries, pricing, FAQs | `src/lib/data.js` |
| Blog posts | `src/lib/blog.js` |
| Portfolio (concept demos → real projects) | `portfolio` in `src/lib/data.js` |
| Client testimonials (real ones only) | `testimonials` in `src/lib/data.js` |

Pages, sitemap, JSON-LD schema and footer all update automatically from these files.

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

## Before going live

- Replace the placeholder phone / WhatsApp number in `src/lib/site.js` (the phone is left out of the
  structured data until it is changed).
- Add social profile URLs in `site.social` — footer icons appear automatically.
- Portfolio items are **concept demos** with fictional brands and are labelled as such on the site. Swap in
  real client projects (with permission) as they are completed.
- Add real testimonials only; the section shows an honest "coming soon" state while the list is empty.

## Image credits

Photographs are from [Pexels](https://www.pexels.com) and used under the
[Pexels License](https://www.pexels.com/license/) (free for commercial use, no attribution required).
Source photo IDs are listed in `public/images/CREDITS.md`. All illustrations are original SVG.
Technology logos come from [Simple Icons](https://simpleicons.org) and belong to their owners.
