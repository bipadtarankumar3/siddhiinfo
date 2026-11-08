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

Upload the contents of `out/` to any static host (Hostinger/cPanel `public_html`, Netlify, Vercel,
Cloudflare Pages, GitHub Pages, S3). URLs use trailing slashes (`/about/` → `about/index.html`),
so no server rewrites are needed.

After going live, verify the domain in Google Search Console and submit `https://siddhiinfo.in/sitemap.xml`.

## Enquiry form

The site is static, so the contact form has two modes:

- **Default:** the visitor's enquiry (validated name + Indian mobile number) opens pre-filled in WhatsApp or their email app — they press *Send*.
- **Form backend:** set `NEXT_PUBLIC_FORM_ENDPOINT` at build time to any endpoint that accepts a JSON `POST`
  (Formspree, Web3Forms, Getform or your own API). The form then submits directly and shows a success message,
  with WhatsApp as a secondary option.

```bash
NEXT_PUBLIC_FORM_ENDPOINT="https://formspree.io/f/xxxxxxx" npm run build
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
