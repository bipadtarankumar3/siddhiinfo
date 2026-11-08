"use client";

// Opens a server-rendered <dialog> by id. Closing works without JS via <form method="dialog">.
export default function DialogButton({ target, children, className = "" }) {
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-controls={target}
      className={className}
      onClick={(e) => {
        const d = document.getElementById(target);
        if (!d?.showModal) return;
        // Copy previews from the card that owns this button into empty dialog slots
        const card = e.currentTarget.closest("article");
        d.querySelectorAll("[data-slot]:empty").forEach((slot) => {
          const src = card?.querySelector(`[data-mock="${slot.dataset.slot}"]`);
          if (src) {
            const copy = src.cloneNode(true);
            if (slot.dataset.slot === "desktop") copy.removeAttribute("class"); // drop hover/transition wrapper styles
            slot.append(copy);
          }
        });
        d.showModal();
        const close = (e) => {
          if (e.target === d) d.close(); // click on backdrop
        };
        d.addEventListener("click", close);
        d.addEventListener("close", () => d.removeEventListener("click", close), { once: true });
      }}
    >
      {children}
    </button>
  );
}
