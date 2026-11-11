/*
  Site content: services, pricing, portfolio, process and FAQs.

  Writing rules for this file (from the site brief):
  - No invented clients, results, testimonials, rankings, savings or delivery promises.
  - Timelines are "typical" and always confirmed in the written quote.
  - Third-party costs (gateways, couriers, Meta/WhatsApp, ads, app stores, domains)
    are always named and are paid by the client to the provider.
*/
export { industries, getIndustry, featuredIndustries } from "./industries";

/* ───────────────────────── PRICING (single source of truth) ─────────────────────────
   Every price on the site is read from here. Change a number once and the
   homepage, pricing page, service pages, metadata and JSON-LD all follow.
   Prices confirmed by the owner on 11 Nov 2026 (replaces the old ₹3,999 / ₹4,999
   Digital Dukaan conflict). ⚠️ OWNER TO VERIFY: the scope, limits and renewal
   wording of each package below. */
export const plans = [
  {
    id: "starter-website",
    name: "Starter Website",
    hi: "स्टार्टर वेबसाइट",
    bn: "স্টার্টার ওয়েবসাইট",
    audience: "small",
    badge: "Get online",
    price: 4999,
    bestFor: "Shops, home businesses and freelancers who need a simple, professional online presence",
    description: "A one-page mobile website with your services, photos, location and WhatsApp/call buttons.",
    delivery: "Typically 3–5 working days after content is ready",
    pages: "1 page (up to 6 sections)",
    domain: "Not included — registered in your name at cost",
    hosting: "Not included — quoted separately",
    maintenance: "1 month of post-launch support",
    features: [
      "1-page responsive website (up to 6 sections)",
      "Contact form delivered to your email",
      "WhatsApp and click-to-call buttons",
      "Google Map and business hours",
      "SEO basics: title, description, sitemap",
      "SSL certificate (https)",
    ],
    limits: ["1 page", "1 round of design changes", "Text and photos supplied by you"],
    youProvide: ["Logo, photos and business details", "Short text about your services", "Domain login, if you already own one"],
    renewal: "Domain and hosting are quoted separately and renew yearly at the provider's rate.",
    cta: "Get a Starter Website",
  },
  {
    id: "business-website",
    name: "Business Website",
    hi: "बिज़नेस वेबसाइट",
    bn: "বিজনেস ওয়েবসাইট",
    audience: "small",
    badge: "Most chosen",
    featured: true,
    price: 9999,
    bestFor: "Shops, clinics, coaching centres and local service providers",
    description: "A multi-page website that explains your services and makes it easy for customers to contact you.",
    delivery: "Typically 7–10 working days after content is final",
    pages: "Up to 5 pages",
    domain: "Registered in your name; registration fee at cost",
    hosting: "First year included",
    maintenance: "1 month of post-launch support",
    features: [
      "Up to 5 responsive pages",
      "Contact form + WhatsApp and call buttons",
      "Google Map, hours and directions",
      "SEO basics on every page",
      "Google Business Profile set-up",
      "SSL certificate and first year of hosting",
    ],
    limits: ["Up to 5 pages", "2 rounds of design changes", "Copywriting beyond basic editing is extra"],
    youProvide: ["Logo, photos and business details", "Text for each page (we can edit it)", "Access to your Google account for the Business Profile"],
    renewal: "Hosting and domain renew yearly from the second year; the renewal rate is written in your quote.",
    cta: "Get a Business Website",
  },
  {
    id: "professional-website",
    name: "Professional Website",
    hi: "प्रोफ़ेशनल वेबसाइट",
    bn: "প্রফেশনাল ওয়েবসাইট",
    audience: "small",
    badge: "For growing businesses",
    price: 19999,
    bestFor: "Businesses that want to be found on Google for their services and areas",
    description: "A larger website with service and location pages, a blog and the tracking you need to see where enquiries come from.",
    delivery: "Timeline confirmed in your written quote",
    pages: "Up to 12 pages + blog",
    domain: "Registered in your name; registration fee at cost",
    hosting: "First year included",
    maintenance: "3 months of post-launch support",
    features: [
      "Up to 12 pages plus a blog",
      "On-page and technical SEO set-up",
      "Service and location pages written with you",
      "Business email set-up (you@yourbrand.in)",
      "Google Analytics and Search Console",
      "WhatsApp auto-reply set-up",
    ],
    limits: ["Up to 12 pages", "Business email is billed per user by Google/Zoho", "SEO results depend on competition and are not guaranteed"],
    youProvide: ["Details of each service and area you cover", "Photos of your work", "Access to your Google Business Profile"],
    renewal: "Hosting and domain renew yearly; business email is billed by the provider per user.",
    cta: "Get a Professional Website",
  },
  {
    id: "ecommerce",
    name: "E-commerce Website",
    hi: "ई-कॉमर्स वेबसाइट",
    bn: "ই-কমার্স ওয়েবসাইট",
    audience: "small",
    badge: "Sell online",
    price: 29999,
    priceSuffix: "onwards",
    bestFor: "Retailers, brands and manufacturers selling online across India",
    description: "Your own online store with payment gateway, courier integration and GST invoices.",
    delivery: "Timeline confirmed in your written quote",
    pages: "Store + up to 8 content pages",
    domain: "Registered in your name; registration fee at cost",
    hosting: "First year included (store-grade hosting)",
    maintenance: "3 months of post-launch support",
    features: [
      "Product catalogue with variants (up to 100 products loaded)",
      "Payment gateway: UPI, cards, net-banking, COD",
      "Courier aggregator integration (e.g. Shiprocket)",
      "GST invoices and discount coupons",
      "Order emails; WhatsApp/SMS via a paid provider",
      "Admin training in Hindi, Bengali or English",
    ],
    limits: ["Up to 100 products loaded by us", "One payment gateway and one courier integration"],
    youProvide: ["Product data and photos", "Business KYC for the payment gateway", "Courier account (we help set it up)"],
    renewal: "Hosting, domain and any paid plugins renew yearly; amounts are listed in your quote.",
    cta: "Get an E-commerce quote",
  },
];

export const customQuote = {
  name: "Enterprise & custom projects",
  priceLabel: "Custom quotation",
  description:
    "Web applications, CRM/ERP, integrations, mobile apps and automation are scoped individually. You get a written scope, milestones and a fixed or capped quote before work starts.",
  points: [
    "Discovery call and requirement review",
    "Written scope with what is in and out",
    "Milestone-based payment schedule",
    "Ongoing support or maintenance agreement if you want one",
  ],
};

// Custom development types shown on the pricing page. Priced by written quote
// after discovery — no fixed prices are published for these.
export const customTypes = [
  {
    id: "web-app",
    icon: "AppWindow",
    color: "#2563EB",
    title: "Custom Web Application",
    service: "web-application-development",
    scope: "Customer, dealer or staff portals, booking platforms, dashboards and SaaS products.",
    pricedAs: "Fixed or capped quote per milestone",
    costFactors: ["Number of user roles and screens", "Integrations and payments", "Data migration"],
  },
  {
    id: "mobile",
    icon: "Smartphone",
    color: "#7C3AED",
    title: "Mobile App (Android & iOS)",
    service: "mobile-app-development",
    scope: "Ordering, booking, staff and field-team apps with an admin panel.",
    pricedAs: "Fixed or capped quote per milestone",
    costFactors: ["Screens and user types", "Backend / admin panel needed", "Offline and notification features"],
  },
  {
    id: "crm-erp",
    icon: "LayoutDashboard",
    color: "#4338CA",
    title: "CRM / ERP System",
    service: "crm-erp-development",
    scope: "Leads, quotations, orders, inventory, purchase and staff in one system.",
    pricedAs: "Quote per module, after discovery",
    costFactors: ["Modules required", "Existing data to import", "Ready-made vs fully custom"],
  },
  {
    id: "custom-software",
    icon: "Puzzle",
    color: "#C2410C",
    title: "Industry Software",
    service: "custom-software-development",
    scope: "School, coaching, clinic, NGO and franchise management systems.",
    pricedAs: "Fixed quote after discovery",
    fromKey: "custom-software-development",
    costFactors: ["Workflows and approvals", "Reports and dashboards", "Integrations (Tally, Zoho, Sheets)"],
  },
  {
    id: "integrations",
    icon: "Zap",
    color: "#B45309",
    title: "Integrations & Automation",
    service: "ai-automation",
    scope: "Connect Tally, Zoho, Google Sheets, gateways and WhatsApp; automate reports and data entry.",
    pricedAs: "Per integration or automation",
    costFactors: ["API access on each system", "Volume of data / documents", "Human review steps"],
  },
  {
    id: "support",
    icon: "LifeBuoy",
    color: "#BE185D",
    title: "Support & Maintenance",
    service: "Custom project / Enterprise",
    scope: "Fixes, updates, monitoring and small improvements for existing websites and software.",
    pricedAs: "Monthly or yearly agreement",
    costFactors: ["Size of the system", "Expected response time", "Hours of change work included"],
  },
];

