import React from 'react';
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
    description: "Online learning platform committed to providing accessible and high-quality education for all. Empowering learners with affordable and effective knowledge.",
    tech: {
      frontend: "Next.js, React.js, TypeScript",
      backend: "Spring Boot (Java)",
      database: "MySQL",
      deliverable: "Web Application",
    },
    link: "#" // Add actual project links here
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
    link: "#"
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
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                >
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