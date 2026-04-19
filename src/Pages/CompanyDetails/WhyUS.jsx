import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const stats = [
  { value: "20+", label: "Clients Served",    icon: "🤝" },
  { value: "19+", label: "Projects Delivered", icon: "🚀" },
  { value: "4+",  label: "Years Active",        icon: "📅" },
  { value: "500+",label: "Students Trained",    icon: "🎓" },
];

const forBusinesses = [
  {
    icon: "💰",
    color: "bg-green-100 text-green-700",
    title: "Budget-Friendly IT Solutions",
    desc: "Enterprise-grade web, mobile, and AI solutions built within your budget. We're Nepal's most affordable trusted IT partner — no compromise on quality.",
  },
  {
    icon: "💡",
    color: "bg-yellow-100 text-yellow-700",
    title: "Free Technical Consultation",
    desc: "Starting a new product or startup? We give free technical advice on technology stack, architecture, and strategy — so you don't waste a single rupee.",
  },
  {
    icon: "🤖",
    color: "bg-purple-100 text-purple-700",
    title: "Custom AI Model Development",
    desc: "One of Nepal's best AI companies. We build custom AI models for automation, predictive analytics, and intelligent chatbot solutions tailored to your business.",
  },
  {
    icon: "⚙️",
    color: "bg-orange-100 text-orange-700",
    title: "End-to-End DevOps & Infrastructure",
    desc: "From CI/CD pipelines to Kubernetes deployment and 24/7 server monitoring — we manage your entire infrastructure so you can focus on your product.",
  },
  {
    icon: "🇳🇵",
    color: "bg-red-100 text-red-700",
    title: "Nationwide Reach & Credibility",
    desc: "Trusted from Damak and Jhapa to Kathmandu and Pokhara — businesses, startups, and institutions across all of Nepal rely on A1 IT Innovation.",
  },
  {
    icon: "🔒",
    color: "bg-blue-100 text-blue-700",
    title: "Security-First Development",
    desc: "Every product we build includes security audits, vulnerability testing, and compliance monitoring — protecting your data and your users from day one.",
  },
];

const forStudents = [
  {
    icon: "🎓",
    color: "bg-indigo-100 text-indigo-700",
    title: "100% Free IT Internship",
    desc: "No fees, no barriers. If you have basic knowledge in React, Flutter, Node.js, or AI — you can join our internship and work on real live projects.",
  },
  {
    icon: "🛠️",
    color: "bg-teal-100 text-teal-700",
    title: "Hands-On Real Project Experience",
    desc: "You won't be making dummy apps. You'll contribute to actual client projects — building your portfolio and your confidence at the same time.",
  },
  {
    icon: "👨‍🏫",
    color: "bg-pink-100 text-pink-700",
    title: "Mentorship from Industry Experts",
    desc: "Every intern gets direct mentorship from our senior developers and engineers — the kind of guidance that turns students into professionals.",
  },
  {
    icon: "🏫",
    color: "bg-amber-100 text-amber-700",
    title: "Workshops at Your College",
    desc: "We visit schools and colleges across Nepal with workshops on web development, mobile apps, cybersecurity, and AI — bringing real tech education to you.",
  },
  {
    icon: "📈",
    color: "bg-cyan-100 text-cyan-700",
    title: "Career Growth & Placement Support",
    desc: "Our interns get certificates, portfolio projects, LinkedIn recommendations, and direct exposure to hiring networks — giving your career a real head start.",
  },
  {
    icon: "🤝",
    color: "bg-green-100 text-green-700",
    title: "Inclusive & Collaborative Culture",
    desc: "We believe the best ideas come from diverse teams. Flexible schedules, remote-friendly work, open communication — built for students who are serious about tech.",
  },
];

