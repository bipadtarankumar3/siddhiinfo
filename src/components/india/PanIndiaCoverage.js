"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, PhoneCall, ArrowRight, ShieldCheck, CheckCircle2, Globe2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { whatsappLink } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const statesList = [
  {
    name: "West Bengal",
    native: "পশ্চিমবঙ্গ",
    capital: "Kolkata (HQ)",
    cities: "Kolkata, Siliguri, Asansol, Durgapur, Howrah",
    tag: "Headquarters & Tech Hub",
    color: "from-amber-500/10 to-orange-500/10 border-amber-500/30",
  },
  {
    name: "Maharashtra",
    native: "महाराष्ट्र",
    capital: "Mumbai / Pune",
    cities: "Mumbai, Pune, Nagpur, Nashik, Aurangabad",
    tag: "Commercial Capital & D2C Brands",
    color: "from-blue-500/10 to-indigo-500/10 border-blue-500/30",
  },
  {
    name: "Delhi NCR",
    native: "दिल्ली एनसीआर",
    capital: "New Delhi",
    cities: "Delhi, Noida, Gurgaon, Faridabad, Ghaziabad",
    tag: "Retail & Startup Hub",
    color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/30",
  },
  {
    name: "Gujarat",
    native: "ગુજરાત",
    capital: "Gandhinagar",
    cities: "Ahmedabad, Surat, Rajkot, Vadodara, Morbi",
    tag: "Traders, Textiles & Manufacturing",
    color: "from-rose-500/10 to-pink-500/10 border-rose-500/30",
  },
  {
    name: "Uttar Pradesh",
    native: "उत्तर प्रदेश",
    capital: "Lucknow",
    cities: "Lucknow, Kanpur, Varanasi, Agra, Prayagraj",
    tag: "Wholesale & MSME Hub",
    color: "from-orange-500/10 to-amber-500/10 border-orange-500/30",
  },
  {
    name: "Karnataka",
    native: "ಕರ್ನಾಟಕ",
    capital: "Bengaluru",
    cities: "Bengaluru, Mysuru, Hubballi, Mangaluru",
    tag: "IT & Innovative Enterprises",
    color: "from-indigo-500/10 to-purple-500/10 border-indigo-500/30",
  },
  {
    name: "Bihar",
    native: "बिहार",
    capital: "Patna",
    cities: "Patna, Muzaffarpur, Gaya, Bhagalpur, Darbhanga",
    tag: "Retail & Coaching Institutes",
    color: "from-yellow-500/10 to-lime-500/10 border-yellow-500/30",
  },
  {
    name: "Rajasthan",
    native: "राजस्थान",
    capital: "Jaipur",
    cities: "Jaipur, Jodhpur, Kota, Udaipur, Bikaner",
    tag: "Handicrafts, Gems & Tourism",
    color: "from-amber-600/10 to-yellow-600/10 border-amber-600/30",
  },
  {
    name: "Odisha",
    native: "ଓଡ଼ିଶା",
    capital: "Bhubaneswar",
    cities: "Bhubaneswar, Cuttack, Rourkela, Berhampur",
    tag: "Industries & Healthcare",
    color: "from-teal-500/10 to-cyan-500/10 border-teal-500/30",
  },
  {
    name: "Tamil Nadu",
    native: "தமிழ்நாடு",
    capital: "Chennai",
    cities: "Chennai, Coimbatore, Madurai, Tirupur, Salem",
    tag: "Engineering & Export Hub",
    color: "from-cyan-500/10 to-blue-500/10 border-cyan-500/30",
  },
  {
    name: "Telangana & AP",
    native: "తెలంగాణ / ఆంధ్రప్రదేశ్",
    capital: "Hyderabad",
    cities: "Hyderabad, Visakhapatnam, Vijayawada, Warangal",
    tag: "Pharma, Tech & Retail",
    color: "from-violet-500/10 to-purple-500/10 border-violet-500/30",
  },
  {
    name: "Punjab & Haryana",
    native: "ਪੰਜਾਬ / हरियाणा",
    capital: "Chandigarh",
    cities: "Ludhiana, Amritsar, Jalandhar, Panipat, Karnal",
    tag: "Agri-business & Manufacturing",
    color: "from-green-500/10 to-emerald-500/10 border-green-500/30",
  },
];

