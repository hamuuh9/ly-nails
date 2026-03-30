'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const blogPosts = [
  { slug: 'how-to-make-your-nails-last-longer', title: 'How to Make Your Nails Last Longer', excerpt: 'Simple tips to extend the life of your manicure.', category: 'Nail Care', date: '15 Jan 2025', readTime: '3 min', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80' },
  { slug: 'top-nail-trends-2025', title: 'Top Nail Art Trends for 2025', excerpt: 'The trends dominating this year.', category: 'Trends', date: '8 Jan 2025', readTime: '4 min', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80' },
  { slug: 'gel-vs-acrylic-nails', title: 'Gel vs Acrylic Nails', excerpt: 'Which extension type is right for you?', category: 'Education', date: '28 Dec 2024', readTime: '5 min', image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&q=80' },
  { slug: 'preparing-for-your-nail-appointment', title: 'How to Prepare for Your Appointment', excerpt: 'Get the most out of your salon visit.', category: 'Tips', date: '20 Dec 2024', readTime: '3 min', image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80' },
  { slug: 'nail-health-essentials', title: 'Nail Health Essentials', excerpt: 'Healthy nails are the foundation of any great manicure.', category: 'Nail Care', date: '12 Dec 2024', readTime: '4 min', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80' },
  { slug: 'french-manicure-variations', title: '5 French Manicure Variations', excerpt: 'Endless ways to make the French manicure your own.', category: 'Inspiration', date: '5 Dec 2024', readTime: '3 min', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80' },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-cream-50 via-blush-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-blush-100 text-blush-600 text-sm font-medium rounded-full mb-4">Blog</span>
              <h1 className="text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">Our <span className="gradient-text">Blog</span></h1>
              <p className="text-lg text-charcoal-500">Tips, trends, and inspiration for beautiful nails.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-blush-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 80}>
                <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-soft border border-blush-100 hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="relative aspect-video bg-blush-100 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blush-100 text-blush-600 text-xs font-medium rounded-full">{post.category}</span>
                      <span className="text-charcoal-400 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-charcoal-800 mb-2 group-hover:text-blush-600 transition-colors">{post.title}</h3>
                    <p className="text-charcoal-500 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="mt-4 flex items-center text-blush-500 text-sm font-medium">
                      Read More <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blush-400 via-blush-500 to-rose-400 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Stay <span className="text-gold-300">Updated</span></h2>
            <p className="text-white/90 mb-10">Get nail care tips and inspiration delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Your email" className="flex-1 px-5 py-4 rounded-full border-0 text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-400" />
              <button type="submit" className="btn-gold whitespace-nowrap">Subscribe</button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
