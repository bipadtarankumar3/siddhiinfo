import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import BrandIcon from "./BrandIcon";
import { site } from "@/lib/site";
import { services, industries } from "@/lib/data";
import Skyline from "./india/Skyline";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-ink text-slate-300">
      <div className="relative bg-white">
        <Skyline className="-mb-px block h-auto w-full text-ink" />
        {/* brand emblem sitting on the skyline edge */}
        <Link
          href="/"
          aria-label="Siddhi Info home"
          className="absolute bottom-0 left-1/2 z-10 grid size-20 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-white p-3 shadow-2xl shadow-black/40 ring-[6px] ring-ink transition hover:scale-105 sm:size-28 sm:p-4 sm:ring-8"
        >
          <Image src="/logo-192.png" alt="" width={192} height={192} className="size-full object-contain" />
        </Link>
      </div>

      {/* brand line */}
      <div className="container-x flex flex-col items-center pb-10 pt-16 text-center sm:pt-20">
        <p className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Siddhi <span className="text-gradient-light">Info</span>
        </p>
        <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-saffron-300">{site.tagline}</p>
        <p className="mt-3 text-slate-400">आपका बिज़नेस, हमारी टेक्नोलॉजी।</p>
      </div>
      <div aria-hidden="true" className="container-x"><div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" /></div>

      <div className="container-x grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">About us</h2>
          <p className="mt-4 max-w-sm leading-relaxed text-slate-400">{site.description}</p>
          <Social />
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-aqua-400" aria-hidden="true" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">{site.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-aqua-400" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-aqua-400" aria-hidden="true" />
              {site.address.city}, {site.address.region}, India
            </li>
            <li className="flex items-center gap-3">
              <Clock className="size-4 text-aqua-400" aria-hidden="true" />
              {site.hours}
            </li>
          </ul>
        </div>

        <FooterCol title="Services" className="lg:col-span-3">
          {services.map((s) => (
            <li key={s.slug}><Link href={`/services/${s.slug}/`} className="transition hover:text-mint-300">{s.title}</Link></li>
          ))}
        </FooterCol>

        <FooterCol title="Industries" className="lg:col-span-3">
          {industries.map((i) => (
            <li key={i.slug}><Link href={`/industries/${i.slug}/`} className="transition hover:text-mint-300">{i.title}</Link></li>
          ))}
        </FooterCol>

        <FooterCol title="Company" className="lg:col-span-2">
          <li><Link href="/about/" className="transition hover:text-mint-300">About us</Link></li>
          <li><Link href="/pricing/" className="transition hover:text-mint-300">Pricing</Link></li>
          <li><Link href="/blog/" className="transition hover:text-mint-300">Blog</Link></li>
          <li><Link href="/contact/" className="transition hover:text-mint-300">Contact</Link></li>
          <li><Link href="/privacy-policy/" className="transition hover:text-mint-300">Privacy policy</Link></li>
          <li><Link href="/terms/" className="transition hover:text-mint-300">Terms of service</Link></li>
        </FooterCol>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="flex h-3 w-5 flex-col overflow-hidden rounded-[2px]" aria-hidden="true">
              <span className="flex-1 bg-saffron-500" /><span className="flex-1 bg-white" /><span className="flex-1 bg-indiagreen" />
            </span>
            Made in India, for Bharat’s businesses
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children, className = "" }) {
  return (
    <div className={className}>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
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
