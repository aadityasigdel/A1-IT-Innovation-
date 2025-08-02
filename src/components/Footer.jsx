import logoImage from "../assets/logo.png";

export default function Footer() {
  const servicesLinks = [
    { href: "/services/mobile-dev", label: "Mobile App Development" },
    { href: "/services/web-dev", label: "Website Development" },
    { href: "/services/security-audit", label: "Security Audit" },
    { href: "/services/domain-hosting", label: "Domain & Hosting" },
    { href: "/services/internship", label: "Workshop & Intern" },
  ];

  const companyLinks = [
    { href: "/company/about", label: "About Us" },
    { href: "/company/why-us", label: "Why A1 IT Innovation" },
    { href: "/company/faq", label: "FAQ" },
    { href: "/company/gallery", label: "Gallery" },
    { href: "/company/career", label: "Career" },
  ];

  return (
    <footer className="bg-indigo-100 text-black py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img
            src={logoImage}
            alt="A1 IT Innovation"
            className="w-52 h-auto object-contain mb-4"
          />

        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {servicesLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="text-gray-700 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {companyLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="text-gray-700 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            <a
              href="mailto:aoneitinnovation@gmail.com"
              className="flex items-center gap-2 hover:underline"
            >
              <i className="fas fa-envelope"></i>
              info@a1itinnovation.com.np
            </a>
            <a
              href="tel:+9779816032025"
              className="flex items-center gap-2 hover:underline"
            >
              <i className="fas fa-phone"></i>
              9816032025
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="https://www.facebook.com/profile.php?id=61557621773133"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t pt-4 border-gray-300">
        <p className="text-center text-sm text-gray-700">
          © 2023 - 2025 A1 IT Innovation Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
