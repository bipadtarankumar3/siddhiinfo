import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "./JsonLd";
import { absoluteUrl } from "@/lib/site";

// crumbs: [{ label, href }] — Home is added automatically
export default function PageHero({ eyebrow, title, text, crumbs = [], children }) {
  const all = [{ label: "Home", href: "/" }, ...crumbs];
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-brand-50/70 to-white">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
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
      <div className="container-x relative py-14 sm:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
            {all.map((c, i) => (
              <li key={c.href} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="size-3.5" aria-hidden="true" />}
                {i === all.length - 1 ? (
                  <span aria-current="page" className="text-slate-700">{c.label}</span>
                ) : (
                  <Link href={c.href} className="hover:text-brand-600">{c.label}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow mt-8">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{text}</p>}
        {children}
      </div>
    </section>
  );
}
