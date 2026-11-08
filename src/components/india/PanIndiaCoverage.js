"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { whatsappLink } from "@/lib/site";
import { StateLandmarkIcon } from "./StateLandmarkIcons";

const statesList = [
  {
    name: "West Bengal",
    native: "পশ্চিমবঙ্গ",
    capital: "Kolkata (HQ)",
    landmark: "Howrah Bridge",
  },
  {
    name: "Maharashtra",
    native: "महाराष्ट्र",
    capital: "Mumbai / Pune",
    landmark: "Gateway of India",
  },
  {
    name: "Delhi NCR",
    native: "दिल्ली एनसीआर",
    capital: "New Delhi",
    landmark: "India Gate",
  },
  {
    name: "Gujarat",
    native: "ગુજરાત",
    capital: "Gandhinagar",
    landmark: "Statue of Unity",
  },
  {
    name: "Uttar Pradesh",
    native: "उत्तर प्रदेश",
    capital: "Lucknow",
    landmark: "Ganges Ghats",
  },
  {
    name: "Karnataka",
    native: "ಕರ್ನಾಟಕ",
    capital: "Bengaluru",
    landmark: "Mysore Palace",
  },
  {
    name: "Bihar",
    native: "बिहार",
    capital: "Patna",
    landmark: "Mahabodhi Temple",
  },
  {
    name: "Rajasthan",
    native: "राजस्थान",
    capital: "Jaipur",
    landmark: "Hawa Mahal",
  },
  {
    name: "Odisha",
    native: "ଓଡ଼ିଶା",
    capital: "Bhubaneswar",
    landmark: "Konark Wheel",
  },
  {
    name: "Tamil Nadu",
    native: "தமிழ்நாடு",
    capital: "Chennai",
    landmark: "Dravidian Gopuram",
  },
  {
    name: "Telangana & AP",
    native: "తెలంగాణ / ఆంధ్ర",
    capital: "Hyderabad",
    landmark: "Charminar",
  },
  {
    name: "Punjab & Haryana",
    native: "ਪੰਜਾਬ / हरियाणा",
    capital: "Chandigarh",
    landmark: "Golden Temple",
  },
  {
    name: "Kerala",
    native: "കേരളം",
    capital: "Kochi / Trivandrum",
    landmark: "Backwaters Houseboat",
  },
  {
    name: "Assam & NE",
    native: "অসম ও উত্তর-পূর্ব",
    capital: "Guwahati",
    landmark: "Kamakhya & Tea",
  },
  {
    name: "Madhya Pradesh",
    native: "मध्य प्रदेश",
    capital: "Indore / Bhopal",
    landmark: "Sanchi Stupa",
  },
  {
    name: "Jammu & Kashmir",
    native: "जम्मू व कश्मीर",
    capital: "Srinagar / Jammu",
    landmark: "Dal Lake Shikara",
  },
];

export default function PanIndiaCoverage() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-brand-950 to-ink py-16 text-white sm:py-20">
      {/* Background Indian Tri-color soft glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 size-96 rounded-full bg-saffron-500/15 blur-3xl" />
        <div className="absolute right-0 top-1/3 size-96 rounded-full bg-electric-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-96 rounded-full bg-mint-500/15 blur-3xl" />
      </div>

      <div className="container-x relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-saffron-400">
            🇮🇳 {t.coverage.badge}
          </span>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            {t.coverage.title}
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            {t.coverage.subtitle}
          </p>
        </div>

        {/* Single Row Auto-Changing Carousel / Ticker */}
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]">
          <div className="animate-marquee flex w-max gap-4 py-3 hover:[animation-play-state:paused]">
            {[...statesList, ...statesList].map((state, idx) => (
              <a
                key={`${state.name}-${idx}`}
                href={whatsappLink(`Hi Siddhi Info, I run a business in ${state.name} and want to get online.`)}
                target="_blank"
                rel="noopener noreferrer"
                title={`Click to chat on WhatsApp for ${state.name}`}
                className="group flex shrink-0 items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-saffron-400/80 hover:bg-white/15 hover:scale-105 hover:shadow-saffron-500/10"
              >
                {/* State Landmark Icon */}
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10 p-1.5 shadow-inner transition-transform group-hover:scale-110">
                  <StateLandmarkIcon name={state.name} className="size-full drop-shadow-md" />
                </div>

                {/* State Text Info */}
                <div className="min-w-0 text-left">
                  <span className="block text-[10px] font-bold text-saffron-300">
                    {state.native}
                  </span>
                  <p className="truncate text-sm font-extrabold text-white group-hover:text-saffron-200">
                    {state.name}
                  </p>
                  <p className="truncate text-[11px] font-semibold text-mint-300">
                    {state.landmark}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Subtle Bottom Note */}
        <p className="mt-6 text-center text-xs text-slate-400">
          Hover to pause · Serving shops, clinics, manufacturers & startups across all 28 Indian States & 8 UTs
        </p>
      </div>
    </section>
  );
}
