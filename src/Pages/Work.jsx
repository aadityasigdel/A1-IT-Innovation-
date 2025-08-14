import portfolio from "../assets/portfolio.jpg";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import Brihat from "../assets/brihat.png";
import DamakMultipleCampus from "../assets/Clients/Dmc.png";
import Damaktechnical from "../assets/Clients/DT.png";
import Kryzox from "../assets/Clients/KryZone.png";
import Tufan from "../assets/Clients/tufan.png";
import Hamrodokan from "../assets/hamrodokan.png";
import Himalayansanchaya from "../assets/himalayan-sanchaya.png";
import Utkrista from "../assets/utkrista.png";

const projects = [
  {
    img: Kryzox,
    title: "Kryzox",
    description: "Created a platform where users can join games like PUBG, Free Fire, Ludo, Chess by paying an entry fee. Winners are rewarded with prize money. Included wallet system, match scheduling, result uploading, and admin controls. Focused on secure transaction handling and real-time updates.",
    tech: {
      frontend: "React (Web)",
      backend: "Java (Mobile App)",
      database: "SQL",
      deliverable: "Mobile & Web Application",
    },
    link: "https://Kryzox.com/"
  },

  {
    img: Tufan,
    title: "Tufan",
    description: "Tufan is an innovative transportation platform that simplifies  ride-sharing. It prioritizes safety, efficiency, and convenience, offering reliable solutions for both passengers and operators to enhance the travel experience.",
    tech: {
      frontend: "React (Web)",
      backend: "Java (Mobile App)",
      database: "SQL",
      deliverable: "Mobile & Web Application",
    },
    link: "https://mytufan.com/"
  },

  {
    img: Brihat,
    title: "Brihat Patro",
    description: "The ultimate Nepali calendar and panchang app that connects users with Nepal's rich culture and traditions — including astrology, festivals, and more.",
    tech: {
      frontend: "Flutter, Dart",
      backend: "PHP",
      database: "MySQL",
      deliverable: "Web, Mobile",
    },
    link: "https://play.google.com/store/apps/details?id=com.nepaliyogi.brihatpatro&hl=ne"
  },
  {
    img: Himalayansanchaya,
    title: "Himalayan Sanchaya",
    description: "A business management tool offering inventory tracking, transaction logs, analytics, and automated workflows for small to medium businesses.",
    tech: {
      frontend: "Next.js, React.js",
      backend: "Next.js (Server Actions)",
      database: "PostgreSQL",
      deliverable: "Web Application",
    },
    link: "https://himalayan-sanchaya.vercel.app"
  },

  {
    img: Damaktechnical,
    title: "Damak Technical Education Foundation",
    description: "A technical and vocational education institution in Damak, Nepal, offering diploma and bachelor programs in engineering, IT, management, and healthcare, with practical labs, student support services, and industry-aligned training.",
    tech: {
      frontend: " React.js",
      backend: "Mysql",
      database: "MySQL",
      deliverable: "Website",
    },
    link: "https://damaktechnical.edu.np"
  },
  {
    img: DamakMultipleCampus,
    title: "Damak Multiple Campus",
    description: "A community-based campus in Damak, Nepal, affiliated with Tribhuvan University, offering undergraduate and graduate programs in management, education, humanities, and sciences, with a focus on quality assurance and community engagement.",
    tech: {
      frontend: " React.js",
      backend: "PHP",
      database: "MySQL",
      deliverable: "Website",
    },
    link: "https://damakcampus.edu.np"
  },
  {
    img: Utkrista,
    title: "Utkrista Shikshya",
    description: "Online learning platform committed to providing accessible and high-quality education for all. Empowering learners with affordable and effective knowledge.",
    tech: {
      frontend: "Next.js, React.js, TypeScript",
      backend: "Spring Boot (Java)",
      database: "MySQL",
      deliverable: "Web Application",
    },
    link: "#"
  },


  {
    img: Hamrodokan,
    title: "Hamrodokan",
    description: "An online grocery mobile app for shop owners. Key features include QR scanning, inventory and user management — all powered by Firebase.",
    tech: {
      frontend: "Flutter, Dart",
      backend: "Firebase",
      database: "Firebase",
      deliverable: "Mobile Application",
    },
    link: "#"
  },




];

export default function Work() {
  return (
    <>
      <Navigation />

      <main className="m-0">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-12 lg:py-24 mx-auto bg-white">
          <div className="flex flex-col gap-6 max-w-xl lg:max-w-md lg:w-1/2 items-center lg:items-start text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Our Portfolio
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700">
              Discover the Projects We've Brought to Life
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We have been working with clients across various industries, creating innovative and impactful digital solutions. Take a look at some of the success stories we’ve helped build.
            </p>
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded shadow-lg transition duration-300 w-fit"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-10  lg:mt-0 lg:w-1/2 flex justify-center">
            <img
              src={portfolio}
              alt="Portfolio"
              width="400"
              height="500"
              loading="lazy"
              className="rounded-xl max-w-full"
              decoding="async"
            />

          </div>

        </section>


        {/* Projects Section */}
        <section className="bg-gray-50 py-16 px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-indigo-800 mb-4">Our Projects</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our diverse portfolio of successful projects across various industries
              </p>
            </div>

            <div className="grid gap-12">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/3 p-6 flex items-center justify-center bg-gray-100">
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-64 object-contain rounded-md"
                          loading="lazy"
                        />
                      </div>

                      <div className="lg:w-2/3 p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-indigo-700 mb-3">{project.title}</h3>
                          <p className="text-gray-700 mb-6">{project.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="bg-indigo-50 p-3 rounded-lg">
                            <h4 className="font-semibold text-indigo-700 mb-1">Frontend</h4>
                            <p className="text-gray-700">{project.tech.frontend}</p>
                          </div>
                          <div className="bg-indigo-50 p-3 rounded-lg">
                            <h4 className="font-semibold text-indigo-700 mb-1">Backend</h4>
                            <p className="text-gray-700">{project.tech.backend}</p>
                          </div>
                          <div className="bg-indigo-50 p-3 rounded-lg">
                            <h4 className="font-semibold text-indigo-700 mb-1">Database</h4>
                            <p className="text-gray-700">{project.tech.database}</p>
                          </div>
                          <div className="bg-indigo-50 p-3 rounded-lg">
                            <h4 className="font-semibold text-indigo-700 mb-1">Deliverable</h4>
                            <p className="text-gray-700">{project.tech.deliverable}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>

        {/* Call To Action Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Let's collaborate to turn your ideas into reality with our expert development team.
            </p>
            <a
              href="/contact"
              className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 inline-flex items-center"
            >
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}