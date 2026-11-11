"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={async () => {
        await fetch("/api/admin/logout/", { method: "POST" });
        router.replace("/admin/login/");
        router.refresh();
      }}
      className="rounded-lg px-3 py-2 font-semibold text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50"
    >
      Sign out
    </button>
  );
}
