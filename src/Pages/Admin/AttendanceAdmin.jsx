import { useCallback, useEffect, useState } from "react";
import { adminAttendanceDay, adminAttendanceOf, whatsappUrl } from "../../api/a1";
import { AttendanceCalendar, AttendanceStats } from "../../Portal/Attendance";

// Who checked in on a day (default today), their logs, and each intern's full history.

const today = () => {
  // Nepal date (UTC+5:45), so the admin sees the same "today" as the server
  const d = new Date(Date.now() + (5 * 60 + 45) * 60_000);
  return d.toISOString().slice(0, 10);
};
const BADGE = {
  PRESENT: "bg-green-100 text-green-800",
  ABSENT: "bg-red-100 text-red-700",
  PENDING: "bg-amber-100 text-amber-800",
  OFF: "bg-gray-200 text-gray-600",
  NOT_STARTED: "bg-gray-100 text-gray-500",
};
const LABEL = { PRESENT: "✓ Present", ABSENT: "Absent", PENDING: "Not yet", OFF: "Saturday off", NOT_STARTED: "Not started" };

function History({ internshipId }) {
  const [a, setA] = useState(null);
  useEffect(() => { adminAttendanceOf(internshipId).then(setA).catch((err) => alert(err.message)); }, [internshipId]);
  if (!a) return <p className="text-sm text-gray-500">Loading…</p>;
  if (a.days.length === 0) return <p className="text-sm text-gray-500">No days yet.</p>;
  return (
    <div className="space-y-3">
      <AttendanceStats a={a} />
      <AttendanceCalendar a={a} />
    </div>
  );
}

export function AttendanceTab() {
  const [date, setDate] = useState(today());
  const [rows, setRows] = useState(null);
  const [open, setOpen] = useState(null);
  const load = useCallback(async () => {
    setRows(null);
    try { setRows(await adminAttendanceDay(date)); } catch (err) { alert(err.message); setRows([]); }
  }, [date]);
  useEffect(() => { load(); }, [load]);

  const present = (rows || []).filter((r) => r.status === "PRESENT").length;
  const missing = (rows || []).filter((r) => r.status === "PENDING" || r.status === "ABSENT");
  const remind = (r) =>
    whatsappUrl(r.phone, `Hi ${r.fullName.split(" ")[0]}, please don't forget today's check-in and learning log in the A1 intern portal: https://portal.a1itinnovation.com.np`);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <input type="date" value={date} max={today()} onChange={(e) => setDate(e.target.value)} className="border rounded px-2 py-1.5 text-sm" />
        <button onClick={() => setDate(today())} className="px-3 py-1.5 rounded border text-sm">Today</button>
        {rows && <p className="text-sm text-gray-600">{present} / {rows.length} running interns checked in{missing.length ? ` · ${missing.length} missing` : ""}</p>}
      </div>
      {rows === null && <p className="text-sm text-gray-500">Loading…</p>}
      {rows && rows.length === 0 && <p className="text-sm text-gray-500">No running interns.</p>}
      <div className="space-y-3">
        {(rows || []).map((r) => (
          <div key={r.internshipId} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <button onClick={() => setOpen(open === r.internshipId ? null : r.internshipId)} className="text-left">
                <p className="font-semibold text-gray-900">
                  {r.fullName} <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${BADGE[r.status]}`}>{LABEL[r.status]}</span>
                </p>
                <p className="text-xs text-gray-500">{r.domain} · {r.percent}% attendance · 🔥 {r.streak} · {r.absent} absent</p>
              </button>
              {(r.status === "PENDING" || r.status === "ABSENT") && date === today() && (
                <a href={remind(r)} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded border border-green-200 text-green-700 text-sm">💬 Remind</a>
              )}
            </div>
            {r.learned && (
              <div className="mt-2 text-sm">
                <p className="whitespace-pre-wrap text-gray-800">{r.learned}</p>
                {r.blockers && <p className="mt-1 text-amber-700"><strong>Stuck on:</strong> {r.blockers}</p>}
              </div>
            )}
            {open === r.internshipId && <div className="mt-4 border-t pt-4"><History internshipId={r.internshipId} /></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
