import { Helmet } from "react-helmet";
import AadityaSigdel   from "../../assets/Team/AadityaSigdel.jpg";
import AlishKarki      from "../../assets/Team/Alice.jpg";
import PrajwalDahala   from "../../assets/Team/Prajwal.jpg";
import SandipChapagain from "../../assets/Team/SandipChapagain.jpg";
import SarkarHasada    from "../../assets/Team/sarkarhasada.jpg";
import Footer          from "../../components/Footer";
import Navigation      from "../../components/Navigation";

/* ── DATA ── */

const stats = [
  { value: "20+",  label: "Clients Served",   icon: "🤝" },
  { value: "19+",  label: "Projects Delivered",icon: "🚀" },
  { value: "4+",   label: "Years Active",       icon: "📅" },
  { value: "500+", label: "Students Trained",   icon: "🎓" },
];

const offices = [
  { city: "Damak, Jhapa",                  label: "Main Office",     icon: "🏢", desc: "Our founding office — where it all started." },
  { city: "Kageshwori Manohara, Kathmandu",label: "Kathmandu Office",icon: "🏙️", desc: "Serving capital-based clients and partnerships." },
  { city: "Sallaghari, Bhaktapur",         label: "Bhaktapur Office",icon: "🏘️", desc: "Expanding our reach across the Kathmandu Valley." },
];

const coreValues = [
  { icon: "🚀", title: "Innovation",           desc: "We embrace change and build solutions that push what's possible in Nepal's tech landscape." },
  { icon: "🤝", title: "Collaboration",         desc: "Teamwork drives us — diverse ideas, one shared mission." },
  { icon: "⭐", title: "Integrity",             desc: "Honesty and transparency in every client interaction, every project, every decision." },
  { icon: "💡", title: "Customer-Centricity",   desc: "Our clients' success is our success. We listen first, build second." },
  { icon: "📚", title: "Continuous Learning",   desc: "We grow constantly — through mentorship, training, and hands-on experience." },
  { icon: "💪", title: "Resilience",            desc: "We face challenges with determination and turn setbacks into stepping stones." },
  { icon: "🫶", title: "Empathy",               desc: "Understanding people's real needs is how we build technology that actually matters." },
  { icon: "⚖️", title: "Equity",               desc: "Fair opportunities for all — in our team, our internship program, and our community." },
  { icon: "🙏", title: "Respect",               desc: "Every voice matters. We treat all people — clients, interns, and teammates — with dignity." },
  { icon: "😊", title: "Joyful Workplace",      desc: "We build a culture where creativity thrives and people love showing up to work." },
];

const teamMembers = [
  { name: "Sandip Chapagain", role: "Founder & CEO",        image: SandipChapagain, isFounder: true },
  { name: "Alish Karki",      role: "Flutter Developer",    image: AlishKarki },
  { name: "Aaditya Sigdel",   role: "Frontend Developer",   image: AadityaSigdel },
  { name: "Sarkar Hasada",    role: "Frontend Developer",   image: SarkarHasada },
  { name: "Prajwal Dahala",   role: "AI / ML Engineer",     image: PrajwalDahala },
  { name: "Suraj Rai",        role: "Graphic Designer",     image: null },
  { name: "Sujal Thapa",      role: "Digital Marketing",    image: null },
];

/* Avatar fallback — colored circle with initials */
function Avatar({ name, image, size = "lg" }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const colors = ["bg-indigo-500","bg-purple-500","bg-teal-500","bg-orange-500","bg-pink-500","bg-blue-500","bg-green-600"];
  const colorIdx = name.charCodeAt(0) % colors.length;
  const dim = size === "lg" ? "w-28 h-28" : "w-20 h-20";
  const txt = size === "lg" ? "text-2xl" : "text-lg";

  return image ? (
    <img src={image} alt={name} className={`${dim} rounded-full object-cover border-4 border-white shadow-md`} loading="lazy"/>
  ) : (
    <div className={`${dim} rounded-full ${colors[colorIdx]} flex items-center justify-center border-4 border-white shadow-md`}>
      <span className={`${txt} font-bold text-white`}>{initials}</span>
    </div>
  );
}

