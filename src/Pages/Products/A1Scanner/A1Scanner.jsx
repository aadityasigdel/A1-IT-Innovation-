import { Helmet } from "react-helmet";
import Footer from "../../../components/Footer";
import Navigation from "../../../components/Navigation";
import splashImage from "../../../assets/a1-scanner-logo-light-mode.jpeg";
import logoImage from "../../../assets/a1-scanner-logo-darkmode.jpeg";

// Set this to the Play Store listing once the app is live,
// e.g. "https://play.google.com/store/apps/details?id=np.com.a1itinnovation.scanner"
const PLAY_STORE_URL = "";

const PAGE_URL = "https://www.a1itinnovation.com.np/products/a1-scanner";
// Absolute URL (served from /public) for social share previews and schema — crawlers don't resolve hashed asset paths.
const SHARE_IMAGE = "https://www.a1itinnovation.com.np/a1-scanner-logo.jpeg";
const TITLE = "A1 Scanner – Safe & Secure Offline Document Scanner App | Made in Nepal";
const DESCRIPTION =
  "A1 Scanner is a safe, 100% offline document scanner and PDF tools app made in Nepal. Scan, merge PDF, convert JPG to PNG and compress files on your phone — your documents never go to any server.";

const tools = [
  { icon: "📷", name: "Document Scanner",  desc: "Scan papers, citizenship, certificates and receipts into clean PDFs or images." },
  { icon: "📑", name: "PDF Merge",         desc: "Combine multiple PDFs into a single file in seconds, completely offline." },
  { icon: "🖼️", name: "JPG to PNG",        desc: "Convert images between formats without uploading them anywhere." },
  { icon: "🗜️", name: "Compress Files",    desc: "Reduce PDF and image size for email, online forms and portals." },
  { icon: "📄", name: "Image to PDF",      desc: "Turn photos of documents into a shareable PDF." },
  { icon: "✨", name: "More Tools Coming", desc: "New tools are added regularly — all following the same on-device promise." },
];

const comparison = [
  { label: "Where your file is processed",  cloud: "Uploaded to a remote server",     a1: "On your own phone" },
  { label: "Internet needed to scan / convert", cloud: "Usually yes",                 a1: "No" },
  { label: "Risk of server data leak",       cloud: "Possible",                        a1: "None — no server receives your files" },
  { label: "Account / login required",       cloud: "Often",                           a1: "No" },
  { label: "Who can see your document",      cloud: "You + the service provider",      a1: "Only you" },
];

const audiences = [
  { icon: "🏛️", title: "Government Offices & Palikas", desc: "Handle official letters, applications and records without sending them to outside servers." },
  { icon: "🏦", title: "Banks, Cooperatives & Finance",  desc: "Scan KYC documents and forms while keeping customer data on the device." },
  { icon: "🏢", title: "Businesses & Offices",           desc: "Digitise invoices, contracts and internal papers privately." },
  { icon: "🎓", title: "Students",                       desc: "Scan certificates, marksheets and assignments for admission and online forms." },
  { icon: "👪", title: "Everyone",                       desc: "Citizenship, passport, PAN card, license — scan personal IDs with no worry." },
  { icon: "⚖️", title: "Lawyers & Professionals",        desc: "Work with confidential case files and documents safely." },
];

