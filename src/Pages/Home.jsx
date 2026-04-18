import { Helmet } from "react-helmet";
import CircleImg from "../assets/circle.png";
import HeroImg from "../assets/hero.png";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const services = [
  {
    title: "Web Development",
    description:
      "We build fast, SEO-optimized, and responsive websites that grow your business presence all over Nepal — from startups to enterprises.",
    icon: (
      <svg
        className="text-blue-500"
        height="50"
        width="50"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12 18L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 12L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M3.5 7L6.5 10L3.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.5 7L17.5 10L20.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    link: "/services/web-dev",
    shortLinkText: "Web Dev",
  },
  {
    title: "Mobile App Development",
    description:
      "Professional Android and iOS app development services in Nepal — turning ideas into high-performing mobile experiences.",
    icon: (
      <svg
        className="text-green-500"
        height="50"
        width="50"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 18H12.01M9 20H15C16.1046 20 17 19.1046 17 18V6C17 4.89543 16.1046 4 15 4H9C7.89543 4 7 4.89543 7 6V18C7 19.1046 7.89543 20 9 20Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    link: "/services/mobile-dev",
    shortLinkText: "Mobile Apps",
  },
  {
    title: "Internships",
    description:
      "Gain hands-on IT experience with our internship programs in web development, app development, and AI training across Nepal.",
    icon: (
      <svg
        className="text-red-500"
        height="50"
        width="50"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21M19 21L21 21M19 21H14M5 21L3 21M5 21H10M9 6.99998H10M9 11H10M14 6.99998H15M14 11H15M10 21V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V21M10 21H14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    link: "/services/internship",
    shortLinkText: "Internships",
  },
  {
    title: "Security Audit",
    description:
      "Comprehensive website and app security audit service in Nepal. We detect vulnerabilities and strengthen your system protection.",
    icon: (
      <svg
        className="text-yellow-500"
        height="50"
        width="50"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 15V17M6.447 3.93L4.453 5.922C3.726 6.649 3.362 7.017 3.152 7.449C2.942 7.88 2.884 8.36 2.768 9.32L2.146 14.824C2.054 15.584 2.008 15.964 2.153 16.27C2.298 16.576 2.603 16.751 3.212 17.1L8.272 20.052C8.674 20.287 8.875 20.404 9.092 20.454C9.31 20.504 9.534 20.486 9.982 20.45L14.044 20.106C14.438 20.074 14.635 20.058 14.809 19.991C14.984 19.925 15.137 19.812 15.25 19.665L19.367 14.524C19.764 14.024 19.963 13.774 20.023 13.508C20.083 13.241 20.002 12.971 19.84 12.432L18.139 6.524C17.974 5.974 17.892 5.699 17.718 5.49C17.544 5.28 17.305 5.162 16.828 4.925L12.703 2.782C12.298 2.581 12.095 2.48 11.885 2.433C11.675 2.386 11.458 2.393 11.024 2.407L6.555 2.5C6.097 2.515 5.868 2.522 5.689 2.6C5.51 2.677 5.37 2.817 5.089 3.096L4.309 3.876"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    link: "/services/security-audit",
    shortLinkText: "Security Audit",
  },
  {
    title: "Domain & Hosting",
    description:
      "Reliable and affordable domain registration and web hosting services across Nepal. Fast, secure, and scalable servers.",
    icon: (
      <svg
        className="text-purple-500"
        height="50"
        width="50"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M3 10H21M7 15H8M12 15H13M12 3V4M12 20V21M19 4L18 5M5 19L6 18M18 19L19 18M6 5L5 6M3 14C3 15.1819 3.23279 16.3522 3.68508 17.4442C4.13738 18.5361 4.80031 19.5282 5.63604 20.364C6.47177 21.1997 7.46392 21.8626 8.55585 22.3149C9.64778 22.7672 10.8181 23 12 23C13.1819 23 14.3522 22.7672 15.4442 22.3149C16.5361 21.8626 17.5282 21.1997 18.364 20.364C19.1997 19.5282 19.8626 18.5361 20.3149 17.4442C20.7672 16.3522 21 15.1819 21 14C21 12.8181 20.7672 11.6478 20.3149 10.5558C19.8626 9.46392 19.1997 8.47177 18.364 7.63604C17.5282 6.80031 16.5361 6.13738 15.4442 5.68508C14.3522 5.23279 13.1819 5 12 5C10.8181 5 9.64778 5.23279 8.55585 5.68508C7.46392 6.13738 6.47177 6.80031 5.63604 7.63604C4.80031 8.47177 4.13738 9.46392 3.68508 10.5558C3.23279 11.6478 3 12.8181 3 14Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    link: "/services/domain-hosting",
    shortLinkText: "Domain & Hosting",
  },
  {
    title: "DevOps as a Service",
    description:
      "Professional DevOps outsourcing, CI/CD pipeline setup, Kubernetes deployment, and managed cloud infrastructure services across Nepal.",
    icon: (
      <svg
        className="text-orange-500"
        height="50"
        width="50"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 3.46482C17.4018 4.16 18.6309 5.17749 19.5812 6.4246C20.5315 7.67171 21.1742 9.12558 21.4558 10.6658"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 8V12L15 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    link: "/services/devops",
    shortLinkText: "DevOps",
  },
];

const stats = [
  { value: "19+", label: "Projects Completed" },
  { value: "8+", label: "Team Members" },
  { value: "7+", label: "Clients" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>
          A1 IT Innovation Nepal — Web, App, AI & Software Company in Nepal | IT Services Damak, Jhapa & Kathmandu
        </title>
        <meta
          name="description"
          content="A1 IT Innovation is Nepal’s trusted IT company offering website development, app development, AI solutions, software training, and IT internships across Nepal."
        />
        <meta
          name="keywords"
          content="A1 IT Innovation Nepal, IT company Nepal, web development Damak, software company Jhapa, app development Kathmandu, AI company Nepal, chatbot developer, internship Nepal, hosting services Nepal"
        />
        <link rel="canonical" href="https://a1itinnovation.com" />

        {/* Open Graph */}
        <meta property="og:title" content="A1 IT Innovation Nepal — Complete IT Solutions Across Nepal" />
        <meta
          property="og:description"
          content="Leading IT company in Nepal for web, mobile app, and AI development. Based in Damak, Jhapa & Kathmandu."
        />
        <meta property="og:image" content="https://a1itinnovation.com/assets/hero.png" />
        <meta property="og:url" content="https://a1itinnovation.com" />
        <meta property="og:type" content="website" />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "A1 IT Innovation Nepal",
              "url": "https://a1itinnovation.com",
              "logo": "https://a1itinnovation.com/logo.png",
              "description":
                "A1 IT Innovation is a full-service IT company in Nepal specializing in software, web, app, and AI development.",
              "sameAs": [
                "https://www.facebook.com/a1itinnovation",
                "https://www.instagram.com/a1itinnovation",
                "https://www.linkedin.com/company/a1-it-innovation"
              ],
            }),
          }}
        />
      </Helmet>

      <Navigation />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="flex py-12 md:py-20 min-h-screen items-center justify-center bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                  Nepal’s Trusted{" "}
                  <span className="text-indigo-600 block md:inline">IT Company <span className="rocket-fly">🚀</span></span>
                </h1>
                <p className="text-lg text-gray-600 mt-6 max-w-lg">
                  A1 IT Innovation is empowering digital Nepal with web development, app creation, AI automation, and IT training programs across Damak, Jhapa, Kathmandu, and beyond.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                  <a
                    href="/company/why-us"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300 text-center"
                  >
                    Why Choose A1 IT Innovation?
                  </a>
                  <a
                    href="/company/about"
                    className="bg-white hover:bg-gray-50 border border-gray-200 px-6 py-3 rounded-lg shadow-md transition-colors duration-300 text-center"
                    aria-label="Learn more about A1 IT Innovation company"
                  >
                    Learn About Us
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={HeroImg}
                  alt="A1 IT Innovation - Software and IT solutions in Nepal"
                  className="mx-auto max-w-md rounded-lg"
                  width={768}
                  height={432}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 bg-gray-50" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services Across Nepal
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer complete IT solutions — from web and app development to cloud hosting and AI automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6 flex flex-col items-center text-center h-full">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                    <a
                      href={service.link}
                      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
                      aria-label={`Learn more about ${service.title} service`}
                    >
                      {service.shortLinkText}
                      <svg
                        aria-hidden="true"
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="py-16 bg-indigo-900 text-white" aria-labelledby="about-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6">
                  About A1 IT Innovation
                </h2>
                <p className="text-lg text-indigo-100 mb-8">
                  Founded in 2023, A1 IT Innovation is a leading IT company in Nepal offering full-stack software, AI, and web services. We focus on scalable, secure, and affordable IT solutions that help Nepalese businesses go digital.
                </p>
                <a
                  href="/company/about"
                  className="inline-block text-indigo-200 hover:text-white font-medium underline underline-offset-4 transition-colors duration-300 mb-8"
                  aria-label="Learn more about A1 IT Innovation company"
                >
                  Learn More About Us
                </a>

                <div className="flex flex-wrap gap-8 mt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-4xl font-bold mb-1">{stat.value}</p>
                      <p className="text-indigo-200 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 mt-10 lg:mt-0">
                <img
                  src={CircleImg}
                  alt="A1 IT Innovation company statistics"
                  className="mx-auto max-w-md rounded-lg"
                  width={250}
                  height={250}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
