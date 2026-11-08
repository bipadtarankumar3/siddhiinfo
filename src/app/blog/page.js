import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/site";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { posts } from "@/lib/blog";

export const metadata = pageMeta({
  title: "Blog — Digital Growth Tips for Indian Small Businesses",
  description: "Practical guides on websites, Google Maps, WhatsApp, billing and online marketing for Indian small business owners.",
  path: "/blog/",
});

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Grow smarter with simple digital tips"
        text="Short, practical guides written for busy business owners — not tech experts."
        crumbs={[{ label: "Blog", href: "/blog/" }]}
      />
      <section className="container-x grid gap-6 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((p) => (
          <article key={p.slug} className="card card-hover group relative flex flex-col p-7">
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">{t}</span>
              ))}
            </div>
            <h2 className="mt-4 text-lg font-bold leading-snug text-ink">
              <Link href={`/blog/${p.slug}/`} className="after:absolute after:inset-0">{p.title}</Link>
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.description}</p>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
              <time dateTime={p.date}>{formatDate(p.date)} · {p.readMinutes} min read</time>
              <ArrowRight className="size-4 text-brand-600 transition group-hover:translate-x-1" aria-hidden="true" />
            </div>
          </article>
        ))}
      </section>
      <CtaBanner />
    </>
  );
}
