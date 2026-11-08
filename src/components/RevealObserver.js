"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Adds `.is-visible` to [data-reveal] elements once they reach the viewport —
// or have already been scrolled past.
// Handles scroll, resize, language changes (siddhi_locale_change) and DOM mutations
// so that language switching never causes elements to hide or turn white.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;

    const check = () => {
      frame = 0;
      const limit = window.innerHeight * 0.95;
      const pending = document.querySelectorAll("[data-reveal]:not(.is-visible)");
      pending.forEach((el) => {
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add("is-visible");
        }
      });
    };

    const scheduleCheck = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    // Immediate check
    check();

    window.addEventListener("scroll", scheduleCheck, { passive: true });
    window.addEventListener("resize", scheduleCheck, { passive: true });
    window.addEventListener("siddhi_locale_change", check);

    // Watch for DOM changes (like language toggle re-renders)
    const observer = new MutationObserver(() => check());
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      window.removeEventListener("siddhi_locale_change", check);
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
