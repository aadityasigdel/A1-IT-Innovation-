import logoimage from "../assets/logo.png";
import { useState, useRef, useEffect } from "react";

function Dropdown({ title, links, isOpen, onOpen, onClose }) {
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <li
      className="relative"
      ref={dropdownRef}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={(e) => {
        // Only close if focus moves outside the entire dropdown
        if (!e.currentTarget.contains(e.relatedTarget)) {
          onClose();
        }
      }}
      onKeyDown={handleKeyDown}
    >
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="flex items-center gap-1 font-medium text-gray-800 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded px-2 py-1"
        onClick={isOpen ? onClose : onOpen}
        type="button"
      >
        {title} 
        <span className={`text-xs select-none transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      <ul
        className={`absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg w-56 z-50
          transition-all duration-200 ease-in-out origin-top-left
          ${isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}
        `}
        role="menu"
      >
        {links.map(({ href, label }) => (
          <li key={href} role="none">
            <a
              href={href}
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 focus:bg-indigo-50 focus:outline-none transition-colors"
              onClick={onClose}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState(null); 
  const navRef = useRef(null);

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

  // Close dropdown when clicking on nav items
  const handleNavItemClick = () => {
    setOpenDropdown(null);
  };

  // Close dropdown when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav 
      ref={navRef}
      className="h-[80px] w-full flex items-center justify-between px-6 bg-white shadow-md sticky top-0 z-40" 
      role="navigation" 
      aria-label="Main Navigation"
    >
      {/* Brand */}
      <a 
        href="/" 
        className="flex items-center gap-3" 
        aria-label="Homepage"
        onClick={handleNavItemClick}
      >
        <img
          src={logoimage}
          alt="A1 IT Innovation Logo"
          className="w-10 h-10 object-contain rounded-full"
          loading="lazy"
        />
        <span className="font-bold text-xl text-gray-900 select-none">A1 IT Innovation</span>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 font-medium text-gray-800">
        <Dropdown
          title="Services"
          links={servicesLinks}
          isOpen={openDropdown === "services"}
          onOpen={() => setOpenDropdown("services")}
          onClose={() => setOpenDropdown(null)}
        />
        <li>
          <a 
            href="/clients" 
            className="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded px-2 py-1"
            onClick={handleNavItemClick}
          >
            Clients
          </a>
        </li>
        <li>
          <a 
            href="/works" 
            className="hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded px-2 py-1"
            onClick={handleNavItemClick}
          >
            Works
          </a>
        </li>
        <Dropdown
          title="Company"
          links={companyLinks}
          isOpen={openDropdown === "company"}
          onOpen={() => setOpenDropdown("company")}
          onClose={() => setOpenDropdown(null)}
        />
      </ul>

      {/* Contact Button */}
      <div className="hidden md:block">
        <a
          href="/contact"
          className="bg-indigo-600 text-white px-5 py-2 rounded-md font-medium shadow-md hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={handleNavItemClick}
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}