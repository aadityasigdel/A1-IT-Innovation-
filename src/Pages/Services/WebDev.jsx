import InternshipImg from "../../assets/ServicesImg/internship.avif";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


export default function InternShip() {
    return (
        <main className="m-0">
            <Navigation />

            {/* Hero Section */}
            <section className="h-screen flex flex-col lg:flex-row items-center justify-around p-6 md:justify-between max-w-7xl mx-auto">
                <div className="mt-5 md:mt-0 flex flex-col gap-6 max-w-lg text-center md:text-left md:max-w-none md:w-1/2">
                    <div className="animate-fade-in">
                        <h1 className="text-3xl md:text-5xl font-extrabold">
                            Kickstart Your Career with Our Internship Programs
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-medium mt-2">
                            Gain hands-on experience and grow with industry projects and professional mentorship.
                        </h2>
                    </div>
                    <a
                        href="https://docs.google.com/forms/d/18Rw6gxEvwI4t79WooNCFaMGJH3T9Xgby4OlrK6C8u8o"
                        className="text-white bg-indigo-600 font-semibold px-6 py-3 rounded shadow-lg hover:bg-indigo-500 transition duration-300 self-center md:self-start"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Apply Now
                    </a>
                </div>
                <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center animate-float">
                    <img
                        alt="internship programs"
                        loading="lazy"
                        width="400"
                        height="500"
                        decoding="async"
                        className="rounded shadow-lg"
                        src={InternshipImg}
                        style={{ color: "transparent" }}
                    />
                </div>
            </section>

            {/* About the Program */}
            <section className="flex flex-col gap-20 py-20 bg-gray-100">
                <div className="max-w-[900px] m-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Internship Programs at A1 IT Innovation</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our internship programs are crafted to offer real-world exposure and hands-on project experience. Get mentored by professionals and work in a team-driven environment that fosters growth and innovation. Take the first step towards building a thriving tech career.
                    </p>
                </div>

                {/* Technologies */}
                <div className="max-w-[900px] m-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Technologies You’ll Explore</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-left max-w-3xl mx-auto px-4">
                        {[
                            "HTML, CSS, JavaScript",
                            "ReactJS & NextJS",
                            "Node.js & ExpressJS",
                            "Spring Boot",
                            "Flutter",
                            "Fullstack Web and Mobile Development"
                        ].map((tech, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1" />
                                <span>{tech}</span>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* Key Features Section */}
                <div>
                    <h2 className="text-3xl font-semibold text-center">Key Features</h2>
                    <div className="mt-8 flex flex-wrap gap-8 justify-center">
                        {[
                            {
                                title: "Learning & Development",
                                desc: "Engage in structured training and skill development from day one.",
                                icon: "📘",
                            },
                            {
                                title: "Hands-on Projects",
                                desc: "Work directly on client and internal projects to build your portfolio.",
                                icon: "🛠️",
                            },
                            {
                                title: "Mentorship",
                                desc: "Get guided by experienced professionals to stay on the right career path.",
                                icon: "👨‍🏫",
                            },
                            {
                                title: "Skill Growth",
                                desc: "Sharpen both technical and soft skills throughout your journey.",
                                icon: "📈",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="rounded-sm shadow-lg bg-white p-4 flex flex-col gap-2 w-80 cursor-pointer transition-all hover:shadow-2xl hover:scale-105"
                            >
                                <div className="text-indigo-600 text-4xl">{item.icon}</div>
                                <div>
                                    <h3 className="uppercase text-md font-semibold">{item.title}</h3>
                                    <p className="text-sm text-gray-700">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
