import Footer from '../../components/Footer';
import Navigation from "../../components/Navigation";
import WebImg from "../../assets/ServicesImg/software-dev.png";

export default function WebDev() {
    return (
        <main className="m-0 ">
            <Navigation />

            <section className="h-screen flex flex-col lg:flex-row items-center justify-around p-6 md:justify-between max-w-7xl mx-auto">
                <div className="mt-5 md:mt-0 flex flex-col gap-6 max-w-lg text-center md:text-left md:max-w-none md:w-1/2">
                    <div className="animate-fade-in">
                        <h1 className="text-3xl md:text-5xl font-extrabold">
                            Build a High-Demand, Powerful Custom Web Application or Web Portal
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-medium mt-2">
                            We are here to serve and fulfill your needs through our dedication and expertise.
                        </h2>
                    </div>
                    <a
                        href="/contact"
                        className="text-white bg-indigo-600 font-semibold px-6 py-3 rounded shadow-lg hover:bg-indigo-500 transition duration-300 self-center md:self-start"
                    >
                        Get in touch
                    </a>
                </div>
                <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center animate-float">
                    <img
                        alt="mobile app development"
                        loading="lazy"
                        width="400"
                        height="500"
                        decoding="async"
                        className="rounded shadow-lg"
                        src={WebImg}
                        style={{ color: "transparent" }}
                    />
                </div>
            </section>

            <section className="flex flex-col gap-20 py-20 bg-gray-100">
                <div className="max-w-[900px] m-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Web Application Development</h2>
                    <p className="text-gray-700 leading-relaxed">
                        A1 IT Innovation can help you build complex and high-end web applications and portals as per your needs. With our experience and professional skills, we can create a smooth and navigable structure that is user-friendly, effective, and most importantly, error-free. Our technically strong web development team adheres to best coding practices, maintains high-quality standards, and delivers high-performing web solutions. Our developers carefully code each page to ensure it is responsive and compatible with multiple browsers and platforms. Our QA team also thoroughly tests your system before it is launched.
                    </p>
                </div>

                <div className="max-w-[900px] m-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Our Web Development Services</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-left max-w-3xl mx-auto px-4">
                        {[
                            "Custom Web Application Development",
                            "Web Portal Development",
                            "eCommerce Development",
                            "Content Management Systems (CMS)",
                            "Enterprise Web Application Development",
                            "Progressive Web App (PWA) Development",
                            "Single Page Application (SPA) Development",
                            "API Development and Integration",
                            "Website Maintenance and Support",
                            "UX/UI Design and Development",
                        ].map((service, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <svg
                                    className="text-indigo-600 mt-1"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-7.429 7.43a1 1 0 01-1.414 0L3.293 9.586a1 1 0 111.414-1.414L8.5 11.964l6.793-6.793a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Key Features Section */}
                <div>
                    <h2 className="text-3xl font-semibold text-center">Key Features</h2>
                    <div className="mt-8 flex flex-wrap gap-8 justify-center">

                        {/* Responsive layout */}
                        <div className="rounded-sm shadow-lg bg-white p-4 flex flex-col gap-2 w-80 cursor-pointer transition-all hover:shadow-2xl hover:scale-105">
                            <div>
                                <svg className="text-indigo-600" height="40" width="40" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM15 18H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" /></svg>
                            </div>
                            <div>
                                <h3 className="uppercase text-md font-semibold">Responsive layout</h3>
                                <p className="text-sm">Our mobile design team strives to create a positive user experience with a responsive layout that renders well on any screen size, platform, and orientation.</p>
                            </div>
                        </div>

                        {/* Simplicity */}
                        <div className="rounded-sm shadow-lg bg-white p-4 flex flex-col gap-2 w-80 cursor-pointer transition-all hover:shadow-2xl hover:scale-105">
                            <div>
                                <svg className="text-indigo-600" height="40" width="40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm1 15h-2v-2h2v2zm1.31-7.9-.95.32A1.49 1.49 0 0 0 12 11c-.83 0-1.5.67-1.5 1.5H9c0-1.2.84-2.21 1.94-2.46l1.06-.27A1.49 1.49 0 0 0 13.5 8c0-.83-.67-1.5-1.5-1.5S10.5 7.17 10.5 8H9a3 3 0 0 1 6 0c0 .8-.4 1.52-1.19 1.9z" /></svg>
                            </div>
                            <div>
                                <h3 className="uppercase text-md font-semibold">Simplicity</h3>
                                <p className="text-sm">One of the main reasons why people are moving towards mobile apps is simplicity, and this is what we take into account during our mobile app development.</p>
                            </div>
                        </div>

                        {/* Optimized speed & performance */}
                        <div className="rounded-sm shadow-lg bg-white p-4 flex flex-col gap-2 w-80 cursor-pointer transition-all hover:shadow-2xl hover:scale-105">
                            <div>
                                <svg className="text-indigo-600" height="40" width="40" fill="currentColor" viewBox="0 0 24 24"><path d="M17.63 5.84C16.37 4.61 14.74 4 13 4s-3.37.61-4.63 1.84C6.61 7.11 6 8.74 6 10.5s.61 3.39 1.84 4.66A6.513 6.513 0 0 0 13 17c1.76 0 3.39-.61 4.63-1.84C19.39 13.89 20 12.26 20 10.5s-.61-3.39-2.37-4.66zM12 15a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" /></svg>
                            </div>
                            <div>
                                <h3 className="uppercase text-md font-semibold">Optimized performance</h3>
                                <p className="text-sm">Reliable and high-performing mobile applications are what everyone needs, and we never compromise on it.</p>
                            </div>
                        </div>

                        {/* High security */}
                        <div className="rounded-sm shadow-lg bg-white p-4 flex flex-col gap-2 w-80 cursor-pointer transition-all hover:shadow-2xl hover:scale-105">
                            <div>
                                <svg className="text-indigo-600" height="40" width="40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zM11 14h2v2h-2v-2zm0-6h2v5h-2V8z" /></svg>
                            </div>
                            <div>
                                <h3 className="uppercase text-md font-semibold">High security</h3>
                                <p className="text-sm">Security is a top priority in mobile applications, and we never miss this at A1 IT Innovation.</p>
                            </div>
                        </div>

                    </div>
                </div>




            </section >
            <Footer />
        </main >
    );
}
