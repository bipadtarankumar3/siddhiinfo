import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ArrowRight, ArrowUpRight, Heart } from "lucide-react";
import BrandIcon from "./BrandIcon";
import WhatsAppIcon from "./WhatsAppIcon";
import Skyline from "./india/Skyline";
import Rangoli from "./india/Rangoli";
import Jali from "./india/Jali";
import { site, whatsappLink } from "@/lib/site";
import { services, industries, portfolio } from "@/lib/data";

const cities = ["Kolkata", "Delhi NCR", "Mumbai", "Bengaluru", "Hyderabad", "Chennai", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Patna", "Bhubaneswar", "Guwahati", "Ranchi", "Siliguri", "Indore", "Surat", "Kochi"];

export default function Footer() {
  const year = new Date().getFullYear();
  const tel = site.phone.replace(/\s/g, "");
  const live = portfolio.filter((p) => !p.concept);

  const contacts = [
    { icon: WhatsAppIcon, label: "WhatsApp", value: "Chat with us", href: whatsappLink(), ext: true, tint: "from-[#25D366] to-[#128C7E]" },
    { icon: Phone, label: "Call us", value: site.phone, href: `tel:${tel}`, tint: "from-brand-500 to-electric-500" },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}`, tint: "from-electric-500 to-brand-600" },
    { icon: MapPin, label: "Office", value: `${site.address.city}, ${site.address.region}`, tint: "from-mint-500 to-electric-600" },
  ];

  return (
    <footer className="relative text-slate-300">
      {/* ---------- sunset sky with Indian skyline ---------- */}
      <div aria-hidden="true" className="relative overflow-hidden bg-gradient-to-b from-white via-saffron-50 to-[#ffc9a3]">
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent via-[#f4a3a8]/50 to-[#2b6cc4]/60" />
        <div className="absolute bottom-[-30%] left-1/2 size-[22rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#ffd36e] to-[#ff8a3d] opacity-90 sm:size-[30rem]" />
        <div className="absolute bottom-[-30%] left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-[#ffb35c]/30 blur-3xl sm:size-[46rem]" />
        <Skyline fit="xMidYMax slice" className="relative -mb-px block h-28 w-full text-brand-950 sm:h-40 lg:h-auto" />
      </div>

      {/* ---------- main footer body ---------- */}
      <div className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-[#0a1d4a] to-ink">
        <Jali uid="footer-jali" className="pointer-events-none absolute inset-0" opacity={0.06} />
        <Rangoli className="pointer-events-none absolute -left-40 top-24 hidden w-[30rem] text-brand-300 opacity-[0.08] lg:block" />
        <Rangoli className="pointer-events-none absolute -bottom-40 -right-40 w-[26rem] text-mint-300 opacity-[0.08]" />
        <div aria-hidden="true" className="animate-blob absolute left-1/3 top-10 size-96 rounded-full bg-brand-600/20 blur-3xl" />

        <div className="container-x relative">
          {/* brand + contact tiles */}
          <div className="grid gap-8 border-b border-white/10 py-12 lg:py-14">
            <div className="flex items-center gap-5">
              <Link href="/" aria-label="Siddhi Info home" className="grid size-20 shrink-0 place-items-center rounded-3xl bg-white p-2.5 shadow-2xl shadow-black/40 ring-4 ring-white/10 transition hover:-rotate-3 hover:scale-105 sm:size-24">
                <Image src="/logo-192.png" alt="" width={192} height={192} className="size-full object-contain" />
              </Link>
              <div>
                <p className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Siddhi <span className="text-gradient-light">Info</span>
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-mint-300 sm:text-sm">{site.tagline}</p>
                <p className="mt-1.5 text-slate-400">आपका बिज़नेस, हमारी टेक्नोलॉजी।</p>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {contacts.map(({ icon: I, label, value, href, ext, tint }) => {
                const inner = (
                  <>
                    <span className={`grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${tint} text-white shadow-lg`}>
                      <I className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-slate-400">{label}</span>
                      <span className="block truncate text-sm font-semibold text-white">{value}</span>
                    </span>
                  </>
                );
                const cls = "flex h-full items-center gap-3 rounded-2xl bg-white/[0.05] p-3 ring-1 ring-white/10 backdrop-blur transition";
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} {...(ext && { target: "_blank", rel: "noopener noreferrer" })} className={`${cls} hover:-translate-y-0.5 hover:bg-white/10 hover:ring-white/25`}>
                        {inner}
                      </a>
                    ) : (
                      <div className={cls}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-12">
            <div className="col-span-2 lg:col-span-4">
              <h2 className="footer-title">About Siddhi Info</h2>
              <p className="mt-4 max-w-sm leading-relaxed text-slate-400">{site.description}</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li className="flex items-center gap-3"><MapPin className="size-4 shrink-0 text-mint-300" aria-hidden="true" />{site.address.city}, {site.address.region}, India</li>
                <li className="flex items-center gap-3"><Clock className="size-4 shrink-0 text-mint-300" aria-hidden="true" />{site.hours}</li>
              </ul>
              <Social />
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/10">
                  <span className="flex h-3.5 w-6 flex-col overflow-hidden rounded-[3px]" aria-hidden="true">
                    <span className="flex-1 bg-saffron-500" /><span className="flex-1 bg-white" /><span className="flex-1 bg-indiagreen" />
                  </span>
                  Proudly Made in India
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3.5 py-1.5 text-xs font-bold text-amber-300 ring-1 ring-amber-500/25">
                  🇮🇳 28 States & 8 UTs
                </span>
              </div>
            </div>

            <FooterCol title="Services" className="col-span-2 sm:col-span-1 lg:col-span-3">
              {services.map((s) => (
                <li key={s.slug}><FooterLink href={`/services/${s.slug}/`}>{s.title}</FooterLink></li>
              ))}
            </FooterCol>

            <FooterCol title="Industries" className="lg:col-span-3">
              {industries.map((i) => (
                <li key={i.slug}><FooterLink href={`/industries/${i.slug}/`}>{i.title}</FooterLink></li>
              ))}
            </FooterCol>

            <FooterCol title="Company" className="lg:col-span-2">
              {[
                ["About us", "/about/"],
                ["Our work", "/work/"],
                ["Pricing", "/pricing/"],
                ["Blog", "/blog/"],
                ["Contact", "/contact/"],
                ["Privacy policy", "/privacy-policy/"],
                ["Terms of service", "/terms/"],
              ].map(([l, h]) => (
                <li key={h}><FooterLink href={h}>{l}</FooterLink></li>
              ))}
            </FooterCol>
          </div>

          {/* live work strip */}
          <div className="rounded-3xl bg-white/[0.04] p-5 ring-1 ring-white/10 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="footer-title">Our live work</h2>
              <Link href="/work/" className="inline-flex min-h-10 items-center gap-1 text-sm font-semibold text-mint-300 hover:text-mint-200">
                See all projects <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {live.map((p) => (
                <li key={p.slug}>
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-white/30">
                    <span className="relative block aspect-[16/9] overflow-hidden">
                      <Image src={p.images.desktop} alt={`${p.name} website`} fill sizes="(min-width: 1024px) 280px, 45vw" className="object-cover object-top transition duration-500 group-hover:scale-105" />
                    </span>
                    <span className="flex items-center justify-between gap-2 px-3 py-2.5">
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-white">{p.name}</span>
                        <span className="block truncate text-xs text-slate-400">{p.url}</span>
                      </span>
                      <ArrowUpRight className="size-4 shrink-0 text-slate-400 transition group-hover:text-white" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* cities ribbon */}
          <div className="py-10">
            <p className="text-center text-sm text-slate-400">
              Serving businesses across Bharat <span className="text-mint-300">— आप जहाँ भी हों, हम साथ हैं।</span>
            </p>
            <div className="relative mt-4 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
              <ul className="animate-marquee flex w-max gap-3" aria-label="Cities we serve">
                {[...cities, ...cities].map((c, i) => (
                  <li key={i} aria-hidden={i >= cities.length || undefined} className="shrink-0 rounded-full bg-white/[0.05] px-4 py-1.5 text-sm text-slate-300 ring-1 ring-white/10">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="relative">
          <div aria-hidden="true" className="flex h-1">
            <span className="flex-1 bg-saffron-500" /><span className="flex-1 bg-white" /><span className="flex-1 bg-indiagreen" />
          </div>
          <div className="bg-black/30">
            <div className="container-x flex flex-col items-center gap-2 py-4 text-center text-sm text-slate-400 sm:flex-row sm:justify-between sm:text-left">
              <p>© {year} {site.legalName}. All rights reserved.</p>
              <p className="flex items-center gap-1.5">
                Made with <Heart className="size-4 fill-rose-500 text-rose-500" aria-label="love" /> in India, for Bharat’s businesses
              </p>
              <p className="flex gap-4">
                <Link href="/privacy-policy/" className="inline-flex min-h-10 items-center hover:text-white">Privacy</Link>
                <Link href="/terms/" className="inline-flex min-h-10 items-center hover:text-white">Terms</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 py-0.5 text-slate-300 transition hover:text-white">
      <span aria-hidden="true" className="size-1.5 shrink-0 rotate-45 bg-mint-400/60 transition group-hover:bg-mint-300" />
      {children}
    </Link>
  );
}

function FooterCol({ title, children, className = "" }) {
  return (
    <div className={className}>
      <h2 className="footer-title">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm">{children}</ul>
    </div>
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
          <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Siddhi Info on ${key}`} className="grid size-10 place-items-center rounded-xl bg-white/5 text-slate-300 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white">
            {socialIcons[key] ? <BrandIcon name={socialIcons[key]} color={false} className="size-4" /> : <span className="text-xs font-bold">in</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
