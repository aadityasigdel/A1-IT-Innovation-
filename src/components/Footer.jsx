import logoImage from "../assets/logo.png";

const servicesLinks = [
  {
    href: "/services/mobile-dev", label: "Mobile App Development", svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2h10a2 2 0 012 2v18a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm5 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-5-4h10V6H7v12z" /></svg>
    )
  },
  {
    href: "/services/web-dev", label: "Website Development", svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4h20v16H2z" /></svg>
    )
  },
  {
    href: "/services/security-audit", label: "Security Audit", svg: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1l9 4v6c0 5-3.5 9-9 9s-9-4-9-9V5l9-4z" /></svg>
    )
  },
];

const companyLinks = [
  { href: "/company/about", label: "About Us" },
  { href: "/company/why-us", label: "Why A1 IT Innovation" },
  { href: "/company/faq", label: "FAQ" },
  { href: "/company/gallery", label: "Gallery" },
  { href: "/company/career", label: "Career" },
];

export default function Footer() {
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
            <a href="mailto:aoneitinnovation@gmail.com" className="flex items-center gap-2 hover:underline">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4h20v16H2z" /></svg>
              info@a1itinnovation.com.np
            </a>
            <a href="tel:+9779816032025" className="flex items-center gap-2 hover:underline">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.85.74a1 1 0 011 1v3.5a1 1 0 01-1 1C9.61 22 2 14.39 2 5.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.35.26 2.65.74 3.85a1 1 0 01-.21 1.11l-2.2 2.2z" /></svg>
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.7h2.3l-.3 3H14v7A10 10 0 0022 12z" />
              </svg>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4 1s-1.89.9-3.1 1.2a4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 2s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 3a2 2 0 110 4 2 2 0 010-4zm0 4h4v12H4zm6 0h4v2.5c.6-1 2-2.5 4-2.5 4 0 4.5 2.5 4.5 5.7V19h-4v-5c0-1.2 0-2.7-2-2.7-2 0-2.3 1.5-2.3 2.5V19h-4z" />
              </svg>
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
