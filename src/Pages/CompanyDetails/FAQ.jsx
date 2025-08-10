import { useState } from 'react';
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const faqData = [
    { question: 'What is A1 IT Innovation?', answer: 'A1 IT Innovation is a technology company that specializes in delivering cutting-edge digital solutions tailored for modern business challenges.' },
     { question: 'Where are you located?',answer: 'Our main office is in Damak, Jhapa, Nepal (ZIP: 57217). Contact: +977-981-6032025. Open 24 hours.' },
    { question: 'What services do you provide?', answer: 'We offer software development, IT consulting, cloud solutions, UI/UX design, and product innovation services.' },
    { question: 'How to contact support?', answer: 'You can reach our support team via the Contact page, email, or live chat during business hours.' },
    { question: 'What is your typical project timeline?', answer: 'Project timelines vary based on complexity but typically range from 2 weeks to 3 months.' },
    { question: 'Do you provide ongoing maintenance and support?', answer: 'Yes, we offer long-term support and maintenance packages post-launch.' },
    { question: 'What is your development process?', answer: 'We follow agile methodology involving discovery, design, development, testing, and deployment phases.' },
    { question: 'How can I request a quote?', answer: 'Visit our Contact page, fill in your project details, and our team will get back to you within 24 hours.' },
    { question: 'What technologies do you specialize in?', answer: 'We specialize in React, Node.js, Python, AWS, Azure, Docker, and modern DevOps practices.' },
    { question: 'Can you help with software migration and upgrades?', answer: 'Absolutely. We assist with legacy migrations, cloud transitions, and software upgrades.' },
    { question: 'What is your pricing structure?', answer: 'Our pricing depends on project scope, duration, and complexity. Contact us for a custom quote.' },
   

];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Frequently Asked Questions</h1>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                            Find answers to common questions about our services and processes
                        </p>
                    </div>

                    <div className="space-y-4 max-w-3xl mx-auto">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${openIndex === index ? 'ring-2 ring-indigo-500' : 'hover:shadow-lg'}`}
                            >
                                <button
                                    className="w-full px-6 py-5 text-left focus:outline-none"
                                    onClick={() => toggleIndex(index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-${index}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                                        <div className={`ml-4 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                                
                                <div
                                    id={`faq-${index}`}
                                    className={`px-6 pb-5 text-gray-600 transition-all duration-300 ${openIndex === index ? 'block' : 'hidden'}`}
                                >
                                    <div className="border-t border-gray-200 pt-4">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Still have questions?</h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Contact our team for more information about our services and solutions.
                        </p>
                        <a href='/contact' className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-8 rounded-lg transition-colors duration-300 inline-flex items-center">
                            Contact Us
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