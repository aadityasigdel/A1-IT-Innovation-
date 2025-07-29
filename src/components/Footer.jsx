import logoimage from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className="relative bg-indigo-100 py-10 text-black flex flex-col gap-8 lg:gap-0">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 px-4">
        
        {/* Logo */}
        <div className="mx-auto lg:m-0">
          <img
            src={logoimage}
            alt="A1 IT Innovation"
            max-width="300"
            max-height="100"
            loading="lazy"
            className="w-3xs h-auto"
          />
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Services</h3>
          <div className="flex flex-col gap-2 text-sm">
            <a className="text-gray-700 hover:underline" href="/mobile">Mobile App Development</a>
            <a className="text-gray-700 hover:underline" href="/web">Web App Development</a>
            <a className="text-gray-700 hover:underline" href="/workshop">Workshop</a>
            <a className="text-gray-700 hover:underline" href="/intern">Intern</a>
            <a className="text-gray-700 hover:underline" href="/security">Security Audit</a>
            <a className="text-gray-700 hover:underline" href="/hosting">Domain Registration & Hosting</a>
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Company</h3>
          <div className="flex flex-col gap-2 text-sm">
            <a className="text-gray-700 hover:underline" href="/why">Why A1 IT Innovation</a>
            <a className="text-gray-700 hover:underline" href="/about">About Us</a>
            <a className="text-gray-700 hover:underline" href="/faq">FAQ</a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Contact</h3>

          <a href="mailto:aoneitinnovation@gmail.com" className="flex items-center gap-2 text-sm text-gray-700 hover:underline">
            <i className="fas fa-envelope"></i> aoneitinnovation@gmail.com
          </a>

          <a href="tel:+9779816032025" className="flex items-center gap-2 text-sm text-gray-700 hover:underline">
            <i className="fas fa-phone"></i> 9816032025
          </a>

          <a href="tel:+9779811014291" className="flex items-center gap-2 text-sm text-gray-700 hover:underline">
            <i className="fas fa-phone"></i> 9811014291
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 text-base mt-2">
            <a href="https://www.facebook.com/profile.php?id=61557621773133" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-400 pt-4">
        <p className="text-center text-sm text-gray-700">
          © 2023 - 2025 A1 IT Innovation Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
