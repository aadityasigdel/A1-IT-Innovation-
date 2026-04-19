import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const sections = [
  { id: "information-we-collect",    title: "Information We Collect" },
  { id: "how-we-use",               title: "How We Use Your Information" },
  { id: "devops-infrastructure",     title: "DevOps & Infrastructure Access" },
  { id: "online-courses",           title: "Online Courses & Training Data" },
  { id: "internship",               title: "Internship & Career Applications" },
  { id: "sharing",                  title: "Sharing of Information" },
  { id: "google-signin",            title: "Google Sign-In" },
  { id: "cookies",                  title: "Cookies & Analytics" },
  { id: "data-security",            title: "Data Security" },
  { id: "your-rights",              title: "Your Rights" },
  { id: "changes",                  title: "Changes to This Policy" },
  { id: "contact",                  title: "Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | A1 IT Innovation Nepal</title>
        <meta name="description" content="Read A1 IT Innovation's Privacy Policy. Learn how we collect, use, and protect your data across our web development, mobile app, DevOps managed services, online courses, and free internship programs in Nepal." />
        <meta name="keywords" content="A1 IT Innovation privacy policy, IT company Nepal data policy, DevOps managed service privacy, online courses Nepal privacy, internship Nepal privacy" />
        <link rel="canonical" href="https://www.a1itinnovation.com.np/company/privacy-policy" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Privacy Policy | A1 IT Innovation Nepal",
          "description": "Privacy Policy of A1 IT Innovation — IT services, DevOps managed services, online courses, and free internships across Nepal.",
          "publisher": {
            "@type": "Organization",
            "name": "A1 IT Innovation",
            "url": "https://www.a1itinnovation.com.np",
          },
        })}</script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gray-50">

        {/* ── HEADER ── */}
        <section className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-indigo-700 text-indigo-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">Legal</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Privacy Policy</h1>
            <p className="text-indigo-300 text-sm">
              <strong className="text-white">A. One IT Innovation Pvt. Ltd.</strong> (Brand: A1 IT Innovation) &nbsp;·&nbsp; Last Updated: <strong className="text-white">April 2026</strong>
            </p>
            <p className="text-indigo-300 text-sm mt-2">
              Offices: Damak, Jhapa &nbsp;·&nbsp; Kageshwori Manohara, Kathmandu &nbsp;·&nbsp; Sallaghari, Bhaktapur
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">

          {/* ── STICKY TABLE OF CONTENTS ── */}
          <aside className="lg:w-60 flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 p-5 lg:sticky lg:top-24">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contents</p>
              <nav className="space-y-1">
                {sections.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 py-1 transition-colors"
                  >
                    <span className="text-xs text-gray-400 w-4 flex-shrink-0">{i + 1}.</span>
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* ── POLICY CONTENT ── */}
          <article className="flex-1 bg-white rounded-xl border border-gray-200 p-8 space-y-10 text-gray-700 leading-relaxed text-[15px]">

            {/* Intro */}
            <p>
              <strong>A1 IT Innovation</strong> is a Nepal-based IT company providing web development, mobile app development,
              DevOps managed services, online courses, security audits, domain &amp; hosting, AI solutions, and free IT internships.
              We are committed to protecting your privacy. This policy explains what data we collect, how we use it, and how we keep it safe.
            </p>
            <p>
              By using our website, services, or enrolling in our courses and programs, you agree to the practices described in this policy.
            </p>

            {/* 1 */}
            <div id="information-we-collect">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                Information We Collect
              </h2>
              <div className="space-y-3 pl-9">
                <div>
                  <p className="font-semibold text-gray-800">Personal Information</p>
                  <p>Name, email address, phone number, and location — collected when you contact us, request a quote, register for a course, or apply for an internship.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Account & Login Information</p>
                  <p>If you sign in via Google, we collect only your name, email address, and profile picture — nothing else from your Google account.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Service & Project Information</p>
                  <p>Details you share about your project, business needs, or technical requirements when requesting our services.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Course & Training Data</p>
                  <p>Enrollment details, course progress, assignment submissions, and assessment scores for students enrolled in our online courses.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Technical Information</p>
                  <p>IP address, browser type, device information, and cookies — collected automatically for website functionality and analytics.</p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div id="how-we-use">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                How We Use Your Information
              </h2>
              <ul className="pl-9 space-y-2 list-disc list-inside">
                <li>To deliver and improve our IT, DevOps, AI, and software development services.</li>
                <li>To manage course enrollments, track learning progress, and issue certificates.</li>
                <li>To process internship and career applications.</li>
                <li>To send project updates, course notifications, or service-related communications.</li>
                <li>To respond to your enquiries and provide customer support.</li>
                <li>To maintain the security and performance of our systems.</li>
                <li>To comply with legal obligations under Nepalese law.</li>
              </ul>
              <p className="pl-9 mt-3 text-sm bg-indigo-50 border border-indigo-100 rounded-lg px-4 py-3 text-indigo-800">
                We will never use your data for unsolicited marketing without your explicit consent.
              </p>
            </div>

            {/* 3 */}
            <div id="devops-infrastructure">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                DevOps &amp; Infrastructure Access
              </h2>
              <p className="pl-9">
                For clients who engage our <strong>DevOps Managed Service</strong> — where A1 IT Innovation takes full responsibility for your servers, CI/CD pipelines, cloud hosting, monitoring, and infrastructure — the following applies:
              </p>
              <ul className="pl-9 mt-3 space-y-2 list-disc list-inside">
                <li>All server credentials, API keys, and infrastructure access are handled with strict confidentiality under a separate service agreement.</li>
                <li>We access your systems only to the extent required to perform the agreed services.</li>
                <li>We do not share, copy, or transfer your server credentials, source code, or business data to any third party.</li>
                <li>All team members with infrastructure access are bound by non-disclosure obligations.</li>
                <li>We maintain audit logs of all administrative actions taken on your infrastructure.</li>
              </ul>
              <div className="pl-9 mt-4 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-amber-900 text-sm">
                <strong>Limitation of Liability:</strong> A1 IT Innovation is not responsible for pre-existing vulnerabilities in your systems, changes made by you or third parties outside our scope, or external threats such as hacking, malware, or upstream hosting failures.
              </div>
            </div>

            {/* 4 */}
            <div id="online-courses">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                Online Courses &amp; Training Data
              </h2>
              <p className="pl-9">
                When you enroll in our online courses (Digital Marketing, Cybersecurity, DevOps, System Design), we collect and process the following:
              </p>
              <ul className="pl-9 mt-3 space-y-2 list-disc list-inside">
                <li>Enrollment and registration details (name, email, contact).</li>
                <li>Course progress, quiz scores, and assignment submissions.</li>
                <li>Payment or fee-related information where applicable (processed securely through our payment partners).</li>
                <li>Feedback and reviews you submit about the course.</li>
              </ul>
              <p className="pl-9 mt-3">
                This data is used solely to deliver your course experience, issue completion certificates, and improve our training programs. It is never sold to third parties.
              </p>
            </div>

            {/* 5 */}
            <div id="internship">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                Internship &amp; Career Applications
              </h2>
              <p className="pl-9">
                When you apply for our free internship program or any career opportunity, we collect your name, email, phone number, educational background, and any portfolio or resume you submit.
                This information is used exclusively for evaluating your application and communicating its status. It is not shared with external parties.
              </p>
            </div>

            {/* 6 */}
            <div id="sharing">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
                Sharing of Information
              </h2>
              <p className="pl-9 font-semibold text-gray-900">We do not sell your personal data — ever.</p>
              <p className="pl-9 mt-2">Your information may only be shared in these limited cases:</p>
              <ul className="pl-9 mt-2 space-y-2 list-disc list-inside">
                <li><strong>Service providers:</strong> Trusted third-party tools we use to deliver services (hosting, email delivery, analytics) — bound by their own privacy policies.</li>
                <li><strong>Legal obligation:</strong> When required by the Government of Nepal or applicable law.</li>
                <li><strong>With your explicit consent:</strong> When you have specifically authorized a disclosure.</li>
              </ul>
            </div>

            {/* 7 */}
            <div id="google-signin">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">7</span>
                Google Sign-In
              </h2>
              <p className="pl-9">
                We use Google Sign-In for authentication purposes only. We access only your <strong>name, email address, and profile picture</strong>.
                We do <strong>not</strong> access your Gmail, Google Drive, contacts, calendar, or any other Google data.
              </p>
            </div>

            {/* 8 */}
            <div id="cookies">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">8</span>
                Cookies &amp; Analytics
              </h2>
              <p className="pl-9">
                Our website uses cookies to improve your browsing experience and understand how visitors use the site. Cookies help us remember your preferences and measure site performance.
                You can disable cookies in your browser settings at any time, though some features of the website may not function correctly without them.
              </p>
            </div>

            {/* 9 */}
            <div id="data-security">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">9</span>
                Data Security
              </h2>
              <p className="pl-9">
                We apply industry-standard security measures to protect your personal data from unauthorized access, loss, or misuse — including encrypted connections (HTTPS), access controls, and regular security reviews.
                While we take all reasonable precautions, no system is 100% immune to risk. We encourage you to use strong passwords and report any suspected security issues to us immediately.
              </p>
            </div>

            {/* 10 */}
            <div id="your-rights">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">10</span>
                Your Rights
              </h2>
              <p className="pl-9">You have the right to:</p>
              <ul className="pl-9 mt-2 space-y-1 list-disc list-inside">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction of any inaccurate information.</li>
                <li>Request deletion of your data, subject to any legal obligations.</li>
                <li>Withdraw consent at any time where processing is based on consent.</li>
              </ul>
              <p className="pl-9 mt-3">To exercise any of these rights, contact us at <strong>+977-981-6032025</strong> or through our <a href="/contact" className="text-indigo-600 hover:underline font-medium">Contact page</a>.</p>
            </div>

            {/* 11 */}
            <div id="changes">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">11</span>
                Changes to This Policy
              </h2>
              <p className="pl-9">
                We may update this Privacy Policy from time to time as our services evolve. When we make significant changes, we will update the "Last Updated" date at the top of this page.
                We encourage you to review this page periodically.
              </p>
            </div>

            {/* 12 */}
            <div id="contact">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">12</span>
                Contact Us
              </h2>
              <p className="pl-9 mb-3">For any questions, concerns, or data requests related to this Privacy Policy, please reach out:</p>
              <div className="pl-9 space-y-1 text-sm">
                <p>🏢 <strong>A. One IT Innovation Pvt. Ltd.</strong> (A1 IT Innovation)</p>
                <p>📍 Damak, Jhapa &nbsp;|&nbsp; Kageshwori Manohara, Kathmandu &nbsp;|&nbsp; Sallaghari, Bhaktapur</p>
                <p>📱 +977-981-6032025</p>
                <p>🌐 <a href="/contact" className="text-indigo-600 hover:underline">www.a1itinnovation.com.np/contact</a></p>
              </div>
            </div>

          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
