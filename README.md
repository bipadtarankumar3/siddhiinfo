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
