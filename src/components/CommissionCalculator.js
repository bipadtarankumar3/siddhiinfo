"use client";

import { useId, useState } from "react";

/*
  Marketplace commission estimator.
  Shows what a given commission rate would cost on a given sales figure.
  It is NOT a savings promise: direct orders replace marketplace orders only
  partly, and running your own channel has its own costs (listed below).
*/
const fmt = (n) => `₹${Math.round(n).toLocaleString("en-IN")}`;

export default function CommissionCalculator() {
  const [sales, setSales] = useState(60000);
  const [rate, setRate] = useState(20);
  const [share, setShare] = useState(30);
  const id = useId();

  const commission = (sales * rate) / 100;
  const directSales = (sales * share) / 100;
  const avoided = (directSales * rate) / 100;

  return (
    <div className="card p-6 sm:p-8">
      <h3 className="text-xl font-extrabold text-ink">Marketplace commission estimator</h3>
      <p className="mt-1 text-slate-600">
        Enter your own figures. Commission rates vary by platform, category and agreement — check your latest marketplace invoice.
      </p>

      <div className="mt-6 space-y-6">
        <Slider id={`${id}-sales`} label="Monthly sales through marketplaces / delivery apps" value={sales} display={`${fmt(sales)} / month`} min={10000} max={500000} step={5000} onChange={setSales} />
        <Slider id={`${id}-rate`} label="Commission + platform fees you pay (assumed)" value={rate} display={`${rate}%`} min={5} max={35} step={1} onChange={setRate} />
        <Slider id={`${id}-share`} label="Share of those orders you might move to direct ordering (assumed)" value={share} display={`${share}%`} min={0} max={100} step={5} onChange={setShare} />
      </div>

      <dl className="mt-6 grid gap-3 sm:grid-cols-2" aria-live="polite">
        <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
          <dt className="text-sm text-slate-600">Estimated commission at {rate}%</dt>
          <dd className="text-2xl font-black text-ink">{fmt(commission)} <span className="text-sm font-medium text-slate-500">/ month</span></dd>
        </div>
        <div className="rounded-2xl bg-mint-50 p-4 ring-1 ring-mint-200">
          <dt className="text-sm text-slate-700">Commission not paid on {share}% moved to direct orders</dt>
          <dd className="text-2xl font-black text-mint-700">{fmt(avoided)} <span className="text-sm font-medium text-slate-500">/ month, before costs below</span></dd>
        </div>
      </dl>

      <div className="mt-6 rounded-2xl bg-amber-50 p-4 text-sm leading-relaxed text-amber-950 ring-1 ring-amber-200">
        <p className="font-bold">This is an estimate, not a promise of savings.</p>
        <p className="mt-1">It does not include costs you may have on direct orders:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Payment gateway fees (if you use a gateway rather than direct UPI)</li>
          <li>Delivery, packaging and your staff&apos;s time</li>
          <li>Marketing to bring customers to your own channel</li>
          <li>Our package price and any yearly renewals</li>
        </ul>
        <p className="mt-2">Marketplaces also bring you new customers. Most businesses use direct ordering alongside them, not instead of them.</p>
      </div>
    </div>
  );
}

function Slider({ id, label, value, display, min, max, step, onChange }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <label htmlFor={id} className="font-semibold text-ink">{label}</label>
        <output htmlFor={id} className="font-bold text-brand-700">{display}</output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-11 w-full cursor-pointer accent-brand-600"
      />
    </div>
  );
}
