'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const blogPosts = [
  { slug: 'how-to-make-your-nails-last-longer', title: 'How to Make Your Nails Last Longer', excerpt: 'Simple tips to extend the life of your manicure and keep nails looking fresh.', category: 'Nail Care', date: '15 Jan 2025', readTime: '3 min' },
  { slug: 'top-nail-trends-2025', title: 'Top Nail Art Trends for 2025', excerpt: 'From chrome finishes to 3D embellishments — the trends dominating this year.', category: 'Trends', date: '8 Jan 2025', readTime: '4 min' },
  { slug: 'gel-vs-acrylic-nails', title: 'Gel vs Acrylic Nails', excerpt: 'Not sure which extension type is right for you? We break down the pros and cons.', category: 'Education', date: '28 Dec 2024', readTime: '5 min' },
  { slug: 'preparing-for-your-nail-appointment', title: 'How to Prepare for Your Appointment', excerpt: 'Get the most out of your salon visit with these simple preparation tips.', category: 'Tips', date: '20 Dec 2024', readTime: '3 min' },
  { slug: 'nail-health-essentials', title: 'Nail Health Essentials', excerpt: 'Healthy nails are the foundation of any great manicure. Learn the basics.', category: 'Nail Care', date: '12 Dec 2024', readTime: '4 min' },
  { slug: 'french-manicure-variations', title: '5 French Manicure Variations', excerpt: 'The French manicure is timeless — here are endless ways to make it your own.', category: 'Inspiration', date: '5 Dec 2024', readTime: '3 min' },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-6">
                Blog
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Tips, trends, and inspiration for beautiful nails.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:bg-white/[0.06] hover:border-rose-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/10 h-full"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                    <span className="text-5xl group-hover:scale-125 transition-transform duration-500">💅</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-rose-500/10 text-rose-400 text-xs font-medium rounded-full border border-rose-500/20">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="mt-4 flex items-center text-rose-400 text-sm font-medium">
                      Read More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-24 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">Stay <span className="gradient-text">Updated</span></h2>
            <p className="text-gray-400 mb-10">Get nail care tips and inspiration delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