/* ── COMPONENT ── */
export default function Aboutus() {
  return (
    <>
      <Helmet>
        <title>About Us | A1 IT Innovation Nepal — Our Story, Team & Mission</title>
        <meta name="description" content="Learn about A1 IT Innovation — Nepal's trusted IT company founded in 2021. Based in Damak, Kathmandu & Bhaktapur. Meet our team, discover our mission, values, and why 20+ clients trust us." />
        <meta name="keywords" content="A1 IT Innovation about us, IT company Nepal team, software company Damak Jhapa, Nepal IT company founders, web development company Nepal, tech company Kathmandu Bhaktapur" />
        <link rel="canonical" href="https://www.a1itinnovation.com.np/company/about" />
        <meta property="og:title" content="About A1 IT Innovation | Nepal's Trusted IT Company" />
        <meta property="og:description" content="Founded in 2021, A1 IT Innovation delivers web, mobile, DevOps & AI solutions across Nepal. Offices in Damak, Kathmandu & Bhaktapur." />
        <meta property="og:url" content="https://www.a1itinnovation.com.np/company/about" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "A1 IT Innovation",
          "legalName": "A. One IT Innovation Pvt. Ltd.",
          "url": "https://www.a1itinnovation.com.np",
          "logo": "https://www.a1itinnovation.com.np/Publiclogo.png",
          "foundingDate": "2021",
          "description": "Nepal's trusted IT company offering web development, mobile apps, DevOps, AI solutions, online courses, and free internships.",
          "telephone": "+977-9816032025",
          "location": [
            { "@type": "Place", "name": "Damak, Jhapa, Nepal" },
            { "@type": "Place", "name": "Kageshwori Manohara, Kathmandu, Nepal" },
            { "@type": "Place", "name": "Sallaghari, Bhaktapur, Nepal" },
          ],
          "employee": teamMembers.map((m) => ({
            "@type": "Person",
            "name": m.name,
            "jobTitle": m.role,
          })),
        })}</script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen">

        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/>
                Founded in Nepal · Est. 2021
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
                About <span className="text-indigo-600">A1 IT Innovation</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-6">
                We're a Nepal-based IT company on a mission to bridge the digital gap — delivering world-class web, mobile, DevOps, and AI solutions to businesses and giving students real tech careers through our free internship program.
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                <span className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">📍 3 Offices Across Nepal</span>
                <span className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">🤝 20+ Clients Served</span>
                <span className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">🎓 Free Internship Program</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-md transition-colors inline-flex items-center justify-center gap-2">
                  Work With Us
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
                <a href="/company/why-us" className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-semibold px-8 py-3.5 rounded-lg shadow-sm transition-colors text-center">
                  Why Choose Us
                </a>
              </div>
            </div>

            {/* SVG Illustration */}
            <div className="flex-1 flex justify-center">
              <svg viewBox="0 0 460 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg drop-shadow-xl" aria-label="A1 IT Innovation team illustration">
                {/* Office building */}
                <rect x="140" y="60" width="180" height="200" rx="8" fill="#1E293B"/>
                <rect x="140" y="60" width="180" height="24" rx="8" fill="#4F46E5"/>
                <text x="230" y="77" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="white">A1 IT Innovation</text>
                {/* Windows row 1 */}
                {[160,200,240,280].map((x,i) => <rect key={i} x={x} y="102" width="28" height="22" rx="3" fill={i===0?"#22D3EE":i===1?"#34D399":i===2?"#FBBF24":"#F87171"}/>)}
                {/* Windows row 2 */}
                {[160,200,240,280].map((x,i) => <rect key={i} x={x} y="140" width="28" height="22" rx="3" fill="#1E293B" stroke="#334155" strokeWidth="1"/>)}
                {[162,202,242,282].map((x,i) => <rect key={i} x={x} y="142" width="10" height="18" rx="2" fill="#4F46E5" opacity="0.5"/>)}
                {/* Windows row 3 */}
                {[160,200,240,280].map((x,i) => <rect key={i} x={x} y="178" width="28" height="22" rx="3" fill="#1E293B" stroke="#334155" strokeWidth="1"/>)}
                {/* Door */}
                <rect x="212" y="224" width="36" height="36" rx="4" fill="#4F46E5"/>
                <circle cx="243" cy="243" r="2.5" fill="#C7D2FE"/>
                {/* Ground */}
                <rect x="100" y="260" width="260" height="8" rx="4" fill="#334155"/>
                {/* Flag */}
                <line x1="230" y1="60" x2="230" y2="30" stroke="#94A3B8" strokeWidth="2"/>
                <rect x="230" y="30" width="22" height="14" rx="2" fill="#EF4444"/>
                <text x="241" y="41" textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="white">🇳🇵</text>

                {/* Left floating card — Team */}
                <rect x="20" y="100" width="110" height="64" rx="10" fill="white" stroke="#E0E7FF" strokeWidth="1.5"/>
                <text x="75" y="122" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#1F2937">Our Team</text>
                <circle cx="50" cy="148" r="12" fill="#4F46E5"/><text x="50" y="153" textAnchor="middle" fontSize="10" fill="white">SC</text>
                <circle cx="75" cy="148" r="12" fill="#0369A1"/><text x="75" y="153" textAnchor="middle" fontSize="10" fill="white">AK</text>
                <circle cx="100" cy="148" r="12" fill="#065F46"/><text x="100" y="153" textAnchor="middle" fontSize="10" fill="white">AS</text>
                <text x="75" y="175" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="#64748B">8+ Members</text>
                <line x1="130" y1="132" x2="140" y2="132" stroke="#C7D2FE" strokeWidth="1.5" strokeDasharray="3 2"/>

                {/* Right floating card — Stats */}
                <rect x="330" y="100" width="110" height="64" rx="10" fill="white" stroke="#E0E7FF" strokeWidth="1.5"/>
                <text x="385" y="122" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#1F2937">Impact</text>
                <text x="355" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="800" fill="#4F46E5">20+</text>
                <text x="355" y="160" textAnchor="middle" fontFamily="system-ui" fontSize="7" fill="#64748B">Clients</text>
                <text x="385" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="800" fill="#059669">19+</text>
                <text x="385" y="160" textAnchor="middle" fontFamily="system-ui" fontSize="7" fill="#64748B">Projects</text>
                <text x="415" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="800" fill="#D97706">4+</text>
                <text x="415" y="160" textAnchor="middle" fontFamily="system-ui" fontSize="7" fill="#64748B">Years</text>
                <line x1="320" y1="132" x2="330" y2="132" stroke="#C7D2FE" strokeWidth="1.5" strokeDasharray="3 2"/>

                {/* Bottom cards — Offices */}
                <rect x="60" y="285" width="100" height="40" rx="8" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1"/>
                <text x="110" y="302" textAnchor="middle" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="#4338CA">📍 Damak, Jhapa</text>
                <text x="110" y="316" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="#6366F1">Main Office</text>

                <rect x="180" y="285" width="100" height="40" rx="8" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1"/>
                <text x="230" y="302" textAnchor="middle" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="#166534">📍 Kathmandu</text>
                <text x="230" y="316" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="#16A34A">KGM Office</text>

                <rect x="300" y="285" width="100" height="40" rx="8" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1"/>
                <text x="350" y="302" textAnchor="middle" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="#92400E">📍 Bhaktapur</text>
                <text x="350" y="316" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="#B45309">Sallaghari</text>

                {/* Nepal badge */}
                <rect x="160" y="342" width="140" height="26" rx="13" fill="#4F46E5"/>
                <text x="230" y="359" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="white">🇳🇵 Proudly Made in Nepal</text>
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

        {/* ── OUR STORY ── */}
        <section className="py-20 bg-white px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Built in Nepal. Growing Globally.</h2>
              <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mt-4"/>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-2xl p-8 md:p-10 space-y-5 text-gray-700 leading-relaxed text-[15px]">
              <p className="text-lg">
                <strong className="text-indigo-700">A1 IT Innovation</strong> was founded in 2021 with a single mission: to bridge Nepal's digital gap by delivering reliable, affordable, and world-class IT solutions to businesses and students across the country.
              </p>
              <p>
                What started as a small team in Damak, Jhapa has grown into a full-service IT company with offices in Kathmandu and Bhaktapur — serving 20+ clients across diverse industries including gaming, transport, healthcare, education, and business management.
              </p>
              <p>
                We believe technology should be accessible to everyone. That's why we offer a <strong>100% free internship program</strong> — giving students across Nepal the chance to work on real projects, learn from experienced mentors, and launch careers in tech without any barriers.
              </p>
              <p>
                Today, A1 IT Innovation provides web development, mobile app development, DevOps managed services, AI solutions, online courses, and security audits — all built on our core commitment: <strong>transparency, quality, and client clarity</strong>.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-indigo-900 text-white rounded-2xl p-7">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-indigo-200 text-sm leading-relaxed">
                  To empower Nepali businesses and students with technology — delivering affordable, world-class IT solutions and creating pathways into tech careers through real-world education.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-7">
                <div className="text-3xl mb-3">🔭</div>
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  To be Nepal's most trusted IT partner — recognized for transparency, innovation, and the positive impact we create for every business and student we work with.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR OFFICES ── */}
        <section className="py-16 bg-gray-50 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Where We Are</span>
              <h2 className="text-3xl font-bold text-gray-900">Our Offices Across Nepal</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offices.map((office, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center group hover:border-indigo-200">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{office.icon}</div>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">{office.label}</span>
                  <h3 className="text-base font-bold text-gray-900 mt-3 mb-1">{office.city}</h3>
                  <p className="text-sm text-gray-500">{office.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section className="py-20 bg-white px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">What We Stand For</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"/>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">The principles that guide every project, every hire, and every client relationship.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {coreValues.map((v, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:bg-indigo-50 hover:border-indigo-200 hover:shadow-md transition-all duration-300 group text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{v.icon}</div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="py-20 bg-gray-50 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">The People</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"/>
              <p className="text-gray-500 mt-4">The talented people behind every project we deliver.</p>
            </div>

            {/* Founder — centered, larger */}
            {teamMembers.filter((m) => m.isFounder).map((m, i) => (
              <div key={i} className="flex justify-center mb-12">
                <a href="/sandip-chapagain" className="bg-white rounded-2xl border border-indigo-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 text-center w-56 group block">
                  <div className="flex justify-center mb-4">
                    <Avatar name={m.name} image={m.image} size="lg"/>
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{m.name}</h3>
                  <p className="text-sm text-indigo-600 font-semibold mt-1">{m.role}</p>
                  <span className="inline-block mt-3 text-xs bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full font-semibold">👑 Founder</span>
                  <p className="text-xs text-indigo-400 mt-2 group-hover:text-indigo-600 transition-colors">View Profile →</p>
                </a>
              </div>
            ))}

            {/* Rest of team */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {teamMembers.filter((m) => !m.isFounder).map((m, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-4 text-center group">
                  <div className="flex justify-center mb-3">
                    <Avatar name={m.name} image={m.image} size="sm"/>
                  </div>
                  <h3 className="text-xs font-bold text-gray-900 leading-tight">{m.name}</h3>
                  <p className="text-xs text-indigo-600 font-medium mt-1">{m.role}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-400 mt-8">
              + more contributors, interns & partners across Nepal 🇳🇵
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-indigo-900 text-white text-center px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Work With Us?</h2>
            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
              Whether you're a business looking for an IT partner or a student starting your tech career — we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-lg transition duration-300 shadow-lg">Start a Project</a>
              <a href="/services/internship"  className="border border-indigo-400 hover:border-white text-indigo-200 hover:text-white font-semibold px-8 py-3.5 rounded-lg transition duration-300">Apply for Internship</a>
              <a href="/company/career"       className="border border-gray-500 hover:border-gray-300 text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-lg transition duration-300">Join Our Team</a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
