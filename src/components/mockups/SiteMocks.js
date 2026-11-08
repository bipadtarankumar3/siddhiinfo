/* eslint-disable @next/next/no-img-element */
// Illustrative website & app previews for the portfolio (concept demos).
// Everything is sized in `em` so it scales with the device frame.

const sites = {
  business: {
    brand: "Nirmaan Interiors",
    nav: ["Projects", "Services", "About", "Contact"],
    cta: "Free Site Visit",
    bg: "#faf7f2", fg: "#292524", primary: "#b45309", soft: "#fef3c7",
    tag: "Interior design studio • Kolkata",
    title: ["Homes designed", "around you."],
    sub: "Modular kitchens, wardrobes & complete home interiors with a 10-year warranty.",
    img: "/images/mock-interiors.webp",
    section: "What we design",
    cards: [["Modular Kitchen", "From ₹1.5 L"], ["Wardrobes", "From ₹45,000"], ["Living Room", "Custom design"], ["Full Home", "Turnkey"]],
    type: "service",
  },
  ecommerce: {
    brand: "Desi Basket",
    nav: ["Fruits", "Vegetables", "Staples", "Offers"],
    cta: "Cart • 3",
    bg: "#f6fdf8", fg: "#14532d", primary: "#16a34a", soft: "#dcfce7",
    tag: "Free delivery above ₹499",
    title: ["Fresh from farms,", "at your door."],
    sub: "Organic fruits, vegetables & daily staples. Pay with UPI, card or cash on delivery.",
    img: "/images/mock-grocery.webp",
    section: "Today’s deals",
    cards: [["Alphonso Mango", "₹399 / kg", "#fbbf24"], ["Basmati Rice", "₹129 / kg", "#e7e5e4"], ["Desi Ghee", "₹549", "#fde68a"], ["Masoor Dal", "₹98 / kg", "#fb923c"]],
    type: "product",
  },
  restaurant: {
    brand: "Spice Route",
    nav: ["Menu", "Order", "Reserve", "Reviews"],
    cta: "Order Now",
    bg: "#1c1210", fg: "#fff7ed", primary: "#f97316", soft: "#3b2418", dark: true,
    tag: "North Indian kitchen • Since 2012",
    title: ["Taste of Punjab,", "now delivered."],
    sub: "Order online for pickup & delivery, or book your table in 2 taps.",
    img: "/images/mock-food.webp",
    section: "Chef’s specials",
    cards: [["Chole Bhature", "₹180"], ["Paneer Tikka", "₹260"], ["Dal Makhani", "₹220"], ["Butter Naan", "₹50"]],
    type: "menu",
  },
  education: {
    brand: "Gyan Academy",
    nav: ["Courses", "Results", "Faculty", "Fees"],
    cta: "Enquire Now",
    bg: "#f8faff", fg: "#1e293b", primary: "#2563eb", soft: "#dbeafe",
    tag: "Admissions open 2026–27",
    title: ["Crack JEE & NEET", "with confidence."],
    sub: "Small batches, experienced faculty, weekly tests and daily doubt sessions.",
    img: "/images/mock-students.webp",
    section: "Popular courses",
    cards: [["JEE Main + Adv.", "2-year batch"], ["NEET (UG)", "2-year batch"], ["Class 10 Boards", "Weekend batch"], ["Foundation", "Class 8–9"]],
    type: "course",
  },
  healthcare: {
    brand: "CarePlus Clinic",
    nav: ["Doctors", "Services", "Lab Tests", "Contact"],
    cta: "Book Appointment",
    bg: "#f4fbfa", fg: "#134e4a", primary: "#0d9488", soft: "#ccfbf1",
    tag: "Mon–Sat • 9 AM – 8 PM",
    title: ["Care you can", "trust, nearby."],
    sub: "Book appointments online and get reminders on WhatsApp.",
    img: "/images/mock-doctor.webp",
    section: "Available today",
    cards: [["General Physician", "5:30 PM"], ["Paediatrician", "6:00 PM"], ["Gynaecologist", "7:00 PM"], ["Dermatologist", "7:30 PM"]],
    type: "doctor",
  },
  ngo: {
    brand: "Seva Setu",
    nav: ["Projects", "Impact", "Volunteer", "CSR"],
    cta: "Donate Now",
    bg: "#fffaf5", fg: "#431407", primary: "#ea580c", soft: "#ffedd5",
    tag: "Education • Nutrition • Health",
    title: ["Every child deserves", "a fair start."],
    sub: "Support education and nutrition programmes for children in rural Bengal.",
    img: "/images/mock-children.webp",
    section: "Our programmes",
    cards: [["Shiksha", "Education"], ["Poshan", "Nutrition"], ["Swasthya", "Health camps"], ["CSR Partners", "Impact reports"]],
    type: "program",
  },
};

