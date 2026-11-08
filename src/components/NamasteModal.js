"use client";

import { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useLanguage } from "@/context/LanguageContext";

const STORAGE_KEY = "siddhi_welcomed_v3";

const content = {
  en: {
    heading: "Namaste! 🙏",
    sub: "Welcome to Siddhi Info",
    body: "India's trusted digital partner for small businesses — your business, our technology.",
    explore: "Explore Our Services",
    chat: "Chat on WhatsApp",
    dismiss: "Skip for now",
  },
  hi: {
    heading: "नमस्ते! 🙏",
    sub: "सिद्धि इन्फो में आपका स्वागत है",
    body: "भारतीय छोटे व्यापारियों का सच्चा डिजिटल साथी — आपका बिज़नेस, हमारी टेक्नोलॉजी।",
    explore: "सेवाएं देखें →",
    chat: "व्हाट्सएप पर बात करें",
    dismiss: "बाद में",
  },
  bn: {
    heading: "নমস্কার! 🙏",
    sub: "সিদ্ধি ইনফোতে স্বাগতম",
    body: "ভারতীয় ছোট ব্যবসার বিশ্বস্ত ডিজিটাল সঙ্গী — আপনার ব্যবসা, আমাদের প্রযুক্তি।",
    explore: "পরিষেবা দেখুন",
    chat: "হোয়াটসঅ্যাপে কথা বলুন",
    dismiss: "পরে দেখব",
  },
};

const langOptions = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "bn", label: "বাংলা", flag: "🇮🇳" },
];