export const engagementModels = [
  { icon: "ClipboardCheck", title: "Fixed-scope project", text: "A defined scope, price and milestone plan. Best when requirements are clear." },
  { icon: "Rocket", title: "Phased build", text: "Start with discovery or a first module, then scope the next phase with what you've learned." },
  { icon: "LifeBuoy", title: "Support agreement", text: "Monthly or yearly cover for fixes, updates and small improvements." },
];

export const formatINR = (n) => `₹${Number(n).toLocaleString("en-IN")}`;
export const getPlan = (id) => plans.find((p) => p.id === id);

// Terms shown on the pricing page. ⚠️ OWNER TO VERIFY each line.
export const pricingTerms = [
  {
    title: "GST",
    text: "Prices are shown without GST. If GST applies, it is added at the prevailing rate and shown on your invoice. Whether you can claim input tax credit depends on your own GST registration and the applicable rules — check with your CA.",
  },
  {
    title: "Starting prices",
    text: "Prices are starting points for the scope listed. Extra pages, products, integrations or content work are quoted before we start.",
  },
  {
    title: "Payments",
    text: "Paid in milestones — usually an advance to start and the balance on approval and launch. Larger projects have more milestones.",
  },
  {
    title: "Renewals",
    text: "Domain, hosting and business email renew yearly. We tell you the renewal amount in the quote and remind you before it is due.",
  },
  {
    title: "Maintenance",
    text: "Post-launch support is included for the period in your package. After that, maintenance is optional and quoted separately.",
  },
  {
    title: "Ownership",
    text: "Your domain is registered in your name. On full payment, the website, code and data belong to your business.",
  },
];

// Costs charged by other companies, paid by the client directly to them.
export const thirdPartyFees = [
  { item: "Payment gateways (Razorpay, Cashfree, PhonePe PG…)", note: "Per-transaction fee charged by the gateway" },
  { item: "Couriers / Shiprocket", note: "Per-shipment charges, COD fees and returns" },
  { item: "WhatsApp Business Platform (API)", note: "Meta's per-message charges, plus any provider (BSP) plan" },
  { item: "SMS", note: "DLT registration and per-SMS charges from the SMS provider" },
  { item: "Google / Meta ads", note: "Ad spend is paid to Google or Meta, separate from our fee" },
  { item: "Domain, hosting, business email", note: "Yearly renewals; email is billed per user by Google or Zoho" },
  { item: "App stores", note: "Google Play registration fee and Apple's yearly developer fee" },
  { item: "AI / cloud services", note: "Usage-based charges from the AI or cloud provider" },
];

