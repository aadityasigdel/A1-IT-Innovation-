import { Helmet } from "react-helmet";
import portfolio from "../assets/portfolio.jpg";
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

const projects = [
  {
    img: Kryzox,
    title: "Kryzox — Esports Match Organizer",
    description:
      "Developed a multi-platform gaming solution for PUBG, Free Fire, and Chess tournaments with wallet integration, match scheduling, and real-time result updates.",
    tech: {
      frontend: "React (Web)",
      backend: "Java (Mobile App)",
      database: "SQL",
      deliverable: "Mobile & Web Application",
    },
    link: "https://kryzox.com/",
  },
  {
    img: Tufan,
    title: "Tufan — Ride Sharing & Transport Solution",
    description:
      "A smart transportation app enhancing safety and convenience through ride-sharing technology for passengers and operators.",
    tech: {
      frontend: "React (Web)",
      backend: "Java (Mobile App)",
      database: "SQL",
      deliverable: "Mobile & Web Application",
    },
    link: "https://mytufan.com/",
  },
  {
    img: Brihat,
    title: "Brihat Patro — Nepali Calendar App",
    description:
      "A Nepali calendar and panchang app with astrology, festivals, and daily updates. Built for culture lovers with rich UI and offline access.",
    tech: {
      frontend: "Flutter, Dart",
      backend: "PHP",
      database: "MySQL",
      deliverable: "Web & Mobile",
    },
    link: "https://play.google.com/store/apps/details?id=com.nepaliyogi.brihatpatro",
  },
  {
    img: Himalayansanchaya,
    title: "Himalayan Sanchaya — Business Management Tool",
    description:
      "A cloud-based system for inventory tracking, analytics, and automation tailored for Nepali SMEs.",
    tech: {
      frontend: "Next.js, React.js",
      backend: "Next.js (Server Actions)",
      database: "PostgreSQL",
      deliverable: "Web Application",
    },
    link: "https://himalayan-sanchaya.vercel.app",
  },
  {
    img: Damaktechnical,
    title: "Damak Technical Education Foundation",
    description:
      "A leading technical and vocational institution in Nepal offering engineering and IT programs with a digital presence powered by React.",
    tech: {
      frontend: "React.js",
      backend: "MySQL",
      database: "MySQL",
      deliverable: "Website",
    },
    link: "https://damaktechnical.edu.np",
  },
  {
    img: DamakMultipleCampus,
    title: "Damak Multiple Campus — Academic Website",
    description:
      "A Tribhuvan University-affiliated community campus website with content management, notice board, and program details.",
    tech: {
      frontend: "React.js",
      backend: "PHP",
      database: "MySQL",
      deliverable: "Website",
    },
    link: "https://damakcampus.edu.np",
  },
  {
  
   img: Rolwaling,
    title: "Rolwaling Community Hospital — Quality Healthcare in Nepal",
    description:
  "Official website of Rolwaling Community Hospital — providing quality healthcare, emergency services, and community health support in Nepal.",
    tech: {
      frontend: "React.js",
      backend: "PHP",
      database: "MySQL",
      deliverable: "Website",
    },
    link: "https://www.rolwalingsamudaikaaspatal.com.np/",
  },

  {
    img: Utkrista,
    title: "Utkrista Shikshya — Online Learning Platform",
    description:
      "An e-learning platform for affordable and accessible education built with modern technologies for scalability and security.",
    tech: {
      frontend: "Next.js, TypeScript",
      backend: "Spring Boot (Java)",
      database: "MySQL",
      deliverable: "Web Application",
    },
    link: "https://utkristashikshya.com/",
  },
  {
    img: Hamrodokan,
    title: "Hamro Dokan — Grocery Management App",
    description:
      "A mobile grocery app for store owners with QR scanning, inventory control, and Firebase-based backend.",
    tech: {
      frontend: "Flutter, Dart",
      backend: "Firebase",
      database: "Firebase",
      deliverable: "Mobile Application",
    },
    link: "#",
  },
];

