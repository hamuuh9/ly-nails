'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { useCountUp } from '@/hooks/useInView';

const services = [
  { title: 'Nail Extensions', description: 'Beautiful, long-lasting acrylic and gel extensions tailored to your preferred shape and length.', price: 'From £35' },
  { title: 'Gel Polish', description: 'Chip-resistant gel polish with a high-shine finish that lasts up to 3 weeks.', price: 'From £25' },
  { title: 'Nail Art', description: 'From minimal elegance to bold statement designs — custom nail art that expresses your unique style.', price: 'From £5/nail' },
  { title: 'Manicure & Pedicure', description: 'Classic and luxury manicures and pedicures that leave your hands and feet looking flawless.', price: 'From £20' },
];

const testimonials = [
  { name: 'Shakiba Ghorbani', text: 'Absolutely amazing! My nails have stayed on for 30 days. Definitely recommend!', rating: 5, date: '2 months ago' },
  { name: 'Mitali', text: 'Ly is incredibly talented and pays so much attention to detail — my nails came out absolutely beautiful.', rating: 5, date: '3 months ago' },
  { name: 'Sarah Benmaach', text: 'Best nail salon! She works quickly without compromising on quality. Clean shop and kind staff!', rating: 5, date: '5 months ago' },
];

function StatCounter({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const { ref, count } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-2">{count}{suffix}</p>
      <p className="text-charcoal-500 text-sm">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-cream-50 via-blush-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blush-200/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage-200/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blush-200 mb-8 shadow-soft">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-charcoal-600 font-medium">4.9 · 368 reviews</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-900 leading-[1.1] mb-6">
                  Where Beauty Meets
                  <br />
                  <span className="gradient-text">Artistry</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-lg text-charcoal-500 mb-10 max-w-lg leading-relaxed">
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
                <div className="flex flex-wrap gap-6 pt-8 border-t border-blush-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blush-100 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-blush-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-charcoal-800 text-sm font-medium">22 Augusta St</p>
                      <p className="text-charcoal-400 text-xs">Birmingham B18 6JA</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-charcoal-800 text-sm font-medium">Open Now</p>
                      <p className="text-charcoal-400 text-xs">10 AM — 7 PM</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Hero Image */}
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="relative">
                <div className="relative aspect-[4/5] max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blush-200 to-blush-300 rounded-3xl overflow-hidden shadow-soft-lg">
                    <Image
                      src="/images/ly-nails-1.jpg"
                      alt="Beautiful nail art by Ly Nails Birmingham"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cream-100/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -bottom-6 -left-6 glass-card p-4 animate-float shadow-soft">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-charcoal-800 font-semibold text-sm">Open Now</p>
                      <p className="text-charcoal-400 text-xs">Ready for you</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 glass-card p-4 animate-float shadow-soft" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                      {[
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
                        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
                        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
                      ].map((src, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                          <Image src={src} alt="Happy client" width={32} height={32} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-charcoal-800 font-bold">368+</p>
                      <p className="text-charcoal-400 text-[10px] uppercase">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-blush-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter value={4.9} label="Google Rating" suffix="*" />
            <StatCounter value={368} label="Happy Clients" suffix="+" />
            <StatCounter value={5} label="Years Experience" suffix="+" />
            <StatCounter value={1000} label="Nails Designed" suffix="+" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gradient-to-b from-white to-blush-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-blush-100 text-blush-600 text-sm font-medium rounded-full mb-4">
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
                <div className="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-300 border border-blush-100">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blush-100 to-gold-100 text-blush-600 text-sm font-semibold rounded-full mb-4">
                    {service.price}
                  </span>
                  <h3 className="text-xl font-bold text-charcoal-800 mb-2">{service.title}</h3>
                  <p className="text-charcoal-500 text-sm leading-relaxed mb-6">{service.description}</p>
                  <Link href="/booking" className="text-blush-500 hover:text-blush-600 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Book Now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="text-center mt-12">
              <Link href="/services" className="btn-secondary">
                View All Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <span className="inline-block px-4 py-1.5 bg-sage-100 text-sage-600 text-sm font-medium rounded-full mb-4">
                  Why Ly Nails
                </span>
                <h2 className="section-title">Why Clients <span className="gradient-text">Love Us</span></h2>
                <p className="text-charcoal-500 mb-10 leading-relaxed">
                  With a 4.9-star rating and hundreds of happy clients, we&apos;re Birmingham&apos;s go-to destination for beautiful nails.
                </p>

                <div className="space-y-6">
                  {[
                    { title: 'Attention to Detail', desc: 'Every nail is crafted with precision and care.' },
                    { title: 'Quality Products', desc: 'Premium, salon-grade products for lasting results.' },
                    { title: 'Fast & Efficient', desc: 'Quick service without compromising on quality.' },
                    { title: 'Warm & Welcoming', desc: 'A friendly, clean studio where you relax.' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start space-x-4 group">
                      <div className="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-sage-500 transition-colors duration-300">
                        <svg className="w-5 h-5 text-sage-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal-800 mb-1">{item.title}</h4>
                        <p className="text-charcoal-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={200}>
              <div className="relative">
                <div className="relative bg-gradient-to-br from-blush-100 to-cream-100 rounded-3xl aspect-square overflow-hidden shadow-soft">
                  <Image
                    src="/images/salon-interior.jpg"
                    alt="Ly Nails Birmingham salon interior"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/20 to-transparent" />
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <p className="text-3xl font-bold text-white mb-1 drop-shadow-lg">Our Studio</p>
                    <p className="text-white/90 drop-shadow">A clean, welcoming space for you</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-blush-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-gold-100 text-gold-700 text-sm font-medium rounded-full mb-4">
                Reviews
              </span>
              <h2 className="section-title">What Clients <span className="gradient-text">Say</span></h2>
              <p className="section-subtitle">Real reviews from our amazing clients.</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 150}>
                <div className="bg-white rounded-3xl p-8 shadow-soft border border-blush-100 hover:shadow-soft-lg transition-all duration-300">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-charcoal-600 mb-8 leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blush-300 to-blush-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="text-charcoal-800 font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-charcoal-400 text-xs">{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blush-400 via-blush-500 to-rose-400 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready for <span className="text-gold-300">Beautiful Nails</span>?
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Book your appointment at Ly Nails today and experience Birmingham&apos;s most loved nail salon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn-gold text-lg">
                Book Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:+447429294499" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg">
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