/* ─── Big bold Namaste SVG illustration ────────────────────────────────────── */
function NamasteSVG() {
  return (
    <svg
      viewBox="0 0 500 380"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Namaste greeting illustration"
    >
      <defs>
        {/* Saffron radial glow */}
        <radialGradient id="bg-glow" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#FEF9C3" />
          <stop offset="50%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0" />
        </radialGradient>
        {/* Skin */}
        <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBBF6E" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        {/* Saree */}
        <linearGradient id="saree" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        {/* Gold */}
        <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        {/* Blouse */}
        <linearGradient id="blouse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B91C1C" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>
        {/* Deep shadow filter */}
        <filter id="fig-shadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#92400E" floodOpacity="0.3" />
        </filter>
        {/* Soft glow filter */}
        <filter id="glow-f">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── Background mandala rings ── */}
      {[180, 155, 130].map((r, i) => (
        <circle key={i} cx="250" cy="195" r={r} stroke="#F59E0B" strokeWidth={i === 0 ? 1.5 : 1} fill="none" opacity={0.15 + i * 0.1}>
          <animateTransform attributeName="transform" type="rotate" from={`${i % 2 === 0 ? 0 : 360} 250 195`} to={`${i % 2 === 0 ? 360 : 0} 250 195`} dur={`${20 + i * 5}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Petal ring */}
      {Array.from({ length: 24 }, (_, i) => {
        const angle = (i / 24) * 360;
        const rad = (angle * Math.PI) / 180;
        const x = 250 + 170 * Math.cos(rad);
        const y = 195 + 170 * Math.sin(rad);
        return (
          <circle key={`p${i}`} cx={x} cy={y} r={i % 3 === 0 ? 5 : 3} fill={i % 2 === 0 ? "#F97316" : "#FCD34D"} opacity="0.5" />
        );
      })}

      {/* Inner glow */}
      <circle cx="250" cy="195" r="145" fill="url(#bg-glow)" />

      {/* ── Diya left ── */}
      <g transform="translate(78 300)">
        <ellipse cx="0" cy="12" rx="20" ry="8" fill="#D97706" />
        <ellipse cx="0" cy="10" rx="16" ry="6" fill="#FDE68A" />
        {/* Flame */}
        <ellipse cx="0" cy="-6" rx="7" ry="12" fill="#F97316" opacity="0.95">
          <animate attributeName="ry" values="12;16;12;9;12" dur="0.9s" repeatCount="indefinite" />
          <animate attributeName="cy" values="-6;-9;-6;-4;-6" dur="0.9s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="0" cy="-10" rx="4" ry="7" fill="#FCD34D">
          <animate attributeName="ry" values="7;10;7;5;7" dur="0.9s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="0" cy="-14" rx="2" ry="4" fill="#FEF9C3" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.4;0.9" dur="0.6s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* ── Diya right ── */}
      <g transform="translate(422 300)">
        <ellipse cx="0" cy="12" rx="20" ry="8" fill="#D97706" />
        <ellipse cx="0" cy="10" rx="16" ry="6" fill="#FDE68A" />
        <ellipse cx="0" cy="-6" rx="7" ry="12" fill="#F97316" opacity="0.95">
          <animate attributeName="ry" values="12;16;12;9;12" dur="1.1s" repeatCount="indefinite" begin="0.4s" />
          <animate attributeName="cy" values="-6;-9;-6;-4;-6" dur="1.1s" repeatCount="indefinite" begin="0.4s" />
        </ellipse>
        <ellipse cx="0" cy="-10" rx="4" ry="7" fill="#FCD34D">
          <animate attributeName="ry" values="7;10;7;5;7" dur="1.1s" repeatCount="indefinite" begin="0.4s" />
        </ellipse>
        <ellipse cx="0" cy="-14" rx="2" ry="4" fill="#FEF9C3" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.4;0.9" dur="0.7s" repeatCount="indefinite" begin="0.2s" />
        </ellipse>
      </g>

      {/* ── Sparkles ── */}
      {[
        { x: 100, y: 90, s: 10, d: "0s" }, { x: 400, y: 80, s: 8, d: "0.5s" },
        { x: 118, y: 220, s: 7, d: "1s" }, { x: 382, y: 225, s: 9, d: "0.3s" },
        { x: 250, y: 42, s: 12, d: "0.8s" },
      ].map((sp, i) => (
        <g key={`sp${i}`} transform={`translate(${sp.x} ${sp.y})`}>
          <path d={`M0,-${sp.s} L${sp.s * 0.28},-${sp.s * 0.28} L${sp.s},0 L${sp.s * 0.28},${sp.s * 0.28} L0,${sp.s} L-${sp.s * 0.28},${sp.s * 0.28} L-${sp.s},0 L-${sp.s * 0.28},-${sp.s * 0.28} Z`} fill="#FCD34D">
            <animate attributeName="opacity" values="1;0.2;1" dur="2s" begin={sp.d} repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="45 0 0" dur="2s" begin={sp.d} repeatCount="indefinite" />
          </path>
        </g>
      ))}

      {/* ══ FIGURE (floats gently) ══ */}
      <g filter="url(#fig-shadow)">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-8;0,0" dur="3s" repeatCount="indefinite" additive="sum" />

        {/* Shadow */}
        <ellipse cx="250" cy="358" rx="52" ry="10" fill="#92400E" opacity="0.12">
          <animate attributeName="rx" values="52;44;52" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.12;0.06;0.12" dur="3s" repeatCount="indefinite" />
        </ellipse>

        {/* ── LEGS / SAREE SKIRT ── */}
        <path d="M196 232 Q180 310 182 358 h136 Q320 310 304 232 Q276 220 250 218 Q224 220 196 232Z" fill="url(#saree)" />
        {/* Saree gold border */}
        <path d="M196 232 Q180 310 182 358" stroke="#FCD34D" strokeWidth="3" fill="none" opacity="0.7" />
        <path d="M304 232 Q320 310 318 358" stroke="#FCD34D" strokeWidth="3" fill="none" opacity="0.7" />
        {/* Saree pattern dots */}
        {[[220, 270], [250, 285], [280, 270], [235, 310], [265, 310]].map(([px, py], pi) => (
          <circle key={`sd${pi}`} cx={px} cy={py} r="4" fill="#FCD34D" opacity="0.5" />
        ))}

        {/* Dupatta left */}
        <path d="M200 230 Q172 265 168 310 Q186 280 198 265 Z" fill="#DC2626" opacity="0.8" />
        {/* Dupatta right */}
        <path d="M300 230 Q328 265 332 310 Q314 280 302 265 Z" fill="#DC2626" opacity="0.8" />
        {/* Dupatta gold edge */}
        <path d="M200 230 Q172 265 168 310" stroke="#FCD34D" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M300 230 Q328 265 332 310" stroke="#FCD34D" strokeWidth="2" fill="none" opacity="0.6" />

        {/* ── BLOUSE ── */}
        <path d="M200 230 Q250 248 300 230 L296 268 Q250 282 204 268Z" fill="url(#blouse)" />
        {/* Blouse gold trim */}
        <path d="M200 230 Q250 248 300 230" stroke="#FCD34D" strokeWidth="2.5" fill="none" />

        {/* ── NECK ── */}
        <rect x="236" y="190" width="28" height="28" rx="14" fill="url(#skin)" />

        {/* Necklace */}
        <path d="M232 206 Q250 218 268 206" stroke="#D97706" strokeWidth="2.5" fill="none" />
        {[232, 240, 250, 260, 268].map((nx, ni) => (
          <circle key={`nc${ni}`} cx={nx} cy={ni === 2 ? 215 : 208} r="3.5" fill="url(#gold)" />
        ))}

        {/* ── HEAD ── */}
        <ellipse cx="250" cy="148" rx="40" ry="46" fill="url(#skin)" />

        {/* ── HAIR ── */}
        <path d="M210 140 Q250 108 290 140 Q282 118 250 108 Q218 118 210 140Z" fill="#1E1B4B" />
        <ellipse cx="250" cy="110" rx="28" ry="18" fill="#2D2B6B" />
        {/* Bun */}
        <circle cx="250" cy="96" r="13" fill="#312E81" />
        <circle cx="250" cy="96" r="9" fill="#2D2B6B" />
        {/* Gajra (white flowers on bun) */}
        {[0, 60, 120, 180, 240, 300].map((a, ai) => (
          <circle key={`gj${ai}`} cx={250 + 11 * Math.cos((a * Math.PI) / 180)} cy={96 + 11 * Math.sin((a * Math.PI) / 180)} r="3.5" fill="#fff" opacity="0.9" />
        ))}
        {/* Sindoor part */}
        <line x1="250" y1="110" x2="250" y2="122" stroke="#DC2626" strokeWidth="3.5" strokeLinecap="round" />

        {/* ── BINDI ── */}
        <circle cx="250" cy="134" r="6" fill="#DC2626" />
        <circle cx="250" cy="134" r="3.5" fill="#991B1B" />
        {/* Bindi glow */}
        <circle cx="250" cy="134" r="10" fill="#F87171" opacity="0.3" />

        {/* ── EYEBROWS ── */}
        <path d="M228 148 Q237 143 244 148" stroke="#78350F" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M256 148 Q263 143 272 148" stroke="#78350F" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* ── EYES ── */}
        <ellipse cx="236" cy="158" rx="8" ry="8.5" fill="#1E1B4B" />
        <ellipse cx="264" cy="158" rx="8" ry="8.5" fill="#1E1B4B" />
        {/* Eye whites */}
        <ellipse cx="239" cy="156" rx="4" ry="3" fill="#fff" />
        <ellipse cx="267" cy="156" rx="4" ry="3" fill="#fff" />
        {/* Pupils */}
        <circle cx="236" cy="158" r="4" fill="#0F0A28" />
        <circle cx="264" cy="158" r="4" fill="#0F0A28" />
        {/* Shine */}
        <circle cx="238" cy="156" r="1.5" fill="#fff" />
        <circle cx="266" cy="156" r="1.5" fill="#fff" />
        {/* Eyelashes (simple strokes) */}
        {[-8, -4, 0, 4, 8].map((offset, ei) => (
          <line key={`el${ei}`} x1={236 + offset} y1="150" x2={235 + offset} y2="147" stroke="#1E1B4B" strokeWidth="1.2" />
        ))}
        {[-8, -4, 0, 4, 8].map((offset, ei) => (
          <line key={`er${ei}`} x1={264 + offset} y1="150" x2={263 + offset} y2="147" stroke="#1E1B4B" strokeWidth="1.2" />
        ))}

        {/* ── NOSE ── */}
        <ellipse cx="250" cy="170" rx="5" ry="4" fill="#D97706" opacity="0.4" />
        {/* Nose pin */}
        <circle cx="244" cy="171" r="3" fill="#D97706" />
        <circle cx="244" cy="171" r="1.8" fill="#FCD34D" />

        {/* ── SMILE ── */}
        <path d="M237 180 Q250 192 263 180" stroke="#92400E" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* ── CHEEKS ── */}
        <ellipse cx="222" cy="168" rx="11" ry="7" fill="#FCA5A5" opacity="0.4" />
        <ellipse cx="278" cy="168" rx="11" ry="7" fill="#FCA5A5" opacity="0.4" />

        {/* ── EARRINGS ── */}
        {/* Left */}
        <circle cx="210" cy="156" r="8" fill="#D97706" stroke="#FCD34D" strokeWidth="2" />
        <circle cx="210" cy="156" r="5" fill="#FCD34D" />
        <ellipse cx="210" cy="172" rx="6" ry="9" fill="#D97706" />
        <circle cx="210" cy="181" r="5" fill="#FCD34D" />
        {/* Right */}
        <circle cx="290" cy="156" r="8" fill="#D97706" stroke="#FCD34D" strokeWidth="2" />
        <circle cx="290" cy="156" r="5" fill="#FCD34D" />
        <ellipse cx="290" cy="172" rx="6" ry="9" fill="#D97706" />
        <circle cx="290" cy="181" r="5" fill="#FCD34D" />

        {/* ══ FOLDED NAMASTE HANDS ══ */}
        <g>
          <animateTransform attributeName="transform" type="rotate" values="0 250 240;4 250 240;0 250 240;-4 250 240;0 250 240" dur="3s" repeatCount="indefinite" additive="sum" />

          {/* Left arm */}
          <path d="M205 232 Q186 252 182 275 Q196 268 210 258 Q218 244 220 234Z" fill="#D97706" />
          {/* Right arm */}
          <path d="M295 232 Q314 252 318 275 Q304 268 290 258 Q282 244 280 234Z" fill="#B45309" />

          {/* Palm body - left */}
          <ellipse cx="234" cy="258" rx="22" ry="14" fill="#D97706" transform="rotate(-30 234 258)" />
          {/* Palm body - right */}
          <ellipse cx="266" cy="258" rx="22" ry="14" fill="#C2850C" transform="rotate(30 266 258)" />

          {/* Fingers - LEFT hand (5 fingers pointing up-left) */}
          {[
            { cx: 219, cy: 240, rot: -35 },
            { cx: 228, cy: 234, rot: -28 },
            { cx: 238, cy: 231, rot: -20 },
            { cx: 247, cy: 231, rot: -12 },
            { cx: 255, cy: 234, rot: -5 },
          ].map((f, fi) => (
            <ellipse key={`lf${fi}`} cx={f.cx} cy={f.cy} rx="5" ry="11" fill="#D97706" transform={`rotate(${f.rot} ${f.cx} ${f.cy})`} stroke="#B45309" strokeWidth="0.5" />
          ))}

          {/* Fingers - RIGHT hand (5 fingers pointing up-right) */}
          {[
            { cx: 245, cy: 234, rot: 5 },
            { cx: 253, cy: 231, rot: 12 },
            { cx: 262, cy: 231, rot: 20 },
            { cx: 272, cy: 234, rot: 28 },
            { cx: 281, cy: 240, rot: 35 },
          ].map((f, fi) => (
            <ellipse key={`rf${fi}`} cx={f.cx} cy={f.cy} rx="5" ry="11" fill="#B45309" transform={`rotate(${f.rot} ${f.cx} ${f.cy})`} stroke="#92400E" strokeWidth="0.5" />
          ))}

          {/* Thumbs */}
          <ellipse cx="218" cy="260" rx="6" ry="10" fill="#D97706" transform="rotate(-55 218 260)" />
          <ellipse cx="282" cy="260" rx="6" ry="10" fill="#B45309" transform="rotate(55 282 260)" />

          {/* Bangles - left wrist */}
          <ellipse cx="198" cy="272" rx="13" ry="5" stroke="#FCD34D" strokeWidth="3" fill="none" transform="rotate(-25 198 272)" />
          <ellipse cx="198" cy="279" rx="13" ry="5" stroke="#F97316" strokeWidth="2.5" fill="none" transform="rotate(-25 198 279)" />
          {/* Bangles - right wrist */}
          <ellipse cx="302" cy="272" rx="13" ry="5" stroke="#FCD34D" strokeWidth="3" fill="none" transform="rotate(25 302 272)" />
          <ellipse cx="302" cy="279" rx="13" ry="5" stroke="#F97316" strokeWidth="2.5" fill="none" transform="rotate(25 302 279)" />

          {/* OM symbol between hands */}
          <text x="250" y="268" textAnchor="middle" fontSize="18" fontWeight="900" fill="#FEF9C3" fontFamily="serif" opacity="0.85">ॐ</text>
        </g>

        {/* ── LOTUS at feet ── */}
        {[-48, -24, 0, 24, 48].map((off, pi) => (
          <ellipse key={`lt${pi}`} cx={250 + off} cy={354} rx={pi % 2 === 0 ? 14 : 10} ry={8} fill={pi % 2 === 0 ? "#FDA4AF" : "#FB7185"} transform={`rotate(${off * 1.5} ${250 + off} 354)`} opacity="0.75" />
        ))}
        <circle cx="250" cy="350" r="11" fill="#FCD34D" />
        <circle cx="250" cy="350" r="7" fill="#D97706" />
        <text x="250" y="354" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="800">ॐ</text>
      </g>

      {/* ── Marigold garland across top ── */}
      {Array.from({ length: 18 }, (_, i) => {
        const x = 20 + i * 26;
        const y = 20 + (i % 2 === 0 ? 0 : 8);
        return <circle key={`mg${i}`} cx={x} cy={y} r={i % 3 === 0 ? 7 : 5} fill={i % 2 === 0 ? "#F97316" : "#FCD34D"} opacity="0.8" />;
      })}
      {/* String */}
      <path d="M6 20 Q130 32 250 18 Q370 4 494 20" stroke="#D97706" strokeWidth="1.5" fill="none" opacity="0.4" />
    </svg>
  );
}

export default function NamasteModal() {
  const [phase, setPhase] = useState("hidden");
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    const already = localStorage.getItem(STORAGE_KEY);
    if (already) return;
    const raf = requestAnimationFrame(() => {
      const t = setTimeout(() => setPhase("visible"), 500);
      return () => clearTimeout(t);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const dismiss = () => {
    setPhase("done");
    localStorage.setItem(STORAGE_KEY, "true");
  };

  useEffect(() => {
    if (phase !== "visible") return;
    const onKey = (e) => { if (e.key === "Escape") dismiss(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  if (phase === "done" || phase === "hidden") return null;

  const c = content[locale] || content.en;
  const isVisible = phase === "visible";

  return (
    <>
      {/* ── Cinematic backdrop ── */}
      <div
        aria-hidden="true"
        onClick={dismiss}
        className="fixed inset-0 z-[200] transition-opacity duration-500"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.92) 100%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* ── Modal ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="namaste-heading"
        className="fixed z-[210] inset-x-3 top-1/2 mx-auto w-full overflow-hidden rounded-3xl transition-all duration-500 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2"
        style={{
          maxWidth: 520,
          transform: `translateY(-50%) ${isVisible ? "scale(1)" : "scale(0.85)"}`,
          opacity: isVisible ? 1 : 0,
          boxShadow: "0 40px 100px -10px rgba(0,0,0,0.7), 0 0 0 1.5px rgba(255,215,0,0.3), 0 0 80px 0 rgba(249,115,22,0.35)",
        }}
      >
        {/* ════ ILLUSTRATION PANEL ════ */}
        <div
          className="relative overflow-hidden"
          style={{
            height: 320,
            background: "linear-gradient(160deg, #7C2D12 0%, #9A3412 20%, #C2410C 50%, #EA580C 70%, #F97316 85%, #FB923C 100%)",
          }}
        >
          {/* Top flag stripe */}
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] z-10" />

          {/* Decorative radial light */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 60%, rgba(255,255,255,0.18) 0%, transparent 65%)",
            }}
          />

          {/* SVG fills the entire panel */}
          <div className="absolute inset-0 flex items-end justify-center px-4 pb-0">
            <div style={{ width: "100%", maxWidth: 480, height: 320 }}>
              <NamasteSVG />
            </div>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={dismiss}
            aria-label="Close welcome popup"
            className="absolute right-4 top-6 z-20 grid size-9 place-items-center rounded-full text-white/70 ring-1 ring-white/20 backdrop-blur-md transition hover:text-white hover:ring-white/50 active:scale-95"
            style={{ background: "rgba(0,0,0,0.3)" }}
          >
            <X className="size-4" />
          </button>

          {/* Bottom fade into white panel */}
          <div
            className="absolute inset-x-0 bottom-0 h-16"
            style={{
              background: "linear-gradient(to bottom, transparent, #fff)",
            }}
          />
        </div>

        {/* ════ CONTENT PANEL ════ */}
        <div
          className="relative flex flex-col items-center px-6 pb-7 pt-1"
          style={{ background: "#fff" }}
        >
          {/* Heading */}
          <h2 id="namaste-heading" className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {c.heading}
          </h2>
          <p className="mt-1 text-center text-base font-bold text-orange-600">{c.sub}</p>
          <p className="mt-2 text-center text-sm leading-relaxed text-slate-500 max-w-xs">{c.body}</p>

          {/* ── Language switcher ── */}
          <div className="mt-5 flex gap-2 w-full justify-center">
            {langOptions.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLocale(l.code)}
                className="flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-200 active:scale-95"
                style={
                  locale === l.code
                    ? {
                        background: "linear-gradient(135deg,#1D4ED8,#3B82F6)",
                        color: "#fff",
                        boxShadow: "0 4px 14px rgba(29,78,216,0.4)",
                      }
                    : {
                        background: "#F1F5F9",
                        color: "#475569",
                        border: "1px solid #E2E8F0",
                      }
                }
              >
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="my-5 flex w-full items-center gap-3 max-w-xs mx-auto">
            <div className="h-px flex-1 bg-orange-200" />
            <span className="text-sm font-bold text-orange-400">🙏</span>
            <div className="h-px flex-1 bg-orange-200" />
          </div>

          {/* ── Buttons ── */}
          <div className="flex flex-col gap-3 w-full">
            <Link
              href="/services/"
              onClick={dismiss}
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl py-4 text-sm font-bold text-white transition-all duration-200 active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg,#1D4ED8 0%,#3B82F6 60%,#0EA5E9 100%)",
                boxShadow: "0 6px 24px rgba(29,78,216,0.45)",
              }}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              {c.explore}
              <ArrowRight className="size-4 shrink-0" />
            </Link>

            <a
              href={whatsappLink("नमस्ते! मैं सिद्धि इन्फो से अपने बिज़नेस के बारे में बात करना चाहता हूँ।")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl py-4 text-sm font-bold text-white transition-all duration-200 active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg,#16A34A 0%,#22C55E 60%,#4ADE80 100%)",
                boxShadow: "0 6px 24px rgba(22,163,74,0.45)",
              }}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <WhatsAppIcon className="size-5 shrink-0" />
              {c.chat}
            </a>
          </div>

          {/* Skip */}
          <button
            type="button"
            onClick={dismiss}
            className="mt-5 text-xs text-slate-400 hover:text-slate-600 transition underline underline-offset-2"
          >
            {c.dismiss}
          </button>

          {/* Trust row */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px] font-semibold text-slate-400">
            <span>🇮🇳 Made in India</span>
            <span className="h-3 w-px bg-slate-200" />
            <span>🔒 100% Secure</span>
            <span className="h-3 w-px bg-slate-200" />
            <span>⭐ Trusted by 500+ Businesses</span>
          </div>

          {/* Bottom flag stripe */}
          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
        </div>
      </div>
    </>
  );
}
