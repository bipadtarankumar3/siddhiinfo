import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";
import Network from "./Network";

export default function CtaBanner({
  title = "Let’s Build Something Great for Your Business.",
  text = "Tell us your idea. We will help you turn it into a digital solution.",
}) {
  return (
    <section className="container-x py-16 sm:py-24">
      <div data-reveal className="bg-hero relative overflow-hidden rounded-[2rem] px-6 py-14 text-white shadow-2xl shadow-brand-900/30 sm:px-14 sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="animate-blob absolute -left-20 -top-24 size-80 rounded-full bg-brand-500/40 blur-3xl" />
          <div className="animate-blob-slow absolute -bottom-28 right-10 size-96 rounded-full bg-saffron-500/25 blur-3xl" />
          <div className="bg-dots absolute inset-0" />
        </div>
        <Network uid="cta-net" className="pointer-events-none absolute -bottom-10 -left-20 w-[32rem] opacity-40" />
        <Image
          src="/logo.webp"
          alt=""
          width={256}
          height={256}
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -right-6 top-1/2 hidden w-64 -translate-y-1/2 opacity-25 lg:block"
        />
        <div className="relative max-w-3xl">
          <p className="eyebrow eyebrow-dark">Start your project</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-slate-300">{text}</p>
          <p className="mt-2 font-semibold text-saffron-300">पहली बातचीत बिल्कुल मुफ़्त है।</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact/" className="btn btn-light">
              Start Your Project <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a href={whatsappLink("Hi Siddhi Info, I'd like to talk to a developer about my project.")} target="_blank" rel="noopener noreferrer" className="btn bg-[#25D366] text-white hover:bg-[#1fb857]">
              <WhatsAppIcon className="size-5" /> Talk to Our Developer on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
