import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const topics = [
  "Linux fundamentals & shell scripting",
  "Git & version control workflows",
  "Docker — containerization & image management",
  "Docker Compose & multi-container apps",
  "Kubernetes — deployment, scaling & orchestration",
  "CI/CD pipelines with GitLab CI & GitHub Actions",
  "Infrastructure as Code with Terraform & Ansible",
  "Cloud platforms: AWS, GCP & Azure basics",
  "Monitoring with Grafana, Prometheus & Loki",
  "Nginx reverse proxy & load balancing",
  "Security best practices in DevOps",
  "Incident response & disaster recovery",
];

export default function DevOpsCourse() {
  return (
    <>
      <Helmet>
        <title>DevOps Course Nepal | Docker, Kubernetes & CI/CD | A1 IT Innovation</title>
        <meta name="description" content="Learn DevOps in Nepal with A1 IT Innovation. Covers Docker, Kubernetes, CI/CD pipelines, Terraform, Grafana, cloud infrastructure, and more. Enroll online." />
        <meta name="keywords" content="DevOps course Nepal, Docker Kubernetes training Nepal, CI/CD pipeline course Nepal, cloud infrastructure Nepal, A1 IT Innovation DevOps" />
        <link rel="canonical" href="https://www.a1itinnovation.com.np/courses/devops" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              📚 Online Course &nbsp;·&nbsp; Hands-on Projects
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DevOps Engineering</h1>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              From Linux and Git to Docker, Kubernetes, Terraform, and cloud infrastructure — become a DevOps engineer and automate the way modern software is built, tested, and deployed.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8 text-sm">
              <span className="bg-white/15 px-3 py-1.5 rounded-full">🐳 Docker & Kubernetes</span>
              <span className="bg-white/15 px-3 py-1.5 rounded-full">🔄 CI/CD Pipelines</span>
              <span className="bg-white/15 px-3 py-1.5 rounded-full">☁️ Cloud Infrastructure</span>
              <span className="bg-white/15 px-3 py-1.5 rounded-full">📊 Grafana Monitoring</span>
            </div>
            <a href="/register" className="inline-block bg-blue-400 hover:bg-blue-300 text-gray-900 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-colors">
              Enroll Now — Sign Up Free
            </a>
          </div>
        </section>

        {/* Topics */}
        <section className="max-w-4xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topics.map((t, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                    <span className="text-sm text-gray-700">{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="text-amber-800 font-semibold mb-1">📋 Full Syllabus Coming Soon</p>
                <p className="text-amber-700 text-sm">The complete course curriculum is being finalized. Contact us to get notified when enrollment opens or to request the full syllabus.</p>
              </div>
            </div>
            <aside>
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sticky top-24">
                <div className="text-center mb-5">
                  <span className="text-4xl">🐳</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">DevOps Engineering</h3>
                  <p className="text-gray-500 text-sm mt-1">Online Course · Nepal</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  <li className="flex justify-between"><span className="font-medium text-gray-700">Mode</span> <span>Online / In-person</span></li>
                  <li className="flex justify-between"><span className="font-medium text-gray-700">Certificate</span> <span>Yes ✅</span></li>
                  <li className="flex justify-between"><span className="font-medium text-gray-700">Language</span> <span>Nepali / English</span></li>
                </ul>
                <a href="/register" className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md">
                  Enroll Now — Free Sign Up
                </a>
                <a href="/contact" className="block w-full text-center text-indigo-600 font-medium py-2.5 text-sm mt-2">Have questions? Contact Us →</a>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
