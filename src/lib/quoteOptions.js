// Options for the Get-a-Quote form. Shared by the browser form and the server
// validation so the two can never drift apart.
export const customerTypes = [
  { id: "small-business", label: "Small Business", icon: "Store", text: "Shop, clinic, restaurant, coaching centre, local service" },
  { id: "startup", label: "Startup", icon: "Rocket", text: "Building a new product or MVP" },
  { id: "enterprise", label: "Enterprise", icon: "Building2", text: "Established company or institution" },
  { id: "ngo-csr", label: "NGO / CSR", icon: "HeartHandshake", text: "Non-profit, foundation or CSR team" },
  { id: "other", label: "Other", icon: "Users", text: "Something else — tell us below" },
];

export const quoteServices = [
  { id: "website", label: "Website", icon: "Globe" },
  { id: "ecommerce", label: "E-commerce", icon: "ShoppingBag" },
  { id: "crm-erp", label: "CRM / ERP", icon: "LayoutDashboard" },
  { id: "custom-software", label: "Custom Software", icon: "Puzzle" },
  { id: "mobile-app", label: "Mobile App", icon: "Smartphone" },
  { id: "ai-automation", label: "AI Automation", icon: "Bot" },
  { id: "whatsapp-automation", label: "WhatsApp Automation", icon: "MessageCircle" },
  { id: "cloud-devops", label: "Cloud / DevOps", icon: "Cloud" },
  { id: "other", label: "Other", icon: "Wrench" },
];

export const budgets = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹5,00,000",
  "Above ₹5,00,000",
  "Not sure yet",
];

export const contactMethods = ["WhatsApp", "Phone call", "Email"];

export const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
  "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
  "Outside India",
];
