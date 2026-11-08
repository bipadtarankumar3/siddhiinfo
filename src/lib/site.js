// Central business details. Update these once and every page, footer,
// JSON-LD schema, sitemap and WhatsApp link picks them up.
export const site = {
  name: "Siddhi Info",
  legalName: "Siddhi Info",
  url: "https://siddhiinfo.in",
  tagline: "Your Digital Growth Partner",
  description:
    "Siddhi Info is your technology partner — from websites and online stores to mobile apps, CRM/ERP, GST billing, WhatsApp automation and digital marketing for Indian businesses.",
  // TODO: replace with your real contact details
  email: "info@siddhiinfo.in",
  phone: "+91 90000 00000",
  whatsapp: "919000000000", // country code + number, digits only
  address: {
    street: "",
    city: "Kolkata",
    region: "West Bengal",
    postalCode: "",
    country: "IN",
  },
  hours: "Mon–Sat, 10:00 AM – 7:00 PM IST",
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
};

// true once a real phone number replaces the placeholder above
export const hasRealPhone = !site.phone.includes("90000 00000");

export const nav = [
  { label: "Services", href: "/services/" },
  { label: "Our Work", href: "/work/" },
  { label: "Industries", href: "/industries/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
];

export function whatsappLink(text = "Hi Siddhi Info, I want to grow my business online.") {
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
