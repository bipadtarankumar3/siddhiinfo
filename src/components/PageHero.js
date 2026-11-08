import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "./JsonLd";
import Network from "./Network";
import { absoluteUrl } from "@/lib/site";

// crumbs: [{ label, href }] — Home is added automatically
export default function PageHero({ eyebrow, title, text, crumbs = [], children }) {
  const all = [{ label: "Home", href: "/" }, ...crumbs];
  return (
    <section className="bg-hero relative -mt-18 overflow-hidden pt-18 text-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: absoluteUrl(c.href),
          })),
        }}
      />
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Network uid="hero-net" className="pointer-events-none absolute -right-24 top-6 hidden w-[42rem] opacity-50 lg:block" />
      <div className="container-x relative pb-16 pt-10 sm:pb-20 sm:pt-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-400">
            {all.map((c, i) => (
              <li key={c.href} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="size-3.5" aria-hidden="true" />}
                {i === all.length - 1 ? (
                  <span aria-current="page" className="text-slate-200">{c.label}</span>
                ) : (
                  <Link href={c.href} className="hover:text-white">{c.label}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow eyebrow-dark mt-8">{eyebrow}</p>}
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{text}</p>}
        {children}
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-aqua-400/60 to-transparent" />
    </section>
  );
}
