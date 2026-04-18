import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function DevOps() {
    const features = [
        {
            title: "Server-Side Management & Infrastructure Automation",
            description: "Outsource your infrastructure and server operations to us. We handle cloud migration, system design, and managed DevOps services. Professional infrastructure setup and automation for AWS, Google Cloud Platform (GCP), Microsoft Azure, and Nepal-based providers.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-600">
                    <path d="M3 3h18v18H3z" />
                </svg>
            )
        },
        {
            title: "Data Security & Compliance Monitoring",
            description: "Protect your business with robust security practices including encryption, backups, and compliance-ready workflows. Real-time security monitoring, application error tracking, and log management solutions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-600">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
                </svg>
            )
        },
        {
            title: "Downtime Risk & Disaster Recovery Planning",
            description: "Ensure high availability with proactive monitoring, server uptime monitoring, and incident response strategies. 24/7 infrastructure support and disaster recovery planning for business continuity.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-600">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
                </svg>
            )
        },
        {
            title: "CI/CD Pipeline Setup & Kubernetes Deployment",
            description: "Automate deployments with CI/CD pipelines for faster, more reliable releases. Docker and Kubernetes deployment, microservices architecture design, and continuous integration strategies.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-600">
                    <path d="M10 8h4v8h-4z" />
                </svg>
            )
        }
    ];

    const services = [
        "DevOps Outsourcing Services",
        "CI/CD Pipeline Setup",
        "Kubernetes & Docker Deployment",
        "System Design Consulting",
        "Cloud Migration Services",
        "Microservices Architecture Design",
        "Server Monitoring & Alerting",
        "Application Performance Monitoring",
        "Remote Infrastructure Management",
        "Managed DevOps Services",
        "Infrastructure Setup & Automation",
        "Disaster Recovery Planning"
    ];

    const tools = [
        { name: "Kubernetes",  logo: "https://images.seeklogo.com/logo-png/27/1/kubernetes-logo-png_seeklogo-273594.png" },
        { name: "Docker",      logo: "https://cdn.simpleicons.org/docker" },
        { name: "ArgoCD",      logo: "https://cdn.simpleicons.org/argo" },
        { name: "Apache Kafka",logo: "https://cdn.simpleicons.org/apachekafka" },
        { name: "Grafana",     logo: "https://cdn.simpleicons.org/grafana" },
        { name: "GitLab",      logo: "https://cdn.simpleicons.org/gitlab" },
        { name: "Prometheus",  logo: "https://cdn.simpleicons.org/prometheus" },
        { name: "Loki",        logo: "https://grafana.com/media/docs/loki/logo-grafana-loki.png" },
        { name: "Terraform",   logo: "https://cdn.simpleicons.org/terraform" },
        { name: "Ansible",     logo: "https://cdn.simpleicons.org/ansible" },
        { name: "Jenkins",     logo: "https://cdn.simpleicons.org/jenkins" },
        { name: "Nginx",       logo: "https://cdn.simpleicons.org/nginx" },
    ];

    const hostingProviders = {
        nepal: ["LinkUp Nepal - Cloud hosting", "Bibsu Innovations (Bisup)", "Prabhu Host - AWS Partner", "Nest Nepal - Managed AWS"],
        global: ["AWS (Amazon Web Services)", "Google Cloud Platform (GCP)", "Microsoft Azure", "DigitalOcean", "Linode", "Vultr", "Contabo", "Hostinger"]
    };

    return (
        <div>
            <Helmet>
                <title>DevOps Outsourcing Nepal | Cloud Hosting & System Design Experts</title>
                <meta name="description" content="Professional DevOps outsourcing services in Nepal. CI/CD pipeline setup, Kubernetes deployment, server monitoring, and infrastructure automation. Managed DevOps services for AWS, GCP, Azure, and local Nepal hosting providers." />
                <meta name="keywords" content="DevOps services Nepal, DevOps outsourcing, CI/CD pipeline setup, Kubernetes deployment, cloud hosting Nepal, managed DevOps services, server management Nepal, infrastructure automation, system design consulting, disaster recovery planning, LinkUp Nepal, Bibsu Innovations, cloud migration, microservices architecture, AWS Nepal, Docker deployment, application monitoring" />
                <meta property="og:title" content="DevOps Outsourcing Nepal | System Design & Cloud Hosting Experts" />
                <meta property="og:description" content="Professional DevOps outsourcing and managed infrastructure services in Nepal. CI/CD pipelines, Kubernetes, server monitoring, and 24/7 support." />
                <meta property="og:url" content="https://www.a1itinnovation.com.np/services/devops" />
                <meta name="twitter:title" content="DevOps Services Nepal | CI/CD & Infrastructure Experts" />
                <meta name="twitter:description" content="DevOps outsourcing, cloud hosting, and managed services in Nepal" />
                <link rel="canonical" href="https://www.a1itinnovation.com.np/services/devops" />
            </Helmet>
            <Navigation />
            
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 max-w-7xl mx-auto gap-12 py-20">
                <div className="flex flex-col gap-8 max-w-2xl text-center lg:text-left">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Automate Your Infrastructure with <span className="text-indigo-600">Professional DevOps Services</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-medium text-gray-600">
                            CI/CD pipelines, Kubernetes deployment & managed cloud infrastructure — handled end-to-end by experts in Nepal.
                        </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="/contact"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center justify-center"
                        >
                            Get Started
                        </a>
                        <a
                            href="/works"
                            className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center justify-center"
                        >
                            View Our Work
                        </a>
                    </div>
                </div>
                <div className="mt-8 lg:mt-0">
                    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg rounded-xl shadow-lg" aria-label="DevOps CI/CD pipeline illustration">
                      <rect width="500" height="400" rx="16" fill="#F0F4FF"/>
                      <rect width="500" height="38" rx="16" fill="#1E293B"/>
                      <rect x="0" y="22" width="500" height="16" fill="#1E293B"/>
                      <circle cx="20" cy="19" r="6" fill="#EF4444"/><circle cx="38" cy="19" r="6" fill="#F59E0B"/><circle cx="56" cy="19" r="6" fill="#22C55E"/>
                      <text x="250" y="24" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#64748B">CI/CD Pipeline — Running</text>
                      <ellipse cx="250" cy="74" rx="72" ry="24" fill="#C7D2FE"/>
                      <ellipse cx="196" cy="84" rx="46" ry="22" fill="#C7D2FE"/>
                      <ellipse cx="304" cy="84" rx="46" ry="22" fill="#C7D2FE"/>
                      <rect x="156" y="84" width="188" height="22" fill="#C7D2FE"/>
                      <text x="250" y="100" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#3730A3">☁ Cloud Infrastructure</text>
                      <line x1="250" y1="106" x2="250" y2="130" stroke="#6366F1" strokeWidth="2" strokeDasharray="4 3"/>
                      <line x1="250" y1="130" x2="86" y2="140" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="4 3"/>
                      <line x1="250" y1="130" x2="414" y2="140" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="4 3"/>
                      <rect x="30" y="140" width="112" height="70" rx="10" fill="#4F46E5"/>
                      <rect x="42" y="152" width="88" height="28" rx="5" fill="#312E81"/>
                      <text x="86" y="165" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#A5B4FC">$ npm run build</text>
                      <text x="86" y="175" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#818CF8">✓ Compiled #312</text>
                      <text x="86" y="196" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="white">⚙ Build</text>
                      <path d="M144 175 L158 175" stroke="#94A3B8" strokeWidth="2"/><polygon points="156,171 164,175 156,179" fill="#94A3B8"/>
                      <rect x="166" y="140" width="168" height="70" rx="10" fill="#0369A1"/>
                      <rect x="178" y="152" width="144" height="28" rx="5" fill="#0C4A6E"/>
                      <text x="250" y="164" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#7DD3FC">✓ unit  ✓ integration</text>
                      <text x="250" y="174" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#7DD3FC">✓ security  ✓ coverage</text>
                      <text x="250" y="196" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="white">🧪 Test &amp; Validate</text>
                      <path d="M336 175 L350 175" stroke="#94A3B8" strokeWidth="2"/><polygon points="348,171 356,175 348,179" fill="#94A3B8"/>
                      <rect x="358" y="140" width="112" height="70" rx="10" fill="#059669"/>
                      <rect x="370" y="152" width="88" height="28" rx="5" fill="#065F46"/>
                      <circle cx="414" cy="166" r="11" fill="none" stroke="#6EE7B7" strokeWidth="2"/><circle cx="414" cy="166" r="3.5" fill="#6EE7B7"/>
                      <line x1="414" y1="155" x2="414" y2="160" stroke="#6EE7B7" strokeWidth="2"/><line x1="414" y1="172" x2="414" y2="177" stroke="#6EE7B7" strokeWidth="2"/>
                      <line x1="403" y1="166" x2="408" y2="166" stroke="#6EE7B7" strokeWidth="2"/><line x1="420" y1="166" x2="425" y2="166" stroke="#6EE7B7" strokeWidth="2"/>
                      <line x1="406" y1="158" x2="410" y2="162" stroke="#6EE7B7" strokeWidth="1.5"/><line x1="418" y1="170" x2="422" y2="174" stroke="#6EE7B7" strokeWidth="1.5"/>
                      <line x1="422" y1="158" x2="418" y2="162" stroke="#6EE7B7" strokeWidth="1.5"/><line x1="410" y1="170" x2="406" y2="174" stroke="#6EE7B7" strokeWidth="1.5"/>
                      <text x="414" y="196" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="700" fill="white">☸ Deploy</text>
                      <line x1="86" y1="210" x2="86" y2="248" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3"/>
                      <line x1="250" y1="210" x2="250" y2="248" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3"/>
                      <line x1="414" y1="210" x2="414" y2="248" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3"/>
                      <rect x="30" y="248" width="112" height="66" rx="8" fill="#1E293B"/>
                      <rect x="40" y="258" width="92" height="8" rx="3" fill="#22D3EE"/>
                      <rect x="40" y="270" width="68" height="3.5" rx="2" fill="#334155"/><rect x="40" y="278" width="52" height="3.5" rx="2" fill="#334155"/><rect x="40" y="286" width="60" height="3.5" rx="2" fill="#334155"/>
                      <circle cx="132" cy="302" r="6" fill="#22C55E"/><text x="52" y="303" fontFamily="monospace" fontSize="8" fill="#64748B">node-01</text>
                      <rect x="194" y="248" width="112" height="66" rx="8" fill="#1E293B"/>
                      <rect x="204" y="258" width="92" height="8" rx="3" fill="#818CF8"/>
                      <rect x="204" y="270" width="68" height="3.5" rx="2" fill="#334155"/><rect x="204" y="278" width="52" height="3.5" rx="2" fill="#334155"/><rect x="204" y="286" width="60" height="3.5" rx="2" fill="#334155"/>
                      <circle cx="296" cy="302" r="6" fill="#22C55E"/><text x="216" y="303" fontFamily="monospace" fontSize="8" fill="#64748B">node-02</text>
                      <rect x="358" y="248" width="112" height="66" rx="8" fill="#1E293B"/>
                      <rect x="368" y="258" width="92" height="8" rx="3" fill="#FB923C"/>
                      <rect x="368" y="270" width="68" height="3.5" rx="2" fill="#334155"/><rect x="368" y="278" width="52" height="3.5" rx="2" fill="#334155"/><rect x="368" y="286" width="60" height="3.5" rx="2" fill="#334155"/>
                      <circle cx="460" cy="302" r="6" fill="#22C55E"/><text x="380" y="303" fontFamily="monospace" fontSize="8" fill="#64748B">node-03</text>
                      <rect x="118" y="334" width="264" height="30" rx="15" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="1.5"/>
                      <circle cx="140" cy="349" r="7" fill="#16A34A"/>
                      <text x="252" y="354" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#15803D">All Systems Operational</text>
                    </svg>
                </div>
            </section>

            <main className="container mx-auto py-16 px-4">
                {/* Introduction Section */}
                <section className="mb-16">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Our DevOps & Managed Infrastructure Services?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We provide comprehensive DevOps outsourcing, cloud migration, and managed services. Whether you need CI/CD pipeline setup, Kubernetes deployment, server monitoring, or disaster recovery planning, our experts handle your entire infrastructure — from AWS and Google Cloud Platform to local Nepal hosting providers like LinkUp Nepal and Bibsu Innovations.
                        </p>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10">Our DevOps Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="p-6 border border-indigo-200 rounded-lg shadow-md hover:shadow-lg transition">
                                <div className="flex items-center justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                                <p className="text-gray-700 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* DevOps Toolset Marquee */}
                <section className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Our DevOps Toolset</h2>
                        <p className="text-gray-500 mt-2 text-base">Industry-standard tools we use to deliver robust, scalable infrastructure</p>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50 py-6">
                        <div className="devtools-track gap-6" style={{ display: "flex" }}>
                            {[...tools, ...tools].map((tool, i) => (
                                <div
                                    key={i}
                                    aria-hidden={i >= tools.length ? "true" : undefined}
                                    className="flex-shrink-0 flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl px-7 py-5 shadow-sm hover:shadow-md transition-shadow duration-200"
                                >
                                    <img
                                        src={tool.logo}
                                        alt={tool.name}
                                        width={52}
                                        height={52}
                                        className="object-contain"
                                        loading="lazy"
                                    />
                                    <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services List */}
                <section className="mb-16 bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-8 text-center">Complete DevOps & Infrastructure Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-white rounded border-l-4 border-indigo-600">
                                <svg className="w-6 h-6 text-indigo-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium text-gray-800">{service}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Hosting Providers Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Cloud Platforms & Hosting Providers We Support</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Nepal Providers */}
                        <div className="bg-indigo-50 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-6 text-indigo-900">Nepal-Based Hosting Providers</h3>
                            <ul className="space-y-4">
                                {hostingProviders.nepal.map((provider, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                                        <span className="text-gray-800">{provider}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-sm text-gray-700">Local infrastructure experts supporting Nepal-based businesses with dedicated support and competitive pricing.</p>
                        </div>

                        {/* Global Providers */}
                        <div className="bg-blue-50 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-6 text-blue-900">Global Cloud Platforms</h3>
                            <ul className="space-y-4">
                                {hostingProviders.global.map((provider, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                        <span className="text-gray-800">{provider}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-sm text-gray-700">Enterprise-grade infrastructure with global reach and reliability for mission-critical applications.</p>
                        </div>
                    </div>
                </section>

                {/* Technical Details Section */}
                <section className="mb-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-8">Advanced Infrastructure Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-indigo-300">Deployment & Automation</h3>
                            <ul className="space-y-3 text-gray-200">
                                <li>✓ Kubernetes & Docker deployment at scale</li>
                                <li>✓ CI/CD pipeline automation & optimization</li>
                                <li>✓ Infrastructure as Code (IaC) implementation</li>
                                <li>✓ Microservices architecture design</li>
                                <li>✓ Cloud migration planning & execution</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-indigo-300">Monitoring & Support</h3>
                            <ul className="space-y-3 text-gray-200">
                                <li>✓ 24/7 server uptime monitoring & alerts</li>
                                <li>✓ Real-time application performance monitoring</li>
                                <li>✓ Security monitoring & compliance checks</li>
                                <li>✓ Log management & error tracking</li>
                                <li>✓ Disaster recovery & backup solutions</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready for Professional DevOps Management?</h2>
                    <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                        Let our experts handle your infrastructure automation, CI/CD pipelines, and system design while you focus on your business.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-4 rounded-lg transition duration-300"
                    >
                        Schedule Consultation
                    </a>
                </section>
            </main>

            <Footer />
        </div>
    );
}
