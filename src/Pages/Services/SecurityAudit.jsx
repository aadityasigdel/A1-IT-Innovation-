import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SecurityAuditImg from "../../assets/ServicesImg/security-testing.svg";

export default function SecurityAudit() {
    const features = [
        {
            title: "Vulnerability Assessment",
            description: "Identify and mitigate potential vulnerabilities in your system before they can be exploited.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-600">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            title: "Compliance Checks",
            description: "Ensure your systems comply with industry standards and regulations to avoid legal and financial penalties.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-600">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            title: "Penetration Testing",
            description: "Simulate real-world attacks to test the effectiveness of your security measures and identify weaknesses.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-600">
                    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            title: "Risk Management",
            description: "Develop a comprehensive risk management strategy to protect your business from potential threats.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-600">
                    <path fillRule="evenodd" d="M11.484 2.17a.75.75 0 011.032 0 11.209 11.209 0 007.877 3.08.75.75 0 01.722.515 12.74 12.74 0 01.635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 01-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 01.722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM12 15a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75H12z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            title: "Continuous Monitoring",
            description: "Implement continuous monitoring solutions to detect and respond to security incidents in real-time.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-600">
                    <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                </svg>
            )
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Navigation />

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 max-w-7xl mx-auto gap-12">
                <div className="flex flex-col gap-8 max-w-2xl text-center lg:text-left">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Comprehensive <span className="text-indigo-600">Security Audits</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-medium text-gray-600">
                            We protect your business from vulnerabilities and cyber threats with expert security assessments.
                        </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                        <a
                            href="/contact"
                            className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center justify-center"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                <div className="mt-8 lg:mt-0">
                    <img
                        alt="Security audit and testing illustration"
                        loading="lazy"
                        width={500}
                        height={500}
                        decoding="async"
                        className="rounded-xl border-4 border-white transform transition duration-500"
                        src={SecurityAuditImg}
                    />
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Audit Services</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            At A1 IT Innovation, we offer comprehensive security audit services to ensure your systems are secure and resilient. Our experts meticulously analyze your infrastructure to identify vulnerabilities, provide actionable insights, and ensure compliance with industry standards. Our goal is to protect your data and systems from potential threats and breaches.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl shadow-md p-8 flex flex-col gap-4 hover:shadow-lg transition duration-300 hover:-translate-y-2 border border-gray-100"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}


                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Audit Methodology</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-indigo-600">1</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                            <p className="text-gray-600">Comprehensive system analysis and asset identification</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-indigo-600">2</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                            <p className="text-gray-600">Vulnerability scanning and penetration testing</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-indigo-600">3</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Reporting</h3>
                            <p className="text-gray-600">Detailed findings with risk prioritization</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-indigo-600">4</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Remediation</h3>
                            <p className="text-gray-600">Actionable recommendations and support</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}