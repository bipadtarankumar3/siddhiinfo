import { redirect } from "next/navigation";
import Logo from "@/components/Logo";
import LoginForm from "@/components/admin/LoginForm";
import { getAdmin } from "@/lib/server/auth";

export const metadata = { title: "Admin sign in", robots: { index: false, follow: false } };

export default async function AdminLogin() {
  if (await getAdmin()) redirect("/admin/");
  return (
    <section className="grid min-h-svh place-items-center bg-slate-100 px-4 py-12">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
        <Logo />
        <h1 className="mt-6 text-2xl font-extrabold text-ink">Lead dashboard</h1>
        <p className="mt-1 text-sm text-slate-600">Sign in with your admin account.</p>
        <LoginForm />
      </div>
    </section>
  );
}
