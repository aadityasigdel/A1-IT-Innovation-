import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function MobileDev() {
  const services = [
    "Custom Mobile Application Development",
    "iPhone Application Development (iOS)",
    "Android Application Development",
    "Enterprise Mobile Application Development",
    "React Native Application Development",
    "UI/UX Designing for Mobile Apps"
  ];

  const features = [
    {
      title: "User-friendly Design",
      description: "At A1 IT Innovation, we always deliver designs that provide a great user experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-10 h-10 text-indigo-600">
          <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
        </svg>
      )
    },
    {
      title: "Full-cycle Development",
      description: "We manage the full development cycle of your app, from design to deployment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-10 h-10 text-indigo-600">
          <path d="M144 320h160v-64H144v64zm0 64h160v-32H144v32zm304-64c0 17.7-14.3 32-32 32h-32v48c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48v-48H16c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h368c17.7 0 32 14.3 32 32v32zM88 336c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16z" />
        </svg>
      )
    },
    {
      title: "Cross-platform Compatibility",
      description: "Apps that work smoothly on iOS and Android devices.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-10 h-10 text-indigo-600">
          <path d="M224 32c-17.7 0-32 14.3-32 32v96H96c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h96v96c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-96v-96c0-17.7-14.3-32-32-32h-64z" />
        </svg>
      )
    },
    {
      title: "Fast & Reliable Performance",
      description: "Our apps load fast and provide smooth user experiences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-10 h-10 text-indigo-600">
          <path d="M479.7 168.3c-5.4-13.6-17.6-22.9-32.2-22.9H355.3c-19.3 0-36.2 13.1-41.4 31.9l-13.1 48.3c-9.2-5-19.8-7.7-30.8-7.7-38.9 0-70.5 35.1-63.2 74.9l14.1 79.3c1.4 8.1 8 14 16.1 14h119.4c7.6 0 14.3-5.3 15.7-12.8l24.1-143.2c2-12-6.5-23.7-18.7-27.8zM248.2 261.7l-10.1-9.6 10.1-9.6 10.1 9.6-10.1 9.6z" />
        </svg>
      )
    },
    {
      title: "Secure Development",
      description: "We prioritize security in all our mobile app projects.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-10 h-10 text-indigo-600">
          <path d="M96 0c-53 0-96 43-96 96v320c0 53 43 96 96 96h320c53 0 96-43 96-96V96c0-53-43-96-96-96H96zm112 448H96c-26.5 0-48-21.5-48-48v-48h160v96zm-96-224v-32h64v32H112zm64-80H96v32h80v-32zm272 240c0 26.5-21.5 48-48 48H240v-96h160v48zm-160-144v-32h64v32h-64zm0-80v-32h64v32h-64zm160-16c-8.8 0-16 7.2-16 16v96h32v-96c0-8.8-7.2-16-16-16z" />
        </svg>
      )
    },
    {
      title: "Agile Methodology",
      description: "We use agile development for flexible and fast app delivery.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-10 h-10 text-indigo-600">
          <path d="M272 0c-17.7 0-32 14.3-32 32v80H176c-26.5 0-48 21.5-48 48v32h-40c-22.1 0-40 17.9-40 40v80c0 22.1 17.9 40 40 40h40v32c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-32h40c22.1 0 40-17.9 40-40v-80c0-22.1-17.9-40-40-40h-40v-32c0-26.5-21.5-48-48-48h-64V32c0-17.7-14.3-32-32-32z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 max-w-7xl mx-auto gap-12">
        <div className="flex flex-col gap-8 max-w-2xl text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Build High-Performing <span className="text-indigo-600">Mobile Apps</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600">
              Your search for expert iOS and Android development ends here. We transform your ideas into powerful mobile experiences.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 inline-flex items-center justify-center"
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#services"
              className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center justify-center"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <svg viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg rounded-xl shadow-lg" aria-label="Mobile app development illustration">
            <rect width="500" height="420" rx="16" fill="#F0FDF4"/>
            <rect x="170" y="30" width="160" height="320" rx="28" fill="#1E293B"/>
            <rect x="175" y="35" width="150" height="310" rx="24" fill="#0F172A"/>
            <rect x="220" y="35" width="60" height="18" rx="9" fill="#1E293B"/>
            <circle cx="250" cy="44" r="5" fill="#0F172A"/>
            <rect x="179" y="56" width="142" height="270" rx="4" fill="#1E293B"/>
            <rect x="179" y="56" width="142" height="34" rx="4" fill="#4F46E5"/>
            <text x="250" y="77" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="white">MyApp</text>
            <rect x="186" y="98" width="58" height="52" rx="10" fill="#312E81"/>
            <text x="215" y="130" textAnchor="middle" fontSize="22" fill="white">📊</text>
            <rect x="255" y="98" width="58" height="52" rx="10" fill="#065F46"/>
            <text x="284" y="130" textAnchor="middle" fontSize="22" fill="white">💬</text>
            <rect x="186" y="160" width="125" height="11" rx="4" fill="#1D4ED8"/>
            <rect x="186" y="177" width="100" height="9" rx="3" fill="#334155"/>
            <rect x="186" y="191" width="115" height="9" rx="3" fill="#334155"/>
            <rect x="186" y="205" width="90" height="9" rx="3" fill="#334155"/>
            <rect x="186" y="222" width="125" height="60" rx="6" fill="#0F172A" stroke="#334155" strokeWidth="1"/>
            <polyline points="192,272 208,252 225,260 242,242 258,246 274,234 291,240 307,228" stroke="#22D3EE" strokeWidth="2" fill="none"/>
            <circle cx="307" cy="228" r="3" fill="#22D3EE"/>
            <rect x="179" y="305" width="142" height="21" fill="#0F172A"/>
            <text x="205" y="319" textAnchor="middle" fontSize="11">🏠</text>
            <text x="232" y="319" textAnchor="middle" fontSize="11">🔍</text>
            <text x="268" y="319" textAnchor="middle" fontSize="11">❤️</text>
            <text x="296" y="319" textAnchor="middle" fontSize="11">👤</text>
            <rect x="228" y="330" width="44" height="4" rx="2" fill="#475569"/>
            <rect x="20" y="80" width="118" height="72" rx="12" fill="white" stroke="#D1FAE5" strokeWidth="1.5"/>
            <rect x="32" y="92" width="44" height="44" rx="10" fill="#3B82F6"/>
            <text x="54" y="120" textAnchor="middle" fontSize="22" fill="white">📱</text>
            <text x="90" y="108" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#1F2937">iOS App</text>
            <text x="90" y="122" fontFamily="system-ui" fontSize="9" fill="#6B7280">Swift /</text>
            <text x="90" y="136" fontFamily="system-ui" fontSize="9" fill="#6B7280">React Native</text>
            <rect x="20" y="230" width="118" height="72" rx="12" fill="white" stroke="#FEF9C3" strokeWidth="1.5"/>
            <rect x="32" y="242" width="44" height="44" rx="10" fill="#F59E0B"/>
            <text x="54" y="270" textAnchor="middle" fontSize="22" fill="white">⚡</text>
            <text x="90" y="258" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#1F2937">Fast</text>
            <text x="90" y="272" fontFamily="system-ui" fontSize="9" fill="#6B7280">Optimized</text>
            <text x="90" y="286" fontFamily="system-ui" fontSize="9" fill="#6B7280">Performance</text>
            <rect x="362" y="80" width="118" height="72" rx="12" fill="white" stroke="#D1FAE5" strokeWidth="1.5"/>
            <rect x="374" y="92" width="44" height="44" rx="10" fill="#22C55E"/>
            <text x="396" y="120" textAnchor="middle" fontSize="22" fill="white">🤖</text>
            <text x="430" y="108" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#1F2937">Android</text>
            <text x="430" y="122" fontFamily="system-ui" fontSize="9" fill="#6B7280">Kotlin /</text>
            <text x="430" y="136" fontFamily="system-ui" fontSize="9" fill="#6B7280">Flutter</text>
            <rect x="362" y="230" width="118" height="72" rx="12" fill="white" stroke="#EDE9FE" strokeWidth="1.5"/>
            <rect x="374" y="242" width="44" height="44" rx="10" fill="#7C3AED"/>
            <text x="396" y="270" textAnchor="middle" fontSize="22" fill="white">🔗</text>
            <text x="430" y="258" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#1F2937">Cross</text>
            <text x="430" y="272" fontFamily="system-ui" fontSize="9" fill="#6B7280">Platform</text>
            <text x="430" y="286" fontFamily="system-ui" fontSize="9" fill="#6B7280">Flutter</text>
            <line x1="138" y1="116" x2="170" y2="116" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="3 3"/>
            <line x1="138" y1="266" x2="170" y2="266" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="3 3"/>
            <line x1="330" y1="116" x2="362" y2="116" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="3 3"/>
            <line x1="330" y1="266" x2="362" y2="266" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="3 3"/>
            <rect x="60" y="370" width="112" height="30" rx="8" fill="#DBEAFE"/>
            <text x="116" y="389" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#1D4ED8">50+ Apps Built</text>
            <rect x="195" y="370" width="112" height="30" rx="8" fill="#DCFCE7"/>
            <text x="251" y="389" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#15803D">iOS &amp; Android</text>
            <rect x="330" y="370" width="112" height="30" rx="8" fill="#EDE9FE"/>
            <text x="386" y="389" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#6D28D9">Flutter Ready</text>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mobile Development Services</h2>
        
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              Mobile app is the latest trend that has emerged and taken the market. Being a leading mobile app development company in Nepal, A1 IT Innovation can develop custom apps according to your needs. Our professional team possesses expertise in designing and developing both iOS and android apps, handling the entire development process from initial ideation to Google Play Store and iOS App Store submission by following agile methodologies. Our QA team ensures that the app developed is tested and bug-free, and our support team is always there to assist even after the project is delivered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 flex items-start gap-4 hover:shadow-md transition duration-300 border border-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  fill="currentColor"
                  className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0"
                >
                  <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
                </svg>
                <p className="text-gray-800 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Mobile Development</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-4 hover:shadow-lg transition duration-300 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Let's collaborate to create a mobile experience that delights your users and grows your business.
          </p>
          <a
            href="/contact"
            className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 inline-flex items-center mx-auto"
          >
            Start Your Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}