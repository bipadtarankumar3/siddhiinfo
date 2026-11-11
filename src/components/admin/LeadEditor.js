"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

// Status / quotation / follow-up editor + "add note" for one lead.
export default function LeadEditor({ id, canEdit, initial, statuses, quotationStatuses }) {
  const router = useRouter();
  const [form, setForm] = useState({ ...initial, note: "" });
  const [state, setState] = useState({ busy: false, msg: "", error: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function save(e) {
    e.preventDefault();
    setState({ busy: true, msg: "", error: "" });
    try {
      const res = await fetch(`/api/admin/leads/${id}/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Could not save.");
      setForm((f) => ({ ...f, note: "" }));
      setState({ busy: false, msg: "Saved.", error: "" });
      router.refresh();
    } catch (err) {
      setState({ busy: false, msg: "", error: err.message });
    }
  }

  return (
    <form onSubmit={save} className="h-fit space-y-4 rounded-2xl bg-white p-6 ring-1 ring-slate-200 lg:sticky lg:top-6">
      <h2 className="font-bold text-ink">Manage lead</h2>
      {!canEdit && <p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-900 ring-1 ring-amber-200">Your role is read-only.</p>}
      <fieldset disabled={!canEdit || state.busy} className="space-y-4">
        <div>
          <label htmlFor="status" className="label">Lead status</label>
          <select id="status" className="input min-h-11" value={form.status} onChange={set("status")}>
            {statuses.map(([k, l]) => <option key={k} value={k}>{l}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="quotationStatus" className="label">Quotation</label>
          <select id="quotationStatus" className="input min-h-11" value={form.quotationStatus} onChange={set("quotationStatus")}>
            {quotationStatuses.map(([k, l]) => <option key={k} value={k}>{l}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="followUpDate" className="label">Follow-up date</label>
          <input id="followUpDate" type="date" className="input min-h-11" value={form.followUpDate} onChange={set("followUpDate")} />
        </div>
        <div>
          <label htmlFor="note" className="label">Add internal note</label>
          <textarea id="note" rows={3} maxLength={2000} className="input" value={form.note} onChange={set("note")} placeholder="Called, discussed budget, sending quote on Monday…" />
        </div>
        <button type="submit" className="btn btn-primary w-full disabled:opacity-70">
          {state.busy && <Loader2 className="size-4 animate-spin" aria-hidden="true" />} Save changes
        </button>
      </fieldset>
      <p role="status" className="text-sm">
        {state.msg && <span className="text-green-700">{state.msg}</span>}
        {state.error && <span className="text-rose-700">{state.error}</span>}
      </p>
    </form>
  );
}