/* ───────────────────────── SERVICES ───────────────────────── */
const allServices = [
  {
    slug: "website-development",
    audience: "small",
    art: "web", accent: "indigo", icon: "Globe",
    title: "Business Website Development",
    hi: "बिज़नेस वेबसाइट",
    bn: "ব্যবসায়িক ওয়েবসাইট",
    short: "A fast, mobile-friendly website that explains what you do and makes it easy to call or WhatsApp you.",
    benefits: ["Mobile-first", "Click-to-call & WhatsApp", "Search-friendly set-up"],
    metaTitle: "Website Development for Small Businesses in India",
    metaDescription:
      "Mobile-friendly business websites for Indian shops, clinics, restaurants and service providers — with WhatsApp and call buttons, enquiry form and basic SEO. Starting prices and clear inclusions.",
    problem:
      "Customers check you on their phone before they call or visit. If they can't find you, or your page is slow and out of date, they move on to someone they can find.",
    intro:
      "We build clean, fast websites that work well on budget Android phones and slower connections, and make it obvious how to contact you.",
    features: [
      "Mobile-first design tested on small screens",
      "Click-to-call and WhatsApp chat buttons",
      "Google Map, directions and opening hours",
      "Enquiry form delivered to your email",
      "On-page SEO basics: titles, descriptions, sitemap, schema",
      "SSL certificate (https)",
      "Simple editing, or send changes to us",
      "Hindi or Bengali pages on request",
    ],
    excluded: [
      "Professional photography or video",
      "Long-form copywriting (we edit what you provide)",
      "Paid advertising and ad spend",
      "Guaranteed Google rankings — nobody can promise these",
    ],
    suitableFor: ["Shops, clinics, coaching centres, restaurants", "Service providers who get work by phone or WhatsApp", "Businesses replacing an old or broken website"],
    notFor: ["Selling many products online with checkout — see E-commerce", "Logins, portals or workflows — see Web Applications"],
    thirdParty: ["Domain registration and renewal", "Hosting renewal from the second year"],
    timeline: "Typically 7–10 working days for a 5-page site once content is final.",
    timelineFactors: ["How quickly text, logo and photos are ready", "Number of pages and languages", "Rounds of changes"],
    example: "nirmaan-interiors",
    planId: "starter-website",
    outcomes: ["A professional first impression", "Easier for customers to call or message you", "A base you can grow with more pages later"],
    faqs: [
      { q: "How long does a website take?", a: "A 5-page website is typically live in 7–10 working days after we have your text, logo and photos. Your written quote confirms the timeline for your scope." },
      { q: "Do I need to buy a domain and hosting separately?", a: "We can register a .in or .com domain in your business name and set up hosting. If you already own a domain, we connect it. Renewal costs are listed in your quote." },
      { q: "Can I update the website myself?", a: "Yes, we can give you a simple editor, or you can send changes to us. Small changes during the support period are included; larger ones are quoted." },
    ],
  },
  {
    slug: "ecommerce-development",
    audience: "small",
    art: "ecommerce", accent: "saffron", icon: "ShoppingBag",
    title: "E-commerce Development",
    hi: "ऑनलाइन स्टोर",
    bn: "অনলাইন স্টোর",
    short: "Your own online store with UPI, cards and COD, courier integration and GST invoices.",
    benefits: ["UPI, cards & COD", "Courier integration", "GST invoices"],
    metaTitle: "E-commerce Website Development in India | UPI & COD Online Store",
    metaDescription:
      "Your own online store with UPI, card and COD payments, courier integration, GST invoices and stock management — for Indian retailers, manufacturers and D2C brands.",
    problem:
      "Selling only through marketplaces means paying their commission and fees on every order, following their rules, and not owning the relationship with repeat customers.",
    intro:
      "Your own store lets you set prices and offers, keep customer contact details, and run alongside marketplaces. We set up the catalogue, payment gateway, shipping and invoices.",
    features: [
      "Product catalogue with variants, search and categories",
      "Payment gateway: UPI, cards, net-banking, wallets, COD",
      "Courier aggregator integration (e.g. Shiprocket, Delhivery)",
      "GST invoices",
      "Stock and order management",
      "Discount coupons and offers",
      "Order emails; WhatsApp/SMS updates via a paid provider",
      "Product SEO and Google Merchant feed",
    ],
    excluded: [
      "Gateway, courier and SMS/WhatsApp charges",
      "Product photography and bulk data entry beyond the package limit",
      "Marketplace listing management (quoted separately)",
    ],
    suitableFor: ["Retailers and D2C brands shipping across India", "Manufacturers selling direct", "Shops with repeat customers"],
    notFor: ["A few products sold over WhatsApp — WhatsApp automation is simpler", "Complex B2B pricing and dealer logins — see Web Applications"],
    thirdParty: ["Payment gateway transaction fees", "Courier charges and COD fees", "SMS / WhatsApp message charges", "Domain, hosting and any paid plugins"],
    timeline: "Confirmed in your quote. Gateway KYC approval and product data are the usual deciding factors.",
    timelineFactors: ["Payment gateway KYC approval time", "Number of products and variants", "Custom features beyond the standard store"],
    example: "desi-basket",
    planId: "ecommerce",
    outcomes: ["Take orders 24×7 on your own site", "Set your own prices and offers", "Keep customer details for repeat sales"],
    faqs: [
      { q: "Which payment methods can my customers use?", a: "UPI, debit/credit cards, net-banking, wallets and Cash on Delivery through a gateway such as Razorpay or Cashfree. The gateway charges its own per-transaction fee." },
      { q: "How will products be delivered?", a: "We integrate a courier aggregator such as Shiprocket so you can book pickups and print labels. Courier charges are paid by you to the courier." },
      { q: "Can I also keep selling on Amazon or Flipkart?", a: "Yes. Your own store works alongside marketplaces. Many businesses use both." },
    ],
  },
  {
    slug: "web-application-development",
    audience: "enterprise",
    art: "webapp", accent: "blue", icon: "AppWindow",
    title: "Custom Web Application Development",
    hi: "वेब एप्लिकेशन",
    bn: "ওয়েব অ্যাপ্লিকেশন",
    short: "Portals, booking systems, dashboards and SaaS products that customers, staff or partners log in to.",
    benefits: ["Portals & dashboards", "Role-based logins", "API integrations"],
    metaTitle: "Custom Web Application Development in India",
    metaDescription:
      "Customer portals, dealer portals, booking platforms, admin panels and SaaS products for Indian businesses and organisations. Written scope, milestone payments and you own the code.",
    problem:
      "When customers, dealers or staff have to phone, email or fill paper forms to get things done, work is slow, hard to track and depends on a few people.",
    intro:
      "A web application lets people log in and do the work themselves — book, order, upload, approve, track, pay — from any device, without installing anything.",
    distinction:
      "Choose this when the main need is a portal or product that outside users log in to. For internal sales, stock and accounts see CRM & ERP; for one-off tools around an existing process see Custom Software.",
    features: [
      "Customer, dealer, vendor or staff portals",
      "Booking and scheduling",
      "Role-based logins and permissions",
      "Payment gateway and UPI collection",
      "Reports, exports and dashboards",
      "Integrations with your existing tools via APIs",
      "Cloud hosting with backups",
      "Documentation and handover",
    ],
    excluded: ["Cloud hosting and third-party API charges", "Data entry / migration beyond what is scoped", "24×7 on-call support unless agreed in writing"],
    suitableFor: ["Growing businesses and enterprises with outside users", "Startups building an MVP", "Teams replacing email-and-spreadsheet workflows"],
    notFor: ["Information-only websites", "Needs that an existing SaaS tool already covers well — we will tell you"],
    thirdParty: ["Cloud hosting (e.g. AWS, DigitalOcean)", "Payment gateway fees", "SMS / email / WhatsApp sending charges", "Any paid third-party APIs"],
    timeline: "Usually several weeks to a few months; we give you a milestone plan before starting.",
    timelineFactors: ["Number of user roles and screens", "Integrations with other systems", "Speed of feedback and approvals", "Data migration"],
    example: "askreview",
    outcomes: ["One system instead of scattered calls and sheets", "Clear status for every request", "Room to add features as you grow"],
    faqs: [
      { q: "What is the difference between a website and a web application?", a: "A website mainly shows information. A web application lets people log in and do things — place orders, book slots, upload documents, track status." },
      { q: "How is the cost decided?", a: "After a discovery call we write down the screens, roles and integrations. The quote is based on that scope, split into milestones." },
    ],
  },
  {
    slug: "mobile-app-development",
    audience: "both",
    art: "mobile", accent: "violet", icon: "Smartphone",
    title: "Mobile App Development",
    hi: "मोबाइल ऐप",
    bn: "মোবাইল অ্যাপ",
    short: "Android and iOS apps for customers, delivery staff or field teams.",
    benefits: ["Android & iOS", "Push notifications", "Works with your backend"],
    metaTitle: "Mobile App Development in India | Android & iOS",
    metaDescription:
      "Android and iOS apps for Indian businesses — ordering, booking, staff and field-force apps with payments and notifications. Honest advice on whether you need an app at all.",
    problem:
      "Repeat customers and field staff need something quicker than a website — order again in a few taps, record a visit, update a delivery — even on a weak network.",
    intro:
      "We build practical apps from one codebase for Android and iOS, with an admin panel to manage them. If a mobile-friendly website would do the job, we will say so.",
    features: [
      "Android and iOS from one codebase (e.g. Flutter / React Native)",
      "Customer ordering and booking apps",
      "Staff, delivery and field-force apps",
      "Payment gateway / UPI integration",
      "Push notifications",
      "Offline mode where the use case needs it",
      "Play Store and App Store publishing support",
      "Admin panel",
    ],
    excluded: ["App store developer fees", "App store approval decisions (set by Google/Apple)", "Marketing the app"],
    suitableFor: ["Businesses with frequent repeat orders", "Field, delivery or sales teams", "Startups with a mobile-first product"],
    notFor: ["Businesses that mainly need to be found online — start with a website"],
    thirdParty: ["Google Play registration and Apple developer fees", "Push notification / backend hosting", "Payment gateway fees"],
    timeline: "Usually several weeks or more; confirmed in your milestone plan.",
    timelineFactors: ["Number of screens and user types", "Backend work needed", "App store review time"],
    example: "fieldpro",
    outcomes: ["Faster repeat orders and bookings", "Real-time updates from your team", "Notifications that reach customers directly"],
    faqs: [
      { q: "Do I need an app or is a website enough?", a: "Most businesses should start with a mobile-friendly website. An app makes sense when customers order frequently or staff need a tool on the move." },
      { q: "Will you publish the app?", a: "Yes. We help you create developer accounts in your business name and publish to Google Play and the App Store. The stores set their own fees and review rules." },
    ],
  },
  {
    slug: "crm-erp-development",
    audience: "enterprise",
    art: "crm", accent: "indigo", icon: "LayoutDashboard",
    title: "CRM & ERP Development",
    hi: "CRM और ERP",
    bn: "CRM ও ERP",
    short: "Leads, customers, orders, stock and staff in one system with an owner dashboard.",
    benefits: ["Leads & follow-ups", "Inventory & purchase", "Owner dashboards"],
    metaTitle: "CRM & ERP Software for Indian SMEs",
    metaDescription:
      "CRM and ERP for Indian SMEs — lead management, follow-ups, quotations, inventory, purchase and staff tracking. We recommend ready-made tools when they fit and build custom when they don't.",
    problem:
      "When the business runs on registers, Excel and WhatsApp groups, leads are missed, stock figures don't match and the owner has to ask around to know what's happening.",
    intro:
      "We either configure a suitable ready-made CRM/ERP or build one around your process, then move your existing data into it and train your team.",
    distinction:
      "This is for running your own internal operations — sales, stock, purchase, staff. For portals used by outside customers or dealers, see Web Applications.",
    features: [
      "Lead capture from website, WhatsApp and ads",
      "Follow-up reminders for the sales team",
      "Quotations, orders and GST invoices",
      "Inventory, purchase and vendor management",
      "Staff tasks and attendance",
      "Owner dashboard and daily reports",
      "Role-based access",
      "Import of existing Excel data",
    ],
    excluded: ["Licence fees for ready-made software, if chosen", "Accounting / statutory advice — your CA stays in charge", "Cleaning badly inconsistent historical data beyond scope"],
    suitableFor: ["Traders, distributors and manufacturers", "Service businesses with a sales team", "Organisations outgrowing spreadsheets"],
    notFor: ["Very small teams a simple billing app can serve"],
    thirdParty: ["Licence fees (if a ready-made product fits)", "Cloud hosting", "SMS / WhatsApp sending charges"],
    timeline: "Confirmed after discovery; depends heavily on modules and data migration.",
    timelineFactors: ["Number of modules", "Quality and volume of existing data", "Integrations with Tally or other tools", "Staff availability for training"],
    example: "vyapardesk",
    outcomes: ["Leads followed up on time", "Stock, sales and dues visible at a glance", "Less dependence on paper and memory"],
    faqs: [
      { q: "Isn't ready-made CRM software enough?", a: "Often it is, and we will recommend one if it fits. Custom CRM/ERP makes sense when your process is unusual or several tools don't talk to each other." },
      { q: "Can you move my existing Excel data?", a: "Yes. Data import is part of the scope; very messy data may need extra clean-up, which we flag before quoting." },
    ],
  },
  {
    slug: "gst-billing-inventory",
    audience: "small",
    art: "billing", accent: "emerald", icon: "ReceiptIndianRupee",
    title: "Inventory & GST Billing Software",
    hi: "GST बिलिंग",
    bn: "GST বিলিং",
    short: "GST invoices, stock and customer khata — set up and trained for your counter.",
    benefits: ["GST invoices", "Live stock", "Share bills on WhatsApp"],
    metaTitle: "GST Billing & Inventory Software Set-up for Small Businesses",
    metaDescription:
      "GST billing, inventory, barcode and khata set-up for retail shops, wholesalers and distributors — ready-made or custom, with staff training in Hindi, Bengali or English.",
    problem:
      "Hand-written bills and spreadsheets slow down the counter, stock is never quite right, and collecting pending payments depends on memory.",
    intro:
      "We set up a billing system that fits your counter — a suitable ready-made app or a custom one — with GST invoices, stock, khata and reports your accountant can use.",
    features: [
      "GST invoices with HSN/SAC codes",
      "Barcode scanning and thermal printing",
      "Stock levels with low-stock alerts",
      "Customer khata and payment reminders",
      "Share invoices on WhatsApp",
      "E-invoice / e-way bill support where the chosen system provides it",
      "Multi-user staff access",
      "GST report exports for your CA",
    ],
    excluded: ["Hardware (printer, scanner, computer)", "GST filing — that stays with your CA", "Licence fees for ready-made software, if chosen"],
    suitableFor: ["Retail and kirana stores", "Wholesalers and distributors", "Any counter that bills many customers a day"],
    notFor: ["Businesses that need a full ERP across many departments — see CRM & ERP"],
    thirdParty: ["Software licence (if ready-made)", "Hardware purchase", "GSP charges for e-invoicing, if applicable"],
    timeline: "Ready-made set-ups are usually quick; custom billing is scoped and quoted.",
    timelineFactors: ["Ready-made vs custom", "Number of products to load", "Hardware availability"],
    example: "vyapardesk",
    outcomes: ["Faster billing at the counter", "Clearer stock picture", "Easier follow-up of pending payments"],
    faqs: [
      { q: "Does it work without internet?", a: "Some billing systems work offline and sync later. We'll recommend one that does if your connection is unreliable." },
      { q: "Can my CA access the reports?", a: "Yes. GST reports can be exported or your CA can be given read-only access, depending on the system." },
      { q: "Will you train my staff?", a: "Yes, in Hindi, Bengali or English." },
    ],
  },
  {
    slug: "whatsapp-automation",
    audience: "both",
    art: "whatsapp", accent: "green", icon: "MessageCircle",
    title: "WhatsApp Business Automation",
    hi: "व्हाट्सएप ऑटोमेशन",
    bn: "হোয়াটসঅ্যাপ অটোমেশন",
    short: "Auto-replies, catalogues, broadcasts to opted-in customers and order or appointment reminders.",
    benefits: ["Auto-replies", "Opt-in broadcasts", "Reminders"],
    metaTitle: "WhatsApp Business API & Automation for Indian Businesses",
    metaDescription:
      "Set up the official WhatsApp Business Platform: auto-replies, chatbot menus, catalogue, broadcasts to opted-in customers, reminders and a shared team inbox. Meta's message charges explained upfront.",
    problem:
      "Enquiries arrive on WhatsApp at all hours. Answering the same questions by hand is slow, messages get missed, and sending offers from a personal phone risks the number being restricted.",
    intro:
      "We set up WhatsApp Business (or the official WhatsApp Business Platform/API when you need automation at scale) so common questions are answered instantly and your team shares one inbox.",
    features: [
      "WhatsApp Business Platform (API) onboarding",
      "Auto-replies and chatbot menus",
      "Product catalogue and order capture",
      "Broadcasts to customers who opted in",
      "Appointment and payment reminders",
      "Shared team inbox",
      "Website and Instagram click-to-chat",
      "Guidance on Meta's business verification",
    ],
    excluded: ["Meta's per-message charges and any provider (BSP) plan", "Guarantee of the green tick — Meta decides", "Messaging people who have not opted in"],
    suitableFor: ["Shops and clinics with many WhatsApp enquiries", "Businesses sending reminders or order updates", "Teams who share one WhatsApp number"],
    notFor: ["Sending bulk messages to bought contact lists — this breaks WhatsApp's rules"],
    thirdParty: ["Meta's WhatsApp message charges", "BSP / inbox software subscription, if used", "Business verification documents"],
    timeline: "Basic set-up is quick; API onboarding depends on Meta's business verification and template approvals.",
    timelineFactors: ["Meta business verification", "Template approval", "Chatbot complexity"],
    example: "vyaparichat",
    outcomes: ["Fewer missed enquiries", "Less repetitive typing", "Reminders sent on time"],
    faqs: [
      { q: "Will my number get banned for sending broadcasts?", a: "Using the official platform with approved templates, and messaging only people who opted in, follows WhatsApp's rules and lowers the risk. Meta still enforces its own policies." },
      { q: "Can I keep my existing number?", a: "Usually yes — the number is moved to the API. Some limits apply to using it in the normal WhatsApp app afterwards; we explain these before you decide." },
    ],
  },
  {
    slug: "digital-marketing",
    audience: "small",
    art: "marketing", accent: "violet", icon: "Megaphone",
    title: "Digital Marketing & Social Media",
    hi: "डिजिटल मार्केटिंग",
    bn: "ডিজিটাল মার্কেটিং",
    short: "Google and Meta ads, posts and reels, with tracking so you can see cost per enquiry.",
    benefits: ["Google & Meta ads", "Posts & reels", "Lead tracking"],
    metaTitle: "Digital Marketing for Small Businesses in India | Google & Meta Ads",
    metaDescription:
      "Google Ads, Facebook and Instagram ads, social media posts and lead tracking for Indian small businesses. Ad spend is paid directly to Google/Meta; results vary and are reported honestly.",
    problem:
      "Boosting posts at random spends money without telling you which enquiries came from where, or whether the spend was worth it.",
    intro:
      "We run focused campaigns on Google and Meta, create the posts and landing pages they need, and track enquiries so you can decide what to keep spending on.",
    features: [
      "Google Search and Maps ads",
      "Facebook and Instagram lead ads",
      "Posts and reels calendar",
      "Festive campaign planning",
      "Landing pages",
      "Lead tracking to a sheet or CRM",
      "Retargeting",
      "Simple monthly report",
    ],
    excluded: ["Ad spend (paid to Google/Meta)", "Guaranteed number of leads or sales", "Professional shoots unless quoted"],
    suitableFor: ["Local businesses with a clear offer", "Admissions, real-estate and service campaigns", "Businesses with a working website or WhatsApp"],
    notFor: ["Businesses without the capacity to follow up enquiries quickly"],
    thirdParty: ["Ad spend to Google and Meta", "Stock images or music licences, if used"],
    timeline: "Campaigns can start within days of approval; learning and optimisation take several weeks.",
    timelineFactors: ["Ad account set-up and verification", "Creative approvals", "Budget and competition"],
    example: null,
    outcomes: ["See your cost per enquiry", "Spend more on what works and stop what doesn't", "A consistent presence online"],
    faqs: [
      { q: "What ad budget do I need?", a: "It depends on your city, industry and goal. Many local businesses test with a small daily budget first. Ad spend is paid directly to Google or Meta." },
      { q: "Do you create the posts and videos?", a: "Yes — designs, captions and short edits. You can also share your own photos and videos." },
    ],
  },
  {
    slug: "seo-google-business",
    audience: "small",
    art: "maps", accent: "rose", icon: "MapPin",
    title: "SEO & Google Business Profile",
    hi: "लोकल SEO",
    bn: "লোকাল SEO",
    short: "Set up and improve your Google Business Profile so nearby customers can find, call and visit you.",
    benefits: ["Google Business Profile", "Genuine review requests", "Local pages"],
    metaTitle: "Local SEO & Google Business Profile Optimisation in India",
    metaDescription:
      "Google Business Profile set-up and optimisation, consistent local listings, genuine review collection and location pages for Indian small businesses. No ranking guarantees, no fake reviews.",
    problem:
      "People search 'near me' on Google Maps before visiting. An incomplete or unverified profile, wrong hours or no recent reviews make it easy to pick a competitor.",
    intro:
      "We set up or clean up your Google Business Profile, keep your details consistent across listings and help you ask real customers for reviews.",
    features: [
      "Google Business Profile set-up and verification help",
      "Categories, services, hours and photos",
      "Posts and offers",
      "Review request QR code and link",
      "Consistent listings (Justdial, IndiaMART, etc.)",
      "Local keyword research",
      "Location pages on your website",
      "Monthly activity report",
    ],
    excluded: ["Guaranteed rankings", "Fake or paid reviews — never", "Fees charged by paid directories"],
    suitableFor: ["Shops, clinics, salons, restaurants, coaching centres", "Service businesses covering specific areas"],
    notFor: ["Online-only businesses with no local customers"],
    thirdParty: ["Paid directory listings, if you choose them"],
    timeline: "Set-up takes days; visibility changes usually take weeks to months and are not guaranteed.",
    timelineFactors: ["Google's verification process", "Competition in your area", "How many genuine reviews you collect"],
    example: "askreview",
    outcomes: ["A complete, accurate profile", "A simple way to ask for genuine reviews", "Clear monthly reporting"],
    faqs: [
      { q: "How soon will I see results?", a: "Profile fixes can help within weeks, but competitive areas take longer and results depend on Google. We don't promise rankings." },
      { q: "Do you buy fake reviews?", a: "Never. Fake reviews break Google's rules and can get a profile suspended." },
    ],
  },
  {
    slug: "domain-hosting-email",
    audience: "both",
    art: "cloud", accent: "sky", icon: "Server",
    title: "Domain, Hosting & Business Email",
    hi: "डोमेन और होस्टिंग",
    bn: "ডোমেন ও হোস্টিং",
    short: "A domain in your name, reliable hosting and professional email like you@yourbrand.in.",
    benefits: ["Domain in your name", "SSL & backups", "Business email"],
    metaTitle: "Domain, Web Hosting & Business Email Set-up in India",
    metaDescription:
      "Register .in / .com domains in your business name, set up hosting with SSL and backups, and configure Google Workspace or Zoho Mail with correct SPF/DKIM records.",
    problem:
      "A domain registered in someone else's name, expiring hosting or emails landing in spam can take a business offline without warning.",
    intro:
      "We register the domain in your name, set up hosting and configure business email properly so messages reach the inbox — and we keep renewal dates visible to you.",
    features: [
      ".in, .co.in and .com registration in your name",
      "Hosting suited to your site's size",
      "SSL certificate (https)",
      "Google Workspace / Zoho Mail set-up",
      "Backups (frequency depends on the hosting plan)",
      "Uptime monitoring",
      "DNS and email records (SPF, DKIM, DMARC)",
      "Renewal reminders",
    ],
    excluded: ["Registrar, hosting and email subscription fees", "Migrating very large mailboxes beyond scope"],
    suitableFor: ["Any business moving off a Gmail address", "Businesses whose domain is held by a former vendor"],
    notFor: [],
    thirdParty: ["Domain registration and renewal", "Hosting plan", "Email subscription per user"],
    timeline: "Usually a few days; domain transfers can take longer.",
    timelineFactors: ["Domain transfer / unlock from previous registrar", "Mailbox migration size"],
    example: null,
    outcomes: ["You control your own domain", "Professional email that reaches the inbox", "No surprise expiries"],
    faqs: [
      { q: "Who owns the domain?", a: "Your business. It is registered in your name and you get the login." },
    ],
  },
  {
    slug: "ai-automation",
    audience: "enterprise",
    art: "ai", accent: "saffron", icon: "Bot",
    title: "AI & Business Automation",
    hi: "AI ऑटोमेशन",
    bn: "AI অটোমেশন",
    short: "Automate repetitive work — replies, data entry, document reading, reports and reminders.",
    benefits: ["AI assistants", "Document data extraction", "App integrations"],
    metaTitle: "AI & Business Process Automation for Indian Businesses",
    metaDescription:
      "Practical automation and AI for Indian businesses — enquiry assistants, automatic data entry, invoice reading, scheduled reports and integrations between Google Sheets, Tally, Zoho and more.",
    problem:
      "Staff spend hours copying data between sheets, answering the same questions and preparing the same reports — work that is slow and easy to get wrong.",
    intro:
      "We start with one repetitive task, automate it with a clear human check where needed, and only expand once it is working reliably.",
    distinction:
      "This connects and automates tools you already use. If you need a new system with its own screens and users, see Web Applications or Custom Software.",
    features: [
      "AI assistant for website or WhatsApp enquiries, with hand-off to staff",
      "Automatic lead capture into a CRM or sheet",
      "Invoice and document data extraction with review step",
      "Scheduled reports to email or WhatsApp",
      "Payment and renewal reminders",
      "Integrations: Google Sheets, Tally, Zoho and others with APIs",
      "Hindi and English support",
      "Limits on what the assistant may answer",
    ],
    excluded: ["AI/cloud usage charges", "Fully unsupervised decisions on money or legal matters", "Systems without an API or export, unless scoped"],
    suitableFor: ["Teams with repetitive data entry or reporting", "Businesses with high enquiry volume", "Organisations connecting several tools"],
    notFor: ["Processes that change every week — fix the process first"],
    thirdParty: ["AI model usage (per request)", "Automation platform subscription, if used", "WhatsApp / SMS sending charges"],
    timeline: "A first automation is often scoped in days; timing depends on access to your systems.",
    timelineFactors: ["API access to existing tools", "Volume and variety of documents", "Review and approval steps"],
    example: null,
    outcomes: ["Less repetitive manual work", "More consistent replies", "Fewer copy-paste errors"],
    faqs: [
      { q: "Will AI reply wrongly to my customers?", a: "We restrict what the assistant can answer, log conversations and hand over to your team for anything else. You test and approve before it goes live." },
      { q: "Is it expensive?", a: "It depends on volume. We estimate the usage charges upfront and start with one task so you can judge the value before expanding." },
    ],
  },
  {
    slug: "custom-software-development",
    audience: "enterprise",
    art: "custom", accent: "slate", icon: "Puzzle",
    title: "Custom Software Development",
    hi: "कस्टम सॉफ़्टवेयर",
    bn: "কাস্টম সফটওয়্যার",
    short: "Management software, booking systems and internal tools built around how you already work.",
    benefits: ["Built around your workflow", "You own the code", "Ongoing support"],
    metaTitle: "Custom Software Development for Indian SMEs and Enterprises",
    metaDescription:
      "Custom software for Indian organisations — booking systems, school, clinic and NGO management, franchise tools, owner dashboards and integrations. Written scope, milestones, code ownership.",
    problem:
      "Off-the-shelf tools force you to change how you work, or you end up paying for several tools that don't share data.",
    intro:
      "We build software for a specific process — admissions, clinic appointments, franchise reporting, field jobs — and connect it to the tools you already use.",
    distinction:
      "Use this page for industry-specific management systems (school, clinic, NGO, franchise). Portals for outside users are under Web Applications; sales, stock and accounts are under CRM & ERP.",
    features: [
      "Appointment and booking systems",
      "School, coaching, clinic and NGO management",
      "Dealer, vendor and franchise tools",
      "Owner dashboards and reports",
      "Integrations with Tally, Zoho and Google Sheets",
      "Payment collection via UPI / gateway",
      "Cloud hosting with backups",
      "Ongoing support and improvements",
    ],
    excluded: ["Hosting and third-party API charges", "Features not in the written scope", "Hardware"],
    suitableFor: ["Schools, clinics, NGOs and franchises", "Organisations with a specific workflow", "Businesses replacing several disconnected tools"],
    notFor: ["Needs a ready-made tool already meets"],
    thirdParty: ["Cloud hosting", "Payment gateway fees", "SMS / WhatsApp / email sending charges"],
    timeline: "Scoped in a milestone plan after discovery.",
    timelineFactors: ["Number of modules and roles", "Integrations", "Data migration", "Feedback and testing time"],
    example: "seva-setu",
    planFrom: 40000, // ⚠️ OWNER TO VERIFY (carried over from the existing site FAQ)
    outcomes: ["Less paperwork and fewer mistakes", "A real-time view of operations", "Software that fits your process"],
    faqs: [
      { q: "How much does custom software cost?", a: "It depends on features. Smaller projects have started from around ₹40,000; you get a written quote after we understand your needs." },
      { q: "Who owns the code?", a: "You do. On full payment, the source code and data belong to your organisation." },
    ],
  },
  {
    slug: "cloud-devops-infrastructure",
    audience: "enterprise",
    art: "cloud", accent: "sky", icon: "Cloud",
    title: "Cloud & DevOps",
    hi: "क्लाउड और DevOps",
    bn: "ক্লাউড ও DevOps",
    short: "AWS deployment, Docker, automated releases, databases, backups and monitoring for your applications.",
    benefits: ["AWS deployment", "Docker & CI/CD", "Backups & monitoring"],
    metaTitle: "Cloud, AWS & DevOps Services in India",
    metaDescription:
      "AWS deployment, Docker containers, CI/CD pipelines, PostgreSQL/MySQL databases, backups, SSL and monitoring for Indian businesses' web applications. Cloud bills are paid directly to the provider.",
    problem:
      "Applications running on one manually-managed server go down without warning, deployments are risky, backups are uncertain and the monthly cloud bill keeps growing without anyone knowing why.",
    intro:
      "We set up dependable hosting for your web applications on AWS (or another provider you prefer), automate deployments, and put backups and monitoring in place — documented and in your account.",
    distinction:
      "Choose this for applications and APIs. For a simple website with business email, Domain, Hosting & Business Email is enough.",
    features: [
      "AWS set-up in your own account (EC2, RDS, S3, CloudFront and similar)",
      "Docker containers for consistent deployments",
      "CI/CD pipelines: test and deploy on every release",
      "PostgreSQL / MySQL database set-up and migration",
      "Automated backups with restore testing",
      "Uptime and error monitoring with alerts",
      "SSL, firewall and access-control basics",
      "Cost review and right-sizing",
    ],
    excluded: ["Cloud provider bills (paid by you to AWS or others)", "24×7 on-call support unless agreed in a support contract", "Compliance certification audits"],
    suitableFor: ["Businesses running a web app, portal or API", "Startups preparing to scale", "Teams moving off a single shared server"],
    notFor: ["Static brochure websites — simpler hosting is cheaper"],
    thirdParty: ["AWS or other cloud provider usage charges", "Monitoring / error-tracking subscriptions, if used", "Domain and DNS provider fees"],
    timeline: "Set-up is scoped after reviewing your application; migrations are planned to avoid downtime.",
    timelineFactors: ["Size and age of the current set-up", "Database size", "Downtime window available"],
    example: null,
    outcomes: ["Fewer surprise outages", "Safer, repeatable releases", "A cloud bill you understand"],
    faqs: [
      { q: "Will the AWS account be in our name?", a: "Yes. Everything is set up in your own cloud account, and you pay the provider directly. We get access only for the work agreed." },
      { q: "Can you move our existing app to AWS?", a: "Usually yes. We review the app and database first, then plan the migration with a rollback option." },
    ],
  },
  {
    slug: "maintenance-support",
    audience: "both",
    art: "custom", accent: "emerald", icon: "Wrench",
    title: "Maintenance & Support",
    hi: "मेंटेनेंस और सपोर्ट",
    bn: "মেইনটেন্যান্স ও সাপোর্ট",
    short: "Updates, fixes, backups, security patches and small improvements for your website or software.",
    benefits: ["Updates & security patches", "Backups checked", "Small changes included"],
    metaTitle: "Website & Software Maintenance and Support in India",
    metaDescription:
      "Monthly or yearly maintenance for websites and business software: updates, security patches, backup checks, uptime monitoring, bug fixes and small changes, with agreed response times.",
    problem:
      "Websites and apps stop working after updates, plugins become insecure, backups quietly fail, and small changes wait for weeks because nobody is responsible.",
    intro:
      "A simple maintenance agreement gives you a named contact, a set number of change hours each month and regular checks — for sites and software we built, or others after a short audit.",
    features: [
      "Software, plugin and dependency updates",
      "Security patches",
      "Backup checks and restore tests",
      "Uptime monitoring",
      "Bug fixes",
      "Agreed hours of small changes each month",
      "Monthly summary of work done",
      "Agreed response times",
    ],
    excluded: ["New features beyond the included hours (quoted separately)", "Third-party licence and hosting fees", "Fixing code damaged by others outside the agreement"],
    suitableFor: ["Businesses without an in-house developer", "Websites and apps built by us or others", "Organisations needing predictable support costs"],
    notFor: ["One-off changes — ask for a fixed quote instead"],
    thirdParty: ["Hosting and domain renewals", "Paid plugin / licence renewals"],
    timeline: "Starts after a short review of the site or software (for systems built by others).",
    timelineFactors: ["Condition of the existing code", "Hosting access", "Number of systems covered"],
    example: null,
    outcomes: ["Fewer breakdowns", "Up-to-date, safer software", "Changes done without long waits"],
    faqs: [
      { q: "Do you maintain websites built by someone else?", a: "Yes, after a short audit so we know what we're taking on. The audit tells you about any urgent issues first." },
      { q: "How is maintenance priced?", a: "As a monthly or yearly agreement based on the size of the system, response time and change hours you need. You get a written quote." },
    ],
  },
];

