import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, Clock, MessagesSquare, FileText, Rocket } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

const nextSteps = [
  { icon: MessagesSquare, title: "Share your idea", text: "Call, WhatsApp or fill the form — Hindi or English." },
  { icon: FileText, title: "Free consultation & quote", text: "Clear plan and a written quote, usually within 24 hours." },
  { icon: Rocket, title: "We build & support", text: "Regular updates, launch, and help after go-live." },
];

export default function CtaBanner({
  title = "Let’s Build Something Great for Your Business.",
  text = "Tell us your idea. We will help you turn it into a digital solution.",
}) {
  const tel = site.phone.replace(/\s/g, "");
  return (
    <section className="container-x py-16 sm:py-24">
      <div data-reveal className="bg-hero relative overflow-hidden rounded-[2rem] text-white shadow-2xl shadow-brand-900/30">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="animate-blob absolute -left-24 -top-24 size-80 rounded-full bg-brand-500/40 blur-3xl" />
          <div className="animate-blob-slow absolute -bottom-32 right-1/4 size-96 rounded-full bg-saffron-500/20 blur-3xl" />
          <div className="bg-dots absolute inset-0" />
        </div>

        <div className="relative grid items-center gap-10 p-6 py-12 sm:p-12 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:p-14">
          {/* left: message + actions */}
          <div>
            <p className="eyebrow eyebrow-dark">Start your project</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-[2.6rem]">{title}</h2>
            <p className="mt-4 text-lg text-slate-300">{text}</p>
            <p className="mt-2 font-semibold text-saffron-300">पहली बातचीत बिल्कुल मुफ़्त है।</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn btn-light">
                Start Your Project <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappLink("Hi Siddhi Info, I'd like to talk to a developer about my project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#25D366] text-white hover:bg-[#1fb857]"
              >
                <WhatsAppIcon className="size-5" /> Talk to Our Developer on WhatsApp
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              <li>
                <a href={`tel:${tel}`} className="inline-flex min-h-10 items-center gap-2 hover:text-white">
                  <Phone className="size-4 text-saffron-300" aria-hidden="true" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex min-h-10 items-center gap-2 hover:text-white">
                  <Mail className="size-4 text-saffron-300" aria-hidden="true" /> {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* right: what happens next */}
          <div className="glass relative rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white p-1.5 shadow-lg">
                <Image src="/logo.webp" alt="" width={56} height={56} className="size-full object-contain" />
              </span>
              <div>
                <p className="font-bold">What happens next?</p>
                <p className="flex items-center gap-1.5 text-sm text-slate-300">
                  <Clock className="size-3.5 text-mint-300" aria-hidden="true" /> We usually reply within a few working hours
                </p>
              </div>
            </div>
            <ol className="mt-6 space-y-3">
              {nextSteps.map(({ icon: I, title: t, text: d }, i) => (
                <li key={t} className="flex gap-4 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
                  <span className="relative grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-electric-500">
                    <I className="size-5" aria-hidden="true" />
                    <span className="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full bg-saffron-500 text-[11px] font-bold ring-2 ring-[#1b1460]">{i + 1}</span>
                  </span>
                  <span>
                    <span className="block font-semibold">{t}</span>
                    <span className="block text-sm text-slate-300">{d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
