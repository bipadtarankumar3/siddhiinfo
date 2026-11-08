// Colourful, India-flavoured illustrations for each industry (64×64).
const Bg = ({ c }) => <rect width="64" height="64" rx="16" fill={c} />;

const art = {
  "retail-kirana": (
    <>
      <Bg c="#fff7ed" />
      <rect x="12" y="24" width="40" height="28" fill="#fef3c7" />
      <rect x="10" y="14" width="44" height="10" rx="2" fill="#1668b5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${10 + i * 8.8} 24 h8.8 v5 a4.4 4.4 0 0 1 -8.8 0 Z`} fill={i % 2 ? "#fff" : "#f97316"} />
      ))}
      <rect x="16" y="34" width="14" height="18" fill="#92400e" />
      <rect x="34" y="34" width="14" height="10" rx="1.5" fill="#fff" stroke="#e2e8f0" />
      <rect x="37" y="37" width="3" height="3" fill="#0b1530" />
      <rect x="42" y="37" width="3" height="3" fill="#0b1530" />
      <rect x="37" y="41" width="8" height="1.5" fill="#12936a" />
    </>
  ),
  "restaurants-cafes": (
    <>
      <Bg c="#fef9c3" />
      <circle cx="32" cy="34" r="22" fill="#cbd5e1" />
      <circle cx="32" cy="34" r="19" fill="#e2e8f0" />
      <circle cx="22" cy="26" r="6" fill="#facc15" />
      <circle cx="35" cy="22" r="5.5" fill="#16a34a" />
      <circle cx="44" cy="31" r="5" fill="#fff" stroke="#e2e8f0" />
      <circle cx="42" cy="43" r="5" fill="#dc2626" />
      <path d="M17 38 a10 10 0 0 0 20 6 Z" fill="#d6a15a" />
      <circle cx="28" cy="34" r="3" fill="#f97316" />
    </>
  ),
  "clinics-healthcare": (
    <>
      <Bg c="#ecfdf5" />
      <rect x="14" y="14" width="36" height="36" rx="10" fill="#fff" stroke="#bbf7d0" />
      <path d="M28 20 h8 v8 h8 v8 h-8 v8 h-8 v-8 h-8 v-8 h8 Z" fill="#12936a" />
      <path d="M8 46 h12 l4 -6 l5 10 l4 -14 l4 10 h19" stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    </>
  ),
  "schools-coaching": (
    <>
      <Bg c="#eef7ff" />
      <rect x="10" y="14" width="44" height="32" rx="3" fill="#92400e" />
      <rect x="13" y="17" width="38" height="26" rx="2" fill="#14532d" />
      <text x="22" y="36" fontSize="15" fontWeight="700" fill="#fff">अ</text>
      <text x="36" y="36" fontSize="14" fontWeight="700" fill="#fde68a">A</text>
      <rect x="14" y="48" width="36" height="3" rx="1.5" fill="#f97316" />
      <rect x="44" y="40" width="3" height="10" rx="1" fill="#fff" transform="rotate(30 45 45)" />
    </>
  ),
  "salons-spas": (
    <>
      <Bg c="#fdf2f8" />
      <ellipse cx="26" cy="28" rx="13" ry="16" fill="#f9a8d4" />
      <ellipse cx="26" cy="28" rx="10" ry="13" fill="#e0f2fe" />
      <path d="M22 22 l4 -4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <rect x="24" y="43" width="4" height="10" fill="#db2777" />
      <circle cx="44" cy="44" r="5" fill="none" stroke="#7c3aed" strokeWidth="2.5" />
      <circle cx="52" cy="36" r="5" fill="none" stroke="#7c3aed" strokeWidth="2.5" />
      <path d="M47 40 L40 26 M49 39 L54 22" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M46 14 l1.5 3 l3 1.5 l-3 1.5 l-1.5 3 l-1.5 -3 l-3 -1.5 l3 -1.5 Z" fill="#f59e0b" />
    </>
  ),
  "real-estate": (
    <>
      <Bg c="#eef7ff" />
      <rect x="30" y="12" width="22" height="40" rx="2" fill="#1668b5" />
      {[0, 1, 2, 3].map((r) => [0, 1].map((c) => (
        <rect key={`${r}${c}`} x={34 + c * 8} y={17 + r * 8} width="5" height="5" fill="#bae6fd" />
      )))}
      <path d="M10 36 l12 -10 l12 10 v16 h-24 Z" fill="#f97316" />
      <rect x="18" y="42" width="8" height="10" fill="#fff7ed" />
      <circle cx="46" cy="50" r="6" fill="#facc15" />
      <path d="M40 50 h-12 m4 0 v3 m4 -3 v3" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  "manufacturers-wholesalers": (
    <>
      <Bg c="#f1f5f9" />
      <path d="M8 52 V30 l10 6 v-6 l10 6 v-6 l10 6 V18 h8 v34 Z" fill="#475569" />
      <rect x="40" y="10" width="6" height="10" fill="#64748b" />
      <circle cx="46" cy="8" r="3" fill="#cbd5e1" />
      <circle cx="52" cy="5" r="2" fill="#e2e8f0" />
      {[14, 24, 34].map((x) => <rect key={x} x={x} y="42" width="5" height="5" fill="#fbbf24" />)}
      <g transform="translate(50 46)">
        <circle r="8" fill="#12936a" />
        {Array.from({ length: 8 }, (_, i) => (
          <rect key={i} x="-1.8" y="-11" width="3.6" height="5" fill="#12936a" transform={`rotate(${i * 45})`} />
        ))}
        <circle r="3" fill="#f1f5f9" />
      </g>
    </>
  ),
  "professionals-ca-consultants": (
    <>
      <Bg c="#fef2f2" />
      <rect x="14" y="10" width="34" height="44" rx="3" fill="#b91c1c" />
      <rect x="14" y="10" width="6" height="44" rx="2" fill="#991b1b" />
      <rect x="24" y="16" width="20" height="12" rx="1" fill="#fde68a" />
      <text x="34" y="25.5" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#991b1b">शुभ लाभ</text>
      <path d="M14 38 h34" stroke="#facc15" strokeWidth="2.5" />
      <circle cx="31" cy="38" r="3" fill="#facc15" />
      <circle cx="48" cy="46" r="9" fill="#12936a" />
      <text x="48" y="50.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff">₹</text>
    </>
  ),
};

