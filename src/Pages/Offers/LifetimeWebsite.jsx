import { Helmet } from "react-helmet";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function LifetimeWebsite() {
    const included = [
        {
            title: "Free Domain — Lifetime",
            description: "Your business domain (yourcompany.com.np or similar), registered and renewed for free — forever. No yearly renewal bill, ever.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-indigo-600">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 3C14.5 5.5 15.8 8.6 15.8 12C15.8 15.4 14.5 18.5 12 21C9.5 18.5 8.2 15.4 8.2 12C8.2 8.6 9.5 5.5 12 3Z" stroke="currentColor" strokeWidth="2" />
                </svg>
            )
        },
        {
            title: "Free Hosting — Lifetime",
            description: "Fast, secure hosting for your website with no monthly or yearly hosting fees — we cover it for as long as your website is live.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-indigo-600">
                    <rect x="4" y="4" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
                    <rect x="4" y="14" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
                    <circle cx="8" cy="7" r="1" fill="currentColor" />
                    <circle cx="8" cy="17" r="1" fill="currentColor" />
                </svg>
            )
        },
        {
            title: "Free SEO Optimization",
            description: "On-page SEO setup included from day one, so your website is built to be found on Google — not just built to look good.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-indigo-600">
                    <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="2" />
                    <line x1="14.5" y1="14.5" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M7 11L9 9L11 11L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "AI Traffic SEO",
            description: "We optimize your content and structure so AI-driven search and recommendation engines can discover and surface your business too.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-indigo-600">
                    <rect x="6" y="6" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
                    <circle cx="9.5" cy="10.5" r="1" fill="currentColor" />
                    <circle cx="14.5" cy="10.5" r="1" fill="currentColor" />
                    <path d="M9 15C10.5 16 13.5 16 15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 3V6M12 18V21M3 12H6M18 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "Human Traffic SEO",
            description: "Real, targeted visibility strategies aimed at genuine human visitors and customers — not fake bot traffic or inflated numbers.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-indigo-600">
                    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 20C3 16.7 5.7 14 9 14C12.3 14 15 16.7 15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M15 8.5C16.1 8.5 17 7.6 17 6.5C17 5.4 16.1 4.5 15 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M17 14C19.2 14.5 21 16.5 21 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "One-Time Payment, No Renewals",
            description: "Pay once — Rs. 30,000 — and never receive a renewal bill again. No yearly charge, no monthly charge, no surprise invoice.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-indigo-600">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M15 9.5C15 8.1 13.7 7 12 7C10.3 7 9 8.1 9 9.5C9 12.5 15 11 15 14.5C15 15.9 13.7 17 12 17C10.3 17 9 15.9 9 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        }
    ];

    const comparison = [
        { label: "Domain registration", others: "Rs. 1,500–3,000 / year, forever", ours: "Free, forever" },
        { label: "Web hosting", others: "Rs. 5,000–15,000 / year, forever", ours: "Free, forever" },
        { label: "SEO setup & optimization", others: "Rs. 10,000+ / year retainer", ours: "Included, free" },
        { label: "Total ongoing cost", others: "Rs. 15,000–25,000+ every single year", ours: "Rs. 0 after the one-time payment" },
    ];

    const testimonials = [
        {
            name: "Deepak Adhikari",
            business: "Owner, Adhikari Hardware — Damak",
            quote: "I paid once and I've never gotten a renewal bill since. Every other quote I got wanted yearly hosting and domain fees on top of the website cost.",
            initials: "DA",
        },
        {
            name: "Kabita Poudel",
            business: "Founder, Kabita's Tailoring — Kathmandu",
            quote: "Our website finally makes us look like a real business. Customers find us on Google now, and we never worry about the site going down for non-payment.",
            initials: "KP",
        },
        {
            name: "Ramesh Basnet",
            business: "Manager, Basnet Agro Supplies — Itahari",
            quote: "One-time Rs. 30,000 and that's it — no yearly domain renewal, no hosting invoice. It's rare to find this kind of offer in Nepal.",
            initials: "RB",
        },
        {
            name: "Sunita Magar",
            business: "Owner, Magar Beauty Parlour — Pokhara",
            quote: "The free SEO actually brought us customers searching on Google. I didn't expect that from a one-time payment package.",
            initials: "SM",
        },
    ];

    const faqs = [
        {
            q: "Is this really a one-time payment with no renewal ever?",
            a: "Yes. You pay Rs. 30,000 once. We cover your domain registration and hosting renewal for the lifetime of your website — no yearly, monthly, or hidden fees."
        },
        {
            q: "What happens after a few years — will you ask for more money?",
            a: "No. That's the whole point of this offer. As long as your website is active with us, the domain and hosting stay free — renewed on our side, year after year."
        },
        {
            q: "What's included in 'Free SEO' and 'AI/Human Traffic SEO'?",
            a: "We optimize your website's structure and content for traditional search engines (Google), AI-driven discovery tools, and real human visibility — so you're not paying separately for SEO later."
        },
        {
            q: "Who is this offer for?",
            a: "Any individual or business in Nepal who needs a professional website — new businesses, existing shops without a website, or businesses tired of recurring hosting/domain bills."
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Helmet>
                <title>Lifetime Free Domain &amp; Hosting Website Offer in Nepal | A1 IT Innovation</title>
                <meta name="description" content="Get a professional website with free lifetime domain, free lifetime hosting, free SEO, AI traffic SEO, and human traffic SEO — for a one-time payment of Rs. 30,000. No yearly renewal, no monthly fees, ever. A rare offer in Nepal." />
                <meta name="keywords" content="free domain lifetime Nepal, free hosting lifetime Nepal, one time payment website Nepal, no renewal website Nepal, affordable website Nepal, cheap website Nepal, website with free SEO Nepal, lifetime free website Nepal, business website offer Nepal, A1 IT Innovation offer" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <meta name="author" content="A1 IT Innovation" />
                <meta name="publisher" content="A1 IT Innovation" />
                <link rel="canonical" href="https://www.a1itinnovation.com.np/offers/lifetime-website" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Lifetime Free Domain & Hosting Website Offer | A1 IT Innovation Nepal" />
                <meta property="og:description" content="One-time Rs. 30,000 — free lifetime domain, free lifetime hosting, free SEO. No renewal, ever. A rare offer in Nepal." />
                <meta property="og:url" content="https://www.a1itinnovation.com.np/offers/lifetime-website" />
                <meta property="og:site_name" content="A1 IT Innovation" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Lifetime Free Domain & Hosting Website Offer | Nepal" />
                <meta name="twitter:description" content="Pay once, own forever — free lifetime domain, hosting, and SEO for your business website." />

                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Offer",
                    "name": "Lifetime Free Domain & Hosting Website Offer",
                    "description": "One-time payment of Rs. 30,000 for a business website including lifetime free domain, lifetime free hosting, free SEO, AI traffic SEO, and human traffic SEO — no renewal fees ever.",
                    "url": "https://www.a1itinnovation.com.np/offers/lifetime-website",
                    "priceCurrency": "NPR",
                    "price": "30000",
                    "seller": {
                        "@type": "Organization",
                        "name": "A1 IT Innovation",
                        "url": "https://www.a1itinnovation.com.np"
                    },
                    "areaServed": { "@type": "Country", "name": "Nepal" }
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map((f) => ({
                        "@type": "Question",
                        "name": f.q,
                        "acceptedAnswer": { "@type": "Answer", "text": f.a }
                    }))
                })}</script>
            </Helmet>
            <Navigation />

            {/* Hero */}
            <section className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 max-w-5xl mx-auto text-center gap-8">
                <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-amber-200">
                    🔥 Evergreen Offer — Rarely Seen in Nepal
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                    Pay <span className="text-indigo-600">Once</span>. Own Your Website <span className="text-indigo-600">Forever</span>.
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-gray-600 max-w-3xl">
                    Free lifetime domain, free lifetime hosting, free SEO, AI traffic SEO, and human traffic SEO — for one payment of Rs. 30,000. No yearly bill. No monthly bill. Ever.
                </h2>

                <div className="flex flex-wrap gap-3 justify-center">
                    <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1.5 rounded-full border border-indigo-200">Free Domain — Lifetime</span>
                    <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1.5 rounded-full border border-indigo-200">Free Hosting — Lifetime</span>
                    <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1.5 rounded-full border border-indigo-200">Free SEO</span>
                    <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1.5 rounded-full border border-indigo-200">AI + Human Traffic SEO</span>
                </div>

                <div className="bg-white border-2 border-indigo-600 rounded-2xl shadow-lg px-10 py-6 flex flex-col items-center gap-1">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">One-Time Payment</span>
                    <span className="text-5xl font-bold text-indigo-600">Rs. 30,000</span>
                    <span className="text-sm text-gray-500">No renewal, no recurring cost — ever</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center justify-center shadow-md">
                        Claim This Offer
                    </a>
                    <a href="/contact" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3 rounded-lg transition duration-300 inline-flex items-center justify-center">
                        Ask a Question
                    </a>
                </div>
            </section>

            {/* Why it matters */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p className="text-2xl md:text-3xl font-semibold text-white leading-snug mb-4">
                        Your website is the face of your business — the profile people check before they trust you.
                    </p>
                    <p className="text-indigo-300 max-w-2xl mx-auto">
                        Most businesses in Nepal delay going online because of ongoing domain and hosting costs. We removed that barrier completely — build your online presence once, and never think about renewal again.
                    </p>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything you need to launch and be found online — bundled into a single, one-time payment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {included.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl shadow-md p-8 flex flex-col gap-4 hover:shadow-lg transition duration-300 hover:-translate-y-2 border border-gray-100"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Others Charge Every Year. We Don't.</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                        <div className="grid grid-cols-3 bg-slate-900 text-white text-sm font-semibold">
                            <div className="px-4 py-3">What You Pay For</div>
                            <div className="px-4 py-3 text-center">Typical Agencies</div>
                            <div className="px-4 py-3 text-center bg-indigo-600">A1 IT Innovation</div>
                        </div>
                        {comparison.map((row, i) => (
                            <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                                <div className="px-4 py-4 font-medium text-gray-800">{row.label}</div>
                                <div className="px-4 py-4 text-center text-gray-500">{row.others}</div>
                                <div className="px-4 py-4 text-center text-indigo-700 font-semibold">{row.ours}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Businesses Who Took the Offer</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((t, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl shadow-md p-8 flex flex-col border border-gray-100">
                                <p className="text-gray-700 italic mb-6">&ldquo;{t.quote}&rdquo;</p>
                                <div className="flex items-center gap-3 mt-auto">
                                    <div className="w-11 h-11 rounded-full flex items-center justify-center font-semibold bg-indigo-100 text-indigo-700">
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

            {/* FAQ */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Offer FAQ</h2>
                        <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((f, i) => (
                            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Business Deserves a Website That Never Expires</h2>
                    <p className="text-lg text-indigo-50 mb-8 max-w-2xl mx-auto">
                        Pay once. Get free lifetime domain, free lifetime hosting, and free SEO — and stop worrying about renewal bills for good.
                    </p>
                    <a href="/contact" className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3.5 rounded-lg transition duration-300 inline-flex items-center justify-center shadow-md">
                        Claim This Offer Now
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
