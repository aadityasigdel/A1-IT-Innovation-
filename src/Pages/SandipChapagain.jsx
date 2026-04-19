import { Helmet } from "react-helmet";
import SandipPhoto from "../assets/Team/SandipChapagain.jpg";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const skills = [
  { category: "Backend Development", icon: "☕", items: ["Java", "Spring Boot", "REST APIs", "Microservices", "Spring Security"] },
  { category: "DevOps & Infrastructure", icon: "⚙️", items: ["Docker", "Kubernetes", "CI/CD Pipelines", "Terraform", "Linux Server Management"] },
  { category: "System Design", icon: "🏗️", items: ["Scalable Architecture", "Database Design", "Distributed Systems", "Load Balancing", "Caching Strategies"] },
  { category: "Cybersecurity", icon: "🔐", items: ["Penetration Testing", "Vulnerability Assessment", "Security Auditing", "NIST Framework", "Ethical Hacking"] },
];

const education = [
  {
    degree: "Master of Information Technology (MIT)",
    institute: "Tribhuvan University (TU), Nepal",
    icon: "🎓",
    level: "Postgraduate",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Tribhuvan University (TU), Nepal",
    icon: "📚",
    level: "Undergraduate",
  },
];

const timeline = [
  { year: "2021", title: "Founded A1 IT Innovation", desc: "Started A1 IT Innovation in Damak, Jhapa with a mission to bridge Nepal's digital gap and make quality IT solutions accessible to every business." },
  { year: "2022", title: "First Major Clients", desc: "Delivered the first set of web and mobile projects — including educational institution websites and mobile apps — establishing A1 IT Innovation as a trusted name in the Jhapa region." },
  { year: "2023", title: "Expanded to Kathmandu & Bhaktapur", desc: "Opened offices in Kageshwori Manohara, Kathmandu and Sallaghari, Bhaktapur — extending our reach across Nepal and taking on larger enterprise clients." },
  { year: "2024", title: "Launched Free Internship Program", desc: "Formalized the free IT internship program, giving 500+ students across Nepal hands-on experience with real projects — fulfilling a personal commitment to give back to Nepal's tech community." },
  { year: "2025", title: "DevOps & Online Courses Launch", desc: "Expanded into managed DevOps services and launched online courses in Digital Marketing, Cybersecurity, DevOps, and System Design — making professional tech education accessible in Nepal." },
  { year: "2026", title: "20+ Clients & Growing", desc: "A1 IT Innovation now serves 20+ clients across gaming, transport, healthcare, education, and business sectors — and continues to grow as Nepal's trusted full-service IT partner." },
];