function Logo({ s }) {
  return (
    <span className="flex items-center gap-[0.4em] font-extrabold" style={{ color: s.dark ? s.fg : s.fg }}>
      <span className="grid size-[1.5em] place-items-center rounded-[0.4em] text-[0.8em] text-white" style={{ background: s.primary }}>
        {s.brand[0]}
      </span>
      <span className="text-[0.95em]">{s.brand}</span>
    </span>
  );
}

function Card({ s, card, i }) {
  const [t, d, c] = card;
  const muted = s.dark ? "rgba(255,247,237,0.65)" : "#64748b";
  const surface = s.dark ? s.soft : "#ffffff";
  const border = s.dark ? "transparent" : "#e7e5e4";
  return (
    <div className="rounded-[0.7em] p-[0.7em]" style={{ background: surface, border: `0.06em solid ${border}` }}>
      {s.type === "product" && (
        <div className="mb-[0.5em] grid h-[3.6em] place-items-center rounded-[0.5em]" style={{ background: s.soft }}>
          <span className="block size-[2em] rounded-full" style={{ background: c }} />
        </div>
      )}
      {s.type === "doctor" && (
        <span className="mb-[0.5em] grid size-[2.2em] place-items-center rounded-full text-[0.8em] font-bold text-white" style={{ background: s.primary }}>
          Dr
        </span>
      )}
      {(s.type === "service" || s.type === "course" || s.type === "program") && (
        <span className="mb-[0.5em] block size-[1.8em] rounded-[0.45em]" style={{ background: s.soft, boxShadow: `inset 0 0 0 0.5em ${s.soft}`, border: `0.25em solid ${s.primary}` }} />
      )}
      {s.type === "menu" && (
        <span className="mb-[0.5em] flex size-[0.9em] items-center justify-center rounded-[0.15em] border-[0.1em] border-green-500">
          <span className="size-[0.4em] rounded-full bg-green-500" />
        </span>
      )}
      <p className="text-[0.72em] font-bold" style={{ color: s.fg }}>{t}</p>
      <p className="mt-[0.15em] text-[0.62em]" style={{ color: i === 0 && s.type === "doctor" ? s.primary : muted }}>{d}</p>
      {(s.type === "product" || s.type === "menu") && (
        <span className="mt-[0.45em] inline-block rounded-full px-[0.6em] py-[0.15em] text-[0.55em] font-bold text-white" style={{ background: s.primary }}>
          Add +
        </span>
      )}
    </div>
  );
}

