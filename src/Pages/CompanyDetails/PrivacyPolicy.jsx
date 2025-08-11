
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 ">
            <Navigation />
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 my-4">
                <header className="mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-900">Privacy Policy</h1>
                    <p className="mt-1 text-sm text-gray-600">A. One .IT Innovation Pvt. Ltd. (Brand name: A1 IT Innovation)</p>
                    <p className="mt-1 text-sm text-gray-500">Last Updated: <span className="font-medium">2025</span></p>
                </header>

                <section className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        A. One .IT Innovation Pvt. Ltd. ("we", "our", "us"), operating under the brand name <strong>A1 IT Innovation</strong>,
                        values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use
                        our website or services.
                    </p>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>
                                <strong>Personal Information:</strong> Name, email address, phone number, and resume/CV (for job or internship
                                applications).
                            </li>
                            <li>
                                <strong>Login Information:</strong> If you use Google Sign-In, we may receive your basic profile info (name, email,
                                profile picture).
                            </li>
                            <li>
                                <strong>Service-related Data:</strong> Information you provide when requesting our IT services.
                            </li>
                            <li>
                                <strong>Automatic Information:</strong> IP address, browser type, device details, and cookies for functionality and
                                analytics.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h2>
                        <p className="mt-2">We use your information to:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Provide and improve our IT services.</li>
                            <li>Process job and internship applications.</li>
                            <li>Communicate regarding updates, offers, or application status.</li>
                            <li>Maintain website security.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">3. Sharing of Information</h2>
                        <p className="mt-2">We do not sell your data. Information may only be shared:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>With trusted partners (e.g., hosting, email, analytics) to deliver our services.</li>
                            <li>When required by law.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">4. Google Sign-In</h2>
                        <p className="mt-2">Google Sign-In is used <strong>only</strong> for authentication. We do <strong>not</strong> access your Gmail,
                            contacts, or other Google data.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">5. Access to Client Systems</h2>
                        <p className="mt-2">If you provide us access to your accounts, servers, or other systems for project work:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>We will handle your data securely and only for agreed purposes.</li>
                            <li>We will not share or misuse your credentials.</li>
                            <li>We will take all reasonable measures to protect your data.</li>
                        </ul>
                        <p className="mt-2 font-medium">However, we are not responsible for:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Pre-existing issues in your systems.</li>
                            <li>Changes made by you or third parties.</li>
                            <li>External threats such as hacking, malware, or hosting failures.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">6. Data Security</h2>
                        <p className="mt-2">We use reasonable security practices to protect your data from unauthorized access, alteration, or loss.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">7. Your Rights</h2>
                        <p className="mt-2">You may request to view, update, or delete your personal data by contacting us at the details below.</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">8. Changes to This Policy</h2>
                        <p className="mt-2">We may update this Privacy Policy from time to time. Changes will be posted on this page.</p>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
