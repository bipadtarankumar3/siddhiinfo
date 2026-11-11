/** @type {import('next').NextConfig} */

// Old URLs → new URLs (Nov 2026 restructure). Permanent (308) so search
// engines move rankings to the new pages.
const moved = {
  "/services/ecommerce-store/": "/services/ecommerce-development/",
  "/services/custom-software-crm/": "/services/custom-software-development/",
  "/services/crm-erp-software/": "/services/crm-erp-development/",
  "/services/billing-gst-software/": "/services/gst-billing-inventory/",
  "/services/whatsapp-business-automation/": "/services/whatsapp-automation/",
  "/services/ai-business-automation/": "/services/ai-automation/",
  "/services/local-seo-google-business/": "/services/seo-google-business/",
  "/industries/retail-kirana/": "/industries/retail-wholesale/",
  "/industries/restaurants-cafes/": "/industries/restaurants/",
  "/industries/clinics-healthcare/": "/industries/healthcare/",
  "/industries/schools-coaching/": "/industries/education/",
  "/industries/ngos-csr/": "/industries/ngo-csr/",
  "/industries/manufacturers-wholesalers/": "/industries/manufacturing/",
  "/industries/startups-entrepreneurs/": "/industries/startups/",
  "/industries/professionals-ca-consultants/": "/industries/professional-services/",
  "/resources/": "/blog/",
};

const isProd = process.env.NODE_ENV === "production";

// Content Security Policy. Allows Google Tag Manager / GA4; everything else same-origin.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"} https://www.googletagmanager.com https://*.google-analytics.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://*.google-analytics.com https://*.googletagmanager.com",
  "font-src 'self' data:",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
  "frame-src https://www.googletagmanager.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig = {
  // Hosted on Vercel: pages are prerendered statically; /api/* runs as serverless functions.
  trailingSlash: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return Object.entries(moved).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Admin and APIs must never be cached or indexed
      { source: "/admin/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }, { key: "Cache-Control", value: "no-store" }] },
      { source: "/api/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex" }, { key: "Cache-Control", value: "no-store" }] },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