const serviceOrder = [
  "website-development",
  "ecommerce-development",
  "custom-software-development",
  "web-application-development",
  "mobile-app-development",
  "crm-erp-development",
  "gst-billing-inventory",
  "whatsapp-automation",
  "ai-automation",
  "seo-google-business",
  "cloud-devops-infrastructure",
  "maintenance-support",
  // additional existing pages (kept so their URLs keep working)
  "digital-marketing",
  "domain-hosting-email",
];

export const services = serviceOrder.map((slug) => allServices.find((s) => s.slug === slug));

// "Why choose Siddhi Info" — practices the business follows (not outcome claims).
export const whyChoose = [
  { icon: "Puzzle", title: "Solutions designed around your business", text: "We start from your process and customers, then choose the technology — not the other way round." },
  { icon: "IndianRupee", title: "Affordable options for growing businesses", text: `Clear starting prices from ${formatINR(4999)}, so small businesses can start small and add more later.` },
  { icon: "Code2", title: "Custom development capabilities", text: "When ready-made tools don't fit, we build web apps, CRM/ERP, mobile apps and integrations." },
  { icon: "Cloud", title: "Modern technology stack", text: "React, Next.js, Node.js, Laravel, Python, PostgreSQL, MySQL, Docker and AWS." },
  { icon: "MessagesSquare", title: "Transparent communication", text: "Written scope and milestones, regular updates, and plain language in English, Hindi or Bengali." },
  { icon: "Rocket", title: "Reliable deployment and support", text: "Tested releases, backups and a support period after launch, with optional maintenance." },
  { icon: "TrendingUp", title: "Scalable solutions", text: "Built so features, users and integrations can be added without starting over." },
  { icon: "KeyRound", title: "Long-term technical partnership", text: "You own your code, domain and accounts — and we stay available as your business grows." },
];

