import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "./JsonLd";
import Toran from "./india/Toran";
import Rangoli from "./india/Rangoli";
import Jali from "./india/Jali";
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
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(36rem_22rem_at_90%_0%,rgb(249_115_22/0.25),transparent_60%),radial-gradient(30rem_20rem_at_0%_100%,rgb(219_39_119/0.18),transparent_60%)]" />
      <Jali uid="page-jali" className="pointer-events-none absolute inset-0" opacity={0.08} />
      <Rangoli className="pointer-events-none absolute -right-24 top-16 hidden w-[24rem] opacity-25 lg:block" />
      <Toran uid="page-toran" className="relative" />
      <div className="container-x relative pb-16 pt-8 sm:pb-20 sm:pt-10">
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
        {eyebrow && <p className="eyebrow mt-8 !text-marigold-400">{eyebrow}</p>}
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">{title}</h1>
        <span aria-hidden="true" className="mt-4 block h-1.5 w-32 rounded-full bg-gradient-to-r from-saffron-500 via-marigold-400 to-pink-500" />
        {text && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{text}</p>}
        {children}
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-1"><span className="flex-1 bg-saffron-500" /><span className="flex-1 bg-white" /><span className="flex-1 bg-indiagreen" /></div>
    </section>
  );
}