const faqs = [
  {
    q: "Is A1 Scanner safe for scanning citizenship, passport and other ID documents?",
    a: "Yes. A1 Scanner processes every document on your phone. Your citizenship, passport, PAN card or any other document is never uploaded to our servers or any third-party server, so there is no risk of it leaking from a server.",
  },
  {
    q: "Does A1 Scanner work offline?",
    a: "Yes. Scanning, PDF merge, image conversion and compression all work without an internet connection, because everything runs on your device.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. There is no sign-up or login. Install the app and start using it right away.",
  },
  {
    q: "Who made A1 Scanner?",
    a: "A1 Scanner is a Nepali product built by A. One IT Innovation Pvt. Ltd. (A1 IT Innovation), a software company with offices in Damak, Kathmandu and Bhaktapur.",
  },
  {
    q: "Is A1 Scanner free?",
    a: "Yes, A1 Scanner is currently free to download and use.",
  },
  {
    q: "Can government offices and organisations use A1 Scanner for sensitive documents?",
    a: "A1 Scanner is designed for sensitive documents. Since files never leave the device, organisations keep full control of their data. For organisation-wide deployment or custom features, contact A1 IT Innovation.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "A1 Scanner",
    "operatingSystem": "Android",
    "applicationCategory": "UtilitiesApplication",
    "description": DESCRIPTION,
    "url": PAGE_URL,
    "image": SHARE_IMAGE,
    ...(PLAY_STORE_URL && { "downloadUrl": PLAY_STORE_URL, "installUrl": PLAY_STORE_URL }),
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "NPR" },
    "countriesOfOrigin": { "@type": "Country", "name": "Nepal" },
    "featureList": tools.slice(0, 5).map((t) => t.name).concat("Works 100% offline", "No account required", "No document upload"),
    "privacyPolicy": `${PAGE_URL}/privacy-policy`,
    "author": { "@type": "Organization", "name": "A1 IT Innovation", "url": "https://www.a1itinnovation.com.np" },
    "publisher": { "@type": "Organization", "name": "A. One IT Innovation Pvt. Ltd.", "url": "https://www.a1itinnovation.com.np" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  },
];

