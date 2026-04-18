import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const services = [
  {
    title: "Web Development",
    description: "We build fast, SEO-optimized, and responsive websites that grow your business presence all over Nepal — from startups to enterprises.",
    icon: (
      <svg className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 18L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M5 12L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M3.5 7L6.5 10L3.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.5 7L17.5 10L20.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "blue",
    bg: "bg-blue-50",
    border: "border-blue-200 hover:border-blue-400",
    iconBg: "bg-blue-100",
    link: "/services/web-dev",
    shortLinkText: "Explore Web Dev",
  },
  {
    title: "Mobile App Development",
    description: "Professional Android and iOS app development services in Nepal — turning ideas into high-performing mobile experiences.",
    icon: (
      <svg className="w-7 h-7 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 18H12.01M9 20H15C16.1046 20 17 19.1046 17 18V6C17 4.89543 16.1046 4 15 4H9C7.89543 4 7 4.89543 7 6V18C7 19.1046 7.89543 20 9 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "green",
    bg: "bg-green-50",
    border: "border-green-200 hover:border-green-400",
    iconBg: "bg-green-100",
    link: "/services/mobile-dev",
    shortLinkText: "Explore Mobile Dev",
  },
  {
    title: "DevOps as a Service",
    description: "Professional DevOps outsourcing, CI/CD pipeline setup, Kubernetes deployment, and managed cloud infrastructure services across Nepal.",
    icon: (
      <svg className="w-7 h-7 text-orange-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 3.46482C17.4018 4.16 18.6309 5.17749 19.5812 6.4246C20.5315 7.67171 21.1742 9.12558 21.4558 10.6658" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "orange",
    bg: "bg-orange-50",
    border: "border-orange-200 hover:border-orange-400",
    iconBg: "bg-orange-100",
    link: "/services/devops",
    shortLinkText: "Explore DevOps",
  },
  {
    title: "Security Audit",
    description: "Comprehensive website and app security audit service in Nepal. We detect vulnerabilities and strengthen your system against threats.",
    icon: (
      <svg className="w-7 h-7 text-yellow-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 15V17M6.447 3.93L4.453 5.922C3.726 6.649 3.362 7.017 3.152 7.449C2.942 7.88 2.884 8.36 2.768 9.32L2.146 14.824C2.054 15.584 2.008 15.964 2.153 16.27C2.298 16.576 2.603 16.751 3.212 17.1L8.272 20.052C8.674 20.287 8.875 20.404 9.092 20.454C9.31 20.504 9.534 20.486 9.982 20.45L14.044 20.106C14.438 20.074 14.635 20.058 14.809 19.991C14.984 19.925 15.137 19.812 15.25 19.665L19.367 14.524C19.764 14.024 19.963 13.774 20.023 13.508C20.083 13.241 20.002 12.971 19.84 12.432L18.139 6.524C17.974 5.974 17.892 5.699 17.718 5.49C17.544 5.28 17.305 5.162 16.828 4.925L12.703 2.782C12.298 2.581 12.095 2.48 11.885 2.433C11.675 2.386 11.458 2.393 11.024 2.407L6.555 2.5C6.097 2.515 5.868 2.522 5.689 2.6C5.51 2.677 5.37 2.817 5.089 3.096L4.309 3.876" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "yellow",
    bg: "bg-yellow-50",
    border: "border-yellow-200 hover:border-yellow-400",
    iconBg: "bg-yellow-100",
    link: "/services/security-audit",
    shortLinkText: "Explore Security",
  },
  {
    title: "Domain & Hosting",
    description: "Reliable and affordable domain registration and web hosting services across Nepal. Fast, secure, and scalable servers.",
    icon: (
      <svg className="w-7 h-7 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 10H21M7 15H8M12 15H13M12 3V4M12 20V21M19 4L18 5M5 19L6 18M18 19L19 18M6 5L5 6M3 14C3 15.1819 3.23279 16.3522 3.68508 17.4442C4.13738 18.5361 4.80031 19.5282 5.63604 20.364C6.47177 21.1997 7.46392 21.8626 8.55585 22.3149C9.64778 22.7672 10.8181 23 12 23C13.1819 23 14.3522 22.7672 15.4442 22.3149C16.5361 21.8626 17.5282 21.1997 18.364 20.364C19.1997 19.5282 19.8626 18.5361 20.3149 17.4442C20.7672 16.3522 21 15.1819 21 14C21 12.8181 20.7672 11.6478 20.3149 10.5558C19.8626 9.46392 19.1997 8.47177 18.364 7.63604C17.5282 6.80031 16.5361 6.13738 15.4442 5.68508C14.3522 5.23279 13.1819 5 12 5C10.8181 5 9.64778 5.23279 8.55585 5.68508C7.46392 6.13738 6.47177 6.80031 5.63604 7.63604C4.80031 8.47177 4.13738 9.46392 3.68508 10.5558C3.23279 11.6478 3 12.8181 3 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "purple",
    bg: "bg-purple-50",
    border: "border-purple-200 hover:border-purple-400",
    iconBg: "bg-purple-100",
    link: "/services/domain-hosting",
    shortLinkText: "Explore Hosting",
  },
  {
    title: "Free IT Internship",
    description: "Gain hands-on IT experience with our free internship programs in web development, app development, and AI training across Nepal.",
    icon: (
      <svg className="w-7 h-7 text-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21M19 21L21 21M19 21H14M5 21L3 21M5 21H10M9 6.99998H10M9 11H10M14 6.99998H15M14 11H15M10 21V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V21M10 21H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "red",
    bg: "bg-red-50",
    border: "border-red-200 hover:border-red-400",
    iconBg: "bg-red-100",
    link: "/services/internship",
    shortLinkText: "Apply Now",
  },
];

const stats = [
  { value: "20+", label: "Clients Served",      icon: "🤝" },
  { value: "19+", label: "Projects Delivered",   icon: "🚀" },
  { value: "4+",  label: "Years Active",          icon: "📅" },
  { value: "8+",  label: "Team Members",          icon: "👥" },
];

const whyUs = [
  { icon: "🏆", title: "4+ Years Experience",      desc: "Serving businesses across Nepal since 2021 with proven, reliable IT solutions." },
  { icon: "🇳🇵", title: "Nepal-Focused",            desc: "We understand Nepal's business landscape — local support, local pricing, global quality." },
  { icon: "⚡", title: "Agile & Fast",              desc: "Lean teams and agile methods mean your project ships on time, every time." },
  { icon: "💰", title: "Affordable Pricing",        desc: "Enterprise-grade solutions at prices designed for Nepali startups and businesses." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>A1 IT Innovation Nepal — Top Software, Web &amp; App Development Company | Damak, Jhapa &amp; Kathmandu</title>
        <meta name="description" content="A1 IT Innovation is Nepal's trusted IT company offering website development, mobile app development, DevOps, AI solutions, security audit, and free IT internships across Damak, Jhapa, Kathmandu and all Nepal." />
        <meta name="keywords" content="A1 IT Innovation Nepal, IT company Nepal, web development Damak, software company Jhapa, app development Kathmandu, DevOps Nepal, AI solutions Nepal, free internship Nepal, security audit Nepal, domain hosting Nepal, top IT company Nepal 2024" />
        <link rel="canonical" href="https://www.a1itinnovation.com.np/" />
        <meta property="og:title" content="A1 IT Innovation Nepal — Nepal's Trusted IT Company" />
        <meta property="og:description" content="Web development, mobile apps, DevOps, AI, and free IT internships. Trusted by 20+ organizations across Nepal." />
        <meta property="og:image" content="https://www.a1itinnovation.com.np/Publiclogo.png" />
        <meta property="og:url" content="https://www.a1itinnovation.com.np" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="A1 IT Innovation Nepal — Top IT Company" />
        <meta name="twitter:description" content="Nepal's trusted IT partner for web, app, DevOps & AI solutions. 20+ clients. 4+ years. Damak & Kathmandu." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "A1 IT Innovation Nepal",
          "url": "https://www.a1itinnovation.com.np",
          "logo": "https://www.a1itinnovation.com.np/Publiclogo.png",
          "description": "Nepal's trusted IT company offering web development, mobile apps, DevOps, AI solutions, security audit, and free IT internships.",
          "foundingDate": "2021",
          "areaServed": ["Damak, Jhapa", "Kathmandu", "Nepal"],
          "telephone": "+977-9816032025",
          "sameAs": [
            "https://www.facebook.com/a1itinnovation",
            "https://www.linkedin.com/company/a1itinnovation"
          ],
        }) }}/>
      </Helmet>

      <Navigation />

      <main className="flex-grow">

        {/* ── HERO ── */}
        <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6 lg:px-12 pt-6">
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 py-16">

            {/* Left: Text */}
            <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full w-fit mx-auto lg:mx-0">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Trusted by 20+ Organizations in Nepal
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Nepal's Trusted{" "}
                <span className="text-indigo-600">IT Company <span className="rocket-fly">🚀</span></span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                A1 IT Innovation delivers world-class web development, mobile apps, DevOps, AI solutions, and free IT internships — empowering businesses and students across Damak, Jhapa, Kathmandu, and all of Nepal.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">📍 Damak, Jhapa & Kathmandu</span>
                <span className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">⭐ 4+ Years in Business</span>
                <span className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">🎓 Free Internship Program</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
                <a href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-md transition-colors duration-300 text-center inline-flex items-center justify-center gap-2">
                  Start Your Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
                <a href="/company/about" className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-semibold px-8 py-3.5 rounded-lg shadow-sm transition-colors duration-300 text-center">
                  Learn About Us
                </a>
              </div>
            </div>

            {/* Right: Tech Dashboard SVG */}
            <div className="flex-1 flex justify-center">
              <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl drop-shadow-xl" aria-label="A1 IT Innovation tech dashboard illustration">
                {/* Laptop outer frame */}
                <rect x="40" y="20" width="440" height="290" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5"/>
                {/* Screen area */}
                <rect x="52" y="32" width="416" height="266" rx="6" fill="#0F172A"/>
                {/* Browser bar */}
                <rect x="52" y="32" width="416" height="34" rx="6" fill="#1E293B"/>
                <circle cx="76"  cy="49" r="5.5" fill="#EF4444"/>
                <circle cx="95"  cy="49" r="5.5" fill="#F59E0B"/>
                <circle cx="114" cy="49" r="5.5" fill="#22C55E"/>
                <rect x="148" y="41" width="224" height="16" rx="8" fill="#0F172A"/>
                <text x="260" y="53" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#475569">a1itinnovation.com.np</text>
                <circle cx="452" cy="49" r="6" fill="#4F46E5" opacity="0.7"/>
                {/* Sidebar */}
                <rect x="52" y="66" width="72" height="232" fill="#111827"/>
                <rect x="62" y="82"  width="52" height="9" rx="4" fill="#4F46E5"/>
                <rect x="62" y="100" width="44" height="7" rx="3" fill="#1E293B"/>
                <rect x="62" y="115" width="48" height="7" rx="3" fill="#1E293B"/>
                <rect x="62" y="130" width="40" height="7" rx="3" fill="#1E293B"/>
                <rect x="62" y="145" width="46" height="7" rx="3" fill="#1E293B"/>
                <rect x="62" y="160" width="42" height="7" rx="3" fill="#1E293B"/>
                {/* Avatar at bottom of sidebar */}
                <circle cx="88" cy="278" r="14" fill="#4F46E5"/>
                <text x="88" y="283" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="12" fill="white" fontWeight="700">A1</text>
                {/* Main content */}
                {/* Page title */}
                <text x="142" y="88" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700" fill="#F1F5F9">Dashboard — A1 IT Innovation</text>
                {/* Metric cards row */}
                <rect x="134" y="100" width="88" height="54" rx="7" fill="#1E293B"/>
                <text x="142" y="118" fontFamily="system-ui,sans-serif" fontSize="8" fill="#64748B">Clients</text>
                <text x="142" y="136" fontFamily="system-ui,sans-serif" fontSize="18" fontWeight="800" fill="#22D3EE">20+</text>
                <rect x="140" y="146" width="40" height="4" rx="2" fill="#22D3EE" opacity="0.4"/>

                <rect x="230" y="100" width="88" height="54" rx="7" fill="#1E293B"/>
                <text x="238" y="118" fontFamily="system-ui,sans-serif" fontSize="8" fill="#64748B">Projects</text>
                <text x="238" y="136" fontFamily="system-ui,sans-serif" fontSize="18" fontWeight="800" fill="#34D399">19+</text>
                <rect x="236" y="146" width="40" height="4" rx="2" fill="#34D399" opacity="0.4"/>

                <rect x="326" y="100" width="88" height="54" rx="7" fill="#1E293B"/>
                <text x="334" y="118" fontFamily="system-ui,sans-serif" fontSize="8" fill="#64748B">Years</text>
                <text x="334" y="136" fontFamily="system-ui,sans-serif" fontSize="18" fontWeight="800" fill="#FBBF24">4+</text>
                <rect x="332" y="146" width="40" height="4" rx="2" fill="#FBBF24" opacity="0.4"/>

                <rect x="422" y="100" width="34" height="54" rx="7" fill="#4F46E5"/>
                <text x="439" y="124" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fill="white">Team</text>
                <text x="439" y="142" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="14" fontWeight="800" fill="white">8+</text>

                {/* Growth chart */}
                <rect x="134" y="164" width="192" height="94" rx="7" fill="#1E293B"/>
                <text x="144" y="178" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="600" fill="#94A3B8">Project Growth</text>
                {/* Chart bars */}
                <rect x="148" y="218" width="14" height="24" rx="2" fill="#4F46E5" opacity="0.6"/>
                <rect x="168" y="208" width="14" height="34" rx="2" fill="#4F46E5" opacity="0.7"/>
                <rect x="188" y="200" width="14" height="42" rx="2" fill="#4F46E5" opacity="0.8"/>
                <rect x="208" y="193" width="14" height="49" rx="2" fill="#6366F1"/>
                <rect x="228" y="185" width="14" height="57" rx="2" fill="#818CF8"/>
                <rect x="248" y="178" width="14" height="64" rx="2" fill="#A5B4FC"/>
                <rect x="268" y="170" width="14" height="72" rx="2" fill="#C4B5FD"/>
                <line x1="140" y1="242" x2="320" y2="242" stroke="#1E293B" strokeWidth="1"/>
                {/* Services list panel */}
                <rect x="334" y="164" width="122" height="94" rx="7" fill="#1E293B"/>
                <text x="344" y="178" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="600" fill="#94A3B8">Services</text>
                <rect x="340" y="184" width="6" height="6" rx="1" fill="#22C55E"/>
                <text x="350" y="190" fontFamily="system-ui,sans-serif" fontSize="8" fill="#CBD5E1">Web Dev</text>
                <rect x="340" y="196" width="6" height="6" rx="1" fill="#60A5FA"/>
                <text x="350" y="202" fontFamily="system-ui,sans-serif" fontSize="8" fill="#CBD5E1">Mobile App</text>
                <rect x="340" y="208" width="6" height="6" rx="1" fill="#F59E0B"/>
                <text x="350" y="214" fontFamily="system-ui,sans-serif" fontSize="8" fill="#CBD5E1">DevOps</text>
                <rect x="340" y="220" width="6" height="6" rx="1" fill="#F87171"/>
                <text x="350" y="226" fontFamily="system-ui,sans-serif" fontSize="8" fill="#CBD5E1">Security</text>
                <rect x="340" y="232" width="6" height="6" rx="1" fill="#C084FC"/>
                <text x="350" y="238" fontFamily="system-ui,sans-serif" fontSize="8" fill="#CBD5E1">Hosting</text>
                <rect x="340" y="244" width="6" height="6" rx="1" fill="#FB923C"/>
                <text x="350" y="250" fontFamily="system-ui,sans-serif" fontSize="8" fill="#CBD5E1">Internship</text>

                {/* Bottom status bar */}
                <rect x="134" y="268" width="322" height="26" rx="5" fill="#1E293B"/>
                <circle cx="150" cy="281" r="5" fill="#22C55E"/>
                <text x="162" y="285" fontFamily="system-ui,sans-serif" fontSize="8" fill="#94A3B8">All systems operational</text>
                <rect x="368" y="273" width="80" height="11" rx="4" fill="#4F46E5"/>
                <text x="408" y="282" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="600" fill="white">🇳🇵 Made in Nepal</text>

                {/* Laptop base */}
                <rect x="20" y="308" width="480" height="16" rx="8" fill="#1E293B"/>
                <rect x="180" y="308" width="160" height="8" rx="4" fill="#334155"/>

                {/* Floating success card */}
                <rect x="380" y="330" width="138" height="52" rx="10" fill="white" stroke="#E0E7FF" strokeWidth="1.5" filter="url(#shadow)"/>
                <circle cx="400" cy="356" r="12" fill="#DCFCE7"/>
                <text x="400" y="361" textAnchor="middle" fontSize="14">✓</text>
                <text x="416" y="350" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="700" fill="#1F2937">Project Delivered</text>
                <text x="416" y="364" fontFamily="system-ui,sans-serif" fontSize="8" fill="#6B7280">Client satisfied 🎉</text>

                {/* Floating tech pills */}
                <rect x="20" y="335" width="72" height="22" rx="11" fill="#DBEAFE" stroke="#BFDBFE" strokeWidth="1"/>
                <text x="56" y="350" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#1D4ED8">React.js</text>
                <rect x="100" y="335" width="68" height="22" rx="11" fill="#D1FAE5" stroke="#A7F3D0" strokeWidth="1"/>
                <text x="134" y="350" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#065F46">Flutter</text>
                <rect x="176" y="335" width="72" height="22" rx="11" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1"/>
                <text x="212" y="350" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#92400E">Node.js</text>
                <rect x="256" y="335" width="68" height="22" rx="11" fill="#EDE9FE" stroke="#DDD6FE" strokeWidth="1"/>
                <text x="290" y="350" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#5B21B6">Docker</text>

                <defs>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#00000018"/>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        {/* ── TRUST STATS BAR ── */}
        <section className="bg-indigo-600 py-10" aria-label="Company statistics">
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

        {/* ── SERVICES ── */}
        <section className="py-20 bg-gray-50" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">What We Offer</span>
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete IT Services Across Nepal
              </h2>
              <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                From web and mobile development to DevOps, security, and free internships — we cover every aspect of your digital journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <article
                  key={index}
                  className={`bg-white rounded-2xl border ${service.border} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group`}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                    <a
                      href={service.link}
                      className="inline-flex items-center gap-1.5 text-indigo-600 font-semibold text-sm hover:gap-3 transition-all duration-200"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      {service.shortLinkText}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-10">
              <a href="/services" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-lg transition duration-300 shadow-md">
                View All Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="py-20 bg-white" aria-labelledby="why-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Why A1 IT Innovation?</span>
              <h2 id="why-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for Nepal. Trusted Everywhere.</h2>
              <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 rounded-2xl hover:border-indigo-200 hover:shadow-md transition-all duration-300 text-center group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT / OVERVIEW ── */}
        <section className="py-20 bg-indigo-900 text-white" aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-14">

            {/* Text */}
            <div className="flex-1">
              <span className="inline-block bg-indigo-700 text-indigo-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">Founded in Nepal, Growing Globally</span>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6">About A1 IT Innovation</h2>
              <p className="text-indigo-200 text-lg leading-relaxed mb-6">
                Founded with a mission to bridge Nepal's digital gap, A1 IT Innovation has grown into a full-service IT powerhouse — delivering scalable web platforms, mobile apps, DevOps infrastructure, and real-world IT training to students and businesses across Nepal.
              </p>
              <p className="text-indigo-300 leading-relaxed mb-8">
                Based in Damak, Jhapa with reach across Kathmandu and all of Nepal — we combine global tech standards with local understanding to deliver IT solutions that actually work for Nepali businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/company/about" className="bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition duration-300">
                  Our Story →
                </a>
                <a href="/clients" className="border border-indigo-400 text-indigo-200 hover:bg-indigo-800 font-semibold px-6 py-3 rounded-lg transition duration-300">
                  See Our Clients
                </a>
              </div>
            </div>

            {/* Achievement SVG */}
            <div className="flex-1 flex justify-center">
              <svg viewBox="0 0 420 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md" aria-label="A1 IT Innovation achievements">
                {/* Background rings */}
                <circle cx="210" cy="180" r="155" stroke="#312E81" strokeWidth="1" strokeDasharray="6 4"/>
                <circle cx="210" cy="180" r="120" stroke="#312E81" strokeWidth="1" strokeDasharray="6 4"/>
                <circle cx="210" cy="180" r="85"  stroke="#4338CA" strokeWidth="1" strokeDasharray="4 4"/>
                {/* Center */}
                <circle cx="210" cy="180" r="60" fill="#312E81"/>
                <circle cx="210" cy="180" r="50" fill="#4F46E5"/>
                <text x="210" y="173" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="800" fill="white">A1 IT</text>
                <text x="210" y="190" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="10" fill="#C7D2FE">Innovation</text>
                {/* Stat nodes */}
                <circle cx="210" cy="40"  r="34" fill="#1E3A5F"/>
                <circle cx="210" cy="40"  r="28" fill="#0369A1"/>
                <text x="210" y="35"  textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="14" fontWeight="800" fill="#7DD3FC">20+</text>
                <text x="210" y="50"  textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8"  fill="#BAE6FD">Clients</text>

                <circle cx="370" cy="130" r="34" fill="#1E3A2F"/>
                <circle cx="370" cy="130" r="28" fill="#065F46"/>
                <text x="370" y="125" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="14" fontWeight="800" fill="#6EE7B7">19+</text>
                <text x="370" y="140" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8"  fill="#A7F3D0">Projects</text>

                <circle cx="340" cy="300" r="34" fill="#3B1F00"/>
                <circle cx="340" cy="300" r="28" fill="#B45309"/>
                <text x="340" y="295" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="14" fontWeight="800" fill="#FCD34D">4+</text>
                <text x="340" y="310" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8"  fill="#FDE68A">Years</text>

                <circle cx="80"  cy="300" r="34" fill="#3B003B"/>
                <circle cx="80"  cy="300" r="28" fill="#7C3AED"/>
                <text x="80"  y="295" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="14" fontWeight="800" fill="#DDD6FE">8+</text>
                <text x="80"  y="310" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8"  fill="#EDE9FE">Team</text>

                <circle cx="50"  cy="130" r="34" fill="#3B1F2B"/>
                <circle cx="50"  cy="130" r="28" fill="#9F1239"/>
                <text x="50"  y="125" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="14" fontWeight="800" fill="#FCA5A5">500+</text>
                <text x="50"  y="140" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="8"  fill="#FECDD3">Students</text>

                {/* Connecting lines */}
                <line x1="210" y1="120" x2="210" y2="68"  stroke="#4338CA" strokeWidth="1.5" strokeDasharray="4 3"/>
                <line x1="255" y1="148" x2="344" y2="154" stroke="#4338CA" strokeWidth="1.5" strokeDasharray="4 3"/>
                <line x1="240" y1="225" x2="316" y2="272" stroke="#4338CA" strokeWidth="1.5" strokeDasharray="4 3"/>
                <line x1="180" y1="225" x2="104" y2="272" stroke="#4338CA" strokeWidth="1.5" strokeDasharray="4 3"/>
                <line x1="165" y1="148" x2="76"  y2="154" stroke="#4338CA" strokeWidth="1.5" strokeDasharray="4 3"/>

                {/* Nepal label */}
                <rect x="152" y="330" width="116" height="24" rx="12" fill="#312E81"/>
                <text x="210" y="346" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600" fill="#A5B4FC">🇳🇵 Proudly from Nepal</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-indigo-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Great?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">Tell us your idea — we'll turn it into a world-class digital product, built right here in Nepal.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-lg transition duration-300 shadow-lg">
                Get Free Consultation
              </a>
              <a href="/works" className="border border-gray-500 hover:border-gray-300 text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-lg transition duration-300">
                View Our Portfolio
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
