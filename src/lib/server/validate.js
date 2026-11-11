// Shared server-side input cleaning / validation for enquiry forms.
export const clean = (v, max = 200) => String(v ?? "").replace(/[\r\n\t]+/g, " ").replace(/\s{2,}/g, " ").trim().slice(0, max);
export const cleanText = (v, max = 2000) => String(v ?? "").replace(/\r/g, "").trim().slice(0, max);

export function normaliseIndianMobile(value) {
  const digits = String(value ?? "").replace(/[^\d]/g, "");
  const ten = digits.replace(/^(91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(ten) ? ten : null;
}

export const isEmail = (v) => /^[^\s@]{1,64}@[^\s@]{1,190}\.[a-z]{2,24}$/i.test(String(v ?? "").trim());

export function oneOf(value, allowed) {
  return allowed.includes(value) ? value : null;
}
