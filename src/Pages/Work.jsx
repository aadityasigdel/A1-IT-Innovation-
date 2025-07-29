import portfolio from "../assets/portfolio.jpg";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import Brihat from "../assets/brihat.png";
import Hamrodokan from "../assets/hamrodokan.png";
import Himalayansanchaya from "../assets/himalayan-sanchaya.png";
import Utkrista from "../assets/utkrista.png";

const projects = [
  {
    img: Utkrista,
    title: "Utkrista Shikshya",
    description:
      "Online learning platform committed to providing accessible and high-quality education for all. Empowering learners with affordable and effective knowledge.",
    tech: {
      frontend: "Next.js, React.js, TypeScript",
      backend: "Spring Boot (Java)",
      database: "MySQL",
      deliverable: "Web Application",
    },
  },
  {
    img: Brihat,
    title: "Brihat Patro",
    description:
      "The ultimate Nepali calendar and panchang app that connects users with Nepal's rich culture and traditions — including astrology, festivals, and more.",
    tech: {
      frontend: "Flutter, Dart",
      backend: "PHP",
      database: "MySQL",
      deliverable: "Web, Mobile",
    },
  },
  {
    img: Himalayansanchaya,
    title: "Himalayan Sanchaya",
    description:
      "A business management tool offering inventory tracking, transaction logs, analytics, and automated workflows for small to medium businesses.",
    tech: {
      frontend: "Next.js, React.js",
      backend: "Next.js (Server Actions)",
      database: "PostgreSQL",
      deliverable: "Web Application",
    },
  },
  {
    img: Hamrodokan,
    title: "Hamrodokan",
    description:
      "An online grocery mobile app for shop owners. Key features include QR scanning, inventory and user management — all powered by Firebase.",
    tech: {
      frontend: "Flutter, Dart",
      backend: "Firebase",
      database: "Firebase",
      deliverable: "Mobile Application",
    },
  },
];

export default function Work() {
  return (
    <>
      <Navigation />

      <main className="m-0">
        <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12 w-11/12 mx-auto">
          <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left lg:max-w-md lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold">Our Portfolio</h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700">
              Discover the Projects We've Brought to Life
            </h2>
            <a
              href="/contact"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow-lg hover:bg-blue-500 transition duration-300 w-fit mx-auto lg:mx-0"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center animate-float">
            <img
              src={portfolio}
              alt="Portfolio"
              width="400"
              height="500"
              loading="lazy"
              className="rounded-xl shadow-xl max-w-full"
              decoding="async"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-gray-100 py-8 px-4 mx-auto ">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-10">Projects</h2>

            <div className="grid gap-16">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6  flex flex-col lg:flex-row items-center gap-6 "
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full max-w-xs h-60 object-contain rounded-md shadow-sm"
                    loading="lazy"
                  />

                  <div className="flex-1 flex flex-col gap-2 text-left">
                    <h3 className="text-2xl font-bold text-indigo-700">{project.title}</h3>
                    <p className="text-gray-700 text-justify">{project.description}</p>
                    <div className="text-sm text-gray-600 mt-3 space-y-1">
                      <p><strong>▸ Frontend:</strong> {project.tech.frontend}</p>
                      <p><strong>▸ Backend:</strong> {project.tech.backend}</p>
                      <p><strong>▸ Database:</strong> {project.tech.database}</p>
                      <p><strong>▸ Deliverable:</strong> {project.tech.deliverable}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call To Action Section */}
        <section className="bg-indigo-600 text-white h-full py-20 ">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Interested in Our Work?</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Get in touch with us to discuss how we can help with your next project.
              Our team is ready to bring your ideas to life.
            </p>
            <a
              href="/contact"
              className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
