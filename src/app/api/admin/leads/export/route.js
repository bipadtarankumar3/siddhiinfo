import { getDb } from "@/lib/server/mongodb";
import { getAdmin, can } from "@/lib/server/auth";
import { leadFilter } from "@/lib/server/leadQuery";
import { statusLabel, quotationLabel } from "@/lib/server/leads";

export const runtime = "nodejs";

// CSV-safe cell: quote everything and neutralise spreadsheet formulas (CSV injection).
function cell(v) {
  let s = v === null || v === undefined ? "" : String(v);
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return `"${s.replace(/"/g, '""')}"`;
}

export async function GET(request) {
  const user = await getAdmin();
  if (!user) return Response.json({ ok: false, error: "Please sign in." }, { status: 401 });
  if (!can(user, "leads:export")) return Response.json({ ok: false, error: "Only admins can export." }, { status: 403 });

  const params = Object.fromEntries(new URL(request.url).searchParams);
  const db = await getDb();
  const leads = await db.collection("leads").find(leadFilter(params)).sort({ createdAt: -1 }).limit(10000).toArray();

  const cols = [
    ["Reference", (l) => l.ref],
    ["Created", (l) => l.createdAt?.toISOString()],
    ["Source", (l) => l.source],
    ["Status", (l) => statusLabel[l.status] || l.status],
    ["Quotation", (l) => quotationLabel[l.quotationStatus] || l.quotationStatus],
    ["Follow-up", (l) => l.followUpDate?.toISOString().slice(0, 10)],
    ["Name", (l) => l.name],
    ["Business", (l) => l.businessName],
    ["Mobile", (l) => (l.phone ? `+91 ${l.phone}` : "")],
    ["Email", (l) => l.email],
    ["City", (l) => l.city],
    ["State", (l) => l.state],
    ["Customer type", (l) => l.customerType],
    ["Service", (l) => l.service || l.serviceLabel],
    ["Budget", (l) => l.budget],
    ["Preferred contact", (l) => l.preferredContact],
    ["Description", (l) => l.description],
    ["Notes", (l) => (l.notes || []).map((n) => `[${n.at?.toISOString?.().slice(0, 10)} ${n.by}] ${n.text}`).join(" | ")],
  ];
  const csv = [cols.map(([h]) => cell(h)).join(","), ...leads.map((l) => cols.map(([, f]) => cell(f(l))).join(","))].join("\r\n");
  const date = new Date().toISOString().slice(0, 10);
  return new Response("﻿" + csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="siddhiinfo-leads-${date}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
