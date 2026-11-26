import { useCallback, useEffect, useMemo, useState } from "react";
import {
  adminAssignTask, adminCreateTask, adminDeleteTask, adminQueue, adminReview, adminSubmissionFile, adminTaskAssignments,
  adminTaskComment, adminTaskFile, adminTasks, adminUnassign, openBlob,
} from "../../api/a1";

// Phase 2 admin: write tasks, give them to running interns, review their work, answer questions.

const STATUS = {
  ASSIGNED: { label: "To do", cls: "bg-amber-100 text-amber-800" },
  SUBMITTED: { label: "Submitted", cls: "bg-blue-100 text-blue-800" },
  CHANGES_REQUESTED: { label: "Changes asked", cls: "bg-red-100 text-red-700" },
  DONE: { label: "Done", cls: "bg-green-100 text-green-800" },
};
const fmt = (d) => (d ? new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : "");
const fmtTime = (d) => (d ? new Date(d).toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : "");
const show = async (fn, name) => { try { openBlob(await fn(), name); } catch (err) { alert(err.message); } };

// Pick running interns, with "all of a domain" shortcuts
function InternPicker({ interns, chosen, setChosen, exclude = [] }) {
  const list = interns.filter((i) => !exclude.includes(i.id));
  const domains = [...new Set(list.map((i) => i.domain))];
  const toggle = (id) => setChosen((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));
  if (list.length === 0) return <p className="text-sm text-gray-500">No running interns{exclude.length ? " left" : ""}.</p>;
  return (
    <div className="space-y-2 text-sm">
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => setChosen(list.map((i) => i.id))} className="px-2 py-0.5 rounded border">All</button>
        {domains.map((d) => (
          <button key={d} type="button" onClick={() => setChosen(list.filter((i) => i.domain === d).map((i) => i.id))}
            className="px-2 py-0.5 rounded border">All {d}</button>
        ))}
        <button type="button" onClick={() => setChosen([])} className="px-2 py-0.5 rounded border">None</button>
      </div>
      <div className="grid sm:grid-cols-2 gap-1 max-h-48 overflow-y-auto">
        {list.map((i) => (
          <label key={i.id} className="flex items-center gap-2">
            <input type="checkbox" checked={chosen.includes(i.id)} onChange={() => toggle(i.id)} />
            {i.fullName} <span className="text-gray-400">({i.domain})</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function Thread({ a, onChange }) {
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const send = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      onChange(await adminTaskComment(a.id, text));
      setText("");
    } catch (err) {
      alert(err.message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="space-y-2">
      {a.comments.map((c, i) => (
        <div key={i} className={`rounded px-3 py-1.5 text-sm max-w-[85%] ${c.author === "ADMIN" ? "ml-auto bg-indigo-50" : "bg-gray-100"}`}>
          <p className="text-xs text-gray-500">{c.author === "ADMIN" ? "You" : a.internName} · {fmtTime(c.createdAt)}</p>
          <p className="whitespace-pre-wrap">{c.text}</p>
        </div>
      ))}
      <form onSubmit={send} className="flex gap-2">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Reply (emailed to the intern)…"
          className="flex-1 border rounded px-2 py-1 text-sm" />
        <button disabled={busy || !text.trim()} className="px-3 rounded bg-gray-900 text-white text-sm disabled:opacity-50">Send</button>
      </form>
    </div>
  );
}

// One intern's work on a task, with review buttons
export function AssignmentCard({ a, onChange, onRemoved }) {
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const review = async (status) => {
    setBusy(true);
    try {
      onChange(await adminReview(a.id, status, note));
      setNote("");
    } catch (err) {
      alert(err.message);
    } finally {
      setBusy(false);
    }
  };
  const remove = async () => {
    if (!window.confirm(`Take "${a.taskTitle}" away from ${a.internName}?`)) return;
    try { await adminUnassign(a.id); onRemoved?.(a.id); } catch (err) { alert(err.message); }
  };
  return (
    <div className="border rounded-lg p-4 space-y-3 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-semibold text-gray-900">{a.internName} <span className="text-gray-400 font-normal">· {a.taskTitle}</span></p>
        <span className={`text-xs px-2 py-0.5 rounded-full ${STATUS[a.status]?.cls}`}>{STATUS[a.status]?.label}</span>
      </div>
      {a.submittedAt ? (
        <div className="text-sm space-y-1">
          <p className="text-xs text-gray-500">Submitted {fmtTime(a.submittedAt)}</p>
          {a.submissionText && <p className="whitespace-pre-wrap">{a.submissionText}</p>}
          {a.submissionLink && <a href={a.submissionLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 break-all">{a.submissionLink}</a>}
          {a.submissionFileName && (
            <p><button onClick={() => show(() => adminSubmissionFile(a.id), a.submissionFileName)} className="text-indigo-600">📎 {a.submissionFileName}</button></p>
          )}
        </div>
      ) : <p className="text-sm text-gray-400">Nothing submitted yet.</p>}
      {a.reviewNote && <p className="text-xs text-gray-500">Last review: “{a.reviewNote}” ({fmtTime(a.reviewedAt)})</p>}
      {a.status === "SUBMITTED" && (
        <div className="space-y-2">
          <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={2}
            placeholder="Feedback (needed for “Ask for changes”, optional for Approve)" className="w-full border rounded px-2 py-1 text-sm" />
          <div className="flex gap-2">
            <button disabled={busy} onClick={() => review("DONE")} className="bg-green-600 text-white px-3 py-1 rounded text-sm">✓ Approve</button>
            <button disabled={busy || !note.trim()} onClick={() => review("CHANGES_REQUESTED")} className="bg-amber-600 text-white px-3 py-1 rounded text-sm disabled:opacity-50">↩ Ask for changes</button>
          </div>
        </div>
      )}
      <Thread a={a} onChange={onChange} />
      {onRemoved && <button onClick={remove} className="text-xs text-red-500">Remove this task from {a.internName}</button>}
    </div>
  );
}

function NewTask({ interns, onCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [file, setFile] = useState(null);
  const [chosen, setChosen] = useState([]);
  const [sendMail, setSendMail] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const save = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("title", title);
      fd.append("description", description);
      fd.append("link", link);
      fd.append("dueDate", dueDate);
      fd.append("internshipIds", chosen.join(","));
      fd.append("sendMail", String(sendMail));
      if (file) fd.append("file", file);
      await adminCreateTask(fd);
      setTitle(""); setDescription(""); setLink(""); setDueDate(""); setFile(null); setChosen([]);
      e.target.reset();
      onCreated();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <form onSubmit={save} className="bg-white rounded-lg shadow-sm p-5 space-y-3 text-sm">
      <p className="font-semibold text-gray-900">New task</p>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title, e.g. Build a login page" className="w-full border rounded px-3 py-2" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} placeholder="What to do, how it will be checked…" className="w-full border rounded px-3 py-2" />
      <div className="grid sm:grid-cols-2 gap-3">
        <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Link (optional) https://…" className="border rounded px-3 py-2" />
        <label className="flex items-center gap-2">Due <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="border rounded px-2 py-1.5 flex-1" /></label>
      </div>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="block" />
      <p className="text-xs text-gray-500">Attachment optional: PDF, image or ZIP, max 10 MB.</p>
      <p className="font-medium">Give it to:</p>
      <InternPicker interns={interns} chosen={chosen} setChosen={setChosen} />
      <label className="flex items-center gap-2"><input type="checkbox" checked={sendMail} onChange={(e) => setSendMail(e.target.checked)} /> Email the interns</label>
      {error && <p className="text-red-600">{error}</p>}
      <button disabled={busy || !title.trim()} className="bg-indigo-600 text-white px-4 py-2 rounded disabled:opacity-60">{busy ? "Saving…" : "Create task"}</button>
    </form>
  );
}

function TaskRow({ task, interns, onChanged }) {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(null);
  const [chosen, setChosen] = useState([]);
  const load = useCallback(async () => {
    try { setList(await adminTaskAssignments(task.id)); } catch (err) { alert(err.message); }
  }, [task.id]);
  useEffect(() => { if (open) load(); }, [open, load]);
  const assign = async () => {
    try { await adminAssignTask(task.id, chosen); setChosen([]); load(); onChanged(); } catch (err) { alert(err.message); }
  };
  const remove = async () => {
    if (!window.confirm(`Delete "${task.title}" for everyone, with their work?`)) return;
    try { await adminDeleteTask(task.id); onChanged(); } catch (err) { alert(err.message); }
  };
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <button onClick={() => setOpen(!open)} className="w-full text-left flex flex-wrap justify-between gap-2">
        <span className="font-semibold text-gray-900">{task.title}{task.dueDate && <span className="text-gray-400 font-normal"> · due {fmt(task.dueDate)}</span>}</span>
        <span className="text-xs text-gray-500">{task.assigned} given · {task.submitted} to review · {task.changesRequested} changes · {task.done} done</span>
      </button>
      {open && (
        <div className="mt-4 space-y-4 border-t pt-4">
          {task.description && <p className="text-sm whitespace-pre-wrap text-gray-700">{task.description}</p>}
          <div className="flex flex-wrap gap-3 text-sm">
            {task.link && <a href={task.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600">🔗 link</a>}
            {task.fileName && <button onClick={() => show(() => adminTaskFile(task.id), task.fileName)} className="text-indigo-600">📎 {task.fileName}</button>}
            <button onClick={remove} className="text-red-500 ml-auto">Delete task</button>
          </div>
          <div className="bg-gray-50 rounded p-3 space-y-2">
            <p className="text-sm font-medium">Give to more interns</p>
            <InternPicker interns={interns} chosen={chosen} setChosen={setChosen} exclude={(list || []).map((a) => a.internshipId)} />
            {chosen.length > 0 && <button onClick={assign} className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">Assign to {chosen.length}</button>}
          </div>
          {list === null ? <p className="text-sm text-gray-500">Loading…</p> : list.map((a) => (
            <AssignmentCard key={a.id} a={a} onChange={(r) => { setList((l) => l.map((x) => (x.id === r.id ? r : x))); onChanged(); }}
              onRemoved={(id) => { setList((l) => l.filter((x) => x.id !== id)); onChanged(); }} />
          ))}
        </div>
      )}
    </div>
  );
}

export function TasksTab({ items }) {
  const [tasks, setTasks] = useState([]);
  const interns = useMemo(() => items.filter((i) => i.status === "APPROVED"), [items]);
  const load = useCallback(async () => {
    try { setTasks(await adminTasks()); } catch (err) { alert(err.message); }
  }, []);
  useEffect(() => { load(); }, [load]);
  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <div className="lg:col-span-2"><NewTask interns={interns} onCreated={load} /></div>
      <div className="lg:col-span-3 space-y-3">
        {tasks.length === 0 && <p className="text-gray-500 text-sm">No tasks yet.</p>}
        {tasks.map((t) => <TaskRow key={t.id} task={t} interns={interns} onChanged={load} />)}
      </div>
    </div>
  );
}

export function ReviewTab({ onCount }) {
  const [status, setStatus] = useState("SUBMITTED");
  const [list, setList] = useState(null);
  const load = useCallback(async () => {
    try {
      const l = await adminQueue(status);
      setList(l);
      if (status === "SUBMITTED") onCount?.(l.length);
    } catch (err) {
      alert(err.message);
    }
  }, [status, onCount]);
  useEffect(() => { load(); }, [load]);
  return (
    <div className="space-y-4">
      <div className="flex gap-2 text-sm">
        {Object.entries(STATUS).map(([k, v]) => (
          <button key={k} onClick={() => setStatus(k)} className={`px-3 py-1 rounded-full ${status === k ? "bg-gray-900 text-white" : "bg-white border"}`}>{v.label}</button>
        ))}
      </div>
      {list === null && <p className="text-gray-500 text-sm">Loading…</p>}
      {list && list.length === 0 && <p className="text-gray-500 text-sm">{status === "SUBMITTED" ? "Nothing to review 🎉" : "None."}</p>}
      <div className="grid md:grid-cols-2 gap-4">
        {(list || []).map((a) => (
          <AssignmentCard key={a.id} a={a} onChange={(r) => setList((l) => (r.status === status ? l.map((x) => (x.id === r.id ? r : x)) : l.filter((x) => x.id !== r.id)))} />
        ))}
      </div>
    </div>
  );
}
