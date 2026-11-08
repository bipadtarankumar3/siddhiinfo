"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  BahiKhataIcon,
  TarazuIcon,
  SoundboxAlertIcon,
  DesiMoharIcon,
  ChaiKulhadIcon,
  DeliveryScooterIcon,
} from "./DesiHeritageIcons";

export default function DesiValuesShowcase() {
  const { t, locale } = useLanguage();

  const values = [
    {
      icon: BahiKhataIcon,
      badge: "बही-खाता से क्लाउड",
      title: t.heritage.bahiKhataTitle,
      desc: t.heritage.bahiKhataDesc,
    },
    {
      icon: TarazuIcon,
      badge: "सच्चा तराज़ू",
      title: t.heritage.tarazuTitle,
      desc: t.heritage.tarazuDesc,
    },
    {
      icon: SoundboxAlertIcon,
      badge: "तुरंत यूपीआई अलर्ट",
      title: t.heritage.soundboxTitle,
      desc: t.heritage.soundboxDesc,
    },
    {
      icon: DesiMoharIcon,
      badge: "पक्की मोहर",
      title: t.heritage.moharTitle,
      desc: t.heritage.moharDesc,
    },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200/80">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold text-amber-800">
            🏛️ पारंपरिक भारतीय व्यापारिक मूल्य
          </span>
          <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl lg:text-4xl">
            {t.heritage.title}
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            {t.heritage.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 70}ms` }}
                className="card group relative flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-14 place-items-center rounded-2xl bg-amber-50 p-2 shadow-inner ring-1 ring-amber-200">
                      <Icon className="size-9" />
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600">
                      {v.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {v.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

