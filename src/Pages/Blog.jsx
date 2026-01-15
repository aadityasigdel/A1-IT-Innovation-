import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { blogPosts } from "./blogData";

export default function Blog() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>
          Blog | A1 IT Innovation Nepal — Web Dev, Mobile Apps & Tech Insights
        </title>
        <meta
          name="description"
          content="Read insights about web development, mobile apps, React, Flutter, Node.js, and IT industry trends from A1 IT Innovation Nepal. Expert articles on software development, digital marketing, and SEO."
        />
        <meta
          name="keywords"
          content="blog, web development, mobile app development, React development, Flutter, Node.js, IT industry Nepal, digital marketing, SEO, software development tips"
        />
        <link rel="canonical" href="https://a1itinnovation.com/blog" />

        {/* ✅ Open Graph / Social Meta */}
        <meta
          property="og:title"
          content="Blog | A1 IT Innovation — Tech Insights & Development Tips"
        />
        <meta
          property="og:description"
          content="Explore articles on web development, mobile apps, best practices, and IT industry trends in Nepal."
        />
        <meta property="og:url" content="https://a1itinnovation.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navigation />

      <main>
        {/* ✅ Hero Section - Redesigned */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Tech Insights & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Development Blog</span>
            </h1>
            <p className="text-xl md:text-2xl mb-3 text-blue-100 font-medium">
              Expert articles on web development, mobile apps, and IT industry trends
            </p>
            <p className="text-lg text-blue-200 max-w-3xl">
              Discover in-depth guides, best practices, and insights from our development team. Learn about the latest technologies, company profiles, and success stories from Nepal's thriving tech ecosystem.
            </p>
          </div>
        </section>

        {/* ✅ Blog Posts Grid - Redesigned */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest Articles</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover in-depth guides, best practices, and insights from our development team covering web development, mobile apps, IT industry analysis, and technology trends.
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 flex flex-col h-full border border-gray-100"
                >
                  {/* Featured Image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-indigo-500 to-blue-500">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-grow">
                    {/* Category & Date */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="inline-block bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 text-xs font-bold px-4 py-2 rounded-full border border-indigo-200">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs font-medium">{post.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex justify-between items-center text-sm pt-4 border-t border-gray-200 mt-auto">
                      <span className="text-gray-600 font-medium">{post.author}</span>
                      <span className="text-indigo-600 font-bold group-hover:text-indigo-700 flex items-center gap-1">
                        {post.readTime}
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Newsletter CTA - Redesigned */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-20 px-4 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full -ml-40 -mb-40"></div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Stay Updated with Latest Articles
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Subscribe to get notified about new blog posts on web development, mobile apps, IT industry insights, and tech trends in Nepal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-6 py-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 text-gray-900 font-medium placeholder-gray-500"
              />
              <button className="bg-white hover:bg-gray-100 text-indigo-600 font-bold px-8 py-4 rounded-lg transition duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              ✓ No spam • ✓ Unsubscribe anytime • ✓ Expert content only
            </p>
          </div>
        </section>

        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "A1 IT Innovation Blog",
              description:
                "Expert insights on web development, mobile apps, and IT industry trends",
              url: "https://a1itinnovation.com/blog",
              blogPost: blogPosts.map((post) => ({
                "@type": "BlogPosting",
                headline: post.title,
                description: post.excerpt,
                datePublished: post.date,
                author: {
                  "@type": "Organization",
                  name: post.author,
                },
                image: post.image,
                url: `https://a1itinnovation.com/blog/${post.slug}`,
              })),
            }),
          }}
        />

        {/* ✅ Hidden SEO Content */}
        <div className="hidden">
          <p>
            A1 IT Innovation Blog features expert articles on web development, mobile app development, React development, Node.js, Flutter, and IT industry trends in Nepal. Learn about best practices in software development, digital marketing, SEO strategies, and technology insights from experienced developers.
          </p>
          <p>
            Articles cover topics including React best practices, Node.js development, Flutter mobile apps, Python vs Node.js, SEO strategies for tech companies in Nepal, digital marketing insights, and industry trends. Perfect for developers, entrepreneurs, and tech enthusiasts in Nepal.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