function PlayButton({ className = "" }) {
  if (!PLAY_STORE_URL) {
    return (
      <span className={`inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl ${className}`}>
        ▶ Coming soon on Google Play
      </span>
    );
  }
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-white text-indigo-900 font-semibold px-6 py-3 rounded-xl shadow hover:bg-indigo-50 transition-colors ${className}`}
    >
      ▶ Get it on Google Play
    </a>
  );
}

export default function A1Scanner() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="A1 Scanner, safe scanner, safe scanner app, secure document scanner, offline document scanner, offline scanner app, private document scanner, scanner app without upload, no upload scanner, document scanner Nepal, scanner app Nepal, Nepali scanner app, made in Nepal app, Nepali app, PDF scanner Nepal, citizenship scanner, scan citizenship Nepal, PDF merge offline, merge PDF without upload, JPG to PNG offline, compress PDF offline, image compressor offline, image to PDF offline, secure PDF tools, CamScanner alternative Nepal, safe CamScanner alternative, government document scanner Nepal, A1 IT Innovation app" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="A1 Scanner – Safe Offline Document Scanner Made in Nepal" />
        <meta property="og:description" content="Scan, merge PDF, convert and compress — 100% on your phone. Your documents never go to any server." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="A1 IT Innovation" />
        <meta property="og:image" content={SHARE_IMAGE} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={SHARE_IMAGE} />
        <meta name="twitter:title" content="A1 Scanner – Safe Offline Document Scanner Made in Nepal" />
        <meta name="twitter:description" content="Scan, merge PDF, convert and compress — 100% on your phone. Your documents never go to any server." />

        {schema.map((s, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
        ))}
      </Helmet>

      <Navigation />

      <main className="bg-gray-50">

        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white py-16 md:py-20 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block bg-indigo-700 text-indigo-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                🇳🇵 Made in Nepal · by A1 IT Innovation
              </span>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
                A1 Scanner — Safe &amp; Secure Offline Document Scanner
              </h1>
              <p className="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto lg:mx-0 mb-8">
                Scan documents, merge PDFs, convert JPG to PNG and compress files — <strong className="text-white">all on your own phone</strong>.
                Your documents never go to any server, so there is nothing to leak and nothing to steal.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <PlayButton />
                <a href="#how-it-protects" className="inline-flex items-center px-6 py-3 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">
                  How it keeps you safe
                </a>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-indigo-200">
                <span>✅ 100% offline processing</span>
                <span>✅ No account needed</span>
                <span>✅ No document upload</span>
                <span>✅ Free</span>
              </div>
            </div>

            {/* Phone mockup showing the app's splash screen */}
            <div className="mx-auto w-56 md:w-64 rounded-[2.5rem] border-[10px] border-slate-950 bg-slate-950 shadow-2xl shadow-indigo-950/60 ring-1 ring-white/10">
              <img
                src={splashImage}
                alt="A1 Scanner app splash screen — safe offline document scanner powered by A1 IT Innovation"
                width="1024"
                height="1536"
                className="block w-full h-auto rounded-[1.8rem]"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        {/* ── WHY ── */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Your documents belong on your phone — not on someone else&apos;s server</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Most scanner and PDF apps upload your files to a cloud server to process them. That means your citizenship, bank papers or
              office documents sit on a computer you don&apos;t control. At A1 IT Innovation we believe <strong>your documents should be
              processed where they already are — on your own device</strong>. With A1 Scanner, you never have to worry about a server data
              leak or document theft, because no server ever receives your files.
            </p>
          </div>
        </section>

        {/* ── COMPARISON ── */}
        <section id="how-it-protects" className="pb-16 px-6 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Cloud scanner apps vs A1 Scanner</h2>
            <div className="overflow-x-auto bg-white rounded-xl border border-gray-200">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-gray-50 text-gray-900">
                  <tr>
                    <th className="text-left p-4 font-semibold"></th>
                    <th className="text-left p-4 font-semibold">Typical cloud scanner</th>
                    <th className="text-left p-4 font-semibold text-indigo-700">A1 Scanner</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.label} className="border-t border-gray-100">
                      <td className="p-4 font-medium text-gray-900">{row.label}</td>
                      <td className="p-4 text-gray-500">{row.cloud}</td>
                      <td className="p-4 text-emerald-700 font-semibold">✓ {row.a1}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── TOOLS ── */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">All your document tools in one safe app</h2>
            <p className="text-gray-600 text-center mb-10">Every tool runs offline on your phone.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((t) => (
                <div key={t.name} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{t.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{t.name}</h3>
                  <p className="text-gray-600 text-sm">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">Built for sensitive documents in Nepal</h2>
            <p className="text-gray-600 text-center mb-10">From government offices to students — anyone can scan any document without a security concern.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {audiences.map((a) => (
                <div key={a.title} className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="text-3xl mb-3">{a.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{a.title}</h3>
                  <p className="text-gray-600 text-sm">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">How A1 Scanner works</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                ["1", "Open or scan", "Use your camera or pick a file from your phone."],
                ["2", "Processed on-device", "Your phone does all the work — no upload, no internet needed."],
                ["3", "Save or share", "The result is saved on your phone. You decide where it goes."],
              ].map(([n, title, desc]) => (
                <div key={n} className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xl font-bold">{n}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Frequently asked questions</h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group bg-white rounded-xl border border-gray-200 p-5">
                  <summary className="cursor-pointer font-semibold text-gray-900 list-none flex justify-between gap-4">
                    {f.q}
                    <span className="text-indigo-600 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-indigo-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <img src={logoImage} alt="A1 Scanner logo" width="1024" height="1024" loading="lazy" className="w-24 h-24 mx-auto mb-6 rounded-3xl shadow-lg ring-1 ring-white/10" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Scan anything. Share nothing you don&apos;t choose to.</h2>
            <p className="text-indigo-200 mb-8">A safe, Nepali-made scanner for every document.</p>
            <PlayButton />
            <p className="text-sm text-indigo-300 mt-8">
              <a href="/products/a1-scanner/privacy-policy" className="hover:text-white underline">Privacy Policy</a>
              &nbsp;·&nbsp;
              <a href="/products/a1-scanner/terms-and-conditions" className="hover:text-white underline">Terms &amp; Conditions</a>
              &nbsp;·&nbsp;
              <a href="/contact" className="hover:text-white underline">Contact</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