function SiteDesktop({ s }) {
  return (
    <div className="h-full" style={{ background: s.bg, color: s.fg }}>
      <div className="flex items-center justify-between px-[2em] py-[1em]">
        <Logo s={s} />
        <div className="flex gap-[1.4em] text-[0.68em] font-medium opacity-75">
          {s.nav.map((n) => <span key={n}>{n}</span>)}
        </div>
        <span className="rounded-full px-[0.9em] py-[0.35em] text-[0.65em] font-bold text-white" style={{ background: s.primary }}>{s.cta}</span>
      </div>
      <div className="grid grid-cols-[1.05fr_1fr] items-center gap-[1.6em] px-[2em] pt-[0.8em]">
        <div>
          <span className="inline-block rounded-full px-[0.8em] py-[0.25em] text-[0.6em] font-semibold" style={{ background: s.soft, color: s.dark ? "#fdba74" : s.primary }}>
            {s.tag}
          </span>
          <p className="mt-[0.6em] text-[2em] font-extrabold leading-[1.05] tracking-tight">
            {s.title[0]}<br /><span style={{ color: s.primary }}>{s.title[1]}</span>
          </p>
          <p className="mt-[0.7em] max-w-[24em] text-[0.72em] leading-[1.5] opacity-70">{s.sub}</p>
          <div className="mt-[1em] flex gap-[0.6em]">
            <span className="rounded-[0.5em] px-[1em] py-[0.55em] text-[0.68em] font-bold text-white" style={{ background: s.primary }}>{s.cta}</span>
            <span className="flex items-center gap-[0.35em] rounded-[0.5em] bg-[#25D366] px-[1em] py-[0.55em] text-[0.68em] font-bold text-white">WhatsApp</span>
          </div>
        </div>
        <div className="relative h-[12.5em] overflow-hidden rounded-[1em]">
          <img src={s.img} alt="" loading="lazy" decoding="async" className="size-full object-cover" />
          <span className="absolute bottom-[0.6em] left-[0.6em] rounded-[0.5em] bg-white/95 px-[0.7em] py-[0.4em] text-[0.6em] font-bold text-slate-800 shadow">
            ★ 4.8 Google rating
          </span>
        </div>
      </div>
      <div className="px-[2em] pt-[1.4em]">
        <p className="text-[0.9em] font-extrabold">{s.section}</p>
        <div className="mt-[0.6em] grid grid-cols-4 gap-[0.7em]">
          {s.cards.map((c, i) => <Card key={c[0]} s={s} card={c} i={i} />)}
        </div>
      </div>
      <div className="mx-[2em] mt-[1.2em] flex items-center justify-between rounded-[0.8em] px-[1.2em] py-[0.8em] text-white" style={{ background: s.primary }}>
        <div>
          <p className="text-[0.8em] font-bold">Have a question? We reply within minutes.</p>
          <p className="text-[0.6em] opacity-80">Call, WhatsApp or visit us — Mon to Sat</p>
        </div>
        <span className="rounded-full bg-white px-[0.9em] py-[0.35em] text-[0.62em] font-bold" style={{ color: s.primary }}>Chat now</span>
      </div>
      <div className="mt-[1em] flex justify-between px-[2em] text-[0.55em] opacity-50">
        <span>© {s.brand}</span><span>Privacy • Terms • Contact</span>
      </div>
    </div>
  );
}

function SiteMobile({ s }) {
  return (
    <div className="h-full" style={{ background: s.bg, color: s.fg }}>
      <div className="flex items-center justify-between px-[1em] py-[0.7em]">
        <Logo s={s} />
        <span className="flex flex-col gap-[0.2em]" aria-hidden="true">
          {[0, 1, 2].map((i) => <span key={i} className="block h-[0.12em] w-[1.1em] rounded-full" style={{ background: s.fg }} />)}
        </span>
      </div>
      <div className="px-[1em]">
        <div className="h-[8.5em] overflow-hidden rounded-[0.9em]">
          <img src={s.img} alt="" loading="lazy" decoding="async" className="size-full object-cover" />
        </div>
        <p className="mt-[0.8em] text-[1.45em] font-extrabold leading-[1.1] tracking-tight">
          {s.title[0]} <span style={{ color: s.primary }}>{s.title[1]}</span>
        </p>
        <p className="mt-[0.5em] text-[0.72em] leading-[1.45] opacity-70">{s.sub}</p>
        <span className="mt-[0.8em] block rounded-[0.6em] py-[0.6em] text-center text-[0.75em] font-bold text-white" style={{ background: s.primary }}>{s.cta}</span>
        <span className="mt-[0.4em] block rounded-[0.6em] bg-[#25D366] py-[0.6em] text-center text-[0.75em] font-bold text-white">Chat on WhatsApp</span>
        <div className="mt-[0.9em] grid grid-cols-2 gap-[0.5em]">
          {s.cards.slice(0, 2).map((c, i) => <Card key={c[0]} s={s} card={c} i={i} />)}
        </div>
      </div>
    </div>
  );
}

/* ---------------- App-style mocks ---------------- */

const appTheme = {
  dashboard: { brand: "VyaparDesk", primary: "#5839dc", nav: ["Dashboard", "Leads", "Orders", "Inventory", "Invoices", "Reports"] },
  webapp: { brand: "FieldPro", primary: "#2f7bff", nav: ["Bookings", "Schedule", "Technicians", "Payments", "Customers"] },
};

