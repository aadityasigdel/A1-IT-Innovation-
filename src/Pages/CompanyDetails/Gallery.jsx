import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

import Img1  from "../../assets/Gallery/1.jpg";
import Img2  from "../../assets/Gallery/2.jpg";
import Img3  from "../../assets/Gallery/3.jpg";
import Img4  from "../../assets/Gallery/4.jpg";
import Img5  from "../../assets/Gallery/5.jpg";
import Img6  from "../../assets/Gallery/6.jpg";
import Img7  from "../../assets/Gallery/7.jpg";
import Img8  from "../../assets/Gallery/8.jpg";
import Img9  from "../../assets/Gallery/9.jpg";
import Img10 from "../../assets/Gallery/10.jpg";
import Img11 from "../../assets/Gallery/11.jpg";
import Img12 from "../../assets/Gallery/12.jpg";
import Img13 from "../../assets/Gallery/13.jpg";
import Img14 from "../../assets/Gallery/14.jpg";
import Img15 from "../../assets/Gallery/15.jpg";
import Img16 from "../../assets/Gallery/16.jpg";
import Img17 from "../../assets/Gallery/17.jpg";
import Img18 from "../../assets/Gallery/18.jpg";
import Img19 from "../../assets/Gallery/19.jpg";
import Img20 from "../../assets/Gallery/20.jpg";
import Img21 from "../../assets/Gallery/21.jpg";
import Img22 from "../../assets/Gallery/22.jpg";
import Img23 from "../../assets/Gallery/23.jpg";
import Img24 from "../../assets/Gallery/24.jpg";
import Img25 from "../../assets/Gallery/25.jpg";
import Img26 from "../../assets/Gallery/26.jpg";

const images = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9,
  Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19,
  Img20, Img21, Img22, Img23, Img24, Img25, Img26,
];

