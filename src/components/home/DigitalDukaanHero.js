"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  IndianRupee,
  Clock,
  BadgePercent,
  CheckCircle2,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";
import { useLanguage } from "@/context/LanguageContext";
import { SoundboxAlertIcon, DeliveryScooterIcon, BahiKhataIcon } from "@/components/india/DesiHeritageIcons";

export default function DigitalDukaanHero() {
  const { t, locale } = useLanguage();
  const [sales, setSales] = useState(60000); // 60k/month default

  // Marketplace takes avg 22%
  const commissionRate = 0.22;
  const monthlyCommission = Math.round(sales * commissionRate);
  const yearlySaved = Math.round(monthlyCommission * 12);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-amber-50/40 to-saffron-50/20 py-20 sm:py-28">
      {/* Indian decorative motifs background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-10 size-96 rounded-full bg-saffron-200/30 blur-3xl" />
        <div className="absolute -left-20 bottom-10 size-80 rounded-full bg-mint-200/25 blur-3xl" />
      </div>

      <div className="container-x relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-saffron-300 bg-saffron-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-saffron-800 shadow-sm">
            <Sparkles className="size-3.5 text-saffron-600" />
            {t.dukaan.badge}
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {t.dukaan.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {t.dukaan.subtitle}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Interactive Calculator & Dukaan Highlights */}
          <div className="space-y-6 lg:col-span-6">
            <div className="card p-6 sm:p-8 shadow-xl shadow-saffron-900/5 ring-1 ring-saffron-200/60">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-saffron-700">
                  <BadgePercent className="size-4" />
                  {t.dukaan.calculatorTitle}
                </span>
                <span className="rounded-full bg-mint-100 px-2.5 py-0.5 text-xs font-bold text-mint-800">
                  0% Commission
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                {t.dukaan.calculatorSub}
              </p>

              {/* Slider */}
              <div className="mt-6">
                <div className="flex justify-between text-sm font-semibold text-slate-700">
                  <span>{t.dukaan.monthlySales}</span>
                  <span className="text-base font-extrabold text-brand-700">₹{sales.toLocaleString("en-IN")} / mo</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="300000"
                  step="5000"
                  value={sales}
                  onChange={(e) => setSales(Number(e.target.value))}
                  className="mt-3 h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-saffron-500"
                  aria-label="Monthly online sales"
                />
                <div className="mt-1.5 flex justify-between text-[11px] text-slate-400">
                  <span>₹20,000</span>
                  <span>₹1,50,000</span>
                  <span>₹3,00,000</span>
                </div>
              </div>

              {/* Calculation Result */}
              <div className="mt-6 rounded-2xl bg-gradient-to-br from-mint-50 to-emerald-50 p-4 ring-1 ring-mint-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-600">{t.dukaan.commissionSaved}</p>
                    <p className="text-2xl font-black text-mint-700 sm:text-3xl">
                      ₹{yearlySaved.toLocaleString("en-IN")} <span className="text-xs font-normal text-slate-500">/ yr</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] text-slate-500">Monthly Commission Lost to Apps:</p>
                    <p className="text-sm font-bold text-rose-600">~₹{monthlyCommission.toLocaleString("en-IN")} / mo</p>
                  </div>
                </div>
                <p className="mt-2 text-[11px] font-medium text-mint-900 flex items-center gap-1">
                  <CheckCircle2 className="size-3.5 text-mint-600" />
                  {t.dukaan.zeroCommission}
                </p>
              </div>

              {/* Features List */}
              <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
                {t.dukaan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-600 font-bold" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappLink("Hi Siddhi Info, I want to start my Digital Dukaan online store for my shop.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#25D366] text-white hover:bg-[#1fb857] shadow-lg shadow-green-900/20"
                >
                  <WhatsAppIcon className="size-4" /> {t.dukaan.startDukaanBtn}
                </a>
                <Link href="/pricing/" className="btn btn-outline">
                  View All Packages <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Animated GIF-Style Indian Commerce Mock */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md rounded-3xl border border-slate-200/80 bg-white p-5 shadow-2xl shadow-saffron-900/10 sm:p-6">
              {/* Header of Simulated Phone Screen */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-2xl bg-amber-500 text-white font-black text-lg shadow-md shadow-amber-500/30">
                    🛍️
                  </div>
                  <div>
                    <h3 className="font-extrabold text-ink text-sm sm:text-base">
                      Shree Krishna Kirana & Retail
                    </h3>
                    <p className="text-xs text-mint-600 font-bold flex items-center gap-1">
                      <span className="size-2 rounded-full bg-mint-500 animate-pulse" /> Online Store Active · Kolkata
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                  Live Demo
                </span>
              </div>

              {/* Simulated Notification Popups */}
              <div className="mt-5 space-y-3">
                {/* 1. Live Order Alert */}
                <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3.5 transition hover:scale-[1.01]">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="grid size-8 place-items-center rounded-xl bg-emerald-600 text-white">
                        <WhatsAppIcon className="size-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-emerald-950">New WhatsApp Order #1084</p>
                        <p className="text-[11px] text-emerald-700">Ananya Roy (Salt Lake, Sector 2)</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-600">Just now</span>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between rounded-xl bg-white/80 px-3 py-1.5 text-xs text-slate-700">
                    <span>1× Desi Ghee 1L + 2× Basmati Rice</span>
                    <strong className="font-bold text-ink">₹1,180</strong>
                  </div>
                </div>

                {/* 2. Soundbox UPI Instant Alert */}
                <div className="flex items-center justify-between rounded-2xl border border-sky-200 bg-sky-50/80 p-3.5">
                  <div className="flex items-center gap-3">
                    <SoundboxAlertIcon className="size-9 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-sky-950">UPI Audio Payment Alert</p>
                      <p className="text-[11px] text-sky-700 font-semibold">
                        “PhonePe पर ₹1,180 प्राप्त हुए”
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-sky-600 px-2 py-0.5 text-[10px] font-bold text-white">
                    0% Fee
                  </span>
                </div>

                {/* 3. Delivery Ready */}
                <div className="flex items-center justify-between rounded-2xl border border-orange-200 bg-orange-50/80 p-3.5">
                  <div className="flex items-center gap-3">
                    <DeliveryScooterIcon className="size-8 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-orange-950">Local Delivery Assigned</p>
                      <p className="text-[11px] text-orange-700">Raju Delivery Boy · 15 mins away</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-orange-800">OTP: 4921</span>
                </div>
              </div>

              {/* Bottom Owner Summary */}
              <div className="mt-5 rounded-2xl bg-slate-900 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold text-slate-400">Today&apos;s Direct Sales</p>
                    <p className="text-xl font-black text-white">₹14,850</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-semibold text-slate-400">Commission Paid to Apps</p>
                    <p className="text-xl font-black text-mint-400">₹0 (Zero)</p>
                  </div>
                </div>
              </div>

              {/* Verified Desi Trust Badge */}
              <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-slate-500">
                <span className="flex items-center gap-1 font-semibold">
                  <ShieldCheck className="size-3.5 text-mint-600" /> Razorpay / PhonePe Verified
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-semibold">
                  <BahiKhataIcon className="size-3.5" /> GST Invoices Included
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