function Sidebar({ t }) {
  return (
    <div className="flex w-[11em] shrink-0 flex-col gap-[0.25em] p-[1em] text-white" style={{ background: "#0b1035" }}>
      <p className="mb-[0.8em] flex items-center gap-[0.4em] text-[0.85em] font-extrabold">
        <span className="grid size-[1.4em] place-items-center rounded-[0.35em] text-[0.8em]" style={{ background: t.primary }}>{t.brand[0]}</span>
        {t.brand}
      </p>
      {t.nav.map((n, i) => (
        <span key={n} className="rounded-[0.45em] px-[0.7em] py-[0.45em] text-[0.66em]" style={{ background: i === 0 ? t.primary : "transparent", opacity: i === 0 ? 1 : 0.7 }}>
          {n}
        </span>
      ))}
    </div>
  );
}

function TopBar({ title }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[1em] font-extrabold text-slate-800">{title}</p>
      <div className="flex items-center gap-[0.6em]">
        <span className="h-[1.7em] w-[10em] rounded-[0.5em] bg-white text-[0.6em] leading-[1.7em] text-slate-400 ring-1 ring-slate-200 indent-[0.8em]">Search…</span>
        <span className="grid size-[1.7em] place-items-center rounded-full bg-saffron-500 text-[0.6em] font-bold text-white">RK</span>
      </div>
    </div>
  );
}

const kpis = [
  ["Today’s sales", "₹1,24,500", "+12%"],
  ["New leads", "18", "+5"],
  ["Pending dues", "₹3.2 L", "−8%"],
  ["Low stock items", "7", "Reorder"],
];
const orders = [
  ["Shree Traders", "INV-2041", "₹48,200", "Paid"],
  ["Gupta Stores", "INV-2040", "₹12,750", "Due"],
  ["Maa Durga Agency", "INV-2039", "₹31,900", "Paid"],
  ["R.K. Enterprises", "INV-2038", "₹8,430", "Draft"],
];
const statusColor = { Paid: ["#dcfce7", "#15803d"], Due: ["#fef3c7", "#b45309"], Draft: ["#e2e8f0", "#475569"] };

