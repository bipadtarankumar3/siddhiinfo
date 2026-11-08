import Image from "next/image";
import { pageMeta } from "@/lib/site";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import { reasons } from "@/lib/data";

export const metadata = pageMeta({
  title: "About Us — Technology Partner for Indian Small Businesses",
  description: "Siddhi Info is an Indian digital solutions company helping small and medium businesses go online with websites, software, automation and marketing.",
  path: "/about/",
});

const values = [
  { title: "Honest advice", text: "We recommend only what will help your business — even if it means a smaller project for us." },
  { title: "Simple language", text: "No technical jargon. We explain in Hindi or English, whatever you prefer." },
  { title: "Long-term support", text: "We grow with you. Many small fixes, updates and ideas happen after launch." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Siddhi Info"
        title="Helping India’s small businesses win online"
        text="‘Siddhi’ means success and accomplishment. Our mission is simple: give every small business in India access to the same digital tools that big companies use — at a price that makes sense."
        crumbs={[{ label: "About", href: "/about/" }]}
      />
      <section className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-slate-600">
          <h2 className="section-title">Our story</h2>
          <p>
            Small businesses are the backbone of India — kirana stores, clinics, coaching centres, restaurants,
            workshops and family-run manufacturers. Yet most of them are still invisible online or stuck with
            tools that were never built for them.
          </p>
          <p>
            Siddhi Info was started to fix that. We combine web development, software and marketing into practical
            packages that a business owner can understand, afford and actually use every day.
          </p>
          <p>
            Whether you need your first website, want to sell online, or need to replace a pile of registers with
            simple software, we are your long-term technology partner.
          </p>
        </div>
        <div className="grid gap-5 self-start">
          <div className="overflow-hidden rounded-3xl shadow-xl shadow-brand-900/10">
            <Image src="/images/developer-workspace.webp" alt="Indian web developer working on a laptop at his desk" width={720} height={540} sizes="(min-width: 1024px) 560px, 100vw" className="h-auto w-full" />
          </div>
          {values.map((v, i) => (
            <div key={v.title} className="card flex gap-5 p-6">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-600 font-bold text-white">{i + 1}</span>
              <div>
                <h3 className="font-bold text-ink">{v.title}</h3>
                <p className="mt-1 text-slate-600">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-x">
          <h2 className="section-title text-center">What makes us different</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="card p-6">
                <Icon name={r.icon} className="size-6 text-brand-600" />
                <h3 className="mt-4 font-bold text-ink">{r.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
