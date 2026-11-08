import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";
import { services, industries } from "@/lib/data";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-ink text-slate-300">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-600 via-aqua-400 to-mint-400" />
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" aria-label="Siddhi Info home" className="inline-block">
            <Logo light size={44} />
          </Link>
          <p className="mt-5 max-w-sm leading-relaxed text-slate-400">{site.description}</p>
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
          <p>Made in India 🇮🇳 for Indian businesses</p>
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
