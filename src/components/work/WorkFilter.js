"use client";

import { useEffect, useRef, useState } from "react";

/*
  Filter bar for the work page. Cards are rendered on the server; this only
  shows/hides them by their data-tags, so the page stays fast and every project
  is in the HTML for search engines. Remembers the filter in the URL (?filter=).
*/
export default function WorkFilter({ filters, children }) {
  const [active, setActive] = useState("all");
  const [count, setCount] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const f = new URLSearchParams(window.location.search).get("filter");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read the initial filter from the URL after hydration
    if (f && filters.some(([k]) => k === f)) setActive(f);
  }, [filters]);

  useEffect(() => {
    const items = [...(gridRef.current?.children ?? [])];
    let shown = 0;
    items.forEach((el) => {
      const tags = (el.dataset.tags || "").split(" ");
      const show = active === "all" || tags.includes(active);
      el.hidden = !show;
      if (show) shown++;
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect -- count of visible server-rendered cards
    setCount(shown);
    const url = new URL(window.location.href);
    if (active === "all") url.searchParams.delete("filter");
    else url.searchParams.set("filter", active);
    window.history.replaceState(null, "", url);
  }, [active]);

  return (
    <>
      <div role="toolbar" aria-label="Filter projects" className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
        {filters.map(([k, label]) => (
          <button
            key={k}
            type="button"
            aria-pressed={active === k}
            onClick={() => setActive(k)}
            className={`min-h-11 shrink-0 whitespace-nowrap rounded-full px-4 text-sm font-semibold ring-1 transition ${
              active === k ? "bg-ink text-white ring-ink" : "bg-white text-slate-700 ring-slate-300 hover:ring-brand-400"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-center text-sm text-slate-600" aria-live="polite">
        {count !== null && `${count} project${count === 1 ? "" : "s"}`}
      </p>
      <div ref={gridRef} className="mt-8 grid gap-8 lg:grid-cols-2">
        {children}
      </div>
    </>
  );
}
