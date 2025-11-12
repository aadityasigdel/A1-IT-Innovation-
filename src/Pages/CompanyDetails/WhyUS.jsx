import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

// reasons why to join A1 IT Innovation
const whyUsData = [
  {
    title: 'Free Remote Internship Opportunities',
    description:
      'We provide free remote internship programs for students across Nepal. If you have intermediate knowledge in React, Flutter, Java, or AI, you can gain hands-on experience by working on real projects with our expert team.',
  },
  {
    title: 'Budget-Friendly IT Solutions',
    description:
      'We build your project within your budget without compromising on quality. A1 IT Innovation is known as a budget-friendly IT company in Nepal, delivering affordable software, mobile apps, and AI solutions for startups and enterprises.',
  },
  {
    title: 'Free Technical Advice for Startups',
    description:
      'Starting a new business or IT project? We provide free consultation and technical advice to entrepreneurs and organizations, helping them choose the right technologies, strategies, and workflows for success.',
  },
  {
    title: 'Building Custom AI Models',
    description:
      'A1 IT Innovation is recognized as one of the best AI companies in Nepal. We specialize in building custom AI models tailored for businesses, enabling automation, predictive analytics, and intelligent chatbot solutions.',
  },
  {
    title: 'Workshops for Schools and Colleges',
    description:
      'We organize IT workshops for schools and colleges across Nepal. Our sessions cover web development, mobile apps, cybersecurity, and AI, making us the most trusted IT company for educational training nationwide.',
  },
  {
    title: 'Pioneering Technology Leadership',
    description:
      'At A1 IT Innovation, we are leaders in adopting and developing next-generation technologies. As a team member, you will engage with pioneering projects that push technological boundaries and create meaningful advancements across industries.',
  },
  {
    title: 'Comprehensive Learning and Development',
    description:
      "We prioritize growth and career advancement by offering training programs, mentorship, and cross-functional projects. You'll continuously expand your expertise in software, AI, and cloud technologies.",
  },
  {
    title: 'Collaborative and Inclusive Work Culture',
    description:
      'A1 IT Innovation thrives on a collaborative work culture that values diversity and inclusion. You\'ll work alongside a talented team in an environment that encourages open communication, creativity, and innovation.',
  },
  {
    title: 'Flexible Work Arrangements',
    description:
      'We offer flexible schedules and remote options to support work-life balance. Our benefits include generous leave policies, parental leave, and wellness programs to help you thrive professionally and personally.',
  },
  {
    title: 'Nationwide Impact and Recognition',
    description:
      'From Damak and Jhapa to Kathmandu and Pokhara, A1 IT Innovation is trusted by businesses, startups, and educational institutions across Nepal. Joining us means being part of a company with national influence and credibility.',
  },
];

export default function WhyUs() {
  return (
    <>
      {/* Navigation bar */}
      <Navigation />

      {/* Main section */}
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-indigo-800 mb-4">
              Why A1 IT Innovation?
            </h1>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover why students, entrepreneurs, and businesses choose us as Nepal’s leading IT and AI company
            </p>
          </div>

          {/* List of reasons */}
          <div className="space-y-8 max-w-3xl mx-auto">
            {whyUsData.map((item, index) => (
              <div 
                key={index}
                className="relative pl-14 group"
              >
                {/* Bullet indicator */}
                <div className="absolute left-0 top-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                </div>
                {/* Title and description */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
              Interested in joining us?
            </h3>
            <a
              href="/company/career"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
            >
              Explore Careers
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
