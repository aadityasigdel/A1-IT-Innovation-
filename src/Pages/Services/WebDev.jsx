import { Helmet } from "react-helmet";
import WebImg from "../../assets/ServicesImg/software-dev.png";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function WebDev() {
  const services = [
    "Responsive Web Design",
    "Single Page Applications (SPA)",
    "Progressive Web Apps (PWA)",
    "E-commerce Solutions",
    "Custom Web Development",
    "Web Performance Optimization"
  ];

  const features = [
    {
      title: "Modern Stack Technology",
      description: "We use the latest technologies like React, Next.js, and Node.js to build fast, scalable web applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-600">
          <path d="M12 2l-5.5 9h11z M3.21 15.89A5.56 5.56 0 0112 21.5a5.56 5.56 0 018.79-5.61M2 12h20" />
        </svg>
      )
    },
    {
      title: "SEO Optimized",
      description: "All our websites are built with SEO best practices to ensure high visibility in search engines.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-600">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm3.5-9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      )
    },
    {
      title: "Mobile Responsive",
      description: "Every website we build looks perfect on all devices - desktop, tablet, and mobile.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-600">
          <path d="M7 2h10a2 2 0 012 2v18a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm5 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-5-4h10V6H7v12z" />
        </svg>
      )
    },
    {
      title: "Fast Performance",
      description: "We optimize for speed and performance to ensure your website loads quickly and ranks well.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-indigo-600">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const technologies = [
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js & Express",
    "MongoDB & PostgreSQL",
    "AWS & Firebase"
  ];

  return (
    <>
      <Helmet>
        <title>Web Development Services | Nepal | A1 IT Innovation</title>
        <meta name="description" content="Professional web development services in Nepal. Custom websites, e-commerce solutions, and web apps built with modern technologies like React, Next.js, and Node.js." />
        <meta name="keywords" content="web development Nepal, website design, web development company, custom web solutions, React development, web design Nepal" />
        <meta property="og:title" content="Web Development Services | A1 IT Innovation" />
        <meta property="og:description" content="Expert web development services - building fast, SEO-optimized websites for businesses in Nepal" />
        <meta property="og:url" content="https://www.a1itinnovation.com.np/services/web-dev" />
        <meta name="twitter:title" content="Web Development | A1 IT Innovation" />
        <meta name="twitter:description" content="Professional web development and design in Nepal" />
        <link rel="canonical" href="https://www.a1itinnovation.com.np/services/web-dev" />
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 max-w-7xl mx-auto gap-12 py-20">
        <div className="flex flex-col gap-8 max-w-2xl text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Build Your Digital Presence with <span className="text-indigo-600">Professional Web Development</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600">
              We create fast, SEO-optimized, and responsive websites that help your business grow online.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center justify-center"
            >
              Start Your Project
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
          <img
            alt="Web development illustration"
            loading="lazy"
            width={500}
            height={400}
            decoding="async"
            className="rounded-xl shadow-lg"
            src={WebImg}
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Web Development Expertise</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with creative design to deliver web solutions that drive business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-4 hover:shadow-lg transition duration-300"
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

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Web Solutions We Offer</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition duration-300"
              >
                <svg className="w-8 h-8 text-indigo-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-lg font-medium text-gray-800">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Tech Stack We Use</h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full mb-12"></div>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            We use modern, proven technologies to build scalable and maintainable web applications.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 hover:bg-opacity-20 transition duration-300"
              >
                <p className="font-semibold text-lg">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Build Your Website?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's transform your ideas into a powerful web presence. Contact us today for a free consultation.
          </p>
          <a
            href="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg transition duration-300 inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
