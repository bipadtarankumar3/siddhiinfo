import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import ColorIcon from "@/components/ColorIcon";
import { site, pageMeta, whatsappLink, mailHref } from "@/lib/site";

export const metadata = pageMeta({
  title: "Get a Quote — Website, App & Custom Software Projects",
  description: `Request a quotation from Siddhi Info for a website, online store, CRM/ERP, mobile app, AI automation or cloud project. Takes about two minutes; we reply ${site.responseTime}.`,
  path: "/get-a-quote/",
});

const after = [
  { icon: "Mail", title: "Confirmation", text: "You get a reference number straight away." },
  { icon: "MessagesSquare", title: "Discussion", text: `We contact you ${site.responseTime} to understand your requirements.` },
  { icon: "ClipboardCheck", title: "Written proposal", text: "Scope, price, timeline and milestones in writing — before any payment." },
];

export default function GetAQuotePage() {
  const wa = whatsappLink("Hi Siddhi Info, I'd like a quotation.");
  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title="Tell us what you need"
        text="Four short steps. For small websites or large software projects — you'll get a reference number and a written proposal after we talk."
        crumbs={[{ label: "Get a Quote", href: "/get-a-quote/" }]}
      />
      <section className="container-x grid gap-8 py-12 sm:py-16 lg:grid-cols-[1.6fr_1fr]">
        <QuoteForm />
        <aside className="space-y-5">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200">
            <h2 className="text-lg font-extrabold text-ink">What happens next</h2>
            <ol className="mt-4 space-y-4">
              {after.map((a, i) => (
                <li key={a.title} className="flex gap-3">
                  <ColorIcon name={a.icon} className="size-10" />
                  <span>
                    <span className="block font-bold text-ink">{i + 1}. {a.title}</span>
                    <span className="block text-sm text-slate-600">{a.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200">
            <h2 className="text-lg font-extrabold text-ink">Prefer to talk first?</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {wa && <li><a href={wa} target="_blank" rel="noopener noreferrer" className="font-semibold text-green-800 underline">Message us on WhatsApp</a></li>}
              <li><a href={mailHref} className="break-all font-semibold text-brand-700 underline">{site.email}</a></li>
              <li className="text-slate-600">Support in English, हिन्दी and বাংলা.</li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
