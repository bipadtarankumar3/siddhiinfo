import Link from "next/link";
import Network from "@/components/Network";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="bg-hero relative -mt-18 overflow-hidden pt-18 text-white">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Network uid="nf-net" className="pointer-events-none absolute -right-20 bottom-0 w-[40rem] opacity-40" />
      <div className="container-x relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-gradient-light text-7xl font-extrabold tracking-tight sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">This page doesn’t exist</h1>
        <p className="mt-4 max-w-md text-slate-300">The link may be old or mistyped. Let’s get you back on track.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-light">Go to homepage</Link>
          <Link href="/services/" className="btn btn-glass">View services</Link>
        </div>
      </div>
    </section>
  );
}
