import { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const faqData = [
  {
    category: "About Us",
    icon: "🏢",
    items: [
      {
        question: "What is A1 IT Innovation?",
        answer: "A1 IT Innovation is a trusted IT and software company based in Nepal. Founded in 2021, we specialize in web development, mobile app development, DevOps managed services, AI solutions, online courses, security audits, and free IT internships for students across Nepal.",
      },
      {
        question: "Where are your offices located?",
        answer: "We have offices across Nepal:\n• Damak, Jhapa (Main Office)\n• Kageshwori Manohara, Kathmandu\n• Sallaghari, Bhaktapur\n\nWe also work with clients nationwide through remote collaboration. Reach us at +977-981-6032025 — available 24/7.",
      },
      {
        question: "How long has A1 IT Innovation been operating?",
        answer: "We have been serving businesses and students across Nepal since 2021 — over 4 years of delivering reliable IT solutions. To date, we have completed 19+ projects, served 20+ clients, and trained 500+ students.",
      },
      {
        question: "How do you work with clients?",
        answer: "Transparency is our core value. We believe every client deserves complete clarity — no hidden costs, no surprises, no confusion. From the first meeting to final delivery, we keep you fully informed at every step. We discuss your budget upfront and build a solution that fits it, without compromising on quality.",
      },
    ],
  },
  {
    category: "Services",
    icon: "⚙️",
    items: [
      {
        question: "What services do you provide?",
        answer: "We offer a full range of IT services:\n• Web Development (React, Next.js)\n• Mobile App Development (Android & iOS / Flutter)\n• DevOps as a Managed Service\n• Custom AI & Chatbot Development\n• Security Audit & Vulnerability Testing\n• Domain Registration & Web Hosting\n• Online Courses (Digital Marketing, Cybersecurity, DevOps, System Design)\n• Free IT Internship Program",
      },
      {
        question: "What is your DevOps Managed Service?",
        answer: "Any company can hand over their entire server and infrastructure operations to us. We take full responsibility for your servers — including CI/CD pipeline setup, Kubernetes deployment, cloud hosting management, 24/7 server monitoring, security patching, and incident response. You focus on your product; we keep your infrastructure running smoothly.",
      },
      {
        question: "Do you build custom AI models and chatbots?",
        answer: "Yes. We build custom AI models tailored to your business — automation, predictive analytics, intelligent chatbots, and recommendation systems. Our chatbots integrate seamlessly with websites, mobile apps, and social platforms.",
      },
      {
        question: "What technologies do you specialize in?",
        answer: "React, Next.js, Flutter, Node.js, Express, Spring Boot, Python, TensorFlow, PyTorch, Docker, Kubernetes, Terraform, Ansible, AWS, Azure, GCP, Grafana, Prometheus, and modern DevOps tooling.",
      },
      {
        question: "Can you help with software migration and upgrades?",
        answer: "Yes. We handle legacy system migrations, cloud transitions, AI integrations, and platform upgrades — with minimal downtime and full data integrity throughout the process.",
      },
    ],
  },
  {
    category: "Online Courses",
    icon: "📚",
    items: [
      {
        question: "What online courses does A1 IT Innovation offer?",
        answer: "We offer the following online courses:\n• Digital Marketing — SEO, social media, paid ads, content strategy\n• Cybersecurity — ethical hacking, penetration testing, network security\n• DevOps — CI/CD, Docker, Kubernetes, cloud infrastructure\n• System Design — scalable architecture, databases, microservices\n\nAll courses are taught by industry professionals with hands-on assignments.",
      },
      {
        question: "Who are these courses designed for?",
        answer: "Our courses are designed for students, working professionals, and entrepreneurs who want to upgrade their skills in high-demand technology fields. Whether you're a beginner or looking to advance your career, we have structured learning paths for every level.",
      },
      {
        question: "Are the courses online or in-person?",
        answer: "All courses are available online, so you can learn from anywhere in Nepal or abroad. We also offer in-person workshops at our offices in Damak, Kathmandu, and Bhaktapur upon request.",
      },
      {
        question: "Do you provide certificates after course completion?",
        answer: "Yes. All students who complete a course receive a certificate from A1 IT Innovation. This certificate validates your skills and can be added to your LinkedIn profile and resume.",
      },
    ],
  },
  {
    category: "Internship & Training",
    icon: "🎓",
    items: [
      {
        question: "Do you offer free internship opportunities?",
        answer: "Yes — 100% free. No fees, no hidden charges. If you have basic knowledge in React, Flutter, Node.js, Java, or AI, you can join our internship program and work on real client projects under the guidance of our senior engineers.",
      },
      {
        question: "Do you conduct workshops at colleges and schools?",
        answer: "Yes. We have trained 500+ students through workshops at schools and colleges across Nepal, covering web development, mobile apps, cybersecurity, and AI. Contact us to bring a workshop to your institution — free of charge.",
      },
      {
        question: "What do interns actually work on?",
        answer: "Interns contribute to real, live client projects — not practice apps or dummy tasks. You write real code, solve real problems, and ship real features. This builds a genuine portfolio and gives you industry-level experience from day one.",
      },
    ],
  },
  {
    category: "Process & Pricing",
    icon: "💼",
    items: [
      {
        question: "How do you handle project pricing?",
        answer: "We work within your budget — always. Before starting any project, we have an open conversation about your budget and expectations. We then design a solution that fits. No surprise costs, no scope creep without your approval. Transparency with clients is our main commitment.",
      },
      {
        question: "What is your typical project timeline?",
        answer: "Timelines depend on project scope:\n• Simple website: 1–2 weeks\n• Full mobile app: 4–8 weeks\n• AI / enterprise solutions: 2–4 months\n\nWe always agree on a delivery timeline before we begin.",
      },
      {
        question: "What is your development process?",
        answer: "We follow an agile approach: Discovery → Design → Development → Testing → Deployment → Ongoing Support. Every phase is communicated clearly to the client. You'll always know exactly what we're working on and when it will be ready.",
      },
      {
        question: "How can I request a quote?",
        answer: "Visit our Contact page, describe your project, and our team will respond within 24 hours with a clear, itemized proposal. First consultation is always free.",
      },
      {
        question: "Do you provide ongoing maintenance and support?",
        answer: "Yes. We offer post-launch maintenance packages covering bug fixes, security updates, feature additions, and infrastructure monitoring. We build long-term relationships — most of our clients continue working with us well after launch.",
      },
    ],
  },
];

// Flatten for JSON-LD schema
const allFaqs = faqData.flatMap((cat) => cat.items);

export default function FaqSection() {
  const [openKey, setOpenKey] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...faqData.map((c) => c.category)];

  const filtered = faqData
    .filter((cat) => activeCategory === "All" || cat.category === activeCategory)
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.question.toLowerCase().includes(search.toLowerCase()) ||
          item.answer.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <>
      <Helmet>
        <title>FAQ | A1 IT Innovation Nepal — IT Services, Courses & Internship Questions Answered</title>
        <meta name="description" content="Frequently asked questions about A1 IT Innovation Nepal — offices in Damak, Kathmandu & Bhaktapur, DevOps managed services, online courses (Digital Marketing, Cybersecurity, DevOps, System Design), free IT internships, transparent pricing, and more." />
        <meta name="keywords" content="A1 IT Innovation FAQ, IT company Nepal, DevOps managed service Nepal, online courses Nepal, digital marketing course Nepal, cybersecurity course Nepal, system design course Nepal, free internship Nepal, software company Damak, IT company Kathmandu, Bhaktapur IT company, transparent IT company Nepal" />
        <meta property="og:title" content="FAQ | A1 IT Innovation Nepal" />
        <meta property="og:description" content="Answers to common questions about A1 IT Innovation's services, internship program, pricing, and process." />
        <meta property="og:url" content="https://www.a1itinnovation.com.np/company/faq" />
        <link rel="canonical" href="https://www.a1itinnovation.com.np/company/faq" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": allFaqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
        })}</script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen">

        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-indigo-700 text-indigo-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">Help Center</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Frequently Asked <span className="text-indigo-300">Questions</span>
            </h1>
            <p className="text-indigo-200 text-lg max-w-xl mx-auto mb-10">
              Everything you need to know about our services, internship program, pricing, and process — answered clearly.
            </p>

            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input
                type="text"
                placeholder="Search questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/10 border border-white/20 text-white placeholder-indigo-300 pl-12 pr-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
              />
            </div>
          </div>
        </section>

        {/* ── CATEGORY TABS ── */}
        <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ACCORDION ── */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6 space-y-10">

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-gray-500 text-lg">No results found for "<strong>{search}</strong>"</p>
                <button onClick={() => setSearch("")} className="mt-4 text-indigo-600 font-semibold hover:underline text-sm">Clear search</button>
              </div>
            )}

            {filtered.map((cat) => (
              <div key={cat.category}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h2 className="text-lg font-bold text-gray-800">{cat.category}</h2>
                  <div className="flex-1 h-px bg-gray-200"/>
                  <span className="text-xs bg-indigo-100 text-indigo-600 font-semibold px-2.5 py-1 rounded-full">
                    {cat.items.length}
                  </span>
                </div>

                {/* Accordion items */}
                <div className="space-y-3">
                  {cat.items.map((item, idx) => {
                    const key = `${cat.category}-${idx}`;
                    const isOpen = openKey === key;
                    return (
                      <div
                        key={key}
                        className={`bg-white rounded-xl border transition-all duration-200 ${
                          isOpen ? "border-indigo-300 shadow-md" : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                        }`}
                      >
                        <button
                          className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                          onClick={() => toggle(key)}
                          aria-expanded={isOpen}
                        >
                          <span className="text-gray-900 font-semibold text-sm leading-snug">{item.question}</span>
                          <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isOpen ? "bg-indigo-600 text-white rotate-180" : "bg-gray-100 text-gray-500"
                          }`}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                            </svg>
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5">
                            <div className="border-t border-gray-100 pt-4 text-gray-600 text-sm leading-relaxed">
                              {item.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h2>
            <p className="text-gray-500 mb-8">
              Our team is available 24/7. Reach out and we'll get back to you within a few hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-lg transition duration-300 inline-flex items-center justify-center gap-2">
                Contact Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a href="/services/internship" className="border border-gray-300 hover:border-indigo-400 text-gray-700 hover:text-indigo-600 font-semibold px-8 py-3.5 rounded-lg transition duration-300 text-center">
                Apply for Internship
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
