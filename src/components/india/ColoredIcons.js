// Colored multi-tone SVG icon components for Siddhi Info
// Every icon uses rich gradients and distinctive colors — no flat monochrome.
// All are pure SVG, zero dependencies.

// ── Why Choose icons ────────────────────────────────────────────────────────

export function IconRupee({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-rupee-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-rupee-bg)" />
      <text x="24" y="34" textAnchor="middle" fontSize="26" fontWeight="800" fill="#fff" fontFamily="system-ui">₹</text>
    </svg>
  );
}

export function IconHeadset({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-headset-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-headset-bg)" />
      <path d="M14 26v-2a10 10 0 0 1 20 0v2" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <rect x="12" y="26" width="5" height="8" rx="2.5" fill="#bfdbfe" />
      <rect x="31" y="26" width="5" height="8" rx="2.5" fill="#bfdbfe" />
      <path d="M36 32v2a4 4 0 0 1-4 4h-4" stroke="#bfdbfe" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="28" cy="37" r="2" fill="#93c5fd" />
    </svg>
  );
}

export function IconPuzzle({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-puzzle-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-puzzle-bg)" />
      <path d="M20 13h-5a2 2 0 0 0-2 2v5h2a3 3 0 0 1 0 6h-2v5a2 2 0 0 0 2 2h5v-2a3 3 0 0 1 6 0v2h5a2 2 0 0 0 2-2v-5h-2a3 3 0 0 1 0-6h2v-5a2 2 0 0 0-2-2h-5v2a3 3 0 0 1-6 0v-2z" fill="#e9d5ff" stroke="#f5f3ff" strokeWidth="1.2" />
    </svg>
  );
}

export function IconMobile({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-mobile-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-mobile-bg)" />
      <rect x="16" y="10" width="16" height="28" rx="4" fill="#d1fae5" stroke="#fff" strokeWidth="1.5" />
      <rect x="19" y="13" width="10" height="17" rx="2" fill="#6ee7b7" />
      <circle cx="24" cy="34" r="2" fill="#fff" />
      <rect x="21" y="11" width="6" height="1.5" rx=".75" fill="#fff" />
    </svg>
  );
}

export function IconShield({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-shield-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-shield-bg)" />
      <path d="M24 11 l11 4v9c0 8-5 14-11 16-6-2-11-8-11-16v-9Z" fill="#bfdbfe" stroke="#fff" strokeWidth="1.5" />
      <path d="M19 24l3.5 3.5 6.5-7" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function IconCalendar({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-cal-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-cal-bg)" />
      <rect x="12" y="17" width="24" height="20" rx="4" fill="#fef3c7" />
      <rect x="12" y="17" width="24" height="7" rx="4" fill="#fed7aa" />
      <rect x="13" y="21" width="22" height="3" fill="#fed7aa" />
      <line x1="18" y1="13" x2="18" y2="20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="30" y1="13" x2="30" y2="20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="18" cy="31" r="2" fill="#f97316" />
      <circle cx="24" cy="31" r="2" fill="#f97316" />
      <circle cx="30" cy="31" r="2" fill="#f97316" />
    </svg>
  );
}