export default function SandipChapagain() {
  return (
    <>
      <Helmet>
        <title>Sandip Chapagain — Founder & CEO of A1 IT Innovation Nepal</title>
        <meta name="description" content="Sandip Chapagain is the Founder & CEO of A1 IT Innovation Nepal. MIT graduate from Tribhuvan University. Expert in Java, Spring Boot, DevOps, System Design & Cybersecurity. Leading Nepal's digital transformation." />
        <meta name="keywords" content="Sandip Chapagain, Sandip Chapagain Nepal, A1 IT Innovation founder, IT entrepreneur Nepal, Java developer Nepal, DevOps engineer Nepal, system design Nepal, cybersecurity Nepal, MIT Tribhuvan University, BCA Nepal, tech founder Nepal, Damak Jhapa IT" />
        <link rel="canonical" href="https://www.a1itinnovation.com.np/sandip-chapagain" />
        <meta property="og:title" content="Sandip Chapagain — Founder & CEO, A1 IT Innovation Nepal" />
        <meta property="og:description" content="Meet Sandip Chapagain — tech entrepreneur, Java & DevOps engineer, and founder of A1 IT Innovation, Nepal's trusted IT company." />
        <meta property="og:url" content="https://www.a1itinnovation.com.np/sandip-chapagain" />
        <meta property="og:image" content="https://www.a1itinnovation.com.np/Publiclogo.png" />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Sandip" />
        <meta property="profile:last_name" content="Chapagain" />
        <meta name="twitter:title" content="Sandip Chapagain — Founder & CEO, A1 IT Innovation Nepal" />
        <meta name="twitter:description" content="Tech entrepreneur, Java & DevOps expert, and founder of A1 IT Innovation Nepal." />
        {/* JSON-LD Person Schema — critical for Google search ranking */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Sandip Chapagain",
          "givenName": "Sandip",
          "familyName": "Chapagain",
          "jobTitle": "Founder & CEO",
          "description": "Sandip Chapagain is the Founder and CEO of A1 IT Innovation Nepal. He holds a Master of Information Technology (MIT) from Tribhuvan University and is an expert in Java, Spring Boot, DevOps, System Design, and Cybersecurity.",
          "url": "https://www.a1itinnovation.com.np/sandip-chapagain",
          "image": "https://www.a1itinnovation.com.np/Publiclogo.png",
          "nationality": "Nepali",
          "alumniOf": [
            { "@type": "CollegeOrUniversity", "name": "Tribhuvan University", "sameAs": "https://tu.edu.np" },
          ],
          "hasCredential": [
            { "@type": "EducationalOccupationalCredential", "name": "Master of Information Technology (MIT)", "recognizedBy": { "@type": "Organization", "name": "Tribhuvan University" } },
            { "@type": "EducationalOccupationalCredential", "name": "Bachelor of Computer Applications (BCA)", "recognizedBy": { "@type": "Organization", "name": "Tribhuvan University" } },
          ],
          "knowsAbout": ["Java", "Spring Boot", "DevOps", "Kubernetes", "Docker", "System Design", "Cybersecurity", "Web Development", "Mobile App Development"],
          "worksFor": {
            "@type": "Organization",
            "name": "A1 IT Innovation",
            "url": "https://www.a1itinnovation.com.np",
          },
          "founder": {
            "@type": "Organization",
            "name": "A1 IT Innovation",
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Damak",
            "addressRegion": "Jhapa",
            "addressCountry": "NP",
          },
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61557621773133",
            "https://www.linkedin.com/company/a1itinnovation",
          ],
        })}</script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen">

        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-20 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-indigo-400 shadow-2xl">
                  <img
                    src={SandipPhoto}
                    alt="Sandip Chapagain — Founder & CEO of A1 IT Innovation Nepal"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Verified badge */}
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-800/50 text-indigo-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                🇳🇵 Founder · Tech Entrepreneur · Nepal
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Sandip Chapagain</h1>
              <p className="text-indigo-300 text-xl font-semibold mb-4">Founder & CEO — A1 IT Innovation</p>
              <p className="text-gray-300 text-base leading-relaxed max-w-xl mb-6">
                Technologist, entrepreneur, and educator on a mission to accelerate Nepal's digital transformation — one product, one student, and one business at a time.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                {["Java", "Spring Boot", "DevOps", "System Design", "Cybersecurity"].map((s) => (
                  <span key={s} className="bg-indigo-800/60 border border-indigo-600 text-indigo-200 text-xs font-semibold px-3 py-1.5 rounded-full">{s}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="/contact" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
                  Get in Touch
                </a>
                <a href="https://www.linkedin.com/company/a1itinnovation" target="_blank" rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm border border-white/20">
                  LinkedIn
                </a>
                <a href="/" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm border border-white/20">
                  A1 IT Innovation →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUICK STATS ── */}
        <section className="bg-indigo-600 py-8 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "4+",   label: "Years Leading",     icon: "📅" },
              { value: "20+",  label: "Clients Delivered",  icon: "🤝" },
              { value: "500+", label: "Students Mentored",  icon: "🎓" },
              { value: "3",    label: "Offices in Nepal",   icon: "📍" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-xl mb-1">{s.icon}</div>
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-indigo-200 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

          {/* ── ABOUT ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-lg">👤</span>
              About Sandip Chapagain
            </h2>
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong className="text-indigo-700">Sandip Chapagain</strong> is a Nepali tech entrepreneur, software engineer, and educator based in Damak, Jhapa, Nepal. He is the <strong>Founder & CEO of A1 IT Innovation</strong> — a full-service IT company delivering web development, mobile apps, DevOps managed services, AI solutions, and online tech education across Nepal.
              </p>
              <p>
                Sandip holds a <strong>Master of Information Technology (MIT)</strong> and a <strong>Bachelor of Computer Applications (BCA)</strong>, both from Tribhuvan University — Nepal's largest and most prestigious public university. His academic background, combined with years of hands-on industry experience, has shaped his expertise across Java backend development, Spring Boot, DevOps infrastructure, system design, and cybersecurity.
              </p>
              <p>
                Beyond building software, Sandip is deeply committed to growing Nepal's tech talent pipeline. Under his leadership, A1 IT Innovation has trained <strong>500+ students</strong> through free IT internships and college workshops — giving the next generation of Nepali developers real-world project experience at no cost.
              </p>
              <p>
                His guiding philosophy is simple: <em>"Technology should be accessible, transparent, and purposeful — and Nepal has every resource it needs to compete globally in tech."</em>
              </p>
            </div>
          </section>

          {/* ── EDUCATION ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-lg">🎓</span>
              Education
            </h2>
            <div className="space-y-4">
              {education.map((e, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 flex items-start gap-5">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{e.icon}</div>
                  <div>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">{e.level}</span>
                    <h3 className="text-base font-bold text-gray-900 mt-2">{e.degree}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{e.institute}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SKILLS ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-lg">⚡</span>
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {skills.map((s, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{s.icon}</span>
                    <h3 className="font-bold text-gray-900 text-sm">{s.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span key={item} className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-1 rounded-full font-medium">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── VISION & MISSION ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-lg">🔭</span>
              Vision & Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 text-white rounded-2xl p-7">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-bold mb-3">Personal Mission</h3>
                <p className="text-indigo-200 text-sm leading-relaxed">
                  To contribute to Nepal's digital transformation by building technology that empowers Nepali businesses, creating pathways into tech careers for Nepali students, and proving that world-class software can be built right here in Nepal.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-indigo-900 text-white rounded-2xl p-7">
                <div className="text-3xl mb-3">🌏</div>
                <h3 className="text-lg font-bold mb-3">Long-Term Vision</h3>
                <p className="text-indigo-200 text-sm leading-relaxed">
                  To position Nepal on the global tech map — not just as an outsourcing destination, but as a country that builds innovative digital products, grows its own tech companies, and produces engineers who compete at a global level.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm md:col-span-2">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Commitment to Nepal's Tech Community</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sandip believes that access to real tech education should not be a privilege. Through A1 IT Innovation's free internship program and college workshops, he has personally mentored hundreds of students — many of whom have gone on to professional careers in tech. His goal is to scale this program further and make Nepal one of South Asia's strongest IT talent pipelines.
                </p>
              </div>
            </div>
          </section>

          {/* ── JOURNEY / TIMELINE ── */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-lg">🗓️</span>
              Journey & Milestones
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-indigo-100 hidden sm:block"/>
              <div className="space-y-6">
                {timeline.map((t, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md z-10">
                      {t.year.slice(2)}
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-indigo-600">{t.year}</span>
                        <h3 className="font-bold text-gray-900 text-sm">{t.title}</h3>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>

        {/* ── CTA ── */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-indigo-900 text-white text-center px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Want to Work with Sandip & the A1 IT Team?</h2>
            <p className="text-gray-300 mb-8">Have a project in mind, a business challenge to solve, or want to discuss Nepal's tech future? Let's connect.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-lg transition duration-300">
                Contact Sandip
              </a>
              <a href="/company/about" className="border border-gray-500 hover:border-gray-300 text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-lg transition duration-300">
                Meet the Full Team
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
