import { Helmet } from "react-helmet";
import { useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import Brihat from "../assets/brihat.png";
import DamakMultipleCampus from "../assets/Clients/Dmc.png";
import Rolwaling from "../assets/Clients/rolwaling.png";
import Damaktechnical from "../assets/Clients/DT.png";
import Kryzox from "../assets/Clients/KryZone.png";
import Tufan from "../assets/Clients/tufan.png";
import Hamrodokan from "../assets/hamrodokan.png";
import Himalayansanchaya from "../assets/himalayan-sanchaya.png";
import Utkrista from "../assets/utkrista.png";
import GigFine from "../assets/gigfine-logo-img.webp";
import TMeet from "../assets/no-background.png";

// type color map
const typeColors = {
  "Our Product":   "bg-indigo-600 text-white",
  "Web Platform":  "bg-blue-100 text-blue-700",
  "Mobile App":    "bg-green-100 text-green-700",
  "Website":       "bg-purple-100 text-purple-700",
};

const categoryColors = {
  "Gaming":              "bg-pink-100 text-pink-700",
  "Transport":           "bg-yellow-100 text-yellow-700",
  "Culture & Lifestyle": "bg-orange-100 text-orange-700",
  "Business Management": "bg-teal-100 text-teal-700",
  "Education":           "bg-indigo-100 text-indigo-700",
  "Healthcare":          "bg-red-100 text-red-700",
  "EdTech":              "bg-cyan-100 text-cyan-700",
  "Retail & Grocery":    "bg-lime-100 text-lime-700",
  "Ridesharing":         "bg-yellow-100 text-yellow-700",
  "Video Conferencing":  "bg-sky-100 text-sky-700",
};

const projects = [
  {
    img: GigFine,
    title: "GigFine: report ride-sharing problems",
    description: "Had a bad trip on Pathao, Yango, Tufan or Sajilo and no one to tell? GigFine lets riders and passengers post the problem in one place, whichever app it happened on. Our own product.",
    type: "Our Product",
    category: "Ridesharing",
    status: "Live",
    link: "https://gigfine.com/",
  },
  {
    img: TMeet,
    imgBg: "bg-slate-900",
    imgStyle: { transform: "scale(1.9)", transformOrigin: "50% 36%" },
    title: "T-Meet: Nepali video conferencing",
    description: "Video meetings for online classes and business calls, made in Nepal. We built the whole thing, and the meeting data stays with us instead of a foreign provider.",
    type: "Our Product",
    category: "Video Conferencing",
    status: "Live",
    link: "http://tmeet.tsaedu.com/",
  },
  {
    img: Kryzox,
    title: "Kryzox: esports tournaments",
    description: "Runs PUBG, Free Fire and chess tournaments end to end. Players top up a wallet, join a match, and see results and leaderboards update as games finish.",
    type: "Web Platform",
    category: "Gaming",
    status: "Live",
    link: "https://kryzox.com/",
  },
  {
    img: Tufan,
    title: "Tufan: ride sharing",
    description: "A ride-hailing app for passengers and drivers in Nepal, with live booking on one side and fleet management for operators on the other.",
    type: "Mobile App",
    category: "Transport",
    status: "Live",
    link: "https://mytufan.com/",
  },
  {
    img: Brihat,
    title: "Brihat Patro: Nepali calendar",
    description: "Tithi, festivals, panchang and daily rashifal in one app. It also works offline.",
    type: "Mobile App",
    category: "Culture & Lifestyle",
    status: "Live",
    link: "https://play.google.com/store/apps/details?id=com.nepaliyogi.brihatpatro",
  },
  {
    img: Himalayansanchaya,
    title: "Himalayan Sanchaya: business management",
    description: "Stock, sales and reports for small Nepali businesses, all on one dashboard instead of scattered spreadsheets.",
    type: "Web Platform",
    category: "Business Management",
    status: "Live",
    link: "https://himalayan-sanchaya.vercel.app",
  },
  {
    img: Utkrista,
    title: "Utkrista Shikshya: online learning",
    description: "Courses, tests and progress tracking for students across Nepal, at a price students outside Kathmandu can manage.",
    type: "Web Platform",
    category: "EdTech",
    status: "Live",
    link: "https://utkristashikshya.com/",
  },
  {
    img: Damaktechnical,
    title: "Damak Technical Education Foundation",
    description: "Website for a technical and vocational school in Damak. Programs, admissions and notices, which the school staff can update on their own.",
    type: "Website",
    category: "Education",
    status: "Live",
    link: "https://damaktechnical.edu.np",
  },
  {
    img: DamakMultipleCampus,
    title: "Damak Multiple Campus",
    description: "Website for a TU-affiliated community campus, with a notice board, faculty list and program pages, all run from a simple admin panel.",
    type: "Website",
    category: "Education",
    status: "Live",
    link: "https://damakcampus.edu.np",
  },
  {
    img: Rolwaling,
    title: "Rolwaling Community Hospital",
    description: "Website for a community hospital. Services, emergency numbers and health notices, kept light so it loads fine on mobile data.",
    type: "Website",
    category: "Healthcare",
    status: "Live",
    link: "https://www.rolwalingsamudaikaaspatal.com.np/",
  },
  {
    img: Hamrodokan,
    title: "Hamro Dokan: grocery shop app",
    description: "For small grocery shop owners: scan a QR code to add stock, print a bill, and see the day's sales at closing time.",
    type: "Mobile App",
    category: "Retail & Grocery",
    status: "Live",
    link: null,
  },
];

const filterTabs = ["All", "Our Product", "Web Platform", "Mobile App", "Website"];

const stats = [
  { value: "21+", label: "Projects shipped",    icon: "🚀" },
  { value: "20+", label: "Clients",             icon: "🤝" },
  { value: "2",   label: "Products of our own", icon: "🧩" },
  { value: "4+",  label: "Years at it",         icon: "📅" },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.type === activeFilter);

  return (
    <>
      <Helmet>
        <title>Portfolio &amp; Products of A1 IT Innovation | GigFine, T-Meet, Kryzox, Tufan</title>
        <meta name="description" content="Everything A1 IT Innovation has built: our own products GigFine (ride-share complaint platform) and T-Meet (Nepali video conferencing), plus Kryzox, Tufan, Brihat Patro, Utkrista Shikshya, Himalayan Sanchaya, Damak Campus, DTEF, Rolwaling Hospital and Hamro Dokan." />
        <meta name="keywords" content="A1 IT Innovation portfolio, A1 IT Innovation products, product of A1 IT Innovation, products of A1 IT, project of A1 IT Innovation, client of A1 IT Innovation, built by A1 IT Innovation, GigFine, GigFine Nepal, ride sharing complaint Nepal, Pathao complaint, Yango complaint, T-Meet, TMeet, Nepali video conferencing, video meeting app Nepal, Kryzox, Tufan, Brihat Patro, Utkrista Shikshya, Himalayan Sanchaya, Damak Campus, software projects Nepal" />
        <link rel="canonical" href="https://www.a1itinnovation.com.np/works" />
        <meta property="og:title" content="Portfolio & Products | A1 IT Innovation Nepal" />
        <meta property="og:description" content="GigFine, T-Meet, Kryzox, Tufan, Brihat Patro and more. The apps, platforms and websites we've built in Nepal." />
        <meta property="og:url" content="https://www.a1itinnovation.com.np/works" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Portfolio & Products | A1 IT Innovation Nepal",
          "description": "Products and client projects built by A1 IT Innovation: GigFine, T-Meet, Kryzox, Tufan, Brihat Patro and more.",
          "url": "https://www.a1itinnovation.com.np/works",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": projects.map((p, i) => ({
              "@type": p.type === "Our Product" ? "SoftwareApplication" : "CreativeWork",
              "position": i + 1,
              "name": p.title,
              "description": p.description,
              "creator": { "@type": "Organization", "name": "A1 IT Innovation Nepal", "url": "https://www.a1itinnovation.com.np" },
              ...(p.type === "Our Product" ? { "applicationCategory": p.category } : {}),
              ...(p.link ? { "url": p.link } : {}),
            })),
          },
        })}</script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen">

        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                Products &amp; projects by A1 IT Innovation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
                What we've <span className="text-indigo-600">built</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-8">
                A ride-sharing app, an esports platform, a Nepali calendar, a few college and hospital websites. Also two products that are ours: GigFine and T-Meet. Most of these are live, so go and try them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-md transition-colors inline-flex items-center justify-center gap-2">
                  Start Your Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
                <a href="/clients" className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-semibold px-8 py-3.5 rounded-lg shadow-sm transition-colors text-center">
                  View Our Clients
                </a>
              </div>
            </div>

            {/* SVG Illustration */}
            <div className="flex-1 flex justify-center">
              <svg viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg drop-shadow-lg" aria-label="Portfolio illustration">
                {/* Browser mockup */}
                <rect x="30" y="20" width="420" height="260" rx="12" fill="#1E293B"/>
                <rect x="30" y="20" width="420" height="36" rx="12" fill="#334155"/>
                <rect x="30" y="44" width="420" height="12" fill="#334155"/>
                <circle cx="54" cy="38" r="5.5" fill="#EF4444"/>
                <circle cx="72" cy="38" r="5.5" fill="#F59E0B"/>
                <circle cx="90" cy="38" r="5.5" fill="#22C55E"/>
                <rect x="138" y="30" width="200" height="16" rx="8" fill="#1E293B"/>
                <text x="238" y="42" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#64748B">a1itinnovation.com.np/works</text>

                {/* Project cards inside browser */}
                <rect x="46" y="72" width="118" height="90" rx="8" fill="#0F172A"/>
                <rect x="46" y="72" width="118" height="36" rx="8" fill="#4F46E5"/>
                <text x="105" y="95" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="white">🎮 Kryzox</text>
                <text x="105" y="128" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="#94A3B8">Gaming Platform</text>
                <rect x="54" y="140" width="40" height="14" rx="4" fill="#EC4899" opacity="0.8"/>
                <text x="74" y="151" textAnchor="middle" fontFamily="system-ui" fontSize="7" fill="white">Gaming</text>
                <rect x="100" y="140" width="28" height="14" rx="4" fill="#22C55E" opacity="0.8"/>
                <text x="114" y="151" textAnchor="middle" fontFamily="system-ui" fontSize="7" fill="white">Live</text>

                <rect x="176" y="72" width="118" height="90" rx="8" fill="#0F172A"/>
                <rect x="176" y="72" width="118" height="36" rx="8" fill="#0369A1"/>
                <text x="235" y="95" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="white">🚗 Tufan</text>
                <text x="235" y="128" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="#94A3B8">Transport App</text>
                <rect x="184" y="140" width="50" height="14" rx="4" fill="#F59E0B" opacity="0.8"/>
                <text x="209" y="151" textAnchor="middle" fontFamily="system-ui" fontSize="7" fill="white">Transport</text>
                <rect x="240" y="140" width="28" height="14" rx="4" fill="#22C55E" opacity="0.8"/>
                <text x="254" y="151" textAnchor="middle" fontFamily="system-ui" fontSize="7" fill="white">Live</text>

                <rect x="306" y="72" width="118" height="90" rx="8" fill="#0F172A"/>
                <rect x="306" y="72" width="118" height="36" rx="8" fill="#065F46"/>
                <text x="365" y="95" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="white">📚 Utkrista</text>
                <text x="365" y="128" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="#94A3B8">E-Learning Platform</text>
                <rect x="314" y="140" width="36" height="14" rx="4" fill="#6366F1" opacity="0.8"/>
                <text x="332" y="151" textAnchor="middle" fontFamily="system-ui" fontSize="7" fill="white">EdTech</text>
                <rect x="356" y="140" width="28" height="14" rx="4" fill="#22C55E" opacity="0.8"/>
                <text x="370" y="151" textAnchor="middle" fontFamily="system-ui" fontSize="7" fill="white">Live</text>

                {/* Row 2 */}
                <rect x="46" y="178" width="118" height="82" rx="8" fill="#0F172A"/>
                <text x="105" y="205" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="white">🏥 Rolwaling</text>
                <text x="105" y="222" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="#94A3B8">Hospital Website</text>
                <rect x="54" y="236" width="52" height="14" rx="4" fill="#EF4444" opacity="0.8"/>
                <text x="80" y="247" textAnchor="middle" fontFamily="system-ui" fontSize="7" fill="white">Healthcare</text>

                <rect x="176" y="178" width="248" height="82" rx="8" fill="#0F172A"/>
                <text x="300" y="205" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="white">🗓️ Brihat Patro — Nepali Calendar App</text>
                <text x="300" y="222" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="#94A3B8">Mobile App · Culture & Lifestyle</text>
                <rect x="184" y="236" width="72" height="14" rx="4" fill="#F97316" opacity="0.8"/>
                <text x="220" y="247" textAnchor="middle" fontFamily="system-ui" fontSize="7" fill="white">Culture & Lifestyle</text>

                {/* Laptop base */}
                <rect x="10" y="280" width="460" height="14" rx="7" fill="#334155"/>
                <rect x="150" y="280" width="180" height="7" rx="4" fill="#1E293B"/>

                {/* Floating stat cards */}
                <rect x="20" y="305" width="100" height="48" rx="10" fill="white" stroke="#E0E7FF" strokeWidth="1.5"/>
                <text x="70" y="325" textAnchor="middle" fontFamily="system-ui" fontSize="18" fontWeight="800" fill="#4F46E5">21+</text>
                <text x="70" y="343" textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="#64748B">Projects</text>

                <rect x="135" y="305" width="100" height="48" rx="10" fill="white" stroke="#E0E7FF" strokeWidth="1.5"/>
                <text x="185" y="325" textAnchor="middle" fontFamily="system-ui" fontSize="18" fontWeight="800" fill="#0369A1">20+</text>
                <text x="185" y="343" textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="#64748B">Clients</text>

                <rect x="250" y="305" width="100" height="48" rx="10" fill="white" stroke="#E0E7FF" strokeWidth="1.5"/>
                <text x="300" y="325" textAnchor="middle" fontFamily="system-ui" fontSize="18" fontWeight="800" fill="#065F46">4+</text>
                <text x="300" y="343" textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="#64748B">Years</text>

                <rect x="365" y="305" width="100" height="48" rx="10" fill="white" stroke="#E0E7FF" strokeWidth="1.5"/>
                <text x="415" y="325" textAnchor="middle" fontFamily="system-ui" fontSize="18" fontWeight="800" fill="#7C3AED">🇳🇵</text>
                <text x="415" y="343" textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="#64748B">Made in Nepal</text>
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

        {/* ── PROJECTS SECTION ── */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-10">
              <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Our Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The full list</h2>
              <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4"/>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Filter by "Our Product" to see just the things we own and run ourselves.
              </p>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeFilter === tab
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
                  }`}
                >
                  {tab} {activeFilter === tab && tab !== "All" && `(${filtered.length})`}
                </button>
              ))}
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((project, index) => (
                <article
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Logo area */}
                  <div className={`${project.imgBg ?? "bg-gray-50"} border-b border-gray-100 px-6 py-8 flex items-center justify-center h-44 overflow-hidden`}>
                    <img
                      src={project.img}
                      alt={`${project.title} — ${project.type === "Our Product" ? "product" : "project"} of A1 IT Innovation Nepal`}
                      className="max-h-28 max-w-full object-contain"
                      style={project.imgStyle}
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[project.type] || "bg-gray-100 text-gray-600"}`}>
                        {project.type}
                      </span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[project.category] || "bg-gray-100 text-gray-600"}`}>
                        {project.category}
                      </span>
                      {project.status === "Live" && (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"/>
                          Live
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{project.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{project.description}</p>

                    {/* Link */}
                    <div className="mt-5">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 font-semibold text-sm transition-colors"
                        >
                          Visit Project
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                        </a>
                      ) : (
                        <span className="text-xs text-gray-400 italic">Website coming soon</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-indigo-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want yours on this page?</h2>
            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
              Send us a message about what you're trying to build. The first call is free and there's no pressure to sign anything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-lg transition duration-300 shadow-lg">
                Talk to us
              </a>
              <a href="/clients" className="border border-gray-500 hover:border-gray-300 text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-lg transition duration-300">
                Meet Our Clients
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
