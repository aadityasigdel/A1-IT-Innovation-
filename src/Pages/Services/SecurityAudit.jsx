import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SecurityAuditImg from "../../assets/ServicesImg/security-testing.svg";

export default function SecurityAudit() {
    return (
        <main className="min-h-screen ">
            <Navigation />
            <section className="h-screen flex flex-col lg:flex-row items-center justify-around p-6 md:justify-between max-w-10/12 mx-auto">
                <div className="flex flex-col gap-10 max-w-lg text-center lg:text-left">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold">
                            Conduct a comprehensive security audit to safeguard your digital assets.
                        </h1>
                        <h1 className="text-xl md:text-2xl font-medium mt-1">
                            We are here to protect your business from vulnerabilities and threats.
                        </h1>
                    </div>
                    <a
                        href="/contact"
                        className="bg-indigo-600 w-fit text-center text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition duration-300"
                    >
                        Get in touch
                    </a>
                </div>
                <div className="mt-8 lg:mt-0">
                    <img
                        alt="mobile app development"
                        loading="lazy"
                        width={400}
                        height={500}
                        decoding="async"
                        className="rounded"
                        style={{ color: "transparent" }}
                        src={SecurityAuditImg}
                    />
                </div>
            </section>

            <section className="flex flex-col gap-20">
                <div className="max-w-[900px] m-auto">
                    <h2 className="text-2xl font-semibold text-center mb-4">Security Audit</h2>
                    <p className="text-gray-700 text-center">
                        At A1 IT Innovation, we offer comprehensive security audit services to ensure your systems are secure and resilient.
                        Our experts meticulously analyze your infrastructure to identify vulnerabilities, provide actionable insights,
                        and ensure compliance with industry standards. Our goal is to protect your data and systems from potential threats and breaches.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-center">Key Features</h2>
                    <div className="mt-4 flex flex-wrap gap-4 justify-center">
                        {[
                            {
                                title: "Vulnerability Assessment",
                                description:
                                    "Identify and mitigate potential vulnerabilities in your system before they can be exploited.",
                                icon: (
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-indigo-600"
                                        height="40"
                                        width="40"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0V0z" />
                                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Compliance Checks",
                                description:
                                    "Ensure your systems comply with industry standards and regulations to avoid legal and financial penalties.",
                                icon: (
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-indigo-600"
                                        height="40"
                                        width="40"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Penetration Testing",
                                description:
                                    "Simulate real-world attacks to test the effectiveness of your security measures and identify weaknesses.",
                                icon: (
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-indigo-600"
                                        height="40"
                                        width="40"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M20.38 8.57l-1.23 1.85a8 8 0 01-.22 7.58H5.07A8 8 0 0115.58 6.85l1.85-1.23A10 10 0 003.35 19a2 2 0 001.72 1h13.85a2 2 0 001.74-1 10 10 0 00-.27-10.44zm-9.79 6.84a2 2 0 002.83 0l5.66-8.49-8.49 5.66a2 2 0 000 2.83z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Risk Management",
                                description:
                                    "Develop a comprehensive risk management strategy to protect your business from potential threats.",
                                icon: (
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        className="text-indigo-600"
                                        height="40"
                                        width="40"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M11.71 17.99A5.993 5.993 0 016 12c0-3.31 2.69-6 6-6 3.22 0 5.84 2.53 5.99 5.71l-2.1-.63a3.999 3.999 0 10-4.81 4.81l.63 2.1zM22 12c0 .3-.01.6-.04.9l-1.97-.59c.01-.1.01-.21.01-.31 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c.1 0 .21 0 .31-.01l.59 1.97c-.3.03-.6.04-.9.04-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10zm-3.77 4.26L22 15l-10-3 3 10 1.26-3.77 4.27 4.27 1.98-1.98-4.28-4.26z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Continuous Monitoring",
                                description:
                                    "Implement continuous monitoring solutions to detect and respond to security incidents in real-time.",
                                icon: (
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 640 512"
                                        className="text-indigo-600"
                                        height="40"
                                        width="40"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
                                    </svg>
                                ),
                            },
                        ].map(({ title, description, icon }) => (
                            <div
                                key={title}
                                className="rounded-sm shadow-lg bg-white p-4 flex flex-col gap-2 w-80 cursor-pointer transition-all hover:shadow-2xl hover:scale-105"
                            >
                                <div>{icon}</div>
                                <div>
                                    <h3 className="uppercase text-md font-semibold">{title}</h3>
                                    <p className="text-sm">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
