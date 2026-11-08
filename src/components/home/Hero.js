"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import BrandIcon from "@/components/BrandIcon";
import { LaptopFrame, PhoneFrame } from "@/components/mockups/Frames";
import { DesktopMock, MobileMock } from "@/components/mockups/SiteMocks";
import { whatsappLink } from "@/lib/site";
import { useLanguage } from "@/context/LanguageContext";
import Jali from "@/components/india/Jali";
import Rangoli from "@/components/india/Rangoli";
import {
  BahiKhataIcon,
  SoundboxAlertIcon,
  DesiMoharIcon,
} from "@/components/india/DesiHeritageIcons";

export default function Hero() {
  const { t, locale } = useLanguage();

  const values = [
    {
      icon: BahiKhataIcon,
      label: locale === "bn" ? "সাশ্রয়ী ও স্বচ্ছ মূল্যতালিকা" : "सस्ती और पारदर्शी दरें",
      sub: locale === "bn" ? "শুরু মাত্র ₹৪,৯৯৯ থেকে" : "शुरुआत मात्र ₹4,999 से",
    },
    {
      icon: SoundboxAlertIcon,
      label: locale === "bn" ? "০% কমিশন • সরাসরি ব্যাংকে টাকা" : "0% कमीशन • सीधा बैंक में पैसा",
      sub: locale === "bn" ? "PhonePe / GPay সমর্থিত" : "PhonePe / GPay समर्थित",
    },
    {
      icon: DesiMoharIcon,
      label: locale === "bn" ? "সরাসরি ডেভেলপার সহায়তা" : "सीधा डेवलपर सपोर्ट (WhatsApp)",
      sub: locale === "bn" ? "কোনো তৃতীয় পক্ষের ঝামেলা নেই" : "बिना किसी अंग्रेज़ी या तकनीकी झंझट के",
    },
  ];

  return (
    <section className="bg-hero relative -mt-18 overflow-hidden pt-18 text-white">
      {/* Indian Jali & Rangoli motifs for an authentic Indian digital aesthetic */}
      <Jali uid="hero-jali" className="pointer-events-none absolute inset-0 opacity-[0.05]" />
      <Rangoli className="pointer-events-none absolute -right-32 -top-32 hidden size-[34rem] text-amber-400 opacity-[0.07] lg:block" />

      {/* animated gradient Indian saffron & mint soft glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -left-32 top-20 size-[32rem] rounded-full bg-saffron-500/25 blur-3xl" />
        <div className="animate-blob-slow absolute right-[-10rem] top-[-6rem] size-[34rem] rounded-full bg-electric-500/25 blur-3xl" />
        <div className="animate-blob absolute bottom-[-12rem] left-1/3 size-[28rem] rounded-full bg-mint-400/20 blur-3xl" />
        <div className="bg-dots absolute inset-0" />
      </div>

      <div className="container-x relative grid items-center gap-12 pb-20 pt-12 sm:pt-16 xl:grid-cols-[1.05fr_1.1fr] xl:gap-10 lg:pb-28">
        {/* Left Column: Business Owner Friendly Value Proposition */}
        <div>
          {/* Indian Pride & Desi Trust Badges */}
          <div data-reveal className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-saffron-400/40 bg-saffron-500/15 px-3.5 py-1.5 text-xs font-bold text-saffron-300 shadow-sm backdrop-blur-md">
              🇮🇳 वोकल फॉर लोकल • मेड फॉर भारत
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-500/20 px-3 py-1.5 text-xs font-bold text-mint-300 ring-1 ring-mint-400/30">
              <Sparkles className="size-3 text-mint-400" /> ₹4,999 से शुरुआत • 0% कमीशन
            </span>
          </div>

          {/* Main Headline */}
          <h1
            data-reveal
            style={{ "--reveal-delay": "80ms" }}
            className="mt-6 text-[2.4rem] font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl xl:text-[3.4rem] 2xl:text-[3.7rem]"
          >
            {t.hero.heading} <span className="text-gradient-light">{t.hero.headingHighlight}</span>
          </h1>

          {/* Subheading in Plain Business Language */}
          <p
            data-reveal
            style={{ "--reveal-delay": "160ms" }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
          >
            {t.hero.subheading}
          </p>

          {/* Slogan Pill */}
          <div data-reveal style={{ "--reveal-delay": "220ms" }} className="mt-5 flex flex-wrap items-center gap-3">
            <span className="rounded-2xl border border-mint-400/40 bg-mint-400/10 px-4 py-2 text-xl font-black text-mint-300 sm:text-2xl shadow-inner">
              {locale === "bn" ? t.hero.bengaliSlogan : t.hero.hindiSlogan}
            </span>
            <span className="rounded-lg bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 ring-1 ring-amber-400/30">
              {locale === "bn" ? "১০০% আপনার লাভ" : "100% आपका मुनाफा"}
            </span>
          </div>

          {/* 3 Eye-Friendly CTA Buttons */}
          <div data-reveal style={{ "--reveal-delay": "280ms" }} className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/contact/"
              className="btn bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold shadow-lg shadow-amber-500/25 hover:from-amber-300 hover:to-amber-400"
            >
              {t.hero.ctaConsultation} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>

            <a
              href={whatsappLink("नमस्ते सिद्धि इन्फो, मुझे अपनी दुकान / बिज़नेस के लिए वेबसाइट और ऑनलाइन ऑर्डरिंग शुरू करनी है।")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#25D366] text-white shadow-lg shadow-green-950/40 hover:bg-[#1fb857] font-bold"
            >
              <WhatsAppIcon className="size-5" /> {t.hero.ctaWhatsApp}
            </a>

            <Link href="/pricing/" className="btn btn-glass text-xs sm:text-sm">
              {locale === "bn" ? "প্যাকেজ ও মূল্যতালিকা" : "दुकान ऑनलाइन पैकेज"}
            </Link>
          </div>

          {/* 3 Indian Small Business Heritage Value Badges */}
          <ul data-reveal style={{ "--reveal-delay": "340ms" }} className="mt-9 grid gap-3 sm:grid-cols-3">
            {values.map(({ icon: Icon, label, sub }, i) => (
              <li
                key={i}
                className="glass flex items-start gap-3 rounded-2xl p-3 text-left transition hover:bg-white/15"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 p-1.5 shadow-inner">
                  <Icon className="size-full" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white leading-snug">{label}</p>
                  <p className="mt-0.5 text-[11px] text-amber-300/90 font-medium">{sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Indian Small Business Store Showcase Mockup */}
        <HeroVisual />
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent" />
    </section>
  );
}

function HeroVisual() {
  return (
    <div
      role="img"
      aria-label="An Indian store website on a laptop, a WhatsApp ordering store on a phone and an owner dashboard"
      className="group relative mx-auto w-full max-w-xl pb-10 pt-6 [perspective:1400px] sm:max-w-2xl xl:max-w-none"
    >
      <div className="relative transition-transform duration-700 ease-out group-hover:[transform:rotateY(-4deg)_rotateX(2deg)]">
        {/* Warm Indian glow */}
        <div
          aria-hidden="true"
          className="absolute inset-6 rounded-full bg-gradient-to-tr from-amber-500/35 via-saffron-500/25 to-mint-400/20 blur-3xl"
        />

        {/* Laptop Frame rendering the Indian Store Mock */}
        <LaptopFrame className="relative mx-auto w-[88%] shadow-2xl">
          <DesktopMock variant="dukaan" />
        </LaptopFrame>

        {/* Phone Frame with Mobile WhatsApp Store */}
        <div className="animate-float absolute -bottom-6 right-0 w-[20%] min-w-[88px]">
          <PhoneFrame>
            <MobileMock variant="dukaan" />
          </PhoneFrame>
        </div>

        {/* 1. Indian Small Business Owner Today's Sales Dashboard Card */}
        <div className="animate-float-slow absolute -bottom-10 -left-4 z-10 hidden w-[36%] min-w-[160px] rounded-2xl bg-white/95 p-3.5 text-ink shadow-2xl shadow-black/35 ring-1 ring-white/70 backdrop-blur sm:block sm:p-4">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold text-slate-600 sm:text-xs">दुकान का आज का हिसाब</p>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-mint-100 px-1.5 py-0.5 text-[10px] font-black text-mint-800">
              <TrendingUp className="size-3" /> 0% कमीशन
            </span>
          </div>
          <p className="mt-1 text-2xl font-black text-brand-900 sm:text-3xl">₹18,450</p>
          <div className="mt-2 flex h-8 items-end gap-1" aria-hidden="true">
            {[40, 55, 48, 70, 62, 85, 76, 95].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-emerald-600 to-mint-400"
                style={{ height: `${h}%`, opacity: 0.5 + i * 0.06 }}
              />
            ))}
          </div>
          <p className="mt-2 text-[10px] font-bold text-emerald-700 flex items-center gap-1">
            <CheckCircle2 className="size-3 text-emerald-600" /> ₹4,050 ऐप कमीशन बचाया
          </p>
        </div>

        {/* 2. Floating Soundbox UPI Alert Pill */}
        <div className="animate-float-slow absolute left-[2%] top-[-3%] flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2 shadow-2xl shadow-black/30 ring-1 ring-slate-100 sm:left-[16%]">
          <span className="grid size-8 place-items-center rounded-xl bg-sky-500 text-white font-bold text-sm shadow-md shadow-sky-500/30">
            🔊
          </span>
          <div className="text-left">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">UPI Audio Alert</p>
            <p className="text-xs font-black text-sky-950">“PhonePe पर ₹540 प्राप्त हुए ✓”</p>
          </div>
        </div>

        {/* 3. Floating WhatsApp Live Order Notification */}
        <div className="animate-float absolute right-[2%] top-[-4%] flex items-center gap-2.5 rounded-2xl bg-[#25D366] px-3.5 py-2 text-white shadow-xl shadow-green-950/40">
          <WhatsAppIcon className="size-5 shrink-0" />
          <div className="text-left">
            <p className="text-[10px] font-bold text-green-100">नया ऑर्डर #1084</p>
            <p className="text-xs font-black text-white">व्हाट्सएप पर आया ✓</p>
          </div>
        </div>

        {/* 4. Google Reviews Genuine Rating Pill */}
        <div className="animate-float absolute bottom-[-4%] left-[44%] hidden sm:flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2 text-ink shadow-xl shadow-black/30 ring-1 ring-slate-100">
          <BrandIcon name="siGoogle" className="size-4 shrink-0" />
          <span className="text-amber-500 text-xs font-black">★★★★★</span>
          <span className="text-xs font-extrabold text-slate-800">4.9 on Google Maps</span>
        </div>
      </div>
    </div>
  );
}
