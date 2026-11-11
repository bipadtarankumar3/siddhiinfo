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

   ⚠️ OWNER TO VERIFY: the live site showed Digital Dukaan at both ₹4,999 (package
   card, hero, page metadata) and ₹3,999 (one WhatsApp button). ₹4,999 is kept
   here because it is the package price; confirm it before launch. */
export const plans = [
  {
    id: "digital-dukaan",
    name: "Digital Dukaan",
    hi: "डिजिटल दुकान",
    bn: "ডিজিটাল দোকান",
    audience: "small",
    badge: "For local shops",
    price: 4999,
    bestFor: "Kirana, clothing, sweet shops, boutiques and home businesses that take orders on WhatsApp",
    description: "Take direct orders on WhatsApp with a product catalogue and UPI payments to your own bank account.",
    delivery: "Typically 3–5 working days after we receive your product list and photos",
    features: [
      "WhatsApp Business catalogue — up to 40 products",
      "UPI QR / payment details linked to your own bank account",
      "Print-ready QR stand design for your counter",
      "Google Business Profile setup or clean-up",
      "Click-to-order WhatsApp button with a pre-filled message",
      "Training in Hindi, Bengali or English",
    ],
    limits: ["Up to 40 products", "One WhatsApp Business number", "Printing of the QR stand is not included"],
    youProvide: ["Product names, prices and photos", "A WhatsApp Business number", "Your UPI ID or bank QR"],
    renewal: "No yearly fee from us for the setup itself. Any domain or hosting you choose to add is quoted separately.",
    cta: "Ask about Digital Dukaan",
  },
  {
    id: "starter-website",
    name: "Starter Website",
    hi: "स्टार्टर वेबसाइट",
    bn: "স্টার্টার ওয়েবসাইট",
    audience: "small",
    price: 7999,
    bestFor: "Shops, clinics, freelancers and local service providers",
    description: "A fast, mobile-friendly website that tells customers who you are and how to reach you.",
    delivery: "Typically 7–10 working days after content is final",
    features: [
      "Up to 5 pages, mobile-first",
      "WhatsApp and click-to-call buttons",
      "Google Map and enquiry form (sent to your email)",
      "Basic on-page SEO: titles, descriptions, sitemap",
      "SSL certificate (https)",
      "First year of hosting included",
      "Google Business Profile setup",
    ],
    limits: ["Up to 5 pages", "2 rounds of design changes", "Copywriting beyond basic editing is extra"],
    youProvide: ["Logo, photos and business details", "Text for each page (we can edit it)", "Domain login, if you already own one"],
    renewal: "Hosting and domain renew yearly from the second year; the renewal rate is written in your quote.",
    cta: "Get a Starter Website quote",
  },
  {
    id: "business-growth",
    name: "Business Growth",
    hi: "बिज़नेस ग्रोथ",
    bn: "বিজনেস গ্রোথ",
    audience: "small",
    featured: true,
    badge: "For growing businesses",
    price: 19999,
    bestFor: "Businesses that want to be found on Google for their services and areas",
    description: "A larger website with service and location pages, a blog and the tracking you need to see where enquiries come from.",
    delivery: "Timeline confirmed in your written quote",
    features: [
      "Up to 12 pages plus a blog",
      "On-page and technical SEO set-up",
      "Service and location pages written with you",
      "Business email set-up (you@yourbrand.in)",
      "WhatsApp auto-reply set-up on WhatsApp Business",
      "Google Analytics and Search Console set-up",
      "3 months of post-launch support",
    ],
    limits: ["Up to 12 pages", "Business email subscription billed by Google/Zoho", "SEO results depend on competition and are not guaranteed"],
    youProvide: ["Details of each service and area you cover", "Photos of your work", "Access to your Google Business Profile"],
    renewal: "Hosting and domain renew yearly; business email is billed by the provider per user.",
    cta: "Get a Business Growth quote",
  },
  {
    id: "ecommerce",
    name: "Complete E‑commerce",
    hi: "फुल ई-कॉमर्स",
    bn: "ফুল ই-কমার্স",
    audience: "small",
    badge: "Sell across India",
    price: 34999,
    bestFor: "Brands, manufacturers and retailers shipping orders across India",
    description: "Your own online store with payment gateway, courier integration and GST invoices.",
    delivery: "Timeline confirmed in your written quote",
    features: [
      "Up to 100 products with variants and categories",
      "Payment gateway: UPI, cards, net-banking, COD",
      "Courier aggregator integration (e.g. Shiprocket)",
      "GST invoices and discount coupons",
      "Order notifications by email (WhatsApp/SMS via a paid provider)",
      "Product SEO and Google Merchant feed",
      "Admin training in Hindi or English",
    ],
    limits: ["Up to 100 products loaded by us", "One payment gateway and one courier integration"],
    youProvide: ["Product data and photos", "Business KYC for the payment gateway", "Courier account (we help set it up)"],
    renewal: "Hosting, domain and any paid plugins renew yearly; amounts are listed in your quote.",
    cta: "Get an e-commerce quote",
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
    service: "crm-erp-software",
    scope: "Leads, quotations, orders, inventory, purchase and staff in one system.",
    pricedAs: "Quote per module, after discovery",
    costFactors: ["Modules required", "Existing data to import", "Ready-made vs fully custom"],
  },
  {
    id: "custom-software",
    icon: "Puzzle",
    color: "#C2410C",
    title: "Industry Software",
    service: "custom-software-crm",
    scope: "School, coaching, clinic, NGO and franchise management systems.",
    pricedAs: "Fixed quote after discovery",
    fromKey: "custom-software-crm",
    costFactors: ["Workflows and approvals", "Reports and dashboards", "Integrations (Tally, Zoho, Sheets)"],
  },
  {
    id: "integrations",
    icon: "Zap",
    color: "#B45309",
    title: "Integrations & Automation",
    service: "ai-business-automation",
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
    text: "Prices are shown without GST. If GST applies, it is added at the prevailing rate and shown on your invoice.",
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
    example: "business-website",
    planId: "starter-website",
    outcomes: ["A professional first impression", "Easier for customers to call or message you", "A base you can grow with more pages later"],
    faqs: [
      { q: "How long does a website take?", a: "A 5-page website is typically live in 7–10 working days after we have your text, logo and photos. Your written quote confirms the timeline for your scope." },
      { q: "Do I need to buy a domain and hosting separately?", a: "We can register a .in or .com domain in your business name and set up hosting. If you already own a domain, we connect it. Renewal costs are listed in your quote." },
      { q: "Can I update the website myself?", a: "Yes, we can give you a simple editor, or you can send changes to us. Small changes during the support period are included; larger ones are quoted." },
    ],
  },
  {
    slug: "ecommerce-store",
    audience: "small",
    art: "ecommerce", accent: "saffron", icon: "ShoppingBag",
    title: "Online Store & E‑commerce",
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
    notFor: ["A few products sold over WhatsApp — Digital Dukaan is simpler", "Complex B2B pricing and dealer logins — see Web Applications"],
    thirdParty: ["Payment gateway transaction fees", "Courier charges and COD fees", "SMS / WhatsApp message charges", "Domain, hosting and any paid plugins"],
    timeline: "Confirmed in your quote. Gateway KYC approval and product data are the usual deciding factors.",
    timelineFactors: ["Payment gateway KYC approval time", "Number of products and variants", "Custom features beyond the standard store"],
    example: "ecommerce-store",
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
    example: "custom-web-app",
    outcomes: ["Faster repeat orders and bookings", "Real-time updates from your team", "Notifications that reach customers directly"],
    faqs: [
      { q: "Do I need an app or is a website enough?", a: "Most businesses should start with a mobile-friendly website. An app makes sense when customers order frequently or staff need a tool on the move." },
      { q: "Will you publish the app?", a: "Yes. We help you create developer accounts in your business name and publish to Google Play and the App Store. The stores set their own fees and review rules." },
    ],
  },
  {
    slug: "crm-erp-software",
    audience: "enterprise",
    art: "crm", accent: "indigo", icon: "LayoutDashboard",
    title: "CRM & ERP Software",
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
    example: "crm-erp-dashboard",
    outcomes: ["Leads followed up on time", "Stock, sales and dues visible at a glance", "Less dependence on paper and memory"],
    faqs: [
      { q: "Isn't ready-made CRM software enough?", a: "Often it is, and we will recommend one if it fits. Custom CRM/ERP makes sense when your process is unusual or several tools don't talk to each other." },
      { q: "Can you move my existing Excel data?", a: "Yes. Data import is part of the scope; very messy data may need extra clean-up, which we flag before quoting." },
    ],
  },
  {
    slug: "billing-gst-software",
    audience: "small",
    art: "billing", accent: "emerald", icon: "ReceiptIndianRupee",
    title: "GST Billing & Inventory Software",
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
    example: "crm-erp-dashboard",
    outcomes: ["Faster billing at the counter", "Clearer stock picture", "Easier follow-up of pending payments"],
    faqs: [
      { q: "Does it work without internet?", a: "Some billing systems work offline and sync later. We'll recommend one that does if your connection is unreliable." },
      { q: "Can my CA access the reports?", a: "Yes. GST reports can be exported or your CA can be given read-only access, depending on the system." },
      { q: "Will you train my staff?", a: "Yes, in Hindi, Bengali or English." },
    ],
  },
  {
    slug: "whatsapp-business-automation",
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
    slug: "local-seo-google-business",
    audience: "small",
    art: "maps", accent: "rose", icon: "MapPin",
    title: "Local SEO & Google Business Profile",
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
    slug: "ai-business-automation",
    audience: "enterprise",
    art: "ai", accent: "saffron", icon: "Bot",
    title: "AI & Business Process Automation",
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
    slug: "custom-software-crm",
    audience: "enterprise",
    art: "custom", accent: "slate", icon: "Puzzle",
    title: "Custom Software Solutions",
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
    example: "ngo-csr-platform",
    planFrom: 40000, // ⚠️ OWNER TO VERIFY (carried over from the existing site FAQ)
    outcomes: ["Less paperwork and fewer mistakes", "A real-time view of operations", "Software that fits your process"],
    faqs: [
      { q: "How much does custom software cost?", a: "It depends on features. Smaller projects have started from around ₹40,000; you get a written quote after we understand your needs." },
      { q: "Who owns the code?", a: "You do. On full payment, the source code and data belong to your organisation." },
    ],
  },
];

