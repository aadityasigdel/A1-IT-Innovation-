import React, { useState } from 'react';
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"

const faqData = [
    { question: 'What is A1 IT Innovation?', answer: 'A1 IT Innovation is a technology company that specializes in delivering cutting-edge digital solutions tailored for modern business challenges.' },
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

  <Navigation/>
            <main className="min-h-screen py-10">
                <section>
                    <h2 className="text-center text-2xl font-bold mb-4">Frequently Asked Questions (FAQ)</h2>
                    <div className="max-w-[500px] mx-auto flex flex-col gap-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`bg-white shadow-custom rounded p-4 flex flex-col transition-all duration-300 overflow-hidden ${openIndex === index ? 'h-auto' : 'h-14'
                                    }`}
                            >
                                <div
                                    className="flex cursor-pointer font-semibold items-center"
                                    onClick={() => toggleIndex(index)}
                                >
                                    <p className="flex-1 capitalize">{item.question}</p>
                                    <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
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
                                </div>
                                {openIndex === index && (
                                    <div className="text-gray-600 mt-2 text-sm">{item.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </main>
             <Footer/>
        </>
    );
}
