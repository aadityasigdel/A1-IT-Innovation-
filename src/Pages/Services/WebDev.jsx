import InternshipImg from "../../assets/ServicesImg/internship.avif";
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
            <Navigation />
            <main className="min-h-screen mb-20 flex flex-col items-center">

                {/* Hero Section */}
                <section className="w-full flex flex-wrap items-center justify-center p-4 lg:justify-between max-w-7xl h-screen text-black mt-10">
                    <div className="flex flex-col gap-8 max-w-lg text-center lg:text-left">
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
                            className="w-fit text-center bg-indigo-600 font-semibold text-white px-6 py-3 rounded hover:bg-indigo-700 transition duration-300"
                        >
                            Apply Now
                        </a>
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <img
                            src={InternshipImg}
                            alt="internship programs"
                            width="400"
                            height="500"
                            loading="lazy"
                            className="rounded shadow-lg"
                        />
                    </div>
                </section>

                {/* About Program */}
                <section className="flex flex-col gap-20 py-20">
                    <div className="max-w-[900px] m-auto text-center">
                        <h2 className="text-2xl font-semibold mb-4">Internship Programs at A1 IT Innovation</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our internship programs are designed to provide you with real-world experience and help you develop the
                            skills necessary for a successful career in technology. Join our team and work on exciting projects that
                            make a difference.
                        </p>
                    </div>

                    {/* Key Features */}
                    <div>
                        <h2 className="text-2xl font-semibold text-center">Key Features</h2>
                        <div className="mt-8 flex flex-wrap gap-6 justify-center">
                            {features.map((item, index) => (
                                <div
                                    key={index}
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

                {/* Technologies */}
                <section className="py-20 w-full">
                    <div className="max-w-[900px] m-auto text-center">
                        <h2 className="text-3xl font-semibold mb-6">Explore Different Technologies</h2>
                        <p className="text-gray-700 leading-relaxed">
                            During your internship, you will have the opportunity to gain experience in various technologies. Explore some of the technologies you may work with:
                        </p>
                    </div>

                    <div className="max-w-[900px] m-auto text-center mt-12">
                        <ul className="flex flex-wrap justify-center gap-6 text-gray-700 text-sm md:text-base">
                            {technologies.map((tech, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg shadow-sm hover:bg-gray-200 transition-colors"
                                >
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
