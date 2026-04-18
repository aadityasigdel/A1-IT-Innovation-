import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function DomainHosting() {
    const features = [
        {
            title: "Easy Domain Management",
            description: "Manage your domains with ease using our user-friendly control panel.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-600">
                    <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            title: "Reliable Hosting",
            description: "Our hosting solutions ensure your website is always up and running with minimal downtime.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-10 h-10 text-indigo-600">
                    <path d="M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z" />
                </svg>
            )
        },
        {
            title: "High Performance",
            description: "Enjoy fast loading times and optimal performance with our advanced hosting infrastructure.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-600">
                    <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            title: "Top-notch Security",
            description: "We provide robust security measures to protect your website from threats.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-600">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            title: "Scalable Solutions",
            description: "Our hosting services are scalable to meet the growing needs of your business.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-10 h-10 text-indigo-600">
                    <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z" />
                </svg>
            )
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Helmet>
                <title>Domain & Hosting Services in Nepal | A1 IT Innovation</title>
                <meta name="description" content="Affordable domain registration and reliable web hosting services in Nepal. Secure, fast, and professional hosting solutions for your website." />
                <meta name="keywords" content="domain hosting Nepal, web hosting, domain registration, reliable hosting, website hosting" />
                <meta property="og:title" content="Domain & Hosting Services | A1 IT Innovation" />
                <meta property="og:description" content="Professional domain registration and web hosting services" />
                <meta property="og:url" content="https://www.a1itinnovation.com.np/services/domain-hosting" />
                <meta name="twitter:title" content="Domain & Hosting | A1 IT Innovation" />
                <meta name="twitter:description" content="Web hosting and domain registration in Nepal" />
                <link rel="canonical" href="https://www.a1itinnovation.com.np/services/domain-hosting" />
            </Helmet>
            <Navigation />

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 max-w-7xl mx-auto gap-12">
                <div className="flex flex-col gap-8 max-w-2xl text-center lg:text-left">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Secure and Reliable <span className="text-indigo-600">Domain & Hosting</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-medium text-gray-600">
                            We provide the infrastructure and support to keep your online presence robust and accessible.
                        </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="/contact"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 inline-flex items-center justify-center"
                        >
                            Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a
                            href="#features"
                            className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center justify-center"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="mt-8 lg:mt-0">
                    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg rounded-xl shadow-lg" aria-label="Domain and hosting illustration">
                      <rect width="500" height="400" rx="16" fill="#FAF5FF"/>
                      <circle cx="250" cy="160" r="100" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="2"/>
                      <ellipse cx="250" cy="160" rx="45" ry="100" fill="none" stroke="#8B5CF6" strokeWidth="1.5"/>
                      <ellipse cx="250" cy="160" rx="80" ry="100" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.5"/>
                      <line x1="150" y1="160" x2="350" y2="160" stroke="#8B5CF6" strokeWidth="1.5"/>
                      <line x1="163" y1="120" x2="337" y2="120" stroke="#8B5CF6" strokeWidth="1" opacity="0.5"/>
                      <line x1="163" y1="200" x2="337" y2="200" stroke="#8B5CF6" strokeWidth="1" opacity="0.5"/>
                      <line x1="250" y1="60" x2="250" y2="260" stroke="#8B5CF6" strokeWidth="1.5"/>
                      <rect x="188" y="148" width="124" height="24" rx="6" fill="#7C3AED"/>
                      <text x="250" y="164" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="600" fill="white">a1itinnovation.com.np</text>
                      <rect x="24" y="80" width="90" height="160" rx="10" fill="#1E293B"/>
                      <rect x="34" y="94" width="70" height="16" rx="4" fill="#334155"/><rect x="38" y="98" width="20" height="8" rx="2" fill="#22D3EE"/><circle cx="92" cy="102" r="4" fill="#22C55E"/>
                      <rect x="34" y="118" width="70" height="16" rx="4" fill="#334155"/><rect x="38" y="122" width="20" height="8" rx="2" fill="#818CF8"/><circle cx="92" cy="126" r="4" fill="#22C55E"/>
                      <rect x="34" y="142" width="70" height="16" rx="4" fill="#334155"/><rect x="38" y="146" width="20" height="8" rx="2" fill="#FB923C"/><circle cx="92" cy="150" r="4" fill="#FBBF24"/>
                      <rect x="34" y="166" width="70" height="16" rx="4" fill="#334155"/><rect x="38" y="170" width="20" height="8" rx="2" fill="#22D3EE"/><circle cx="92" cy="174" r="4" fill="#22C55E"/>
                      <text x="69" y="215" textAnchor="middle" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="#94A3B8">Server</text>
                      <text x="69" y="227" textAnchor="middle" fontFamily="system-ui" fontSize="9" fill="#64748B">Rack</text>
                      <path d="M114 160 L148 160" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 3"/>
                      <polygon points="146,156 154,160 146,164" fill="#8B5CF6"/>
                      <ellipse cx="406" cy="128" rx="56" ry="20" fill="#DDD6FE"/>
                      <ellipse cx="372" cy="138" rx="34" ry="18" fill="#DDD6FE"/>
                      <ellipse cx="440" cy="138" rx="34" ry="18" fill="#DDD6FE"/>
                      <rect x="342" y="138" width="128" height="18" fill="#DDD6FE"/>
                      <text x="406" y="152" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#5B21B6">☁ CDN</text>
                      <path d="M352 148 L350 148" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 3"/>
                      <polygon points="354,144 346,148 354,152" fill="#8B5CF6"/>
                      <rect x="55" y="290" width="150" height="48" rx="10" fill="#7C3AED"/>
                      <text x="130" y="309" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="white">DNS Management</text>
                      <text x="130" y="325" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#DDD6FE">A • CNAME • MX • TXT</text>
                      <rect x="295" y="290" width="150" height="48" rx="10" fill="#059669"/>
                      <text x="370" y="309" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="white">SSL Certificate</text>
                      <text x="370" y="325" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#A7F3D0">🔒 HTTPS Secured</text>
                      <text x="250" y="282" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#6D28D9">Hosting Platform</text>
                    </svg>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Domain & Hosting Services</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A1 IT Innovation offers comprehensive domain registration and hosting solutions tailored to meet your business needs. Our services ensure your website is always secure, fast, and reliable. With our expert team, you can rest assured that your online presence is in good hands.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl shadow-md p-8 flex flex-col gap-4 hover:shadow-lg transition duration-300 hover:-translate-y-2 border border-gray-100"
                            >
                                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}

                        {/* Additional CTA Card */}
                        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl shadow-md p-8 flex flex-col gap-6 justify-center items-center text-center">
                            <h3 className="text-xl font-semibold text-white">Ready to Get Started?</h3>
                            <p className="text-indigo-100">Choose the perfect hosting solution for your business needs.</p>
                            <a
                                href="/contact"
                                className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 inline-flex items-center"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}