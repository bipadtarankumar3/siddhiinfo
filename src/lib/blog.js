// Blog posts are plain JS so the site stays fully static.
// Each body item is either a string (paragraph) or { h: "Heading" } / { list: [...] }.
export const posts = [
  {
    slug: "why-every-small-business-in-india-needs-a-website",
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
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}
