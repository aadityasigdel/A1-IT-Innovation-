import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation bar */}
      <Navigation/>

      {/* Main content container */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 my-4">
        
        {/* Page header */}
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Terms &amp; Conditions</h1>
          <p className="mt-1 text-sm text-gray-600">A. One .IT Innovation Pvt. Ltd. (Brand name: A1 IT Innovation)</p>
          <p className="mt-1 text-sm text-gray-500">Last Updated: <span className="font-medium">2025</span></p>
        </header>

        {/* Terms content sections */}
        <section className="space-y-6 text-gray-700 leading-relaxed">
          
          {/* Intro */}
          <p>By using our website or services, you agree to these terms.</p>

          {/* Services offered */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">1. Services</h2>
            <p className="mt-2">
              We provide IT services such as software development, web design, and digital solutions.
            </p>
          </div>

          {/* User responsibilities */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">2. User Responsibilities</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provide accurate information.</li>
              <li>Do not misuse the website or services.</li>
            </ul>
          </div>

          {/* Careers policy */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">3. Careers</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Applications are reviewed internally.</li>
              <li>Applying does not guarantee selection.</li>
            </ul>
          </div>

          {/* Google Sign-In use */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">4. Google Sign-In</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provided for convenience.</li>
              <li>Users are responsible for their login security.</li>
            </ul>
          </div>

          {/* Access to client systems */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">5. Access to Client Systems</h2>
            <p className="mt-2">We use granted access only as agreed and keep credentials confidential.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Use access only for service delivery.</li>
              <li>Protect client data with reasonable security.</li>
            </ul>
            <p className="mt-2 font-medium">We are not liable for:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Existing issues or unauthorized changes.</li>
              <li>External threats or provider failures.</li>
            </ul>
          </div>

          {/* Intellectual property */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">6. Intellectual Property</h2>
            <p className="mt-2">
              All website content is owned by A. One .IT Innovation Pvt. Ltd. and requires permission for use.
            </p>
          </div>

          {/* Limitation of liability */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">7. Limitation of Liability</h2>
            <p className="mt-2">
              We are not responsible for indirect damages or losses from using our services.
            </p>
          </div>

          {/* Governing law */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">8. Governing Law</h2>
            <p className="mt-2">These terms are governed by Nepalese law.</p>
          </div>

          {/* Policy updates */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">9. Changes</h2>
            <p className="mt-2">
              We may update terms; continued use means acceptance.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
