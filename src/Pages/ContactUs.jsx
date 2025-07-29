import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function ContactUS() {
    return (
        <>
            <Navigation />
            <main>
                <section class="min-h-screen my-10">
                    <form class="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
                        <h2 class="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                        <p class="mb-8 lg:mb-10 font-light text-center text-gray-500 text-sm md:text-lg">
                            Got a technical issue? Want to develop web or mobile apps? Questions about workshops or courses? Let us know.
                        </p>

                        <div class="space-y-6">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="info@a1itinnovation.com.np"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-indigo-500 focus:border-indigo-500"
                                    aria-label="Email address"
                                />
                            </div>

                            <div>
                                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    placeholder="Let us know how we can help you"
                                    class="block w-full p-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    aria-label="Subject"
                                />
                            </div>

                            <div>
                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    placeholder="Leave a comment..."
                                    class="block w-full p-3 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    aria-label="Message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                class="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </section>


                <div class="fixed top-4 right-4 transition-transform translate-x-full" id="toast-container">
                    <div
                        id="toast-warning"
                        class="flex items-center p-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow"
                        role="alert"
                    >
                        <div class="inline-flex justify-center items-center w-8 h-8 text-orange-500 bg-orange-100 rounded-lg">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                            </svg>
                            <span class="sr-only">Warning icon</span>
                        </div>
                        <div class="ml-3 text-sm font-normal">Your message was not sent.</div>
                        <button
                            type="button"
                            class="ml-auto bg-transparent text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5"
                            data-dismiss-target="#toast-warning"
                            aria-label="Close"
                            onclick="document.getElementById('toast-container').classList.add('translate-x-full');"
                        >
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}