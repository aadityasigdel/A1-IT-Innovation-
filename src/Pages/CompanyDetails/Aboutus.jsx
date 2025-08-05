import AadityaSigdel from "../../assets/Team/AadityaSigdel.jpg";
import SandipChapagain from "../../assets/Team/SandipChapagain.jpg";
import SarkarHasada from "../../assets/Team/sarkarhasada.jpg";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
export default function Aboutus() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16">
                {/* Hero Section */}
                <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
                    <div className="text-center space-y-4 animate-fade-in">
                        <h1 className="text-5xl font-bold text-indigo-800 bg-clip-text">
                            About Us
                        </h1>
                        <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
                        <p className="text-xl max-w-2xl mx-auto text-gray-600 mt-4 font-medium">
                            Empowering digital transformation through innovative technology solutions.
                        </p>
                    </div>

                    {/* Company Description */}
                    <div className="mt-16 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-indigo-600 transform transition  duration-300">
                            <h2 className="text-2xl font-bold text-indigo-700 mb-6">Our Story</h2>
                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <p className="text-lg">
                                    At <strong className="text-indigo-700 font-semibold">A1 IT Innovation</strong>, we are a pioneering force in the digital landscape, dedicated to providing cutting-edge software solutions that empower businesses and individuals alike.
                                </p>
                                <p>
                                    With a foundation built on expertise and innovation, our team excels in crafting custom applications and systems that meet the evolving needs of our clients. Our mission is to deliver excellence and drive digital transformation.
                                </p>
                                <p>
                                    Our diverse team of professionals, comprising skilled engineers, creative thinkers, and strategic planners, is united by a shared passion for technology and a commitment to delivering value to our clients every day.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Core Beliefs */}
                    <div className="pt-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-indigo-800">Our Core Values</h2>
                            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                                The principles that guide everything we do
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "Innovation",
                                "Collaboration",
                                "Integrity",
                                "Continuous Learning",
                                "Resilience",
                                "Customer-Centricity",
                                "Empathy",
                                "Equity",
                                "Respect",
                                "Joyful Workplace",
                            ].map((title, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-4 border-indigo-100"
                                >
                                    <div className="flex items-center mb-3">
                                        <div className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></div>
                                        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                                    </div>
                                    <p className="text-gray-600 pl-6">
                                        {getBeliefDescription(title)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Team */}
                    <div className="pt-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-indigo-800">Meet Our Team</h2>
                            <p className="text-gray-500 mt-3">
                                The talented people behind our success
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {teamMembers.map((member, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                                >
                                    <div className="relative mx-auto w-32 h-32 mb-5 rounded-full overflow-hidden border-4 border-indigo-100 group-hover:border-indigo-300 transition-colors duration-300">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                                    <p className="text-indigo-600 text-sm font-medium mt-1">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

const getBeliefDescription = (title) => {
    const descriptions = {
        Innovation: "We embrace change and are committed to developing innovative solutions that push boundaries.",
        Collaboration: "We believe in the power of teamwork where diverse ideas come together.",
        Integrity: "We are guided by honesty, transparency, and a strong ethical compass.",
        "Continuous Learning": "We encourage personal and professional growth through learning and mentorship.",
        Resilience: "We tackle challenges head-on and stay committed to excellence.",
        "Customer-Centricity": "Our customers are at the heart of everything we do.",
        Empathy: "We prioritize understanding people to build meaningful solutions.",
        Equity: "We foster fairness and inclusion in everything we do.",
        Respect: "Every voice matters, and we treat all with dignity.",
        "Joyful Workplace": "We create an enjoyable space where creativity and motivation thrive.",
    };
    return descriptions[title];
};

const teamMembers = [
    { name: "Sandip Chapagain", role: "Founder & CEO (Java Developer)", image: SandipChapagain },
    { name: "Ashok Thapa", role: "Co-Founder & Fullstack Developer", image: "/leaders/4.jpeg" },
    { name: "Alish Karki", role: "Django Developer", image: "/leaders/7.jpg" },
    { name: "Bishwas Limbu", role: "UI/UX Designer", image: "/leaders/bishwas.png" },
    { name: "Suraj Rai", role: "Graphic Designer", image: "/leaders/graphic.jpeg" },
    { name: "Saurav Rijal", role: "Graphic Designer", image: "/leaders/sourav.jpeg" },
    { name: "Anmol Adhikari", role: "Graphic Designer", image: "/leaders/anmol.jpeg" },
    { name: "Aaditya Sigdel", role: "Frontend Developer", image: AadityaSigdel },
    { name: "Sarkar Hasada", role: "Frontend Developer", image: SarkarHasada },

];