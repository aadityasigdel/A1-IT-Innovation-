import logoImage from "../assets/logo.png";

const servicesLinks = [
  {
    href: "/services/mobile-dev",
    label: "Mobile App Development",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2h10a2 2 0 012 2v18a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm5 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-5-4h10V6H7v12z" />
      </svg>
    )
  },
  {
    href: "/services/web-dev",
    label: "Website Development",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 4h20v16H2z" />
      </svg>
    )
  },
  {
    href: "/services/security-audit",
    label: "Security Audit",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 1l9 4v6c0 5-3.5 9-9 9s-9-4-9-9V5l9-4z" />
      </svg>
    )
  },
  {
    href: "/services/domain-hosting",
    label: "Domain & Hosting",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM4 12h16M12 4v16" />
      </svg>
    )
  },
  {
    href: "/services/internship",
    label: "Internship Program",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 7h12v10H6z" />
      </svg>
    )
  },
  {
    href: "/services/workshop",
    label: "Technical Workshop",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l9 6-9 6-9-6 9-6zM3 13v6h18v-6" />
      </svg>
    )
  },
  {
    href: "/services/devops",
    label: "DevOps as a Service",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a3 3 0 100 6 3 3 0 000-6zm0 10a5 5 0 100-10 5 5 0 000 10z" />
      </svg>
    )
  },
];

const companyLinks = [
  {
    href: "/company/about",
    label: "About Us",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z" />
      </svg>
    )
  },
  {
    href: "/company/why-us",
    label: "Why A1 IT Innovation",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
      </svg>
    )
  },
  {
    href: "/company/faq",
    label: "FAQ",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 00-9.95 9H2l1.7 1.7A8.98 8.98 0 002 12a10 10 0 1010-10zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    )
  },
  {
    href: "/company/gallery",
    label: "Gallery",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 5v14H3V5h18zm-2 2H5v10h14V7z" />
      </svg>
    )
  },
  {
    href: "/company/career",
    label: "Career",
    svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 6V4a2 2 0 00-2-2H10a2 2 0 00-2 2v2H3v14h18V6h-5zm-6-2h4v2h-4V4z" />
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer className="bg-indigo-100 text-black py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
        {/* Logo */}
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
                <a href={link.href} className="text-gray-700 hover:underline flex items-center gap-2">
                  {link.svg}
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
                <a href={link.href} className="text-gray-700 hover:underline flex items-center gap-2">
                  {link.svg}
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
            <a href="mailto:info@a1itinnovation.com.np" className="flex items-center gap-2 hover:underline">
              📧 info@a1itinnovation.com.np
            </a>
            <a href="tel:+9779816032025" className="flex items-center gap-2 hover:underline">
              📞 +977 9816032025
            </a>
            <a href="/company/policy" className="hover:underline">Company Policy</a>
            <a href="/company/terms" className="hover:underline">Terms and Conditions</a>
            <a
              href="https://maps.google.com/?q=A1+IT+Innovation+Damak"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-2"
            >
              📍 View on Google Maps
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://www.facebook.com/profile.php?id=61557621773133" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">📘</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">🐦</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">💼</a>
          </div>
        </div>

        {/* Multi-Office Section */}
        <div className="max-w-sm text-sm text-gray-700">
          <h3 className="text-lg font-semibold text-gray-800">Our Offices</h3>
          <div className="mt-2 not-italic text-gray-700 space-y-4">
            <address>
              <strong>Damak Head Office</strong><br />
              A One IT Innovation Pvt. Ltd.<br />
              A1 IT Innovation<br />
              Damak-8, Jhapa, Nepal
            </address>

            <address>
              <strong>Kathmandu Office</strong><br />
              Kageshwori Manohara, Kathmandu, Nepal
            </address>

            <address>
              <strong>Bhaktapur Office</strong><br />
              Duwakot, Changunarayan, Bhaktapur, Nepal
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t pt-4 border-gray-300">
        <p className="text-center text-sm text-gray-700">
          © 2018 - 2025 A1 IT Innovation — Officially registered as A. One .IT Innovation Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
}
