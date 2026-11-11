import Link from "next/link";
import { Download, Search } from "lucide-react";
import { getDb } from "@/lib/server/mongodb";
import { getAdmin, can } from "@/lib/server/auth";
import { leadFilter } from "@/lib/server/leadQuery";
import { LEAD_STATUSES, statusLabel } from "@/lib/server/leads";
import { quoteServices } from "@/lib/quoteOptions";

const PAGE_SIZE = 25;

const statusTone = {
  new: "bg-sky-100 text-sky-900",
  contacted: "bg-indigo-100 text-indigo-900",
  requirement_discussion: "bg-violet-100 text-violet-900",
  quotation_sent: "bg-amber-100 text-amber-900",
  negotiation: "bg-orange-100 text-orange-900",
  won: "bg-green-100 text-green-900",
  lost: "bg-slate-200 text-slate-700",
};

const fmtDate = (d) => (d ? new Date(d).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", timeZone: "Asia/Kolkata" }) : "—");

export default async function LeadsPage({ searchParams }) {
  const params = await searchParams;
  const user = await getAdmin();
  const page = Math.max(1, Number.parseInt(params.page, 10) || 1);
  const filter = leadFilter(params);

  const db = await getDb();
  const leads = db.collection("leads");
  const [rows, total, counts] = await Promise.all([
    leads.find(filter).sort({ createdAt: -1 }).skip((page - 1) * PAGE_SIZE).limit(PAGE_SIZE).toArray(),
    leads.countDocuments(filter),
    leads.aggregate([{ $group: { _id: "$status", n: { $sum: 1 } } }]).toArray(),
  ]);
  const countBy = Object.fromEntries(counts.map((c) => [c._id, c.n]));
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const qs = (extra) => {
    const p = new URLSearchParams({ ...Object.fromEntries(Object.entries(params).filter(([, v]) => v)), ...extra });
    return `?${p.toString()}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-ink">Enquiries</h1>
          <p className="text-sm text-slate-600">{total} matching · newest first</p>
        </div>
        {can(user, "leads:export") && (
          <a href={`/api/admin/leads/export/${qs({})}`} className="btn btn-outline !py-2 text-sm">
            <Download className="size-4" aria-hidden="true" /> Export CSV
          </a>
        )}
      </div>

      {/* status summary */}
      <ul className="flex flex-wrap gap-2 text-sm">
        <li><Link href="/admin/" className={`inline-flex rounded-full px-3 py-1.5 font-semibold ring-1 ring-slate-300 ${!params.status ? "bg-ink text-white" : "bg-white text-slate-700"}`}>All</Link></li>
        {LEAD_STATUSES.map(([k, label]) => (
          <li key={k}>
            <Link href={`/admin/${qs({ status: k, page: "1" })}`} className={`inline-flex gap-1.5 rounded-full px-3 py-1.5 font-semibold ring-1 ring-slate-300 ${params.status === k ? "bg-ink text-white" : "bg-white text-slate-700"}`}>
              {label} <span className="opacity-70">{countBy[k] || 0}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* search + filters (plain GET form, works without JS) */}
      <form className="grid gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-200 md:grid-cols-[1fr_auto_auto_auto_auto]">
        <label className="relative">
          <span className="sr-only">Search</span>
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input name="q" defaultValue={params.q || ""} placeholder="Search name, business, phone, email, city, reference…" className="input min-h-11 pl-9" />
        </label>
        {params.status && <input type="hidden" name="status" value={params.status} />}
        <select name="service" defaultValue={params.service || ""} className="input min-h-11" aria-label="Service">
          <option value="">All services</option>
          {quoteServices.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
        </select>
        <select name="source" defaultValue={params.source || ""} className="input min-h-11" aria-label="Source">
          <option value="">All sources</option>
          <option value="quote">Get a Quote</option>
          <option value="contact">Contact form</option>
        </select>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <input type="checkbox" name="followUp" value="due" defaultChecked={params.followUp === "due"} className="size-4" /> Follow-up due
        </label>
        <button className="btn btn-primary !py-2 text-sm">Apply</button>
      </form>

      <div className="overflow-x-auto rounded-2xl bg-white ring-1 ring-slate-200">
        <table className="w-full min-w-[56rem] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th scope="col" className="p-3">Received</th>
              <th scope="col" className="p-3">Reference</th>
              <th scope="col" className="p-3">Customer</th>
              <th scope="col" className="p-3">Service</th>
              <th scope="col" className="p-3">Budget</th>
              <th scope="col" className="p-3">Source</th>
              <th scope="col" className="p-3">Follow-up</th>
              <th scope="col" className="p-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.length === 0 && (
              <tr><td colSpan={8} className="p-8 text-center text-slate-500">No enquiries match these filters.</td></tr>
            )}
            {rows.map((l) => (
              <tr key={String(l._id)} className="hover:bg-slate-50">
                <td className="p-3 text-slate-600">{fmtDate(l.createdAt)}</td>
                <td className="p-3"><Link href={`/admin/leads/${l._id}/`} className="font-mono font-semibold text-brand-700 hover:underline">{l.ref}</Link></td>
                <td className="p-3">
                  <span className="block font-semibold text-ink">{l.name}</span>
                  <span className="block text-xs text-slate-500">{[l.businessName, l.city].filter(Boolean).join(" · ")}</span>
                </td>
                <td className="p-3 text-slate-700">{quoteServices.find((s) => s.id === l.service)?.label || l.serviceLabel || "—"}</td>
                <td className="p-3 text-slate-700">{l.budget || "—"}</td>
                <td className="p-3 capitalize text-slate-700">{l.source}</td>
                <td className={`p-3 ${l.followUpDate && new Date(l.followUpDate) <= new Date() ? "font-semibold text-rose-700" : "text-slate-600"}`}>{fmtDate(l.followUpDate)}</td>
                <td className="p-3"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${statusTone[l.status] || ""}`}>{statusLabel[l.status] || l.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pages > 1 && (
        <nav aria-label="Pages" className="flex items-center justify-between text-sm">
          <span className="text-slate-600">Page {page} of {pages}</span>
          <span className="flex gap-2">
            {page > 1 && <Link href={`/admin/${qs({ page: String(page - 1) })}`} className="btn btn-outline !py-2">Previous</Link>}
            {page < pages && <Link href={`/admin/${qs({ page: String(page + 1) })}`} className="btn btn-outline !py-2">Next</Link>}
          </span>
        </nav>
      )}
    </div>
  );
}
