import Link from 'next/link';

const blogPosts: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  'how-to-make-your-nails-last-longer': {
    title: 'How to Make Your Nails Last Longer',
    category: 'Nail Care',
    date: '15 Jan 2025',
    readTime: '3 min read',
    content: [
      'Getting a beautiful manicure is an investment of time and money. Here are our top tips to make your nails last as long as possible.',
      'Avoid using your nails as tools. Opening cans, peeling labels, and typing aggressively can all cause chips and breaks.',
      'Wear gloves when cleaning or washing dishes. Water and cleaning products can weaken your nails and cause lifting.',
      'Apply cuticle oil daily. Hydrated nails are stronger nails — keep your cuticles and nails moisturised between appointments.',
      'Book your infill or maintenance appointment on time. Don\'t wait until nails are damaged — book your fill every 2-3 weeks.',
      'Avoid picking at or peeling your gel or acrylic nails. This can damage your natural nails underneath.',
      'Follow these tips and you\'ll enjoy beautiful nails for weeks to come!',
    ],
  },
  'top-nail-trends-2025': {
    title: 'Top Nail Art Trends for 2025',
    category: 'Trends',
    date: '8 Jan 2025',
    readTime: '4 min read',
    content: [
      '2025 is bringing exciting new nail trends that blend classic elegance with bold creativity.',
      'Chrome and metallic finishes are having a major moment — from subtle pearlescent to full mirror chrome.',
      '3D nail art with gems, pearls, and textured elements adds dimension and drama to any manicure.',
      'Quiet luxury continues to influence nail trends — think milky nails, soft neutrals, and minimal French tips.',
      'Abstract art and freehand designs allow for truly unique, one-of-a-kind nail sets.',
      'Muted earth tones and sage greens are replacing the bright colours of previous years.',
      'At Ly Nails, we stay on top of every trend to bring you the latest and greatest in nail artistry.',
    ],
  },
  'gel-vs-acrylic-nails': {
    title: 'Gel vs Acrylic Nails: What\'s the Difference?',
    category: 'Education',
    date: '28 Dec 2024',
    readTime: '5 min read',
    content: [
      'Choosing between gel and acrylic nails can be confusing. Here\'s a breakdown to help you decide.',
      'Acrylic nails are created by mixing a liquid monomer with a powder polymer. They\'re strong, durable, and great for adding length.',
      'Gel nails use a gel-based formula that is cured under UV or LED light. They look more natural and have a glossy finish.',
      'Acrylics tend to last longer and are better for those who are rough on their hands. They\'re also more affordable.',
      'Gels are more flexible and less likely to break, but they may not last as long on very active lifestyles.',
      'Both options require professional application and removal to protect your natural nails.',
      'Not sure which is right for you? Book a consultation at Ly Nails and we\'ll help you choose the perfect option.',
    ],
  },
  'preparing-for-your-nail-appointment': {
    title: 'How to Prepare for Your Nail Appointment',
    category: 'Tips',
    date: '20 Dec 2024',
    readTime: '3 min read',
    content: [
      'Want to get the most out of your nail appointment? Here\'s how to prepare.',
      'Arrive with clean nails — remove any old polish before your appointment to save time.',
      'Think about what you want ahead of time. Browse our gallery or Pinterest for inspiration.',
      'Communicate clearly with your nail technician about your preferences, lifestyle, and any concerns.',
      'Avoid applying lotion or oil to your hands before the appointment — it can make it harder for products to adhere.',
      'Be on time! This ensures you get the full appointment time and your nail artist can work without rushing.',
      'Following these tips will help ensure a smooth, enjoyable experience at Ly Nails.',
    ],
  },
  'nail-health-essentials': {
    title: 'Nail Health Essentials: A Beginner\'s Guide',
    category: 'Nail Care',
    date: '12 Dec 2024',
    readTime: '4 min read',
    content: [
      'Beautiful nails start with healthy nails. Here are the essentials every nail beginner should know.',
      'Keep your nails clean and dry to prevent bacterial growth and weakening.',
      'Moisturise your cuticles regularly with cuticle oil or a rich hand cream.',
      'Don\'t cut your cuticles — gently push them back instead to avoid infection.',
      'File nails in one direction rather than sawing back and forth to prevent splitting.',
      'Take breaks between manicures to let your natural nails breathe and recover.',
      'Eat a balanced diet rich in biotin, protein, and vitamins for stronger nails from the inside out.',
      'At Ly Nails, we prioritise nail health alongside aesthetics — because healthy nails are beautiful nails.',
    ],
  },
  'french-manicure-variations': {
    title: '5 French Manicure Variations to Try',
    category: 'Inspiration',
    date: '5 Dec 2024',
    readTime: '3 min read',
    content: [
      'The French manicure is a classic, but there are so many ways to make it your own.',
      'Coloured French Tips — Swap the white tip for a bold colour like red, blue, or pink.',
      'Micro French — A super thin, delicate tip for a modern, minimalist look.',
      'Ombre French — A soft gradient from nude to white for an ethereal effect.',
      'Glitter French Tips — Add some sparkle with a glittery tip.',
      'Reverse French — Place the accent colour at the cuticle instead of the tip.',
      'No matter which style you choose, the French manicure is always a stunning choice. Book yours at Ly Nails today!',
    ],
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <div className="pt-32 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-rose-500 hover:text-rose-600 text-sm font-medium mb-6 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-rose-100 text-rose-600 text-xs font-medium rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-gray-400">{post.date}</span>
            <span className="text-sm text-gray-400">·</span>
            <span className="text-sm text-gray-400">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center mb-10">
            <span className="text-6xl">💅</span>
          </div>

          <article className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </article>

          {/* Share / CTA */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-600">Enjoyed this post? Share it with a friend!</p>
              <Link href="/booking" className="btn-primary">
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
