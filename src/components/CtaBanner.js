import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { site, telHref, mailHref } from "@/lib/site";
import { WhatsAppButton } from "./ContactButtons";
import Rangoli from "./india/Rangoli";
import Toran from "./india/Toran";

export default function CtaBanner({
  title = "Let's build something great for your business",
  text = "Whether you need a business website or a complete software solution, Siddhi Info is ready to help.",
  whatsappText,
}) {
  return (
    <section className="container-x py-16 sm:py-20" aria-labelledby="cta-title">
      <div className="bg-hero relative overflow-hidden rounded-[2rem] p-6 pb-12 pt-14 text-white sm:p-12 sm:pt-16">
        <Toran uid="cta-toran" className="absolute inset-x-0 top-0" />
        <Rangoli className="pointer-events-none absolute -bottom-32 -left-32 w-[22rem] opacity-25" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(30rem_18rem_at_100%_0%,rgb(249_115_22/0.25),transparent_60%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 id="cta-title" className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-200">{text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/get-a-quote/" className="btn btn-cta">
                Get a free initial consultation <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <WhatsAppButton text={whatsappText} label="WhatsApp us" onDark />
            </div>
          </div>
          <div className="rounded-2xl bg-white/[0.07] p-6 ring-1 ring-white/15">
            <p className="font-bold">What happens next</p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-200">
              <li>We reply {site.responseTime} by phone, WhatsApp or email.</li>
              <li>A short call to understand your needs — free, no obligation.</li>
              <li>If it&apos;s a fit, you get a written scope and quote.</li>
            </ol>
            <ul className="mt-5 space-y-1 text-sm">
              {telHref && (
                <li><a href={telHref} className="inline-flex min-h-11 items-center gap-2 hover:underline"><Phone className="size-4" aria-hidden="true" />{site.phone}</a></li>
              )}
              <li><a href={mailHref} className="inline-flex min-h-11 items-center gap-2 break-all hover:underline"><Mail className="size-4 shrink-0" aria-hidden="true" />{site.email}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
