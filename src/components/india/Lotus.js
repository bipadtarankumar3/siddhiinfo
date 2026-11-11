// Small lotus divider used under section titles.
export default function Lotus({ className = "" }) {
  return (
    <svg viewBox="0 0 120 20" className={`h-5 w-28 ${className}`} aria-hidden="true" focusable="false">
      <path d="M2 14h36" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
      <path d="M82 14h36" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
      <circle cx="42" cy="14" r="2" fill="#F97316" />
      <circle cx="78" cy="14" r="2" fill="#F97316" />
      <path d="M60 2c-4 4-4 9 0 13 4-4 4-9 0-13z" fill="#DB2777" />
      <path d="M60 15c-3-5-8-8-13-8 1 5 6 8 13 8z" fill="#F472B6" />
      <path d="M60 15c3-5 8-8 13-8-1 5-6 8-13 8z" fill="#F472B6" />
      <path d="M60 15c-6-1-11-1-15 2 5 1 10 1 15-2zM60 15c6-1 11-1 15 2-5 1-10 1-15-2z" fill="#14B8A6" />
    </svg>
  );
}
