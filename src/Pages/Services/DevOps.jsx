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
            <header className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-12">
                <div className="container mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">DevOps Outsourcing Services in Nepal</h1>
                    <p className="text-xl mb-2">Professional CI/CD Pipeline Setup, Kubernetes Deployment & System Design</p>
                    <p className="text-lg opacity-90">Hand over your infrastructure and server responsibilities to expert DevOps professionals</p>
                </div>
            </header>

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