export default function Work() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>
          Portfolio | A1 IT Innovation Nepal — Software, Web & Mobile Projects
        </title>
        <meta
          name="description"
          content="Explore A1 IT Innovation Nepal’s project portfolio — from apps like Kryzox and Tufan to websites for Damak Campus and Himalayan Sanchaya. Expert in React, Flutter, Java, and AI development in Nepal."
        />
        <meta
          name="keywords"
          content="A1 IT Innovation, portfolio, software development Nepal, web development Jhapa, mobile app Nepal, React developer, AI solutions, Flutter app Nepal"
        />
        <link rel="canonical" href="https://a1itinnovation.com/portfolio" />

        {/* ✅ Open Graph / Social Meta */}
        <meta
          property="og:title"
          content="Portfolio | A1 IT Innovation Nepal — Software & App Projects"
        />
        <meta
          property="og:description"
          content="View A1 IT Innovation’s featured projects — including Kryzox, Tufan, Brihat Patro, and more. Based in Damak, Jhapa, serving Nepal-wide digital needs."
        />
        <meta property="og:url" content="https://a1itinnovation.com/portfolio" />
        <meta
          property="og:image"
          content="https://a1itinnovation.com/assets/seo-preview.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navigation />

      <main>
        {/* ✅ Hero Section */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-12 lg:py-24 mx-auto bg-white">
          <div className="flex flex-col gap-6 max-w-xl lg:max-w-md lg:w-1/2 items-center lg:items-start text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Our Portfolio
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700">
              Discover Projects that Define Our Innovation
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We’ve partnered with businesses across Nepal to deliver powerful
              web, mobile, and AI solutions — transforming ideas into impactful
              digital products.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded shadow-lg transition duration-300 w-fit"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
            <img
              src={portfolio}
              alt="A1 IT Innovation Portfolio showcase"
              width="400"
              height="500"
              loading="lazy"
              className="rounded-xl max-w-full"
              decoding="async"
            />
          </div>
        </section>

        {/* ✅ Projects Section */}
        <section className="bg-gray-50 py-16 px-4 mx-auto" aria-labelledby="projects-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                id="projects-heading"
                className="text-4xl font-bold text-indigo-800 mb-4"
              >
                Our Projects
              </h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                Explore a collection of software, mobile apps, and web platforms
                developed for leading organizations across Nepal.
              </p>
            </div>

            <div className="grid gap-12">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/3 p-6 flex items-center justify-center bg-gray-100">
                        <img
                          src={project.img}
                          alt={`${project.title} — project by A1 IT Innovation Nepal`}
                          className="w-full h-64 object-contain rounded-md"
                          loading="lazy"
                        />
                      </div>

                      <div className="lg:w-2/3 p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-indigo-700 mb-3">
                            {project.title}
                          </h3>
                          <p className="text-gray-700 mb-6">
                            {project.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          {Object.entries(project.tech).map(([key, value]) => (
                            <div
                              key={key}
                              className="bg-indigo-50 p-3 rounded-lg"
                            >
                              <h4 className="font-semibold text-indigo-700 mb-1 capitalize">
                                {key}
                              </h4>
                              <p className="text-gray-700">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Let’s bring your ideas to life with A1 IT Innovation’s expert
              development and design team.
            </p>
            <a
              href="/contact"
              className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 inline-flex items-center"
            >
              Get in Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Portfolio | A1 IT Innovation Nepal",
              description:
                "A1 IT Innovation showcases successful projects in software, mobile app, and web development in Nepal.",
              url: "https://a1itinnovation.com/portfolio",
              mainEntity: {
                "@type": "ItemList",
                itemListElement: projects.map((p, i) => ({
                  "@type": "CreativeWork",
                  position: i + 1,
                  name: p.title,
                  description: p.description,
                  url: p.link,
                })),
              },
            }),
          }}
        />

        {/* ✅ Hidden SEO Content */}
        <div className="hidden">
          <p>
            A1 IT Innovation Nepal is a leading software and web development
            company based in Damak, Jhapa, Nepal. Our portfolio includes projects like Kryzox,
            Tufan, Brihat Patro, Utkrista, and Himalayan Sanchaya — built using
            React, Next.js, Java, Flutter, and AI technologies. We serve clients
            across Kathmandu, Pokhara, Biratnagar, and beyond.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
