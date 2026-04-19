import { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const units = [
  {
    unit: "Unit 1", title: "Cybersecurity", hours: "4 Hrs.",
    topics: [
      "NIST Cybersecurity Framework",
      "Cybersecurity Management Process",
      "Cybersecurity Threats and Attacks",
      "Cyber Kill Chain",
      "Vulnerability Assessment",
      "Penetration Testing & Ethical Hacking",
      "Cyber Law: Global and Local",
    ],
  },
  {
    unit: "Unit 2", title: "Digital Forensics", hours: "10 Hrs.",
    topics: [
      "Cybercrime attack modes and examples (Malware, Ransomware, Phishing, DDoS, SQL Injection, etc.)",
      "Digital Forensic Categories: Computer, Mobile, Network, Database, Data Analysis",
      "Digital Forensic Users: Law Enforcement, Civil Litigation, Intelligence",
      "Digital Forensic Investigation Types: Public and Private",
    ],
  },
  {
    unit: "Unit 3", title: "Computer Forensics Lab Requirements", hours: "4 Hrs.",
    topics: [
      "Physical facility requirements and environment controls",
      "Hardware equipment and forensic workstations",
      "Commercial and open-source forensic software",
      "Validation and verification of forensic tools",
      "Lab accreditation steps and bodies",
      "Policies, procedures, and documentation",
    ],
  },
  {
    unit: "Unit 4", title: "Forensic Process", hours: "Full Unit",
    topics: [
      "Forensics Readiness and the EDRM Reference Model",
      "Digital Evidence: types, locations, chain of custody",
      "Digital Forensics Examination Process: Seizure, Acquisition, Analysis, Reporting",
      "Data Representation: Decimal, Binary, Hex",
      "File Systems: NTFS, FAT; file metadata and timestamps",
      "Hash Analysis and data storage on HDD",
      "Initial Response: Search, Seizure, Subpoena, Search Warrant",
      "First Responder tasks, order of volatility, documenting crime scene",
      "Acquiring Volatile Memory (RAM): live acquisition using various tools",
      "Acquiring Non-Volatile Memory: physical, logical, sparse acquisition",
      "Analyzing Hard Drive & RAM Forensic Images",
      "Timeline Analysis, File Recovery, Data Carving",
      "Registry Analysis: USB forensics, MRU list, network analysis",
      "Windows Features Forensics: Prefetch, Thumbnails, LNK Files, Event Logs",
      "Web Browser Forensics: Edge, Firefox, Chrome",
      "Email Forensics: headers, sender geolocation, webmail investigation",
      "Mobile Device Forensics: acquisition procedures and tools",
      "Cloud Forensics: legal and technical challenges, acquisition and investigation",
    ],
  },
];

const outcomes = [
  "Understand core cybersecurity concepts and frameworks (NIST)",
  "Apply penetration testing and ethical hacking techniques",
  "Perform digital forensic investigations on computers, mobiles, and networks",
  "Acquire and analyze volatile and non-volatile digital evidence",
  "Conduct cloud, email, and web browser forensics",
  "Understand cyber law — both global and Nepal-specific",
];

export default function Cybersecurity() {
  const [openUnit, setOpenUnit] = useState(null);

  return (
    <>
      <Helmet>
        <title>Cybersecurity Course Nepal | Ethical Hacking & Digital Forensics | A1 IT Innovation</title>
        <meta name="description" content="Learn cybersecurity and digital forensics in Nepal with A1 IT Innovation. Covers ethical hacking, penetration testing, NIST framework, digital evidence acquisition, mobile forensics, cloud forensics & more." />
        <meta name="keywords" content="cybersecurity course Nepal, ethical hacking Nepal, digital forensics course Nepal, penetration testing Nepal, online cybersecurity training Nepal, A1 IT Innovation" />
        <link rel="canonical" href="https://www.a1itinnovation.com.np/courses/cybersecurity" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen">

        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-slate-900 via-green-900 to-teal-900 text-white py-16 px-6">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                📚 Online Course &nbsp;·&nbsp; Beginner to Advanced
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Cybersecurity &<br/>Digital Forensics</h1>
              <p className="text-white/80 text-lg mb-6 max-w-xl">
                Master ethical hacking, penetration testing, digital forensic investigation, and cyber law — the skills that protect organizations and solve cybercrime.
              </p>
              <div className="flex flex-wrap gap-3 mb-8 text-sm">
                <span className="bg-white/15 px-3 py-1.5 rounded-full">🛡️ Ethical Hacking</span>
                <span className="bg-white/15 px-3 py-1.5 rounded-full">🔍 Digital Forensics</span>
                <span className="bg-white/15 px-3 py-1.5 rounded-full">☁️ Cloud Forensics</span>
                <span className="bg-white/15 px-3 py-1.5 rounded-full">🎓 Certificate Included</span>
              </div>
              <a
                href="/register"
                className="inline-block bg-green-400 hover:bg-green-300 text-gray-900 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-colors text-base"
              >
                Enroll Now — Sign Up Free
              </a>
            </div>
            {/* SVG Illustration */}
            <div className="flex-shrink-0">
              <svg viewBox="0 0 280 220" className="w-64 md:w-72" aria-hidden="true">
                <rect width="280" height="220" rx="16" fill="rgba(255,255,255,0.05)"/>
                <circle cx="140" cy="90" r="55" fill="none" stroke="rgba(74,222,128,0.3)" strokeWidth="2" strokeDasharray="6 4"/>
                <circle cx="140" cy="90" r="38" fill="rgba(74,222,128,0.1)" stroke="rgba(74,222,128,0.5)" strokeWidth="1.5"/>
                <text x="140" y="85" textAnchor="middle" fontFamily="system-ui" fontSize="28">🛡️</text>
                <text x="140" y="107" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(74,222,128,0.9)">PROTECTED</text>
                <rect x="20" y="155" width="240" height="50" rx="8" fill="rgba(0,0,0,0.3)"/>
                <text x="30" y="175" fontFamily="monospace" fontSize="8" fill="#4ADE80">$ nmap -sV 192.168.1.1</text>
                <text x="30" y="188" fontFamily="monospace" fontSize="8" fill="#86EFAC">✓ Scan complete — 3 open ports</text>
                <text x="30" y="199" fontFamily="monospace" fontSize="8" fill="#6EE7B7">🔐 Vulnerability: None detected</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW STATS ── */}
        <section className="bg-white border-b border-gray-100 py-8 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "📦", value: "4",       label: "Course Units" },
              { icon: "🔍", value: "5+",      label: "Forensic Categories" },
              { icon: "🛠️", value: "10+",     label: "Tools Covered" },
              { icon: "📜", value: "1",        label: "Certificate" },
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

          {/* Main */}
          <div className="lg:col-span-2 space-y-10">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Course Description</h2>
              <p className="text-gray-600 leading-relaxed">
                This course introduces cybersecurity concepts with a focus on digital forensics. You'll learn to identify threats, conduct vulnerability assessments, perform ethical hacking, and investigate cybercrime using professional forensic tools and methodologies.
              </p>
            </section>

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
                        <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">{u.unit}</span>
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
                              <span className="text-green-500 mt-0.5">▸</span> {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sticky top-24">
              <div className="text-center mb-5">
                <span className="text-4xl">🔐</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">Cybersecurity</h3>
                <p className="text-gray-500 text-sm mt-1">Online Course · Nepal</p>
              </div>
              <ul className="space-y-3 text-sm text-gray-600 mb-6">
                <li className="flex justify-between"><span className="font-medium text-gray-700">Units</span> <span>4 Units</span></li>
                <li className="flex justify-between"><span className="font-medium text-gray-700">Level</span> <span>Beginner–Advanced</span></li>
                <li className="flex justify-between"><span className="font-medium text-gray-700">Mode</span> <span>Online / In-person</span></li>
                <li className="flex justify-between"><span className="font-medium text-gray-700">Certificate</span> <span>Yes ✅</span></li>
                <li className="flex justify-between"><span className="font-medium text-gray-700">Language</span> <span>Nepali / English</span></li>
              </ul>
              <a
                href="/register"
                className="block w-full text-center bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md"
              >
                Enroll Now — Free Sign Up
              </a>
              <a href="/contact" className="block w-full text-center text-indigo-600 hover:text-indigo-700 font-medium py-2.5 text-sm mt-2">
                Have questions? Contact Us →
              </a>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Other Courses</p>
              {[
                { href: "/courses/digital-marketing", icon: "📈", label: "Digital Marketing" },
                { href: "/courses/devops",             icon: "🐳", label: "DevOps" },
                { href: "/courses/system-design",      icon: "🏗️", label: "System Design" },
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
