import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import { openBlob, trackAgreementFile, trackCertificate, trackGet, trackUpload } from "../../api/a1";

// /internship/track/:token — the student's own page (link in every mail): where the application is,
// agreement download + signed agreement / ID upload, day count, and the certificate.

const fmt = (d) =>
  d ? new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "";

const STEPS = [
  { key: "APPLIED", title: "Application received", text: "We have your CV and are reviewing it." },
  { key: "CONTACTED", title: "We talked", text: "Our team contacted you about the internship." },
  { key: "AGREEMENT_SENT", title: "Sign the agreement", text: "Download, sign and upload it with your ID." },
  { key: "DOCS_RECEIVED", title: "Documents received", text: "We are checking your documents." },
  { key: "APPROVED", title: "Internship running", text: "Work on your tasks and keep your daily log." },
  { key: "COMPLETED", title: "Completed", text: "Congratulations! Download your certificate." },
];
const ORDER = STEPS.map((s) => s.key);

function FileInput({ label, hint, required, current, onChange }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {hint && <span className="block text-xs text-gray-500 mb-1">{hint}</span>}
      {current && <span className="block text-xs text-green-700 mb-1">✓ Uploaded: {current} (choose a file only to replace it)</span>}
      <input type="file" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
        onChange={(e) => onChange(e.target.files?.[0] || null)}
        className="block w-full text-sm text-gray-700 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:text-indigo-700" />
    </label>
  );
}

