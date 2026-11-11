import Link from "next/link";
import { redirect } from "next/navigation";
import Logo from "@/components/Logo";
import LogoutButton from "@/components/admin/LogoutButton";
import { getAdmin } from "@/lib/server/auth";

export const metadata = { title: "Lead dashboard", robots: { index: false, follow: false } };

// Every admin page below this layout requires a signed-in admin user.
export default async function AdminLayout({ children }) {
  const user = await getAdmin();
  if (!user) redirect("/admin/login/");
  return (
    <div className="min-h-svh bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-4">
            <Link href="/admin/" aria-label="Dashboard home"><Logo /></Link>
            <span className="hidden rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-800 sm:inline">Lead dashboard</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-slate-600">
              {user.name || user.email} · <span className="font-semibold capitalize text-ink">{user.role}</span>
            </span>
            <Link href="/" className="font-semibold text-brand-700 hover:underline">View site</Link>
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
    </div>
  );
}
