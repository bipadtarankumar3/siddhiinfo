import crypto from "node:crypto";
import { getDb } from "./mongodb";

export const LEAD_STATUSES = [
  ["new", "New"],
  ["contacted", "Contacted"],
  ["requirement_discussion", "Requirement Discussion"],
  ["quotation_sent", "Quotation Sent"],
  ["negotiation", "Negotiation"],
  ["won", "Won"],
  ["lost", "Lost"],
];
export const QUOTATION_STATUSES = [
  ["not_started", "Not started"],
  ["preparing", "Preparing"],
  ["sent", "Sent"],
  ["accepted", "Accepted"],
  ["rejected", "Rejected"],
];
export const statusLabel = Object.fromEntries(LEAD_STATUSES);
export const quotationLabel = Object.fromEntries(QUOTATION_STATUSES);

// Human-friendly reference: SI-YYMMDD-XXXX (no 0/O/1/I)
export function newRef(date = new Date()) {
  const A = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  const ymd = date.toISOString().slice(2, 10).replace(/-/g, "");
  const tail = Array.from({ length: 4 }, () => A[crypto.randomInt(A.length)]).join("");
  return `SI-${ymd}-${tail}`;
}

export async function saveLead(lead) {
  const db = await getDb();
  const now = new Date();
  for (let attempt = 0; attempt < 3; attempt++) {
    const doc = {
      ref: lead.ref || newRef(now),
      ...lead,
      status: "new",
      quotationStatus: "not_started",
      followUpDate: null,
      notes: [],
      createdAt: now,
      updatedAt: now,
    };
    try {
      await db.collection("leads").insertOne(doc);
      return doc.ref;
    } catch (e) {
      if (e?.code === 11000 && !lead.ref) continue; // ref collision → retry
      throw e;
    }
  }
  throw new Error("Could not allocate a reference ID");
}
