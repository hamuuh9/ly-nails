import Link from 'next/link';

const blogPosts = [
  {
    slug: 'how-to-make-your-nails-last-longer',
    title: 'How to Make Your Nails Last Longer',
    excerpt: 'Simple tips and tricks to extend the life of your manicure and keep your nails looking fresh for weeks.',
    category: 'Nail Care',
    date: '15 Jan 2025',
    readTime: '3 min read',
  },
  {
    slug: 'top-nail-trends-2025',
    title: 'Top Nail Art Trends for 2025',
    excerpt: 'From chrome finishes to 3D embellishments, discover the nail trends that are dominating this year.',
    category: 'Trends',
    date: '8 Jan 2025',
    readTime: '4 min read',
  },
  {
    slug: 'gel-vs-acrylic-nails',
    title: 'Gel vs Acrylic Nails: What\'s the Difference?',
    excerpt: 'Not sure which nail extension type is right for you? We break down the pros and cons of each.',
    category: 'Education',
    date: '28 Dec 2024',
    readTime: '5 min read',
  },
  {
    slug: 'preparing-for-your-nail-appointment',
    title: 'How to Prepare for Your Nail Appointment',
    excerpt: 'Get the most out of your salon visit with these simple preparation tips.',
    category: 'Tips',
    date: '20 Dec 2024',
    readTime: '3 min read',
  },
  {
    slug: 'nail-health-essentials',
    title: 'Nail Health Essentials: A Beginner\'s Guide',
    excerpt: 'Healthy nails are the foundation of any great manicure. Learn the basics of nail care.',
    category: 'Nail Care',
    date: '12 Dec 2024',
    readTime: '4 min read',
  },
  {
    slug: 'french-manicure-variations',
    title: '5 French Manicure Variations to Try',
    excerpt: 'The French manicure is timeless, but there are endless ways to put your own spin on it.',
    category: 'Inspiration',
    date: '5 Dec 2024',
    readTime: '3 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tips, trends, and inspiration for beautiful nails. Stay up to date with the latest in nail care and artistry.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`card overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="aspect-video bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">💅</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-rose-100 text-rose-600 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-rose-500 text-sm font-medium">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8">
            Get nail care tips and inspiration delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
