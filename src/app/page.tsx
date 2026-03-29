'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { useCountUp } from '@/hooks/useInView';

const services = [
  {
    title: 'Nail Extensions',
    description: 'Beautiful, long-lasting acrylic and gel extensions tailored to your preferred shape and length.',
    price: 'From £35',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Gel Polish',
    description: 'Chip-resistant gel polish with a high-shine finish that lasts up to 3 weeks.',
    price: 'From £25',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Nail Art',
    description: 'From minimal elegance to bold statement designs — custom nail art that expresses your unique style.',
    price: 'From £5/nail',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Manicure & Pedicure',
    description: 'Classic and luxury manicures and pedicures that leave your hands and feet looking flawless.',
    price: 'From £20',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: 'Shakiba Ghorbani',
    text: 'Absolutely amazing! The staff were wonderful and my nails have stayed on for so long. Been 30 days and I\'m really happy!',
    rating: 5,
    date: '2 months ago',
  },
  {
    name: 'Mitali',
    text: 'Ly is incredibly talented and pays so much attention to detail — my nails came out absolutely beautiful and exactly how I wanted them.',
    rating: 5,
    date: '3 months ago',
  },
  {
    name: 'Sarah Benmaach',
    text: 'Ly\'s is the best! She always works so quickly but doesn\'t compromise on quality. Clean shop and kind staff!',
    rating: 5,
    date: '5 months ago',
  },
];

function StatCounter({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const { ref, count } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}{suffix}
      </p>
      <p className="text-gray-400 text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero - Dark with gradient */}
      <section className="relative min-h-screen flex items-center bg-gray-950 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/20 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-blob" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <AnimatedSection>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-white/70">4.9 · 368 reviews</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                  Where Beauty
                  <br />
                  Meets <span className="gradient-text">Artistry</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                  Birmingham&apos;s favourite nail salon. Expert nail extensions, stunning nail art, and flawless manicures in a warm, welcoming studio.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="/booking" className="btn-primary">
                    Book Appointment
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/services" className="btn-secondary">
                    View Services
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">22 Augusta St</p>
                      <p className="text-gray-500 text-xs">Birmingham B18 6JA</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Open Now</p>
                      <p className="text-gray-500 text-xs">10 AM — 7 PM</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right - Hero Visual */}
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="relative">
                {/* Main card */}
                <div className="relative aspect-[4/5] max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/30 to-pink-500/30 rounded-3xl backdrop-blur-sm border border-white/10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                    <Image
                      src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80"
                      alt="Beautiful nail art by Ly Nails"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  </div>
                  <div className="relative text-center p-8">
                    <p className="text-2xl font-bold text-white mb-2">Premium Nail Art</p>
                    <p className="text-gray-400">By Ly Nails Birmingham</p>
                  </div>
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-rose-500/20 rounded-full blur-xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl" />
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -bottom-8 -left-8 glass-card p-4 animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Open Now</p>
                      <p className="text-gray-400 text-xs">Ready for you</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 glass-card p-4 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full border-2 border-gray-900" />
                      ))}
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">368+</p>
                      <p className="text-gray-400 text-[10px] uppercase">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-16 bg-gray-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value={4.9} label="Google Rating" suffix="*" />
            <StatCounter value={368} label="Happy Clients" suffix="+" />
            <StatCounter value={5} label="Years Experience" suffix="+" />
            <StatCounter value={1000} label="Nails Designed" suffix="+" />
          </div>
        </div>
      </section>

      {/* Services - Dark */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-4">
                Our Services
              </span>
              <h2 className="section-title">Premium Nail <span className="gradient-text">Services</span></h2>
              <p className="section-subtitle">
                From classic manicures to intricate nail art, we offer a full range of premium services.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <div className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-rose-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/10">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center text-rose-400 mb-5 group-hover:scale-110 group-hover:from-rose-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-rose-400 font-semibold text-sm">{service.price}</span>
                    <Link href="/booking" className="text-white/40 hover:text-rose-400 text-sm transition-colors">
                      Book →
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="text-center mt-12">
              <Link href="/services" className="btn-outline">
                View All Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us - Split */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-left">
              <div>
                <span className="inline-block px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-4">
                  Why Ly Nails
                </span>
                <h2 className="section-title">Why Clients <span className="gradient-text">Love Us</span></h2>
                <p className="text-gray-400 mb-10 leading-relaxed">
                  With a 4.9-star rating and hundreds of happy clients, we&apos;re Birmingham&apos;s go-to destination for beautiful nails.
                </p>

                <div className="space-y-6">
                  {[
                    { title: 'Attention to Detail', desc: 'Every nail is crafted with precision and care.' },
                    { title: 'Quality Products', desc: 'Premium, salon-grade products for lasting results.' },
                    { title: 'Fast & Efficient', desc: 'Quick service without compromising on quality.' },
                    { title: 'Warm & Welcoming', desc: 'A friendly, clean studio where you relax.' },
                  ].map((item, index) => (
                    <div key={item.title} className="flex items-start space-x-4 group">
                      <div className="w-10 h-10 bg-rose-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-rose-500 transition-colors duration-300">
                        <svg className="w-5 h-5 text-rose-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={200}>
              <div className="relative">
                <div className="relative bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-3xl border border-white/5 p-12 aspect-square flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl" />
                  <div className="absolute inset-0">
                    <Image
                      src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80"
                      alt="Quality nail care"
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                  </div>
                  <div className="relative text-center">
                    <p className="text-3xl font-bold text-white mb-2">Quality & Care</p>
                    <p className="text-gray-300">In every appointment</p>
                  </div>
                  {/* Decorative rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 border border-rose-500/10 rounded-full animate-spin-slow" />
                    <div className="absolute w-80 h-80 border border-pink-500/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-500/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-4">
                Reviews
              </span>
              <h2 className="section-title">What Clients <span className="gradient-text">Say</span></h2>
              <p className="section-subtitle">
                Real reviews from our amazing clients.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 150}>
                <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-500">
                  <div className="absolute top-6 right-6 text-6xl text-white/[0.03] font-serif">&ldquo;</div>
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-400 mb-8 leading-relaxed text-sm italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{testimonial.name}</p>
                        <p className="text-gray-500 text-xs">Verified Client</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs">{testimonial.date}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-transparent to-pink-500/10" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready for <span className="gradient-text">Beautiful Nails</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Book your appointment at Ly Nails today and experience Birmingham&apos;s most loved nail salon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn-primary text-lg">
                Book Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:+447429294499" className="btn-secondary text-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +44 7429 294499
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
