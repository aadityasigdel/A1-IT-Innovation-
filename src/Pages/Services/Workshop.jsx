import { Helmet } from "react-helmet";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import workshopImg from "../../assets/ServicesImg/workshop.avif";
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

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
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Helmet>
                <title>ICT Technical Workshops in Nepal | HTML, React, Next.js, Flutter, Spring Boot | A1 IT Innovation</title>
                <meta name="description" content="Hands-on ICT technical workshops in Nepal by A1 IT Innovation. Topics: HTML/CSS/JS, ReactJS, Next.js, Node.js & Express, Spring Boot, and Flutter. Learn real-world skills with experienced engineers through structured, project-based training sessions." />
                <meta name="keywords" content="ICT workshop Nepal, technical workshop Nepal, ReactJS workshop Nepal, NextJS workshop Nepal, Flutter workshop Nepal, Spring Boot workshop Nepal, NodeJS workshop Nepal, web development training Nepal, coding bootcamp Nepal, A1 IT Innovation workshop, HTML CSS JavaScript workshop Nepal" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <meta name="author" content="A1 IT Innovation" />
                <meta name="publisher" content="A1 IT Innovation" />
                <meta name="category" content="Education, IT Training, Technical Workshop" />
                <link rel="canonical" href="https://www.a1itinnovation.com.np/services/workshop" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="ICT Technical Workshops Nepal | React, Next.js, Flutter, Spring Boot | A1 IT Innovation" />
                <meta property="og:description" content="Hands-on workshops covering HTML/CSS/JS, ReactJS, Next.js, Node.js, Spring Boot, and Flutter. Structured, project-based training by experienced engineers in Nepal." />
                <meta property="og:url" content="https://www.a1itinnovation.com.np/services/workshop" />
                <meta property="og:site_name" content="A1 IT Innovation" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="ICT Technical Workshops Nepal | A1 IT Innovation" />
                <meta name="twitter:description" content="Hands-on workshops: HTML/CSS/JS, ReactJS, Next.js, Node.js, Spring Boot, Flutter. Real-world skills, project-based training. Nepal." />

                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "ICT Technical Workshops by A1 IT Innovation",
                    "description": "Hands-on ICT technical workshops in Nepal covering modern web and mobile development technologies. Taught by experienced engineers with real-world project-based curriculum.",
                    "url": "https://www.a1itinnovation.com.np/services/workshop",
                    "provider": {
                        "@type": "Organization",
                        "name": "A1 IT Innovation",
                        "url": "https://www.a1itinnovation.com.np",
                        "email": "info@a1itinnovation.com.np",
                        "address": { "@type": "PostalAddress", "addressCountry": "NP" }
                    },
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "item": { "@type": "Course", "name": "Web Frontend — HTML, CSS, JavaScript", "description": "Learn HTML elements, CSS box model, flexbox, responsive design, JavaScript DOM manipulation, ES6+, Fetch API, and web performance optimization.", "provider": { "@type": "Organization", "name": "A1 IT Innovation" }, "courseMode": "onsite" } },
                        { "@type": "ListItem", "position": 2, "item": { "@type": "Course", "name": "ReactJS Workshop", "description": "Learn React components, JSX, hooks (useState, useEffect, useContext), Redux, React Router, performance optimization, and deploying React apps.", "provider": { "@type": "Organization", "name": "A1 IT Innovation" }, "courseMode": "onsite" } },
                        { "@type": "ListItem", "position": 3, "item": { "@type": "Course", "name": "Next.js Workshop", "description": "Learn SSG, ISR, SSR, API routes, NextAuth, dynamic routing, i18n, image optimization, and deploying to Vercel, Netlify, and AWS.", "provider": { "@type": "Organization", "name": "A1 IT Innovation" }, "courseMode": "onsite" } },
                        { "@type": "ListItem", "position": 4, "item": { "@type": "Course", "name": "Node.js & Express.js Workshop", "description": "Learn Node.js event loop, RESTful API design with Express, MongoDB integration, JWT authentication, Socket.io, and deployment.", "provider": { "@type": "Organization", "name": "A1 IT Innovation" }, "courseMode": "onsite" } },
                        { "@type": "ListItem", "position": 5, "item": { "@type": "Course", "name": "Spring Boot Workshop", "description": "Learn Spring MVC, Spring Data JPA, Hibernate, Spring Security, microservices architecture, and deploying Spring Boot to AWS.", "provider": { "@type": "Organization", "name": "A1 IT Innovation" }, "courseMode": "onsite" } },
                        { "@type": "ListItem", "position": 6, "item": { "@type": "Course", "name": "Flutter Workshop", "description": "Learn Dart, Flutter widgets, Provider/Riverpod/Bloc state management, REST API integration, local storage, device features, and publishing to Google Play and App Store.", "provider": { "@type": "Organization", "name": "A1 IT Innovation" }, "courseMode": "onsite" } }
                    ]
                })}</script>
            </Helmet>
            <Navigation />

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 max-w-7xl mx-auto gap-12">
                <div className="flex flex-col gap-8 max-w-2xl text-center lg:text-left">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Elevate Your Skills with <span className="text-indigo-600">ICT Workshops</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-medium text-gray-600">
                            Join our comprehensive workshops and transform your IT capabilities with hands-on training.
                        </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="/contact"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 inline-flex items-center justify-center"
                        >
                            Register Now
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a
                            href="#workshops"
                            className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center justify-center"
                        >
                            Explore Workshops
                        </a>
                    </div>
                </div>

                <div className="mt-8 lg:mt-0">
                    <img
                        src={workshopImg}
                        alt="ICT Workshop"
                        loading="lazy"
                        width={500}
                        height={500}
                        decoding="async"
                        className="rounded-xl  border-4 border-white transform  transition duration-500"
                    />
                </div>


            </section>

            <div className="text-center mb-16">
                <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">ICT Workshop Details</h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        Our ICT workshops are crafted to offer practical, hands-on experience with modern technologies and tools in the IT industry. Covering a wide spectrum—from basic digital skills to advanced topics like networking and cybersecurity—these sessions are tailored for learners of all levels, ensuring both beginners and professionals gain valuable knowledge and applicable skills.
                    </p>
                </div>
            </div>

            {/* Workshop Services */}
            <section id="workshops" className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">


                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Workshop Services</h2>
                        {workshopServices.map(({ emoji, title, topics }, index) => (
                            <div
                                key={title}
                                className={`bg-gray-50 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${openIndex === index ? 'ring-2 ring-indigo-500' : 'hover:shadow-lg'}`}
                            >
                                <button
                                    className="w-full px-6 py-5 text-left focus:outline-none"
                                    onClick={() => toggleIndex(index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`workshop-${index}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl">{emoji}</span>
                                            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                                        </div>
                                        <div className={`ml-4 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                            <ChevronDownIcon className="w-5 h-5 text-indigo-600" />
                                        </div>
                                    </div>
                                </button>

                                <div
                                    id={`workshop-${index}`}
                                    className={`px-6 pb-5 text-gray-600 transition-all duration-300 ${openIndex === index ? 'block' : 'hidden'}`}
                                >
                                    <div className="border-t border-gray-200 pt-4">
                                        <ul className="list-disc space-y-2 pl-5">
                                            {topics.map((topic) => (
                                                <li key={topic} className="text-gray-700">
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Skills?</h2>
                    <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
                        Join our ICT workshops and gain practical, hands-on experience with the latest technologies from industry experts.
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 inline-flex items-center mx-auto"
                    >
                        Enroll Today
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}