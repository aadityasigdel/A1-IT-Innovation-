import { useRef, useState } from 'react';
import { FiFileText, FiMail, FiMessageSquare, FiUpload, FiUser } from 'react-icons/fi';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const CareerPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
        jobType: '',
        cv: null,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const fileInputRef = useRef(null);

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.jobType.trim()) newErrors.jobType = 'Please select a job type';
        if (!formData.cv) newErrors.cv = 'CV is required';
        else if (formData.cv.size > 5 * 1024 * 1024) {
            newErrors.cv = 'File size must be less than 5MB';
        } else if (formData.cv.type !== 'application/pdf') {
            newErrors.cv = 'Only PDF files are accepted';
        }
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (file.type === 'application/pdf') {
                setFormData(prev => ({ ...prev, cv: file }));
                if (errors.cv) setErrors(prev => ({ ...prev, cv: '' }));
            } else {
                setErrors(prev => ({ ...prev, cv: 'Only PDF files are accepted' }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        const formPayload = new FormData();  

        formPayload.append('fullName', formData.fullName);
        formPayload.append('email', formData.email);
        formPayload.append('message', formData.message);
        formPayload.append('cv', formData.cv);
        formPayload.append('_captcha', 'false');
        formPayload.append('_subject', 'New Career Form Submission from Website');
        formPayload.append('_template', 'box');
        formPayload.append('jobType', formData.jobType);


        try {
            const response = await fetch('https://formsubmit.co/info@a1itinnovation.com.np', {
                method: 'POST',
                body: formPayload
            });

            if (response.ok) {
                setSubmitSuccess(true);
                setFormData({
                    fullName: '',
                    email: '',
                    message: '',
                    cv: null,
                });
                setErrors({});
            } else {
                setErrors({ submit: 'Failed to send application. Please try again.' });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setErrors({ submit: 'Error occurred. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };



    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Navigation />

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
                        Join Nepal's Tech Revolution
                    </h1>
                    <div className="w-24 h-1.5 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                        Your chance to be part of an innovative team shaping Nepal's digital future
                    </p>
                    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
                        <p className="text-gray-700">
                            Step into a journey of purpose and growth. Collaborate, innovate, and make a
                            difference with a community driven to achieve greatness. Your story starts here!
                        </p>
                    </div>
                </section>

                {/* Application Form Section */}
                <section className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                    {submitSuccess ? (
                        <div className="p-8 text-center">
                            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Application Submitted!</h2>
                            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                Thank you for your interest in joining our team. We've received your application and will review it carefully. We'll get back to you within few days.
                            </p>
                            <button
                                onClick={() => setSubmitSuccess(false)}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                            >
                                Submit Another Application
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="p-8" encType="multipart/form-data">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Application Form</h2>

                            <div className="space-y-8">
                                {/* Full Name Field */}
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FiUser className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className={`block w-full pl-10 pr-3 py-3 border ${errors.fullName ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} rounded-md shadow-sm placeholder-gray-400`}
                                            placeholder="Your Name....."
                                        />
                                    </div>
                                    {errors.fullName && <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>}
                                </div>

                                <div>
                                    <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-2">
                                        Job Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="jobType"
                                        name="jobType"
                                        value={formData.jobType}
                                        onChange={handleChange}
                                        className={`block w-full pl-3 pr-10 py-3 border ${errors.jobType
                                                ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                                                : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                            } rounded-md shadow-sm`}
                                    >
                                        <option value="">Select a job type</option>
                                        <option value="Internship">Internship</option>
                                        <option value="Full-Time">Full-Time</option>
                                        <option value="Part-Time">Part-Time</option>
                                        <option value="Part-Time">Remote</option>
                                    </select>
                                    {errors.jobType && <p className="mt-2 text-sm text-red-600">{errors.jobType}</p>}
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FiMail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`block w-full pl-10 pr-3 py-3 border ${errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} rounded-md shadow-sm placeholder-gray-400`}
                                            placeholder="your Email....."
                                        />
                                    </div>
                                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                                </div>

                                {/* Cover Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Cover Message
                                        <span className="text-gray-500 text-xs ml-1">(Optional)</span>
                                    </label>
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute top-3 left-3">
                                            <FiMessageSquare className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="Tell us why you'd be a great fit for our team..."
                                        />
                                    </div>
                                </div>

                                {/* CV Upload Field */}
                                <div>
                                    <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-2">
                                        Upload Your CV <span className="text-red-500">*</span>
                                    </label>
                                    <div
                                        className={`mt-1 flex justify-center px-6 pt-8 pb-8 border-2 ${errors.cv ? 'border-red-300' : 'border-gray-300'} border-dashed rounded-md cursor-pointer transition-colors duration-200 hover:border-indigo-400`}
                                        onDragOver={handleDragOver}
                                        onDrop={handleDrop}
                                        onClick={triggerFileInput}
                                    >
                                        <div className="space-y-3 text-center">
                                            {formData.cv ? (
                                                <>
                                                    <FiFileText className="mx-auto h-10 w-10 text-indigo-600" />
                                                    <p className="text-sm text-indigo-600 font-medium">
                                                        {formData.cv.name}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        Click or drag to change file
                                                    </p>
                                                </>
                                            ) : (
                                                <>
                                                    <FiUpload className="mx-auto h-10 w-10 text-gray-400" />
                                                    <div className="flex text-sm text-gray-600 justify-center">
                                                        <label className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                                                            <span>Upload a file</span>
                                                        </label>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">
                                                        PDF up to 5MB
                                                    </p>
                                                </>
                                            )}
                                            <input
                                                id="cv"
                                                name="cv"
                                                type="file"
                                                ref={fileInputRef}
                                                accept=".pdf"
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                        </div>
                                    </div>
                                    {errors.cv && <p className="mt-2 text-sm text-red-600">{errors.cv}</p>}
                                </div>

                                {/* Submit Error */}
                                {errors.submit && (
                                    <div className="rounded-md bg-red-50 p-4">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <h3 className="text-sm font-medium text-red-800">{errors.submit}</h3>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white ${isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </>
                                        ) : (
                                            'Submit Application'
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default CareerPage;