export default function WhyUs() {
  return (
    <>
      <Helmet>
        <title>Why Choose A1 IT Innovation Nepal | Trusted IT Company</title>
        <meta name="description" content="Discover why 20+ businesses and 500+ students across Nepal trust A1 IT Innovation for affordable IT solutions, free internships, AI development, DevOps, and tech workshops." />
        <meta name="keywords" content="why A1 IT Innovation, trusted IT company Nepal, free internship Nepal, affordable IT solutions Nepal, AI company Nepal, IT workshops Nepal, tech mentorship Nepal" />
        <meta property="og:title" content="Why Choose A1 IT Innovation | Nepal's Trusted IT Partner" />
        <meta property="og:description" content="Affordable IT solutions, free internships, custom AI, and DevOps — discover why Nepal trusts A1 IT Innovation." />
        <meta property="og:url" content="https://www.a1itinnovation.com.np/company/why-us" />
        <link rel="canonical" href="https://www.a1itinnovation.com.np/company/why-us" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen">

        {/* ── HERO ── */}
        <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 py-20">

            {/* Text */}
            <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full w-fit mx-auto lg:mx-0">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                Nepal's Most Trusted IT Partner
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Why Choose{" "}
                <span className="text-indigo-600">A1 IT Innovation?</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Whether you're a business looking for affordable world-class IT solutions, or a student hungry to break into tech — A1 IT Innovation is built for you.
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">📍 Damak, Jhapa & Kathmandu</span>
                <span className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">🎓 Free Internship Program</span>
                <span className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">⭐ Since 2021</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
                <a href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-md transition-colors duration-300 text-center inline-flex items-center justify-center gap-2">
                  Get Free Consultation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
                <a href="/services/internship" className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-semibold px-8 py-3.5 rounded-lg shadow-sm transition-colors duration-300 text-center">
                  Apply for Internship
                </a>
              </div>
            </div>

            {/* Hero SVG */}
            <div className="flex-1 flex justify-center">
              <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg drop-shadow-xl" aria-label="Why choose A1 IT Innovation illustration">
                {/* Background card */}
                <rect x="20" y="20" width="440" height="360" rx="20" fill="#F8FAFF" stroke="#E0E7FF" strokeWidth="1.5"/>

                {/* Center emblem */}
                <circle cx="240" cy="185" r="68" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="2"/>
                <circle cx="240" cy="185" r="52" fill="#4F46E5"/>
                <text x="240" y="179" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="14" fontWeight="800" fill="white">A1 IT</text>
                <text x="240" y="197" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="10" fill="#C7D2FE">Innovation</text>
                <text x="240" y="212" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fill="#A5B4FC">Since 2021</text>

                {/* Node — Businesses */}
                <circle cx="100" cy="100" r="38" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="1.5"/>
                <text x="100" y="95" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="18">💼</text>
                <text x="100" y="112" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#15803D">For Business</text>
                <line x1="135" y1="128" x2="196" y2="156" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="5 3"/>

                {/* Node — Students */}
                <circle cx="380" cy="100" r="38" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="1.5"/>
                <text x="380" y="95" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="18">🎓</text>
                <text x="380" y="112" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#92400E">For Students</text>
                <line x1="345" y1="128" x2="284" y2="156" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="5 3"/>

                {/* Node — Nepal */}
                <circle cx="100" cy="295" r="38" fill="#EDE9FE" stroke="#C4B5FD" strokeWidth="1.5"/>
                <text x="100" y="289" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="18">🇳🇵</text>
                <text x="100" y="306" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#5B21B6">Nepal-Wide</text>
                <line x1="135" y1="272" x2="196" y2="215" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="5 3"/>

                {/* Node — AI */}
                <circle cx="380" cy="295" r="38" fill="#FCE7F3" stroke="#F9A8D4" strokeWidth="1.5"/>
                <text x="380" y="289" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="18">🤖</text>
                <text x="380" y="306" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#9D174D">AI & DevOps</text>
                <line x1="345" y1="272" x2="284" y2="215" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="5 3"/>

                {/* Trust badge */}
                <rect x="155" y="335" width="170" height="30" rx="15" fill="#4F46E5"/>
                <text x="240" y="354" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700" fill="white">✅ Trusted by 20+ Clients</text>

                {/* Floating pill top */}
                <rect x="170" y="28" width="140" height="24" rx="12" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="1"/>
                <text x="240" y="44" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="600" fill="#15803D">🚀 Quality First, Always</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="bg-indigo-600 py-10">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-indigo-200 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOR BUSINESSES ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">For Businesses & Startups</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Businesses Choose Us</h2>
              <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4"/>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                From Kathmandu startups to Jhapa enterprises — we deliver reliable, affordable IT solutions that actually move your business forward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {forBusinesses.map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 group">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DIVIDER BANNER ── */}
        <section className="bg-indigo-900 py-14 text-center px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-indigo-300 text-sm font-semibold uppercase tracking-widest mb-3">For Students & Interns</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Tech Career — For Free</h2>
            <p className="text-indigo-300 text-lg max-w-xl mx-auto">
              No fees. No barriers. Just real projects, real mentors, and a real shot at a career in tech — right here in Nepal.
            </p>
          </div>
        </section>

        {/* ── FOR STUDENTS ── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {forStudents.map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 group">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <section className="py-16 bg-white border-t border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-10">What Makes Us Different</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: "⚡", label: "Agile & Fast Delivery" },
                { icon: "🌐", label: "Remote-Friendly Work" },
                { icon: "🧠", label: "Expert Mentorship" },
                { icon: "📍", label: "Local + Global Standards" },
              ].map((t, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-2xl">
                    {t.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-700">{t.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-indigo-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
              Whether you're launching a product or starting your tech career — A1 IT Innovation is your best next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-lg transition duration-300 shadow-lg">
                Get Free Consultation
              </a>
              <a href="/services/internship" className="border border-indigo-400 hover:border-white text-indigo-200 hover:text-white font-semibold px-8 py-3.5 rounded-lg transition duration-300">
                Apply for Internship
              </a>
              <a href="/company/career" className="border border-gray-500 hover:border-gray-300 text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-lg transition duration-300">
                Explore Careers
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
