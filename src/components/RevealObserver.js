"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Adds `.is-visible` to [data-reveal] elements once they reach the viewport —
// or have already been scrolled past (fast flicks, #anchor jumps, find-in-page).
// CSS only hides these elements when <html> has the `js` class (set inline in
// the layout), so content is always visible without JavaScript.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let pending = [...document.querySelectorAll("[data-reveal]:not(.is-visible)")];
    let frame = 0;

    const check = () => {
      frame = 0;
      const limit = window.innerHeight * 0.92;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add("is-visible");
          return false;
        }
        return true;
      });
      if (!pending.length) stop();
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    const stop = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    check();
    return () => {
      stop();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
