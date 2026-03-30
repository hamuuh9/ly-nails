'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const services = [
  { title: 'Nail Extensions', description: 'Beautiful, long-lasting acrylic and gel extensions tailored to your preferred shape, length, and style.', price: 'From £35', duration: '60-90 min', features: ['Acrylic & gel options', 'Custom shapes & lengths', 'Natural-looking finish', 'Long-lasting (3-4 weeks)'] },
  { title: 'Gel Polish Manicure', description: 'Chip-resistant gel polish with a high-gloss finish that lasts up to 3 weeks. Choose from hundreds of colours.', price: 'From £25', duration: '45-60 min', features: ['Up to 3 weeks wear', 'High-gloss shine', 'Huge colour selection', 'No chipping or fading'] },
  { title: 'Classic Manicure', description: 'A timeless manicure including nail shaping, cuticle care, hand massage, and your choice of polish.', price: 'From £20', duration: '30-45 min', features: ['Nail shaping & filing', 'Cuticle care', 'Hand massage', 'Regular polish finish'] },
  { title: 'Nail Art', description: 'Express yourself with custom nail art — from minimal line work to bold 3D designs and hand-painted masterpieces.', price: 'From £5/nail', duration: 'Add-on', features: ['Hand-painted designs', 'Gems & embellishments', 'French tips', 'Custom patterns'] },
  { title: 'Pedicure', description: 'Treat your feet to a refreshing pedicure including nail shaping, cuticle care, exfoliation, and massage.', price: 'From £30', duration: '45-60 min', features: ['Foot soak & exfoliation', 'Nail care & shaping', 'Relaxing foot massage', 'Polish of your choice'] },
  { title: 'Nail Repair & Removal', description: 'Safe, professional removal of gel or acrylic nails. Plus repair services for broken or damaged nails.', price: 'From £12', duration: '20-40 min', features: ['Gentle removal process', 'No nail damage', 'Broken nail repair', 'Buffing & conditioning'] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-cream-50 via-blush-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-blush-100 text-blush-600 text-sm font-medium rounded-full mb-4">Services</span>
              <h1 className="text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">Our <span className="gradient-text">Services</span></h1>
              <p className="text-lg text-charcoal-500 leading-relaxed">Every treatment is delivered with care, precision, and premium products.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 80}>
                <div className="bg-white rounded-3xl p-8 shadow-soft border border-blush-100 hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-blush-100 to-gold-100 text-blush-600 text-sm font-semibold rounded-full">{service.price}</span>
                    <span className="text-charcoal-400 text-sm">{service.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-800 mb-3">{service.title}</h3>
                  <p className="text-charcoal-500 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-charcoal-600">
                        <svg className="w-4 h-4 text-sage-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/booking" className="btn-secondary text-sm w-full text-center py-3">Book This Service</Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gradient-to-b from-blush-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-sage-100 text-sage-600 text-sm font-medium rounded-full mb-4">Process</span>
              <h2 className="section-title">How It <span className="gradient-text">Works</span></h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Book Online', desc: 'Choose your service and preferred time. We\'ll confirm your appointment.' },
              { step: '02', title: 'Visit the Studio', desc: 'Arrive at our Augusta Street studio and relax in our welcoming space.' },
              { step: '03', title: 'Enjoy Beautiful Nails', desc: 'Leave with stunning nails that make you feel amazing.' },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 150}>
                <div className="text-center group">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blush-300 to-rose-300 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center shadow-soft">
                      <span className="text-2xl font-bold text-blush-500">{item.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal-800 mb-3">{item.title}</h3>
                  <p className="text-charcoal-500">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blush-400 via-blush-500 to-rose-400 text-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to <span className="text-gold-300">Book</span>?</h2>
            <p className="text-white/90 mb-10 text-lg">Choose your service and book at Ly Nails Birmingham.</p>
            <Link href="/booking" className="btn-gold text-lg">Book Appointment</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
