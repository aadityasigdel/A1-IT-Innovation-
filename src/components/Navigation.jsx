import { useEffect, useRef, useState } from "react";
import logoimage from "../assets/logo.png";

/* ── NAV DATA ── */
const servicesLinks = [
  { href: "/services/web-dev",        icon: "💻", label: "Web Development",     desc: "React, Next.js & custom sites" },
  { href: "/services/mobile-dev",     icon: "📱", label: "Mobile App Dev",       desc: "Android & iOS with Flutter" },
  { href: "/services/devops",         icon: "⚙️", label: "DevOps as a Service",  desc: "CI/CD, Kubernetes & cloud infra" },
  { href: "/services/security-audit", icon: "🛡️", label: "Security Audit",       desc: "Vulnerability & pen testing" },
  { href: "/services/domain-hosting", icon: "🌐", label: "Domain & Hosting",     desc: "Registration & managed hosting" },
  { href: "/services/internship",     icon: "🎓", label: "Free Internship",       desc: "Real projects, real mentors" },
  { href: "/services/workshop",       icon: "🏫", label: "Tech Workshop",         desc: "Training at colleges & schools" },
];

const coursesLinks = [
  { href: "/courses/digital-marketing", icon: "📈", label: "Digital Marketing", desc: "SEO, Ads, Social Media & Analytics" },
  { href: "/courses/cybersecurity",     icon: "🔐", label: "Cybersecurity",      desc: "Ethical Hacking & Digital Forensics" },
  { href: "/courses/devops",            icon: "🐳", label: "DevOps",             desc: "CI/CD, Docker, Kubernetes & Cloud" },
  { href: "/courses/system-design",     icon: "🏗️", label: "System Design",      desc: "Scalable Architecture & Microservices" },
];

const companyLinks = [
  { href: "/company/about",   icon: "🏢", label: "About Us",       desc: "Our story & mission" },
  { href: "/company/why-us",  icon: "⭐", label: "Why A1 IT",      desc: "What makes us different" },
  { href: "/company/faq",     icon: "❓", label: "FAQ",            desc: "Common questions answered" },
  { href: "/company/gallery", icon: "🖼️", label: "Gallery",        desc: "Events & workshops" },
  { href: "/company/career",  icon: "🚀", label: "Career",         desc: "Join our team" },
];

/* ── DROPDOWN COMPONENT ── */
function Dropdown({ title, links, isMobile = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isMobile) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center w-full py-3 font-semibold text-gray-800 border-b border-gray-100"
        >
          <span>{title}</span>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        {isOpen && (
          <div className="pl-3 pt-1 pb-2 space-y-1">
            {links.map(({ href, icon, label }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-3 py-2 text-sm text-gray-700 hover:text-indigo-600"
              >
                <span className="text-base">{icon}</span>
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 py-2 font-medium transition-colors duration-200 ${
          isOpen ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"
        }`}
      >
        {title}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180 text-indigo-600" : "text-gray-400"}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 min-w-[220px]">
          {/* top arrow */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45"/>
          {links.map(({ href, icon, label, desc }) => (
            <a
              key={href}
              href={href}
              className="flex items-start gap-3 px-4 py-2.5 hover:bg-indigo-50 transition-colors group"
            >
              <span className="text-xl mt-0.5 flex-shrink-0">{icon}</span>
              <span>
                <span className="block text-sm font-semibold text-gray-800 group-hover:text-indigo-700 leading-tight">{label}</span>
                {desc && <span className="block text-xs text-gray-400 mt-0.5">{desc}</span>}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── NAVIGATION ── */
export default function Navigation() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <img src={logoimage} alt="A1 IT Innovation Logo" className="rounded-full object-contain" height={52} width={52}/>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-gray-900">A1 IT Innovation</span>
            <span className="text-xs text-indigo-500 font-medium">Your one Stop IT Solution</span>
          </div>
        </a>

        {/* Desktop Menu */}
        {!isMobileView && (
          <div className="flex items-center gap-5 text-sm">
            <Dropdown title="Services" links={servicesLinks} />
            <Dropdown title="Courses" links={coursesLinks} />
            <a href="/clients" className="font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2">Clients</a>
            <a href="/works"   className="font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2">Works</a>
            <a href="/blog"    className="font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2">Blog</a>
            <Dropdown title="Company" links={companyLinks} />
            <a
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 ml-1 whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobileView && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}/>
            <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}/>
            <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
          </button>
        )}
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileView && mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={closeMobileMenu}/>

          {/* Drawer */}
          <div className="relative ml-auto w-80 max-w-full h-full bg-white shadow-2xl flex flex-col">

            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
              <a href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
                <img src={logoimage} alt="Logo" className="rounded-full object-contain" height={36} width={36}/>
                <span className="font-bold text-gray-900 text-sm">A1 IT Innovation</span>
              </a>
              <button
                onClick={closeMobileMenu}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* CTA — always visible below header */}
            <div className="px-5 py-4 border-b border-gray-100 space-y-2 flex-shrink-0">
              <a
                href="/contact"
                onClick={closeMobileMenu}
                className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/courses/digital-marketing"
                onClick={closeMobileMenu}
                className="block w-full text-center border border-indigo-200 text-indigo-600 hover:bg-indigo-50 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                📚 Explore Courses
              </a>
            </div>

            {/* Nav links — scrollable */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
              <Dropdown title="Services" links={servicesLinks} isMobile />
              <Dropdown title="Courses"  links={coursesLinks}  isMobile />

              {[
                { href: "/clients", label: "👥 Clients" },
                { href: "/works",   label: "📁 Works" },
                { href: "/blog",    label: "📝 Blog" },
              ].map(({ href, label }) => (
                <a key={href} href={href} onClick={closeMobileMenu}
                  className="flex items-center gap-2 py-3 font-semibold text-gray-800 border-b border-gray-100 text-sm"
                >
                  {label}
                </a>
              ))}

              <Dropdown title="Company" links={companyLinks} isMobile />
            </div>

            {/* Social icons */}
            <div className="px-5 py-4 border-t border-gray-100 flex gap-4 justify-center flex-shrink-0">
              <a href="https://www.facebook.com/profile.php?id=61557621773133" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.7h2.3l-.3 3H14v7A10 10 0 0022 12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 3a2 2 0 110 4 2 2 0 010-4zm0 4h4v12H4zm6 0h4v2.5c.6-1 2-2.5 4-2.5 4 0 4.5 2.5 4.5 5.7V19h-4v-5c0-1.2 0-2.7-2-2.7-2 0-2.3 1.5-2.3 2.5V19h-4z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
