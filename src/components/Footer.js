import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import BrandIcon from "./BrandIcon";
import ColorIcon from "./ColorIcon";
import Toran from "./india/Toran";
import Skyline from "./india/Skyline";
import { site, whatsappLink, telHref, mailHref } from "@/lib/site";
import { smallBusinessServices, enterpriseServices, portfolio } from "@/lib/data";

const columns = (smallOnly) => [
  {
    title: "Small Business",
    color: "#F97316",
    links: [["Small Business Solutions", "/small-business/"], ...smallOnly.map((s) => [s.title, `/services/${s.slug}/`])],
  },
  {
    title: "Enterprise",
    color: "#14B8A6",
    links: [["Enterprise & Custom Projects", "/enterprise/"], ...enterpriseServices.map((s) => [s.title, `/services/${s.slug}/`])],
  },
  {
    title: "Company",
    color: "#F472B6",
    links: [
      ["About", "/about/"],
      ["Our work", "/work/"],
      ["Pricing", "/pricing/"],
      ["Custom development pricing", "/pricing/#custom"],
      ["Industries", "/industries/"],
      ["Blog", "/blog/"],
      ["Contact", "/contact/"],
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const wa = whatsappLink();
  const smallOnly = smallBusinessServices.filter((s) => s.audience === "small");

  const contacts = [
    { icon: "Mail", label: "Email us", value: site.email, href: mailHref },
    wa && { icon: "MessageCircle", label: "WhatsApp", value: "Chat with us", href: wa, external: true },
    telHref && { icon: "Phone", label: "Call us", value: site.phone, href: telHref },
    { icon: "MapPin", label: "Based in", value: `${site.address.city}, ${site.address.region}` },
    { icon: "Clock", label: "We reply", value: site.responseTime },
    { icon: "Languages", label: "We speak", value: "English · हिन्दी · বাংলা" },
  ].filter(Boolean);

  return (
    <footer className="relative isolate overflow-hidden bg-[#071636] text-slate-100">
      {/* Background photo of Kolkata under a deep navy overlay */}
      <Image
        src="/images/industry-real-estate.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-25 grayscale"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(7_22_54/0.97)_0%,rgb(7_22_54/0.985)_40%,rgb(5_16_40/1)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(36rem_18rem_at_0%_20%,rgb(249_115_22/0.12),transparent_60%),radial-gradient(36rem_18rem_at_100%_50%,rgb(219_39_119/0.10),transparent_60%)]" />

      <div aria-hidden="true" className="flex h-1.5"><span className="flex-1 bg-saffron-500" /><span className="flex-1 bg-white" /><span className="flex-1 bg-indiagreen" /></div>
      <Toran uid="footer-toran" />

      <div className="container-x">
        {/* CTA band */}
        <div className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-r from-saffron-600 via-pink-600 to-indigo-700 p-6 text-white shadow-2xl shadow-black/30 sm:p-8">
          <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-16 size-56 rounded-full bg-white/10" />
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-100">Have a project in mind?</p>
              <p className="mt-1 text-2xl font-extrabold sm:text-3xl">Let&apos;s talk — the first consultation is free.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact/#enquiry" className="btn btn-light">
                Book a free consultation <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="/pricing/" className="btn bg-white/15 text-white ring-1 ring-white/40 hover:bg-white/25">
                See pricing
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 py-14 lg:grid-cols-12">
          {/* Brand + contacts */}
          <div className="lg:col-span-4 xl:col-span-3">
            <Link href="/" aria-label="Siddhi Info home" className="inline-flex items-center gap-3">
              <span className="grid size-14 place-items-center rounded-2xl bg-white p-1.5 shadow-lg ring-4 ring-white/10">
                <Image src="/logo-192.png" alt="" width={192} height={192} className="size-full object-contain" />
              </span>
              <span>
                <span className="block text-2xl font-extrabold text-white">Siddhi <span className="text-marigold-400">Info</span></span>
                <span className="block text-sm text-amber-200" lang="hi">आपका बिज़नेस, हमारी टेक्नोलॉजी</span>
              </span>
            </Link>
            <p className="mt-5 max-w-md leading-relaxed text-slate-200">{site.description}</p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {contacts.map((c) => {
                const inner = (
                  <>
                    <ColorIcon name={c.icon} className="size-10" />
                    <span className="min-w-0">
                      <span className="block text-xs font-medium text-slate-300">{c.label}</span>
                      <span className="block break-words text-sm font-semibold text-white">{c.value}</span>
                    </span>
                  </>
                );
                const cls = "flex items-center gap-3 rounded-2xl bg-[#0d2250] p-2.5 pr-4 ring-1 ring-white/15";
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a href={c.href} {...(c.external && { target: "_blank", rel: "noopener noreferrer" })} className={`${cls} transition hover:bg-[#13306b] hover:ring-white/30`}>{inner}</a>
                    ) : (
                      <div className={cls}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
            <Social />
          </div>

          {/* Link columns */}
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-8 xl:col-span-9 xl:pl-6">
            {columns(smallOnly).map((col) => (
              <nav key={col.title} aria-label={`${col.title} links`}>
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                  {col.title}
                  <span aria-hidden="true" className="mt-2 block h-1 w-10 rounded-full" style={{ background: col.color }} />
                </h2>
                <ul className="mt-3 text-[0.95rem]">
                  {col.links.map(([label, href], i) => (
                    <li key={href + label}>
                      <Link href={href} className={`group inline-flex min-h-10 items-start gap-2 py-2 leading-snug hover:text-white ${i === 0 && col.title !== "Company" ? "font-semibold text-white" : "text-slate-100"}`}>
                        <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rotate-45 transition group-hover:scale-150" style={{ background: col.color }} />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Live products strip */}
        <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-[#0d2250] p-4 text-sm ring-1 ring-white/15">
          <span className="mr-1 font-bold text-white">Live products:</span>
          {portfolio.filter((p) => !p.concept).map(({ name: n, liveUrl: u }) => (
            <a key={u} href={u} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center gap-1 rounded-full bg-white/15 px-3 text-white hover:bg-white/25 hover:text-white">
              {n} <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <Skyline className="mt-10 block h-36 w-full sm:h-auto" />

      <div className="border-t border-white/10 bg-[#040d22]">
        <div className="container-x flex flex-col gap-3 py-5 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p className="flex flex-wrap gap-x-5">
            <Link href="/privacy-policy/" className="inline-flex min-h-10 items-center hover:text-white">Privacy policy</Link>
            <Link href="/terms/" className="inline-flex min-h-10 items-center hover:text-white">Terms</Link>
            <Link href="/sitemap.xml" className="inline-flex min-h-10 items-center hover:text-white">Sitemap</Link>
          </p>
          <p className="flex items-center gap-2">
            <span aria-hidden="true" className="flex h-3 w-5 flex-col overflow-hidden rounded-[2px]"><span className="flex-1 bg-saffron-500" /><span className="flex-1 bg-white" /><span className="flex-1 bg-indiagreen" /></span>
            Made in Kolkata, India
          </p>
        </div>
      </div>
    </footer>
  );
}

const socialIcons = { facebook: "siFacebook", instagram: "siInstagram", youtube: "siYoutube", linkedin: null, x: "siX" };

// Renders only the profiles filled in src/lib/site.js → site.social
function Social() {
  const links = Object.entries(site.social).filter(([, url]) => url);
  if (!links.length) return null;
  return (
    <ul className="mt-5 flex gap-2" aria-label="Social media">
      {links.map(([key, url]) => (
        <li key={key}>
          <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Siddhi Info on ${key}`} className="grid size-11 place-items-center rounded-xl bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/20">
            {socialIcons[key] ? <BrandIcon name={socialIcons[key]} color={false} className="size-4" /> : <span className="text-xs font-bold">in</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
