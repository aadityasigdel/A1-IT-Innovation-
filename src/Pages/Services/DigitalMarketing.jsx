import { Helmet } from "react-helmet";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function DigitalMarketingService() {
    const features = [
        {
            title: "100% Transparent Marketing",
            description: "No hidden costs, no confusing jargon. Every rupee spent on your campaign is reported clearly, so you always know exactly where your budget is going.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-indigo-600">
                    <ellipse cx="12" cy="12" rx="9" ry="6" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                </svg>
            )
        },
        {
            title: "Campaign Launch & FB Boosting",
            description: "From planning to launch, we run and boost Facebook & Instagram campaigns tailored to your business size, budget, and target audience for maximum reach.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 text-indigo-600">
                    <path d="M3 10V14H6L14 18V6L6 10H3Z" fill="currentColor" />
                    <path d="M17 9C18 10.3 18 13.7 17 15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M19.5 7.5C21 9.3 21 14.7 19.5 16.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
                </svg>
            )
        },
        {
            title: "Video Making & Free Script Writing",
            description: "Eye-catching promotional videos and reels — complete with free, compelling script writing — designed to stop the scroll and drive engagement.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-indigo-600">
                    <rect x="3" y="7" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M15 10L21 7V17L15 14V10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Free SEO Optimization",
            description: "We include free on-page SEO to improve your search visibility, helping customers discover your business organically — at no extra charge.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-indigo-600">
                    <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="2" />
                    <line x1="14.5" y1="14.5" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M7 11L9 9L11 11L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Free Marketing Advice & Awareness",
            description: "Not sure where to start? Get free, honest advice and brand awareness guidance to help you make confident marketing decisions — no strings attached.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-indigo-600">
                    <path d="M12 3C8.5 3 6 5.5 6 9C6 11.5 7.5 12.8 8.5 14C9 14.6 9 15 9 15.5V16H15V15.5C15 15 15 14.6 15.5 14C16.5 12.8 18 11.5 18 9C18 5.5 15.5 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M9 18.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M10 21H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "Affordable, Scalable Ad Boosting",
            description: "Social media boosting plans that scale with your business — relevant, budget-friendly campaigns sized to your business goals and target market.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-indigo-600">
                    <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 7H21V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    const testimonials = [
        {
            name: "Rajesh Sharma",
            business: "Owner, Sharma Electronics — Kathmandu",
            quote: "Completely transparent from day one. They showed us exactly where our ad budget was going every week. Our FB reach tripled in a month.",
            initials: "RS",
            color: "bg-indigo-100 text-indigo-700"
        },
        {
            name: "Anita Gurung",
            business: "Founder, Anita's Boutique — Pokhara",
            quote: "The free script writing and video made our reels look premium. We never had to worry about explaining our budget — it was small and affordable, exactly as promised.",
            initials: "AG",
            color: "bg-purple-100 text-purple-700"
        },
        {
            name: "Suman Rai",
            business: "Director, Rai Furniture House — Damak",
            quote: "Honestly the best marketing advice we've gotten for free. The team boosted our campaign according to our budget and our shop got way more local reach.",
            initials: "SR",
            color: "bg-indigo-100 text-indigo-700"
        },
        {
            name: "Nisha Thapa",
            business: "Co-founder, Thapa Bakery Café — Biratnagar",
            quote: "Free SEO plus social media boosting brought in customers we never reached before. Everything was clearly explained, nothing felt hidden.",
            initials: "NT",
            color: "bg-orange-100 text-orange-700"
        },
        {
            name: "Prakash Koirala",
            business: "Owner, Koirala Automobiles — Itahari",
            quote: "They planned our whole campaign launch, wrote the script, made the video, and boosted it on Facebook — all within our small business budget.",
            initials: "PK",
            color: "bg-green-100 text-green-700"
        },
        {
            name: "Sabina Karki",
            business: "Founder, Sabina Beauty Salon — Kathmandu",
            quote: "Transparency is what stood out most. They gave us free awareness tips even before we signed up, and the results after boosting were beyond expectations.",
            initials: "SK",
            color: "bg-rose-100 text-rose-700"
        },
        {
            name: "Bikash Shrestha",
            business: "Manager, Shrestha Traders — Jhapa",
            quote: "Affordable, relevant, and targeted exactly to our audience. Our reach grew massively and we always knew what we were paying for.",
            initials: "BS",
            color: "bg-amber-100 text-amber-700"
        }
    ];

    const Stars = () => (
        <div className="flex gap-1 text-amber-400 mb-3" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 2L14.9 8.6L22 9.3L16.5 14.1L18.2 21L12 17.3L5.8 21L7.5 14.1L2 9.3L9.1 8.6L12 2Z" />
                </svg>
            ))}
        </div>
    );

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Helmet>
                <title>Best Digital Marketing Agency in Nepal | Digital Marketing Team | A1 IT Innovation</title>
                <meta name="description" content="A1 IT Innovation is a trusted digital marketing team in Nepal offering transparent, affordable digital marketing — campaign launch, Facebook boosting, video making, free script writing, free SEO, and social media advertising tailored to your business size and target audience." />
                <meta name="keywords" content="digital marketing Nepal, best digital marketing agency Nepal, digital marketing team in Nepal, digital marketing company Nepal, affordable digital marketing Nepal, social media marketing agency Nepal, Facebook boosting Nepal, Facebook ads agency Nepal, video marketing Nepal, free SEO Nepal, SEO agency Nepal, digital marketing for small business Nepal, social media campaign Nepal, script writing Nepal, digital marketing Damak Jhapa Kathmandu, A1 IT Innovation marketing" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <meta name="author" content="A1 IT Innovation" />
                <meta name="publisher" content="A1 IT Innovation" />
                <meta name="category" content="Digital Marketing, Social Media Marketing" />
                <link rel="canonical" href="https://www.a1itinnovation.com.np/services/digital-marketing" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Best Digital Marketing Agency in Nepal | A1 IT Innovation" />
                <meta property="og:description" content="Nepal's transparent digital marketing team — campaign launch, FB boosting, video making, free script writing, and free SEO tailored to your business." />
                <meta property="og:url" content="https://www.a1itinnovation.com.np/services/digital-marketing" />
                <meta property="og:site_name" content="A1 IT Innovation" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Best Digital Marketing Team in Nepal | A1 IT Innovation" />
                <meta name="twitter:description" content="Transparent campaign launches, FB boosting, video making, free script writing, and free SEO — affordable marketing for every business size." />

                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Digital Marketing Services",
                    "description": "Transparent digital marketing services including campaign launch, Facebook boosting, video making, free script writing, free SEO, and affordable social media advertising tailored to business size and target audience.",
                    "url": "https://www.a1itinnovation.com.np/services/digital-marketing",
                    "provider": {
                        "@type": "Organization",
                        "name": "A1 IT Innovation",
                        "url": "https://www.a1itinnovation.com.np",
                        "email": "info@a1itinnovation.com.np",
                        "address": { "@type": "PostalAddress", "addressCountry": "NP" }
                    },
                    "serviceType": "Digital Marketing",
                    "areaServed": [
                        { "@type": "Country", "name": "Nepal" },
                        { "@type": "Country", "name": "Global" }
                    ],
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Digital Marketing Services",
                        "itemListElement": [
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transparent Marketing", "description": "No hidden costs — clear reporting on every campaign." } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Campaign Launch & FB Boosting", "description": "Facebook and Instagram campaign planning, launch, and boosting." } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Making & Script Writing", "description": "Promotional videos with free script writing included." } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free SEO", "description": "On-page SEO optimization included at no extra cost." } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Marketing Advice", "description": "Free consultation and brand awareness guidance." } },
                            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Affordable Ad Boosting", "description": "Scalable social media ad boosting based on business size and target audience." } }
                        ]
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "7"
                    }
                })}</script>
            </Helmet>
            <Navigation />

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 max-w-7xl mx-auto gap-12">
                <div className="flex flex-col gap-8 max-w-2xl text-center lg:text-left">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Transparent <span className="text-indigo-600">Digital Marketing</span> That Grows Your Reach
                        </h1>
                        <h2 className="text-xl md:text-2xl font-medium text-gray-600">
                            Campaign launches, Facebook boosting, video making, and free SEO — all sized to your business, your budget, and your target audience. No hidden costs, ever.
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1.5 rounded-full border border-indigo-200">100% Transparent</span>
                        <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1.5 rounded-full border border-indigo-200">Free SEO Included</span>
                        <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1.5 rounded-full border border-indigo-200">Free Script Writing</span>
                        <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1.5 rounded-full border border-indigo-200">Budget-Friendly Boosting</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="/contact"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center justify-center shadow-md"
                        >
                            Get Free Consultation
                        </a>
                        <a
                            href="/contact"
                            className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center justify-center"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                <div className="mt-8 lg:mt-0">
                    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg rounded-xl shadow-lg" aria-label="Digital marketing growth illustration">
                        <rect width="500" height="400" rx="16" fill="#0F172A" />
                        <circle cx="250" cy="185" r="155" stroke="#1E293B" strokeWidth="1" />
                        <circle cx="250" cy="185" r="115" stroke="#1E293B" strokeWidth="1" />
                        <circle cx="250" cy="185" r="75" stroke="#1E293B" strokeWidth="1" />
                        <line x1="250" y1="30" x2="250" y2="340" stroke="#1E293B" strokeWidth="1" />
                        <line x1="95" y1="185" x2="405" y2="185" stroke="#1E293B" strokeWidth="1" />

                        {/* Central rocket/growth icon */}
                        <path d="M250 100 L275 150 L275 195 L250 215 L225 195 L225 150 Z" fill="#4F46E5" />
                        <circle cx="250" cy="160" r="12" fill="#C7D2FE" />
                        <path d="M225 190 L205 220 L225 210 Z" fill="#4338CA" />
                        <path d="M275 190 L295 220 L275 210 Z" fill="#4338CA" />
                        <path d="M240 215 L250 245 L260 215 Z" fill="#6366F1" />

                        {/* Info cards */}
                        <rect x="22" y="62" width="140" height="38" rx="8" fill="#1E293B" />
                        <circle cx="44" cy="81" r="9" fill="#22C55E" /><path d="M38 81 L41 84 L50 75" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <text x="62" y="77" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#C7D2FE">FB Campaign</text>
                        <text x="62" y="91" fontFamily="monospace" fontSize="9" fill="#94A3B8">Live &amp; Boosted</text>

                        <rect x="22" y="112" width="140" height="38" rx="8" fill="#1E293B" />
                        <circle cx="44" cy="131" r="9" fill="#22C55E" /><path d="M38 131 L41 134 L50 125" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <text x="62" y="127" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#C7D2FE">Reach</text>
                        <text x="62" y="141" fontFamily="monospace" fontSize="9" fill="#94A3B8">45.2K this week</text>

                        <rect x="22" y="162" width="140" height="38" rx="8" fill="#1E293B" />
                        <circle cx="44" cy="181" r="9" fill="#F59E0B" />
                        <text x="44" y="186" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="white">▲</text>
                        <text x="62" y="177" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#FEF3C7">Engagement</text>
                        <text x="62" y="191" fontFamily="monospace" fontSize="9" fill="#94A3B8">+32% growth</text>

                        <rect x="22" y="212" width="140" height="38" rx="8" fill="#1E293B" />
                        <circle cx="44" cy="231" r="9" fill="#22C55E" /><path d="M38 231 L41 234 L50 225" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <text x="62" y="227" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#C7D2FE">Free SEO</text>
                        <text x="62" y="241" fontFamily="monospace" fontSize="9" fill="#94A3B8">Ranking up ✓</text>

                        <rect x="338" y="62" width="140" height="38" rx="8" fill="#1E293B" />
                        <circle cx="360" cy="81" r="9" fill="#22C55E" /><path d="M354 81 L357 84 L366 75" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <text x="378" y="77" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#C7D2FE">Video Ready</text>
                        <text x="378" y="91" fontFamily="monospace" fontSize="9" fill="#94A3B8">Script included</text>

                        <rect x="338" y="112" width="140" height="38" rx="8" fill="#1E293B" />
                        <circle cx="360" cy="131" r="9" fill="#22C55E" /><path d="M354 131 L357 134 L366 125" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <text x="378" y="127" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#C7D2FE">Budget</text>
                        <text x="378" y="141" fontFamily="monospace" fontSize="9" fill="#94A3B8">Right-sized ✓</text>

                        <rect x="338" y="162" width="140" height="38" rx="8" fill="#1E293B" />
                        <circle cx="360" cy="181" r="9" fill="#22C55E" /><path d="M354 181 L357 184 L366 175" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <text x="378" y="177" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#C7D2FE">Transparency</text>
                        <text x="378" y="191" fontFamily="monospace" fontSize="9" fill="#94A3B8">Full reporting</text>

                        <rect x="338" y="212" width="140" height="38" rx="8" fill="#1E293B" />
                        <circle cx="360" cy="231" r="9" fill="#22C55E" /><path d="M354 231 L357 234 L366 225" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <text x="378" y="227" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="#C7D2FE">Audience</text>
                        <text x="378" y="241" fontFamily="monospace" fontSize="9" fill="#94A3B8">Target-matched</text>

                        <rect x="100" y="308" width="300" height="44" rx="12" fill="#1E293B" stroke="#4F46E5" strokeWidth="1.5" />
                        <text x="135" y="324" fontFamily="system-ui" fontSize="9" fill="#A5B4FC">Campaign ROI</text>
                        <text x="390" y="324" textAnchor="end" fontFamily="system-ui" fontSize="9" fill="#A5B4FC">Report Ready</text>
                        <rect x="112" y="330" width="180" height="10" rx="5" fill="#334155" />
                        <rect x="112" y="330" width="157" height="10" rx="5" fill="#4F46E5" />
                        <text x="390" y="340" textAnchor="end" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="#4F46E5">87%</text>
                    </svg>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Digital Marketing Services</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            At A1 IT Innovation, we run digital marketing the honest way — full transparency, real reporting, and campaigns sized to fit your business, not the other way around. From campaign launch to Facebook boosting, video production to free SEO, we help you reach the right audience without overspending.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl shadow-md p-8 flex flex-col gap-4 hover:shadow-lg transition duration-300 hover:-translate-y-2 border border-gray-100"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-indigo-600">1</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
                            <p className="text-gray-600">We learn your business size, goals, and target audience — completely free.</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-indigo-600">2</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Script & Video</h3>
                            <p className="text-gray-600">Free script writing and video production tailored to your brand story.</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-indigo-600">3</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Launch & Boost</h3>
                            <p className="text-gray-600">Campaign launch with affordable Facebook boosting and free SEO setup.</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-indigo-600">4</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Transparent Reporting</h3>
                            <p className="text-gray-600">Clear, honest reports on reach, spend, and results — every single time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Quote Banner */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <svg className="w-10 h-10 text-indigo-500 mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.5 6C4.5 6 2 8.5 2 11.5C2 14.2 4 16.4 6.6 16.9C6.1 18.3 5.1 19.4 3.7 20.1L4.3 21.9C7.6 20.9 9.9 18 9.9 14.3V11.5C9.9 8.5 8.9 6 7.5 6Z"/>
                        <path d="M17.6 6C14.6 6 12.1 8.5 12.1 11.5C12.1 14.2 14.1 16.4 16.7 16.9C16.2 18.3 15.2 19.4 13.8 20.1L14.4 21.9C17.7 20.9 20 18 20 14.3V11.5C20 8.5 19 6 17.6 6Z"/>
                    </svg>
                    <p className="text-2xl md:text-3xl font-semibold text-white leading-snug mb-4">
                        "If you don't exist online, people won't trust you — and if they don't trust you, they won't become your client."
                    </p>
                    <p className="text-indigo-300 font-medium">This is why we treat your online presence as seriously as you treat your business.</p>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Nepal's Trusted Digital Marketing Team</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Looking for the best digital marketing agency in Nepal? A1 IT Innovation is a dedicated digital marketing team in Nepal helping small businesses, startups, and established brands build a trustworthy online presence — without the inflated agency price tag.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="text-4xl mb-3">🤝</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900">Honest by Default</h3>
                            <p className="text-gray-600">No inflated packages or vague promises — just a digital marketing team in Nepal that reports real numbers, always.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-4xl mb-3">📊</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900">Sized to Your Business</h3>
                            <p className="text-gray-600">Whether you're a small shop or a growing enterprise, our campaigns scale to match your business size, budget, and target audience.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-4xl mb-3">🏆</div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900">Proven Local Results</h3>
                            <p className="text-gray-600">From Kathmandu to Damak, businesses trust us as their go-to digital marketing agency in Nepal for real, measurable reach.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real feedback from businesses across Nepal who grew their reach with our transparent marketing approach.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl shadow-md p-8 flex flex-col border border-gray-100 hover:shadow-lg transition duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <Stars />
                                <p className="text-gray-700 italic mb-6">&ldquo;{t.quote}&rdquo;</p>
                                <div className="flex items-center gap-3 mt-auto">
                                    <div className={`w-11 h-11 rounded-full flex items-center justify-center font-semibold ${t.color}`}>
                                        {t.initials}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{t.name}</p>
                                        <p className="text-sm text-gray-500">{t.business}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Grow Your Reach?</h2>
                    <p className="text-lg text-indigo-50 mb-8 max-w-2xl mx-auto">
                        Get a free consultation and see how affordable, transparent digital marketing can work for your business.
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3.5 rounded-lg transition duration-300 inline-flex items-center justify-center shadow-md"
                    >
                        Start Your Free Consultation
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
