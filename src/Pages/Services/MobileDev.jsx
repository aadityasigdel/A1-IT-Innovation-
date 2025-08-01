import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Mobile from "../../assets/ServicesImg/mobile-app.png";

export default function MobileDev() {
    return (
        <div>
            <Navigation />
            <main className="min-h-screen">
               <section className="h-screen flex flex-col lg:flex-row items-center justify-around p-6 md:justify-between max-w-10/12 mx-auto">
                    <div className="flex flex-col gap-6 max-w-lg text-center lg:text-left">
                        <div>
                            <h1 className="text-2xl md:text-4xl font-bold">
                                Want to build a high-performing iOS or Android mobile
                                application?
                            </h1>
                            <h1 className="text-xl md:text-2xl font-medium mt-1">
                                Your search ends here. We are here to address your needs.
                            </h1>
                        </div>
                        <a
                            href="/contact"
                            className="bg-indigo-600 text-white font-semibold text-center px-6 py-3 rounded hover:bg-indigo-700 transition duration-300"
                        >
                            Get in touch
                        </a>
                    </div>
                    <div className="mt-8 lg:mt-0 w-full flex justify-center lg:w-auto">
                        <img
                            alt="mobile app development"
                            loading="lazy"
                            width="400"
                            height="500"
                            decoding="async"
                            className="rounded"
                            style={{ color: "transparent" }}
                            src={Mobile}
                        />
                    </div>
                </section>

                <section className="flex flex-col gap-20 py-20">
                    <div className="max-w-[900px] m-auto">
                        <h2 className="text-2xl font-semibold text-center mb-4">
                            Mobile Application Development
                        </h2>
                        <p className="text-gray-700 text-center">
                            Mobile app is the latest trend that has emerged and taken the
                            market. Being a leading mobile app development company in Nepal,
                            A1 IT Innovation can develop custom apps according to your needs.
                            Our professional team possesses expertise in designing and
                            developing both iOS and android apps, handling the entire
                            development process from initial ideation to Google Play Store and
                            iOS App Store submission by following agile methodologies. Our QA
                            team ensures that the app developed is tested and bug-free, and
                            our support team is always there to assist even after the project
                            is delivered.
                        </p>
                    </div>

                    <div className="flex flex-col gap-20 py-20 bg-gray-100">
                        <div className="max-w-[900px] m-auto text-center">
                            <h2 className="text-3xl font-semibold mb-6">
                                Mobile Development Services
                            </h2>
                            <ul className="list-none text-gray-700 leading-relaxed flex flex-wrap justify-center gap-8">
                                <li className="flex items-center gap-2 max-w-xs">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 320 512"
                                        className="text-indigo-600"
                                        height="24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                                    </svg>
                                    Custom Mobile Application Development
                                </li>

                                <li className="flex items-center gap-2 max-w-xs">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 320 512"
                                        className="text-indigo-600"
                                        height="24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                                    </svg>
                                    iPhone Application Development (iOS)
                                </li>

                                <li className="flex items-center gap-2 max-w-xs">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 320 512"
                                        className="text-indigo-600"
                                        height="24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                                    </svg>
                                    Android Application Development
                                </li>

                                <li className="flex items-center gap-2 max-w-xs">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 320 512"
                                        className="text-indigo-600"
                                        height="24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                                    </svg>
                                    Enterprise Mobile Application Development
                                </li>

                                <li className="flex items-center gap-2 max-w-xs">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 320 512"
                                        className="text-indigo-600"
                                        height="24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                                    </svg>
                                    React Native Application Development
                                </li>

                                <li className="flex items-center gap-2 max-w-xs">
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 320 512"
                                        className="text-indigo-600"
                                        height="24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                                    </svg>
                                    UI/UX Designing for Mobile Apps
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-center">Key Features</h2>
                        <div className="mt-4 flex flex-wrap gap-4 justify-center">
                            {/* Feature card 1 */}
                            <div className="rounded-sm shadow-lg bg-white p-4 flex flex-col gap-2 w-80 cursor-pointer transition-all hover:shadow-2xl hover:scale-105">
                                <div>
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
                                        <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="uppercase text-md font-semibold">
                                        User-friendly design
                                    </h3>
                                    <p className="text-sm">
                                        At A1 IT Innovation, we always deliver designs that provide a
                                        great user experience.
                                    </p>
                                </div>
                            </div>

                            {/* Feature card 2 */}
                            <div className="rounded-sm shadow-lg bg-white p-4 flex flex-col gap-2 w-80 cursor-pointer transition-all hover:shadow-2xl hover:scale-105">
                                <div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 448 512"
                                        className="text-indigo-600"
                                        height="40"
                                        width="40"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M144 320h160v-64H144v64zm0 64h160v-32H144v32zm304-64c0 17.7-14.3 32-32 32h-32v48c0 26.5-21.5 48-48 48H96c-26.5 0-48-21.5-48-48v-48H16c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h368c17.7 0 32 14.3 32 32v32zM88 336c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="uppercase text-md font-semibold">
                                        Full-cycle mobile development
                                    </h3>
                                    <p className="text-sm">
                                        We manage the full development cycle of your app, from
                                        design to deployment.
                                    </p>
                                </div>
                            </div>

                            {/* Feature card 3 */}
                            <div className="rounded-sm shadow-lg bg-white p-4 flex flex-col gap-2 w-80 cursor-pointer transition-all hover:shadow-2xl hover:scale-105">
                                <div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 448 512"
                                        className="text-indigo-600"
                                        height="40"
                                        width="40"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M224 32c-17.7 0-32 14.3-32 32v96H96c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h96v96c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-96v-96c0-17.7-14.3-32-32-32h-64z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="uppercase text-md font-semibold">
                                        Cross-platform compatibility
                                    </h3>
                                    <p className="text-sm">
                                        Apps that work smoothly on iOS and Android devices.
                                    </p>
                                </div>
                            </div>

                            {/* Feature card 4 */}
                            <div className="rounded-sm shadow-lg bg-white p-4 flex flex-col gap-2 w-80 cursor-pointer transition-all hover:shadow-2xl hover:scale-105">
                                <div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        className="text-indigo-600"
                                        height="40"
                                        width="40"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M479.7 168.3c-5.4-13.6-17.6-22.9-32.2-22.9H355.3c-19.3 0-36.2 13.1-41.4 31.9l-13.1 48.3c-9.2-5-19.8-7.7-30.8-7.7-38.9 0-70.5 35.1-63.2 74.9l14.1 79.3c1.4 8.1 8 14 16.1 14h119.4c7.6 0 14.3-5.3 15.7-12.8l24.1-143.2c2-12-6.5-23.7-18.7-27.8zM248.2 261.7l-10.1-9.6 10.1-9.6 10.1 9.6-10.1 9.6z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="uppercase text-md font-semibold">
                                        Fast & reliable performance
                                    </h3>
                                    <p className="text-sm">
                                        Our apps load fast and provide smooth user experiences.
                                    </p>
                                </div>
                            </div>

                            {/* Feature card 5 */}
                            <div className="rounded-sm shadow-lg bg-white p-4 flex flex-col gap-2 w-80 cursor-pointer transition-all hover:shadow-2xl hover:scale-105">
                                <div>
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
                                        <path d="M96 0c-53 0-96 43-96 96v320c0 53 43 96 96 96h320c53 0 96-43 96-96V96c0-53-43-96-96-96H96zm112 448H96c-26.5 0-48-21.5-48-48v-48h160v96zm-96-224v-32h64v32H112zm64-80H96v32h80v-32zm272 240c0 26.5-21.5 48-48 48H240v-96h160v48zm-160-144v-32h64v32h-64zm0-80v-32h64v32h-64zm160-16c-8.8 0-16 7.2-16 16v96h32v-96c0-8.8-7.2-16-16-16z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="uppercase text-md font-semibold">
                                        Secure app development
                                    </h3>
                                    <p className="text-sm">
                                        We prioritize security in all our mobile app projects.
                                    </p>
                                </div>
                            </div>

                            {/* Feature card 6 */}
                            <div className="rounded-sm shadow-lg bg-white p-4 flex flex-col gap-2 w-80 cursor-pointer transition-all hover:shadow-2xl hover:scale-105">
                                <div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 576 512"
                                        className="text-indigo-600"
                                        height="40"
                                        width="40"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M272 0c-17.7 0-32 14.3-32 32v80H176c-26.5 0-48 21.5-48 48v32h-40c-22.1 0-40 17.9-40 40v80c0 22.1 17.9 40 40 40h40v32c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48v-32h40c22.1 0 40-17.9 40-40v-80c0-22.1-17.9-40-40-40h-40v-32c0-26.5-21.5-48-48-48h-64V32c0-17.7-14.3-32-32-32z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="uppercase text-md font-semibold">
                                        Agile development methodology
                                    </h3>
                                    <p className="text-sm">
                                        We use agile development for flexible and fast app delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
