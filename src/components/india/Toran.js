/*
  Toran — a festive doorway garland of marigolds and mango leaves.
  Tiles horizontally with an SVG <pattern>, so it fits any width at ~1 KB.
*/
export default function Toran({ uid = "toran", className = "" }) {
  return (
    <svg className={`block h-7 w-full sm:h-8 ${className}`} aria-hidden="true" focusable="false">
      <defs>
        <pattern id={`${uid}-p`} width="56" height="32" patternUnits="userSpaceOnUse">
          {/* string */}
          <path d="M0 4 Q28 12 56 4" fill="none" stroke="#B45309" strokeWidth="1.4" />
          {/* mango leaves */}
          <path d="M14 8 q-4 9 0 16 q4 -7 0 -16z" fill="#16A34A" />
          <path d="M42 8 q-4 9 0 16 q4 -7 0 -16z" fill="#15803D" />
          {/* marigolds */}
          <circle cx="28" cy="10" r="6" fill="#F97316" />
          <circle cx="28" cy="10" r="3.6" fill="#FBBF24" />
          <circle cx="28" cy="10" r="1.4" fill="#C2410C" />
          <circle cx="0" cy="6" r="4.5" fill="#FBBF24" />
          <circle cx="56" cy="6" r="4.5" fill="#FBBF24" />
          <circle cx="0" cy="6" r="2" fill="#F97316" />
          <circle cx="56" cy="6" r="2" fill="#F97316" />
          {/* hanging bead */}
          <path d="M28 16v8" stroke="#B45309" strokeWidth="1" />
          <circle cx="28" cy="26" r="2.6" fill="#DB2777" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${uid}-p)`} />
    </svg>
  );
}