const stats = [
  { value: "26+", label: "Photos Captured"   },
  { value: "10+", label: "Colleges Visited"  },
  { value: "500+", label: "Students Trained" },
  { value: "4+",  label: "Years of Training" },
];

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Gallery | A1 IT Innovation Nepal — Training & Workshop Photos</title>
        <meta name="description" content="Explore A1 IT Innovation's training and workshop gallery. Real photos from IT training sessions, technical workshops, and college visits across Damak, Jhapa, Kathmandu, and Nepal." />
        <meta name="keywords" content="A1 IT Innovation gallery, IT training Nepal, workshop photos, college training Damak, technical workshop Jhapa, coding workshop Nepal, IT internship photos" />
        <link rel="canonical" href="https://www.a1itinnovation.com.np/company/gallery" />
        <meta property="og:title" content="Gallery | A1 IT Innovation Nepal" />
        <meta property="og:description" content="Photos from our IT training sessions and technical workshops at colleges across Nepal." />
        <meta property="og:url" content="https://www.a1itinnovation.com.np/company/gallery" />
        <meta property="og:image" content="https://www.a1itinnovation.com.np/Publiclogo.png" />
      </Helmet>

      <Navigation />

      <main className="bg-white">

        {/* ── Hero ── */}
        <section className="min-h-[88vh] flex items-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-14 py-20">

            {/* Text */}
            <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full w-fit mx-auto lg:mx-0">
                <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
                Training &amp; Workshop Gallery
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                Where Knowledge<br/>
                <span className="text-indigo-600">Meets Action</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Real moments from our hands-on IT training sessions and technical workshops conducted at colleges and institutions across Nepal — building the next generation of tech talent.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="flex items-center gap-1.5 bg-white border border-indigo-200 text-indigo-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm">🎓 College Visits</span>
                <span className="flex items-center gap-1.5 bg-white border border-blue-200 text-blue-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm">💻 Coding Workshops</span>
                <span className="flex items-center gap-1.5 bg-white border border-purple-200 text-purple-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm">🚀 Tech Seminars</span>
              </div>
            </div>

            {/* Workshop SVG Illustration */}
            <div className="flex-1 flex justify-center">
              <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg drop-shadow-sm" aria-label="Workshop training illustration">
                {/* Room background */}
                <rect width="500" height="400" rx="16" fill="#F0F4FF"/>
                {/* Floor */}
                <rect x="0" y="310" width="500" height="90" rx="0" fill="#E8ECF8"/>
                <rect x="0" y="308" width="500" height="6" fill="#C7D2FE"/>

                {/* Projector screen */}
                <rect x="30" y="40" width="220" height="150" rx="6" fill="#1E293B" stroke="#334155" strokeWidth="2"/>
                <rect x="38" y="48" width="204" height="134" rx="3" fill="#0F172A"/>
                {/* Screen content - code */}
                <rect x="38" y="48" width="204" height="28" rx="3" fill="#4F46E5"/>
                <text x="140" y="66" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="700" fill="white">A1 IT Innovation — Workshop</text>
                <text x="50" y="95"  fontFamily="monospace" fontSize="8" fill="#34D399">function</text>
                <text x="100" y="95" fontFamily="monospace" fontSize="8" fill="#60A5FA">learnIT</text>
                <text x="148" y="95" fontFamily="monospace" fontSize="8" fill="#E5E7EB">() {"{"}</text>
                <text x="58" y="110" fontFamily="monospace" fontSize="8" fill="#A78BFA">  const</text>
                <text x="94" y="110" fontFamily="monospace" fontSize="8" fill="#F59E0B">skills</text>
                <text x="128" y="110" fontFamily="monospace" fontSize="8" fill="#E5E7EB">= [];</text>
                <text x="58" y="125" fontFamily="monospace" fontSize="8" fill="#A78BFA">  skills</text>
                <text x="102" y="125" fontFamily="monospace" fontSize="8" fill="#E5E7EB">.push(</text>
                <text x="140" y="125" fontFamily="monospace" fontSize="8" fill="#34D399">"React"</text>
                <text x="186" y="125" fontFamily="monospace" fontSize="8" fill="#E5E7EB">);</text>
                <text x="58" y="140" fontFamily="monospace" fontSize="8" fill="#A78BFA">  return</text>
                <text x="100" y="140" fontFamily="monospace" fontSize="8" fill="#F59E0B">future</text>
                <text x="134" y="140" fontFamily="monospace" fontSize="8" fill="#E5E7EB">;</text>
                <text x="50" y="155" fontFamily="monospace" fontSize="8" fill="#E5E7EB">{"}"}</text>
                {/* Screen stand */}
                <rect x="130" y="190" width="8" height="30" fill="#475569"/>
                <rect x="110" y="218" width="48" height="6" rx="3" fill="#475569"/>

                {/* Trainer/instructor */}
                <circle cx="290" cy="115" r="20" fill="#FBBF24"/>
                <circle cx="290" cy="115" r="16" fill="#F59E0B"/>
                {/* Face */}
                <circle cx="285" cy="112" r="2.5" fill="#1E293B"/>
                <circle cx="295" cy="112" r="2.5" fill="#1E293B"/>
                <path d="M284 120 Q290 125 296 120" stroke="#1E293B" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                {/* Body */}
                <rect x="276" y="136" width="28" height="50" rx="8" fill="#4F46E5"/>
                {/* Pointing arm */}
                <line x1="276" y1="148" x2="248" y2="138" stroke="#FBBF24" strokeWidth="5" strokeLinecap="round"/>
                <circle cx="246" cy="137" r="5" fill="#FBBF24"/>
                {/* Legs */}
                <rect x="280" y="184" width="10" height="40" rx="4" fill="#1E293B"/>
                <rect x="294" y="184" width="10" height="40" rx="4" fill="#1E293B"/>
                {/* Shoes */}
                <rect x="276" y="220" width="18" height="8" rx="4" fill="#374151"/>
                <rect x="290" y="220" width="18" height="8" rx="4" fill="#374151"/>

                {/* Student 1 */}
                <circle cx="370" cy="200" r="16" fill="#FDE68A"/>
                <circle cx="370" cy="200" r="13" fill="#FCD34D"/>
                <circle cx="366" cy="197" r="2" fill="#1E293B"/>
                <circle cx="374" cy="197" r="2" fill="#1E293B"/>
                <path d="M366 204 Q370 208 374 204" stroke="#1E293B" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <rect x="356" y="217" width="28" height="40" rx="6" fill="#059669"/>
                {/* Laptop s1 */}
                <rect x="342" y="258" width="55" height="35" rx="4" fill="#1E293B"/>
                <rect x="346" y="262" width="47" height="27" rx="2" fill="#0F172A"/>
                <rect x="346" y="262" width="47" height="8" rx="2" fill="#4F46E5"/>
                <rect x="350" y="274" width="30" height="3" rx="1" fill="#334155"/>
                <rect x="350" y="280" width="22" height="3" rx="1" fill="#334155"/>
                <rect x="335" y="292" width="70" height="6" rx="3" fill="#374151"/>

                {/* Student 2 */}
                <circle cx="440" cy="195" r="16" fill="#FCA5A5"/>
                <circle cx="440" cy="195" r="13" fill="#F87171"/>
                <circle cx="436" cy="192" r="2" fill="#1E293B"/>
                <circle cx="444" cy="192" r="2" fill="#1E293B"/>
                <path d="M436 200 Q440 204 444 200" stroke="#1E293B" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <rect x="428" y="212" width="24" height="38" rx="6" fill="#7C3AED"/>
                {/* Laptop s2 */}
                <rect x="415" y="252" width="52" height="33" rx="4" fill="#1E293B"/>
                <rect x="419" y="256" width="44" height="25" rx="2" fill="#0F172A"/>
                <rect x="419" y="256" width="44" height="8" rx="2" fill="#059669"/>
                <rect x="423" y="268" width="28" height="3" rx="1" fill="#334155"/>
                <rect x="423" y="274" width="20" height="3" rx="1" fill="#334155"/>
                <rect x="408" y="284" width="66" height="6" rx="3" fill="#374151"/>

                {/* Student 3 (background, smaller) */}
                <circle cx="405" cy="160" r="13" fill="#A5F3FC"/>
                <circle cx="405" cy="160" r="10" fill="#67E8F9"/>
                <rect x="395" y="174" width="20" height="32" rx="5" fill="#0369A1"/>

                {/* Wifi / signal icon above screen */}
                <path d="M140 25 Q140 20 150 20 Q160 20 160 25" stroke="#6366F1" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M135 22 Q140 12 150 12 Q160 12 165 22" stroke="#6366F1" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6"/>
                <circle cx="150" cy="28" r="3" fill="#6366F1"/>

                {/* Floating badges */}
                <rect x="310" y="38" width="90" height="26" rx="13" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="1"/>
                <text x="355" y="55" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="600" fill="#15803D">✓ Live Session</text>

                <rect x="310" y="72" width="90" height="26" rx="13" fill="#EDE9FE" stroke="#C4B5FD" strokeWidth="1"/>
                <text x="355" y="89" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="600" fill="#6D28D9">🎓 College Visit</text>

                <rect x="310" y="106" width="90" height="26" rx="13" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="1"/>
                <text x="355" y="123" textAnchor="middle" fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="600" fill="#92400E">500+ Students</text>
              </svg>
            </div>

          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="bg-indigo-600 py-10">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-white">{s.value}</div>
                <div className="text-indigo-200 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Gallery Label ── */}
        <section className="pt-16 pb-4 px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Training &amp; Workshop Moments</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            Captured moments from our hands-on IT training sessions, technical workshops, and college outreach programs across Nepal.
          </p>
        </section>

        {/* ── Gallery Grid ── */}
        <section className="py-10 px-6 pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100"
              >
                <img
                  src={src}
                  alt={`A1 IT Innovation training and workshop session — photo ${idx + 1}`}
                  loading="lazy"
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                  <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    🎓 Training &amp; Workshop
                  </span>
                  <span className="text-white/80 text-xs">A1 IT Innovation Nepal</span>
                </div>
                {/* Photo number badge */}
                <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded-full opacity-80">
                  #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-3">Want A1 IT Innovation at Your College?</h2>
            <p className="text-indigo-200 mb-8">We bring hands-on IT workshops and training sessions directly to educational institutions across Nepal — for free.</p>
            <a href="/contact" className="inline-block bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3 rounded-lg transition duration-300">
              Request a Workshop
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
