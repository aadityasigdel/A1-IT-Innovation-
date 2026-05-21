import logoImage from "../assets/logo.png";

const servicesLinks = [
  { href: "/services/web-dev",        label: "Web Development" },
  { href: "/services/mobile-dev",     label: "Mobile App Development" },
  { href: "/services/devops",         label: "DevOps as a Service" },
  { href: "/services/security-audit", label: "Security Audit" },
  { href: "/services/domain-hosting", label: "Domain & Hosting" },
  { href: "/services/internship",     label: "Free Internship" },
  { href: "/services/workshop",       label: "Technical Workshop" },
];

const coursesLinks = [
  { href: "/courses/digital-marketing", label: "Digital Marketing" },
  { href: "/courses/cybersecurity",     label: "Cybersecurity" },
  { href: "/courses/devops",            label: "DevOps" },
  { href: "/courses/system-design",     label: "System Design" },
];

const companyLinks = [
  { href: "/company/about",   label: "About Us" },
  { href: "/company/why-us",  label: "Why A1 IT Innovation" },
  { href: "/company/faq",     label: "FAQ" },
  { href: "/company/gallery", label: "Gallery" },
  { href: "/company/career",  label: "Career" },
  { href: "/clients",              label: "Our Clients" },
  { href: "/works",                label: "Portfolio" },
  { href: "/sandip-chapagain",     label: "Founder — Sandip Chapagain" },
];

const legalLinks = [
  { href: "/company/policy", label: "Privacy Policy" },
  { href: "/company/terms",  label: "Terms & Conditions" },
];

const offices = [
  { name: "Damak Head Office", address: "A. One IT Innovation Pvt. Ltd., Damak-8, Jhapa, Nepal" },
  { name: "Kathmandu Office",  address: "Kageshwori Manohara, Kathmandu, Nepal" },
  { name: "Bhaktapur Office",  address: "Sallaghari, Bhaktapur, Nepal" },
];

export default function Footer() {
  return (
    <footer
      className="bg-gray-950 text-gray-300"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* ── MAIN FOOTER ── */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-1 flex flex-col gap-5">
          <a href="/" aria-label="A1 IT Innovation Home">
            <img
              src={logoImage}
              alt="A1 IT Innovation Nepal"
              className="h-14 w-auto object-contain"
              itemProp="logo"
            />
          </a>
          <p className="text-sm text-gray-400 leading-relaxed" itemProp="description">
            Nepal's trusted IT company — delivering web, mobile, DevOps, AI solutions & free internships since 2021.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://www.facebook.com/a1itinnovationnepal"
              target="_blank" rel="me noopener noreferrer"
              aria-label="Facebook — A1 IT Innovation"
              className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2c0-2 1.2-3 3-3 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.7h2.3l-.3 3H14v7A10 10 0 0022 12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/a1itinnovation/"
              target="_blank" rel="me noopener noreferrer"
              aria-label="LinkedIn — A1 IT Innovation"
              className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 3a2 2 0 110 4 2 2 0 010-4zm0 4h4v12H4zm6 0h4v2.5c.6-1 2-2.5 4-2.5 4 0 4.5 2.5 4.5 5.7V19h-4v-5c0-1.2 0-2.7-2-2.7-2 0-2.3 1.5-2.3 2.5V19h-4z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@a1itinnovation"
              target="_blank" rel="me noopener noreferrer"
              aria-label="TikTok — A1 IT Innovation"
              className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-600 flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.73a4.85 4.85 0 01-1.01-.04z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/9779816032025"
              target="_blank" rel="noopener noreferrer"
              aria-label="WhatsApp — Chat with A1 IT Innovation"
              className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-gray-800 text-indigo-400 text-xs font-semibold px-3 py-2 rounded-lg w-fit">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
            Registered in Nepal 🇳🇵
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Services</h3>
          <ul className="space-y-2.5">
            {servicesLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-indigo-500 rounded-full flex-shrink-0"/>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Courses</h3>
          <ul className="space-y-2.5 mb-6">
            {coursesLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-indigo-500 rounded-full flex-shrink-0"/>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Company</h3>
          <ul className="space-y-2.5">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-indigo-500 rounded-full flex-shrink-0"/>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact</h3>
          <div className="space-y-3 text-sm">
            <a
              href="mailto:info@a1itinnovation.com.np"
              className="flex items-start gap-2.5 text-gray-400 hover:text-indigo-400 transition-colors"
              itemProp="email"
            >
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              info@a1itinnovation.com.np
            </a>
            <a
              href="tel:+9779816032025"
              className="flex items-center gap-2.5 text-gray-400 hover:text-indigo-400 transition-colors"
              itemProp="telephone"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +977 9816032025
            </a>
            <a
              href="https://maps.google.com/?q=A1+IT+Innovation+Damak+Jhapa+Nepal"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              View on Google Maps
            </a>
            <a
              href="https://wa.me/9779816032025"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-gray-400 hover:text-green-400 transition-colors"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp: +977 9816032025
            </a>
          </div>
        </div>

        {/* Offices */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Our Offices</h3>
          <div className="space-y-5">
            {offices.map((o, i) => (
              <address key={i} className="not-italic">
                <p className="text-xs font-bold text-indigo-400 mb-1">{o.name}</p>
                <p className="text-sm text-gray-400 leading-snug" itemProp="address">{o.address}</p>
              </address>
            ))}
          </div>

          {/* Working hours */}
          <div className="mt-6 bg-gray-800 rounded-xl p-4 text-xs">
            <p className="text-white font-semibold mb-2">⏰ Support Hours</p>
            <p className="text-gray-400">Sun – Fri: 9:00 AM – 6:00 PM</p>
            <p className="text-green-400 font-medium mt-1">✅ 24/7 for managed clients</p>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © 2021 – 2026 <span className="text-gray-400 font-medium">A1 IT Innovation</span> — Officially registered as <span className="text-gray-400">A. One IT Innovation Pvt. Ltd.</span> · Nepal
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            {legalLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-indigo-400 transition-colors">
                {l.label}
              </a>
            ))}
            <span className="text-gray-700">·</span>
            <span className="text-gray-600">🇳🇵 Made in Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
