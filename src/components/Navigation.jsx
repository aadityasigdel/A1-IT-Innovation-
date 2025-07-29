import logoimage from "../assets/logo.png";

export default function Navigation() {
    return (
        <nav className="h-[80px] w-full flex flex-row items-center justify-between px-6 bg-white shadow-md">
            {/* Brand */}
            <a href="/" className="flex flex-row items-center gap-3">
                <img src={logoimage} alt="A1 IT Innovation" className="w-10 h-10 object-contain rounded-full" />
                <span className="font-bold text-xl">A1 IT Innovation</span>
            </a>

            {/* Menu Items */}
            <ul className="hidden md:flex flex-row items-center gap-6 font-medium text-gray-800">
                <li className="relative group flex items-center gap-1 cursor-pointer hover:text-indigo-600">
                    Services <span className="text-xs">▼</span>
                    <div className="absolute top-full left-0 mt-1 bg-white border shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-50">
                        <ul className="p-2">
                            <li className="px-4 py-2 hover:bg-gray-100"><a href="/services/mobile-app-development">Mobile App Development</a></li>
                            <li className="px-4 py-2 hover:bg-gray-100"><a href="/services/website-development">Website Development</a></li>
                            <li className="px-4 py-2 hover:bg-gray-100"><a href="/services/security-audit">Security Audit</a></li>
                            <li className="px-4 py-2 hover:bg-gray-100"><a href="/services/domain-hosting">Domain & Hosting</a></li>
                            <li className="px-4 py-2 hover:bg-gray-100"><a href="/services/workshop">Workshop & Intern</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="/clients" className="hover:text-indigo-600">Clients</a></li>
                <li><a href="/works" className="hover:text-indigo-600">Works</a></li>
                <li className="relative group flex items-center gap-1 cursor-pointer hover:text-indigo-600">
                    Company <span className="text-xs">▼</span>
                    <div className="absolute top-full left-0 mt-1 bg-white border shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-50">
                        <ul className="p-2">
                            <li className="px-4 py-2 hover:bg-gray-100"><a href="/company/about">About Us</a></li>
                            <li className="px-4 py-2 hover:bg-gray-100"><a href="/company/why-us">Why A1 IT Innovation</a></li>
                            <li className="px-4 py-2 hover:bg-gray-100"><a href="/company/faq">FAQ</a></li>
                            <li className="px-4 py-2 hover:bg-gray-100"><a href="/company/gallery">Gallery</a></li>
                        </ul>
                    </div>
                </li>
            </ul>

            {/* Contact CTA */}
            <div className="hidden md:block">
                <a href="/contact" className="bg-indigo-600 text-white px-5 py-2 rounded-md font-medium shadow-md hover:bg-indigo-700 transition">
                    Contact Us
                </a>
            </div>
        </nav>
    );
}
