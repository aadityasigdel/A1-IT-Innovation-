import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

// Shared layout for product legal pages (privacy policy, terms).
// `sections` is [{ id, title, body }] — numbering and the table of contents are generated from it.
export default function LegalPage({ product, logo, title, description, keywords, canonical, lastUpdated, intro, sections }) {
  const pageTitle = `${title} | ${product} by A1 IT Innovation`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": pageTitle,
          "description": description,
          "url": canonical,
          "publisher": {
            "@type": "Organization",
            "name": "A1 IT Innovation",
            "url": "https://www.a1itinnovation.com.np",
          },
        })}</script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gray-50">

        {/* ── HEADER ── */}
        <section className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center gap-6">
            {logo && (
              <img src={logo} alt={`${product} logo`} width="1024" height="1024" className="w-20 h-20 rounded-2xl shadow-lg ring-1 ring-white/10 flex-shrink-0" />
            )}
            <div>
              <span className="inline-block bg-indigo-700 text-indigo-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                {product} · Legal
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
              <p className="text-indigo-300 text-sm">
                <strong className="text-white">A. One IT Innovation Pvt. Ltd.</strong> (Brand: A1 IT Innovation) &nbsp;·&nbsp; Last Updated: <strong className="text-white">{lastUpdated}</strong>
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">

          {/* ── STICKY TABLE OF CONTENTS ── */}
          <aside className="lg:w-60 flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 p-5 lg:sticky lg:top-24">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contents</p>
              <nav className="space-y-1">
                {sections.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 py-1 transition-colors"
                  >
                    <span className="text-xs text-gray-400 w-4 flex-shrink-0">{i + 1}.</span>
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* ── CONTENT ── */}
          <article className="flex-1 min-w-0 bg-white rounded-xl border border-gray-200 p-6 md:p-8 space-y-10 text-gray-700 leading-relaxed text-[15px]">
            {intro}

            {sections.map((s, i) => (
              <div key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                  {s.title}
                </h2>
                <div className="pl-9 space-y-3">{s.body}</div>
              </div>
            ))}
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}

// Small helpers so the content files stay readable.
export const List = ({ children }) => <ul className="space-y-1.5 list-disc list-inside">{children}</ul>;

export const Note = ({ children }) => (
  <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3 text-emerald-900 text-sm">{children}</div>
);

export const ContactBlock = ({ product }) => (
  <div className="space-y-1 text-sm">
    <p>🏢 <strong>A. One IT Innovation Pvt. Ltd.</strong> (A1 IT Innovation) — developer of {product}</p>
    <p>📍 Damak, Jhapa &nbsp;|&nbsp; Kageshwori Manohara, Kathmandu &nbsp;|&nbsp; Sallaghari, Bhaktapur, Nepal</p>
    <p>✉️ <a href="mailto:info@a1itinnovation.com.np" className="text-indigo-600 hover:underline">info@a1itinnovation.com.np</a></p>
    <p>📱 +977-981-6032025</p>
    <p>🌐 <a href="/contact" className="text-indigo-600 hover:underline">www.a1itinnovation.com.np/contact</a></p>
  </div>
);
