import { LEAD_STATUSES } from "./leads";

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Builds a safe MongoDB filter from admin list/search params.
 * Only whitelisted keys and plain strings are used (no operator injection).
 */
export function leadFilter({ q, status, source, service, followUp } = {}) {
  const filter = {};
  if (typeof status === "string" && LEAD_STATUSES.some(([k]) => k === status)) filter.status = status;
  if (source === "quote" || source === "contact") filter.source = source;
  if (typeof service === "string" && /^[a-z-]{2,40}$/.test(service)) filter.service = service;
  if (followUp === "due") filter.followUpDate = { $ne: null, $lte: new Date() };
  if (typeof q === "string" && q.trim()) {
    const rx = new RegExp(escapeRegex(q.trim().slice(0, 80)), "i");
    filter.$or = [{ ref: rx }, { name: rx }, { businessName: rx }, { email: rx }, { phone: rx }, { city: rx }, { description: rx }];
  }
  return filter;
}
