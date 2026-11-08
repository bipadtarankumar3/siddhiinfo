import Link from "next/link";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink">This page doesn’t exist</h1>
      <p className="mt-4 max-w-md text-slate-600">The link may be old or mistyped. Let’s get you back on track.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">Go to homepage</Link>
        <Link href="/services/" className="btn btn-outline">View services</Link>
      </div>
    </section>
  );
}
