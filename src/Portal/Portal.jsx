import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  clearSession, getSession, openBlob, portalAttendance, portalCheckIn, portalComment, portalLogout, portalMe,
  portalRequestCode, portalSubmissionFile,
  portalSubmit, portalTask, portalTaskFile, portalTasks, portalVerify, setSession,
} from "../api/a1";
import { TrackContent } from "../Pages/Internship/Track";
import { AttendanceCalendar, AttendanceStats, CheckInCard } from "./Attendance";

// Intern portal (portal.a1itinnovation.com.np): login with an email code, my internship (the
// tracking page), my tasks, submit work, questions. Admin panel lives at /admin on the same host.

const fmt = (d) => (d ? new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "");
const fmtTime = (d) => (d ? new Date(d).toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : "");

const TASK_STATUS = {
  ASSIGNED: { label: "To do", cls: "bg-amber-100 text-amber-800" },
  SUBMITTED: { label: "Submitted — in review", cls: "bg-blue-100 text-blue-800" },
  CHANGES_REQUESTED: { label: "Changes needed", cls: "bg-red-100 text-red-700" },
  DONE: { label: "Done ✓", cls: "bg-green-100 text-green-800" },
};

function Shell({ children, onLogout }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Intern Portal | A1 IT Innovation</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="" width={36} height={36} className="rounded-full object-contain" />
            <span className="font-bold text-gray-900">A1 Intern Portal</span>
          </Link>
          {onLogout && <button onClick={onLogout} className="text-sm text-gray-600 hover:text-gray-900">Log out</button>}
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState("email");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const ask = async (e) => {
    e?.preventDefault();
    setBusy(true);
    setError("");
    try {
      await portalRequestCode(email.trim());
      setStep("code");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };
  const verify = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const s = await portalVerify(email.trim(), code.trim());
      setSession(s.token);
      onLogin();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };
  const input = "w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500";

  return (
    <Shell>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow p-8 mt-8">
        <h1 className="text-xl font-bold text-gray-900 mb-1">Intern login</h1>
        <p className="text-sm text-gray-500 mb-6">Use the email you applied with. No password — we email you a code.</p>
        {step === "email" ? (
          <form onSubmit={ask} className="space-y-4">
            <input type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com" className={input} />
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button disabled={busy} className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg disabled:opacity-60">
              {busy ? "Sending…" : "Send me a code"}
            </button>
          </form>
        ) : (
          <form onSubmit={verify} className="space-y-4">
            <p className="text-sm text-gray-700">
              If <strong>{email}</strong> applied for an internship, a 6-digit code is on its way (check spam too).
            </p>
            <input inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))} placeholder="123456"
              className={`${input} text-center text-2xl tracking-[0.5em] font-mono`} />
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button disabled={busy || code.length !== 6} className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg disabled:opacity-60">
              {busy ? "Checking…" : "Log in"}
            </button>
            <div className="flex justify-between text-sm">
              <button type="button" onClick={() => { setStep("email"); setCode(""); setError(""); }} className="text-gray-500">Change email</button>
              <button type="button" onClick={ask} disabled={busy} className="text-indigo-600">Send again</button>
            </div>
          </form>
        )}
        <p className="text-xs text-gray-400 mt-6">
          Not applied yet? <a href="https://www.a1itinnovation.com.np/services/internship" className="text-indigo-600">Apply for a free internship</a>
        </p>
      </div>
    </Shell>
  );
}

// Logged-in pages share this: loads /me, sends to login on 401
function useMe() {
  const [me, setMe] = useState(null);
  const [error, setError] = useState("");
  const [loggedOut, setLoggedOut] = useState(!getSession());
  const load = useCallback(async () => {
    if (!getSession()) return;
    try {
      setMe(await portalMe());
    } catch (err) {
      if (err.status === 401) {
        clearSession();
        setLoggedOut(true);
      } else {
        setError(err.message);
      }
    }
  }, []);
  useEffect(() => { load(); }, [load]);
  const logout = async () => {
    try { await portalLogout(); } catch { /* already gone */ }
    clearSession();
    setLoggedOut(true);
  };
  return { me, error, loggedOut, setLoggedOut, load, logout };
}

