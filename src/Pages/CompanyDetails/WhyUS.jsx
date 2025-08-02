import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const whyUsData = [
  {
    title: 'Pioneering Technology Leadership',
    description:
      'At A1 IT Innovation, we are leaders in adopting and developing next-generation technologies. As a team member, you will have the chance to engage with pioneering projects that push technological boundaries and create meaningful advancements across various industries.',
  },
  {
    title: 'Comprehensive Learning and Development',
    description:
      "We prioritize the growth and career advancement of our employees by offering comprehensive training programs and workshops. You'll have access to mentorship, cross-functional projects, and opportunities to continuously expand your expertise and skills.",
  },
  {
    title: 'Collaborative and Inclusive Work Culture',
    description:
      'A1 IT Innovation thrives on a collaborative work culture that values diversity and inclusion. You\'ll work alongside a talented team in an environment that encourages open communication, creativity, and innovation to solve complex challenges.',
  },
  {
    title: 'Flexible Work Arrangements',
    description:
      'Understanding the importance of work-life balance, we offer flexible work schedules and remote options. Our benefits include generous leave policies, parental leave, and wellness programs to ensure you can thrive both professionally and personally.',
  },
];

export default function WhyUs() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-indigo-800 mb-4">Why A1 IT Innovation?</h1>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes us stand out in the tech industry
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {whyUsData.map((item, index) => (
              <div 
                key={index}
                className="relative pl-14 group"
              >
                <div className="absolute left-0 top-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Interested in joining us?</h3>
            <a href="/company/career" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-8 rounded-lg transition-colors duration-300 inline-flex items-center">
              Explore Careers
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