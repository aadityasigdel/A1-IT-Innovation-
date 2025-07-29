import React from 'react';
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"

const whyUsData = [
  {
    title: 'Pioneering Technology Leadership',
    description:
      'At Our Company, we are leaders in adopting and developing next-generation technologies. As a team member, you will have the chance to engage with pioneering projects that push technological boundaries and create meaningful advancements across various industries.',
  },
  {
    title: 'Comprehensive Learning and Development',
    description:
      "We prioritize the growth and career advancement of our employees by offering comprehensive training programs and workshops. You'll have access to mentorship, cross-functional projects, and opportunities to continuously expand your expertise and skills.",
  },
  {
    title: 'Collaborative and Inclusive Work Culture',
    description:
      'Our Company thrives on a collaborative work culture that values diversity and inclusion. You\'ll work alongside a talented team in an environment that encourages open communication, creativity, and innovation to solve complex challenges.',
  },
  {
    title: 'Flexible Work Arrangements',
    description:
      'Understanding the importance of balancing professional and personal life, we offer flexible work schedules and remote work options. Our benefits include generous leave policies, parental leave, and wellness programs to ensure you can thrive both at work and home.',
  },
];

export default function WhyUs() {
  return (
    <>
    <Navigation/>
      <main className="min-h-screen py-10 mb-10">
        <section className="w-full max-w-[700px] mx-auto">
          <h2 className="text-2xl font-bold mb-6">Why A1 IT Innovation?</h2>
          <div className="flex flex-col gap-6">
            {whyUsData.map((item, index) => (
              <div className="relative pl-10" key={index}>
                <div className="absolute w-[20px] h-[20px] bg-indigo-600 top-1 left-0 rounded-sm"></div>
                <h3 className="ml-[1px] font-semibold">{item.title}</h3>
                <p className="text-justify text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
       <Footer/>
    </>
  );
}