// The page body; also used inside the intern portal (portal.a1itinnovation.com.np)
export function TrackContent({ token, onChange }) {
  const [page, setPage] = useState(null);
  const [error, setError] = useState("");
  const [signed, setSigned] = useState(null);
  const [idFront, setIdFront] = useState(null);
  const [idBack, setIdBack] = useState(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const [uploadError, setUploadError] = useState("");

  const load = useCallback(async () => {
    try {
      const p = await trackGet(token);
      setPage(p);
      onChange?.(p);
    } catch (err) {
      setError(err.message);
    }
  }, [token, onChange]);

  useEffect(() => { load(); }, [load]);

  const upload = async (e) => {
    e.preventDefault();
    setUploadError("");
    setMsg("");
    const big = [signed, idFront, idBack].find((f) => f && f.size > 10 * 1024 * 1024);
    if (big) {
      setUploadError(`${big.name} is bigger than 10 MB`);
      return;
    }
    const fd = new FormData();
    if (signed) fd.append("signed", signed);
    if (idFront) fd.append("idFront", idFront);
    if (idBack) fd.append("idBack", idBack);
    setBusy(true);
    try {
      setPage(await trackUpload(token, fd));
      setSigned(null);
      setIdFront(null);
      setIdBack(null);
      e.target.reset();
      setMsg("Thank you! Your documents are uploaded. We will check them and let you know.");
    } catch (err) {
      setUploadError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const download = async (fn, name) => {
    try {
      openBlob(await fn(), name, true);
    } catch (err) {
      alert(err.message);
    }
  };

  const closed = page && (page.status === "REJECTED" || page.status === "TERMINATED");
  const current = page ? ORDER.indexOf(page.status) : -1;

  return (
        <div className="max-w-3xl mx-auto">
          {error && (
            <div className="bg-white rounded-xl shadow p-8 text-center">
              <p className="text-red-600 font-semibold mb-2">{error}</p>
              <p className="text-gray-600 text-sm">
                Please use the latest link from our email, or contact{" "}
                <a href="mailto:info@a1itinnovation.com.np" className="text-indigo-600">info@a1itinnovation.com.np</a>.
              </p>
            </div>
          )}
          {!page && !error && <p className="text-center text-gray-500">Loading…</p>}

          {page && (
            <>
              <div className="text-center mb-8">
                <p className="text-sm text-indigo-600 font-semibold">{page.domain} Internship</p>
                <h1 className="text-3xl font-bold text-gray-900">Hi {page.fullName.split(" ")[0]} 👋</h1>
                <p className="text-gray-500 text-sm mt-1">Applied on {fmt(page.appliedAt)} · keep this page link private</p>
              </div>

              {closed ? (
                <div className="bg-white rounded-xl shadow p-8 text-center text-gray-700">
                  {page.status === "REJECTED"
                    ? "Thank you for applying. We are not able to offer you a place this time. Keep learning — you are welcome to apply again later."
                    : "This internship has ended. For questions, email info@a1itinnovation.com.np."}
                </div>
              ) : (
                <>
                  {/* Timeline */}
                  <ol className="bg-white rounded-xl shadow p-6 mb-6 space-y-4">
                    {STEPS.map((s, idx) => {
                      const done = idx < current || (idx === current && s.key === "COMPLETED");
                      const now = idx === current && s.key !== "COMPLETED";
                      return (
                        <li key={s.key} className="flex gap-3">
                          <span className={`mt-0.5 w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-sm font-bold ${
                            done ? "bg-green-500 text-white" : now ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-500"}`}>
                            {done ? "✓" : idx + 1}
                          </span>
                          <div>
                            <p className={`font-semibold ${now ? "text-indigo-700" : done ? "text-gray-900" : "text-gray-400"}`}>{s.title}</p>
                            {(now || (done && s.key === "COMPLETED")) && <p className="text-sm text-gray-600">{s.text}</p>}
                          </div>
                        </li>
                      );
                    })}
                  </ol>

                  {/* Onboarding: agreement + documents */}
                  {page.canUpload && (
                    <section className="bg-white rounded-xl shadow p-6 mb-6">
                      <h2 className="text-lg font-bold text-gray-900 mb-3">📝 Agreement & documents</h2>
                      {page.docsNote && (
                        <p className="mb-4 text-sm bg-amber-50 border border-amber-200 text-amber-900 rounded-lg px-3 py-2">
                          <strong>Please upload again:</strong> {page.docsNote}
                        </p>
                      )}
                      {page.status === "DOCS_RECEIVED" && !page.docsNote && (
                        <p className="mb-4 text-sm bg-green-50 text-green-800 rounded-lg px-3 py-2">
                          ✓ We received your documents on {fmt(page.docsSubmittedAt)} and are checking them. You can still replace a file below.
                        </p>
                      )}
                      <p className="text-sm text-gray-700 mb-2">1. Download, read and sign:</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {page.agreements.map((a) => (
                          <button key={a.id} onClick={() => download(() => trackAgreementFile(token, a.id), a.fileName)}
                            className="px-3 py-2 rounded-lg border border-indigo-200 text-indigo-700 text-sm hover:bg-indigo-50">
                            ⬇ {a.title}
                          </button>
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 mb-3">2. Upload (PDF, JPG or PNG, max 10 MB each):</p>
                      <form onSubmit={upload} className="space-y-4">
                        <FileInput label="Signed agreement" required={!page.signedName} current={page.signedName}
                          hint="A scan or a clear photo of every signed page (a PDF is best)." onChange={setSigned} />
                        <FileInput label="Citizenship / ID card — front" required={!page.idFrontName} current={page.idFrontName}
                          onChange={setIdFront} />
                        <FileInput label="Citizenship / ID card — back" current={page.idBackName} onChange={setIdBack} />
                        {uploadError && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{uploadError}</p>}
                        {msg && <p className="text-sm text-green-700 bg-green-50 rounded-lg px-3 py-2">{msg}</p>}
                        <button disabled={busy || (!signed && !idFront && !idBack)}
                          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold py-3 rounded-lg">
                          {busy ? "Uploading…" : "Upload documents"}
                        </button>
                      </form>
                    </section>
                  )}

                  {/* Running / completed */}
                  {(page.status === "APPROVED" || page.status === "COMPLETED") && (
                    <section className="bg-white rounded-xl shadow p-6 mb-6">
                      <h2 className="text-lg font-bold text-gray-900 mb-3">🚀 Your internship</h2>
                      <p className="text-sm text-gray-700">Started on <strong>{fmt(page.startDate)}</strong>
                        {page.status === "COMPLETED" && page.endDate ? <> · finished on <strong>{fmt(page.endDate)}</strong></> : null}</p>
                      {page.dayNumber != null && page.status === "APPROVED" && (
                        <div className="mt-4">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Day {page.dayNumber}</span><span>Certificate from {fmt(page.certificateFrom)}</span>
                          </div>
                          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-600 rounded-full"
                              style={{ width: `${Math.min(100, Math.round((page.dayNumber / Math.max(1, page.totalDays)) * 100))}%` }} />
                          </div>
                        </div>
                      )}
                      <div className="mt-5">
                        {page.certificateReady ? (
                          <button onClick={() => download(() => trackCertificate(token), "A1-IT-Innovation-Internship-Certificate.pdf")}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg">
                            🎓 Download my certificate (PDF)
                          </button>
                        ) : (
                          <p className="text-sm text-gray-500">Your certificate will appear here on {fmt(page.certificateFrom)}.</p>
                        )}
                        {page.certNo && (
                          <p className="text-xs text-gray-500 mt-2">
                            Certificate no. <span className="font-mono">{page.certNo}</span> ·{" "}
                            <a className="text-indigo-600" href={`/internship/verify?no=${page.certNo}`}>verify link</a> (share with employers)
                          </p>
                        )}
                      </div>
                    </section>
                  )}
                </>
              )}

              <p className="text-center text-sm text-gray-500">
                Questions? <a href="mailto:info@a1itinnovation.com.np" className="text-indigo-600">info@a1itinnovation.com.np</a> ·{" "}
                <a href="/services/internship#policies" className="text-indigo-600">Internship policies</a>
              </p>
            </>
          )}
        </div>
  );
}

export default function Track() {
  const { token } = useParams();
  return (
    <>
      <Helmet>
        <title>My Internship | A1 IT Innovation</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigation />
      <main className="bg-gradient-to-b from-indigo-50 to-white min-h-screen py-12 px-4">
        <TrackContent token={token} />
      </main>
      <Footer />
    </>
  );
}
