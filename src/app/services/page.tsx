'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const services = [
  {
    id: 'nail-extensions',
    title: 'Nail Extensions',
    description: 'Beautiful, long-lasting acrylic and gel extensions tailored to your preferred shape, length, and style.',
    price: 'From £35',
    duration: '60-90 min',
    features: ['Acrylic & gel options', 'Custom shapes & lengths', 'Natural-looking finish', 'Long-lasting (3-4 weeks)'],
  },
  {
    id: 'gel-polish',
    title: 'Gel Polish Manicure',
    description: 'Chip-resistant gel polish with a high-gloss finish that lasts up to 3 weeks.',
    price: 'From £25',
    duration: '45-60 min',
    features: ['Up to 3 weeks wear', 'High-gloss shine', 'Huge colour selection', 'No chipping or fading'],
  },
  {
    id: 'classic-manicure',
    title: 'Classic Manicure',
    description: 'A timeless manicure including nail shaping, cuticle care, hand massage, and polish.',
    price: 'From £20',
    duration: '30-45 min',
    features: ['Nail shaping & filing', 'Cuticle care', 'Hand massage', 'Regular polish finish'],
  },
  {
    id: 'nail-art',
    title: 'Nail Art',
    description: 'Custom nail art — from minimal line work to bold 3D designs, gems, and hand-painted masterpieces.',
    price: 'From £5/nail',
    duration: 'Add-on',
    features: ['Hand-painted designs', 'Gems & embellishments', 'French tips', 'Custom patterns'],
  },
  {
    id: 'pedicure',
    title: 'Pedicure',
    description: 'Treat your feet to a refreshing pedicure including nail care, exfoliation, and massage.',
    price: 'From £30',
    duration: '45-60 min',
    features: ['Foot soak & exfoliation', 'Nail care & shaping', 'Relaxing foot massage', 'Polish of your choice'],
  },
  {
    id: 'nail-repair',
    title: 'Nail Repair & Removal',
    description: 'Safe, professional removal of gel or acrylic nails. Plus repair services for broken nails.',
    price: 'From £12',
    duration: '20-40 min',
    features: ['Gentle removal process', 'No nail damage', 'Broken nail repair', 'Buffing & conditioning'],
  },
];

const process = [
  { step: '01', title: 'Book Online', desc: 'Choose your service and preferred time. We\'ll confirm your appointment.' },
  { step: '02', title: 'Visit the Studio', desc: 'Arrive at our Augusta Street studio and relax in our welcoming space.' },
  { step: '03', title: 'Enjoy Beautiful Nails', desc: 'Leave with stunning nails that make you feel amazing.' },
];

export default function ServicesPage() {
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
                Services
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                From classic manicures to statement nail art, every treatment is delivered with care, precision, and quality products.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 80}>
                <div className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-white/[0.06] hover:border-rose-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 text-rose-400 text-sm font-semibold rounded-full">
                      {service.price}
                    </span>
                    <span className="text-gray-500 text-sm">{service.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400">
                        <svg className="w-4 h-4 text-rose-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/booking" className="btn-outline text-sm w-full text-center py-3">
                    Book This Service
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-4">
                Process
              </span>
              <h2 className="section-title">How It <span className="gradient-text">Works</span></h2>
              <p className="section-subtitle">Getting your nails done at Ly Nails is simple.</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 150}>
                <div className="text-center group">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-transparent to-pink-500/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="gradient-text">Book</span>?
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              Choose your service and book your appointment at Ly Nails Birmingham.
            </p>
            <Link href="/booking" className="btn-primary text-lg">
              Book Appointment
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
