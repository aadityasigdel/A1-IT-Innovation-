import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation bar */}
      <Navigation />

      {/* Main content container */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 my-4">

        {/* Page header */}
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Privacy Policy | A1 IT Innovation Nepal
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            A. One .IT Innovation Pvt. Ltd. (Brand name: A1 IT Innovation)
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Last Updated: <span className="font-medium">2025</span>
          </p>
        </header>

        {/* Privacy policy content sections */}
        <section className="space-y-6 text-gray-700 leading-relaxed">
          {/* Introduction */}
          <p>
            <strong>A1 IT Innovation</strong>, a leading IT and software company in Nepal
            (Damak, Jhapa, Kathmandu, Pokhara, Biratnagar), values your privacy.
            This Privacy Policy explains how we collect, use, and protect your
            information when you use our website, mobile apps, AI solutions, or
            IT consulting services.
          </p>

          {/* Information We Collect */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Personal Information:</strong> Name, email, phone, and resume/CV (for applications).</li>
              <li><strong>Login Information:</strong> Basic profile info from Google Sign-In (name, email, picture).</li>
              <li><strong>Service-related Data:</strong> Info you provide when requesting IT, AI, or chatbot services.</li>
              <li><strong>Automatic Information:</strong> IP, browser, device details, cookies for functionality and analytics.</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              2. How We Use Your Information
            </h2>
            <p className="mt-2">We use your information to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provide and improve our IT and AI services.</li>
              <li>Process job and free internship applications (React, Flutter, Java, AI).</li>
              <li>Communicate updates, offers, or application status.</li>
              <li>Maintain website and data security.</li>
            </ul>
          </div>

          {/* Sharing of Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">3. Sharing of Information</h2>
            <p className="mt-2">We do not sell your data. Information may be shared:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>With trusted partners (hosting, email, analytics) to deliver services.</li>
              <li>When legally required by Nepalese law.</li>
            </ul>
          </div>

          {/* Google Sign-In details */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">4. Google Sign-In</h2>
            <p className="mt-2">
              Used <strong>only</strong> for authentication. We do <strong>not</strong> access Gmail, contacts, or other Google data.
            </p>
          </div>

          {/* Access to Client Systems */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">5. Access to Client Systems</h2>
            <p className="mt-2">If you grant us access to your systems for projects:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>We handle your data securely and only as agreed.</li>
              <li>We don’t share or misuse your credentials.</li>
              <li>We take reasonable measures to protect your data.</li>
            </ul>
            <p className="mt-2 font-medium">We are not responsible for:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Pre-existing issues in your systems.</li>
              <li>Changes by you or third parties.</li>
              <li>External threats like hacking, malware, or hosting failures.</li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">6. Data Security</h2>
            <p className="mt-2">
              We use industry-standard security practices to protect your data from unauthorized access or loss.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">7. Your Rights</h2>
            <p className="mt-2">
              You may request to view, update, or delete your personal data by contacting us.
            </p>
          </div>

          {/* Changes to the Policy */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">8. Changes to This Policy</h2>
            <p className="mt-2">
              We may update this policy occasionally; changes will be posted on this page.
            </p>
          </div>
        </section>
      </div>

      {/* Hidden SEO Keywords */}
      <div className="hidden">
        <p>
          Privacy Policy A1 IT Innovation Nepal — IT company Damak Jhapa Kathmandu Pokhara Biratnagar. 
          Software development privacy, AI solutions privacy, chatbot privacy, internship privacy policy Nepal. 
          Best IT company in Nepal privacy practices, secure data handling, trusted software firm in Nepal.
        </p>
      </div>

      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy | A1 IT Innovation Nepal",
            "description": "Privacy Policy of A1 IT Innovation, top IT company in Nepal (Damak, Jhapa, Kathmandu, Pokhara, Biratnagar). Learn how we handle data securely for software, AI, chatbot, and internship services.",
            "publisher": {
              "@type": "Organization",
              "name": "A1 IT Innovation",
              "url": "https://www.a1itinnovation.com.np"
            }
          }),
        }}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