// Technologies the team delivers with (confirmed by the owner, Nov 2026).
// `icon` = simple-icons export name (null → text badge).
export const techStack = [
  { name: "React", icon: "siReact" },
  { name: "Next.js", icon: "siNextdotjs" },
  { name: "Node.js", icon: "siNodedotjs" },
  { name: "Laravel", icon: "siLaravel" },
  { name: "PHP", icon: "siPhp" },
  { name: "Python", icon: "siPython" },
  { name: "PostgreSQL", icon: "siPostgresql" },
  { name: "MySQL", icon: "siMysql" },
  { name: "MongoDB", icon: "siMongodb" },
  { name: "Docker", icon: "siDocker" },
  { name: "AWS", icon: null },
  { name: "AI & LLM APIs", icon: null },
  { name: "REST APIs", icon: null },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}

export const smallBusinessServices = services.filter((s) => s.audience !== "enterprise");
export const enterpriseServices = services.filter((s) => s.audience !== "small");

// Maps a service page to the matching Get-a-Quote option.
const quoteServiceFor = {
  "website-development": "website", "ecommerce-development": "ecommerce", "custom-software-development": "custom-software",
  "web-application-development": "custom-software", "mobile-app-development": "mobile-app", "crm-erp-development": "crm-erp",
  "gst-billing-inventory": "custom-software", "whatsapp-automation": "whatsapp-automation", "ai-automation": "ai-automation",
  "seo-google-business": "website", "cloud-devops-infrastructure": "cloud-devops", "maintenance-support": "other",
  "digital-marketing": "other", "domain-hosting-email": "website",
};
export const quoteLink = (s) =>
  `/get-a-quote/?service=${quoteServiceFor[s.slug] || "other"}${s.audience === "enterprise" ? "&type=enterprise" : ""}`;

