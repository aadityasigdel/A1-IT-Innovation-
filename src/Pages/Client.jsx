import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import Laptop from "../assets/laptop.png"


export default function Client() {
    return (
        <>
            <Navigation />
            <main class="min-h-screen pt-10 mb-10 bg-gray-100">

                <section class="container mx-auto px-4">
                    <div class="flex flex-col-reverse md:flex-row justify-center items-center gap-8">

                        <div class="w-full md:w-1/2 flex flex-col items-start gap-4">
                            <h1 class="text-3xl font-bold">Your Trusted IT Partner</h1>
                            <h2 class="text-xl font-semibold">Innovating Today for a Better Tomorrow</h2>
                            <p class="text-gray-500 text-base">
                                At A1 IT Innovation, we empower businesses to overcome modern IT challenges with innovative solutions and expert guidance.
                                Discover how we help organizations achieve their goals through tailored, cutting-edge technologies.
                            </p>
                            <a href="/contact"
                                class="bg-indigo-700 text-white px-4 py-2 font-medium rounded hover:bg-indigo-800 transition duration-300">
                                Get in Touch
                            </a>
                        </div>

                        <div class="w-full md:w-1/2 flex justify-center md:justify-end">
                            <img
                                alt="Laptop showcasing IT solutions"
                                loading="lazy"
                                width="450"
                                height="300"
                                decoding="async"
                                class="rounded-lg"
                                src={Laptop}
                            />
                        </div>
                    </div>
                </section>

                <section class="py-10">
                    <h2 class="text-4xl font-bold text-center capitalize mb-8">Our Esteemed Clients</h2>

                    <div class="swiper-container overflow-hidden">
                        <div class="swiper-wrapper flex gap-6 justify-center">


                            <div class="swiper-slide">
                                <a href="#" target="_blank" rel="noopener noreferrer"
                                    class="flex justify-center items-center w-40 h-40 p-4 bg-white rounded-full shadow-sm overflow-hidden">
                                    <img alt="Logo of Hamrodokan" class="object-contain" src="/_next/image?url=%2Fclients%2Fhamrodokan.png&amp;w=640&amp;q=75" />
                                </a>
                            </div>

                            <div class="swiper-slide">
                                <a href="https://damakcampus.edu.np/" target="_blank" rel="noopener noreferrer"
                                    class="flex justify-center items-center w-40 h-40 p-4 bg-white rounded-full shadow-sm overflow-hidden">
                                    <img alt="Logo of Damak Multiple Campus" class="object-contain" src="/_next/image?url=%2Fclients%2Fdmc.jpg&amp;w=640&amp;q=75" />
                                </a>
                            </div>

                            <div class="swiper-slide">
                                <a href="https://himalayan-sanchaya.vercel.app/" target="_blank" rel="noopener noreferrer"
                                    class="flex justify-center items-center w-40 h-40 p-4 bg-white rounded-full shadow-sm overflow-hidden">
                                    <img alt="Logo of Himalayan Sanchaya" class="object-contain" src="/_next/image?url=%2Fclients%2Fhimalayan.webp&amp;w=640&amp;q=75" />
                                </a>
                            </div>


                            <div class="swiper-slide">
                                <a href="https://damaktechnical.edu.np/" target="_blank" rel="noopener noreferrer"
                                    class="flex justify-center items-center w-40 h-40 p-4 bg-white rounded-full shadow-sm overflow-hidden">
                                    <img alt="Logo of Damak Technical Education Foundation" class="object-contain" src="/_next/image?url=%2Fclients%2Fdtef.jpg&amp;w=640&amp;q=75" />
                                </a>
                            </div>


                            <div class="swiper-slide">
                                <a href="https://play.google.com/store/apps/details?id=com.nepaliyogi.brihatpatro" target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex justify-center items-center w-40 h-40 p-4 bg-white rounded-full shadow-sm overflow-hidden">
                                    <img alt="Logo of Brihat Patro" class="object-contain" src="/_next/image?url=%2Fclients%2Fbrihat.webp&amp;w=640&amp;q=75" />
                                </a>
                            </div>


                            <div class="swiper-slide">
                                <a href="https://utkristashikshya.com/" target="_blank" rel="noopener noreferrer"
                                    class="flex justify-center items-center w-40 h-40 p-4 bg-white rounded-full shadow-sm overflow-hidden">
                                    <img alt="Logo of Utkrista Shikshya" class="object-contain" src="/_next/image?url=%2Fclients%2Futkrista.png&amp;w=640&amp;q=75" />
                                </a>
                            </div>


                            <div class="swiper-slide">
                                <a href="#" target="_blank" rel="noopener noreferrer"
                                    class="flex justify-center items-center w-40 h-40 p-4 bg-white rounded-full shadow-sm overflow-hidden">
                                    <img alt="Logo of Tufan Transport" class="object-contain" src="/_next/image?url=%2Fclients%2Ftufan.png&amp;w=640&amp;q=75" />
                                </a>
                            </div>

                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    )
}