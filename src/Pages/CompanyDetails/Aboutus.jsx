import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"

export default function Aboutus() {
    return (
        <>
            <Navigation/>
            <main class="min-h-screen mb-10 bg-gray-50">
                <section class="py-10 px-4">

                    <h1 class="text-3xl font-bold text-center">About Us</h1>
                    <p class="text-lg max-w-xl mx-auto text-center text-gray-700 font-semibold mt-4">
                        Empowering digital transformation through innovative technology solutions.
                    </p>

                    <div class="border-t-2 border-indigo-600 pt-6 mt-6 max-w-3xl mx-auto text-gray-700 text-justify space-y-4">
                        <p>
                            At A1 IT Innovation, we are a pioneering force in the digital landscape, dedicated to providing cutting-edge software solutions that empower businesses and individuals alike.
                        </p>
                        <p>
                            With a foundation built on expertise and innovation, our team excels in crafting custom applications and systems that meet the evolving needs of our clients. Our mission is to deliver excellence and drive digital transformation.
                        </p>
                        <p>
                            Our diverse team of professionals, comprising skilled engineers, creative thinkers, and strategic planners, is united by a shared passion for technology and a commitment to delivering value to our clients every day.
                        </p>
                    </div>


                    <div class="pt-12">
                        <h2 class="text-center text-3xl font-bold">Our Core Beliefs</h2>
                        <div class="mt-8 flex flex-wrap justify-center gap-6">

                            <div class="w-[340px] border-l-4 border-indigo-600 bg-white shadow-lg p-5 rounded-lg space-y-2">
                                <h3 class="text-xl font-bold">Innovation</h3>
                                <p class="text-gray-700 text-justify">We embrace change and are committed to developing innovative solutions that push boundaries.</p>
                            </div>
                            <div class="w-[340px] border-l-4 border-indigo-600 bg-white shadow-lg p-5 rounded-lg space-y-2">
                                <h3 class="text-xl font-bold">Collaboration</h3>
                                <p class="text-gray-700 text-justify">We believe in the power of teamwork where diverse ideas come together.</p>
                            </div>
                            <div class="w-[340px] border-l-4 border-indigo-600 bg-white shadow-lg p-5 rounded-lg space-y-2">
                                <h3 class="text-xl font-bold">Integrity</h3>
                                <p class="text-gray-700 text-justify">We are guided by honesty, transparency, and a strong ethical compass.</p>
                            </div>
                            <div class="w-[340px] border-l-4 border-indigo-600 bg-white shadow-lg p-5 rounded-lg space-y-2">
                                <h3 class="text-xl font-bold">Continuous Learning</h3>
                                <p class="text-gray-700 text-justify">We encourage personal and professional growth through learning and mentorship.</p>
                            </div>
                            <div class="w-[340px] border-l-4 border-indigo-600 bg-white shadow-lg p-5 rounded-lg space-y-2">
                                <h3 class="text-xl font-bold">Resilience</h3>
                                <p class="text-gray-700 text-justify">We tackle challenges head-on and stay committed to excellence.</p>
                            </div>
                            <div class="w-[340px] border-l-4 border-indigo-600 bg-white shadow-lg p-5 rounded-lg space-y-2">
                                <h3 class="text-xl font-bold">Customer-Centricity</h3>
                                <p class="text-gray-700 text-justify">Our customers are at the heart of everything we do.</p>
                            </div>
                            <div class="w-[340px] border-l-4 border-indigo-600 bg-white shadow-lg p-5 rounded-lg space-y-2">
                                <h3 class="text-xl font-bold">Empathy</h3>
                                <p class="text-gray-700 text-justify">We prioritize understanding people to build meaningful solutions.</p>
                            </div>
                            <div class="w-[340px] border-l-4 border-indigo-600 bg-white shadow-lg p-5 rounded-lg space-y-2">
                                <h3 class="text-xl font-bold">Equity</h3>
                                <p class="text-gray-700 text-justify">We foster fairness and inclusion in everything we do.</p>
                            </div>
                            <div class="w-[340px] border-l-4 border-indigo-600 bg-white shadow-lg p-5 rounded-lg space-y-2">
                                <h3 class="text-xl font-bold">Respect</h3>
                                <p class="text-gray-700 text-justify">Every voice matters, and we treat all with dignity.</p>
                            </div>
                            <div class="w-[340px] border-l-4 border-indigo-600 bg-white shadow-lg p-5 rounded-lg space-y-2">
                                <h3 class="text-xl font-bold">Joyful Workplace</h3>
                                <p class="text-gray-700 text-justify">We create an enjoyable space where creativity and motivation thrive.</p>
                            </div>
                        </div>
                    </div>


                    <div class="pt-12">
                        <h2 class="text-center text-3xl font-bold">Our Team</h2>
                        <div class="mt-8 flex flex-wrap justify-center gap-8">

                            <div class="w-[260px] bg-white shadow-lg p-6 rounded-lg text-center">
                                <img src="/leaders/1.jpg" alt="Sandip Chapagain" class="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                                <h3 class="text-xl font-bold text-indigo-800">Sandip Chapagain</h3>
                                <p class="text-gray-600 text-sm">Founder & CEO (Java Developer)</p>
                            </div>
                            <div class="w-[260px] bg-white shadow-lg p-6 rounded-lg text-center">
                                <img src="/leaders/4.jpeg" alt="Ashok Thapa" class="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                                <h3 class="text-xl font-bold text-indigo-800">Ashok Thapa</h3>
                                <p class="text-gray-600 text-sm">Co-Founder & Fullstack Developer</p>
                            </div>
                            <div class="w-[260px] bg-white shadow-lg p-6 rounded-lg text-center">
                                <img src="/leaders/7.jpg" alt="Alish Karki" class="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                                <h3 class="text-xl font-bold text-indigo-800">Alish Karki</h3>
                                <p class="text-gray-600 text-sm">Django Developer</p>
                            </div>
                            <div class="w-[260px] bg-white shadow-lg p-6 rounded-lg text-center">
                                <img src="/leaders/bishwas.png" alt="Bishwas Limbu" class="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                                <h3 class="text-xl font-bold text-indigo-800">Bishwas Limbu</h3>
                                <p class="text-gray-600 text-sm">UI/UX Designer</p>
                            </div>
                            <div class="w-[260px] bg-white shadow-lg p-6 rounded-lg text-center">
                                <img src="/leaders/graphic.jpeg" alt="Suraj Rai" class="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                                <h3 class="text-xl font-bold text-indigo-800">Suraj Rai</h3>
                                <p class="text-gray-600 text-sm">Graphic Designer</p>
                            </div>
                            <div class="w-[260px] bg-white shadow-lg p-6 rounded-lg text-center">
                                <img src="/leaders/sourav.jpeg" alt="Saurav Rijal" class="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                                <h3 class="text-xl font-bold text-indigo-800">Saurav Rijal</h3>
                                <p class="text-gray-600 text-sm">Graphic Designer</p>
                            </div>
                            <div class="w-[260px] bg-white shadow-lg p-6 rounded-lg text-center">
                                <img src="/leaders/anmol.jpeg" alt="Anmol Adhikari" class="w-28 h-28 rounded-full mx-auto mb-4 object-cover" />
                                <h3 class="text-xl font-bold text-indigo-800">Anmol Adhikari</h3>
                                <p class="text-gray-600 text-sm">Graphic Designer</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        <Footer/>
        </>
    )
}