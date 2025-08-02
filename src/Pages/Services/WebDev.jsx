import Footer from '../../components/Footer';
import Navigation from "../../components/Navigation";
import WebImg from "../../assets/ServicesImg/software-dev.png";

export default function WebDev() {
    return (
        <main className="m-0 ">
            <Navigation />

            <section className="h-screen flex flex-col lg:flex-row items-center justify-around p-6 md:justify-between max-w-10/12 mx-auto">
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
                        A1 IT Innovation can help you build complex and high-end web applications and portals as per
                        your needs. With our experience and professional skills, we can create a smooth and navigable
                        structure that is user-friendly, effective, and most importantly, error-free. Our technically
                        strong web development team adheres to best coding practices, maintains high-quality standards,
                        and delivers high-performing web solutions. Our developers carefully code each page to ensure it
                        is responsive and compatible with multiple browsers and platforms. Our QA team also thoroughly
                        tests your system before it is launched.
                    </p>
                </div>

                <div className="max-w-[900px] m-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Our Web Development Services</h2>
                    <ul className="list-none text-gray-700 leading-relaxed flex flex-wrap justify-center gap-8">
                        {/* List items - each with icon and text */}
                        <li className="flex items-center gap-2">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-indigo-600" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
                            Custom Web Application Development
                        </li>
                        {/* Repeat other list items here similarly... */}
                    </ul>
                </div>

                {/* Key Features Section */}
                <div>
                    <h2 className="text-3xl font-semibold text-center">Key Features</h2>
                    <div className="mt-8 flex flex-wrap gap-8 justify-center">
                        {/* Feature cards */}
                        <div className="rounded-sm shadow-lg bg-white p-4 flex flex-col gap-2 w-80 cursor-pointer transition-all hover:shadow-2xl hover:scale-105">
                            <div>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-indigo-600" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path></svg>
                            </div>
                            <div>
                                <h3 className="uppercase text-md font-semibold">Responsive layout</h3>
                                <p className="text-sm">Our mobile design team strives to create a positive user experience with a responsive layout that renders well on any screen size, platform, and orientation.</p>
                            </div>
                        </div>

                        {/* Add other feature cards similarly here */}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
