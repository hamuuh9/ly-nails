const categories = ['All', 'Nail Art', 'Extensions', 'Gel Polish', 'French', 'Minimalist'];

const galleryItems = [
  { id: 1, category: 'Nail Art', title: 'Floral Nail Art', emoji: '🌸' },
  { id: 2, category: 'Extensions', title: 'Long Square Extensions', emoji: '💅' },
  { id: 3, category: 'French', title: 'Classic French Tips', emoji: '🤍' },
  { id: 4, category: 'Gel Polish', title: 'Rose Pink Gel', emoji: '🌹' },
  { id: 5, category: 'Minimalist', title: 'Simple Line Art', emoji: '✨' },
  { id: 6, category: 'Nail Art', title: 'Abstract Design', emoji: '🎨' },
  { id: 7, category: 'Extensions', title: 'Stiletto Extensions', emoji: '💎' },
  { id: 8, category: 'Gel Polish', title: 'Deep Burgundy', emoji: '🍷' },
  { id: 9, category: 'French', title: 'Coloured French Tips', emoji: '🌈' },
  { id: 10, category: 'Nail Art', title: 'Glitter Accent', emoji: '✨' },
  { id: 11, category: 'Minimalist', title: 'Nude with Gold Line', emoji: '💛' },
  { id: 12, category: 'Gel Polish', title: 'Matte Black', emoji: '🖤' },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Browse our collection of nail designs and get inspired for your next appointment. Every set is crafted with precision and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  index === 0
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-rose-100 hover:text-rose-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm">{item.title}</p>
                  <p className="text-rose-200 text-xs">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-gray-600 mb-8">
            See our latest work and get inspired by following @lynailsbirmingham on Instagram.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            @lynailsbirmingham
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See Something You Love?
          </h2>
          <p className="text-gray-400 mb-8">
            Book an appointment and we&apos;ll create a custom design just for you.
          </p>
          <a href="/booking" className="btn-primary text-lg px-8 py-4">
            Book Now
          </a>
        </div>
      </section>
    </>
  );
}