// Starting price shown on a service page, if any.
export function servicePrice(s) {
  if (s.planId) return formatINR(getPlan(s.planId).price);
  if (s.planFrom) return formatINR(s.planFrom);
  return null;
}

/* ───────────────────────── PROCESS ───────────────────────── */
export const steps = [
  {
    title: "Understand your requirements",
    icon: "MessagesSquare",
    text: "A free call or meeting about your business, users, budget and what isn't working today.",
  },
  {
    title: "Plan and design your solution",
    icon: "ClipboardCheck",
    text: "A written scope — what's included and what isn't — with price, milestones, timeline and designs to review.",
  },
  {
    title: "Develop and test",
    icon: "Code2",
    text: "We build in stages, share progress on a link you can open on your phone, and test on real devices.",
  },
  {
    title: "Deploy and support",
    icon: "Rocket",
    text: "We go live on your domain or cloud account, train your team and stay available for fixes and improvements.",
  },
];

// How we work — shown on About, Enterprise and Small Business pages.
export const workingTerms = [
  { icon: "MessagesSquare", title: "How we communicate", text: "WhatsApp, phone, email or video calls, in English, Hindi or Bengali. You get one point of contact for your project." },
  { icon: "KeyRound", title: "Who owns what", text: "Domains, app store accounts and hosting are set up in your name. On full payment the code and data are yours." },
  { icon: "IndianRupee", title: "Payments & milestones", text: "A written quote with milestones — usually an advance to start and the balance on approval and launch." },
  { icon: "LifeBuoy", title: "Support", text: "Every package includes a post-launch support period. Ongoing maintenance is optional and quoted separately." },
];