function DashboardDesktop() {
  const t = appTheme.dashboard;
  const bars = [42, 58, 50, 66, 61, 78, 72, 88, 80, 95];
  return (
    <div className="flex h-full bg-[#f6f6fb]">
      <Sidebar t={t} />
      <div className="flex-1 p-[1.2em]">
        <TopBar title="Business overview" />
        <div className="mt-[0.9em] grid grid-cols-4 gap-[0.6em]">
          {kpis.map(([k, v, d], i) => (
            <div key={k} className="rounded-[0.7em] bg-white p-[0.7em] ring-1 ring-slate-200" style={i === 0 ? { background: t.primary, color: "#fff" } : {}}>
              <p className="text-[0.58em] opacity-70">{k}</p>
              <p className="mt-[0.2em] text-[1.05em] font-extrabold">{v}</p>
              <p className="mt-[0.15em] text-[0.55em] font-semibold" style={{ color: i === 0 ? "#c4b5fd" : i === 2 ? "#dc2626" : "#16a34a" }}>{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-[0.7em] grid grid-cols-[1.6fr_1fr] gap-[0.6em]">
          <div className="rounded-[0.7em] bg-white p-[0.8em] ring-1 ring-slate-200">
            <p className="text-[0.66em] font-bold text-slate-700">Sales — last 10 days</p>
            <div className="mt-[0.6em] flex h-[6.5em] items-end gap-[0.45em]">
              {bars.map((h, i) => (
                <span key={i} className="flex-1 rounded-t-[0.25em]" style={{ height: `${h}%`, background: i === bars.length - 1 ? "#f97316" : t.primary, opacity: i === bars.length - 1 ? 1 : 0.35 + i * 0.06 }} />
              ))}
            </div>
          </div>
          <div className="rounded-[0.7em] bg-white p-[0.8em] ring-1 ring-slate-200">
            <p className="text-[0.66em] font-bold text-slate-700">Lead sources</p>
            <div className="mt-[0.6em] flex items-center gap-[0.8em]">
              <span className="size-[5em] rounded-full" style={{ background: `conic-gradient(${t.primary} 0 45%, #2f7bff 45% 70%, #25D366 70% 88%, #f97316 88% 100%)`, mask: "radial-gradient(circle, transparent 42%, #000 43%)", WebkitMask: "radial-gradient(circle, transparent 42%, #000 43%)" }} />
              <div className="space-y-[0.3em] text-[0.55em] text-slate-600">
                {[["Website", t.primary], ["Google", "#2f7bff"], ["WhatsApp", "#25D366"], ["Referral", "#f97316"]].map(([n, c]) => (
                  <p key={n} className="flex items-center gap-[0.4em]"><span className="size-[0.7em] rounded-full" style={{ background: c }} />{n}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[0.7em] rounded-[0.7em] bg-white p-[0.8em] ring-1 ring-slate-200">
          <p className="text-[0.66em] font-bold text-slate-700">Recent invoices</p>
          {orders.slice(0, 3).map(([n, inv, amt, st]) => (
            <div key={inv} className="mt-[0.45em] grid grid-cols-[2fr_1fr_1fr_0.8fr] items-center text-[0.58em] text-slate-600">
              <span className="font-semibold text-slate-800">{n}</span><span>{inv}</span><span>{amt}</span>
              <span className="justify-self-start rounded-full px-[0.6em] py-[0.1em] font-semibold" style={{ background: statusColor[st][0], color: statusColor[st][1] }}>{st}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardMobile() {
  const t = appTheme.dashboard;
  return (
    <div className="h-full bg-[#f6f6fb] px-[0.9em]">
      <div className="flex items-center justify-between py-[0.6em]">
        <p className="text-[0.95em] font-extrabold text-slate-800">{t.brand}</p>
        <span className="grid size-[1.8em] place-items-center rounded-full bg-saffron-500 text-[0.6em] font-bold text-white">RK</span>
      </div>
      <div className="grid grid-cols-2 gap-[0.5em]">
        {kpis.map(([k, v], i) => (
          <div key={k} className="rounded-[0.7em] bg-white p-[0.6em] ring-1 ring-slate-200" style={i === 0 ? { background: t.primary, color: "#fff" } : {}}>
            <p className="text-[0.6em] opacity-70">{k}</p>
            <p className="text-[0.95em] font-extrabold">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-[0.6em] rounded-[0.7em] bg-white p-[0.7em] ring-1 ring-slate-200">
        <div className="flex h-[4.5em] items-end gap-[0.3em]">
          {[40, 55, 48, 70, 62, 80, 92].map((h, i) => <span key={i} className="flex-1 rounded-t-[0.2em]" style={{ height: `${h}%`, background: t.primary, opacity: 0.4 + i * 0.09 }} />)}
        </div>
      </div>
      {orders.map(([n, , amt, st]) => (
        <div key={n} className="mt-[0.5em] flex items-center justify-between rounded-[0.6em] bg-white px-[0.7em] py-[0.5em] text-[0.65em] ring-1 ring-slate-200">
          <span className="font-semibold text-slate-800">{n}</span>
          <span className="flex items-center gap-[0.4em]">{amt}<span className="rounded-full px-[0.5em] text-[0.85em] font-semibold" style={{ background: statusColor[st][0], color: statusColor[st][1] }}>{st}</span></span>
        </div>
      ))}
    </div>
  );
}

const jobs = {
  New: [["AC service", "Salt Lake • 11:00"], ["RO repair", "Behala • 12:30"]],
  Assigned: [["Gas refill", "New Town • 1:00", "AS"], ["AC install", "Howrah • 3:00", "MK"]],
  "In progress": [["Deep cleaning", "Park Street", "SD"]],
  Done: [["AC service", "Dum Dum • ₹899 paid", "AS"], ["Fridge repair", "Garia • ₹1,250 paid", "MK"]],
};
const jobColor = { New: "#2f7bff", Assigned: "#7c3aed", "In progress": "#f97316", Done: "#16a34a" };

function WebappDesktop() {
  const t = appTheme.webapp;
  return (
    <div className="flex h-full bg-[#f5f8ff]">
      <Sidebar t={t} />
      <div className="flex-1 p-[1.2em]">
        <TopBar title="Today’s jobs • 9 bookings" />
        <div className="mt-[0.9em] grid grid-cols-4 gap-[0.6em]">
          {Object.entries(jobs).map(([col, items]) => (
            <div key={col} className="rounded-[0.7em] bg-white/70 p-[0.55em] ring-1 ring-slate-200">
              <p className="flex items-center justify-between text-[0.62em] font-bold text-slate-700">
                <span className="flex items-center gap-[0.35em]"><span className="size-[0.6em] rounded-full" style={{ background: jobColor[col] }} />{col}</span>
                <span className="text-slate-400">{items.length}</span>
              </p>
              {items.map(([j, d, who]) => (
                <div key={j + d} className="mt-[0.5em] rounded-[0.55em] bg-white p-[0.55em] shadow-sm ring-1 ring-slate-100" style={{ borderLeft: `0.2em solid ${jobColor[col]}` }}>
                  <p className="text-[0.62em] font-bold text-slate-800">{j}</p>
                  <p className="mt-[0.15em] text-[0.52em] text-slate-500">{d}</p>
                  {who && <span className="mt-[0.35em] grid size-[1.6em] place-items-center rounded-full bg-slate-800 text-[0.48em] font-bold text-white">{who}</span>}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-[0.7em] grid grid-cols-3 gap-[0.6em]">
          {[["Revenue today", "₹14,350"], ["Technicians on duty", "6 / 8"], ["Avg. rating", "4.8 ★"]].map(([k, v]) => (
            <div key={k} className="rounded-[0.7em] bg-white p-[0.7em] ring-1 ring-slate-200">
              <p className="text-[0.58em] text-slate-500">{k}</p>
              <p className="text-[0.95em] font-extrabold text-slate-800">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-[0.7em] rounded-[0.7em] bg-white p-[0.8em] ring-1 ring-slate-200">
          <p className="text-[0.66em] font-bold text-slate-700">Upcoming visits</p>
          {[["Amit S.", "AC service", "Salt Lake", "4:00 PM"], ["Meera K.", "RO repair", "Behala", "4:30 PM"], ["Rahul D.", "Deep cleaning", "Garia", "5:15 PM"]].map(([c, j, a, t]) => (
            <div key={c} className="mt-[0.45em] grid grid-cols-4 text-[0.58em] text-slate-600">
              <span className="font-semibold text-slate-800">{c}</span><span>{j}</span><span>{a}</span><span className="justify-self-end font-semibold text-electric-600">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WebappMobile() {
  const t = appTheme.webapp;
  const list = [["AC service", "Salt Lake • 11:00", "New"], ["Gas refill", "New Town • 1:00", "Assigned"], ["Deep cleaning", "Park Street • 2:30", "In progress"], ["AC service", "Dum Dum • ₹899 paid", "Done"]];
  return (
    <div className="flex h-full flex-col bg-[#f5f8ff]">
      <div className="px-[0.9em] py-[0.6em]" style={{ background: t.primary }}>
        <p className="text-[0.95em] font-extrabold text-white">{t.brand}</p>
        <p className="text-[0.6em] text-white/80">Today • 9 bookings</p>
      </div>
      <div className="flex-1 space-y-[0.5em] p-[0.8em]">
        {list.map(([j, d, st]) => (
          <div key={j + d} className="rounded-[0.7em] bg-white p-[0.65em] ring-1 ring-slate-200" style={{ borderLeft: `0.25em solid ${jobColor[st]}` }}>
            <div className="flex items-center justify-between">
              <p className="text-[0.72em] font-bold text-slate-800">{j}</p>
              <span className="rounded-full px-[0.5em] text-[0.52em] font-bold text-white" style={{ background: jobColor[st] }}>{st}</span>
            </div>
            <p className="mt-[0.2em] text-[0.6em] text-slate-500">{d}</p>
          </div>
        ))}
        <span className="block rounded-[0.6em] py-[0.6em] text-center text-[0.72em] font-bold text-white" style={{ background: t.primary }}>+ New booking</span>
      </div>
      <div className="grid grid-cols-4 border-t border-slate-200 bg-white py-[0.5em] text-center text-[0.5em] text-slate-500">
        {["Jobs", "Schedule", "Pay", "Profile"].map((n, i) => <span key={n} style={i === 0 ? { color: t.primary, fontWeight: 700 } : {}}>{n}</span>)}
      </div>
    </div>
  );
}

export function DesktopMock({ variant }) {
  if (variant === "dashboard") return <DashboardDesktop />;
  if (variant === "webapp") return <WebappDesktop />;
  return <SiteDesktop s={sites[variant] ?? sites.business} />;
}

export function MobileMock({ variant }) {
  if (variant === "dashboard") return <DashboardMobile />;
  if (variant === "webapp") return <WebappMobile />;
  return <SiteMobile s={sites[variant] ?? sites.business} />;
}
