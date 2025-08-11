import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navigation/>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 my-4">
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Terms &amp; Conditions</h1>
          <p className="mt-1 text-sm text-gray-600">A. One .IT Innovation Pvt. Ltd. (Brand name: A1 IT Innovation)</p>
          <p className="mt-1 text-sm text-gray-500">Last Updated: <span className="font-medium">2025</span></p>
        </header>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            By using our website or services, you agree to these terms.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">1. Services</h2>
            <p className="mt-2">
              We are an IT service-based company providing software development, web design, digital solutions, and related services.
              We currently do not sell physical products.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">2. User Responsibilities</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provide accurate information when contacting us or applying for careers.</li>
              <li>Do not misuse our website or services.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">3. Careers</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Applications for jobs/internships will be reviewed based on our internal process.</li>
              <li>Submitting an application does not guarantee selection.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">4. Google Sign-In</h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provided for your convenience.</li>
              <li>You are responsible for keeping your login details secure.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">5. Access to Client Systems</h2>
            <p className="mt-2">When you grant us access to your systems (hosting accounts, domains, databases, email accounts, or cloud services):</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>We will use the access only for agreed service delivery.</li>
              <li>We will keep all credentials confidential.</li>
              <li>We will take reasonable security measures to protect your data.</li>
            </ul>
            <p className="mt-2 font-medium">Limitation of Liability: We are not liable for problems caused by:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Existing issues in your systems.</li>
              <li>Unauthorized changes by you or third parties.</li>
              <li>External factors like hacking, malware, or hosting provider failures.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">6. Intellectual Property</h2>
            <p className="mt-2">
              All website content (text, images, code) is owned by A. One .IT Innovation Pvt. Ltd. and cannot be used without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">7. Limitation of Liability</h2>
            <p className="mt-2">
              We are not responsible for indirect damages, loss of data, or loss of profits arising from the use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">8. Governing Law</h2>
            <p className="mt-2">These terms are governed by the laws of Nepal.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">9. Changes</h2>
            <p className="mt-2">
              We may update these terms. Continued use means you accept the updated terms.
            </p>
          </div>
         
        </section>
      </div>
       <Footer/>
    </div>
  );
}