import Link from "next/link";
import { notFound } from "next/navigation";
import { ObjectId } from "mongodb";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { getDb } from "@/lib/server/mongodb";
import { getAdmin, can } from "@/lib/server/auth";
import { LEAD_STATUSES, QUOTATION_STATUSES, statusLabel } from "@/lib/server/leads";
import { customerTypes, quoteServices } from "@/lib/quoteOptions";
import LeadEditor from "@/components/admin/LeadEditor";

const fmt = (d) => (d ? new Date(d).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" }) : "—");

export default async function LeadDetail({ params }) {
  const { id } = await params;
  if (!ObjectId.isValid(id)) notFound();
  const user = await getAdmin();
  const db = await getDb();
  const l = await db.collection("leads").findOne({ _id: new ObjectId(id) });
  if (!l) notFound();

  const details = [
    ["Reference", l.ref],
    ["Received", fmt(l.createdAt)],
    ["Source", l.source === "quote" ? "Get a Quote form" : "Contact form"],
    ["Customer type", customerTypes.find((c) => c.id === l.customerType)?.label],
    ["Service", quoteServices.find((s) => s.id === l.service)?.label || l.serviceLabel],
    ["Budget", l.budget],
    ["Business", l.businessName],
    ["City / State", [l.city, l.state].filter(Boolean).join(", ")],
    ["Preferred contact", l.preferredContact],
    ["Last updated", `${fmt(l.updatedAt)}${l.updatedBy ? ` by ${l.updatedBy}` : ""}`],
  ].filter(([, v]) => v);

  return (
    <div className="space-y-6">
      <Link href="/admin/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline">
        <ArrowLeft className="size-4" aria-hidden="true" /> All enquiries
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-sm font-semibold text-slate-500">{l.ref}</p>
          <h1 className="text-2xl font-extrabold text-ink">{l.name}</h1>
          <p className="text-slate-600">{statusLabel[l.status] || l.status}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {l.phone && (
            <>
              <a href={`tel:+91${l.phone}`} className="btn btn-outline !py-2 text-sm"><Phone className="size-4" aria-hidden="true" /> +91 {l.phone}</a>
              <a href={`https://wa.me/91${l.phone}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp !py-2 text-sm">WhatsApp</a>
            </>
          )}
          {l.email && <a href={`mailto:${l.email}`} className="btn btn-outline !py-2 text-sm"><Mail className="size-4" aria-hidden="true" /> {l.email}</a>}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <section className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
            <h2 className="font-bold text-ink">Project description</h2>
            <p className="mt-2 whitespace-pre-wrap text-slate-700">{l.description || "—"}</p>
          </section>
          <section className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
            <h2 className="font-bold text-ink">Details</h2>
            <dl className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[auto_1fr]">
              {details.map(([k, v]) => (
                <div key={k} className="contents">
                  <dt className="text-slate-500">{k}</dt>
                  <dd className="font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
            <h2 className="font-bold text-ink">Internal notes</h2>
            {(l.notes || []).length === 0 ? (
              <p className="mt-2 text-sm text-slate-500">No notes yet.</p>
            ) : (
              <ol className="mt-3 space-y-3">
                {[...l.notes].reverse().map((n, i) => (
                  <li key={i} className="rounded-xl bg-slate-50 p-3 text-sm ring-1 ring-slate-200">
                    <p className="whitespace-pre-wrap text-slate-800">{n.text}</p>
                    <p className="mt-1 text-xs text-slate-500">{n.by} · {fmt(n.at)}</p>
                  </li>
                ))}
              </ol>
            )}
          </section>
        </div>

        <LeadEditor
          id={String(l._id)}
          canEdit={can(user, "leads:write")}
          initial={{
            status: l.status,
            quotationStatus: l.quotationStatus || "not_started",
            followUpDate: l.followUpDate ? new Date(l.followUpDate).toISOString().slice(0, 10) : "",
          }}
          statuses={LEAD_STATUSES}
          quotationStatuses={QUOTATION_STATUSES}
        />
      </div>
    </div>
  );
}
