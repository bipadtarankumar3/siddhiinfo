import { ObjectId } from "mongodb";
import { getDb } from "@/lib/server/mongodb";
import { getAdmin, can, sameOrigin } from "@/lib/server/auth";
import { LEAD_STATUSES, QUOTATION_STATUSES } from "@/lib/server/leads";

export const runtime = "nodejs";

const err = (error, status) => Response.json({ ok: false, error }, { status });

// Update a lead: status, quotation status, follow-up date, and/or add an internal note.
export async function PATCH(request, { params }) {
  if (!sameOrigin(request)) return err("Forbidden.", 403);
  const user = await getAdmin();
  if (!user) return err("Please sign in.", 401);
  if (!can(user, "leads:write")) return err("Your role can't edit leads.", 403);

  const { id } = await params;
  if (!ObjectId.isValid(id)) return err("Not found.", 404);

  let body;
  try {
    body = await request.json();
  } catch {
    return err("Invalid request.", 400);
  }

  const set = { updatedAt: new Date(), updatedBy: user.email };
  if (body.status !== undefined) {
    if (!LEAD_STATUSES.some(([k]) => k === body.status)) return err("Invalid status.", 400);
    set.status = body.status;
  }
  if (body.quotationStatus !== undefined) {
    if (!QUOTATION_STATUSES.some(([k]) => k === body.quotationStatus)) return err("Invalid quotation status.", 400);
    set.quotationStatus = body.quotationStatus;
  }
  if (body.followUpDate !== undefined) {
    if (body.followUpDate === "" || body.followUpDate === null) set.followUpDate = null;
    else {
      const d = new Date(`${body.followUpDate}T00:00:00.000Z`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(body.followUpDate) || Number.isNaN(d.getTime())) return err("Invalid date.", 400);
      set.followUpDate = d;
    }
  }

  const update = { $set: set };
  const note = String(body.note ?? "").trim().slice(0, 2000);
  if (note) update.$push = { notes: { text: note, by: user.email, at: new Date() } };

  const db = await getDb();
  const res = await db.collection("leads").findOneAndUpdate({ _id: new ObjectId(id) }, update, { returnDocument: "after" });
  if (!res) return err("Not found.", 404);
  return Response.json({ ok: true });
}