const serviceOrder = [
  "website-development",
  "ecommerce-store",
  "billing-gst-software",
  "whatsapp-business-automation",
  "local-seo-google-business",
  "digital-marketing",
  "domain-hosting-email",
  "web-application-development",
  "crm-erp-software",
  "custom-software-crm",
  "mobile-app-development",
  "ai-business-automation",
];

export const services = serviceOrder.map((slug) => allServices.find((s) => s.slug === slug));

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}

export const smallBusinessServices = services.filter((s) => s.audience !== "enterprise");
export const enterpriseServices = services.filter((s) => s.audience !== "small");

// Starting price shown on a service page, if any.
export function servicePrice(s) {
  if (s.planId) return formatINR(getPlan(s.planId).price);
  if (s.planFrom) return formatINR(s.planFrom);
  return null;
}

/* ───────────────────────── PROCESS ───────────────────────── */
export const steps = [
  {
    title: "Discovery",
    icon: "MessagesSquare",
    text: "A free call or WhatsApp chat about your business, customers, budget and what isn't working today.",
  },
  {
    title: "Scope & quote",
    icon: "ClipboardCheck",
    text: "A written scope — what's included, what isn't — with price, milestones and an estimated timeline.",
  },
  {
    title: "Design & build",
    icon: "Code2",
    text: "We design and build in stages and share progress on a link you can open on your phone.",
  },
  {
    title: "Launch",
    icon: "Rocket",
    text: "You test and approve, we go live on your domain or app store account and train your team.",
  },
  {
    title: "Support",
    icon: "LifeBuoy",
    text: "Fixes and help during the support period in your package; optional maintenance after that.",
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
  { q: "How much does a business website cost?", a: `Websites start at ${formatINR(getPlan("starter-website").price)} for up to 5 pages including the first year of hosting. Larger websites start at ${formatINR(getPlan("business-growth").price)} and online stores at ${formatINR(getPlan("ecommerce").price)}. These are starting prices; GST and third-party fees are extra, and you get a written quote before work begins.` },
  { q: "Do you work with larger companies?", a: "Yes. For custom software, integrations, automation and ongoing support we start with a discovery call and give you a written scope and milestone plan." },
  { q: "Will my website work on mobile phones?", a: "Yes. We design for phones first and test on small Android screens and slower connections." },
  { q: "Can I manage my website myself?", a: "Yes. We can give you a simple editor, or you can send changes to us." },
  { q: "Who owns the website and code?", a: "Your business. Domains are registered in your name, and on full payment the website, code and data are yours." },
  { q: "Do you provide support after launch?", a: "Yes. Each package includes a post-launch support period. Ongoing maintenance plans are optional." },
  { q: "Can I pay in instalments?", a: "Projects are paid in milestones — usually an advance to start and the balance on approval and launch." },
  { q: "Do you work with businesses outside Kolkata?", a: "Yes. We are based in Kolkata and work with businesses elsewhere in India over phone, WhatsApp and video calls." },
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
    service: "whatsapp-business-automation",
  },
  {
    slug: "magicscratch",
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
    slug: "business-website",
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
    slug: "ecommerce-store",
    concept: true,
    category: "E-commerce",
    name: "Desi Basket",
    url: "desi-basket.example",
    description: "Concept: a grocery store with UPI and COD checkout, courier shipping and GST invoices.",
    features: ["Catalogue & search", "UPI / cards / COD", "Courier integration", "Order updates"],
    tech: ["Next.js", "Node.js", "Razorpay"],
    variant: "ecommerce",
    service: "ecommerce-store",
  },
  {
    slug: "restaurant-website",
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
    slug: "coaching-website",
    concept: true,
    category: "Coaching institute",
    name: "Gyan Academy",
    url: "gyan-academy.example",
    description: "Concept: an admissions-focused coaching site with course pages, batch schedules, fee payment and a student portal.",
    features: ["Course & batch pages", "Admission enquiry tracking", "Online fee payment", "Student portal"],
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    variant: "education",
    service: "custom-software-crm",
  },
  {
    slug: "healthcare-website",
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
    slug: "ngo-csr-platform",
    concept: true,
    category: "NGO & CSR platform",
    name: "Seva Setu",
    url: "seva-setu.example",
    description: "Concept: donations, projects, beneficiaries, volunteers and CSR reports in one platform.",
    features: ["Online donations & receipts", "Project & beneficiary tracking", "Volunteer management", "CSR reports"],
    tech: ["React", "Node.js", "PostgreSQL"],
    variant: "ngo",
    service: "custom-software-crm",
  },
  {
    slug: "crm-erp-dashboard",
    concept: true,
    category: "CRM & ERP dashboard",
    name: "VyaparDesk",
    url: "vyapardesk.example",
    description: "Concept: a CRM + ERP dashboard for a distributor — leads, orders, stock, GST invoices and dues.",
    features: ["Lead & follow-up tracking", "Orders & GST invoices", "Stock & dues", "Owner dashboard"],
    tech: ["React", "Laravel", "MySQL"],
    variant: "dashboard",
    service: "crm-erp-software",
  },
  {
    slug: "custom-web-app",
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
