import { Plus_Jakarta_Sans, Mukta } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import RevealObserver from "@/components/RevealObserver";
import { LanguageProvider } from "@/context/LanguageContext";
import NamasteModal from "@/components/NamasteModal";
import { site, absoluteUrl, hasRealPhone } from "@/lib/site";
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
    default: "Siddhi Info – Website & Software Development Company in India",
    template: "%s | Siddhi Info",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "website development company in India",
    "affordable website development",
    "website developer in Kolkata",
    "e-commerce website development India",
    "custom software development",
    "mobile app development India",
    "CRM ERP software for small business",
    "WhatsApp automation for business",
    "digital marketing services India",
    "website development for small business India",
    "small business website India",
    "GST billing software",
    "WhatsApp Business API",
    "local SEO India",
    "website for kirana store",
    "digital India small business",
    "Hindi website development",
    "Google Business Profile",
    "ecommerce website India",
    "digital marketing for small business",
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
    title: "Siddhi Info – Your Digital Growth Partner",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhi Info – Your Digital Growth Partner",
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
      // Only published once a real number is set in src/lib/site.js
      ...(hasRealPhone ? { telephone: site.phone } : {}),
      priceRange: "₹₹",
      areaServed: { "@type": "Country", name: "India" },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street || undefined,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode || undefined,
        addressCountry: site.address.country,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
      knowsLanguage: ["en", "hi"],
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
      <head>
        {/* Enables scroll-reveal styles only when JS runs, so content is never hidden without it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
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
          <RevealObserver />
          <NamasteModal />
        </LanguageProvider>
        <GoogleTagManager gtmId="GTM-PNTGKWRK" />
      </body>
    </html>
  );
}
