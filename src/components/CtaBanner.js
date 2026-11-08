import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function CtaBanner({
  title = "Ready to take your business online?",
  text = "Get a free consultation and a clear, fixed quote — usually within 24 hours.",
}) {
  return (
    <section className="container-x py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 text-white sm:px-12 sm:py-16">
        <div aria-hidden="true" className="absolute -right-24 -top-24 size-72 rounded-full bg-brand-500/40 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-24 -left-16 size-72 rounded-full bg-saffron-500/30 blur-3xl" />
        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-3 text-lg text-slate-300">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn bg-[#25D366] text-white hover:bg-[#1fb857]">
              <WhatsAppIcon className="size-5" /> WhatsApp us
            </a>
            <Link href="/contact/" className="btn bg-white text-ink hover:bg-slate-100">
              Get free quote <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
