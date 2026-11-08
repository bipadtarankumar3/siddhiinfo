// Marigold & mango-leaf toran (festive door garland) — repeats across any width.
export default function Toran({ className = "", uid = "toran" }) {
  return (
    <svg className={className} width="100%" height="46" aria-hidden="true">
      <defs>
        <pattern id={`${uid}-p`} width="64" height="46" patternUnits="userSpaceOnUse">
          <path d="M0 4 Q16 8 32 4 T64 4" stroke="#a16207" strokeWidth="1.6" fill="none" />
          {/* marigold strand */}
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} cx="16" cy={11 + i * 8.5} r={i === 3 ? 4.2 : 4.8} fill={i % 2 ? "#f59e0b" : "#f97316"} />
          ))}
          <circle cx="16" cy="11" r="1.6" fill="#fde68a" />
          <circle cx="16" cy="28" r="1.6" fill="#fde68a" />
          {/* mango leaf */}
          <path d="M48 5 C55 12 55 24 48 32 C41 24 41 12 48 5 Z" fill="#16a34a" />
          <path d="M48 7 V30" stroke="#86efac" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="46" fill={`url(#${uid}-p)`} />
    </svg>
  );
}
