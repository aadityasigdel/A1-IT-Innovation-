import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import { downloadCertificate, openBlob, verifyCertificate } from "../../api/a1";

const fmt = (d) =>
  d ? new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "";

// /internship/certificate — interns download with email + secret code
// /internship/verify?no=A1-INT-… — anyone checks a certificate number (printed on the certificate)
export default function Certificate() {
  const { search, pathname } = useLocation();
  const initialNo = new URLSearchParams(search).get("no") || "";

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [dlError, setDlError] = useState("");
  const [dlOk, setDlOk] = useState("");

  const [certNo, setCertNo] = useState(initialNo);
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState(null);
  const [verifyError, setVerifyError] = useState("");

  const verify = async (no) => {
    if (!no.trim()) return;
    setChecking(true);
    setResult(null);
    setVerifyError("");
    try {
      setResult(await verifyCertificate(no));
    } catch (err) {
      setVerifyError(err.message);
    } finally {
      setChecking(false);
    }
  };

  useEffect(() => {
    if (initialNo) verify(initialNo);
  }, [initialNo]);

  useEffect(() => {
    if (pathname.startsWith("/internship/verify")) {
      document.getElementById("verify")?.scrollIntoView();
    }
  }, [pathname]);

  const download = async (e) => {
    e.preventDefault();
    setDlError("");
    setDlOk("");
    if (!email.trim() || !code.trim()) {
      setDlError("Enter your email and certificate code");
      return;
    }
    setBusy(true);
    try {
      const blob = await downloadCertificate(email.trim(), code.trim());
      openBlob(blob, "A1-IT-Innovation-Internship-Certificate.pdf", true);
      setDlOk("Your certificate is downloading. Congratulations! 🎉");
    } catch (err) {
      setDlError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const input =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none";

  return (
    <>
      <Helmet>
        <title>Internship Certificate – Download & Verify | A1 IT Innovation</title>
        <meta
          name="description"
          content="A1 IT Innovation interns can download their internship certificate with their email and secret code. Employers can verify any A1 IT Innovation internship certificate number."
        />
        <link rel="canonical" href="https://www.a1itinnovation.com.np/internship/certificate" />
      </Helmet>
      <Navigation />

      <main className="bg-gradient-to-b from-indigo-50 to-white min-h-screen py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Internship Certificate</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Completed at least 2 months of your internship? Download your certificate with the email you applied with
              and the secret code we emailed you when your internship was approved.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Download */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-1">🎓 Download my certificate</h2>
              <p className="text-sm text-gray-500 mb-6">For A1 IT Innovation interns.</p>
              <form onSubmit={download} className="space-y-4">
                <div>
                  <label htmlFor="cert-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input id="cert-email" type="email" autoComplete="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} className={input} placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="cert-code" className="block text-sm font-medium text-gray-700 mb-1">Secret certificate code</label>
                  <input id="cert-code" type="text" autoComplete="off" value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    className={`${input} font-mono tracking-widest`} placeholder="XXXX-XXXX" />
                </div>
                {dlError && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{dlError}</p>}
                {dlOk && <p className="text-sm text-green-700 bg-green-50 rounded-lg px-3 py-2">{dlOk}</p>}
                <button type="submit" disabled={busy}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors">
                  {busy ? "Preparing…" : "Download certificate (PDF)"}
                </button>
                <p className="text-xs text-gray-500">
                  Lost your code? Email{" "}
                  <a href="mailto:info@a1itinnovation.com.np" className="text-indigo-600">info@a1itinnovation.com.np</a>{" "}
                  from the same email address and we will send a new one.
                </p>
              </form>
            </section>

            {/* Verify */}
            <section id="verify" className="bg-white rounded-xl shadow-lg p-8 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900 mb-1">✅ Verify a certificate</h2>
              <p className="text-sm text-gray-500 mb-6">For employers and colleges. The number is printed on the certificate.</p>
              <form onSubmit={(e) => { e.preventDefault(); verify(certNo); }} className="space-y-4">
                <div>
                  <label htmlFor="cert-no" className="block text-sm font-medium text-gray-700 mb-1">Certificate number</label>
                  <input id="cert-no" type="text" value={certNo} onChange={(e) => setCertNo(e.target.value.toUpperCase())}
                    className={`${input} font-mono`} placeholder="A1-INT-2026-0001" />
                </div>
                <button type="submit" disabled={checking}
                  className="w-full border border-indigo-600 text-indigo-700 hover:bg-indigo-50 disabled:opacity-60 font-semibold py-3 rounded-lg transition-colors">
                  {checking ? "Checking…" : "Verify"}
                </button>
              </form>
              {verifyError && (
                <p className="mt-4 text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">❌ {verifyError}</p>
              )}
              {result && (
                <div className="mt-5 border border-green-200 bg-green-50 rounded-lg p-4 text-sm text-gray-800 space-y-1">
                  <p className="font-bold text-green-700">✔ Valid certificate</p>
                  <p><span className="text-gray-500">Number:</span> <span className="font-mono">{result.certNo}</span></p>
                  <p><span className="text-gray-500">Name:</span> <strong>{result.name}</strong></p>
                  <p><span className="text-gray-500">Internship:</span> {result.domain}</p>
                  <p><span className="text-gray-500">Period:</span> {fmt(result.startDate)} – {fmt(result.endDate)}</p>
                  <p><span className="text-gray-500">Issued:</span> {fmt(result.issuedAt)}</p>
                </div>
              )}
            </section>
          </div>

          <p className="text-center text-sm text-gray-500 mt-10">
            Not an intern yet?{" "}
            <a href="/services/internship" className="text-indigo-600 font-semibold hover:underline">Apply for a free internship</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