export function PortalHome() {
  const { me, error, loggedOut, setLoggedOut, load, logout } = useMe();
  const [tasks, setTasks] = useState(null);
  const [att, setAtt] = useState(null);

  useEffect(() => {
    if (!me) return;
    portalTasks().then(setTasks).catch(() => setTasks([]));
    portalAttendance().then(setAtt).catch(() => setAtt(null));
  }, [me]);

  const checkIn = async (learned, blockers) => setAtt(await portalCheckIn(learned, blockers));

  if (loggedOut) return <Login onLogin={() => { setLoggedOut(false); load(); }} />;

  const running = me && (me.track.status === "APPROVED" || me.track.status === "COMPLETED");
  const open = (tasks || []).filter((t) => t.status !== "DONE");
  const done = (tasks || []).filter((t) => t.status === "DONE");

  return (
    <Shell onLogout={logout}>
      {error && <p className="text-red-600">{error}</p>}
      {!me && !error && <p className="text-gray-500">Loading…</p>}
      {me && (
        <div className="space-y-8">
          {att && <CheckInCard key={att.today} a={att} onSave={checkIn} />}
          {running && (
            <section>
              <div className="flex items-end justify-between mb-3">
                <h2 className="text-lg font-bold text-gray-900">My tasks</h2>
                <span className="text-sm text-gray-500">{me.tasksDone} done · {me.tasksOpen} open</span>
              </div>
              {tasks === null && <p className="text-gray-500 text-sm">Loading…</p>}
              {tasks && tasks.length === 0 && (
                <p className="bg-white rounded-xl shadow-sm p-5 text-sm text-gray-500">No tasks yet. Your mentor will add them here — you will get an email.</p>
              )}
              <div className="space-y-3">
                {[...open, ...done].map((t) => (
                  <Link key={t.id} to={`/tasks/${t.id}`} className="block bg-white rounded-xl shadow-sm p-4 hover:shadow transition-shadow">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-semibold text-gray-900">{t.title}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${TASK_STATUS[t.status]?.cls}`}>{TASK_STATUS[t.status]?.label}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Given {fmt(t.assignedAt)}{t.dueDate ? ` · due ${fmt(t.dueDate)}` : ""}{t.commentCount ? ` · 💬 ${t.commentCount}` : ""}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
          {att && att.days.length > 0 && (
            <section className="bg-white rounded-xl shadow-sm p-5 space-y-4">
              <h2 className="text-lg font-bold text-gray-900">My attendance</h2>
              <AttendanceStats a={att} />
              <AttendanceCalendar a={att} />
            </section>
          )}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">My internship</h2>
            <TrackContent token={me.trackToken} />
          </section>
        </div>
      )}
    </Shell>
  );
}

export function PortalTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { me, loggedOut, setLoggedOut, load, logout } = useMe();
  const [task, setTask] = useState(null);
  const [error, setError] = useState("");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const [comment, setComment] = useState("");
  const [busy, setBusy] = useState(false);
  const [formError, setFormError] = useState("");

  const loadTask = useCallback(async () => {
    try {
      const t = await portalTask(id);
      setTask(t);
      setText(t.submissionText || "");
      setLink(t.submissionLink || "");
    } catch (err) {
      setError(err.message);
    }
  }, [id]);

  useEffect(() => { if (me) loadTask(); }, [me, loadTask]);

  if (loggedOut) return <Login onLogin={() => { setLoggedOut(false); load(); }} />;

  const submit = async (e) => {
    e.preventDefault();
    setFormError("");
    if (file && file.size > 10 * 1024 * 1024) {
      setFormError("The file must be less than 10 MB");
      return;
    }
    const fd = new FormData();
    fd.append("text", text);
    fd.append("link", link);
    if (file) fd.append("file", file);
    setBusy(true);
    try {
      setTask(await portalSubmit(id, fd));
      setFile(null);
      e.target.reset();
    } catch (err) {
      setFormError(err.message);
    } finally {
      setBusy(false);
    }
  };
  const ask = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setBusy(true);
    try {
      setTask(await portalComment(id, comment));
      setComment("");
    } catch (err) {
      alert(err.message);
    } finally {
      setBusy(false);
    }
  };
  const download = async (fn, name) => {
    try { openBlob(await fn(), name, true); } catch (err) { alert(err.message); }
  };

  return (
    <Shell onLogout={logout}>
      <button onClick={() => navigate("/")} className="text-sm text-indigo-600 mb-4">← My tasks</button>
      {error && <p className="text-red-600">{error}</p>}
      {!task && !error && <p className="text-gray-500">Loading…</p>}
      {task && (
        <div className="space-y-5">
          <section className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h1 className="text-xl font-bold text-gray-900">{task.title}</h1>
              <span className={`text-xs px-2 py-0.5 rounded-full ${TASK_STATUS[task.status]?.cls}`}>{TASK_STATUS[task.status]?.label}</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">Given {fmt(task.assignedAt)}{task.dueDate ? ` · due ${fmt(task.dueDate)}` : ""}</p>
            {task.description && <p className="whitespace-pre-wrap text-gray-800 text-sm">{task.description}</p>}
            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              {task.link && <a href={task.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg border border-indigo-200 text-indigo-700">🔗 Open link</a>}
              {task.taskFileName && (
                <button onClick={() => download(() => portalTaskFile(id), task.taskFileName)} className="px-3 py-1.5 rounded-lg border border-indigo-200 text-indigo-700">
                  ⬇ {task.taskFileName}
                </button>
              )}
            </div>
          </section>

          {task.reviewNote && (
            <section className={`rounded-xl p-4 text-sm ${task.status === "CHANGES_REQUESTED" ? "bg-red-50 text-red-800" : "bg-green-50 text-green-800"}`}>
              <strong>Mentor's review ({fmtTime(task.reviewedAt)}):</strong> <span className="whitespace-pre-wrap">{task.reviewNote}</span>
            </section>
          )}

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="font-bold text-gray-900 mb-3">My work</h2>
            {task.submittedAt && (
              <p className="text-xs text-gray-500 mb-3">
                Last submitted {fmtTime(task.submittedAt)}
                {task.submissionFileName && <> · <button onClick={() => download(() => portalSubmissionFile(id), task.submissionFileName)} className="text-indigo-600">{task.submissionFileName}</button></>}
              </p>
            )}
            {task.canSubmit ? (
              <form onSubmit={submit} className="space-y-3">
                <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4}
                  placeholder="What did you do? Notes for your mentor." className="w-full border rounded-lg px-3 py-2 text-sm" />
                <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://github.com/you/project (optional)"
                  className="w-full border rounded-lg px-3 py-2 text-sm" />
                <input type="file" accept=".pdf,.jpg,.jpeg,.png,.zip,.docx,.pptx,.xlsx" onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="block text-sm" />
                <p className="text-xs text-gray-400">PDF, image or ZIP, max 10 MB. A new file replaces the old one.</p>
                {formError && <p className="text-sm text-red-600">{formError}</p>}
                <button disabled={busy} className="bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg disabled:opacity-60">
                  {busy ? "Sending…" : task.submittedAt ? "Submit again" : "Submit"}
                </button>
              </form>
            ) : (
              <div className="text-sm text-gray-700 space-y-1">
                {task.submissionText && <p className="whitespace-pre-wrap">{task.submissionText}</p>}
                {task.submissionLink && <a href={task.submissionLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 break-all">{task.submissionLink}</a>}
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="font-bold text-gray-900 mb-3">Questions</h2>
            <div className="space-y-3 mb-4">
              {task.comments.length === 0 && <p className="text-sm text-gray-500">Stuck? Ask your mentor here.</p>}
              {task.comments.map((c, i) => (
                <div key={i} className={`rounded-lg px-3 py-2 text-sm max-w-[85%] ${c.author === "STUDENT" ? "ml-auto bg-indigo-50" : "bg-gray-100"}`}>
                  <p className="text-xs text-gray-500 mb-0.5">{c.author === "STUDENT" ? "You" : "Mentor"} · {fmtTime(c.createdAt)}</p>
                  <p className="whitespace-pre-wrap">{c.text}</p>
                </div>
              ))}
            </div>
            <form onSubmit={ask} className="flex gap-2">
              <input value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write a question…"
                className="flex-1 border rounded-lg px-3 py-2 text-sm" />
              <button disabled={busy || !comment.trim()} className="bg-gray-900 text-white px-4 rounded-lg text-sm disabled:opacity-50">Send</button>
            </form>
          </section>
        </div>
      )}
    </Shell>
  );
}
