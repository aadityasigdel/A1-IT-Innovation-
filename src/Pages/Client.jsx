import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import Laptop from "../assets/laptop.png"
import Birhat from "../assets/Clients/brihat.webp"
import damakcampus from "../assets/Clients/dmc.jpg"
import Shree from "../assets/Clients/dtef.jpg"
import Utkrista from "../assets/Clients/utkrista Logo.png"
import Hamrodokan from "../assets/Clients/hamrodokan Logo.png"
import himalayan from "../assets/Clients/himalayan.webp"
import Tufan from "../assets/Clients/tufan.png"

export default function Client() {
    return (
        <>
            <Navigation />
            <main class="min-h-screen pt-10 mb-10 bg-gray-100">
                {/* Hero Section */}
                <section className="container  justify-center h-screen flex  mx-auto px-4 py-12">
                    <div className="flex max-w-6xl flex-col-reverse md:flex-row items-center gap-12">
                        <div className="w-full  md:w-1/2 flex flex-col gap-6">
                            <h1 className="text-4xl font-bold text-gray-800">Your Trusted IT Partner</h1>
                            <h2 className="text-2xl font-semibold text-indigo-600">Innovating Today for a Better Tomorrow</h2>
                            <p className="text-gray-600 text-lg leading-relaxed w-11/12">
                                At A1 IT Innovation, we empower businesses to overcome modern IT challenges with innovative solutions and expert guidance.
                                Discover how we help organizations achieve their goals through tailored, cutting-edge technologies.
                            </p>
                            <a href="/contact"
                                className="bg-indigo-600 w-fit hover:bg-indigo-700 text-white px-6 py-3 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300 inline-flex items-center">
                                Get in Touch
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>

                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                alt="Laptop showcasing IT solutions"
                                loading="lazy"
                                width="500"
                                height="350"
                                decoding="async"
                                className="rounded-xl border-4 border-white transform  transition duration-500"
                                src={Laptop}
                            />
                        </div>
                    </div>
                </section>
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Esteemed Clients</h2>
                            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                We're proud to collaborate with these innovative organizations
                            </p>
                        </div>

                        {/* Clients Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 px-4">
                            {[
                                { logo: Hamrodokan, url: "#", alt: "Hamrodokan", name: "Hamro Dokan" },
                                { logo: damakcampus, url: "https://damakcampus.edu.np/", alt: "Damak Multiple Campus", name: "Damak Campus" },
                                { logo: himalayan, url: "https://himalayan-sanchaya.vercel.app/", alt: "Himalayan Sanchaya", name: "Himalayan Sanchaya" },
                                { logo: Shree, url: "https://damaktechnical.edu.np/", alt: "Damak Technical Education Foundation", name: "DTEF" },
                                { logo: Birhat, url: "https://play.google.com/store/apps/details?id=com.nepaliyogi.brihatpatro", alt: "Brihat Patro", name: "Brihat Patro" },
                                { logo: Utkrista, url: "https://utkristashikshya.com/", alt: "Utkrista Shikshya", name: "Utkrista" },
                                { logo: Tufan, url: "#", alt: "Tufan Transport", name: "Tufan Transport" }
                            ].map((client, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <a
                                        href={client.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex justify-center items-center w-32 h-32 p-6 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-indigo-200 transform group-hover:-translate-y-2"
                                    >
                                        <img
                                            alt={`Logo of ${client.alt}`}
                                            className="object-contain w-full h-full transition duration-300 group-hover:scale-110"
                                            src={client.logo}
                                            loading="lazy"
                                        />
                                    </a>
                                    <p className="mt-4 text-center text-gray-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {client.name}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Auto-scrolling Carousel for Mobile */}
                        <div className="mt-12 md:hidden relative overflow-hidden">
                            <div className="flex animate-marquee whitespace-nowrap">
                                {[Hamrodokan, damakcampus, himalayan, Shree, Birhat, Utkrista, Tufan].map((logo, index) => (
                                    <div key={index} className="inline-flex justify-center items-center mx-4 w-24 h-24 p-4 bg-white rounded-full shadow-sm">
                                        <img
                                            src={logo}
                                            alt={`Client logo ${index}`}
                                            className="object-contain w-full h-full"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                                {/* Duplicate for seamless looping */}
                                {[Hamrodokan, damakcampus, himalayan, Shree, Birhat, Utkrista, Tufan].map((logo, index) => (
                                    <div key={`dup-${index}`} className="inline-flex justify-center items-center mx-4 w-24 h-24 p-4 bg-white rounded-full shadow-sm">
                                        <img
                                            src={logo}
                                            alt={`Client logo ${index}`}
                                            className="object-contain w-full h-full"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>



            </main>

            <Footer />
        </>
    )
}