import Icon from "@/components/Icon";
import SectionHead from "@/components/SectionHead";
import Rangoli from "@/components/india/Rangoli";
import { reasons } from "@/lib/data";

function PromiseArt() {
  return (
    <svg viewBox="0 0 320 240" className="w-full" aria-hidden="true">
      <defs>
        <linearGradient id="pa-shield" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8578f5" />
          <stop offset="1" stopColor="#2f7bff" />
        </linearGradient>
      </defs>
      <rect x="30" y="40" width="190" height="130" rx="14" fill="#fff" opacity="0.95" />
      <rect x="30" y="40" width="190" height="22" rx="14" fill="#e3e1ff" />
      <rect x="30" y="52" width="190" height="10" fill="#e3e1ff" />
      {[44, 52, 60].map((x) => <circle key={x} cx={x} cy="51" r="3" fill="#a7a0fb" />)}
      <text x="48" y="92" fontSize="13" fontFamily="monospace" fill="#5839dc">&lt;/&gt;</text>
      <rect x="76" y="84" width="80" height="7" rx="3.5" fill="#c9c5ff" />
      <rect x="48" y="102" width="120" height="7" rx="3.5" fill="#bfdbfe" />
      <rect x="48" y="120" width="96" height="7" rx="3.5" fill="#fed7aa" />
      <rect x="48" y="138" width="60" height="18" rx="9" fill="#5839dc" />
      <path d="M232 46 l52 18 v40 c0 34 -24 56 -52 66 c-28 -10 -52 -32 -52 -66 v-40 Z" fill="url(#pa-shield)" />
      <path d="M210 108 l16 16 l30 -32" stroke="#fff" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="translate(250 190)">
        <circle r="26" fill="#f97316" />
        <circle r="20" fill="#fb923c" />
        <text y="9" textAnchor="middle" fontSize="26" fontWeight="800" fill="#fff">₹</text>
      </g>
      <g transform="translate(70 196)">
        <rect x="-34" y="-18" width="110" height="36" rx="18" fill="#fff" />
        <circle cx="-14" cy="0" r="10" fill="#25D366" />
        <path d="M-18 0 l3 3 l6 -6" stroke="#fff" strokeWidth="2.4" fill="none" />
        <text x="2" y="5" fontSize="12" fontWeight="700" fill="#0b1035">On time</text>
      </g>
    </svg>
  );
}

export default function WhyChoose() {
  return (
    <section className="bg-lavender-mesh relative overflow-hidden py-20 sm:py-28" aria-labelledby="why-title">
      <Rangoli className="pointer-events-none absolute -left-40 -top-40 hidden w-[28rem] text-brand-300 opacity-[0.10] lg:block" />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead
            center={false}
            id="why-title"
            eyebrow="Why Siddhi Info"
            title={<>A partner you can <span className="text-gradient">trust for the long run</span></>}
            text="Big agencies are expensive and freelancers often disappear. We give you a dependable development team, honest pricing and support that continues after launch."
          />
          <div data-reveal className="mt-8 rounded-[1.75rem] bg-gradient-to-br from-brand-700 via-brand-600 to-electric-500 p-6 shadow-2xl shadow-brand-900/25">
            <PromiseArt />
            <p className="mt-2 text-center font-semibold text-white">“भरोसा, समय पर डिलीवरी और लंबा साथ।”</p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <div key={r.title} data-reveal style={{ "--reveal-delay": `${(i % 2) * 80}ms` }} className="card card-hover card-accent bg-white/90 p-6 backdrop-blur">
              <span className="icon-tile size-12">
                <Icon name={r.icon} className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{r.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
