/*
  Multi-colour illustrated icons in an Indian palette (saffron, marigold,
  peacock, rani pink, leaf green, indigo). Keys match the lucide icon names
  used in src/lib/data.js, so content files don't need to change.
  Pure inline SVG — no requests, scales cleanly, decorative (aria-hidden).
*/
const C = {
  saffron: "#F97316", saffronDk: "#C2410C", marigold: "#FBBF24", haldi: "#F59E0B", haldiDk: "#B45309",
  peacock: "#0E7490", teal: "#14B8A6", sky: "#38BDF8", skyDk: "#0284C7",
  rani: "#DB2777", raniLt: "#F9A8D4", rose: "#E11D48",
  leaf: "#16A34A", leafLt: "#4ADE80", indigo: "#4338CA", indigoLt: "#818CF8", violet: "#7C3AED",
  navy: "#1E3A8A", white: "#FFFFFF", slate: "#475569",
};

const icons = {
  Globe: ["#E0F2FE", <>
    <circle cx="24" cy="24" r="13" fill={C.sky} />
    <path d="M17 17c3 1 4 4 2 6s1 5 4 5M29 14c-2 3 0 5 3 5s3 4 1 7" fill={C.leaf} stroke={C.leaf} strokeWidth="3" strokeLinecap="round" />
    <ellipse cx="24" cy="24" rx="6" ry="13" fill="none" stroke={C.white} strokeWidth="1.4" opacity=".7" />
    <path d="M11 24h26" stroke={C.white} strokeWidth="1.4" opacity=".7" />
  </>],
  ShoppingBag: ["#FFEDD5", <>
    <path d="M18 17v-2a6 6 0 0 1 12 0v2" fill="none" stroke={C.saffronDk} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M12 17h24l-2 20a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2z" fill={C.saffron} />
    <path d="M12 17h24l-.6 6H12.6z" fill={C.haldi} />
    <circle cx="24" cy="30" r="5" fill={C.marigold} />
    <text x="24" y="33" textAnchor="middle" fontSize="8" fontWeight="800" fill={C.haldiDk} fontFamily="system-ui">₹</text>
  </>],
  ReceiptIndianRupee: ["#DCFCE7", <>
    <path d="M14 9h20v30l-3-2-3 2-3-2-3 2-3-2-3 2-2-2z" fill={C.white} stroke={C.leaf} strokeWidth="1.6" strokeLinejoin="round" />
    <text x="24" y="22" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.leaf} fontFamily="system-ui">₹</text>
    <path d="M18 27h12M18 31h8" stroke={C.haldi} strokeWidth="2" strokeLinecap="round" />
  </>],
  MessageCircle: ["#DCFCE7", <>
    <path d="M24 10a14 14 0 0 0-12 21l-2 7 7-2a14 14 0 1 0 7-26z" fill={C.leafLt} />
    <path d="M24 12a12 12 0 0 0-10 18l-1.5 5 5-1.5A12 12 0 1 0 24 12z" fill="#22C55E" />
    <circle cx="18.5" cy="24" r="2" fill={C.white} /><circle cx="24" cy="24" r="2" fill={C.white} /><circle cx="29.5" cy="24" r="2" fill={C.white} />
  </>],
  MapPin: ["#FCE7F3", <>
    <ellipse cx="24" cy="38" rx="9" ry="3" fill={C.raniLt} />
    <path d="M24 8a10 10 0 0 0-10 10c0 8 10 19 10 19s10-11 10-19A10 10 0 0 0 24 8z" fill={C.rani} />
    <circle cx="24" cy="18" r="4.5" fill={C.white} />
    <circle cx="24" cy="18" r="2" fill={C.marigold} />
  </>],
  Megaphone: ["#EDE9FE", <>
    <path d="M12 21h5l14-8v22l-14-8h-5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" fill={C.violet} />
    <path d="M17 21l14-8v22l-14-8z" fill={C.indigoLt} />
    <path d="M15 28l2 8h4l-2-8" fill={C.haldiDk} />
    <path d="M35 19c2 1.5 2 8.5 0 10M38 16c3.5 3 3.5 13 0 16" fill="none" stroke={C.saffron} strokeWidth="2" strokeLinecap="round" />
  </>],
  Server: ["#E0F2FE", <>
    <rect x="11" y="11" width="26" height="11" rx="3" fill={C.sky} />
    <rect x="11" y="26" width="26" height="11" rx="3" fill={C.skyDk} />
    <circle cx="16" cy="16.5" r="1.8" fill={C.leafLt} /><circle cx="16" cy="31.5" r="1.8" fill={C.marigold} />
    <path d="M22 16.5h10M22 31.5h10" stroke={C.white} strokeWidth="2" strokeLinecap="round" />
  </>],
  AppWindow: ["#DBEAFE", <>
    <rect x="9" y="11" width="30" height="26" rx="4" fill={C.white} stroke="#2563EB" strokeWidth="1.6" />
    <path d="M9 15a4 4 0 0 1 4-4h22a4 4 0 0 1 4 4v3H9z" fill="#2563EB" />
    <circle cx="13.5" cy="14.5" r="1.3" fill={C.rose} /><circle cx="17.5" cy="14.5" r="1.3" fill={C.marigold} /><circle cx="21.5" cy="14.5" r="1.3" fill={C.leafLt} />
    <rect x="13" y="22" width="9" height="11" rx="1.5" fill={C.saffron} />
    <rect x="25" y="22" width="10" height="4" rx="1.5" fill={C.teal} /><rect x="25" y="29" width="10" height="4" rx="1.5" fill={C.raniLt} />
  </>],
  LayoutDashboard: ["#E0E7FF", <>
    <rect x="10" y="10" width="12" height="16" rx="3" fill={C.indigo} />
    <rect x="26" y="10" width="12" height="9" rx="3" fill={C.haldi} />
    <rect x="10" y="29" width="12" height="9" rx="3" fill={C.teal} />
    <rect x="26" y="22" width="12" height="16" rx="3" fill={C.rani} />
  </>],
  Puzzle: ["#FEF3C7", <>
    <path d="M10 14h8a3 3 0 1 1 6 0h0v8a3 3 0 1 0 0 6v0h-14z" fill={C.saffron} />
    <path d="M24 14h14v14h-8a3 3 0 1 0-6 0z" fill={C.sky} />
    <path d="M10 28h14v10H10z" fill={C.leaf} />
    <path d="M24 28h6a3 3 0 1 1 6 0h2v10H24z" fill={C.rani} />
  </>],
  Smartphone: ["#F3E8FF", <>
    <rect x="15" y="7" width="18" height="34" rx="4" fill={C.violet} />
    <rect x="17.5" y="11" width="13" height="24" rx="1.5" fill={C.white} />
    <rect x="19.5" y="14" width="9" height="5" rx="1" fill={C.marigold} />
    <rect x="19.5" y="22" width="9" height="3" rx="1" fill={C.teal} />
    <rect x="19.5" y="27" width="6" height="3" rx="1" fill={C.raniLt} />
    <circle cx="24" cy="38" r="1.3" fill={C.white} />
  </>],
  Bot: ["#FFEDD5", <>
    <path d="M24 8v5" stroke={C.haldiDk} strokeWidth="2" strokeLinecap="round" /><circle cx="24" cy="8" r="2.5" fill={C.marigold} />
    <rect x="11" y="14" width="26" height="20" rx="7" fill={C.saffron} />
    <rect x="15" y="18" width="18" height="10" rx="5" fill={C.white} />
    <circle cx="20" cy="23" r="2.2" fill={C.navy} /><circle cx="28" cy="23" r="2.2" fill={C.navy} />
    <path d="M18 34v4M30 34v4" stroke={C.saffronDk} strokeWidth="3" strokeLinecap="round" />
  </>],
  TrendingUp: ["#DCFCE7", <>
    <rect x="11" y="28" width="6" height="10" rx="1.5" fill="#86EFAC" />
    <rect x="21" y="22" width="6" height="16" rx="1.5" fill={C.leafLt} />
    <rect x="31" y="16" width="6" height="22" rx="1.5" fill={C.leaf} />
    <path d="M10 22l9-7 6 4 11-9" fill="none" stroke={C.saffron} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M31 10h5v5" fill="none" stroke={C.saffron} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </>],
  Zap: ["#FEF9C3", <>
    <path d="M27 7L13 27h10l-3 14 15-21H25z" fill={C.marigold} stroke={C.haldiDk} strokeWidth="1.6" strokeLinejoin="round" />
  </>],
  Rocket: ["#FFE4E6", <>
    <path d="M24 7c6 4 8 11 7 19H17c-1-8 1-15 7-19z" fill={C.white} stroke={C.rose} strokeWidth="1.6" />
    <circle cx="24" cy="17" r="3.2" fill={C.sky} stroke={C.navy} strokeWidth="1" />
    <path d="M17 22l-5 6 5 1zM31 22l5 6-5 1z" fill={C.rose} />
    <path d="M20 27h8l-1.5 6c-1 2.5-4 2.5-5 0z" fill={C.saffron} />
    <path d="M22 31h4l-1 6c-.6 1.5-1.4 1.5-2 0z" fill={C.marigold} />
  </>],
  MessagesSquare: ["#CCFBF1", <>
    <path d="M9 12a3 3 0 0 1 3-3h17a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H16l-5 4v-4a3 3 0 0 1-2-3z" fill={C.teal} />
    <path d="M18 27h12l6 5v-5a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2v9a5 5 0 0 1-5 5z" fill={C.haldi} />
    <path d="M14 15h12M14 19h8" stroke={C.white} strokeWidth="2" strokeLinecap="round" />
  </>],
  ClipboardCheck: ["#FEF3C7", <>
    <rect x="12" y="10" width="24" height="30" rx="3" fill={C.haldiDk} />
    <rect x="15" y="14" width="18" height="23" rx="1.5" fill={C.white} />
    <rect x="19" y="8" width="10" height="5" rx="2" fill={C.marigold} />
    <path d="M18.5 25l4 4 7-8" fill="none" stroke={C.leaf} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </>],
  Code2: ["#E0E7FF", <>
    <path d="M17 15l-8 9 8 9" fill="none" stroke={C.indigo} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M31 15l8 9-8 9" fill="none" stroke={C.indigo} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M27 12l-6 24" stroke={C.rani} strokeWidth="3.4" strokeLinecap="round" />
  </>],
  LifeBuoy: ["#FFE4E6", <>
    <circle cx="24" cy="24" r="13" fill={C.white} stroke="#FECDD3" strokeWidth="1" />
    <path d="M24 11a13 13 0 0 1 9.2 3.8L28.2 19.8A6 6 0 0 0 24 18zM37 24a13 13 0 0 1-3.8 9.2l-5-5A6 6 0 0 0 30 24zM24 37a13 13 0 0 1-9.2-3.8l5-5A6 6 0 0 0 24 30zM11 24a13 13 0 0 1 3.8-9.2l5 5A6 6 0 0 0 18 24z" fill={C.rose} />
    <circle cx="24" cy="24" r="6" fill="none" stroke={C.rose} strokeWidth="1" />
  </>],
  KeyRound: ["#FEF3C7", <>
    <circle cx="17" cy="20" r="8" fill={C.haldi} />
    <circle cx="17" cy="20" r="3" fill="#FEF3C7" />
    <path d="M22 25l13 13M30 33l3-3M33 36l3-3" stroke={C.haldiDk} strokeWidth="3.4" strokeLinecap="round" />
  </>],
  IndianRupee: ["#DCFCE7", <>
    <circle cx="24" cy="24" r="14" fill={C.marigold} />
    <circle cx="24" cy="24" r="11" fill="none" stroke={C.haldiDk} strokeWidth="1" strokeDasharray="2 2" />
    <text x="24" y="30" textAnchor="middle" fontSize="17" fontWeight="800" fill={C.haldiDk} fontFamily="system-ui">₹</text>
  </>],
  Store: ["#FFEDD5", <>
    <rect x="12" y="22" width="24" height="16" rx="1.5" fill={C.white} stroke={C.saffronDk} strokeWidth="1.4" />
    <path d="M10 14h28l-2 8H12z" fill={C.saffron} />
    <path d="M14.7 14l-1 8M20 14v8M25.4 14l1 8M30.8 14l1.6 8" stroke={C.white} strokeWidth="2.6" />
    <rect x="21" y="28" width="7" height="10" rx="1" fill={C.saffronDk} />
    <rect x="14.5" y="26" width="4.5" height="4.5" rx="1" fill={C.sky} />
    <path d="M10 10h28" stroke={C.leaf} strokeWidth="1.4" />
    <circle cx="14" cy="11.5" r="1.8" fill={C.marigold} /><circle cx="24" cy="11.5" r="1.8" fill={C.saffron} /><circle cx="34" cy="11.5" r="1.8" fill={C.marigold} />
  </>],
  Building2: ["#DBEAFE", <>
    <rect x="11" y="9" width="16" height="30" rx="2" fill="#2563EB" />
    <rect x="27" y="18" width="11" height="21" rx="2" fill={C.teal} />
    {[13, 18, 23, 28].map((y) => <g key={y}><rect x="14" y={y} width="3.5" height="3" rx=".6" fill={C.marigold} /><rect x="20.5" y={y} width="3.5" height="3" rx=".6" fill={C.white} /></g>)}
    <rect x="30" y="22" width="5" height="3" rx=".6" fill={C.white} /><rect x="30" y="28" width="5" height="3" rx=".6" fill={C.white} />
    <rect x="17" y="33" width="4" height="6" fill={C.navy} />
  </>],
  UtensilsCrossed: ["#FFEDD5", <>
    <circle cx="24" cy="24" r="14" fill="#FDE68A" stroke={C.haldi} strokeWidth="1.6" />
    <circle cx="18" cy="19" r="4" fill={C.saffron} /><circle cx="29" cy="18" r="3.5" fill={C.leaf} />
    <circle cx="30" cy="29" r="4" fill="#DC2626" /><ellipse cx="19" cy="29" rx="5" ry="3.5" fill={C.white} />
  </>],
  Stethoscope: ["#E0F2FE", <>
    <rect x="11" y="11" width="26" height="26" rx="8" fill={C.white} stroke={C.sky} strokeWidth="1.6" />
    <path d="M21 16h6v5h5v6h-5v5h-6v-5h-5v-6h5z" fill="#DC2626" />
  </>],
  GraduationCap: ["#E0E7FF", <>
    <path d="M24 12l16 7-16 7-16-7z" fill={C.navy} />
    <path d="M14 23v7c0 3 4.5 5 10 5s10-2 10-5v-7l-10 4.5z" fill={C.indigo} />
    <path d="M38 19v10" stroke={C.marigold} strokeWidth="2" /><circle cx="38" cy="31" r="2.2" fill={C.marigold} />
  </>],
  Scissors: ["#FCE7F3", <>
    <path d="M20 22l17-12M20 26l17 12" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
    <circle cx="15" cy="18" r="5" fill="none" stroke={C.rani} strokeWidth="3.4" />
    <circle cx="15" cy="30" r="5" fill="none" stroke={C.rani} strokeWidth="3.4" />
  </>],
  HeartHandshake: ["#FFE4E6", <>
    <path d="M24 37s-13-7.5-13-16a7 7 0 0 1 13-3.5A7 7 0 0 1 37 21c0 8.5-13 16-13 16z" fill={C.rose} />
    <path d="M18 22c2-1 4 1 6 0s4-1 6 0" fill="none" stroke={C.white} strokeWidth="2" strokeLinecap="round" />
  </>],
  Factory: ["#F1F5F9", <>
    <path d="M9 38V22l8 5v-5l8 5v-5l8 5V12h6v26z" fill={C.slate} />
    <path d="M33 12h6v4h-6z" fill={C.saffron} />
    <rect x="13" y="31" width="4" height="4" fill={C.marigold} /><rect x="21" y="31" width="4" height="4" fill={C.marigold} /><rect x="29" y="31" width="4" height="4" fill={C.marigold} />
    <circle cx="36" cy="8" r="2.5" fill="#CBD5E1" /><circle cx="40" cy="6" r="1.8" fill="#E2E8F0" />
  </>],
  Briefcase: ["#FEF3C7", <>
    <path d="M19 15v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" fill="none" stroke="#92400E" strokeWidth="2.4" />
    <rect x="9" y="15" width="30" height="22" rx="3" fill="#92400E" />
    <rect x="9" y="23" width="30" height="4" fill={C.haldi} />
    <rect x="21.5" y="21.5" width="5" height="7" rx="1" fill={C.marigold} />
  </>],
  Users: ["#CCFBF1", <>
    <circle cx="18" cy="18" r="5" fill={C.teal} /><path d="M9 36a9 9 0 0 1 18 0z" fill={C.teal} />
    <circle cx="31" cy="20" r="4.5" fill={C.saffron} /><path d="M24 37a8 8 0 0 1 16 0z" fill={C.saffron} />
  </>],
  Cloud: ["#E0F2FE", <>
    <path d="M15 34a8 8 0 0 1-1-15.9A11 11 0 0 1 35 16a9 9 0 0 1-1 18z" fill={C.sky} />
    <path d="M18 30h14M18 25h9" stroke={C.white} strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="34" cy="34" r="6" fill={C.saffron} stroke={C.white} strokeWidth="2" />
    <path d="M34 31v6M31 34h6" stroke={C.white} strokeWidth="2" strokeLinecap="round" />
  </>],
  Wrench: ["#DCFCE7", <>
    <path d="M30 10a8 8 0 0 0-7.6 10.4L11 31.8a3 3 0 0 0 4.2 4.2l11.4-11.4A8 8 0 0 0 37 17l-4.6 4.6-4-1-1-4L32 12a8 8 0 0 0-2-2z" fill={C.leaf} />
    <circle cx="13.5" cy="33.5" r="1.6" fill={C.white} />
    <circle cx="36" cy="36" r="5" fill={C.marigold} />
    <path d="M33.8 36l1.6 1.6 3-3.2" fill="none" stroke={C.white} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </>],
  Mail: ["#FFE4E6", <>
    <rect x="9" y="13" width="30" height="22" rx="3" fill={C.rose} />
    <path d="M9.8 15l14.2 10 14.2-10" fill="none" stroke={C.white} strokeWidth="2.2" strokeLinejoin="round" />
    <circle cx="36" cy="14" r="5" fill={C.marigold} stroke={C.white} strokeWidth="1.5" />
  </>],
  Phone: ["#DBEAFE", <>
    <path d="M17 10l4 7-3 3a17 17 0 0 0 10 10l3-3 7 4-2 5c-1 2-3 2-5 1.5A26 26 0 0 1 12 18c-.5-2-.5-4 1.5-5z" fill="#2563EB" />
    <path d="M28 12a8 8 0 0 1 8 8M28 7a13 13 0 0 1 13 13" fill="none" stroke={C.saffron} strokeWidth="2" strokeLinecap="round" />
  </>],
  Languages: ["#FEF3C7", <>
    <rect x="8" y="10" width="20" height="16" rx="3" fill={C.saffron} />
    <text x="18" y="22" textAnchor="middle" fontSize="10" fontWeight="800" fill={C.white} fontFamily="system-ui">अ</text>
    <rect x="20" y="22" width="20" height="16" rx="3" fill={C.teal} />
    <text x="30" y="34" textAnchor="middle" fontSize="10" fontWeight="800" fill={C.white} fontFamily="system-ui">A</text>
  </>],
  Clock: ["#E0F2FE", <>
    <circle cx="24" cy="24" r="13" fill={C.white} stroke={C.skyDk} strokeWidth="2.4" />
    <path d="M24 16v8l5 4" fill="none" stroke={C.saffron} strokeWidth="2.6" strokeLinecap="round" />
  </>],
};

export const hasColorIcon = (name) => Boolean(icons[name]);

export default function ColorIcon({ name, className = "size-12", plain = false, ...svgProps }) {
  const [bg, glyph] = icons[name] ?? icons.Globe;
  return (
    <svg viewBox="0 0 48 48" className={`shrink-0 ${className}`} aria-hidden="true" focusable="false" {...svgProps}>
      {!plain && <rect width="48" height="48" rx="13" fill={bg} />}
      {glyph}
    </svg>
  );
}
