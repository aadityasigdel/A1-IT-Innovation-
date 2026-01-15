import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { blogPosts } from "./blogData";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Link
              to="/blog"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg"
            >
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* ✅ SEO Metadata for Individual Post */}
      <Helmet>
        <title>{post.title} | A1 IT Innovation Blog</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        <meta name="author" content={post.author} />
        <meta name="publish_date" content={post.date} />
        <link rel="canonical" href={`https://a1itinnovation.com/blog/${post.slug}`} />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://a1itinnovation.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
      </Helmet>

      <Navigation />

      <main>
        {/* ✅ Hero Section - Redesigned */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40"></div>

          <div className="max-w-4xl mx-auto px-4 py-20 relative z-10">
            {/* Breadcrumb */}
            <nav className="text-sm text-blue-200 mb-8 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
              <span className="text-blue-300">/</span>
              <Link to="/blog" className="hover:text-white transition">
                Blog
              </Link>
              <span className="text-blue-300">/</span>
              <span className="text-blue-100 font-medium">{post.title.substring(0, 40)}...</span>
            </nav>

            {/* Category & Date & Read Time */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full border border-blue-400">
                {post.category}
              </span>
              <span className="inline-block bg-white/10 text-blue-100 text-xs font-medium px-4 py-2 rounded-full border border-white/20">
                📅 {post.date}
              </span>
              <span className="inline-block bg-white/10 text-blue-100 text-xs font-medium px-4 py-2 rounded-full border border-white/20">
                ⏱️ {post.readTime} read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-blue-100 text-lg">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                </svg>
                {post.author}
              </span>
              <span className="w-1 h-1 bg-blue-300 rounded-full"></span>
              <span>Updated: {post.date}</span>
            </div>
          </div>
        </section>

        {/* ✅ Featured Image Section - Redesigned */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto max-h-96 object-cover group-hover:scale-105 transition duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
          </div>
        </section>

        {/* ✅ Article Content - Redesigned */}
        <article className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("## ")) {
                      return `<h2 class="text-4xl font-bold text-gray-900 mt-12 mb-6 pb-3 border-b-2 border-indigo-200">${line.substring(3)}</h2>`;
                    }
                    if (line.startsWith("### ")) {
                      return `<h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4 text-indigo-600">${line.substring(4)}</h3>`;
                    }
                    if (line.startsWith("#### ")) {
                      return `<h4 class="text-xl font-bold text-gray-800 mt-6 mb-3">${line.substring(5)}</h4>`;
                    }
                    if (line.startsWith("- ")) {
                      return `<li class="ml-6 text-gray-700 mb-2 leading-relaxed">${line.substring(2)}</li>`;
                    }
                    if (line.startsWith("**") && line.endsWith("**")) {
                      return `<p class="text-lg font-semibold text-gray-900 mt-4 mb-3 text-indigo-700">${line.replace(/\*\*/g, "")}</p>`;
                    }
                    if (line.trim() === "---") {
                      return "<hr class='my-8 border-t-2 border-gray-200' />";
                    }
                    if (line.trim() === "") {
                      return "";
                    }
                    return `<p class="text-gray-700 mb-4 leading-relaxed">${line}</p>`;
                  })
                  .join(""),
              }}
            />
          </div>
        </article>

        {/* ✅ Author & Share Section - Redesigned */}
        <section className="bg-gradient-to-r from-indigo-50 to-blue-50 py-16 px-4 border-t-2 border-indigo-100">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-lg border-2 border-indigo-100">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {post.author}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Expert in web development, mobile apps, AI solutions, and software engineering for Nepal's thriving IT industry.
                  </p>
                </div>
                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <p className="text-sm font-semibold text-gray-500 uppercase">Share Article</p>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=https://a1itinnovation.com/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm3 10h-2.5v7.5h-3V10H6v-3h1.5V5.5c0-1.5.5-3.5 3.5-3.5h3v3h-2c-.5 0-.5.2-.5.8V7h2.5l-.5 3z"></path>
                      </svg>
                      Facebook
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=https://a1itinnovation.com/blog/${post.slug}&text=${post.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-400 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M19 3.8a8 8 0 01-2.4.6 4 4 0 001.8-2.2 8 8 0 01-2.6 1 4 4 0 00-6.8 3.6 11 11 0 01-8-4 4 4 0 001.3 5.4 4 4 0 01-1.8-.5v.05a4 4 0 003.2 3.9 4 4 0 01-1.8.07 4 4 0 003.8 2.8A8 8 0 010 13.8a11 11 0 006 1.8c7.2 0 11.1-6 11.1-11.1 0-.2 0-.4 0-.5a8 8 0 002-2z"></path>
                      </svg>
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Related Posts - Redesigned */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Related Articles</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts
                .filter((p) => p.category === post.category && p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 flex flex-col h-full border border-gray-100"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-500 to-blue-500">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full w-fit mb-3">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition line-clamp-2 text-lg">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 flex-grow mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 gap-2 mt-auto pt-4 border-t border-gray-100">
                        Read more
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            {/* No related posts message */}
            {blogPosts.filter((p) => p.category === post.category && p.id !== post.id).length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No related articles found.</p>
              </div>
            )}
          </div>
        </section>

        {/* ✅ JSON-LD Structured Data for Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              image: post.image,
              datePublished: post.date,
              dateModified: post.date,
              author: {
                "@type": "Organization",
                name: post.author,
              },
              publisher: {
                "@type": "Organization",
                name: "A1 IT Innovation",
                logo: {
                  "@type": "ImageObject",
                  url: "https://a1itinnovation.com/logo.png",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://a1itinnovation.com/blog/${post.slug}`,
              },
            }),
          }}
        />
      </main>

      <Footer />
    </>
  );
}
