import { useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function ContactUS() {
    // State to manage form fields
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    });

    // UI state for submission process
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    // Update form input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');
        setSubmitSuccess(false);

        // Create FormData object for FormSubmit
        const payload = new FormData();
        payload.append('Email', formData.email);
        payload.append('Subject', formData.subject);
        payload.append('Message', formData.message);
        payload.append('_captcha', 'false');
        payload.append('_template', 'box');

        try {
            // Send POST request to FormSubmit
            const response = await fetch('https://formsubmit.co/info@a1itinnovation.com.np', {
                method: 'POST',
                body: payload
            });

            if (response.ok) {
                setSubmitSuccess(true);
                setFormData({ email: '', subject: '', message: '' });
            } else {
                setSubmitError('Something went wrong. Try again.');
            }
        } catch (err) {
            setSubmitError('Network error. Please try again later.',err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navigation />
            <main>
                <section className="min-h-screen my-10">
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-md w-full mx-auto p-6 bg-white rounded-xl shadow-xl border border-gray-100"
                    >
                        <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">Contact Us</h2>
                        <p className="mb-6 text-center text-gray-500 text-sm">
                            Got a question or proposal? We’d love to hear from you!
                        </p>

                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@email.com"
                                className="w-full p-3 border rounded-lg text-gray-800 bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* Subject Input */}
                        <div className="mb-4">
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Enter your subject"
                                className="w-full p-3 border rounded-lg text-gray-800 bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* Message Textarea */}
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message here..."
                                className="w-full p-3 border rounded-lg text-gray-800 bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
                            ></textarea>
                        </div>

                        {/* Success Message */}
                        {submitSuccess && (
                            <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                                ✅ Your message has been sent successfully!
                            </div>
                        )}

                        {/* Error Message */}
                        {submitError && (
                            <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg text-sm font-medium">
                                ❌ {submitError}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
}
