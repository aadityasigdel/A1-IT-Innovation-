import { useRef } from "react";
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
import Laptop from "../assets/laptop.png";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Client() {
  const scrollRef = useRef(null);

  const clients = [
    { logo: Hamrodokan, name: "Hamro Dokan", url: "#" },
    { logo: damakcampus, name: "Damak Campus", url: "https://damakcampus.edu.np/" },
    { logo: himalayan, name: "Himalayan Sanchaya", url: "https://himalayan-sanchaya.vercel.app/" },
    { logo: Shree, name: "DTEF", url: "https://damaktechnical.edu.np/" },
    { logo: Birhat, name: "Brihat Patro", url: "https://play.google.com/store/apps/details?id=com.nepaliyogi.brihatpatro" },
    { logo: Utkrista, name: "Utkrista", url: "https://utkristashikshya.com/" },
    { logo: kryzox, name: "Kryzox", url: "https://kryzox.com" },
    { logo: Tufan, name: "Tufan", url: "https://mytufan.com/" },
    {logo: Rolwaling, name: "Rolwaling", url:"https://www.rolwalingsamudaikaaspatal.com.np/"}
  ];

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Clients | A1 IT Innovation Nepal — Trusted IT Company in Damak, Jhapa & Kathmandu</title>
        <meta
          name="description"
          content="Explore A1 IT Innovation Nepal’s client portfolio — partnering with Damak Campus, Himalayan Sanchaya, Brihat Patro, Utkrista, and Kryzox. We lead in software development, AI, and IT consulting across Nepal."
        />
        <meta
          name="keywords"
          content="A1 IT Innovation, IT company Nepal, software development Damak, AI company Nepal, chatbot Nepal, web design Jhapa, app development Kathmandu, IT services Nepal"
        />
        <link rel="canonical" href="https://a1itinnovation.com/clients" />

        {/* ✅ Open Graph (Social Preview) */}
        <meta property="og:title" content="Clients | A1 IT Innovation Nepal" />
        <meta
          property="og:description"
          content="Discover our clients — A1 IT Innovation Nepal partners with leading organizations across Damak, Jhapa, and Kathmandu to build innovative software and AI solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://a1itinnovation.com/clients" />
        <meta property="og:image" content="https://a1itinnovation.com/assets/seo-preview.jpg" />
        <meta property="og:locale" content="en_NP" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen pt-10 mb-10 bg-gray-100">
        {/* Hero Section */}
        <section className="container justify-center h-screen flex mx-auto px-4 py-12">
          <div className="flex max-w-6xl flex-col-reverse md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h1 className="text-4xl font-bold text-gray-800">
                A1 IT Innovation Nepal — Your Trusted IT Partner in Damak, Jhapa & Kathmandu
              </h1>

              <h2 className="text-2xl font-semibold text-indigo-600">
                Innovating Today for a Better Tomorrow
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed w-11/12">
                At A1 IT Innovation, we empower businesses to overcome modern IT
                challenges with innovative solutions and expert guidance.
                Discover how we help organizations achieve their goals through
                tailored, cutting-edge technologies.
              </p>
              <a
                href="/contact"
                className="bg-indigo-600 w-fit hover:bg-indigo-700 text-white px-6 py-3 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300 inline-flex items-center"
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

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                alt="Laptop showcasing IT solutions by A1 IT Innovation Nepal"
                loading="lazy"
                width="400"
                height="300"
                decoding="async"
                className="rounded-xl border-4 border-white transform transition duration-500"
                src={Laptop}
              />
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section aria-labelledby="clients-heading" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="clients-heading" className="text-4xl font-bold text-gray-800 mb-4">
                Our Esteemed Clients
              </h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're proud to collaborate with these innovative organizations
                shaping Nepal’s digital future.
              </p>
            </div>

            {/* Scrolling Client Logos */}
            <div className="relative w-full overflow-hidden py-8 bg-gray-50">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-20" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-20" />

              <div
                ref={scrollRef}
                className="flex gap-12 px-8 w-max animate-scroll"
                style={{ willChange: "transform" }}
                onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
                onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
              >
                {[...clients, ...clients].map((client, index) => (
                  <a
                    key={index}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-28 h-28 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    title={client.name}
                  >
                    <img
                      src={client.logo}
                      alt={`${client.name} — client of A1 IT Innovation Nepal`}
                      loading="lazy"
                      width={112}
                      height={112}
                      className="object-contain p-2"
                    />
                    <span className="absolute bottom-full mb-2 hidden group-hover:block whitespace-nowrap rounded bg-indigo-600 px-3 py-1 text-xs text-white shadow-lg select-none">
                      {client.name}
                    </span>
                  </a>
                ))}
              </div>

              <style>{`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                  animation: scroll 30s linear infinite;
                }
              `}</style>
            </div>
          </div>
        </section>

        {/* ✅ Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "A1 IT Innovation Nepal",
              "url": "https://a1itinnovation.com",
              "logo": "https://a1itinnovation.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/a1itinnovation",
                "https://www.instagram.com/a1itinnovation",
                "https://www.linkedin.com/company/a1-it-innovation"
              ],
              "department": {
                "@type": "WebPage",
                "name": "Clients | A1 IT Innovation Nepal",
                "description": "A1 IT Innovation collaborates with top organizations in Damak, Jhapa, Kathmandu, and across Nepal.",
                "about": [
                  "IT services Nepal",
                  "software development Damak Jhapa",
                  "AI solutions Nepal",
                  "chatbot development Nepal"
                ],
                "mentions": clients.map(c => ({
                  "@type": "Organization",
                  "name": c.name,
                  "url": c.url
                }))
              }
            }),
          }}
        />

        {/* ✅ Hidden SEO content */}
        <div className="hidden">
          <p>
            A1 IT Innovation Nepal is a leading IT company based in Damak, Jhapa, with services across Kathmandu and all Nepal. 
            We specialize in software development, website design, mobile app creation, AI solutions, chatbot development, and IT consulting. 
            Our clients include Damak Campus, Himalayan Sanchaya, Brihat Patro, Utkrista, Kryzox, Tufan, and Hamro Dokan. 
            Trusted technology partner for startups, enterprises, and educational institutions across Nepal.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