export function IconKey({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-key-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-key-bg)" />
      <circle cx="21" cy="21" r="8" fill="#fef3c7" stroke="#fff" strokeWidth="1.5" />
      <circle cx="21" cy="21" r="4" fill="#f59e0b" />
      <path d="M27 25l9 9-3 3-2-2-2 2-2-2" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function IconLifebuoy({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-buoy-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-buoy-bg)" />
      <circle cx="24" cy="24" r="12" stroke="#bae6fd" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="24" r="6" stroke="#fff" strokeWidth="2.5" fill="#bae6fd" />
      <path d="M18.3 18.3l-4.9-4.9M29.7 18.3l4.9-4.9M18.3 29.7l-4.9 4.9M29.7 29.7l4.9 4.9" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// ── Process step icons ────────────────────────────────────────────────────────

export function IconChat({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-chat-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-chat-bg)" />
      <path d="M13 14h22a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H22l-7 5v-5h-2a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2z" fill="#bbf7d0" stroke="#fff" strokeWidth="1.5" />
      <line x1="18" y1="21" x2="30" y2="21" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="26" x2="26" y2="26" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconPencilRuler({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-pencil-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-pencil-bg)" />
      <path d="M28 11l9 9-16 16-10 1 1-10Z" fill="#f5d0fe" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M28 11l9 9-3 3-9-9Z" fill="#c084fc" />
      <line x1="12" y1="36" x2="20" y2="36" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconCode({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-code-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-code-bg)" />
      <path d="M19 17l-8 7 8 7" stroke="#bae6fd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M29 17l8 7-8 7" stroke="#c7d2fe" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="27" y1="14" x2="21" y2="34" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconClipboard({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-clip-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-clip-bg)" />
      <rect x="13" y="16" width="22" height="24" rx="3" fill="#ccfbf1" stroke="#fff" strokeWidth="1.5" />
      <rect x="19" y="12" width="10" height="6" rx="3" fill="#5eead4" stroke="#fff" strokeWidth="1.5" />
      <path d="M18 27l4 4 8-8" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function IconRocket({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-rocket-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-rocket-bg)" />
      <path d="M24 11c0 0 7 6 7 15H17c0-9 7-15 7-15z" fill="#fef9c3" stroke="#fff" strokeWidth="1.5" />
      <ellipse cx="24" cy="26" rx="4" ry="4" fill="#fed7aa" />
      <path d="M17 26c-3 1-5 5-4 8h6" fill="#f97316" stroke="#fff" strokeWidth="1" />
      <path d="M31 26c3 1 5 5 4 8h-6" fill="#f97316" stroke="#fff" strokeWidth="1" />
      <path d="M20 34l1 3h6l1-3" fill="#fb923c" />
      <path d="M21 37l-1 4c1 1 3 1 4 0 1 1 3 1 4 0l-1-4" fill="#fde68a" />
    </svg>
  );
}

export function IconTrending({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-trend-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#84cc16" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-trend-bg)" />
      <path d="M11 32l9-9 6 6 11-14" stroke="#bbf7d0" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M31 15h6v6" stroke="#bbf7d0" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="10" y="34" width="28" height="2.5" rx="1.25" fill="#4ade80" />
    </svg>
  );
}

// ── Collaboration section icons ───────────────────────────────────────────────

export function IconMessages({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-msgs-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-msgs-bg)" />
      <path d="M11 13h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2l-5 5v-5h-9a2 2 0 0 1-2-2V15a2 2 0 0 1 2-2z" fill="#bfdbfe" stroke="#fff" strokeWidth="1.4" />
      <path d="M19 21h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2v4l-5-4h-9a2 2 0 0 1-2-2v-2" fill="#93c5fd" stroke="#fff" strokeWidth="1.4" />
    </svg>
  );
}

export function IconUserCheck({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-ucheck-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-ucheck-bg)" />
      <circle cx="20" cy="18" r="6" fill="#bae6fd" stroke="#fff" strokeWidth="1.5" />
      <path d="M10 36c0-6 4-10 10-10s10 4 10 10" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M31 24l3 3 5-5" stroke="#6ee7b7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function IconBell({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-bell-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-bell-bg)" />
      <path d="M24 11a9 9 0 0 1 9 9v5l3 4H12l3-4v-5a9 9 0 0 1 9-9z" fill="#fef3c7" stroke="#fff" strokeWidth="1.5" />
      <path d="M20 29a4 4 0 0 0 8 0" fill="#fbbf24" />
      <circle cx="34" cy="14" r="5" fill="#ef4444" stroke="#fff" strokeWidth="1.5" />
      <text x="34" y="18" textAnchor="middle" fontSize="7" fontWeight="800" fill="#fff">3</text>
    </svg>
  );
}

export function IconRupeeCollab({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-rupee2-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#86efac" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-rupee2-bg)" />
      <text x="24" y="34" textAnchor="middle" fontSize="26" fontWeight="800" fill="#dcfce7" fontFamily="system-ui">₹</text>
      <path d="M13 17h22M13 22h22" stroke="#dcfce7" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconLifebuoy2({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-buoy2-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#be185d" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-buoy2-bg)" />
      <circle cx="24" cy="24" r="11" stroke="#fce7f3" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="24" r="5.5" stroke="#fff" strokeWidth="2.5" fill="#fbcfe8" />
      <path d="M17.5 17.5l-4-4M30.5 17.5l4-4M17.5 30.5l-4 4M30.5 30.5l4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconPuzzleCollab({ className = "size-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ic-puzz2-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ic-puzz2-bg)" />
      <path d="M20 13h-5a2 2 0 0 0-2 2v5h2a3 3 0 0 1 0 6h-2v5a2 2 0 0 0 2 2h5v-2a3 3 0 0 1 6 0v2h5a2 2 0 0 0 2-2v-5h-2a3 3 0 0 1 0-6h2v-5a2 2 0 0 0-2-2h-5v2a3 3 0 0 1-6 0v-2z" fill="#ccfbf1" stroke="#fff" strokeWidth="1.2" />
    </svg>
  );
}

// ── Namaste / Welcome popup icon ─────────────────────────────────────────────

export function IconNamaste({ className = "size-24" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="ns-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="1" />
          <stop offset="100%" stopColor="#fed7aa" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ns-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="ns-dress" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>
      </defs>
      {/* glow */}
      <circle cx="60" cy="60" r="55" fill="url(#ns-glow)" />
      {/* head */}
      <ellipse cx="60" cy="34" rx="18" ry="20" fill="url(#ns-skin)" />
      {/* bindi */}
      <circle cx="60" cy="26" r="3" fill="#dc2626" />
      {/* eyes */}
      <ellipse cx="53" cy="33" rx="3" ry="3.5" fill="#1e1b4b" />
      <ellipse cx="67" cy="33" rx="3" ry="3.5" fill="#1e1b4b" />
      <circle cx="54" cy="32" r="1" fill="#fff" />
      <circle cx="68" cy="32" r="1" fill="#fff" />
      {/* smile */}
      <path d="M53 42 q7 6 14 0" stroke="#92400e" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* body / saree */}
      <path d="M42 54 q-4 20 0 50 h36 q4-30 0-50 Q60 46 42 54z" fill="url(#ns-dress)" />
      {/* pallu pattern */}
      <circle cx="62" cy="68" r="5" fill="#fff" opacity="0.2" />
      <circle cx="55" cy="82" r="4" fill="#fff" opacity="0.15" />
      {/* folded hands (Namaste pose) */}
      <ellipse cx="60" cy="60" rx="10" ry="6" fill="#d97706" transform="rotate(-30 60 60)" />
      <ellipse cx="60" cy="60" rx="10" ry="6" fill="#f59e0b" transform="rotate(30 60 60)" />
      {/* fingers */}
      {[0, -15, 15, -30, 30].map((angle, i) => (
        <rect key={i} x="57" y="47" width="6" height="10" rx="3" fill="#d97706" transform={`rotate(${angle} 60 60)`} />
      ))}
      {/* marigold decorations */}
      {[30, 90, 150, 210, 270, 330].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 60 105)`}>
          <circle cx="60" cy="92" r="4" fill="#f97316" opacity="0.8" />
        </g>
      ))}
    </svg>
  );
}

// ── Animated Namaste hands SVG ────────────────────────────────────────────────

export function NamasteAnimation({ className = "size-32" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-label="Namaste greeting">
      <defs>
        <radialGradient id="nm-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fffbeb" />
          <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.3" />
        </radialGradient>
        <linearGradient id="nm-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="nm-saffron" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        <linearGradient id="nm-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="1" />
          <stop offset="100%" stopColor="#fed7aa" stopOpacity="0" />
        </linearGradient>
        <filter id="nm-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#f97316" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Background glow circle */}
      <circle cx="100" cy="100" r="90" fill="url(#nm-bg)" />

      {/* Sparkle dots around */}
      <circle cx="100" cy="15" r="4" fill="#fbbf24">
        <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="50" r="3" fill="#f97316">
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.3s" />
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.3s" />
      </circle>
      <circle cx="30" cy="50" r="3" fill="#f97316">
        <animate attributeName="r" values="3;5;3" dur="1.8s" repeatCount="indefinite" begin="0.6s" />
        <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" begin="0.6s" />
      </circle>
      <circle cx="175" cy="135" r="4" fill="#fbbf24">
        <animate attributeName="r" values="4;6;4" dur="1.6s" repeatCount="indefinite" begin="0.9s" />
        <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite" begin="0.9s" />
      </circle>
      <circle cx="25" cy="135" r="4" fill="#fbbf24">
        <animate attributeName="r" values="4;6;4" dur="1.7s" repeatCount="indefinite" begin="1.2s" />
        <animate attributeName="opacity" values="1;0.4;1" dur="1.7s" repeatCount="indefinite" begin="1.2s" />
      </circle>

      {/* Person with animated bow */}
      <g filter="url(#nm-shadow)">
        <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="2s" repeatCount="indefinite" additive="sum" />

        {/* Head */}
        <ellipse cx="100" cy="52" rx="24" ry="26" fill="url(#nm-skin)" />

        {/* Hair */}
        <path d="M76 48 Q100 28 124 48 Q118 32 100 26 Q82 32 76 48Z" fill="#1e1b4b" />

        {/* Bindi */}
        <circle cx="100" cy="40" r="4" fill="#dc2626" />

        {/* Eyes */}
        <ellipse cx="91" cy="51" rx="4.5" ry="5" fill="#1e1b4b" />
        <ellipse cx="109" cy="51" rx="4.5" ry="5" fill="#1e1b4b" />
        <circle cx="92" cy="49.5" r="1.5" fill="#fff" />
        <circle cx="110" cy="49.5" r="1.5" fill="#fff" />

        {/* Smile */}
        <path d="M91 62 Q100 70 109 62" stroke="#92400e" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Earrings */}
        <circle cx="76" cy="58" r="4" fill="#fbbf24" stroke="#f97316" strokeWidth="1.5" />
        <circle cx="124" cy="58" r="4" fill="#fbbf24" stroke="#f97316" strokeWidth="1.5" />

        {/* Body / Saree */}
        <path d="M72 78 Q68 140 70 180 h60 Q132 140 128 78 Q100 70 72 78Z" fill="url(#nm-saffron)" />

        {/* Dupatta */}
        <path d="M72 78 Q60 100 65 130 Q75 110 72 78Z" fill="#fbbf24" opacity="0.7" />
        <path d="M128 78 Q140 100 135 130 Q125 110 128 78Z" fill="#fbbf24" opacity="0.7" />

        {/* Folded Namaste hands */}
        <g transform="translate(100 100)">
          <animateTransform attributeName="transform" type="rotate" values="0 100 100;3 100 100;0 100 100;-3 100 100;0 100 100" dur="2s" repeatCount="indefinite" />

          {/* Left hand */}
          <ellipse cx="90" cy="100" rx="12" ry="7" fill="#d97706" transform="rotate(-45 100 100)" />
          {/* Right hand */}
          <ellipse cx="110" cy="100" rx="12" ry="7" fill="#b45309" transform="rotate(45 100 100)" />

          {/* Fingers left */}
          {[-20, -10, 0, 10, 20].map((off, i) => (
            <ellipse key={i} cx={100 + off * 0.5} cy={82 + i * 0.5} rx="3" ry="6" fill="#d97706" transform={`rotate(${-10 + off} 100 100)`} />
          ))}
          {/* Fingers right */}
          {[-20, -10, 0, 10, 20].map((off, i) => (
            <ellipse key={i + 5} cx={100 + off * 0.5} cy={82 + i * 0.5} rx="3" ry="6" fill="#b45309" transform={`rotate(${10 + off} 100 100)`} />
          ))}
        </g>

        {/* Marigold garland */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const x = 100 + Math.cos(angle) * 55;
          const y = 160 + Math.sin(angle) * 15;
          return (
            <circle key={i} cx={x} cy={y} r={3 + (i % 3)} fill={i % 2 === 0 ? "#f97316" : "#fbbf24"} opacity="0.9" />
          );
        })}
      </g>

      {/* "नमस्ते" text ring effect */}
      <circle cx="100" cy="100" r="85" stroke="#f97316" strokeWidth="1" strokeDasharray="4 8" fill="none" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="20s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

