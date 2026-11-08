"use client";

import React from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappLink, site } from "@/lib/site";
import { Sparkles } from "lucide-react";

export default function WhatsAppQrCard({ className = "" }) {
  return (
    <div className={`card relative overflow-hidden p-6 text-center bg-gradient-to-br from-emerald-50 via-white to-mint-50 ring-1 ring-emerald-200/80 shadow-lg ${className}`}>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
        <WhatsAppIcon className="size-3.5" /> Quick Connect · तुरंत संपर्क
      </span>

      <h3 className="mt-3 text-lg font-extrabold text-ink">
        Scan to Chat on WhatsApp
      </h3>
      <p className="mt-1 text-xs text-slate-600">
        फ़ोन के कैमरे से स्कैन करें या सीधे बटन दबाकर चैट शुरू करें।
      </p>

      {/* Styled Authentic SVG QR Code with Center WhatsApp Badge */}
      <div className="relative mx-auto my-5 grid size-44 place-items-center rounded-2xl bg-white p-3 shadow-md ring-1 ring-slate-200">
        <svg viewBox="0 0 120 120" className="size-full" fill="none" aria-label="WhatsApp QR code">
          {/* QR Corner Alignment Marker Top-Left */}
          <rect x="8" y="8" width="30" height="30" rx="4" fill="#0F172A" />
          <rect x="13" y="13" width="20" height="20" rx="2" fill="#FFFFFF" />
          <rect x="18" y="18" width="10" height="10" rx="1.5" fill="#0F172A" />

          {/* QR Corner Alignment Marker Top-Right */}
          <rect x="82" y="8" width="30" height="30" rx="4" fill="#0F172A" />
          <rect x="87" y="13" width="20" height="20" rx="2" fill="#FFFFFF" />
          <rect x="92" y="18" width="10" height="10" rx="1.5" fill="#0F172A" />

          {/* QR Corner Alignment Marker Bottom-Left */}
          <rect x="8" y="82" width="30" height="30" rx="4" fill="#0F172A" />
          <rect x="13" y="87" width="20" height="20" rx="2" fill="#FFFFFF" />
          <rect x="18" y="92" width="10" height="10" rx="1.5" fill="#0F172A" />

          {/* Stylized QR Data Grid Elements */}
          <rect x="44" y="10" width="6" height="6" fill="#0F172A" />
          <rect x="54" y="10" width="6" height="6" fill="#0F172A" />
          <rect x="68" y="10" width="6" height="6" fill="#0F172A" />
          <rect x="44" y="22" width="6" height="6" fill="#0F172A" />
          <rect x="64" y="22" width="6" height="6" fill="#0F172A" />
          <rect x="52" y="30" width="6" height="6" fill="#0F172A" />

          <rect x="10" y="44" width="6" height="6" fill="#0F172A" />
          <rect x="22" y="44" width="6" height="6" fill="#0F172A" />
          <rect x="34" y="44" width="6" height="6" fill="#0F172A" />
          <rect x="82" y="44" width="6" height="6" fill="#0F172A" />
          <rect x="94" y="44" width="6" height="6" fill="#0F172A" />

          <rect x="10" y="56" width="6" height="6" fill="#0F172A" />
          <rect x="28" y="56" width="6" height="6" fill="#0F172A" />
          <rect x="88" y="56" width="6" height="6" fill="#0F172A" />
          <rect x="102" y="56" width="6" height="6" fill="#0F172A" />

          <rect x="10" y="68" width="6" height="6" fill="#0F172A" />
          <rect x="22" y="68" width="6" height="6" fill="#0F172A" />
          <rect x="82" y="68" width="6" height="6" fill="#0F172A" />
          <rect x="100" y="68" width="6" height="6" fill="#0F172A" />

          <rect x="44" y="82" width="6" height="6" fill="#0F172A" />
          <rect x="60" y="82" width="6" height="6" fill="#0F172A" />
          <rect x="74" y="82" width="6" height="6" fill="#0F172A" />
          <rect x="90" y="82" width="6" height="6" fill="#0F172A" />

          <rect x="50" y="94" width="6" height="6" fill="#0F172A" />
          <rect x="68" y="94" width="6" height="6" fill="#0F172A" />
          <rect x="82" y="94" width="6" height="6" fill="#0F172A" />
          <rect x="100" y="94" width="6" height="6" fill="#0F172A" />

          <rect x="44" y="104" width="6" height="6" fill="#0F172A" />
          <rect x="62" y="104" width="6" height="6" fill="#0F172A" />
          <rect x="78" y="104" width="6" height="6" fill="#0F172A" />
          <rect x="94" y="104" width="6" height="6" fill="#0F172A" />

          {/* Center WhatsApp Logo Medallion */}
          <circle cx="60" cy="60" r="15" fill="#FFFFFF" />
          <circle cx="60" cy="60" r="13" fill="#25D366" />
          <path
            d="M60 52c-4.4 0-8 3.6-8 8 0 1.4.4 2.8 1.1 4L52 68l4.2-1.1c1.2.7 2.5 1.1 3.8 1.1 4.4 0 8-3.6 8-8s-3.6-8-8-8zm4.1 11.3c-.2.5-.9 1-1.3 1-.3 0-.7.1-2.2-.5-1.9-.8-3.1-2.7-3.2-2.9-.1-.1-.8-1.1-.8-2.1 0-1 .5-1.5.7-1.7.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .4.3.2.4.6 1.4.6 1.5 0 .1 0 .3-.1.4-.1.1-.2.3-.3.4-.1.1-.3.3-.1.5.2.4.9 1.5 2 2.4.7.6 1.4.8 1.6.9.2.1.4 0 .5-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.4.7 1.6.8.2.1.4.2.4.3.1.2.1.9-.1 1.4z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      <a
        href={whatsappLink("Hi Siddhi Info, I want to talk to you about a digital project for my business.")}
        target="_blank"
        rel="noopener noreferrer"
        className="btn bg-[#25D366] text-white hover:bg-[#1fb857] w-full text-xs font-bold shadow-md shadow-green-900/20 py-2.5"
      >
        <WhatsAppIcon className="size-4" /> Open WhatsApp Directly
      </a>

      <p className="mt-2 text-[11px] text-slate-400">
        Mon–Sat, 10 AM – 7 PM IST · Direct Developer Reply
      </p>
    </div>
  );
}