export default function PanIndiaCoverage() {
  const { t } = useLanguage();
  const [selectedState, setSelectedState] = useState(statesList[0]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-brand-950 to-ink py-20 text-white sm:py-28">
      {/* Background Indian Tri-color soft glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 size-96 rounded-full bg-saffron-500/15 blur-3xl" />
        <div className="absolute right-0 top-1/3 size-96 rounded-full bg-electric-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-96 rounded-full bg-mint-500/15 blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-saffron-400">
            🇮🇳 {t.coverage.badge}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {t.coverage.title}
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            {t.coverage.subtitle}
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-3xl font-extrabold text-saffron-400">{t.coverage.statStates}</p>
            <p className="mt-1 text-sm font-semibold text-white">{t.coverage.statStatesLabel}</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-3xl font-extrabold text-mint-400">{t.coverage.statLanguages}</p>
            <p className="mt-1 text-sm font-semibold text-white">{t.coverage.statLanguagesLabel}</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-3xl font-extrabold text-electric-400">{t.coverage.statOwnership}</p>
            <p className="mt-1 text-sm font-semibold text-white">{t.coverage.statOwnershipLabel}</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-3xl font-extrabold text-white">{t.coverage.statDelivery}</p>
            <p className="mt-1 text-sm font-semibold text-white">{t.coverage.statDeliveryLabel}</p>
          </div>
        </div>

        {/* State Logos & Badges Grid */}
        <div className="mt-14">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-lg font-bold text-slate-200">
              Select Your State / अपना राज्य चुनें:
            </h3>
            <span className="text-xs text-mint-300">
              Remote onboarding over WhatsApp & Video Call
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {statesList.map((state) => {
              const active = selectedState.name === state.name;
              return (
                <button
                  key={state.name}
                  type="button"
                  onClick={() => setSelectedState(state)}
                  className={`group relative flex flex-col items-start rounded-2xl border p-3.5 text-left transition duration-200 ${
                    active
                      ? "border-saffron-400 bg-white/15 shadow-lg shadow-saffron-500/20 ring-2 ring-saffron-400/50"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <span className="text-[11px] font-bold text-saffron-300">{state.native}</span>
                  <span className="mt-0.5 text-sm font-extrabold text-white">{state.name}</span>
                  <span className="mt-1 text-[11px] text-slate-400">{state.capital}</span>
                  {active && (
                    <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-mint-400 ring-4 ring-mint-400/20" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Selected State Spotlight Box */}
          <div className="mt-6 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-saffron-500/20 px-3 py-1 text-xs font-bold text-saffron-300">
                    {selectedState.native}
                  </span>
                  <span className="text-xs font-semibold text-mint-300">
                    {selectedState.tag}
                  </span>
                </div>
                <h4 className="mt-2 text-2xl font-bold text-white">
                  Serving Businesses in {selectedState.name}
                </h4>
                <p className="mt-1 text-sm text-slate-300">
                  <strong className="text-white">Active in:</strong> {selectedState.cities}
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-mint-400" /> GST compliant invoices & billing
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-mint-400" /> WhatsApp support in Hindi & English
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-mint-400" /> Fast delivery in 7–10 days
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={whatsappLink(`Hi Siddhi Info, I run a business in ${selectedState.name} and want to get online.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#25D366] text-white hover:bg-[#1fb857]"
                >
                  <WhatsAppIcon className="size-4" /> Enquire from {selectedState.name}
                </a>
                <Link href="/contact/" className="btn btn-glass">
                  Book Call <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

