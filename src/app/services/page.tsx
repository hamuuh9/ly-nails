import Link from 'next/link';

const services = [
  {
    id: 'nail-extensions',
    title: 'Nail Extensions',
    description: 'Beautiful, long-lasting acrylic and gel extensions tailored to your preferred shape, length, and style. Perfect for adding length and drama to your natural nails.',
    price: 'From £35',
    duration: '60-90 min',
    features: ['Acrylic & gel options', 'Custom shapes & lengths', 'Natural-looking finish', 'Long-lasting (3-4 weeks)'],
  },
  {
    id: 'gel-polish',
    title: 'Gel Polish Manicure',
    description: 'Chip-resistant gel polish with a high-gloss finish that lasts up to 3 weeks. Choose from hundreds of colours for a flawless, durable manicure.',
    price: 'From £25',
    duration: '45-60 min',
    features: ['Up to 3 weeks wear', 'High-gloss shine', 'Huge colour selection', 'No chipping or fading'],
  },
  {
    id: 'classic-manicure',
    title: 'Classic Manicure',
    description: 'A timeless manicure experience including nail shaping, cuticle care, hand massage, and your choice of regular polish. Perfect for everyday elegance.',
    price: 'From £20',
    duration: '30-45 min',
    features: ['Nail shaping & filing', 'Cuticle care', 'Hand massage', 'Regular polish finish'],
  },
  {
    id: 'nail-art',
    title: 'Nail Art',
    description: 'Express yourself with custom nail art — from minimal line work and French tips to bold 3D designs, gems, and hand-painted masterpieces.',
    price: 'From £5 per nail',
    duration: 'Add-on',
    features: ['Hand-painted designs', 'Gems & embellishments', 'French tips', 'Custom patterns'],
  },
  {
    id: 'pedicure',
    title: 'Pedicure',
    description: 'Treat your feet to a refreshing pedicure including nail shaping, cuticle care, exfoliation, foot massage, and polish application.',
    price: 'From £30',
    duration: '45-60 min',
    features: ['Foot soak & exfoliation', 'Nail care & shaping', 'Relaxing foot massage', 'Polish of your choice'],
  },
  {
    id: 'nail-repair',
    title: 'Nail Repair & Removal',
    description: 'Safe, professional removal of gel, acrylic, or dip nails. Plus repair services for broken or damaged nails to keep your manicure looking fresh.',
    price: 'From £12',
    duration: '20-40 min',
    features: ['Gentle removal process', 'No nail damage', 'Broken nail repair', 'Buffing & conditioning'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              From classic manicures to statement nail art, we offer a full range of professional nail services. Every treatment is delivered with care, precision, and quality products.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="card p-8 flex flex-col hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-1 bg-rose-100 text-rose-600 text-sm font-medium rounded-full">
                    {service.price}
                  </span>
                  <span className="text-sm text-gray-400">{service.duration}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-rose-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking"
                  className="btn-secondary text-sm w-full text-center"
                >
                  Book This Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Getting your nails done at Ly Nails is simple and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Book Online', desc: 'Choose your service and preferred time. We\'ll confirm your appointment.' },
              { step: '02', title: 'Visit the Studio', desc: 'Arrive at our Augusta Street studio and relax in our welcoming space.' },
              { step: '03', title: 'Enjoy Beautiful Nails', desc: 'Leave with stunning nails that make you feel amazing.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-rose-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book?
          </h2>
          <p className="text-gray-400 mb-8">
            Choose your service and book your appointment at Ly Nails Birmingham.
          </p>
          <Link href="/booking" className="btn-primary text-lg px-8 py-4">
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
