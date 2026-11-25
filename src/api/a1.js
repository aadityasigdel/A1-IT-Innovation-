// A1 IT Innovation backend (package com.userservice.a1 inside the GigFine User-Service).
// Override with VITE_A1_API in .env for local testing, e.g. http://localhost:8081/api/v1/a1
export const A1_API = (import.meta.env.VITE_A1_API || "https://api.gigfine.com/api/v1/a1").replace(/\/$/, "");

const ADMIN_KEY = "a1AdminKey";

export const getAdminKey = () => sessionStorage.getItem(ADMIN_KEY) || "";
export const setAdminKey = (key) => sessionStorage.setItem(ADMIN_KEY, key);
export const clearAdminKey = () => sessionStorage.removeItem(ADMIN_KEY);

async function errorMessage(res) {
  try {
    const body = await res.json();
    return body.message || `Request failed (${res.status})`;
  } catch {
    return `Request failed (${res.status})`;
  }
}

async function request(path, { method = "GET", json, form, admin = false, blob = false } = {}) {
  const headers = {};
  if (admin) headers["X-A1-Admin-Key"] = getAdminKey();
  let body;
  if (json !== undefined) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(json);
  } else if (form) {
    body = form;
  }
  const res = await fetch(`${A1_API}${path}`, { method, headers, body });
  if (!res.ok) {
    const err = new Error(await errorMessage(res));
    err.status = res.status;
    throw err;
  }
  if (blob) return res.blob();
  if (res.status === 204) return null;
  return res.json();
}

// ── Public ──
export const applyInternship = (formData) => request("/internships", { method: "POST", form: formData });
export const downloadCertificate = (email, code) =>
  request("/certificates/download", { method: "POST", json: { email, code }, blob: true });
export const verifyCertificate = (no) => request(`/certificates/${encodeURIComponent(no.trim())}`);

// ── Admin (X-A1-Admin-Key) ──
export const adminCheck = () => request("/admin/check", { admin: true });
export const adminList = (status, q) => {
  const p = new URLSearchParams();
  if (status) p.set("status", status);
  if (q) p.set("q", q);
  return request(`/admin/internships?${p}`, { admin: true });
};
export const adminSetStatus = (id, body) =>
  request(`/admin/internships/${id}/status`, { method: "PUT", json: body, admin: true });
export const adminNewCode = (id) => request(`/admin/internships/${id}/new-code`, { method: "POST", admin: true });
export const adminResendAck = (id) => request(`/admin/internships/${id}/resend-ack`, { method: "POST", admin: true });
export const adminDelete = (id) => request(`/admin/internships/${id}`, { method: "DELETE", admin: true });
export const adminCv = (id) => request(`/admin/internships/${id}/cv`, { admin: true, blob: true });
export const adminSendAgreements = (id, agreementIds, message) =>
  request(`/admin/internships/${id}/agreements`, { method: "POST", json: { agreementIds, message }, admin: true });
export const adminAgreements = () => request("/admin/agreements", { admin: true });
export const adminAddAgreement = (formData) =>
  request("/admin/agreements", { method: "POST", form: formData, admin: true });
export const adminAgreementFile = (id) => request(`/admin/agreements/${id}/file`, { admin: true, blob: true });
export const adminDeleteAgreement = (id) => request(`/admin/agreements/${id}`, { method: "DELETE", admin: true });

// Opens a downloaded blob in a new tab (PDF) or saves it
export function openBlob(blob, fileName, download = false) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  if (download || blob.type !== "application/pdf") a.download = fileName;
  else a.target = "_blank";
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
}
