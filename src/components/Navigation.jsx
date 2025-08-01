import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoimage from "../assets/logo.png";

function Dropdown({ title, links, isOpen, toggle, isMobile = false }) {
  return (
    <div className="w-full">
      <button
        onClick={toggle}
        className="flex justify-between items-center w-full py-2 text-left font-medium text-gray-800 hover:text-indigo-600"
      >
        {title}
        <span className={`ml-2 transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <ul className={`${isMobile ? "pl-4" : "absolute bg-white shadow-md mt-1"} z-50`}>
          {links.map(({ href, label }) => (
            <li key={href} className="py-1">
              <a
                href={href}
                className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                onClick={() => isMobile && toggle()}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) =>
    setOpenDropdown(openDropdown === key ? null : key);

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

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
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3" onClick={closeAll}>
          <img src={logoimage} alt="Logo" className="w-10 h-10 rounded-full object-contain" />
          <span className="text-xl font-bold text-gray-900">A1 IT Innovation</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center font-medium text-gray-800 relative">
          <Dropdown
            title="Services"
            links={servicesLinks}
            isOpen={openDropdown === "services"}
            toggle={() => toggleDropdown("services")}
          />
          <a href="/clients" className="hover:text-indigo-600">Clients</a>
          <a href="/works" className="hover:text-indigo-600">Works</a>
          <Dropdown
            title="Company"
            links={companyLinks}
            isOpen={openDropdown === "company"}
            toggle={() => toggleDropdown("company")}
          />
          <a
            href="/contact"
            className="ml-4 block w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 whitespace-nowrap text-center"
          >
            Contact Us
          </a>


        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-2xl">
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-white shadow-md overflow-y-auto max-h-[80vh] space-y-2">
          <Dropdown
            title="Services"
            links={servicesLinks}
            isOpen={openDropdown === "services"}
            toggle={() => toggleDropdown("services")}
            isMobile
          />
          <a href="/clients" onClick={closeAll} className="block font-medium text-gray-800">
            Clients
          </a>
          <a href="/works" onClick={closeAll} className="block font-medium text-gray-800">
            Works
          </a>
          <Dropdown
            title="Company"
            links={companyLinks}
            isOpen={openDropdown === "company"}
            toggle={() => toggleDropdown("company")}
            isMobile
          />
          <a
            href="/contact"
            onClick={closeAll}
            className="inline-flex justify-center items-center mt-4 bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-200 whitespace-nowrap mx-auto"
          >
            Contact Us
          </a>


        </div>
      )}
    </nav>
  );
}
