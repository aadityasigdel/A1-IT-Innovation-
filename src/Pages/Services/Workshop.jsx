import { useState } from 'react';
import workshopImg from "../../assets/ServicesImg/workshop.avif";
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import DropDown from "../../assets/Icons/DropDown.png";

const workshopServices = [
    {
        emoji: "🌐",
        title: "Web Frontend (HTML, CSS, JS)",
        topics: [
            "Introduction to HTML: Elements, Attributes, and Forms",
            "Introduction to CSS: Selectors, Box Model, and Flexbox",
            "Responsive Web Design with CSS Grid",
            "Introduction to JavaScript: Syntax, DOM Manipulation, and Events",
            "Advanced JavaScript: ES6+ Features, Promises, and Async/Await",
            "Working with APIs: Fetch and Axios",
            "Web Performance Optimization: Lazy Loading, Minification",
        ],
    },
    {
        emoji: "⚛️",
        title: "ReactJS",
        topics: [
            "Introduction to React: JSX, Components, and Props",
            "State and Lifecycle Methods",
            "Handling Events and Forms",
            "React Hooks: useState, useEffect, useContext, and Custom Hooks",
            "State Management with Redux and Context API",
            "Routing with React Router",
            "Performance Optimization: Memoization and Lazy Loading",
            "Testing with Jest and React Testing Library",
            "Deploying React Applications",
        ],
    },
    {
        emoji: "⬛️",
        title: "NextJS",
        topics: [
            "Introduction to Next.js: File-based Routing, Pages, and Layouts",
            "Static Site Generation (SSG) and Incremental Static Regeneration (ISR)",
            "Server-side Rendering (SSR) and Client-side Rendering (CSR)",
            "API Routes in Next.js",
            "Data Fetching with getStaticProps, getStaticPaths, and getServerSideProps",
            "Dynamic Routing and Middleware",
            "Authentication with NextAuth.js",
            "Styling with CSS Modules and styled-components",
            "Image Optimization with next/image",
            "Performance Optimization: Code Splitting, Lazy Loading, and Prefetching",
            "Internationalization (i18n) with Next.js",
            "Deploying Next.js Applications: Vercel, Netlify, and AWS",
        ],
    },
    {
        emoji: "🟢",
        title: "NodeJS, ExpressJS",
        topics: [
            "Introduction to Node.js: Event Loop, Modules, and NPM",
            "Building RESTful APIs with Express.js",
            "Middleware: Application-level, Router-level, and Error-handling",
            "Database Integration with MongoDB and Mongoose",
            "Authentication and Authorization with JWT",
            "Real-time Communication with Socket.io",
            "Testing APIs with Mocha and Chai",
            "Deploying Node.js Applications: Heroku, AWS",
        ],
    },
    {
        emoji: "🌱",
        title: "Spring Boot",
        topics: [
            "Introduction to Spring Boot: Setting Up and Configuration",
            "Building RESTful APIs with Spring MVC",
            "Spring Data JPA: Repositories and Transactions",
            "Database Integration with Hibernate",
            "Spring Security for Authentication and Authorization",
            "Microservices Architecture with Spring Boot",
            "Testing Spring Boot Applications with JUnit and Mockito",
            "Deploying Spring Boot Applications to AWS",
        ],
    },
    {
        emoji: "📱",
        title: "Flutter",
        topics: [
            "Introduction to Dart: Syntax, Data Types, and Functions",
            "Setting Up Flutter Environment",
            "Building UI with Flutter Widgets",
            "State Management: Provider, Riverpod, and Bloc",
            "Navigation and Routing in Flutter",
            "Handling Forms and User Input",
            "Networking and REST API Integration",
            "Local Storage with SQLite and Hive",
            "Using Device Features: Camera, GPS, Sensors",
            "Testing and Debugging Flutter Apps",
            "Publishing Apps to Google Play and App Store",
        ],
    },
];

export default function ServicesList() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="bg-gray-50 min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="h-screen flex flex-col lg:flex-row items-center justify-around p-6 md:justify-between max-w-10/12 mx-auto">
                <div className="mt-8 md:mt-0 flex flex-col gap-6 max-w-lg text-center md:text-left md:max-w-none md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                        Elevate Your Skills with Our ICT Workshop
                    </h1>
                    <h2 className="text-xl md:text-3xl font-medium text-gray-700 mt-2">
                        Join our comprehensive workshops and transform your IT capabilities.
                    </h2>
                    <a
                        href="/contact"
                        className="inline-block mt-4 bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 self-center md:self-start"
                    >
                        Register Now
                    </a>
                </div>

                <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center animate-float">
                    <img
                        src={workshopImg}
                        alt="ICT Workshop"
                        loading="lazy"
                        width={400}
                        height={500}
                        decoding="async"
                        className="rounded-xl shadow-md"
                        style={{ color: "transparent" }}
                    />
                </div>
            </section>

            {/* Workshop Services */}
            <section className="max-w-4xl mx-auto p-4">
                <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
                    Our Workshop Services
                </h2>
                <div className="flex flex-col gap-5">
                    {workshopServices.map(({ emoji, title, topics }, index) => (
                        <div
                            key={title}
                            className="bg-white rounded-xl shadow-md cursor-pointer border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                            onClick={() => toggleIndex(index)}
                            aria-expanded={openIndex === index}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") toggleIndex(index);
                            }}
                        >
                            <div className="flex items-center justify-between p-4 select-none">
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl">{emoji}</span>
                                    <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
                                </div>
                                <div className="text-indigo-600 text-2xl transition-transform duration-300 transform">
                                   {openIndex === index ? <img className="w-5 h-5 cursor-pointer rotate-180" src={DropDown} alt="dropdown icon" /> : <img src={DropDown} className="w-5 h-5  cursor-pointer"  alt="dropdown icon" /> }
                                </div>
                            </div>


                            <div
                                className={`overflow-hidden transition-[max-height,padding] duration-500 ease-in-out text-gray-700 ${openIndex === index
                                        ? "max-h-[1000px] px-8 pb-5"
                                        : "max-h-0 px-0 pb-0"
                                    }`}
                            >
                                
                <ul className="list-disc space-y-2">
                  {topics.map((topic) => (
                    <li key={topic} className="pl-4">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
                                <section className="py-24 bg-indigo-600 text-white">
                                    <div className="max-w-3xl mx-auto text-center px-6">
                                        <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Skills?</h2>
                                        <p className="text-lg leading-relaxed max-w-xl mx-auto mb-8">
                                            Join our ICT workshops and take the first step towards mastering the latest
                                            technologies and tools in the IT industry. Our workshops are designed to provide
                                            you with the skills and knowledge needed to excel in your career.
                                        </p>
                                        <a
                                            href="/contact"
                                            className="inline-block bg-white text-indigo-600 font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
                                        >
                                            Register Now
                                        </a>
                                    </div>
                                </section>

                                <Footer />
                            </main>
                            );
}