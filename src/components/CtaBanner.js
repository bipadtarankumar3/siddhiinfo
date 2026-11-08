import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";
import Network from "./Network";

export default function CtaBanner({
  title = "Ready to take your business online?",
  text = "Get a free consultation and a clear, fixed quote — usually within 24 hours.",
}) {
  return (
    <section className="container-x py-16 sm:py-24">
      <div className="bg-hero relative overflow-hidden rounded-[2rem] px-6 py-12 text-white shadow-2xl shadow-brand-900/30 sm:px-14 sm:py-16">
        <div aria-hidden="true" className="bg-dots absolute inset-0" />
        <Network uid="cta-net" className="pointer-events-none absolute -bottom-10 -left-20 w-[32rem] opacity-40" />
        <Image
          src="/logo.webp"
          alt=""
          width={256}
          height={256}
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-8 hidden w-72 opacity-15 lg:block"
        />
        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">{title}</h2>
            <p className="mt-3 text-lg text-slate-300">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact/" className="btn btn-light">
              Get free quote <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-glass">
              <WhatsAppIcon className="size-5 text-mint-400" /> WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
