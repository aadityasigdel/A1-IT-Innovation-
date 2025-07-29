import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import HeroImg from "../assets/hero.png"
import CircleImg from "../assets/circle.png"

export default function Home() {
    return (
        <>
            <Navigation />
            <body class="bg-white text-gray-800 font-sans">
                <main class="min-h-screen">

                    <section class="py-10">
                        <div class="max-w-[900px] mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
                            <div class="lg:w-1/2">
                                <h1 class="text-4xl font-bold mb-4 text-center lg:text-left">Your One Stop</h1>
                                <h2 class="text-3xl font-bold mb-4 text-indigo-600 uppercase text-center lg:text-left">IT Solution 🖥️</h2>
                                <p class="text-gray-500 text-justify mt-4">
                                    At A1 IT Innovation, we specialize in transforming your digital dreams into reality. Our cutting-edge software solutions simplify complexity and unlock business potential in today’s digital world.
                                </p>
                                <div class="flex flex-col md:flex-row gap-4 text-sm mt-4">
                                    <a href="/why" class="bg-indigo-600 text-white px-4 py-4 rounded shadow-md">Why A1 IT Innovation?</a>
                                    <a href="/about" class="bg-white border border-gray-200 px-4 py-4 rounded shadow-md">Learn More</a>
                                </div>
                            </div>
                            <div class="lg:w-1/2">
                                <img src={HeroImg} alt="Hero image of IT solutions" class="mx-auto lg:mx-0 w-full max-w-md" />
                            </div>
                        </div>
                    </section>


                    <section class="min-h-screen py-20 bg-gray-100">
                        <div class="max-w-6xl mx-auto px-4">
                            <h2 class="text-center text-3xl font-semibold mb-12 text-gray-800">We Offer the Following Services</h2>
                            <div class="flex flex-wrap justify-center gap-6">


                                <article class="shadow-custom bg-white w-[280px] h-[300px] md:w-[350px] p-4 flex flex-col justify-between items-center transition-all hover:scale-105 hover:shadow-lg">
                                    <svg class="text-blue-500" height="50" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" /></svg>
                                    <h3 class="font-semibold">Web Development</h3>
                                    <p class="text-gray-500 text-sm text-justify">We create fast, responsive, and secure websites that deliver performance and user satisfaction.</p>
                                    <a href="/web-development" class="bg-indigo-600 text-white py-2 px-4 rounded hover:animate-pulse flex items-center">
                                        <span>More</span>
                                        <svg class="ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                                    </a>
                                </article>

                                <article class="shadow-custom bg-white w-[280px] h-[300px] md:w-[350px] p-4 flex flex-col justify-between items-center transition-all hover:scale-105 hover:shadow-lg">
                                    <svg class="text-green-500" height="50" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" /></svg>
                                    <h3 class="font-semibold">Mobile App Development</h3>
                                    <p class="text-gray-500 text-sm text-justify">From idea to app store, we build engaging apps for Android and iOS platforms.</p>
                                    <a href="/mobile-development" class="bg-indigo-600 text-white py-2 px-4 rounded hover:animate-pulse flex items-center">
                                        <span>More</span>
                                        <svg class="ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                                    </a>
                                </article>

                                <article class="shadow-custom bg-white w-[280px] h-[300px] md:w-[350px] p-4 flex flex-col justify-between items-center transition-all hover:scale-105 hover:shadow-lg">
                                    <svg class="text-red-500" height="50" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,7 C19,7 14,14 6.5,14 C4.5,14 1,15 1,19 L1,23 L12,23 L12,19 C12,16.5 15,18 19,11 L17.5,9.5" /></svg>
                                    <h3 class="font-semibold">Internships</h3>
                                    <p class="text-gray-500 text-sm text-justify">Gain real-world experience with our guided internship programs in software, AI, and web tech.</p>
                                    <a href="/internships" class="bg-indigo-600 text-white py-2 px-4 rounded hover:animate-pulse flex items-center">
                                        <span>More</span>
                                        <svg class="ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                                    </a>
                                </article>

                                <article class="shadow-custom bg-white w-[280px] h-[300px] md:w-[350px] p-4 flex flex-col justify-between items-center transition-all hover:scale-105 hover:shadow-lg">
                                    <svg class="text-yellow-500" height="50" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
                                    <h3 class="font-semibold">Security Audit</h3>
                                    <p class="text-gray-500 text-sm text-justify">Protect your digital assets with our in-depth vulnerability assessments and security audits.</p>
                                    <a href="/security-audit" class="bg-indigo-600 text-white py-2 px-4 rounded hover:animate-pulse flex items-center">
                                        <span>More</span>
                                        <svg class="ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                                    </a>
                                </article>

                                <article class="shadow-custom bg-white w-[280px] h-[300px] md:w-[350px] p-4 flex flex-col justify-between items-center transition-all hover:scale-105 hover:shadow-lg">
                                    <svg class="text-purple-500" height="50" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1,21 L23,21 L23,3 L1,3 L1,21 Z" /></svg>
                                    <h3 class="font-semibold">Domain & Hosting</h3>
                                    <p class="text-gray-500 text-sm text-justify">Register your domain and host your business website on our fast, secure, and reliable servers.</p>
                                    <a href="/domain-hosting" class="bg-indigo-600 text-white py-2 px-4 rounded hover:animate-pulse flex items-center">
                                        <span>More</span>
                                        <svg class="ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                                    </a>
                                </article>

                            </div>
                        </div>
                    </section>


                    <section class="relative min-h-screen bg-indigo-900 text-white py-20">
                        <div class="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
                            <div class="lg:w-1/2">
                                <h2 class="text-2xl font-semibold mb-4">Who We Are</h2>
                                <p class="text-gray-300 mb-6">
                                    Founded in 2023, A1 IT Innovation is a leading provider of software development, training, and consulting. Our passionate team drives digital transformation through innovation, quality, and collaboration.
                                </p>
                                <a href="/about" class="font-semibold hover:underline">Learn More</a>
                                <div class="flex gap-8 mt-8">
                                    <div>
                                        <h3 class="text-3xl font-semibold">19+</h3>
                                        <span class="text-gray-300 text-sm">Projects Completed</span>
                                    </div>
                                    <div>
                                        <h3 class="text-3xl font-semibold">8+</h3>
                                        <span class="text-gray-300 text-sm">Team Members</span>
                                    </div>
                                    <div>
                                        <h3 class="text-3xl font-semibold">7+</h3>
                                        <span class="text-gray-300 text-sm">Clients</span>
                                    </div>
                                </div>
                            </div>
                            <div class="lg:w-1/2">
                                <img src={CircleImg} alt="Company statistics graph" class="mx-auto w-full max-w-xs" />
                            </div>
                        </div>
                    </section>
                </main>
            </body>


            <Footer />
        </>
    )
}