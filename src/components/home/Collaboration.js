import Image from "next/image";
import { MessagesSquare, UserCheck, BellRing, IndianRupee, LifeBuoy, Puzzle, CheckCheck } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";

const points = [
  { icon: MessagesSquare, title: "Direct communication with developers", text: "No middlemen — talk to the person building your project." },
  { icon: UserCheck, title: "Dedicated project assistance", text: "One point of contact from first call to launch." },
  { icon: BellRing, title: "Regular progress updates", text: "See your project take shape with updates on WhatsApp." },
  { icon: IndianRupee, title: "Transparent pricing", text: "A written quote and milestone payments. No surprises." },
  { icon: LifeBuoy, title: "Post-launch support", text: "We stay with you after go-live for fixes and updates." },
  { icon: Puzzle, title: "Designed around your business", text: "Solutions shaped by how you actually work." },
];

export default function Collaboration() {
  return (
    <section className="bg-lavender-mesh relative overflow-hidden py-20 sm:py-28" aria-labelledby="partner-title">
      <div className="container-x grid items-center gap-14 xl:grid-cols-2 xl:gap-16">
        {/* photo collage */}
        <div data-reveal className="relative mx-auto w-full max-w-xl pb-16 pr-6 sm:pr-10">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/20">
            <Image
              src="/images/developer-client-collaboration.webp"
              alt="Indian software developer explaining a project on his laptop to a smiling business owner"
              width={1100}
              height={820}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-2 right-0 w-[46%] overflow-hidden rounded-2xl border-4 border-white shadow-xl">
            <Image src="/images/client-reviewing-on-phone.webp" alt="Business owner happily reviewing his new website on a smartphone" width={720} height={540} sizes="260px" className="h-auto w-full" />
          </div>
          <div className="absolute -left-3 top-8 hidden w-[36%] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block">
            <Image src="/images/project-discussion.webp" alt="Developer discussing project requirements with a client in an office" width={720} height={540} sizes="200px" className="h-auto w-full" />
          </div>
          {/* chat-style update card */}
          <div className="animate-float absolute bottom-[4.5rem] left-2 max-w-[11.5rem] rounded-2xl bg-white p-2.5 shadow-xl ring-1 ring-slate-100 sm:bottom-24 sm:left-6 sm:max-w-[15rem] sm:p-3">
            <p className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="grid size-6 place-items-center rounded-full bg-[#25D366]/15 text-[#25D366]"><WhatsAppIcon className="size-3.5" /></span>
              Project update
            </p>
            <p className="mt-1.5 text-xs font-semibold text-ink sm:text-sm">Homepage design is ready for your review ✨</p>
            <p className="mt-1 flex items-center justify-end gap-1 text-[11px] text-slate-400">10:42 AM <CheckCheck className="size-3.5 text-sky-500" aria-hidden="true" /></p>
          </div>
          <p className="absolute bottom-0 left-0 text-xs text-slate-400">Representative images</p>
        </div>

        <div>
          <p data-reveal className="eyebrow">Your dedicated development partner</p>
          <h2 data-reveal id="partner-title" className="section-title mt-4">
            Your idea deserves the <span className="text-gradient">right technology partner.</span>
          </h2>
          <p data-reveal className="mt-5 text-lg leading-relaxed text-slate-600">
            From your first discussion to the final launch, our developers work closely with you to understand your
            business, build the right solution and provide ongoing support.
          </p>
          <p data-reveal className="mt-3 font-semibold text-mint-700">आप बताइए, हम बनाएँगे — और साथ भी रहेंगे।</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map(({ icon: I, title, text }, i) => (
              <li key={title} data-reveal style={{ "--reveal-delay": `${i * 60}ms` }} className="flex gap-3 rounded-2xl bg-white/80 p-4 ring-1 ring-brand-100 backdrop-blur">
                <span className="icon-tile size-10 shrink-0"><I className="size-5" aria-hidden="true" /></span>
                <span>
                  <span className="block font-bold text-ink">{title}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-slate-600">{text}</span>
                </span>
              </li>
            ))}
          </ul>
          <div data-reveal className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappLink("Hi Siddhi Info, I'd like to discuss my project with a developer.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <WhatsAppIcon className="size-5" /> Talk to a developer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
