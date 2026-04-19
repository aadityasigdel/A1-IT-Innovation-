import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const sections = [
  { id: "acceptance",         title: "Acceptance of Terms" },
  { id: "services",           title: "Our Services" },
  { id: "devops-managed",     title: "DevOps Managed Service" },
  { id: "online-courses",     title: "Online Courses & Training" },
  { id: "internship",         title: "Internship Program" },
  { id: "user-responsibilities", title: "User Responsibilities" },
  { id: "payments-pricing",   title: "Payments & Pricing" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "client-systems",     title: "Client System Access" },
  { id: "confidentiality",    title: "Confidentiality" },
  { id: "limitation",         title: "Limitation of Liability" },
  { id: "google-signin",      title: "Google Sign-In" },
  { id: "governing-law",      title: "Governing Law" },
  { id: "changes",            title: "Changes to These Terms" },
  { id: "contact",            title: "Contact Us" },
];

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | A1 IT Innovation Nepal</title>
        <meta name="description" content="Read A1 IT Innovation's Terms and Conditions for web development, mobile apps, DevOps managed services, online courses, internship programs, and all IT services in Nepal." />
        <meta name="keywords" content="A1 IT Innovation terms and conditions, IT company Nepal terms, DevOps service agreement Nepal, online courses terms Nepal, internship terms Nepal" />
        <link rel="canonical" href="https://www.a1itinnovation.com.np/company/terms" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Terms & Conditions | A1 IT Innovation Nepal",
          "description": "Terms and Conditions for all services offered by A1 IT Innovation — web development, DevOps, online courses, internships, and IT consulting in Nepal.",
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
        <section className="bg-gradient-to-br from-slate-900 to-indigo-900 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-indigo-700 text-indigo-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">Legal</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Terms &amp; Conditions</h1>
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

          {/* ── TERMS CONTENT ── */}
          <article className="flex-1 bg-white rounded-xl border border-gray-200 p-8 space-y-10 text-gray-700 leading-relaxed text-[15px]">

            {/* Intro */}
            <p>
              These Terms &amp; Conditions govern your use of the A1 IT Innovation website and all services we offer,
              including web development, mobile app development, DevOps managed services, online courses, security audits,
              domain &amp; hosting, AI solutions, and our free IT internship program.
              By accessing our website or engaging our services, you confirm that you have read, understood, and agreed to these terms.
            </p>

            {/* 1 */}
            <div id="acceptance">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                Acceptance of Terms
              </h2>
              <p className="pl-9">
                By using this website or purchasing any of our services, you agree to be bound by these Terms &amp; Conditions and our
                <a href="/company/privacy-policy" className="text-indigo-600 hover:underline font-medium mx-1">Privacy Policy</a>.
                If you do not agree to these terms, please do not use our website or services.
                These terms apply to all visitors, clients, students, and internship applicants.
              </p>
            </div>

            {/* 2 */}
            <div id="services">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                Our Services
              </h2>
              <p className="pl-9 mb-3">A1 IT Innovation provides the following services:</p>
              <ul className="pl-9 space-y-1.5 list-disc list-inside">
                <li><strong>Web Development</strong> — custom websites, web apps, landing pages</li>
                <li><strong>Mobile App Development</strong> — Android &amp; iOS apps using Flutter</li>
                <li><strong>DevOps as a Managed Service</strong> — server management, CI/CD, Kubernetes, cloud infrastructure</li>
                <li><strong>AI &amp; Chatbot Development</strong> — custom AI models, intelligent chatbots, automation</li>
                <li><strong>Security Audit</strong> — vulnerability testing and system hardening</li>
                <li><strong>Domain &amp; Web Hosting</strong> — registration and managed hosting across Nepal</li>
                <li><strong>Online Courses</strong> — Digital Marketing, Cybersecurity, DevOps, System Design</li>
                <li><strong>Free IT Internship Program</strong> — hands-on training for students across Nepal</li>
                <li><strong>IT Consulting</strong> — technical advice, system design, architecture reviews</li>
              </ul>
              <p className="pl-9 mt-3">
                The scope, timeline, and deliverables for each engagement are defined in a separate project agreement or proposal confirmed between both parties before work begins.
              </p>
            </div>

            {/* 3 */}
            <div id="devops-managed">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                DevOps Managed Service
              </h2>
              <p className="pl-9">
                Our DevOps Managed Service allows any business or company to hand over their complete server and infrastructure operations to A1 IT Innovation.
                This includes CI/CD pipeline setup, cloud hosting management, Kubernetes deployment, monitoring, security patching, and 24/7 incident response.
              </p>
              <p className="pl-9 mt-3">When you engage this service, the following terms apply:</p>
              <ul className="pl-9 mt-2 space-y-2 list-disc list-inside">
                <li>A formal <strong>Service Level Agreement (SLA)</strong> will be signed before access is granted to any systems.</li>
                <li>Access to your servers, cloud accounts, and credentials is strictly limited to the agreed scope of work.</li>
                <li>All infrastructure changes are logged and communicated to the client transparently.</li>
                <li>The client retains full ownership of all systems, data, and infrastructure at all times.</li>
                <li>Either party may terminate the managed service agreement with 30 days' written notice, unless otherwise agreed.</li>
                <li>Upon termination, all credentials and access will be returned or revoked and confirmed in writing.</li>
              </ul>
              <div className="pl-9 mt-4 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-amber-900 text-sm">
                <strong>Limitation:</strong> A1 IT Innovation is not liable for pre-existing infrastructure issues, unauthorized changes made outside our scope, or failures caused by third-party cloud providers, ISPs, or upstream services.
              </div>
            </div>

            {/* 4 */}
            <div id="online-courses">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                Online Courses &amp; Training
              </h2>
              <p className="pl-9">
                A1 IT Innovation offers online courses in Digital Marketing, Cybersecurity, DevOps, and System Design.
                The following terms apply to all course enrollments:
              </p>
              <ul className="pl-9 mt-3 space-y-2 list-disc list-inside">
                <li>Course content, materials, videos, and assignments are the intellectual property of A1 IT Innovation and may not be copied, shared, or redistributed without written permission.</li>
                <li>Completion certificates are issued only to students who meet the course requirements as defined in each program.</li>
                <li>Course fees, if applicable, are non-refundable once access to course content has been provided, unless there is a documented technical failure on our part.</li>
                <li>Students are expected to engage respectfully in any live sessions, forums, or group activities.</li>
                <li>A1 IT Innovation reserves the right to update course content to keep it current with industry standards.</li>
              </ul>
            </div>

            {/* 5 */}
            <div id="internship">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                Internship Program
              </h2>
              <p className="pl-9">Our internship program is offered free of charge to eligible students across Nepal. By applying, you agree that:</p>
              <ul className="pl-9 mt-3 space-y-2 list-disc list-inside">
                <li>Submitting an application does not guarantee selection. All applications are reviewed internally at our discretion.</li>
                <li>Interns are expected to follow our code of conduct, meet deadlines, and contribute responsibly to real client projects.</li>
                <li>Work produced during the internship remains the property of A1 IT Innovation or its clients, as applicable.</li>
                <li>Interns must keep client and project information confidential during and after the program.</li>
                <li>Completion certificates are issued to interns who successfully complete the program requirements.</li>
              </ul>
            </div>

            {/* 6 */}
            <div id="user-responsibilities">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">6</span>
                User Responsibilities
              </h2>
              <p className="pl-9">All users of our website and services agree to:</p>
              <ul className="pl-9 mt-3 space-y-2 list-disc list-inside">
                <li>Provide accurate, truthful, and up-to-date information when contacting us or engaging our services.</li>
                <li>Not misuse, attempt to hack, overload, or disrupt our website or any of our systems.</li>
                <li>Not use our services for any illegal, harmful, or fraudulent activity.</li>
                <li>Respect the intellectual property rights of A1 IT Innovation and our clients.</li>
                <li>Keep your account credentials secure and notify us immediately if you suspect unauthorized access.</li>
              </ul>
            </div>

            {/* 7 */}
            <div id="payments-pricing">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">7</span>
                Payments &amp; Pricing
              </h2>
              <p className="pl-9">
                We believe in full transparency with every client. Pricing is always discussed and agreed upon before any work begins — no hidden fees, no surprise charges.
              </p>
              <ul className="pl-9 mt-3 space-y-2 list-disc list-inside">
                <li>All project costs, milestones, and payment schedules are defined in the project agreement or proposal.</li>
                <li>Payments are typically structured in milestones (e.g., 50% upfront, 50% on delivery) unless otherwise agreed.</li>
                <li>A1 IT Innovation reserves the right to pause or discontinue work if agreed payments are not received on time.</li>
                <li>Refunds are handled on a case-by-case basis and are only applicable where A1 IT Innovation has failed to deliver the agreed scope of work.</li>
                <li>All prices are quoted in Nepali Rupees (NPR) unless otherwise specified.</li>
              </ul>
            </div>

            {/* 8 */}
            <div id="intellectual-property">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">8</span>
                Intellectual Property
              </h2>
              <p className="pl-9">
                All content on the A1 IT Innovation website — including text, graphics, logos, icons, and code — is the property of
                <strong> A. One IT Innovation Pvt. Ltd.</strong> and is protected under applicable copyright and intellectual property laws.
              </p>
              <ul className="pl-9 mt-3 space-y-2 list-disc list-inside">
                <li>You may not reproduce, distribute, or use any of our website content without prior written permission.</li>
                <li>Upon full payment of a project, the client receives ownership of the deliverables as specified in the project agreement. Development tools, frameworks, and reusable components built by A1 IT Innovation remain our property unless explicitly transferred.</li>
                <li>Course materials, videos, and training content remain the sole property of A1 IT Innovation regardless of enrollment.</li>
              </ul>
            </div>

            {/* 9 */}
            <div id="client-systems">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">9</span>
                Client System Access
              </h2>
              <p className="pl-9">
                When a client grants A1 IT Innovation access to their systems, servers, repositories, or cloud accounts for the purpose of delivering services:
              </p>
              <ul className="pl-9 mt-3 space-y-2 list-disc list-inside">
                <li>Access is used strictly and only for the agreed service delivery.</li>
                <li>We do not access, copy, or share any data beyond what is required.</li>
                <li>All credentials are stored securely and not shared with unauthorized parties.</li>
                <li>We apply reasonable security practices to protect any systems we access.</li>
              </ul>
              <div className="pl-9 mt-4 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-amber-900 text-sm">
                <strong>We are not responsible for:</strong> pre-existing issues in client systems, changes made by the client or third parties, or external incidents such as hacking, data breaches by outside actors, or failures from third-party hosting providers.
              </div>
            </div>

            {/* 10 */}
            <div id="confidentiality">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">10</span>
                Confidentiality
              </h2>
              <p className="pl-9">
                We treat all client information — project details, business data, credentials, and communications — as strictly confidential.
                We do not discuss, share, or disclose client work to any third party without explicit written consent.
                Transparency with our clients is one of our core values — you will always know exactly what we are working on and why.
              </p>
            </div>

            {/* 11 */}
            <div id="limitation">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">11</span>
                Limitation of Liability
              </h2>
              <p className="pl-9">
                To the fullest extent permitted by Nepalese law, A1 IT Innovation shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services, including but not limited to lost revenue, data loss, or business interruption.
              </p>
              <p className="pl-9 mt-3">
                Our total liability in any dispute related to a specific project shall not exceed the total amount paid by the client for that project.
              </p>
            </div>

            {/* 12 */}
            <div id="google-signin">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">12</span>
                Google Sign-In
              </h2>
              <p className="pl-9">
                Google Sign-In is provided solely as a convenient authentication method. Users are responsible for maintaining the security of their Google account and any activity that occurs through it.
                A1 IT Innovation is not responsible for unauthorized access resulting from compromised user credentials.
              </p>
            </div>

            {/* 13 */}
            <div id="governing-law">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">13</span>
                Governing Law
              </h2>
              <p className="pl-9">
                These Terms &amp; Conditions are governed by and construed in accordance with the laws of Nepal.
                Any disputes arising from these terms or our services shall be resolved through mutual discussion first.
                If unresolved, disputes shall be subject to the jurisdiction of the competent courts of Nepal.
              </p>
            </div>

            {/* 14 */}
            <div id="changes">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">14</span>
                Changes to These Terms
              </h2>
              <p className="pl-9">
                A1 IT Innovation reserves the right to update these Terms &amp; Conditions at any time to reflect changes in our services or legal requirements.
                We will update the "Last Updated" date when changes are made. Continued use of our website or services after updates constitutes acceptance of the revised terms.
                We encourage you to review this page periodically.
              </p>
            </div>

            {/* 15 */}
            <div id="contact">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">15</span>
                Contact Us
              </h2>
              <p className="pl-9 mb-3">For any questions about these Terms &amp; Conditions, please contact us:</p>
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
