import { useCallback, useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { ReviewTab, TasksTab } from "./TasksAdmin";
import { AttendanceTab } from "./AttendanceAdmin";
import {
  adminAddAgreement, adminAgreementFile, adminAgreements, adminCheck, adminCv, adminDelete,
  adminDeleteAgreement, adminDocument, adminList, adminNewCode, adminRequestAgreement, adminResendAck,
  adminReturnDocs, adminSendAgreements, adminSetStatus, clearAdminKey, getAdminKey, openBlob, setAdminKey,
  whatsappUrl,
} from "../../api/a1";

// A1 IT Innovation internship panel: /admin/internships (not linked anywhere, noindex).
// Login = the A1_ADMIN_KEY set on the server; kept in this tab only (sessionStorage).

// Your name in the ready WhatsApp messages
const ADMIN_NAME = "Sandip";

const STATUSES = ["APPLIED", "CONTACTED", "AGREEMENT_SENT", "DOCS_RECEIVED", "APPROVED", "COMPLETED", "REJECTED", "TERMINATED"];
const STATUS_LABEL = {
  APPLIED: "New", CONTACTED: "Contacted", AGREEMENT_SENT: "Agreement sent", DOCS_RECEIVED: "Docs received",
  APPROVED: "Running", COMPLETED: "Completed", REJECTED: "Rejected", TERMINATED: "Terminated",
};
const BADGE = {
  APPLIED: "bg-amber-100 text-amber-800",
  CONTACTED: "bg-sky-100 text-sky-800",
  AGREEMENT_SENT: "bg-violet-100 text-violet-800",
  DOCS_RECEIVED: "bg-fuchsia-100 text-fuchsia-800",
  APPROVED: "bg-blue-100 text-blue-800",
  COMPLETED: "bg-green-100 text-green-800",
  REJECTED: "bg-gray-200 text-gray-700",
  TERMINATED: "bg-red-100 text-red-700",
};
const today = () => new Date().toISOString().slice(0, 10);
const fmtDate = (d) => (d ? new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "—");
const fmtTime = (d) => (d ? new Date(d).toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : "—");
const kb = (n) => (n == null ? "" : n > 1024 * 1024 ? `${(n / 1024 / 1024).toFixed(1)} MB` : `${Math.round(n / 1024)} KB`);

function Login({ onLogin }) {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    setAdminKey(key.trim());
    try {
      await adminCheck();
      onLogin();
    } catch (err) {
      clearAdminKey();
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={submit} className="bg-white rounded-xl shadow p-8 w-full max-w-sm space-y-4">
        <h1 className="text-xl font-bold text-gray-900">A1 Internship Admin</h1>
        <input type="password" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Admin key"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button disabled={busy || !key.trim()} className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg disabled:opacity-60">
          {busy ? "Checking…" : "Log in"}
        </button>
      </form>
    </div>
  );
}

// Approve / complete / reject / terminate / reopen with dates, note and "send email"
function StatusForm({ item, status, onDone, onCancel }) {
  const [startDate, setStartDate] = useState(item.startDate || today());
  const [endDate, setEndDate] = useState(item.endDate || (status === "COMPLETED" ? today() : ""));
  const [adminNote, setAdminNote] = useState(item.adminNote || "");
  const [sendMail, setSendMail] = useState(status !== "TERMINATED" && status !== "APPLIED");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const needsDates = status === "APPROVED" || status === "COMPLETED";
  const mailText = {
    APPROVED: "Email the approval + secret certificate code",
    COMPLETED: "Email \"your certificate is ready\"",
    REJECTED: "Email a polite rejection",
  }[status];

  const save = async () => {
    setBusy(true);
    setError("");
    try {
      const body = { status, adminNote, sendMail };
      if (needsDates) {
        body.startDate = startDate || null;
        body.endDate = endDate || null;
      }
      onDone(await adminSetStatus(item.id, body));
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mt-3 p-4 bg-indigo-50 border border-indigo-100 rounded-lg space-y-3 text-sm">
      <p className="font-semibold">Set status → {STATUS_LABEL[status]}</p>
      {needsDates && (
        <div className="flex flex-wrap gap-4">
          <label className="flex flex-col">Start date
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border rounded px-2 py-1" />
          </label>
          <label className="flex flex-col">End date {status === "APPROVED" && <span className="text-xs text-gray-500">(optional, the real last day)</span>}
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border rounded px-2 py-1" />
          </label>
        </div>
      )}
      <textarea value={adminNote} onChange={(e) => setAdminNote(e.target.value)} rows={2} placeholder="Note (only admins see it)"
        className="w-full border rounded px-2 py-1" />
      {mailText && (
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={sendMail} onChange={(e) => setSendMail(e.target.checked)} /> {mailText}
        </label>
      )}
      {error && <p className="text-red-600">{error}</p>}
      <div className="flex gap-2">
        <button onClick={save} disabled={busy} className="bg-indigo-600 text-white px-4 py-1.5 rounded disabled:opacity-60">
          {busy ? "Saving…" : "Save"}
        </button>
        <button onClick={onCancel} className="px-4 py-1.5 rounded border">Cancel</button>
      </div>
    </div>
  );
}

function SendAgreementForm({ item, agreements, onDone, onCancel }) {
  const [chosen, setChosen] = useState([]);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const toggle = (id) => setChosen((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));
  const send = async () => {
    setBusy(true);
    setError("");
    try {
      onDone(await adminSendAgreements(item.id, chosen, message));
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="mt-3 p-4 bg-emerald-50 border border-emerald-100 rounded-lg space-y-3 text-sm">
      <p className="font-semibold">Email agreement(s) to {item.email}</p>
      {agreements.length === 0 ? (
        <p className="text-gray-600">No agreements yet. Upload one in the “Agreements” tab.</p>
      ) : (
        <div className="space-y-1">
          {agreements.map((a) => (
            <label key={a.id} className="flex items-center gap-2">
              <input type="checkbox" checked={chosen.includes(a.id)} onChange={() => toggle(a.id)} />
              {a.title} <span className="text-gray-500">({a.fileName})</span>
            </label>
          ))}
        </div>
      )}
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={2}
        placeholder="Message in the email (optional), e.g. Please sign and send it back by Friday."
        className="w-full border rounded px-2 py-1" />
      {error && <p className="text-red-600">{error}</p>}
      <div className="flex gap-2">
        <button onClick={send} disabled={busy || chosen.length === 0} className="bg-emerald-600 text-white px-4 py-1.5 rounded disabled:opacity-60">
          {busy ? "Sending…" : "Send email"}
        </button>
        <button onClick={onCancel} className="px-4 py-1.5 rounded border">Cancel</button>
      </div>
    </div>
  );
}

const firstName = (n) => (n || "").trim().split(/\s+/)[0];
const waContact = (i) =>
  `Hi ${firstName(i.fullName)}, I'm ${ADMIN_NAME} from A1 IT Innovation. Thank you for applying for the ${i.domain} internship. Is this a good time for a quick call?`;
const waAgreement = (i) =>
  `Hi ${firstName(i.fullName)}, as we talked, please sign the internship agreement and upload it with a photo of your citizenship / ID card here:\n${i.trackUrl}\n(We also sent it to your email.)`;

// Opens WhatsApp with a ready message you can still change
function WhatsAppForm({ item, text, onCancel }) {
  const [message, setMessage] = useState(text);
  return (
    <div className="mt-3 p-4 bg-green-50 border border-green-100 rounded-lg space-y-2 text-sm">
      <p className="font-semibold">WhatsApp to {item.phone}</p>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full border rounded px-2 py-1" />
      <div className="flex gap-2">
        <a href={whatsappUrl(item.phone, message)} target="_blank" rel="noopener noreferrer" onClick={onCancel}
          className="bg-green-600 text-white px-4 py-1.5 rounded">Open WhatsApp</a>
        <button onClick={onCancel} className="px-4 py-1.5 rounded border">Cancel</button>
      </div>
    </div>
  );
}

// Agreement + the student's upload link (status → Agreement sent)
function AgreementRequestForm({ item, agreements, onDone, onCancel }) {
  const [chosen, setChosen] = useState(agreements.length === 1 ? [agreements[0].id] : []);
  const [message, setMessage] = useState("");
  const [sendMail, setSendMail] = useState(item.mailEnabled);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const toggle = (id) => setChosen((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));
  const send = async () => {
    setBusy(true);
    setError("");
    try {
      onDone(await adminRequestAgreement(item.id, chosen, message, sendMail));
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="mt-3 p-4 bg-violet-50 border border-violet-100 rounded-lg space-y-3 text-sm">
      <p className="font-semibold">Send agreement + upload link</p>
      {agreements.length === 0 ? (
        <p className="text-gray-600">No agreements yet. Upload one in the “Agreements” tab.</p>
      ) : agreements.map((a) => (
        <label key={a.id} className="flex items-center gap-2">
          <input type="checkbox" checked={chosen.includes(a.id)} onChange={() => toggle(a.id)} /> {a.title}
          <span className="text-gray-500">({a.fileName})</span>
        </label>
      ))}
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={2}
        placeholder="Message in the email (optional)" className="w-full border rounded px-2 py-1" />
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={sendMail} disabled={!item.mailEnabled} onChange={(e) => setSendMail(e.target.checked)} />
        Email it with the agreement attached {item.mailEnabled ? "" : "(mail is not set up)"}
      </label>
      <p className="text-xs text-gray-500">After this you can also send the link on WhatsApp.</p>
      {error && <p className="text-red-600">{error}</p>}
      <div className="flex gap-2">
        <button onClick={send} disabled={busy || chosen.length === 0} className="bg-violet-600 text-white px-4 py-1.5 rounded disabled:opacity-60">
          {busy ? "Sending…" : "Send"}
        </button>
        <button onClick={onCancel} className="px-4 py-1.5 rounded border">Cancel</button>
      </div>
    </div>
  );
}

function ReturnDocsForm({ item, onDone, onCancel }) {
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const send = async () => {
    setBusy(true);
    setError("");
    try {
      onDone(await adminReturnDocs(item.id, note));
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="mt-3 p-4 bg-amber-50 border border-amber-100 rounded-lg space-y-2 text-sm">
      <p className="font-semibold">Ask to upload again</p>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={2}
        placeholder="Reason the student sees, e.g. The ID photo is blurry, please upload a clear photo."
        className="w-full border rounded px-2 py-1" />
      {error && <p className="text-red-600">{error}</p>}
      <div className="flex gap-2">
        <button onClick={send} disabled={busy || !note.trim()} className="bg-amber-600 text-white px-4 py-1.5 rounded disabled:opacity-60">
          {busy ? "Sending…" : "Send back"}
        </button>
        <button onClick={onCancel} className="px-4 py-1.5 rounded border">Cancel</button>
      </div>
    </div>
  );
}

function Row({ item, agreements, onChange, onDeleted, onCode }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(null); // a status, "AGREEMENT", "REQUEST", "RETURN", "WA_CONTACT", "WA_LINK"
  const [busy, setBusy] = useState(false);

  const act = async (fn, confirmText) => {
    if (confirmText && !window.confirm(confirmText)) return;
    setBusy(true);
    try {
      const r = await fn();
      if (r) {
        onChange(r);
        if (r.code) onCode(r);
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setBusy(false);
    }
  };
  const done = (r) => {
    setForm(r.status === "AGREEMENT_SENT" && form === "REQUEST" ? "WA_LINK" : null);
    onChange(r);
    if (r.code) onCode(r);
  };
  const doc = (kind, name) => act(async () => { openBlob(await adminDocument(item.id, kind), name); });
  const copy = (text) => navigator.clipboard?.writeText(text);

  const before = ["APPLIED", "CONTACTED", "AGREEMENT_SENT", "DOCS_RECEIVED"].includes(item.status);
  const next = {
    APPLIED: ["CONTACTED", "REJECTED"],
    CONTACTED: ["REJECTED"],
    AGREEMENT_SENT: ["APPROVED", "REJECTED"],
    DOCS_RECEIVED: ["APPROVED", "REJECTED"],
    APPROVED: ["COMPLETED", "TERMINATED"],
    COMPLETED: ["APPROVED", "TERMINATED"],
    REJECTED: ["APPLIED", "APPROVED"],
    TERMINATED: ["APPROVED"],
  }[item.status];
  const label = {
    CONTACTED: "✔ Mark contacted",
    APPROVED: item.status === "DOCS_RECEIVED" ? "▶ Start internship" : before ? "Start without docs" : "Set running",
    REJECTED: "Reject", COMPLETED: "Mark completed", TERMINATED: "Terminate", APPLIED: "Reopen",
  };
  const btn = "px-3 py-1 rounded border";

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <button onClick={() => setOpen(!open)} className="text-left">
          <p className="font-semibold text-gray-900">
            {item.fullName} <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${BADGE[item.status]}`}>{STATUS_LABEL[item.status]}</span>
          </p>
          <p className="text-sm text-gray-600">{item.domain} · {item.email} · {item.phone}</p>
          <p className="text-xs text-gray-400">
            Applied {fmtTime(item.createdAt)}{item.college ? ` · ${item.college}` : ""}
            {item.ackSentAt ? " · thank-you sent ✓" : " · thank-you NOT sent"}
            {item.contactedAt ? ` · contacted ${fmtTime(item.contactedAt)}` : ""}
          </p>
        </button>
        <div className="flex flex-wrap gap-2 text-sm">
          {item.cvName && (
            <button disabled={busy} onClick={() => act(async () => { openBlob(await adminCv(item.id), item.cvName); })}
              className={`${btn} border-gray-300 hover:bg-gray-50`}>📄 CV</button>
          )}
          {before && (
            <>
              <a href={`tel:${item.phone}`} className={`${btn} border-gray-300 hover:bg-gray-50`}>📞 Call</a>
              <button onClick={() => setForm("WA_CONTACT")} className={`${btn} border-green-200 text-green-700 hover:bg-green-50`}>💬 WhatsApp</button>
              <button onClick={() => setForm("REQUEST")} className={`${btn} border-violet-200 text-violet-700 hover:bg-violet-50`}>
                {item.status === "AGREEMENT_SENT" || item.status === "DOCS_RECEIVED" ? "↻ Agreement again" : "📝 Send agreement"}
              </button>
            </>
          )}
          {item.status === "DOCS_RECEIVED" && (
            <button onClick={() => setForm("RETURN")} className={`${btn} border-amber-200 text-amber-700 hover:bg-amber-50`}>↩ Ask again</button>
          )}
          {next.map((st) => (
            <button key={st} onClick={() => setForm(st)} className={`${btn} border-indigo-200 text-indigo-700 hover:bg-indigo-50`}>
              {label[st]}
            </button>
          ))}
          {!before && (
            <button onClick={() => setForm("AGREEMENT")} className={`${btn} border-emerald-200 text-emerald-700 hover:bg-emerald-50`}>✉ Agreement</button>
          )}
        </div>
      </div>

      {(item.status === "AGREEMENT_SENT" || item.status === "DOCS_RECEIVED") && (
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <span className="text-gray-500">Docs:</span>
          {item.signedName ? <button onClick={() => doc("signed", item.signedName)} className={btn}>📝 Signed agreement</button>
            : <span className="text-gray-400">agreement not uploaded</span>}
          {item.idFrontName ? <button onClick={() => doc("id-front", item.idFrontName)} className={btn}>🪪 ID front</button>
            : <span className="text-gray-400">ID not uploaded</span>}
          {item.idBackName && <button onClick={() => doc("id-back", item.idBackName)} className={btn}>🪪 ID back</button>}
          {item.docsNote && <span className="text-amber-700">Asked again: “{item.docsNote}”</span>}
          {item.trackUrl && item.status === "AGREEMENT_SENT" && (
            <>
              <button onClick={() => copy(item.trackUrl)} className={btn}>Copy upload link</button>
              <button onClick={() => setForm("WA_LINK")} className={`${btn} border-green-200 text-green-700`}>💬 Link on WhatsApp</button>
            </>
          )}
        </div>
      )}

      {form === "WA_CONTACT" && <WhatsAppForm item={item} text={waContact(item)} onCancel={() => setForm(null)} />}
      {form === "WA_LINK" && item.trackUrl && <WhatsAppForm item={item} text={waAgreement(item)} onCancel={() => setForm(null)} />}
      {form === "REQUEST" && <AgreementRequestForm item={item} agreements={agreements} onDone={done} onCancel={() => setForm(null)} />}
      {form === "RETURN" && <ReturnDocsForm item={item} onDone={done} onCancel={() => setForm(null)} />}
      {form === "AGREEMENT" && <SendAgreementForm item={item} agreements={agreements} onDone={done} onCancel={() => setForm(null)} />}
      {form && STATUSES.includes(form) && <StatusForm item={item} status={form} onDone={done} onCancel={() => setForm(null)} />}

      {open && (
        <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm text-gray-700 border-t pt-4">
          <div className="space-y-1">
            <p className="font-semibold text-gray-900">Experience</p>
            <p className="whitespace-pre-wrap">{item.experience || "—"}</p>
            {item.adminNote && <p><span className="text-gray-500">Note:</span> {item.adminNote}</p>}
            {item.cvName && <p><span className="text-gray-500">CV:</span> {item.cvName} ({kb(item.cvSize)})</p>}
            {item.trackUrl && (
              <p><span className="text-gray-500">Student page:</span>{" "}
                <a href={item.trackUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600">open</a> ·{" "}
                <button onClick={() => copy(item.trackUrl)} className="text-indigo-600">copy link</button></p>
            )}
          </div>
          <div className="space-y-1">
            <p><span className="text-gray-500">Start:</span> {fmtDate(item.startDate)} · <span className="text-gray-500">End:</span> {fmtDate(item.endDate)}</p>
            <p><span className="text-gray-500">Certificate from:</span> {fmtDate(item.certificateFrom)}</p>
            <p><span className="text-gray-500">Code:</span> {item.hasCode ? `yes, emailed ${fmtTime(item.codeSentAt)}` : "—"}</p>
            <p><span className="text-gray-500">Certificate:</span> {item.certNo ? `${item.certNo} (first download ${fmtTime(item.certIssuedAt)})` : "not downloaded yet"}</p>
            {item.docsSubmittedAt && <p><span className="text-gray-500">Docs uploaded:</span> {fmtTime(item.docsSubmittedAt)}</p>}
            {(item.signedName || item.idFrontName) && !before && (
              <p className="flex flex-wrap gap-2">
                {item.signedName && <button onClick={() => doc("signed", item.signedName)} className="text-indigo-600">signed agreement</button>}
                {item.idFrontName && <button onClick={() => doc("id-front", item.idFrontName)} className="text-indigo-600">ID front</button>}
                {item.idBackName && <button onClick={() => doc("id-back", item.idBackName)} className="text-indigo-600">ID back</button>}
              </p>
            )}
            <p className="text-gray-500">Agreements sent:</p>
            {item.agreements.length === 0 ? <p>—</p> : (
              <ul className="list-disc pl-5">
                {item.agreements.map((a, i) => (
                  <li key={i}>{a.title} — {a.sentAt ? fmtTime(a.sentAt) : "not emailed (mail off / failed, or link only)"}</li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-2 pt-2">
              <button disabled={busy} onClick={() => act(() => adminResendAck(item.id))} className={btn}>Resend thank-you</button>
              {(item.status === "APPROVED" || item.status === "COMPLETED") && (
                <button disabled={busy} onClick={() => act(() => adminNewCode(item.id), "Make a new certificate code? The old one stops working.")}
                  className={btn}>New code + email</button>
              )}
              <button disabled={busy}
                onClick={() => act(async () => { await adminDelete(item.id); onDeleted(item.id); }, `Delete ${item.fullName}'s application, CV and documents for good?`)}
                className={`${btn} border-red-200 text-red-600`}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Agreements({ agreements, reload }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const upload = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("title", title);
      fd.append("description", description);
      fd.append("file", file);
      await adminAddAgreement(fd);
      setTitle("");
      setDescription("");
      setFile(null);
      e.target.reset();
      reload();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <form onSubmit={upload} className="bg-white rounded-lg shadow-sm p-5 space-y-3 text-sm h-fit">
        <p className="font-semibold text-gray-900">Upload a ready-made agreement</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title, e.g. Internship Agreement (React)"
          className="w-full border rounded px-3 py-2" />
        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description (optional)"
          className="w-full border rounded px-3 py-2" />
        <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        <p className="text-xs text-gray-500">PDF, DOC or DOCX, max 10 MB. Stored once, reused for every intern.</p>
        {error && <p className="text-red-600">{error}</p>}
        <button disabled={busy || !title.trim() || !file} className="w-full bg-indigo-600 text-white py-2 rounded disabled:opacity-60">
          {busy ? "Uploading…" : "Upload"}
        </button>
      </form>
      <div className="md:col-span-2 space-y-3">
        {agreements.length === 0 && <p className="text-gray-500">No agreements uploaded yet.</p>}
        {agreements.map((a) => (
          <div key={a.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-wrap justify-between gap-3 text-sm">
            <div>
              <p className="font-semibold text-gray-900">{a.title}</p>
              {a.description && <p className="text-gray-600">{a.description}</p>}
              <p className="text-xs text-gray-400">{a.fileName} · {kb(a.sizeBytes)} · added {fmtDate(a.createdAt)}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={async () => { try { openBlob(await adminAgreementFile(a.id), a.fileName); } catch (err) { alert(err.message); } }}
                className="px-3 py-1 rounded border">Open</button>
              <button onClick={async () => {
                if (!window.confirm(`Delete "${a.title}"? Interns who got it keep their email.`)) return;
                try { await adminDeleteAgreement(a.id); reload(); } catch (err) { alert(err.message); }
              }} className="px-3 py-1 rounded border border-red-200 text-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InternshipAdmin() {
  const [loggedIn, setLoggedIn] = useState(Boolean(getAdminKey()));
  const [tab, setTab] = useState("APPLICATIONS");
  const [toReview, setToReview] = useState(0);
  const [items, setItems] = useState([]);
  const [agreements, setAgreements] = useState([]);
  const [status, setStatus] = useState("");
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [codeShown, setCodeShown] = useState(null);

  const logout = useCallback(() => {
    clearAdminKey();
    setLoggedIn(false);
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const [list, ags] = await Promise.all([adminList(), adminAgreements()]);
      setItems(list);
      setAgreements(ags);
    } catch (err) {
      if (err.status === 401) logout();
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [logout]);

  useEffect(() => {
    if (loggedIn) load();
  }, [loggedIn, load]);

  const counts = useMemo(() => {
    const c = {};
    items.forEach((i) => { c[i.status] = (c[i.status] || 0) + 1; });
    return c;
  }, [items]);

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase();
    return items.filter((i) => (!status || i.status === status) && (!term
      || [i.fullName, i.email, i.phone, i.college, i.domain, i.certNo].some((v) => v && v.toLowerCase().includes(term))));
  }, [items, status, q]);

  const replace = (r) => setItems((list) => list.map((i) => (i.id === r.id ? r : i)));

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  const mailOff = items.length > 0 && !items[0].mailEnabled;

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Internship Admin | A1 IT Innovation</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-lg font-bold text-gray-900">A1 IT Innovation · Internships</h1>
          <div className="flex gap-2 text-sm">
            {["APPLICATIONS", "ATTENDANCE", "TASKS", "REVIEW", "AGREEMENTS"].map((t) => (
              <button key={t} onClick={() => setTab(t)}
                className={`px-3 py-1.5 rounded ${tab === t ? "bg-indigo-600 text-white" : "border"}`}>
                {{
                  APPLICATIONS: `Applications (${items.length})`,
                  ATTENDANCE: "Attendance",
                  TASKS: "Tasks",
                  REVIEW: `Review${toReview ? ` (${toReview})` : ""}`,
                  AGREEMENTS: `Agreements (${agreements.length})`,
                }[t]}
              </button>
            ))}
            <button onClick={load} className="px-3 py-1.5 rounded border">↻</button>
            <button onClick={logout} className="px-3 py-1.5 rounded border">Log out</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-4">
        {mailOff && (
          <p className="bg-amber-50 border border-amber-200 text-amber-800 text-sm rounded-lg px-4 py-2">
            Email is not set up on the server (A1_MAIL_HOST), so no mails go out. Codes are shown here so you can share them yourself.
          </p>
        )}
        {error && <p className="bg-red-50 text-red-700 text-sm rounded-lg px-4 py-2">{error}</p>}
        {codeShown && (
          <div className="bg-indigo-600 text-white rounded-lg px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <p>
              Certificate code for <strong>{codeShown.fullName}</strong>:{" "}
              <span className="font-mono text-xl tracking-widest">{codeShown.code}</span>
              <span className="block text-xs text-indigo-100">Shown only now (stored hashed). {codeShown.mailEnabled ? "It was emailed too." : "Share it with the intern."}</span>
            </p>
            <div className="flex gap-2">
              <button onClick={() => navigator.clipboard?.writeText(codeShown.code)} className="bg-white/20 px-3 py-1 rounded">Copy</button>
              <button onClick={() => setCodeShown(null)} className="bg-white/20 px-3 py-1 rounded">Close</button>
            </div>
          </div>
        )}

        {tab === "ATTENDANCE" && <AttendanceTab />}
        {tab === "TASKS" && <TasksTab items={items} />}
        <div className={tab === "REVIEW" ? "" : "hidden"}><ReviewTab onCount={setToReview} /></div>
        {tab === "AGREEMENTS" && <Agreements agreements={agreements} reload={load} />}
        {tab === "APPLICATIONS" && (
          <>
            <div className="flex flex-wrap gap-2 items-center">
              <button onClick={() => setStatus("")} className={`px-3 py-1 rounded-full text-sm ${!status ? "bg-gray-900 text-white" : "bg-white border"}`}>
                All {items.length}
              </button>
              {STATUSES.map((s) => (
                <button key={s} onClick={() => setStatus(s)}
                  className={`px-3 py-1 rounded-full text-sm ${status === s ? "bg-gray-900 text-white" : "bg-white border"}`}>
                  {STATUS_LABEL[s]} {counts[s] || 0}
                </button>
              ))}
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, email, phone, college…"
                className="ml-auto border rounded-lg px-3 py-1.5 text-sm w-full md:w-72" />
            </div>
            {loading && <p className="text-gray-500 text-sm">Loading…</p>}
            {!loading && shown.length === 0 && <p className="text-gray-500 text-sm">No applications.</p>}
            <div className="space-y-3">
              {shown.map((i) => (
                <Row key={i.id} item={i} agreements={agreements} onChange={replace}
                  onDeleted={(id) => setItems((list) => list.filter((x) => x.id !== id))}
                  onCode={setCodeShown} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