art["ngos-csr"] = (
  <>
    <Bg c="#fff7ed" />
    <path d="M32 50 C18 40 12 32 12 25 a9 9 0 0 1 20 -4 a9 9 0 0 1 20 4 c0 7 -6 15 -20 25 Z" fill="#f97316" />
    <path d="M22 24 a5 5 0 0 1 8 -2" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    <path d="M8 48 q8 -6 16 -2 l8 4 q4 2 6 0 l12 -6 q4 -2 6 2 l-16 10 q-6 3 -12 0 l-8 -4 Z" fill="#16a34a" />
  </>
);
art["startups-entrepreneurs"] = (
  <>
    <Bg c="#f0efff" />
    <path d="M32 8 c10 6 14 18 12 30 l-6 6 h-12 l-6 -6 c-2 -12 2 -24 12 -30 Z" fill="#1668b5" />
    <circle cx="32" cy="26" r="5" fill="#fff" />
    <circle cx="32" cy="26" r="2.5" fill="#14b8d6" />
    <path d="M20 38 l-8 8 l10 0 Z M44 38 l8 8 l-10 0 Z" fill="#38a6e3" />
    <path d="M27 46 q5 12 10 0" fill="#f97316" />
    <path d="M30 46 q2 7 4 0" fill="#fbbf24" />
  </>
);

export default function IndustryArt({ slug, className = "size-14" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {art[slug] ?? art["retail-kirana"]}
    </svg>
  );
}
