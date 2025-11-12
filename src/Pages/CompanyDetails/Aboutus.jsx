// Importing team member images
import AadityaSigdel from "../../assets/Team/AadityaSigdel.jpg";
import AlishKarki from "../../assets/Team/Alice.jpg";
import PrajwalDahala from "../../assets/Team/Prajwal.jpg";
import SandipChapagain from "../../assets/Team/SandipChapagain.jpg";
import SarkarHasada from "../../assets/Team/sarkarhasada.jpg";

// Importing layout components
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function Aboutus() {
  return (
    <>
      {/* Top navigation bar */}
      <Navigation />

      <main className="bg-gradient-to-b from-gray-50 to-white pb-24">
        {/* Hidden SEO Keywords */}
        <div className="hidden">
          <p>
            A1 IT Innovation — top software company in Nepal, best IT company in Damak, Jhapa, Kathmandu, and across Nepal. 
            Providing web design, mobile app development, custom software, SEO services, and digital marketing.
            Internship in Nepal for students with intermediate knowledge — always free internship available.
            Trusted IT company near me for business websites, e-commerce, AI projects, and app development.
          </p>
        </div>

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
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-indigo-600 transform transition duration-300">
              <h2 className="text-2xl font-bold text-indigo-700 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  At{" "}
                  <strong className="text-indigo-700 font-semibold">
                    A1 IT Innovation
                  </strong>
                  , we are one of Nepal’s top software and IT companies,
                  delivering innovative web, mobile app, and software
                  development services to businesses of all sizes.
                </p>
                <p>
                  We specialize in custom software, website design, app
                  development, SEO, and digital marketing to help companies grow
                  online. Our solutions are trusted by clients across Nepal,
                  including Damak, Kathmandu, Pokhara, and Biratnagar.
                </p>
                <p>
                  We also believe in giving opportunities to the next generation
                  of tech talents — providing <strong>always free internship</strong> 
                  for students who have intermediate knowledge and a passion for technology.
                </p>
                <p>
                  Our team is made up of skilled developers, designers, and
                  digital marketers who work together to deliver results that
                  matter. We focus on quality, creativity, and client
                  satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
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
                  <p className="text-gray-600 pl-6">{getBeliefDescription(title)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="pt-16 max-h-screen flex flex-col justify-between">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-indigo-800">Meet Our Team</h2>
              <p className="text-gray-500 mt-3">The talented people behind our success</p>
            </div>

            {/* Founder */}
            <div className="flex justify-center mb-16">
              <div className="max-w-[1200px]">
                {teamMembers
                  .filter(
                    (member) =>
                      member.role.toLowerCase().includes("founder") &&
                      !member.role.toLowerCase().includes("co-founder")
                  )
                  .map((member, i) => (
                    <div
                      key={`founder-${i}`}
                      className="bg-white p-3 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className="relative mx-auto w-24 h-24 mb-3 rounded-full overflow-hidden border-2 border-indigo-100 group-hover:border-indigo-300 transition-colors duration-300">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                      <p className="text-xs text-indigo-600 font-medium mt-1">{member.role}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Team Members */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 items-center mx-auto">
              {teamMembers
                .filter(
                  (member) =>
                    !(
                      member.role.toLowerCase().includes("founder") &&
                      !member.role.toLowerCase().includes("co-founder")
                    )
                )
                .map((member, i) => (
                  <div
                    key={`member-${i}`}
                    className="bg-white p-2 rounded-lg shadow-sm text-center hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group"
                  >
                    <div className="relative mx-auto w-20 h-20 mb-2 rounded-full overflow-hidden border-2 border-indigo-100 group-hover:border-indigo-300 transition-colors duration-200">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                          No Image
                        </div>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-gray-800">{member.name}</h3>
                    <p className="text-xs text-indigo-600 font-medium mt-0.5">{member.role}</p>
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

/* Returns a description of company */
const getBeliefDescription = (title) => {
  const descriptions = {
    Innovation: "We embrace change and are committed to developing innovative solutions that push boundaries.",
    Collaboration: "We believe in teamwork where diverse ideas come together.",
    Integrity: "We are guided by honesty, transparency, and ethics.",
    "Continuous Learning": "We encourage growth through learning and mentorship.",
    Resilience: "We tackle challenges with determination and commitment.",
    "Customer-Centricity": "Our customers are the heart of everything we do.",
    Empathy: "We understand people to create meaningful technology.",
    Equity: "We promote fairness and inclusion at all levels.",
    Respect: "Every voice matters, and we treat all with dignity.",
    "Joyful Workplace": "We create a fun and creative workspace where ideas thrive.",
  };
  return descriptions[title];
};

/* List of team members */
const teamMembers = [
  { name: "Sandip Chapagain", role: "Founder & CEO (Java Developer)", image: SandipChapagain },
  { name: "Alish Karki", role: "Flutter Developer", image: AlishKarki },
  { name: "Suraj Rai", role: "Graphic Designer", image: "" },
  { name: "Aaditya Sigdel", role: "Frontend Developer", image: AadityaSigdel },
  { name: "Sarkar Hasada", role: "Frontend Developer", image: SarkarHasada },
  { name: "Sujal Thapa", role: "Digital Marketing", image: "" },
  { name: "PrajwalDahala", role: "AI / ML", image: PrajwalDahala },
];
