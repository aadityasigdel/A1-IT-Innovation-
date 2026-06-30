import { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { FaCheckCircle } from "react-icons/fa";
import { FiFileText, FiMail, FiPhone, FiUpload, FiUser } from "react-icons/fi";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const DOMAIN_OPTIONS = [
    { value: "Java Spring Boot", label: "Java Spring Boot", icon: "☕", color: "from-orange-400 to-red-500" },
    { value: "DevOps", label: "DevOps", icon: "🚀", color: "from-blue-400 to-cyan-500" },
    { value: "System Design", label: "System Design", icon: "🏗️", color: "from-purple-400 to-indigo-500" },
    { value: "React JS", label: "React JS", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { value: "Flutter", label: "Flutter", icon: "🦋", color: "from-sky-400 to-blue-600" },
    { value: "AI / ML", label: "AI / ML", icon: "🤖", color: "from-pink-400 to-rose-500" },
    { value: "Research", label: "Research", icon: "🔬", color: "from-teal-400 to-emerald-600" },
    { value: "Other", label: "Other", icon: "🔧", color: "from-gray-400 to-gray-600" },
];

const features = [
    { title: "Real Project Experience", desc: "Work on live client projects — not dummy exercises. Ship code that actually runs in production.", icon: "🛠️" },
    { title: "Expert Mentorship", desc: "1-on-1 guidance from senior engineers who've built production systems.", icon: "👨‍🏫" },
    { title: "Deep Tech Learning", desc: "Go beyond tutorials — understand architecture, system design, and best practices.", icon: "📘" },
    { title: "Career Boost", desc: "Build a portfolio that makes you stand out in the Nepali IT market and beyond.", icon: "📈" },
    { title: "Team Collaboration", desc: "Learn Git, code reviews, agile sprints — just like a real software team.", icon: "🤝" },
    { title: "Certificate & Recognition", desc: "Earn a verified internship certificate on successful completion.", icon: "🎓" },
];

const policies = [
    {
        category: "Compensation",
        icon: "💰",
        color: "bg-emerald-50 border-emerald-200",
        headerColor: "text-emerald-700",
        items: [
            "Internship is completely free — students pay nothing.",
            "The company does not pay a salary during the internship period.",
            "If your idea or code goes to production and benefits the company, we will recognize and reward your contribution.",
        ],
    },
    {
        category: "Working Hours & Schedule",
        icon: "🕐",
        color: "bg-blue-50 border-blue-200",
        headerColor: "text-blue-700",
        items: [
            "Core hours: 10:00 AM – 5:00 PM (flexible based on mutual agreement).",
            "Every Saturday is a day off for all interns.",
            "Progress check-in meeting every 3 days — be ready to show what you've built.",
            "Internship is fully remote as of now.",
        ],
    },
    {
        category: "Daily & Weekly Responsibilities",
        icon: "📋",
        color: "bg-violet-50 border-violet-200",
        headerColor: "text-violet-700",
        items: [
            "Maintain a daily learning log — document what you explored, built, or researched each day.",
            "Weekly review: we go through your log together to track progress and guide direction.",
            "We always recommend working in a team — collaboration is key.",
        ],
    },
    {
        category: "What We Provide",
        icon: "🎁",
        color: "bg-indigo-50 border-indigo-200",
        headerColor: "text-indigo-700",
        items: [
            "Mentorship from senior engineers throughout your internship.",
            "Resources: hosting, servers, and infrastructure needed for your projects.",
            "Full support for students who are curious, who explore new ideas, experiment, and do research.",
            "Certificate of completion and a recommendation letter upon successful internship finish.",
        ],
    },
    {
        category: "Eligibility",
        icon: "✅",
        color: "bg-amber-50 border-amber-200",
        headerColor: "text-amber-700",
        items: [
            "Familiarity with the relevant technology or framework you're applying for is required.",
            "Genuine interest in learning, building, and exploring new technologies.",
            "Open to both college students and self-learners.",
        ],
    },
    {
        category: "Duration & Job Opportunity",
        icon: "🚀",
        color: "bg-rose-50 border-rose-200",
        headerColor: "text-rose-700",
        items: [
            "Minimum duration: 2 months. Maximum: as long as you need — fully flexible.",
            "If your contribution during the internship goes to production, we will offer you a placement.",
        ],
    },
];

const faqs = [
    {
        q: "Is this internship free? Do I have to pay anything?",
        a: "Yes, the internship is completely free. Students pay nothing to join. There are no registration fees, training fees, or hidden charges of any kind.",
    },
    {
        q: "Will I get a salary or stipend during the internship?",
        a: "No, the company does not pay a salary or stipend during the internship period. It is a mutual learning and contribution arrangement. However, if your code or idea goes to production and benefits the company, we will recognize and reward your contribution.",
    },
    {
        q: "Is the internship remote or on-site?",
        a: "The internship is fully remote as of now. You can join from anywhere.",
    },
    {
        q: "What are the working hours?",
        a: "Core hours are 10:00 AM to 5:00 PM, but they are flexible based on mutual agreement. Every Saturday is a day off. We hold a progress check-in meeting every 3 days where you show what you have built or explored.",
    },
    {
        q: "How long is the internship?",
        a: "The minimum duration is 2 months. The maximum is entirely your own decision — we are flexible and support students who want to stay longer and keep growing.",
    },
    {
        q: "Do I need to maintain daily documentation?",
        a: "Yes. Interns are expected to keep a daily learning log documenting what they explored, built, or researched each day. Every week we review this log together to track progress and guide your direction.",
    },
    {
        q: "What resources does A1 IT Innovation provide to interns?",
        a: "We provide mentorship from senior engineers, access to hosting, servers, and infrastructure needed for your projects. We actively support students who are curious, explore new ideas, experiment, and do research.",
    },
    {
        q: "Will I get a certificate or recommendation letter?",
        a: "Yes. Upon successful completion you will receive a verified internship certificate and a recommendation letter from A1 IT Innovation.",
    },
    {
        q: "Who is eligible to apply?",
        a: "Anyone who is familiar with and genuinely interested in the relevant technology or framework they are applying for. We are open to both college students and self-learners. Curiosity and willingness to explore matter most.",
    },
    {
        q: "Will I get a job offer after the internship?",
        a: "If your contributions during the internship are helpful to the company and go to production, we will definitely offer a placement or full-time role.",
    },
    {
        q: "Do you support team projects?",
        a: "Yes, we always recommend working in a team. Collaboration, code reviews, and peer learning are a core part of the internship experience here.",
    },
    {
        q: "What kind of support and mentorship do you provide?",
        a: "Senior engineers guide you throughout the internship. We help with architecture decisions, code reviews, debugging, and career direction. We also motivate students who want to experiment and try new ideas.",
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

export default function InternShip() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        isCollegeStudent: false,
        collegeName: "",
        designation: "",
        experience: "",
        cv: null,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);
    const fileInputRef = useRef(null);

    const validate = () => {
        const e = {};
        if (!formData.fullName.trim()) e.fullName = "Full name is required";
        if (!formData.email.trim()) {
            e.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            e.email = "Please enter a valid email";
        }
        if (!formData.phone.trim()) {
            e.phone = "Phone number is required";
        } else if (!/^[0-9+\-\s]{7,15}$/.test(formData.phone.trim())) {
            e.phone = "Please enter a valid phone number";
        }
        if (formData.isCollegeStudent && !formData.collegeName.trim())
            e.collegeName = "Please enter your college name";
        if (!formData.designation) e.designation = "Please select a domain";
        if (!formData.experience.trim()) e.experience = "Please describe your experience or familiarity";
        if (!formData.cv) {
            e.cv = "CV / Resume is required";
        } else if (formData.cv.size > 5 * 1024 * 1024) {
            e.cv = "File size must be less than 5MB";
        } else if (formData.cv.type !== "application/pdf") {
            e.cv = "Only PDF files are accepted";
        }
        return e;
    };

    const handleChange = (e) => {
        const { name, value, files, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : files ? files[0] : value,
        }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleDragOver = (e) => { e.preventDefault(); e.stopPropagation(); };
    const handleDrop = (e) => {
        e.preventDefault(); e.stopPropagation();
        if (e.dataTransfer.files?.[0]) {
            const file = e.dataTransfer.files[0];
            if (file.type === "application/pdf") {
                setFormData((prev) => ({ ...prev, cv: file }));
                if (errors.cv) setErrors((prev) => ({ ...prev, cv: "" }));
            } else {
                setErrors((prev) => ({ ...prev, cv: "Only PDF files are accepted" }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        const payload = new FormData();
        payload.append("fullName", formData.fullName);
        payload.append("email", formData.email);
        payload.append("phone", formData.phone);
        payload.append("collegeName", formData.isCollegeStudent ? formData.collegeName : "N/A");
        payload.append("designation", formData.designation);
        payload.append("experience", formData.experience);
        payload.append("cv", formData.cv);
        payload.append("_captcha", "false");
        payload.append("_subject", "New Internship Application from Website");
        payload.append("_template", "box");

        try {
            const response = await fetch("https://formsubmit.co/info@a1itinnovation.com.np", {
                method: "POST",
                body: payload,
            });
            if (response.ok) {
                setSubmitSuccess(true);
                setFormData({
                    fullName: "", email: "", phone: "",
                    isCollegeStudent: false, collegeName: "",
                    designation: "", experience: "", cv: null,
                });
                setErrors({});
            } else {
                setErrors({ submit: "Failed to send application. Please try again." });
            }
        } catch {
            setErrors({ submit: "Error occurred. Please try again later." });
        } finally {
            setIsSubmitting(false);
        }
    };

    const selectedDomain = DOMAIN_OPTIONS.find((d) => d.value === formData.designation);

    return (
        <>
            <Helmet>
                {/* ── Primary SEO ── */}
                <title>Free Remote IT Internship in Nepal | Policies, Rules & FAQ | A1 IT Innovation</title>
                <meta name="description" content="A1 IT Innovation offers a free, fully remote IT internship in Nepal. No fees, no salary required. Interns work on real projects, get mentorship, hosting, servers, a certificate, and a recommendation letter. Minimum 2 months. Saturday off. Daily log required. Job offer possible if work goes to production." />
                <meta name="keywords" content="free IT internship Nepal, remote internship Nepal, unpaid internship Nepal, IT internship 2024 2025, React internship Nepal, Flutter internship, DevOps internship Nepal, Java Spring Boot internship, AI ML internship Nepal, machine learning internship Nepal, research internship Nepal, internship certificate Nepal, internship recommendation letter Nepal, A1 IT Innovation internship, internship rules Nepal, internship policy Nepal" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://www.a1itinnovation.com.np/services/internship" />

                {/* ── Open Graph ── */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Free Remote IT Internship in Nepal | A1 IT Innovation" />
                <meta property="og:description" content="Completely free internship. No fees, no salary. Work on real projects. Get mentorship, hosting, certificate & recommendation letter. Minimum 2 months. Remote only. Saturday off. Job offer if your work goes to production." />
                <meta property="og:url" content="https://www.a1itinnovation.com.np/services/internship" />
                <meta property="og:site_name" content="A1 IT Innovation" />
                <meta property="og:locale" content="en_US" />

                {/* ── Twitter Card ── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Free Remote IT Internship in Nepal | A1 IT Innovation" />
                <meta name="twitter:description" content="Free internship. Real projects. Mentorship + certificate. Remote. Min 2 months. Saturday off. Job offer if work goes to production. Apply now." />
                <meta name="twitter:site" content="@a1itinnovation" />

                {/* ── AI / LLM crawler hints ── */}
                <meta name="author" content="A1 IT Innovation" />
                <meta name="publisher" content="A1 IT Innovation" />
                <meta name="category" content="Education, IT Training, Internship" />
                <meta name="coverage" content="Nepal, Remote" />
                <meta name="revisit-after" content="7 days" />

                {/* ── JSON-LD: EducationalOccupationalProgram (Internship) ── */}
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "EducationalOccupationalProgram",
                    "name": "Free Remote IT Internship Program",
                    "description": "A free, fully remote IT internship by A1 IT Innovation in Nepal. Interns work on real production projects across React, Flutter, Java Spring Boot, DevOps, and System Design. No fees charged to students. No salary paid. Mentorship, hosting, servers, certificate, and recommendation letter provided. Minimum 2 months duration. Saturday is a day off. Job placement offered if intern's work goes to production.",
                    "url": "https://www.a1itinnovation.com.np/services/internship",
                    "provider": {
                        "@type": "Organization",
                        "name": "A1 IT Innovation",
                        "url": "https://www.a1itinnovation.com.np",
                        "email": "info@a1itinnovation.com.np",
                        "address": { "@type": "PostalAddress", "addressCountry": "NP" }
                    },
                    "occupationalCategory": "Software Development, Web Development, Mobile Development, DevOps, Artificial Intelligence, Machine Learning, Research",
                    "timeToComplete": "P2M",
                    "educationalProgramMode": "online",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "NPR",
                        "description": "Free — no fees charged to students"
                    },
                    "programPrerequisites": "Familiarity with and genuine interest in the relevant technology or framework",
                    "trainingSalary": {
                        "@type": "MonetaryAmountDistribution",
                        "currency": "NPR",
                        "median": 0,
                        "description": "Unpaid internship. Compensation possible if work goes to production."
                    }
                })}</script>

                {/* ── JSON-LD: FAQPage ── */}
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(({ q, a }) => ({
                        "@type": "Question",
                        "name": q,
                        "acceptedAnswer": { "@type": "Answer", "text": a }
                    }))
                })}</script>
            </Helmet>
            <Navigation />

            <main className="min-h-screen flex flex-col items-center">

                {/* ── Hero ── */}
                <section className="w-full flex flex-wrap items-center justify-center p-4 lg:justify-between max-w-7xl text-black mt-10 min-h-screen">
                    <div className="flex flex-col gap-8 max-w-lg text-center items-center lg:text-left">
                        <div>
                            <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full mb-4 animate-pulse">
                                🎓 Applications Open
                            </span>
                            <h1 className="text-2xl md:text-4xl font-bold">
                                Kickstart Your Career with Our Internship Programs
                            </h1>
                            <p className="text-xl md:text-2xl font-medium mt-2 text-gray-600">
                                Gain real-world experience, build industry skills, and grow with Nepal's innovative IT team.
                            </p>
                        </div>

                        {/* Domain badge strip */}
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                            {DOMAIN_OPTIONS.filter(d => d.value !== "Other").map((d) => (
                                <span key={d.value} className={`bg-gradient-to-r ${d.color} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm`}>
                                    {d.icon} {d.label}
                                </span>
                            ))}
                        </div>

                        <a href="#apply" className="w-fit bg-indigo-600 font-semibold text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg">
                            Apply for Internship ↓
                        </a>
                    </div>

                    <div className="mt-6 lg:mt-0">
                        <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg rounded-xl shadow-lg" aria-label="Internship illustration">
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

                {/* ── Domain Cards ── */}
                <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Internship at <span className="text-indigo-600">A1 IT Innovation</span>
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Students and fresh graduates — come learn from real engineers, work on real products, and build a career you're proud of.
                            </p>
                        </div>

                        {/* Domain highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
                            {DOMAIN_OPTIONS.filter(d => d.value !== "Other").map((d) => (
                                <div key={d.value} className={`bg-gradient-to-br ${d.color} rounded-xl p-5 text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default`}>
                                    <div className="text-4xl mb-3">{d.icon}</div>
                                    <h3 className="font-bold text-lg">{d.label}</h3>
                                    <p className="text-white/80 text-sm mt-1">
                                        {d.value === "Java Spring Boot" && "Build scalable backend systems"}
                                        {d.value === "DevOps" && "CI/CD, Docker, Cloud infra"}
                                        {d.value === "System Design" && "Design high-scale architectures"}
                                        {d.value === "React JS" && "Modern frontend development"}
                                        {d.value === "Flutter" && "Cross-platform mobile apps"}
                                        {d.value === "AI / ML" && "Models, data pipelines & intelligent systems"}
                                        {d.value === "Research" && "Explore, experiment & publish new ideas"}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Key Features */}
                        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-10">What You'll Get</h2>
                        <div className="flex flex-wrap gap-6 justify-center">
                            {features.map((item, index) => (
                                <div key={index} className="rounded-xl shadow-md bg-white p-6 flex flex-col gap-4 w-80 sm:w-72 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                    <div className="bg-indigo-100 text-indigo-600 w-14 h-14 flex items-center justify-center rounded-full text-3xl shadow-sm">
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

                {/* ── Technologies ── */}
                <section className="py-16 w-full bg-white">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h2 className="text-3xl font-semibold mb-4">Technologies You'll Work With</h2>
                        <p className="text-gray-500 leading-relaxed mb-10">
                            Gain hands-on exposure to the tech stack that powers modern products.
                        </p>
                        <ul className="list-none text-gray-700 leading-relaxed flex flex-wrap justify-center gap-6">
                            {technologies.map((tech, index) => (
                                <li key={index} className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors">
                                    <FaCheckCircle className="text-indigo-600 text-lg" />
                                    <span className="font-medium text-sm">{tech}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ── Policies & Rules ── */}
                <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                                📜 Internship Guidelines
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Policies &amp; Rules
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Everything you need to know before you start — clear, honest, and straightforward.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {policies.map((policy, i) => (
                                <div key={i} className={`rounded-xl border ${policy.color} p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300`}>
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">{policy.icon}</span>
                                        <h3 className={`text-lg font-bold ${policy.headerColor}`}>{policy.category}</h3>
                                    </div>
                                    <ul className="flex flex-col gap-2">
                                        {policy.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                                                <FaCheckCircle className="text-gray-400 mt-0.5 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="w-full py-20 bg-white" aria-labelledby="faq-heading">
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                                ❓ Common Questions
                            </span>
                            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-gray-500 text-lg">
                                Everything students ask before applying — answered honestly.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3" itemScope itemType="https://schema.org/FAQPage">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="border border-gray-200 rounded-xl overflow-hidden"
                                    itemScope
                                    itemProp="mainEntity"
                                    itemType="https://schema.org/Question"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                                        aria-expanded={openFaq === i}
                                    >
                                        <span className="font-semibold text-gray-800 text-sm md:text-base" itemProp="name">
                                            {faq.q}
                                        </span>
                                        <span className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border-2 border-indigo-300 text-indigo-600 transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>
                                            +
                                        </span>
                                    </button>
                                    {openFaq === i && (
                                        <div
                                            className="px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 bg-gray-50"
                                            itemScope
                                            itemProp="acceptedAnswer"
                                            itemType="https://schema.org/Answer"
                                        >
                                            <p className="pt-4" itemProp="text">{faq.a}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Application Form ── */}
                <section id="apply" className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-2xl mx-auto px-4">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                Apply for Internship
                            </h2>
                            <div className="w-20 h-1.5 bg-indigo-600 mx-auto mb-4 rounded-full"></div>
                            <p className="text-gray-500">Fill out the form below and we'll get back to you within a few days.</p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            {submitSuccess ? (
                                <div className="p-10 text-center">
                                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                                        <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Application Submitted! 🎉</h3>
                                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                        Thank you for applying! We've received your application and will review it carefully. We'll reach out within a few days.
                                    </p>
                                    <button
                                        onClick={() => setSubmitSuccess(false)}
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                                    >
                                        Submit Another Application
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="p-8 space-y-6" encType="multipart/form-data">

                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FiUser className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className={`block w-full pl-10 pr-3 py-3 border ${errors.fullName ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"} rounded-md placeholder-gray-400 focus:outline-none`}
                                                placeholder="Your full name..."
                                            />
                                        </div>
                                        {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FiMail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`block w-full pl-10 pr-3 py-3 border ${errors.email ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"} rounded-md placeholder-gray-400 focus:outline-none`}
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FiPhone className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`block w-full pl-10 pr-3 py-3 border ${errors.phone ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"} rounded-md placeholder-gray-400 focus:outline-none`}
                                                placeholder="+977 98XXXXXXXX"
                                            />
                                        </div>
                                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                                    </div>

                                    {/* College toggle */}
                                    <div>
                                        <label className="flex items-center gap-3 cursor-pointer select-none">
                                            <input
                                                type="checkbox"
                                                name="isCollegeStudent"
                                                checked={formData.isCollegeStudent}
                                                onChange={handleChange}
                                                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                            />
                                            <span className="text-sm font-medium text-gray-700">I am currently enrolled in a college / university</span>
                                        </label>

                                        {formData.isCollegeStudent && (
                                            <div className="mt-3">
                                                <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700 mb-1">
                                                    College / University Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="collegeName"
                                                    name="collegeName"
                                                    value={formData.collegeName}
                                                    onChange={handleChange}
                                                    className={`block w-full px-3 py-3 border ${errors.collegeName ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"} rounded-md placeholder-gray-400 focus:outline-none shadow-sm`}
                                                    placeholder="e.g. Tribhuvan University, Itahari International College..."
                                                />
                                                {errors.collegeName && <p className="mt-1 text-sm text-red-600">{errors.collegeName}</p>}
                                            </div>
                                        )}
                                    </div>

                                    {/* Designation / Domain */}
                                    <div>
                                        <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">
                                            Domain / Designation <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="designation"
                                            name="designation"
                                            value={formData.designation}
                                            onChange={handleChange}
                                            className={`block w-full pl-3 pr-10 py-3 border ${errors.designation ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"} rounded-md shadow-sm focus:outline-none`}
                                        >
                                            <option value="">— Select a domain —</option>
                                            {DOMAIN_OPTIONS.map((d) => (
                                                <option key={d.value} value={d.value}>
                                                    {d.icon} {d.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.designation && <p className="mt-1 text-sm text-red-600">{errors.designation}</p>}

                                        {/* Domain badge confirmation */}
                                        {selectedDomain && (
                                            <div className={`mt-2 inline-flex items-center gap-2 bg-gradient-to-r ${selectedDomain.color} text-white text-sm font-semibold px-3 py-1.5 rounded-full shadow-sm`}>
                                                {selectedDomain.icon} {selectedDomain.label} selected
                                            </div>
                                        )}
                                    </div>

                                    {/* Experience — shown only after domain is picked */}
                                    {formData.designation && (
                                        <div className="animate-fade-in">
                                            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                                                Experience / Familiarity with{" "}
                                                <span className="text-indigo-600 font-semibold">{formData.designation}</span>{" "}
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                id="experience"
                                                name="experience"
                                                rows="4"
                                                value={formData.experience}
                                                onChange={handleChange}
                                                className={`block w-full px-3 py-3 border ${errors.experience ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"} rounded-md placeholder-gray-400 focus:outline-none shadow-sm`}
                                                placeholder={`Tell us what you know about ${formData.designation} — any projects, courses, or self-learning...`}
                                            />
                                            {errors.experience && <p className="mt-1 text-sm text-red-600">{errors.experience}</p>}
                                        </div>
                                    )}

                                    {/* CV Upload */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Upload CV / Resume <span className="text-red-500">*</span>
                                        </label>
                                        <div
                                            className={`mt-1 flex justify-center px-6 pt-8 pb-8 border-2 ${errors.cv ? "border-red-300" : "border-gray-300"} border-dashed rounded-md cursor-pointer hover:border-indigo-400 transition-colors duration-200`}
                                            onDragOver={handleDragOver}
                                            onDrop={handleDrop}
                                            onClick={() => fileInputRef.current.click()}
                                        >
                                            <div className="space-y-3 text-center">
                                                {formData.cv ? (
                                                    <>
                                                        <FiFileText className="mx-auto h-10 w-10 text-indigo-600" />
                                                        <p className="text-sm text-indigo-600 font-medium">{formData.cv.name}</p>
                                                        <p className="text-xs text-gray-500">Click or drag to change file</p>
                                                    </>
                                                ) : (
                                                    <>
                                                        <FiUpload className="mx-auto h-10 w-10 text-gray-400" />
                                                        <div className="flex text-sm text-gray-600 justify-center">
                                                            <span className="font-medium text-indigo-600 cursor-pointer hover:text-indigo-500">Upload a file</span>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs text-gray-500">PDF up to 5MB</p>
                                                    </>
                                                )}
                                                <input
                                                    id="cv"
                                                    name="cv"
                                                    type="file"
                                                    ref={fileInputRef}
                                                    accept=".pdf"
                                                    onChange={handleChange}
                                                    className="sr-only"
                                                />
                                            </div>
                                        </div>
                                        {errors.cv && <p className="mt-1 text-sm text-red-600">{errors.cv}</p>}
                                    </div>

                                    {/* Submit error */}
                                    {errors.submit && (
                                        <div className="rounded-md bg-red-50 p-4">
                                            <div className="flex">
                                                <svg className="h-5 w-5 text-red-400 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                </svg>
                                                <p className="ml-3 text-sm text-red-800">{errors.submit}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white ${isSubmitting ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Submitting...
                                            </>
                                        ) : (
                                            "Submit Internship Application 🚀"
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
