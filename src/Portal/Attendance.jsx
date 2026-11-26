import { useState } from "react";

// Attendance UI shared by the intern portal and the admin panel.
// A day: PRESENT (checked in with a log) · ABSENT · OFF (Saturday) · PENDING (today, not yet)

const fmtDay = (d) => new Date(`${d}T00:00:00`).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
const fmtTime = (d) => (d ? new Date(d).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) : "");

const CELL = {
  PRESENT: "bg-green-500 text-white",
  ABSENT: "bg-red-400 text-white",
  OFF: "bg-gray-200 text-gray-500",
  PENDING: "bg-white border-2 border-dashed border-indigo-300 text-indigo-500",
};

export function AttendanceStats({ a }) {
  return (
    <div className="grid grid-cols-3 gap-3 text-center">
      <div className="bg-green-50 rounded-lg py-2">
        <p className="text-xl font-bold text-green-700">{a.percent}%</p>
        <p className="text-xs text-gray-500">{a.present} present · {a.absent} absent</p>
      </div>
      <div className="bg-orange-50 rounded-lg py-2">
        <p className="text-xl font-bold text-orange-600">🔥 {a.streak}</p>
        <p className="text-xs text-gray-500">day streak</p>
      </div>
      <div className="bg-indigo-50 rounded-lg py-2">
        <p className="text-xl font-bold text-indigo-700">{a.days.length}</p>
        <p className="text-xs text-gray-500">days since start</p>
      </div>
    </div>
  );
}

// Squares for every day since the start (oldest first); tap one to read its log
export function AttendanceCalendar({ a }) {
  const [picked, setPicked] = useState(null);
  const days = [...a.days].reverse();
  const day = picked && a.days.find((d) => d.date === picked);
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {days.map((d) => (
          <button key={d.date} type="button" title={`${fmtDay(d.date)} – ${d.status.toLowerCase()}`}
            onClick={() => setPicked(d.date === picked ? null : d.date)}
            className={`w-8 h-8 rounded text-xs font-semibold ${CELL[d.status]} ${picked === d.date ? "ring-2 ring-gray-900" : ""}`}>
            {new Date(`${d.date}T00:00:00`).getDate()}
          </button>
        ))}
      </div>
      <p className="text-xs text-gray-500 flex flex-wrap gap-3">
        <span><span className="inline-block w-3 h-3 rounded bg-green-500 align-middle" /> present</span>
        <span><span className="inline-block w-3 h-3 rounded bg-red-400 align-middle" /> absent</span>
        <span><span className="inline-block w-3 h-3 rounded bg-gray-200 align-middle" /> Saturday off</span>
        <span>Tap a day to read its log</span>
      </p>
      {day && (
        <div className="bg-gray-50 rounded-lg p-3 text-sm">
          <p className="font-semibold text-gray-900">{fmtDay(day.date)} · {day.status.toLowerCase()}{day.checkedInAt ? ` at ${fmtTime(day.checkedInAt)}` : ""}</p>
          {day.learned ? (
            <>
              <p className="whitespace-pre-wrap mt-1">{day.learned}</p>
              {day.blockers && <p className="mt-1 text-amber-700"><strong>Stuck on:</strong> {day.blockers}</p>}
            </>
          ) : <p className="text-gray-500 mt-1">No log this day.</p>}
        </div>
      )}
    </div>
  );
}

// The intern's daily check-in: present for today = a short log of what they did / learned
export function CheckInCard({ a, onSave }) {
  const today = a.todayEntry;
  const done = today?.status === "PRESENT";
  const saturday = new Date(`${a.today}T00:00:00`).getDay() === 6;
  const [editing, setEditing] = useState(!done);
  const [learned, setLearned] = useState(today?.learned || "");
  const [blockers, setBlockers] = useState(today?.blockers || "");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const save = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      await onSave(learned, blockers);
      setEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  if (!a.canCheckIn) return null;
  return (
    <section className={`rounded-xl shadow-sm p-5 ${done && !editing ? "bg-green-50 border border-green-200" : "bg-white"}`}>
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-bold text-gray-900">Today · {fmtDay(a.today)}</h2>
        {done && <span className="text-sm text-green-700 font-semibold">✓ Present{today.checkedInAt ? ` · ${fmtTime(today.checkedInAt)}` : ""}</span>}
      </div>
      {done && !editing ? (
        <div className="text-sm">
          <p className="whitespace-pre-wrap text-gray-800">{today.learned}</p>
          {today.blockers && <p className="mt-1 text-amber-700"><strong>Stuck on:</strong> {today.blockers}</p>}
          <button onClick={() => setEditing(true)} className="mt-2 text-indigo-600 text-sm">Edit today's log</button>
        </div>
      ) : (
        <form onSubmit={save} className="space-y-3">
          {saturday && !done && <p className="text-sm text-gray-500">Saturday is your day off 🎉 — a log is optional today.</p>}
          <textarea value={learned} onChange={(e) => setLearned(e.target.value)} rows={3}
            placeholder="What did you do or learn today? e.g. Built the login form, learned React Router loaders…"
            className="w-full border rounded-lg px-3 py-2 text-sm" />
          <input value={blockers} onChange={(e) => setBlockers(e.target.value)} placeholder="Stuck on anything? (optional)"
            className="w-full border rounded-lg px-3 py-2 text-sm" />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div className="flex gap-2">
            <button disabled={busy || learned.trim().length < 20}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg disabled:opacity-50">
              {busy ? "Saving…" : done ? "Save" : "✔ Mark present"}
            </button>
            {done && <button type="button" onClick={() => setEditing(false)} className="px-4 py-2 rounded-lg border">Cancel</button>}
          </div>
          <p className="text-xs text-gray-400">Once a day, any time before midnight. Missed days can't be filled in later.</p>
        </form>
      )}
    </section>
  );
}
