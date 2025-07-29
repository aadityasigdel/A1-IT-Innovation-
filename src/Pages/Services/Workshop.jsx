import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function Workshop() {
    return (
        <main className="m-0 md:mb-20">
            <Navigation />

            <section className="h-screen flex flex-col lg:flex-row items-center justify-center p-4 md:justify-between">
                <div className="mt-5 md:mt-0 flex flex-col gap-6 max-w-lg text-center md:text-left md:max-w-none md:w-1/2">
                    <div className="animate-fade-in">
                        <h1 className="text-3xl md:text-5xl font-extrabold">
                            Elevate Your Skills with Our ICT Workshop
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-medium mt-2">
                            Join our comprehensive workshops and transform your IT capabilities.
                        </h2>
                    </div>
                    <a
                        href="/contact"
                        className="text-white bg-indigo-600 font-semibold px-6 py-3 rounded shadow-lg hover:bg-indigo-500 transition duration-300 self-center md:self-start"
                    >
                        Register Now
                    </a>
                </div>

                <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center animate-float">
                    <img
                        alt="ICT Workshop"
                        loading="lazy"
                        width={400}
                        height={500}
                        decoding="async"
                        className="rounded shadow-lg"
                        style={{ color: "transparent" }}
                        src="/workshop.avif"
                        srcSet="/workshop.avif 1x, /workshop.avif 2x"
                    />
                </div>
            </section>

            <section className="flex flex-col gap-20 py-20 bg-gray-100">
                <div className="max-w-[900px] m-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">ICT Workshop Details</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our ICT workshops are designed to provide hands-on experience and deep understanding of the latest
                        technologies and tools in the IT industry. From basic computer skills to advanced networking,
                        our workshops cover a wide range of topics tailored to meet the needs of both beginners and professionals.
                    </p>
                </div>

                <div className="max-w-[900px] m-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Our Workshop Services</h2>
                    <ul className="list-none text-gray-700 leading-relaxed flex flex-col gap-8 items-center">
                        {[
                            { emoji: "🌐", title: "Web Frontend (HTML, CSS, JS)" },
                            { emoji: "⚛️", title: "ReactJS" },
                            { emoji: "⬛️", title: "NextJS" },
                            { emoji: "🟢", title: "NodeJS, ExpressJS" },
                            { emoji: "🌱", title: "Spring Boot" },
                            { emoji: "📱", title: "Flutter" },
                        ].map(({ emoji, title }) => (
                            <li
                                key={title}
                                className="w-[500px] flex flex-col items-start gap-2 bg-white p-4 rounded shadow-lg cursor-pointer"
                            >
                                <div className="w-full flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2 pointer-events-none">
                                        <span>{emoji}</span>
                                        <span className="font-semibold">{title}</span>
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                                    </svg>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold text-center">Key Features</h2>
                    <div className="mt-8 flex flex-wrap gap-8 justify-center">
                        {[
                            {
                                title: "Interactive Learning",
                                desc: "Hands-on experience with real-world scenarios.",
                                icon: (
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-indigo-600"
                                        height="40"
                                        width="40"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path>
                                    </svg>
                                ),
                            },
                            {
                                title: "Expert Instructors",
                                desc: "Learn from industry experts with years of experience.",
                                icon: (
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-indigo-600"
                                        height="40"
                                        width="40"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path>
                                    </svg>
                                ),
                            },
                            {
                                title: "Comprehensive Curriculum",
                                desc: "Covering a wide range of ICT topics.",
                                icon: (
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-indigo-600"
                                        height="40"
                                        width="40"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="M20.38 8.57l-1.23 1.85a8 8 0 01-.22 7.58H5.07A8 8 0 0115.58 6.85l1.85-1.23A10 10 0 003.35 19a2 2 0 001.72 1h13.85a2 2 0 001.74-1 10 10 0 00-.27-10.44zm-9.79 6.84a2 2 0 002.83 0l5.66-8.49-8.49 5.66a2 2 0 000 2.83z"></path>
                                    </svg>
                                ),
                            },
                            {
                                title: "Certification",
                                desc: "Receive a certificate upon successful completion.",
                                icon: (
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-indigo-600"
                                        height="40"
                                        width="40"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
                                    </svg>
                                ),
                            },
                        ].map(({ title, desc, icon }) => (
                            <div
                                key={title}
                                className="rounded-sm shadow-lg bg-white p-4 flex flex-col gap-2 w-80 cursor-pointer transition-all hover:shadow-2xl hover:scale-105"
                            >
                                <div>{icon}</div>
                                <div>
                                    <h3 className="uppercase text-md font-semibold">{title}</h3>
                                    <p className="text-sm">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-indigo-600 text-white">
                <div className="max-w-[900px] m-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Ready to Elevate Your Skills?</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        Join our ICT workshops and take the first step towards mastering the latest technologies and tools
                        in the IT industry. Our workshops are designed to provide you with the skills and knowledge needed
                        to excel in your career.
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded shadow-lg hover:bg-gray-100 transition duration-300"
                    >
                        Register Now
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
