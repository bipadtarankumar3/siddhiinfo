import { Plus_Jakarta_Sans, Mukta } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguagePrompt from "@/components/LanguagePrompt";
import { site, absoluteUrl, hasPhone } from "@/lib/site";
import { services } from "@/lib/data";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

// Devanagari (Hindi) text falls back to Mukta automatically
const mukta = Mukta({
  variable: "--font-hindi",
  subsets: ["devanagari"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Siddhi Info — Websites, Software & Automation for Indian Businesses",
    template: "%s | Siddhi Info",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "website development company in India",
    "small business website India",
    "website developer in Kolkata",
    "e-commerce website development India",
    "custom software development India",
    "CRM ERP software for SMEs",
    "GST billing software setup",
    "WhatsApp Business API automation",
    "local SEO Google Business Profile",
    "Siddhi Info",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Siddhi Info — Websites, Software & Automation",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhi Info — Websites, Software & Automation",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true, email: true, address: false },
  category: "technology",
  // Add your Google Search Console token here once verified:
  // verification: { google: "xxxxxxxx" },
};

export const viewport = {
  themeColor: "#071a40",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // lets fixed elements respect iPhone safe areas
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": absoluteUrl("/#organization"),
      name: site.name,
      url: site.url,
      logo: absoluteUrl("/logo-512.png"),
      image: absoluteUrl("/opengraph-image.png"),
      description: site.description,
      slogan: site.tagline,
      email: site.email,
      // Only published once a verified number is set in src/lib/site.js
      ...(hasPhone ? { telephone: site.phone } : {}),
      areaServed: { "@type": "Country", name: "India" },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street || undefined,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode || undefined,
        addressCountry: site.address.country,
      },
      // Add openingHoursSpecification here once business hours are confirmed
      knowsLanguage: ["en", "hi", "bn"],
      sameAs: Object.values(site.social).filter(Boolean),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Website, software & digital marketing services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, url: absoluteUrl(`/services/${s.slug}/`) },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: site.url,
      name: site.name,
      inLanguage: "en-IN",
      publisher: { "@id": absoluteUrl("/#organization") },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${mukta.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-sans">
        <LanguageProvider>
          <JsonLd data={orgSchema} />
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow">
            Skip to content
          </a>
          <Header />
          <main id="main" className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <LanguagePrompt />
        </LanguageProvider>
        {/* Analytics: disclosed on /privacy-policy/. Remove site.gtmId to disable. */}
        {site.gtmId && <GoogleTagManager gtmId={site.gtmId} />}
      </body>
    </html>
  );
}
