// Blog posts are plain JS so the site stays fully static.
// Each body item is either a string (paragraph) or { h: "Heading" } / { list: [...] }.
export const posts = [
  {
    slug: "why-every-small-business-in-india-needs-a-website",
    category: "Website Development",
    title: "Why Every Small Business in India Needs a Website in 2026",
    description:
      "Customers search on Google and Maps before they buy. Here is why a simple website is the most affordable growth tool for Indian small businesses.",
    date: "2026-10-20",
    readMinutes: 5,
    tags: ["Website", "Growth"],
    body: [
      "India now has hundreds of millions of smartphone users, and most of them search before they buy — whether it is a plumber, a clinic, a sweet shop or a CA. If your business is not visible when they search, the enquiry goes to someone else.",
      { h: "1. Your website works 24×7" },
      "Your shop closes at night, but your website doesn't. Customers can see your services, prices, photos and timings, and send a WhatsApp enquiry at any hour.",
      { h: "2. It builds trust instantly" },
      "A clean website with your address, photos and genuine reviews makes you look established. Customers are more willing to call or visit a business they can verify online.",
      { h: "3. Google and Maps send free customers" },
      "When your website and Google Business Profile are optimised for searches like “bakery near me” or “AC repair in Kolkata”, you get calls without paying for every click.",
      { h: "4. You own it — unlike social media" },
      "Instagram and Facebook can change their rules any day. Your website and domain belong to you, and every visitor you bring there builds your own brand.",
      { h: "What should a small business website have?" },
      {
        list: [
          "Mobile-friendly design that loads fast",
          "Click-to-call and WhatsApp buttons",
          "Clear list of services or products",
          "Google Map, address and timings",
          "Real photos and customer reviews",
          "Basic SEO so Google understands your pages",
        ],
      },
      "You don't need to spend lakhs. A focused 5-page website is enough for most local businesses to start getting enquiries online.",
    ],
  },
  {
    slug: "google-business-profile-guide-for-local-shops",
    category: "Digital Marketing",
    title: "Google Business Profile: A Simple Guide for Local Shops",
    description:
      "Step-by-step tips to set up and optimise your Google Business Profile so your shop appears on Google Maps for nearby customers.",
    date: "2026-10-05",
    readMinutes: 6,
    tags: ["Local SEO", "Google Maps"],
    body: [
      "Google Business Profile (earlier called Google My Business) is the free listing that appears on Google Maps and in the local results box. For local businesses it is often the biggest source of calls.",
      { h: "Step 1: Claim and verify your profile" },
      "Search your business name on Google Maps. If it exists, claim it; if not, add it. Verification may be done by video, phone or postcard depending on your category.",
      { h: "Step 2: Choose the right primary category" },
      "Your primary category has the biggest effect on which searches you appear in. Pick the most specific one — “Mobile phone repair shop” instead of just “Electronics store”.",
      { h: "Step 3: Complete every section" },
      {
        list: [
          "Exact address and service area",
          "Phone number and website link",
          "Opening hours, including holiday hours",
          "Services or products with prices",
          "At least 10 real photos of your shop and work",
        ],
      },
      { h: "Step 4: Ask every happy customer for a review" },
      "Print a QR code for your review link at the billing counter. Reply politely to every review — good or bad. Never buy fake reviews; Google can suspend your profile.",
      { h: "Step 5: Post updates regularly" },
      "Share offers, new products and festival greetings as posts. Active profiles tend to perform better than abandoned ones.",
      "Doing this consistently for a few months can noticeably increase calls and direction requests from nearby customers.",
    ],
  },
  {
    slug: "whatsapp-business-api-vs-whatsapp-business-app",
    category: "AI & Automation",
    title: "WhatsApp Business App vs WhatsApp Business API: Which Do You Need?",
    description:
      "Understand the difference between the free WhatsApp Business app and the WhatsApp Business API, and when a small business should upgrade.",
    date: "2026-09-18",
    readMinutes: 4,
    tags: ["WhatsApp", "Automation"],
    body: [
      "Almost every Indian business uses WhatsApp to talk to customers. But as you grow, the free app starts to feel limited. Here is how the two options compare.",
      { h: "WhatsApp Business App (free)" },
      {
        list: [
          "Works on one phone (plus a few linked devices)",
          "Basic greeting and away messages",
          "Catalogue and labels",
          "Broadcast lists reach only contacts who saved your number",
        ],
      },
      { h: "WhatsApp Business API (paid per conversation)" },
      {
        list: [
          "Multiple staff can reply from one shared inbox",
          "Chatbots and menu-based auto replies",
          "Send approved template messages to opted-in customers at scale",
          "Integrate with your website, CRM, billing and payment links",
          "Eligible for the verified business badge",
        ],
      },
      { h: "When should you upgrade?" },
      "If you get more than 30–40 customer chats a day, have more than one person replying, or want to send order updates and reminders automatically, the API usually pays for itself in saved time and recovered sales.",
      "Always use the official API through Meta or an approved provider. Unofficial bulk-sender tools can get your number permanently banned.",
    ],
  },
  {
    slug: "business-website-cost-in-india",
    category: "Website Development",
    title: "How Much Does a Business Website Cost in India?",
    description:
      "A plain-language breakdown of what you pay for in a business website — design, pages, hosting, domain, SEO and maintenance — and which costs repeat every year.",
    date: "2026-11-10",
    readMinutes: 6,
    tags: ["Website", "Pricing"],
    body: [
      "Ask five developers and you will get five very different prices. That's because “a website” can mean anything from a single page with your phone number to a full online store. The trick is to know what you are actually paying for.",
      { h: "The one-time costs" },
      {
        list: [
          "Design and development — the number of pages and how custom the design is drives most of the price.",
          "Content — writing and editing text, and preparing photos. If you supply these, the cost goes down.",
          "Features — enquiry forms, WhatsApp buttons, Google Map, booking, payments or a blog.",
          "SEO set-up — page titles, descriptions, sitemap and connecting Google Search Console.",
        ],
      },
      { h: "The yearly costs" },
      "These are easy to forget and are where most surprise bills come from:",
      {
        list: [
          "Domain name renewal (.in or .com), paid to the registrar.",
          "Hosting, from the second year onwards if the first year was included.",
          "Business email, billed per user by Google Workspace or Zoho.",
          "Maintenance — updates, security patches and small changes — if you choose a plan.",
        ],
      },
      { h: "Typical price bands" },
      "As a guide, these are Siddhi Info's own starting prices (GST extra where applicable): a one-page Starter Website from ₹4,999, a Business Website of up to 5 pages from ₹9,999, a Professional Website with up to 12 pages and a blog from ₹19,999, and an online store from ₹29,999. Other agencies will price differently — what matters is that the quote lists the scope clearly.",
      { h: "Questions to ask before you pay" },
      {
        list: [
          "Is the domain registered in my business name?",
          "What exactly happens — and costs what — after the first year?",
          "How many pages and how many rounds of changes are included?",
          "Who will make small changes after launch, and how fast?",
          "Will I get the website files and logins if I move later?",
        ],
      },
      "A good quote answers all of these in writing. If it doesn't, ask — it is much cheaper than finding out in year two.",
    ],
  },
  {
    slug: "website-vs-ecommerce-website",
    category: "E-commerce",
    title: "Website vs E-commerce Website: What Does Your Business Need?",
    description:
      "Should you build a normal business website or a full online store? A simple way to decide based on how your customers buy today.",
    date: "2026-11-08",
    readMinutes: 5,
    tags: ["E-commerce", "Website"],
    body: [
      "Many business owners ask for “an online store” when what they really need is a website that brings enquiries — and sometimes the other way round. Choosing correctly saves money and effort.",
      { h: "A business website is enough when…" },
      {
        list: [
          "Customers usually call, WhatsApp or visit before buying.",
          "Prices depend on the job — repairs, interiors, services, B2B orders.",
          "You sell locally and deliver yourself, or customers pick up.",
          "You have a small number of products that change often.",
        ],
      },
      "In these cases, a fast website with clear services, photos, WhatsApp and call buttons, and a Google Business Profile usually brings more results than a checkout page.",
      { h: "You need an e-commerce website when…" },
      {
        list: [
          "Customers already want to order and pay online without talking to you.",
          "You ship across India and need courier integration.",
          "You have many products with sizes, colours or variants.",
          "You need GST invoices, stock tracking and discount codes for each order.",
        ],
      },
      { h: "Costs to plan for with a store" },
      "An online store has running costs a normal website doesn't: payment gateway fees on each transaction, courier charges, returns and COD handling, and more careful hosting. Factor these in before deciding.",
      { h: "A sensible path" },
      "Many businesses start with a business website plus WhatsApp ordering, see how much demand there is, and then add full e-commerce. If you already sell on marketplaces, your own store can sit alongside them for repeat customers.",
    ],
  },
  {
    slug: "inventory-management-software-for-small-business",
    category: "Business Technology",
    title: "Why Small Businesses Should Use Inventory Management Software",
    description:
      "Running out of fast-moving items while slow stock gathers dust? How simple inventory software helps shops, wholesalers and distributors.",
    date: "2026-11-06",
    readMinutes: 5,
    tags: ["Inventory", "Billing"],
    body: [
      "Most small businesses know roughly what is in stock — until a customer asks for something that “should be there”. Stock in a register or in the owner's memory works until the business grows.",
      { h: "Problems inventory software solves" },
      {
        list: [
          "Stock-outs of your best sellers because nobody noticed they were low.",
          "Money stuck in slow-moving or expired items.",
          "Mismatch between billing and actual stock, especially with several staff.",
          "No clear view of what to re-order and how much.",
        ],
      },
      { h: "What a simple system should do" },
      {
        list: [
          "Reduce stock automatically when you bill.",
          "Alert you when items fall below a minimum level.",
          "Record purchases from suppliers and track what you owe.",
          "Show fast- and slow-moving items each month.",
          "Export GST reports for your CA.",
        ],
      },
      { h: "Ready-made or custom?" },
      "For most shops a good ready-made billing and inventory app is enough — and cheaper. Custom software makes sense when your process is unusual: multiple godowns, dealer pricing, manufacturing, or when you need it to connect with your website or ordering system.",
      { h: "Getting started without disruption" },
      "Start by loading your current stock and top suppliers, run billing on the new system for a few weeks alongside your existing method, then switch over completely. Staff training in Hindi, Bengali or English makes the change much smoother.",
    ],
  },
  {
    slug: "what-is-custom-crm-software",
    category: "Business Technology",
    title: "What Is Custom CRM Software — and When Do You Need One?",
    description:
      "CRM explained simply for Indian businesses: what it does, when a ready-made CRM is enough, and when it's worth building one around your process.",
    date: "2026-11-04",
    readMinutes: 6,
    tags: ["CRM", "Custom Software"],
    body: [
      "CRM stands for Customer Relationship Management. In plain terms, it is one place where every lead, customer, conversation and follow-up is recorded — so nothing depends on someone's memory or a notebook.",
      { h: "Signs you need a CRM" },
      {
        list: [
          "Leads come from the website, WhatsApp, calls and ads, and some are never followed up.",
          "Sales staff keep their own spreadsheets and nobody sees the full picture.",
          "You don't know how many enquiries became customers last month.",
          "When a staff member leaves, their customer contacts leave with them.",
        ],
      },
      { h: "Ready-made CRM first" },
      "Tools like Zoho CRM, HubSpot or Freshsales work well for many businesses. If one of them fits your process with a little configuration, it is usually the cheaper and faster choice.",
      { h: "When custom makes sense" },
      {
        list: [
          "Your sales process has steps a standard CRM can't model — site visits, sample approvals, multi-level quotations.",
          "You need the CRM tightly connected to billing, inventory or a dealer portal.",
          "You are paying for several tools that don't share data.",
          "Licence costs per user have become significant as your team grows.",
        ],
      },
      { h: "What to expect from a custom CRM project" },
      "A good project starts with mapping your current process, then building the most important part first — usually lead capture and follow-up reminders — and adding quotations, reports and integrations in later phases. You should own the code and the data.",
    ],
  },
  {
    slug: "ngo-project-management-digitisation",
    category: "Industry Solutions",
    title: "How NGOs Can Digitise Project and Beneficiary Management",
    description:
      "Practical steps for NGOs and CSR teams to move from scattered spreadsheets to one system for projects, beneficiaries, volunteers and reports.",
    date: "2026-11-02",
    readMinutes: 6,
    tags: ["NGO", "CSR"],
    body: [
      "NGOs and CSR teams are asked for more data every year — beneficiaries reached, money spent, activities completed, photos, outcomes. When this lives in many spreadsheets and WhatsApp groups, every report becomes a scramble.",
      { h: "Start with what you report" },
      "List the reports donors, CSR partners and your board ask for. These tell you exactly what data you need to capture — and what you can stop collecting.",
      { h: "The core pieces" },
      {
        list: [
          "Project records: budget, timeline, location, activities and milestones.",
          "Beneficiary register: who was reached, through which project, with consent recorded.",
          "Field data collection on mobile, including photos, that works with weak internet.",
          "Volunteer and staff assignment.",
          "Dashboards and exports for each CSR partner.",
        ],
      },
      { h: "Protect beneficiary data" },
      "Beneficiary information is personal and sometimes sensitive. Collect only what you need, restrict who can see it, keep access logs, and follow the Digital Personal Data Protection Act requirements that apply to you.",
      { h: "Roll out in phases" },
      "Begin with one programme and one report. Train field staff, fix what's confusing, then add the next programme. A system people actually use beats a perfect one nobody opens.",
      "Donation websites with online receipts are often a good first step, because they bring immediate value and a clean donor list.",
    ],
  },
  {
    slug: "why-website-maintenance-matters",
    category: "Website Development",
    title: "Why Businesses Need Regular Website Maintenance",
    description:
      "A website isn't finished at launch. What goes wrong without maintenance — and what a sensible maintenance plan covers.",
    date: "2026-10-30",
    readMinutes: 4,
    tags: ["Maintenance", "Security"],
    body: [
      "Many businesses pay for a website, launch it, and don't touch it again until something breaks. By then the fix is usually bigger and more expensive than regular care would have been.",
      { h: "What goes wrong without maintenance" },
      {
        list: [
          "Outdated plugins and software become security holes.",
          "Forms stop delivering enquiries and nobody notices for weeks.",
          "The domain or SSL certificate expires and the site goes offline.",
          "Backups silently fail — until the day you need one.",
          "Prices, timings and photos go out of date and customers lose trust.",
        ],
      },
      { h: "What a maintenance plan should cover" },
      {
        list: [
          "Regular software and security updates.",
          "Backup checks, with an occasional test restore.",
          "Uptime monitoring and form testing.",
          "A set number of hours for small content changes.",
          "Renewal reminders for domain, hosting and SSL.",
        ],
      },
      { h: "How much is enough?" },
      "A simple brochure website needs only light monthly care. Online stores and web applications need more frequent updates and monitoring. Ask for a written list of what's included and the response time for problems.",
    ],
  },
  {
    slug: "ai-automation-reduce-manual-work",
    category: "AI & Automation",
    title: "How AI Automation Can Reduce Manual Business Work",
    description:
      "Where AI and automation genuinely help small and growing businesses today — and how to start safely with one task.",
    date: "2026-10-27",
    readMinutes: 6,
    tags: ["AI", "Automation"],
    body: [
      "“AI” is used for everything these days. For a business owner the useful question is simpler: which repetitive tasks eat my team's time, and can software do them reliably?",
      { h: "Good first candidates" },
      {
        list: [
          "Answering the same customer questions on WhatsApp or the website, with hand-off to staff.",
          "Copying enquiries from forms, ads and emails into a sheet or CRM.",
          "Reading invoices, purchase orders or forms and extracting the key fields.",
          "Sending reminders for payments, renewals and appointments.",
          "Preparing the same daily or weekly report.",
        ],
      },
      { h: "Keep a human in the loop" },
      "AI can misread a document or misunderstand a question. For anything involving money, legal commitments or sensitive data, design the automation so a person reviews before it's final. Limit what an AI assistant is allowed to answer.",
      { h: "Start with one task" },
      "Pick one task that is frequent, rule-based and annoying. Measure how long it takes today, automate it, and compare after a month. Expand only when it works.",
      { h: "Costs to understand" },
      "AI models and automation platforms are usually billed by usage. Get an estimate based on your real volumes before you start, so the running cost doesn't surprise you.",
    ],
  },
  {
    slug: "moving-your-business-to-aws",
    category: "Cloud & Infrastructure",
    title: "What to Consider Before Moving Your Business to AWS",
    description:
      "Thinking of moving your application or website to Amazon Web Services? Costs, security, backups and the questions to answer first.",
    date: "2026-10-24",
    readMinutes: 6,
    tags: ["AWS", "Cloud"],
    body: [
      "AWS can run almost anything, from a small website to a large application. That flexibility is also why moves go wrong: there are many ways to set it up, and some are expensive or insecure.",
      { h: "Is AWS the right fit?" },
      "For a simple brochure website, shared or managed hosting is usually cheaper and easier. AWS makes sense for web applications, APIs, growing databases, or when you need control over scaling, security and compliance.",
      { h: "Questions to answer first" },
      {
        list: [
          "Which parts of the application move: web server, database, file storage, email?",
          "How much downtime is acceptable during the switch?",
          "Who will monitor and update the servers after the move?",
          "What is the expected monthly bill, and who watches it?",
        ],
      },
      { h: "Security basics" },
      {
        list: [
          "Create the AWS account in your company's name, with billing alerts.",
          "Use separate users with only the permissions they need; never share the root login.",
          "Keep databases private, behind the application, not open to the internet.",
          "Turn on automated backups and test a restore.",
        ],
      },
      { h: "Control the cost" },
      "Start with right-sized servers, use managed databases where they save effort, set budget alerts, and review the bill monthly. Many surprise bills come from resources left running after testing.",
      "A planned migration — with a rollback option and documentation handed over to you — avoids most of the pain.",
    ],
  },
];

export const blogCategories = [
  "Website Development",
  "Business Technology",
  "AI & Automation",
  "E-commerce",
  "Digital Marketing",
  "Cloud & Infrastructure",
  "Industry Solutions",
];

export const categorySlug = (c) => c.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}