export const benefits = [
  { icon: "TrendingUp", title: "More enquiries", text: "Be easy to find and easy to contact on Google, WhatsApp and your website." },
  { icon: "ShoppingBag", title: "Easier ordering", text: "Let customers browse, order and pay without back-and-forth calls." },
  { icon: "Zap", title: "Less manual work", text: "Replace repeated typing, copying and reminders with simple automation." },
  { icon: "LayoutDashboard", title: "Clearer operations", text: "See leads, orders, stock and dues in one place instead of many registers." },
  { icon: "Rocket", title: "Room to grow", text: "Start small and add features, users and integrations as you need them." },
];

/* ───────────────────────── FAQ ───────────────────────── */
export const homeFaqs = [
  { q: "How much does a business website cost?", a: `A one-page Starter Website starts at ${formatINR(getPlan("starter-website").price)}, a Business Website at ${formatINR(getPlan("business-website").price)}, a Professional Website at ${formatINR(getPlan("professional-website").price)} and an online store at ${formatINR(getPlan("ecommerce").price)} onwards. These are starting prices; GST and third-party fees are extra, and you get a written quote before work begins.` },
  { q: "How long does website development take?", a: "A Starter Website typically takes 3–5 working days and a Business Website 7–10 working days once your content is ready. Larger websites, online stores and software projects get a timeline in the written quote." },
  { q: "Do you provide domain and hosting?", a: "Yes. Domains are registered in your business name. Hosting is included for the first year on the Business, Professional and E-commerce packages; renewals are listed in your quote." },
  { q: "Can I update my website myself?", a: "Yes. We can give you a simple editor, or you can send changes to us — small changes during the support period are included." },
  { q: "Do you develop custom software?", a: "Yes — web applications, CRM/ERP, portals and industry-specific systems, built with React, Next.js, Node.js, Laravel or Python. Each project starts with discovery and a written scope." },
  { q: "Do you develop mobile applications?", a: "Yes, Android and iOS apps from one codebase, with an admin panel. If a mobile-friendly website will do the job, we'll say so." },
  { q: "Can you automate WhatsApp communication?", a: "Yes. We set up WhatsApp Business or the official WhatsApp Business Platform (API) for auto-replies, catalogues, reminders and order updates. Meta's message charges apply." },
  { q: "Do you provide AWS cloud services?", a: "Yes. We deploy and manage applications on AWS — Docker, CI/CD, databases, backups and monitoring — in your own cloud account. Cloud bills are paid directly to the provider." },
  { q: "Do you provide maintenance?", a: "Yes. Every package includes a post-launch support period, and ongoing maintenance is available as a monthly or yearly agreement." },
  { q: "Do you work with customers outside Kolkata?", a: "Yes. We are based in Kolkata and work with businesses across India over phone, WhatsApp and video calls." },
  { q: "How can I request a quotation?", a: "Use the Get a Quote form — it takes about two minutes and gives you a reference number. We then call you to understand your requirements and send a written proposal." },
];

/* ───────────────────────── PORTFOLIO ─────────────────────────
   Two kinds of entries:
   - concept: false → a real, live product. Only facts that can be verified.
     `ownership`: "siddhi-info" (our own product) | "client" (built for a client,
     with permission) | null (not yet confirmed — no ownership line is shown).
   - concept: true  → an illustrative demo with a fictional brand and sample data.
     Labelled "Concept demo" on the card AND on the preview itself.
   ⚠️ OWNER TO VERIFY: set `ownership` for each live product, and add `role`/`results`
   only with evidence and permission. */
