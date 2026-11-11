/*
  ─────────────────────────────────────────────────────────────────────────────
  CENTRAL BUSINESS DETAILS — edit this file once and every page, the header,
  footer, contact page, JSON-LD schema and WhatsApp buttons update together.

  ⚠️  OWNER TO VERIFY BEFORE LAUNCH
  Anything left empty ("") is hidden from the site rather than shown as a
  placeholder. Fill a value in only once you have confirmed it is correct.

    phone      → a number that is answered during business hours, e.g. "+91 98765 43210"
    whatsapp   → the WhatsApp number, digits only with country code, e.g. "919876543210"
                 (WhatsApp buttons and the QR code appear automatically once set)
    hours      → e.g. "Mon–Sat, 10:00 AM – 7:00 PM IST"
    team       → founder / team details you are happy to publish
    legal      → GSTIN, Udyam or company registration, if you want them shown
  ─────────────────────────────────────────────────────────────────────────────
*/
export const site = {
  name: "Siddhi Info",
  legalName: "Siddhi Info",
  url: "https://siddhiinfo.in",
  tagline: "Websites, software & automation for Indian businesses",
  description:
    "Siddhi Info builds websites, online ordering, billing and WhatsApp tools for small businesses, and custom software, integrations and automation for growing organisations across India.",

  // Enquiry inbox. The contact form emails enquiries here (see src/app/api/contact/route.js).
  email: "hellosiddhiinfo@gmail.com",
  phone: "", // OWNER: add a verified phone number
  whatsapp: "", // OWNER: add a verified WhatsApp number (digits only, with 91)

  address: {
    street: "",
    city: "Kolkata",
    region: "West Bengal",
    postalCode: "",
    country: "IN",
  },
  hours: "", // OWNER: add confirmed business hours
  // Shown next to the form and in "what happens next". Keep it realistic.
  responseTime: "within one working day",

  // Optional: shown on the About page only when filled in.
  team: [
    // { name: "", role: "Founder", bio: "", photo: "/images/team/....webp", linkedin: "" },
  ],
  legal: {
    gstin: "",
    registration: "", // e.g. "Udyam Registration No. UDYAM-WB-.."
  },

  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },

  // Google Tag Manager container. Leave empty to load no analytics at all.
  // Disclosed on /privacy-policy/.
  gtmId: "GTM-PNTGKWRK",
};

export const hasPhone = /\d{10}/.test(site.phone.replace(/\D/g, ""));
export const hasWhatsApp = /^91[6-9]\d{9}$/.test(site.whatsapp);
export const telHref = hasPhone ? `tel:${site.phone.replace(/[^\d+]/g, "")}` : null;
export const mailHref = `mailto:${site.email}`;

// Main navigation. Labels come from translations (src/lib/translations.js) by key.
export const nav = [
  { key: "services", href: "/services/" },
  { key: "smallBusiness", href: "/small-business/" },
  { key: "enterprise", href: "/enterprise/" },
  { key: "pricing", href: "/pricing/" },
  { key: "work", href: "/work/" },
  { key: "about", href: "/about/" },
  { key: "contact", href: "/contact/" },
];

/**
 * WhatsApp click-to-chat link, or null while no verified number is configured.
 * Always render WhatsApp buttons conditionally on the result.
 */
export function whatsappLink(text = "Hi Siddhi Info, I'd like to discuss a project for my business.") {
  if (!hasWhatsApp) return null;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

// Per-page SEO metadata: canonical URL, Open Graph and Twitter card in one place.
export function pageMeta({ title, description, path, type = "website", ...og }) {
  const images = [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: site.name }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type, title, description, url: path, siteName: site.name, locale: "en_IN", images, ...og },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image.png"] },
  };
}

// Build-time reminder for the site owner. Prints once per server process.
if (typeof window === "undefined" && !globalThis.__siddhiConfigWarned) {
  globalThis.__siddhiConfigWarned = true;
  const missing = [
    !hasPhone && "phone",
    !hasWhatsApp && "whatsapp",
    !site.hours && "hours",
  ].filter(Boolean);
  if (missing.length) {
    console.warn(`[site config] Owner to verify in src/lib/site.js: ${missing.join(", ")} (hidden on the site until set)`);
  }
}
