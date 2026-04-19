import { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const units = [
  {
    unit: "Unit 1", title: "Introduction to Digital Marketing", hours: "2 Hrs.",
    topics: [
      "Defining digital marketing",
      "Traditional marketing vs. digital marketing",
      "Relevance of digital marketing",
      "The 3i Principle",
    ],
  },
  {
    unit: "Unit 2", title: "Search Engine Marketing & Optimization (SEO)", hours: "12 Hrs.",
    topics: [
      "Techniques to generate website traffic",
      "Increasing visibility on Google SERP",
      "On-page optimization",
      "Off-page optimization",
      "Pay-Per-Click (PPC) advertising",
      "Google AdWords",
    ],
  },
  {
    unit: "Unit 3", title: "Social Media Marketing (SMM)", hours: "10 Hrs.",
    topics: [
      "Types, forms, and stakeholders of SMM",
      "Choosing the right platform",
      "Various SMM strategies",
      "Analysis of social media performance",
    ],
  },
  {
    unit: "Unit 4", title: "Web Analytics", hours: "6 Hrs.",
    topics: [
      "Analyzing visitor behavior through traffic reports",
      "Traffic sources, page views & conversion rates",
      "Google Analytics: setup, monitoring & analysis",
    ],
  },
  {
    unit: "Unit 5", title: "Email Marketing", hours: "4 Hrs.",
    topics: [
      "Email marketing process",
      "Design and content best practices",
      "Delivery and discovery optimization",
    ],
  },
  {
    unit: "Unit 6", title: "Strategy & Planning", hours: "4 Hrs.",
    topics: [
      "Digital marketing plan and structure",
      "Identifying tools and target audience",
      "Defining objectives and activities",
      "Analysis and ROI measurement",
    ],
  },
  {
    unit: "Unit 7", title: "Affiliate Marketing", hours: "2 Hrs.",
    topics: [
      "Concepts and models of affiliate marketing",
      "Real-world examples and case studies",
    ],
  },
  {
    unit: "Unit 8", title: "Content Marketing", hours: "5 Hrs.",
    topics: [
      "Definition, history, and need for content marketing",
      "Business models and content marketing cases",
      "Epic content marketing strategy",
    ],
  },
];

const outcomes = [
  "Understand digital marketing concepts and differentiate from traditional marketing",
  "Plan and execute real-world digital marketing strategies",
  "Use various digital marketing methods effectively",
  "Understand lead generation and lead funnel concepts",
];

const labWork = [
  "On-page and off-page SEO optimization using industry tools",
  "Hands-on social media marketing with lead generation",
  "PPC campaign setup and management",
  "Google Analytics setup, monitoring, and reporting",
];

export default function DigitalMarketing() {
  const [openUnit, setOpenUnit] = useState(null);
  const totalHours = units.reduce((sum, u) => sum + parseInt(u.hours), 0);

  return (
    <>
      <Helmet>
        <title>Digital Marketing Course Nepal | A1 IT Innovation</title>
        <meta name="description" content="Learn digital marketing in Nepal with A1 IT Innovation. Course covers SEO, social media marketing, Google Analytics, email marketing, content marketing & more. Enroll online." />
        <meta name="keywords" content="digital marketing course Nepal, SEO course Nepal, social media marketing Nepal, Google Analytics training, online marketing course Nepal, A1 IT Innovation courses" />
        <link rel="canonical" href="https://www.a1itinnovation.com.np/courses/digital-marketing" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen">

        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white py-16 px-6">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                📚 Online Course &nbsp;·&nbsp; Self-paced
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Digital Marketing</h1>
              <p className="text-white/90 text-lg mb-6 max-w-xl">
                Master SEO, social media, paid ads, Google Analytics, email marketing, and content strategy — the complete guide to growing any business online.
              </p>
              <div className="flex flex-wrap gap-3 mb-8 text-sm">
                <span className="bg-white/20 px-3 py-1.5 rounded-full">📊 {totalHours}+ Hours</span>
                <span className="bg-white/20 px-3 py-1.5 rounded-full">🧪 Lab Practicals Included</span>
                <span className="bg-white/20 px-3 py-1.5 rounded-full">🎓 Certificate on Completion</span>
                <span className="bg-white/20 px-3 py-1.5 rounded-full">🇳🇵 Available in Nepal</span>
              </div>
              <a
                href="/register"
                className="inline-block bg-white text-pink-600 hover:bg-pink-50 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-colors text-base"
              >
                Enroll Now — Sign Up Free
              </a>
            </div>
            {/* Illustration */}
            <div className="flex-shrink-0">
              <svg viewBox="0 0 300 240" className="w-64 md:w-72" aria-hidden="true">
                <rect width="300" height="240" rx="16" fill="rgba(255,255,255,0.1)"/>
                <rect x="20" y="20" width="260" height="140" rx="10" fill="rgba(255,255,255,0.15)"/>
                <rect x="30" y="110" width="20" height="40" rx="3" fill="#FCD34D"/>
                <rect x="60" y="90" width="20" height="60" rx="3" fill="#F97316"/>
                <rect x="90" y="70" width="20" height="80" rx="3" fill="#EC4899"/>
                <rect x="120" y="55" width="20" height="95" rx="3" fill="#A855F7"/>
                <rect x="150" y="65" width="20" height="85" rx="3" fill="#6366F1"/>
                <rect x="180" y="45" width="20" height="105" rx="3" fill="#22C55E"/>
                <rect x="210" y="80" width="20" height="70" rx="3" fill="#0EA5E9"/>
                <text x="150" y="185" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="white">📈 Growth Analytics</text>
                <rect x="30" y="198" width="80" height="24" rx="8" fill="rgba(255,255,255,0.2)"/>
                <text x="70" y="214" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="white">SEO</text>
                <rect x="120" y="198" width="80" height="24" rx="8" fill="rgba(255,255,255,0.2)"/>
                <text x="160" y="214" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="white">Social Media</text>
                <rect x="210" y="198" width="70" height="24" rx="8" fill="rgba(255,255,255,0.2)"/>
                <text x="245" y="214" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="white">Analytics</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW STATS ── */}
        <section className="bg-white border-b border-gray-100 py-8 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "⏱️", value: `${totalHours}+`, label: "Total Hours" },
              { icon: "📦", value: "8", label: "Course Units" },
              { icon: "🧪", value: "4", label: "Lab Practicals" },
              { icon: "📜", value: "1", label: "Certificate" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── MAIN CONTENT ── */}
          <div className="lg:col-span-2 space-y-10">

            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Course Description</h2>
              <p className="text-gray-600 leading-relaxed">
                This course introduces the core concepts of digital marketing — covering its types, tools, strategies, and analytical aspects.
                You'll learn how to plan and execute campaigns, understand consumer behavior online, and measure results with real data.
              </p>
            </section>

            {/* Outcomes */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
              <ul className="space-y-3">
                {outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                    {o}
                  </li>
                ))}
              </ul>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Curriculum</h2>
              <div className="space-y-2">
                {units.map((u, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenUnit(openUnit === i ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{u.unit}</span>
                        <span className="font-semibold text-gray-800 text-sm">{u.title}</span>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="text-xs text-gray-400 hidden sm:block">{u.hours}</span>
                        <svg className={`w-4 h-4 text-gray-400 transition-transform ${openUnit === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                        </svg>
                      </div>
                    </button>
                    {openUnit === i && (
                      <div className="px-5 pb-4 bg-gray-50 border-t border-gray-100">
                        <ul className="mt-3 space-y-2">
                          {u.topics.map((t, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="text-indigo-400 mt-0.5">▸</span> {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Lab Work */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧪 Laboratory & Practical Work</h2>
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 space-y-2">
                {labWork.map((l, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-indigo-500 font-bold mt-0.5">→</span> {l}
                  </div>
                ))}
              </div>
            </section>

            {/* References */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">📖 References</h2>
              <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                <li>Ian Dodson — <em>The Art of Digital Marketing</em>, Wiley (2016)</li>
                <li>Russ Henneberry & Ryan Deiss — <em>Digital Marketing for Dummies</em>, 2nd Ed., Wiley</li>
                <li>Joe Pulizzi — <em>Epic Content Marketing</em>, McGraw-Hill Education (2014)</li>
              </ul>
            </section>
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sticky top-24">
              <div className="text-center mb-5">
                <span className="text-4xl">📈</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">Digital Marketing</h3>
                <p className="text-gray-500 text-sm mt-1">Online Course · Nepal</p>
              </div>
              <ul className="space-y-3 text-sm text-gray-600 mb-6">
                <li className="flex justify-between"><span className="font-medium text-gray-700">Duration</span> <span>{totalHours}+ Hours</span></li>
                <li className="flex justify-between"><span className="font-medium text-gray-700">Units</span> <span>8 Units</span></li>
                <li className="flex justify-between"><span className="font-medium text-gray-700">Mode</span> <span>Online / In-person</span></li>
                <li className="flex justify-between"><span className="font-medium text-gray-700">Certificate</span> <span>Yes ✅</span></li>
                <li className="flex justify-between"><span className="font-medium text-gray-700">Language</span> <span>Nepali / English</span></li>
              </ul>
              <a
                href="/register"
                className="block w-full text-center bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-md"
              >
                Enroll Now — Free Sign Up
              </a>
              <a href="/contact" className="block w-full text-center text-indigo-600 hover:text-indigo-700 font-medium py-2.5 text-sm mt-2">
                Have questions? Contact Us →
              </a>
            </div>

            {/* Other courses */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Other Courses</p>
              {[
                { href: "/courses/cybersecurity",  icon: "🔐", label: "Cybersecurity" },
                { href: "/courses/devops",          icon: "🐳", label: "DevOps" },
                { href: "/courses/system-design",   icon: "🏗️", label: "System Design" },
              ].map((c) => (
                <a key={c.href} href={c.href} className="flex items-center gap-3 py-2.5 text-sm text-gray-700 hover:text-indigo-600 border-b border-gray-100 last:border-0">
                  <span className="text-xl">{c.icon}</span>
                  <span className="font-medium">{c.label}</span>
                  <svg className="w-3.5 h-3.5 ml-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
