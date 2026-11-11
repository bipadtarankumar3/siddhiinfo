// Repeating Mughal "jali" lattice pattern (pierced-screen motif) — decorative.
export default function Jali({ className = "", uid = "jali", color = "#ffffff", opacity = 0.07 }) {
  return (
    <svg className={className} aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id={`${uid}-p`} width="56" height="56" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth="1">
            <path d="M28 6 L34 22 L50 28 L34 34 L28 50 L22 34 L6 28 L22 22 Z" />
            <circle cx="28" cy="28" r="5" />
            <path d="M0 0 Q14 14 28 0 Q42 14 56 0 M0 56 Q14 42 28 56 Q42 42 56 56" />
            <path d="M0 0 Q14 14 0 28 Q14 42 0 56 M56 0 Q42 14 56 28 Q42 42 56 56" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${uid}-p)`} opacity={opacity} />
    </svg>
  );
}