export const portfolio = [
  {
    slug: "askreview",
    tags: ["live","saas"],
    problem: "Businesses want more Google reviews and customer feedback, but asking each customer manually is awkward and most never leave one.",
    solution: "A QR/NFC review stand that opens one page where customers can review on Google, follow on social media, record a video testimonial or send private feedback — with a dashboard for the business.",
    concept: false,
    ownership: null,
    category: "SaaS • Reviews & feedback",
    name: "AskReview",
    url: "askreview.in",
    liveUrl: "https://askreview.in/",
    images: { desktop: "/images/work/askreview-desktop.webp", mobile: "/images/work/askreview-mobile.webp" },
    description: "A review and feedback platform for businesses — QR and NFC stands that send customers to leave a Google review, follow on social media, record a video testimonial or send private feedback.",
    features: ["QR & NFC review stands", "Links to Google, Facebook, Instagram & YouTube", "Video testimonials & private feedback", "Business dashboard with Google sign-in"],
    tech: [],
    service: "web-application-development",
  },
  {
    slug: "prizewheel",
    tags: ["live","saas"],
    problem: "Shops and brands want walk-in customers to share their contact details, but a plain sign-up form gives people no reason to do it.",
    solution: "A spin-the-wheel promotion: customers enter their details, spin for an offer and get the coupon on WhatsApp, while the business collects verified leads in a dashboard.",
    concept: false,
    ownership: null,
    category: "SaaS • Customer engagement",
    name: "PrizeWheel",
    url: "prizewheel.in",
    liveUrl: "https://prizewheel.in/",
    images: { desktop: "/images/work/prizewheel-desktop.webp", mobile: "/images/work/prizewheel-mobile.webp" },
    description: "A spin-the-wheel promotion platform. Customers enter their details, spin for an offer and receive the coupon on WhatsApp, while the business collects the enquiry.",
    features: ["Configurable prize wheels", "Details captured before the spin", "Coupons sent on WhatsApp", "QR stands", "Business dashboard"],
    tech: [],
    service: "web-application-development",
  },
  {
    slug: "vyaparichat",
    tags: ["live","saas","ai-automation"],
    problem: "Small businesses message customers from personal WhatsApp numbers, which doesn't scale, can't be shared across a team and risks the number being restricted.",
    solution: 'A WhatsApp marketing panel on the official WhatsApp Cloud API with embedded sign-up, a shared team inbox, chatbot flows and template campaigns.',
    concept: false,
    ownership: null,
    category: "WhatsApp marketing platform",
    name: "Vyapari Chat",
    url: "vyaparichat.com",
    liveUrl: "https://vyaparichat.com/",
    images: { desktop: "/images/work/vyaparichat-desktop.webp", mobile: "/images/work/vyaparichat-mobile.webp" },
    description: "A WhatsApp marketing panel on the WhatsApp Cloud API — embedded sign-up, shared team chat, chatbots, template campaigns and a reseller plan.",
    features: ["WhatsApp Cloud API", "Embedded sign-up", "Team chat & agent assignment", "Chatbot flow builder", "Reseller plans"],
    tech: [],
    service: "whatsapp-automation",
  },
  {
    slug: "magicscratch",
    tags: ["live","saas"],
    problem: "Businesses want a simple, low-cost way to run reward campaigns that bring customers back.",
    solution: "Digital scratch-and-win cards with a secure business dashboard to create and manage campaigns.",
    concept: false,
    ownership: null,
    category: "SaaS • Rewards",
    name: "Magic Scratch",
    url: "magicscratch.in",
    liveUrl: "https://magicscratch.in/",
    images: { desktop: "/images/work/magicscratch-desktop.webp", mobile: "/images/work/magicscratch-mobile.webp" },
    description: "A digital scratch-card platform with a business dashboard for running scratch-and-win campaigns.",
    features: ["Digital scratch cards", "Business login & dashboard", "Campaign management"],
    tech: [],
    service: "web-application-development",
  },

  // ---- Concept demos: fictional brands, sample data, reserved .example domains ----
  {
    slug: "nirmaan-interiors",
    tags: ["websites","concept"],
    problem: "(Fictional scenario) An interior studio gets enquiries only through referrals and has no place to show finished projects.",
    solution: "A portfolio-led website with service and location pages, WhatsApp/call buttons and a local-SEO structure.",
    concept: true,
    category: "Business website",
    name: "Nirmaan Interiors",
    url: "nirmaan-interiors.example",
    description: "Concept: a website for an interior design studio — project gallery, service pages, WhatsApp enquiries and map.",
    features: ["Project gallery", "Service & location pages", "WhatsApp & call buttons", "Local SEO structure"],
    tech: ["Next.js", "Tailwind CSS"],
    variant: "business",
    service: "website-development",
  },
  {
    slug: "desi-basket",
    tags: ["ecommerce","concept"],
    problem: "(Fictional scenario) A grocery seller relies on marketplaces and can't build a list of repeat customers.",
    solution: 'An online store with UPI/card/COD checkout, courier integration, GST invoices and order updates.',
    concept: true,
    category: "E-commerce",
    name: "Desi Basket",
    url: "desi-basket.example",
    description: "Concept: a grocery store with UPI and COD checkout, courier shipping and GST invoices.",
    features: ["Catalogue & search", "UPI / cards / COD", "Courier integration", "Order updates"],
    tech: ["Next.js", "Node.js", "Razorpay"],
    variant: "ecommerce",
    service: "ecommerce-development",
  },
  {
    slug: "spice-route-kitchen",
    tags: ["websites","concept"],
    problem: "(Fictional scenario) A restaurant depends on delivery apps for online orders and has an outdated menu online.",
    solution: "A restaurant website with a QR digital menu, direct ordering and table booking.",
    concept: true,
    category: "Restaurant website",
    name: "Spice Route Kitchen",
    url: "spice-route.example",
    description: "Concept: a restaurant site with a digital menu, direct ordering and table reservations.",
    features: ["QR digital menu", "Direct online ordering", "Table booking", "Map & directions"],
    tech: ["Next.js", "Laravel"],
    variant: "restaurant",
    service: "website-development",
  },
  {
    slug: "gyan-academy",
    tags: ["enterprise","concept"],
    problem: "(Fictional scenario) A coaching institute tracks admission enquiries and fees on paper and loses follow-ups.",
    solution: "An admissions website with course pages, enquiry tracking, online fee payment and a student portal.",
    concept: true,
    category: "Coaching institute",
    name: "Gyan Academy",
    url: "gyan-academy.example",
    description: "Concept: an admissions-focused coaching site with course pages, batch schedules, fee payment and a student portal.",
    features: ["Course & batch pages", "Admission enquiry tracking", "Online fee payment", "Student portal"],
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    variant: "education",
    service: "custom-software-development",
  },
  {
    slug: "careplus-clinic",
    tags: ["websites","concept"],
    problem: "(Fictional scenario) A clinic's phone line is busy with appointment calls and patients miss follow-ups.",
    solution: 'A clinic website with doctor profiles, appointment requests and WhatsApp reminders.',
    concept: true,
    category: "Clinic website",
    name: "CarePlus Clinic",
    url: "careplus-clinic.example",
    description: "Concept: a clinic site with doctor profiles, appointment requests and WhatsApp reminders.",
    features: ["Doctor profiles", "Appointment requests", "WhatsApp reminders", "Health articles"],
    tech: ["Next.js", "Laravel", "WhatsApp API"],
    variant: "healthcare",
    service: "website-development",
  },
  {
    slug: "seva-setu",
    tags: ["enterprise","concept"],
    problem: "(Fictional scenario) An NGO collects donations manually and takes days to prepare CSR reports.",
    solution: "A donations, project, beneficiary and volunteer platform with CSR reporting.",
    concept: true,
    category: "NGO & CSR platform",
    name: "Seva Setu",
    url: "seva-setu.example",
    description: "Concept: donations, projects, beneficiaries, volunteers and CSR reports in one platform.",
    features: ["Online donations & receipts", "Project & beneficiary tracking", "Volunteer management", "CSR reports"],
    tech: ["React", "Node.js", "PostgreSQL"],
    variant: "ngo",
    service: "custom-software-development",
  },
  {
    slug: "vyapardesk",
    tags: ["enterprise","concept"],
    problem: "(Fictional scenario) A distributor's leads, orders, stock and dues are spread across registers and spreadsheets.",
    solution: 'A CRM + ERP dashboard covering leads, orders, GST invoices, stock and dues.',
    concept: true,
    category: "CRM & ERP dashboard",
    name: "VyaparDesk",
    url: "vyapardesk.example",
    description: "Concept: a CRM + ERP dashboard for a distributor — leads, orders, stock, GST invoices and dues.",
    features: ["Lead & follow-up tracking", "Orders & GST invoices", "Stock & dues", "Owner dashboard"],
    tech: ["React", "Laravel", "MySQL"],
    variant: "dashboard",
    service: "crm-erp-development",
  },
  {
    slug: "fieldpro",
    tags: ["enterprise","concept","ai-automation"],
    problem: "(Fictional scenario) An appliance-repair company assigns technicians by phone and can't see job status.",
    solution: 'A booking and field-service app with technician assignment, live job status and UPI payment links.',
    concept: true,
    category: "Field service app",
    name: "FieldPro",
    url: "fieldpro.example",
    description: "Concept: bookings, technician assignment, job status and payment links for an appliance repair company.",
    features: ["Service booking", "Technician assignment", "Job status tracking", "UPI payment links"],
    tech: ["Next.js", "Node.js", "Flutter"],
    variant: "webapp",
    service: "web-application-development",
  },
];

export const getProject = (slug) => portfolio.find((p) => p.slug === slug);

export const workFilters = [
  ["all", "All projects"],
  ["live", "Live products"],
  ["websites", "Websites"],
  ["ecommerce", "E-commerce"],
  ["saas", "SaaS"],
  ["enterprise", "Enterprise software"],
  ["ai-automation", "AI & automation"],
  ["concept", "Concept demos"],
];

export const ownershipLabel = {
  "siddhi-info": "Siddhi Info's own product",
  client: "Built for a client",
};

/*
  Testimonials — REAL client reviews only, with written permission to publish.
  { quote: "…", name: "Client name", role: "Owner", business: "Business name, City" }
  While empty, no testimonial section is shown anywhere.
*/
export const testimonials = [];
