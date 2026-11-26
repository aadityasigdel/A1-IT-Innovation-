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

// Intern portal session (from the email code). localStorage: stays logged in for 30 days.
const SESSION_KEY = "a1PortalSession";
export const getSession = () => localStorage.getItem(SESSION_KEY) || "";
export const setSession = (token) => localStorage.setItem(SESSION_KEY, token);
export const clearSession = () => localStorage.removeItem(SESSION_KEY);

async function request(path, { method = "GET", json, form, admin = false, session = false, blob = false } = {}) {
  const headers = {};
  if (admin) headers["X-A1-Admin-Key"] = getAdminKey();
  if (session) headers["X-A1-Session"] = getSession();
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
// XHR (not fetch) so the form can show the CV upload progress. 60 s timeout: a student is never left waiting.
export function applyInternship(formData, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${A1_API}/internships`);
    xhr.timeout = 60_000;
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable && onProgress) onProgress(Math.round((e.loaded / e.total) * 100));
    };
    xhr.onload = () => {
      let body = null;
      try { body = JSON.parse(xhr.responseText); } catch { /* not JSON */ }
      if (xhr.status >= 200 && xhr.status < 300) return resolve(body);
      const err = new Error(body?.message || `Request failed (${xhr.status})`);
      err.status = xhr.status;
      reject(err);
    };
    const fail = (msg) => () => { const err = new Error(msg); err.status = 0; reject(err); };
    xhr.onerror = fail("Network error");
    xhr.ontimeout = fail("Timed out");
    xhr.send(formData);
  });
}
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

// ── Student's tracking page (secret token from the mail link) ──
export const trackGet = (token) => request(`/track/${encodeURIComponent(token)}`);
export const trackAgreementFile = (token, agreementId) =>
  request(`/track/${encodeURIComponent(token)}/agreements/${agreementId}`, { blob: true });
export const trackUpload = (token, formData) =>
  request(`/track/${encodeURIComponent(token)}/documents`, { method: "POST", form: formData });
export const trackCertificate = (token) => request(`/track/${encodeURIComponent(token)}/certificate`, { blob: true });

// ── Admin onboarding ──
export const adminRequestAgreement = (id, agreementIds, message, sendMail) =>
  request(`/admin/internships/${id}/agreement-request`, {
    method: "POST", json: { agreementIds, message, sendMail }, admin: true,
  });
export const adminReturnDocs = (id, note) =>
  request(`/admin/internships/${id}/documents/return`, { method: "POST", json: { note }, admin: true });
export const adminDocument = (id, kind) => request(`/admin/internships/${id}/documents/${kind}`, { admin: true, blob: true });

// WhatsApp click-to-chat: Nepali mobile 98XXXXXXXX → 97798XXXXXXXX
export function whatsappUrl(phone, text) {
  let digits = (phone || "").replace(/\D/g, "");
  if (digits.length === 10 && digits.startsWith("9")) digits = `977${digits}`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

// ── Intern portal (X-A1-Session) ──
export const portalRequestCode = (email) => request("/portal/login/request", { method: "POST", json: { email } });
export const portalVerify = (email, code) => request("/portal/login/verify", { method: "POST", json: { email, code } });
export const portalLogout = () => request("/portal/logout", { method: "POST", session: true });
export const portalMe = () => request("/portal/me", { session: true });
export const portalTasks = () => request("/portal/tasks", { session: true });
export const portalTask = (id) => request(`/portal/tasks/${id}`, { session: true });
export const portalSubmit = (id, formData) =>
  request(`/portal/tasks/${id}/submit`, { method: "POST", form: formData, session: true });
export const portalComment = (id, text) =>
  request(`/portal/tasks/${id}/comments`, { method: "POST", json: { text }, session: true });
export const portalTaskFile = (id) => request(`/portal/tasks/${id}/task-file`, { session: true, blob: true });
export const portalSubmissionFile = (id) => request(`/portal/tasks/${id}/submission-file`, { session: true, blob: true });

// ── Admin tasks ──
export const adminTasks = () => request("/admin/tasks", { admin: true });
export const adminCreateTask = (formData) => request("/admin/tasks", { method: "POST", form: formData, admin: true });
export const adminDeleteTask = (id) => request(`/admin/tasks/${id}`, { method: "DELETE", admin: true });
export const adminAssignTask = (id, internshipIds, sendMail = true) =>
  request(`/admin/tasks/${id}/assign`, { method: "POST", json: { internshipIds, sendMail }, admin: true });
export const adminTaskAssignments = (id) => request(`/admin/tasks/${id}/assignments`, { admin: true });
export const adminTaskFile = (id) => request(`/admin/tasks/${id}/file`, { admin: true, blob: true });
export const adminQueue = (status = "SUBMITTED") => request(`/admin/assignments?status=${status}`, { admin: true });
export const adminReview = (id, status, note) =>
  request(`/admin/assignments/${id}/review`, { method: "PUT", json: { status, note }, admin: true });
export const adminTaskComment = (id, text) =>
  request(`/admin/assignments/${id}/comments`, { method: "POST", json: { text }, admin: true });
export const adminSubmissionFile = (id) => request(`/admin/assignments/${id}/file`, { admin: true, blob: true });
export const adminUnassign = (id) => request(`/admin/assignments/${id}`, { method: "DELETE", admin: true });

// ── Attendance (daily check-in + learning log) ──
export const portalAttendance = () => request("/portal/attendance", { session: true });
export const portalCheckIn = (learned, blockers) =>
  request("/portal/attendance/today", { method: "PUT", json: { learned, blockers }, session: true });
export const adminAttendanceDay = (date) => request(`/admin/attendance${date ? `?date=${date}` : ""}`, { admin: true });
export const adminAttendanceOf = (internshipId) => request(`/admin/internships/${internshipId}/attendance`, { admin: true });
