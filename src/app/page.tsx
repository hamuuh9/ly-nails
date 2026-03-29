import Link from 'next/link';

const services = [
  {
    title: 'Nail Extensions',
    description: 'Beautiful, long-lasting acrylic and gel extensions tailored to your preferred shape and length.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Manicure & Pedicure',
    description: 'Classic and luxury manicures and pedicures that leave your hands and feet looking flawless.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Nail Art',
    description: 'From minimal elegance to bold statement designs — custom nail art that expresses your unique style.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Gel Polish',
    description: 'Chip-resistant gel polish with a high-shine finish that lasts up to 3 weeks.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: 'Shakiba Ghorbani',
    text: 'Absolutely amazing! The staff were wonderful and my nails have stayed on for so long. Been 30 days and I\'m really happy — definitely recommend!',
    rating: 5,
    date: '2 months ago',
  },
  {
    name: 'Mitali',
    text: 'I had an amazing experience getting my nails done by Ly! She is incredibly talented and pays so much attention to detail — my nails came out absolutely beautiful.',
    rating: 5,
    date: '3 months ago',
  },
  {
    name: 'Sarah Benmaach',
    text: 'Ly\'s is the best! She always works so quickly but doesn\'t compromise on quality. Clean shop and kind staff, thank you!',
    rating: 5,
    date: '5 months ago',
  },
];

const stats = [
  { value: '4.9', label: 'Google Rating' },
  { value: '368+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '1000+', label: 'Nails Designed' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-rose-50 via-white to-pink-50 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-rose-200 rounded-full blur-3xl opacity-30 animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600">4.9 (368 reviews)</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Where Beauty Meets{' '}
                <span className="text-gradient">Artistry</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Welcome to Ly Nails — Birmingham&apos;s favourite nail salon. Expert nail extensions, stunning nail art, and flawless manicures in a warm, welcoming studio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking" className="btn-primary text-lg px-8 py-4">
                  Book Appointment
                </Link>
                <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                  View Services
                </Link>
              </div>

              {/* Quick info */}
              <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">22 Augusta St, Birmingham</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Open 10 AM — 7 PM</span>
                </div>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative animate-slide-up">
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-pink-400 rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl mb-4">💅</div>
                    <p className="text-xl font-medium">Beautiful Nails</p>
                    <p className="text-sm opacity-80 mt-2">By Ly Nails Birmingham</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Open Now</p>
                      <p className="text-sm text-gray-500">Ready for you</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-rose-500 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              From classic manicures to intricate nail art, we offer a full range of premium nail services tailored to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card p-8 text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">Why Clients Love Ly Nails</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                With a 4.9-star rating and hundreds of happy clients, we&apos;re Birmingham&apos;s go-to destination for beautiful nails. Here&apos;s what sets us apart.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Attention to Detail', desc: 'Every nail is crafted with precision and care — no shortcuts.' },
                  { title: 'Quality Products', desc: 'We use only premium, salon-grade products for lasting results.' },
                  { title: 'Fast & Efficient', desc: 'Quick service without compromising on quality or artistry.' },
                  { title: 'Warm & Welcoming', desc: 'A friendly, clean studio where you can relax and enjoy.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">✨</div>
                  <p className="text-2xl font-bold text-gray-800">Quality & Care</p>
                  <p className="text-gray-600 mt-2">In every appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Don&apos;t just take our word for it — here&apos;s what our clients have to say about their experience at Ly Nails.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready for Beautiful Nails?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Book your appointment at Ly Nails today and experience Birmingham&apos;s most loved nail salon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-rose-500 text-white font-medium rounded-full hover:bg-rose-600 transition-all duration-300 shadow-lg text-lg"
            >
              Book Now
            </Link>
            <a
              href="tel:+447429294499"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +44 7429 294499
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
