import WebHosting from "../../assets/ServicesImg/web-hosting.jpg";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
export default function DomainHosting() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <section className="h-screen flex flex-col lg:flex-row items-center justify-around p-6 md:justify-between max-w-10/12 mx-auto">
                <div className="flex flex-col gap-10 max-w-lg text-center lg:text-left">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold">
                            Secure and reliable domain registration and hosting services.
                        </h1>
                        <h1 className="text-xl md:text-2xl font-medium mt-1">
                            We provide the infrastructure and support to keep your online presence robust and accessible.
                        </h1>
                    </div>
                    <button className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 transition duration-300">
                        Get in touch
                    </button>
                </div>

                <div className="mt-8 lg:mt-0">
                    <img
                        alt="domain registration and hosting"
                        loading="lazy"
                        width={400}
                        height={500}
                        decoding="async"
                        className="rounded"
                        style={{ color: "transparent" }}
                        src={WebHosting}
                    />
                </div>
            </section>

            <section className="flex flex-col gap-20">
                <div className="max-w-[900px] m-auto">
                    <h2 className="text-2xl font-semibold text-center mb-4">Domain Registration and Hosting Services</h2>
                    <p className="text-gray-700 text-center">
                        A1 IT Innovation offers comprehensive domain registration and hosting solutions tailored to meet your business needs.
                        Our services ensure your website is always secure, fast, and reliable. With our expert team, you can rest assured that your online presence is in good hands.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-center">Key Features</h2>
                    <div className="mt-4 flex flex-wrap gap-4 justify-center">

                        {/* Easy Domain Management */}
                        <div className="rounded-sm shadow-lg bg-white p-4 flex flex-col gap-2 w-80 cursor-pointer transition-all hover:shadow-2xl hover:scale-105">
                            <div>
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
                                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="uppercase text-md font-semibold">Easy Domain Management</h3>
                                <p className="text-sm">Manage your domains with ease using our user-friendly control panel.</p>
                            </div>
                        </div>

                        {/* Reliable Hosting */}
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
                                    <path d="M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="uppercase text-md font-semibold">Reliable Hosting</h3>
                                <p className="text-sm">Our hosting solutions ensure your website is always up and running with minimal downtime.</p>
                            </div>
                        </div>

                        {/* High Performance */}
                        <div className="rounded-sm shadow-lg bg-white p-4 flex flex-col gap-2 w-80 cursor-pointer transition-all hover:shadow-2xl hover:scale-105">
                            <div>
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
                            </div>
                            <div>
                                <h3 className="uppercase text-md font-semibold">High Performance</h3>
                                <p className="text-sm">Enjoy fast loading times and optimal performance with our advanced hosting infrastructure.</p>
                            </div>
                        </div>

                        {/* Top-notch Security */}
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
                                    <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="uppercase text-md font-semibold">Top-notch Security</h3>
                                <p className="text-sm">We provide robust security measures to protect your website from threats.</p>
                            </div>
                        </div>

                        {/* Scalable Solutions */}
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
                                    <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="uppercase text-md font-semibold">Scalable Solutions</h3>
                                <p className="text-sm">Our hosting services are scalable to meet the growing needs of your business.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
