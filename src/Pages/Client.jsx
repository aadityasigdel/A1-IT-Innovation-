import { Helmet } from "react-helmet";
import Birhat from "../assets/Clients/brihat.webp";
import damakcampus from "../assets/Clients/dmc.jpg";
import Shree from "../assets/Clients/dtef.jpg";
import Hamrodokan from "../assets/Clients/hamrodokan Logo.png";
import himalayan from "../assets/Clients/himalayan.webp";
import kryzox from "../assets/Clients/KryZone.png";
import Tufan from "../assets/Clients/tufan.png";
import Utkrista from "../assets/Clients/utkrista Logo.png";
import Rolwaling from "../assets/Clients/rh.png";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Client() {
  const clients = [
    { logo: Hamrodokan, name: "Hamro Dokan",        url: "#",                                                                                       category: "E-Commerce",  project: "Web Platform",       location: "Nepal"         },
    { logo: damakcampus, name: "Damak Campus",       url: "https://damakcampus.edu.np/",                                                            category: "Education",   project: "College Website",    location: "Damak, Jhapa"  },
    { logo: himalayan,  name: "Himalayan Sanchaya",  url: "https://himalayan-sanchaya.vercel.app/",                                                 category: "Finance",     project: "Web App",            location: "Nepal"         },
    { logo: Shree,      name: "DTEF",                url: "https://damaktechnical.edu.np/",                                                         category: "Education",   project: "Institute Website",  location: "Damak, Jhapa"  },
    { logo: Birhat,     name: "Brihat Patro",        url: "https://play.google.com/store/apps/details?id=com.nepaliyogi.brihatpatro",               category: "Mobile App",  project: "Android App",        location: "Nepal"         },
    { logo: Utkrista,   name: "Utkrista Shikshya",   url: "https://utkristashikshya.com/",                                                          category: "Education",   project: "Learning Platform",  location: "Nepal"         },
    { logo: kryzox,     name: "Kryzox",              url: "https://kryzox.com",                                                                     category: "Gaming",      project: "Gaming Platform",    location: "Nepal"         },
    { logo: Tufan,      name: "Tufan",               url: "https://mytufan.com/",                                                                   category: "Ridesharing", project: "Ridesharing Platform", location: "Nepal"       },
    { logo: Rolwaling,  name: "Rolwaling Hospital",  url: "https://www.rolwalingsamudaikaaspatal.com.np/",                                          category: "Healthcare",  project: "Hospital Website",   location: "Nepal"         },
  ];

  const stats = [
    { value: "20+",  label: "Clients Served"     },
    { value: "19+",  label: "Projects Delivered"  },
    { value: "4+",   label: "Years Active"        },
    { value: "100%", label: "On-Time Delivery"    },
  ];

  const trustPillars = [
    { icon: "🎯", title: "Result-Driven",        desc: "Every project is measured by outcomes — traffic, conversions, and real business growth for your organisation." },
    { icon: "🔒", title: "Transparent Process",  desc: "Regular updates, open communication, and clear milestones throughout every phase of your project." },
    { icon: "⚡", title: "Fast Delivery",         desc: "Agile workflows ensure your project ships on time without compromising on quality or attention to detail." },
    { icon: "🛡️", title: "After-Launch Support", desc: "We don't disappear after delivery. Ongoing support, maintenance, and upgrades are always included." },
  ];

  const industries = [
    { icon: "🎓", label: "Education"     },
    { icon: "🏥", label: "Healthcare"    },
    { icon: "💰", label: "Finance"       },
    { icon: "🛒", label: "E-Commerce"    },
    { icon: "🎮", label: "Gaming"         },
    { icon: "🚗", label: "Ridesharing"   },
  ];

  const categoryColors = {
    "Education":    "bg-blue-100 text-blue-700",
    "Healthcare":   "bg-red-100 text-red-700",
    "Finance":      "bg-green-100 text-green-700",
    "E-Commerce":   "bg-orange-100 text-orange-700",
    "Technology":   "bg-purple-100 text-purple-700",
    "Gaming":       "bg-pink-100 text-pink-700",
    "Ridesharing":  "bg-yellow-100 text-yellow-700",
    "Mobile App":   "bg-indigo-100 text-indigo-700",
  };

  return (
    <>
      <Helmet>
        <title>Our Clients | A1 IT Innovation Nepal — Trusted IT Partner in Damak, Jhapa &amp; Kathmandu</title>
        <meta name="description" content="A1 IT Innovation Nepal proudly serves 9+ clients across education, healthcare, finance, and technology. Trusted IT partner for Damak Campus, Himalayan Sanchaya, Brihat Patro, Kryzox, Tufan, Rolwaling Hospital and more." />
        <meta name="keywords" content="A1 IT Innovation clients, IT company Nepal, software development Damak, web development Jhapa, app development Nepal, IT services Kathmandu, Damak Campus, Himalayan Sanchaya, Brihat Patro, Kryzox, Utkrista, Tufan, Rolwaling Hospital, trusted IT company Nepal" />
        <link rel="canonical" href="https://www.a1itinnovation.com.np/clients" />
        <meta property="og:title" content="Our Clients | A1 IT Innovation Nepal" />
        <meta property="og:description" content="Trusted IT partner for 9+ organizations across Nepal — education, healthcare, finance, and technology. View our growing client portfolio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.a1itinnovation.com.np/clients" />
        <meta property="og:image" content="https://www.a1itinnovation.com.np/Publiclogo.png" />
        <meta property="og:locale" content="en_NP" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Clients | A1 IT Innovation Nepal" />
        <meta name="twitter:description" content="Trusted by 9+ organizations across Nepal in education, healthcare, finance, and technology." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-14 py-20">

            {/* Text */}
            <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full w-fit mx-auto lg:mx-0">
                <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
                20+ Organizations Trust Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Nepal's Most Trusted<br />
                <span className="text-indigo-600">IT Innovation Partner</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                From educational institutes in Damak to healthcare providers across Nepal, A1 IT Innovation delivers software, web, and mobile solutions that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center justify-center gap-2">
                  Become Our Client
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <a href="/works" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center justify-center">
                  View Our Work
                </a>
              </div>
            </div>

            {/* Network SVG */}
            <div className="flex-1 flex justify-center">
              <svg viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg drop-shadow-sm" aria-label="Client network illustration showing organizations connected to A1 IT Innovation">

                {/* ── Connection lines ── */}
                <line x1="250" y1="210" x2="100" y2="105" stroke="#C7D2FE" strokeWidth="1.5" strokeDasharray="5 4"/>
                <line x1="250" y1="210" x2="250" y2="58"  stroke="#C7D2FE" strokeWidth="1.5" strokeDasharray="5 4"/>
                <line x1="250" y1="210" x2="400" y2="105" stroke="#C7D2FE" strokeWidth="1.5" strokeDasharray="5 4"/>
                <line x1="250" y1="210" x2="445" y2="228" stroke="#C7D2FE" strokeWidth="1.5" strokeDasharray="5 4"/>
                <line x1="250" y1="210" x2="380" y2="345" stroke="#C7D2FE" strokeWidth="1.5" strokeDasharray="5 4"/>
                <line x1="250" y1="210" x2="120" y2="345" stroke="#C7D2FE" strokeWidth="1.5" strokeDasharray="5 4"/>
                <line x1="250" y1="210" x2="55"  y2="228" stroke="#C7D2FE" strokeWidth="1.5" strokeDasharray="5 4"/>
                <line x1="250" y1="210" x2="175" y2="88"  stroke="#C7D2FE" strokeWidth="1.5" strokeDasharray="5 4"/>
                <line x1="250" y1="210" x2="325" y2="88"  stroke="#C7D2FE" strokeWidth="1.5" strokeDasharray="5 4"/>

                {/* ── Energy dots flowing center → each client ── */}
                <circle r="4" fill="#6366F1" opacity="0.85"><animateMotion dur="2.4s" repeatCount="indefinite" begin="0.0s" path="M 250 210 L 100 105"/></circle>
                <circle r="4" fill="#6366F1" opacity="0.85"><animateMotion dur="2.0s" repeatCount="indefinite" begin="0.5s" path="M 250 210 L 250 58"/></circle>
                <circle r="4" fill="#6366F1" opacity="0.85"><animateMotion dur="2.2s" repeatCount="indefinite" begin="1.0s" path="M 250 210 L 400 105"/></circle>
                <circle r="4" fill="#818CF8" opacity="0.85"><animateMotion dur="2.6s" repeatCount="indefinite" begin="0.3s" path="M 250 210 L 445 228"/></circle>
                <circle r="4" fill="#818CF8" opacity="0.85"><animateMotion dur="2.3s" repeatCount="indefinite" begin="0.8s" path="M 250 210 L 380 345"/></circle>
                <circle r="4" fill="#818CF8" opacity="0.85"><animateMotion dur="2.5s" repeatCount="indefinite" begin="1.3s" path="M 250 210 L 120 345"/></circle>
                <circle r="4" fill="#6366F1" opacity="0.85"><animateMotion dur="2.1s" repeatCount="indefinite" begin="0.6s" path="M 250 210 L 55 228"/></circle>
                <circle r="3.5" fill="#A5B4FC" opacity="0.85"><animateMotion dur="1.9s" repeatCount="indefinite" begin="0.2s" path="M 250 210 L 175 88"/></circle>
                <circle r="3.5" fill="#A5B4FC" opacity="0.85"><animateMotion dur="2.0s" repeatCount="indefinite" begin="1.1s" path="M 250 210 L 325 88"/></circle>

                {/* ── Ripple rings expanding from center (heartbeat effect) ── */}
                <circle cx="250" cy="210" r="58" fill="none" stroke="#6366F1" strokeWidth="1.5" className="ripple-ring" style={{animationDelay:'0s'}}/>
                <circle cx="250" cy="210" r="58" fill="none" stroke="#6366F1" strokeWidth="1.2" className="ripple-ring" style={{animationDelay:'1s'}}/>
                <circle cx="250" cy="210" r="58" fill="none" stroke="#818CF8" strokeWidth="1"   className="ripple-ring" style={{animationDelay:'2s'}}/>

                {/* ── Center circles with heartbeat ── */}
                <circle cx="250" cy="210" r="60" fill="#EEF2FF" className="heart-pulse"/>
                <circle cx="250" cy="210" r="50" fill="#4F46E5" className="heart-pulse"/>
                <circle cx="250" cy="210" r="42" fill="#6366F1" className="heart-pulse"/>
                <text x="250" y="204" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="15" fontWeight="800" fill="white">A1 IT</text>
                <text x="250" y="222" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11" fill="#C7D2FE">Innovation</text>

                {/* ── Client node: Damak Campus ── */}
                <circle cx="100" cy="105" r="40" fill="none" stroke="#6366F1" strokeWidth="1.2" strokeDasharray="6 5" opacity="0.45" className="spin-ring"/>
                <circle cx="100" cy="105" r="34" fill="white" stroke="#E0E7FF" strokeWidth="2"/>
                <text x="100" y="100" textAnchor="middle" fontSize="18">🎓</text>
                <text x="100" y="118" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="600" fill="#374151">Damak</text>
                <text x="100" y="129" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fill="#6B7280">Campus</text>

                {/* ── Client node: Himalayan Sanchaya ── */}
                <circle cx="250" cy="58" r="40" fill="none" stroke="#818CF8" strokeWidth="1.2" strokeDasharray="6 5" opacity="0.45" className="spin-ring-rev"/>
                <circle cx="250" cy="58" r="34" fill="white" stroke="#E0E7FF" strokeWidth="2"/>
                <text x="250" y="53" textAnchor="middle" fontSize="18">🏦</text>
                <text x="250" y="71" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="600" fill="#374151">Himalayan</text>
                <text x="250" y="82" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fill="#6B7280">Sanchaya</text>

                {/* ── Client node: Brihat Patro ── */}
                <circle cx="400" cy="105" r="40" fill="none" stroke="#6366F1" strokeWidth="1.2" strokeDasharray="6 5" opacity="0.45" className="spin-ring"/>
                <circle cx="400" cy="105" r="34" fill="white" stroke="#E0E7FF" strokeWidth="2"/>
                <text x="400" y="100" textAnchor="middle" fontSize="18">📱</text>
                <text x="400" y="118" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="600" fill="#374151">Brihat</text>
                <text x="400" y="129" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fill="#6B7280">Patro</text>

                {/* ── Client node: Kryzox ── */}
                <circle cx="445" cy="228" r="40" fill="none" stroke="#818CF8" strokeWidth="1.2" strokeDasharray="6 5" opacity="0.45" className="spin-ring-rev"/>
                <circle cx="445" cy="228" r="34" fill="white" stroke="#E0E7FF" strokeWidth="2"/>
                <text x="445" y="223" textAnchor="middle" fontSize="18">💻</text>
                <text x="445" y="241" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="600" fill="#374151">Kryzox</text>

                {/* ── Client node: Rolwaling Hospital ── */}
                <circle cx="380" cy="345" r="40" fill="none" stroke="#6366F1" strokeWidth="1.2" strokeDasharray="6 5" opacity="0.45" className="spin-ring"/>
                <circle cx="380" cy="345" r="34" fill="white" stroke="#E0E7FF" strokeWidth="2"/>
                <text x="380" y="340" textAnchor="middle" fontSize="18">🏥</text>
                <text x="380" y="358" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="600" fill="#374151">Rolwaling</text>
                <text x="380" y="369" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fill="#6B7280">Hospital</text>

                {/* ── Client node: Hamro Dokan ── */}
                <circle cx="120" cy="345" r="40" fill="none" stroke="#818CF8" strokeWidth="1.2" strokeDasharray="6 5" opacity="0.45" className="spin-ring-rev"/>
                <circle cx="120" cy="345" r="34" fill="white" stroke="#E0E7FF" strokeWidth="2"/>
                <text x="120" y="340" textAnchor="middle" fontSize="18">🛒</text>
                <text x="120" y="358" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="600" fill="#374151">Hamro</text>
                <text x="120" y="369" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fill="#6B7280">Dokan</text>

                {/* ── Client node: Tufan ── */}
                <circle cx="55" cy="228" r="40" fill="none" stroke="#6366F1" strokeWidth="1.2" strokeDasharray="6 5" opacity="0.45" className="spin-ring"/>
                <circle cx="55" cy="228" r="34" fill="white" stroke="#E0E7FF" strokeWidth="2"/>
                <text x="55" y="223" textAnchor="middle" fontSize="18">🎵</text>
                <text x="55" y="241" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="600" fill="#374151">Tufan</text>

                {/* ── Client node: DTEF (smaller) ── */}
                <circle cx="175" cy="88" r="34" fill="none" stroke="#818CF8" strokeWidth="1" strokeDasharray="5 5" opacity="0.4" className="spin-ring-rev"/>
                <circle cx="175" cy="88" r="28" fill="white" stroke="#E0E7FF" strokeWidth="2"/>
                <text x="175" y="83" textAnchor="middle" fontSize="15">📚</text>
                <text x="175" y="100" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fill="#374151">DTEF</text>

                {/* ── Client node: Utkrista (smaller) ── */}
                <circle cx="325" cy="88" r="34" fill="none" stroke="#6366F1" strokeWidth="1" strokeDasharray="5 5" opacity="0.4" className="spin-ring"/>
                <circle cx="325" cy="88" r="28" fill="white" stroke="#E0E7FF" strokeWidth="2"/>
                <text x="325" y="83" textAnchor="middle" fontSize="15">⭐</text>
                <text x="325" y="100" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fill="#374151">Utkrista</text>

              </svg>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="bg-indigo-600 py-10" aria-label="Company statistics">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-white">{s.value}</div>
                <div className="text-indigo-200 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Logo Marquee ── */}
        <section aria-labelledby="clients-heading" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 id="clients-heading" className="text-3xl font-bold text-gray-900 mb-3">Our Esteemed Clients</h2>
              <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-500 max-w-xl mx-auto">Trusted by leading organizations across education, healthcare, finance, and technology in Nepal.</p>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-white border border-gray-100 py-6 shadow-sm">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10"/>
              <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10"/>
              <div
                className="flex gap-10 px-6 w-max"
                style={{ animation: "clientScroll 28s linear infinite" }}
                onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
                onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
              >
                {[...clients, ...clients].map((client, i) => (
                  <a key={i} href={client.url} target="_blank" rel="noopener noreferrer" title={client.name}
                    className="group relative flex flex-col items-center justify-center w-28 h-28 bg-gray-50 rounded-xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition duration-300"
                  >
                    <img src={client.logo} alt={`${client.name} — client of A1 IT Innovation Nepal`}
                      loading="lazy" width={80} height={80} className="object-contain p-2"/>
                    <span className="text-xs text-gray-400 mt-1 text-center px-1 truncate w-full text-center">{client.name}</span>
                  </a>
                ))}
              </div>
              <style>{`@keyframes clientScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
            </div>
          </div>
        </section>

        {/* ── Client Cards Grid ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Partnerships That Matter</h2>
              <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-500 max-w-xl mx-auto">Each partnership represents a commitment to quality, trust, and digital transformation.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((client, i) => (
                <a key={i} href={client.url} target="_blank" rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition duration-300 bg-white"
                >
                  <div className="w-16 h-16 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 p-1">
                    <img src={client.logo} alt={`${client.name} logo`} loading="lazy" width={56} height={56} className="object-contain"/>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">{client.name}</h3>
                    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 ${categoryColors[client.category] ?? "bg-gray-100 text-gray-600"}`}>
                      {client.category}
                    </span>
                    <p className="text-xs text-gray-500">{client.project}</p>
                    <p className="text-xs text-gray-400 mt-0.5">📍 {client.location}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-indigo-500 transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industries ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Industries We Serve</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-8"></div>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((ind, i) => (
                <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm hover:border-indigo-300 hover:shadow transition duration-200">
                  <span className="text-xl">{ind.icon}</span>
                  <span className="font-medium text-gray-700 text-sm">{ind.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Trust Us ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Why 20+ Organizations Trust A1 IT Innovation</h2>
              <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-500 max-w-2xl mx-auto">We don't just build software — we build long-term digital partnerships rooted in trust, quality, and measurable results.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustPillars.map((pillar, i) => (
                <div key={i} className="p-6 border border-gray-100 rounded-xl hover:border-indigo-200 hover:shadow-md transition duration-300 text-center group">
                  <div className="text-4xl mb-4">{pillar.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-700 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Client Family?</h2>
            <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">Whether you're a startup, institution, or enterprise — we have the expertise to bring your digital vision to life.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3 rounded-lg transition duration-300">
                Start Your Project
              </a>
              <a href="/services" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition duration-300">
                Explore Services
              </a>
            </div>
          </div>
        </section>

        {/* ── JSON-LD Structured Data ── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "A1 IT Innovation Nepal",
            "url": "https://www.a1itinnovation.com.np",
            "logo": "https://www.a1itinnovation.com.np/Publiclogo.png",
            "description": "Nepal's trusted IT company serving education, healthcare, finance, and technology sectors. Delivering web development, mobile apps, DevOps, and software solutions since 2023.",
            "foundingDate": "2023",
            "areaServed": ["Damak, Jhapa", "Kathmandu", "Nepal"],
            "sameAs": [
              "https://www.facebook.com/a1itinnovation",
              "https://www.linkedin.com/company/a1itinnovation"
            ],
            "knowsAbout": clients.map(c => ({
              "@type": "Organization",
              "name": c.name,
              "url": c.url !== "#" ? c.url : "https://www.a1itinnovation.com.np/clients"
            }))
          })
        }}/>
      </main>

      <Footer />
    </>
  );
}
