import { Helmet } from "react-helmet";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function InternShip() {
    const features = [
        {
            title: "Learning & Development",
            desc: "Engage in continuous learning and development through our structured internship programs.",
            icon: "📘",
        },
        {
            title: "Hands-on Experience",
            desc: "Work on real projects and gain practical experience in your field of interest.",
            icon: "🛠️",
        },
        {
            title: "Mentorship",
            desc: "Receive guidance and support from experienced professionals.",
            icon: "👨‍🏫",
        },
        {
            title: "Project Involvement",
            desc: "Be involved in impactful projects that contribute to the success of the company.",
            icon: "💼",
        },
        {
            title: "Skill Development",
            desc: "Enhance your technical and soft skills through diverse tasks and responsibilities.",
            icon: "📈",
        },
        {
            title: "Collaborative Environment",
            desc: "Work in a collaborative environment that encourages teamwork and innovation.",
            icon: "🤝",
        },
    ];

    const technologies = [
        "HTML, CSS, JS",
        "ReactJS",
        "NextJS",
        "Node.js & ExpressJS",
        "SpringBoot",
        "Flutter",
        "Fullstack Web & Mobile",
    ];

    return (
        <>
            <Helmet>
                <title>Free IT Internship Program in Nepal | A1 IT Innovation</title>
                <meta name="description" content="Join our free IT internship program in Nepal. Learn web development, mobile apps, and modern technologies with mentorship from industry experts." />
                <meta name="keywords" content="internship Nepal, IT internship, free internship, web development internship, tech training" />
                <meta property="og:title" content="Internship Program | A1 IT Innovation" />
                <meta property="og:description" content="Free IT internship with hands-on project experience in Nepal" />
                <meta property="og:url" content="https://www.a1itinnovation.com.np/services/internship" />
                <meta name="twitter:title" content="Internship Program | A1 IT Innovation" />
                <meta name="twitter:description" content="Free IT internship in Nepal" />
                <link rel="canonical" href="https://www.a1itinnovation.com.np/services/internship" />
            </Helmet>
            <Navigation />
            <main className="min-h-screen mb-20 flex flex-col items-center">

                {/* Hero Section */}
                <section className="w-full flex flex-wrap items-center justify-center p-4 lg:justify-between max-w-7xl text-black mt-10 h-screen">
                    <div className="flex flex-col gap-8 max-w-lg text-center  items-center lg:text-left ">
                        <div>
                            <h1 className="text-2xl md:text-4xl font-bold">
                                Kickstart Your Career with Our Internship Programs
                            </h1>
                            <p className="text-xl md:text-2xl font-medium mt-2">
                                Gain hands-on experience and develop your skills with our comprehensive internship opportunities.
                            </p>
                        </div>
                        <a
                            href="https://docs.google.com/forms/d/18Rw6gxEvwI4t79WooNCFaMGJH3T9Xgby4OlrK6C8u8o"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit text-center items-center bg-indigo-600 font-semibold text-white px-6 py-3 rounded hover:bg-indigo-700 transition duration-300"
                        >
                            Apply Now
                        </a>
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg rounded-xl shadow-lg" aria-label="Internship program illustration">
                          <rect width="500" height="400" rx="16" fill="#FFF7ED"/>
                          <rect x="60" y="276" width="380" height="14" rx="4" fill="#D97706"/>
                          <rect x="80" y="290" width="14" height="70" rx="4" fill="#B45309"/>
                          <rect x="406" y="290" width="14" height="70" rx="4" fill="#B45309"/>
                          <rect x="110" y="248" width="220" height="32" rx="6" fill="#374151"/>
                          <rect x="95" y="274" width="252" height="8" rx="4" fill="#1F2937"/>
                          <rect x="118" y="108" width="206" height="146" rx="8" fill="#1F2937"/>
                          <rect x="126" y="116" width="190" height="130" rx="4" fill="#0F172A"/>
                          <rect x="126" y="116" width="190" height="34" rx="4" fill="#4F46E5"/>
                          <text x="221" y="137" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#C7D2FE">~ internship-project</text>
                          <text x="136" y="165" fontFamily="monospace" fontSize="8" fill="#F59E0B">const</text>
                          <text x="174" y="165" fontFamily="monospace" fontSize="8" fill="#60A5FA">skills</text>
                          <text x="210" y="165" fontFamily="monospace" fontSize="8" fill="#E5E7EB">= [</text>
                          <text x="136" y="178" fontFamily="monospace" fontSize="8" fill="#34D399">  "React"</text>
                          <text x="136" y="191" fontFamily="monospace" fontSize="8" fill="#34D399">  "Node.js"</text>
                          <text x="136" y="204" fontFamily="monospace" fontSize="8" fill="#34D399">  "Flutter"</text>
                          <text x="136" y="217" fontFamily="monospace" fontSize="8" fill="#E5E7EB">]</text>
                          <rect x="126" y="224" width="190" height="18" rx="3" fill="#064E3B"/>
                          <text x="136" y="236" fontFamily="monospace" fontSize="8" fill="#6EE7B7">✓ Internship Complete! 🎓</text>
                          <rect x="358" y="176" width="70" height="16" rx="4" fill="#EF4444"/>
                          <rect x="354" y="196" width="74" height="16" rx="4" fill="#3B82F6"/>
                          <rect x="360" y="216" width="68" height="16" rx="4" fill="#22C55E"/>
                          <rect x="356" y="236" width="72" height="16" rx="4" fill="#F59E0B"/>
                          <text x="393" y="262" textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="#92400E">Textbooks</text>
                          <polygon points="90,136 130,164 50,164" fill="#374151"/>
                          <rect x="50" y="164" width="80" height="10" rx="2" fill="#1E293B"/>
                          <line x1="130" y1="164" x2="130" y2="181" stroke="#1E293B" strokeWidth="2"/>
                          <circle cx="130" cy="184" r="5" fill="#F59E0B"/>
                          <text x="90" y="204" textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="#92400E">Certified</text>
                          <rect x="52" y="316" width="120" height="30" rx="8" fill="#FEF3C7"/>
                          <text x="112" y="335" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#92400E">🎓 Learn</text>
                          <rect x="192" y="316" width="116" height="30" rx="8" fill="#DCFCE7"/>
                          <text x="250" y="335" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#15803D">⚡ Build</text>
                          <rect x="328" y="316" width="120" height="30" rx="8" fill="#EDE9FE"/>
                          <text x="388" y="335" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#6D28D9">🚀 Grow</text>
                          <line x1="220" y1="276" x2="220" y2="312" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3 3"/>
                        </svg>
                    </div>
                </section>

                {/* About Program */}
                <section className="flex flex-col gap-20 py-20 bg-gradient-to-b from-gray-50 to-white">
                    {/* Intro */}
                    <div className="max-w-[900px] m-auto text-center px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Internship Programs at <span className="text-indigo-600">A1 IT Innovation</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our internship programs are designed to provide you with real-world experience
                            and help you develop the skills necessary for a successful career in technology.
                            Join our team and work on exciting projects that truly make a difference.
                        </p>
                    </div>

                    {/* Key Features */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900">
                            Key Features
                        </h2>
                        <div className="mt-10 flex flex-wrap gap-8 justify-center px-4">
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl shadow-md bg-white p-6 flex flex-col gap-4 w-80 sm:w-96 cursor-pointer 
          transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                                >
                                    <div className="bg-indigo-100 text-indigo-600 w-14 h-14 flex items-center justify-center 
          rounded-full text-3xl shadow-sm">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Technologies */}
                <section className="py-20 w-full">
                    <div className="max-w-[900px] m-auto text-center">
                        <h2 className="text-3xl font-semibold mb-6">Explore Different Technologies</h2>
                        <p className="text-gray-700 leading-relaxed">
                            During your internship, you will have the opportunity to gain experience in various technologies. Explore some of the technologies you may work with:
                        </p>
                    </div>

                    <div className="max-w-[900px] m-auto text-center mt-12">
                        <ul className="list-none text-gray-700 leading-relaxed flex flex-wrap justify-center gap-8">
                            {technologies.map((tech, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <FaCheckCircle className="text-indigo-600 text-xl" />
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
