export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="size-9" aria-hidden="true">
        <defs>
          <linearGradient id="lg-siddhi" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4f46e5" />
            <stop offset="1" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="url(#lg-siddhi)" />
        <path
          d="M21 11.2c-1.1-1.2-2.8-1.9-4.8-1.9-3 0-5 1.6-5 3.9 0 2.4 2 3.2 4.6 3.8 2.1.5 2.9.9 2.9 1.9 0 1-1 1.7-2.6 1.7-1.7 0-3.1-.7-4.1-1.9"
          fill="none"
          stroke="#fff"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <circle cx="22.5" cy="22" r="1.8" fill="#fff" />
      </svg>
      <span className={`text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        Siddhi<span className="text-brand-600">Info</span>
      </span>
    </span>
  );
}
