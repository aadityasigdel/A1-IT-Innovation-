import { useEffect, useRef, useState } from "react";
import logoimage from "../assets/logo.png";

// DROPDOWN COMPONENT
function Dropdown({ title, links, isMobile = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`w-full ${isMobile ? "" : "relative"}`}
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-2 text-left font-medium text-gray-800 hover:text-indigo-600"
      >
        {title}
        <span className="ml-2">▼</span>
      </button>

      {/* Dropdown Menu */}
      <ul
        className={`
          ${isOpen ? "block" : "hidden"}
          ${isMobile ? "pl-4" : "absolute bg-white mt-1 shadow-md w-52 rounded"}
          z-50
        `}
      >
        {links.map(({ href, label }) => (
          <li key={href} className="py-1">
            <a
              href={href}
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
              onClick={() => isMobile && setIsOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// NAVIGATION bar
export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const servicesLinks = [
    { href: "/services/mobile-dev", label: "📱 Mobile App Development" },
    { href: "/services/web-dev", label: "💻 Web Development" },
    { href: "/services/security-audit", label: "🛡️ Security Audit" },
    { href: "/services/domain-hosting", label: "🌐 Domain & Hosting" },
    { href: "/services/internship", label: "🧑‍💼 Internship Program" },
    { href: "/services/workshop", label: "🎓 Technical Workshop" },
  ];


  const companyLinks = [
    { href: "/company/about", label: "🏢 About Us" },
    { href: "/company/why-us", label: "❓ Why A1 IT Innovation" },
    { href: "/company/faq", label: "📖 FAQ" },
    { href: "/company/gallery", label: "🖼️ Gallery" },
    { href: "/company/career", label: "🚀 Career" },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <img src={logoimage} alt="Logo" className="w-10 h-10 rounded-full object-contain" />
          <span className="text-xl font-bold text-gray-900">A1 IT Innovation</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center font-medium text-gray-800 relative">
          <Dropdown title="Services" links={servicesLinks} />
          <a href="/clients" className="hover:text-indigo-600">Clients</a>
          <a href="/works" className="hover:text-indigo-600">Works</a>
          <Dropdown title="Company" links={companyLinks} />

          <div className="flex gap-3 items-center ml-2">
            <a
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2 rounded-md transition duration-200 whitespace-nowrap"
            >
              Contact Us
            </a>
            <a
              href="/register"
              className="bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium px-5 py-2 rounded-md transition duration-200 whitespace-nowrap"
            >
              Sign Up
            </a>



          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-2xl">
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (

        <div
          className={`fixed inset-0 z-50 flex justify-end transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          ></div>

          {/* Sliding Menu Panel */}
          <div className="relative h-full w-full sm:w-80 bg-white shadow-lg p-6 overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-end ">
              <button
                onClick={closeMobileMenu}
                className="mb-6 text-2xl text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>


            {/* Navigation Links */}
            <Dropdown title="Services" links={servicesLinks} isMobile />
            <a href="/clients" onClick={closeMobileMenu} className="block font-medium text-gray-800 py-2">Clients</a>
            <a href="/works" onClick={closeMobileMenu} className="block font-medium text-gray-800 py-2">Works</a>
            <Dropdown title="Company" links={companyLinks} isMobile />

            <div className="mt-6 flex flex-col gap-4  ">
              <a
                href="/contact"
                onClick={closeMobileMenu}
                className="w-full text-center bg-indigo-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-indigo-700 transition"
              >
                Contact Us
              </a>
              <a
                href="/register"
                onClick={closeMobileMenu}
                className="w-full text-center bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-md text-base font-medium  transition"
              >
                Sign Up
              </a>

            </div>

            <div className="flex gap-4 mt-4 text-xl justify-center items-end">
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


      )}
    </nav>
  );
}
