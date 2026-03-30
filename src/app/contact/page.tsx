'use client';

import AnimatedSection from '@/components/AnimatedSection';

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-cream-50 via-blush-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-blush-100 text-blush-600 text-sm font-medium rounded-full mb-4">Contact</span>
              <h1 className="text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">Get in <span className="gradient-text">Touch</span></h1>
              <p className="text-lg text-charcoal-500">Have a question or want to book? We&apos;d love to hear from you.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div>
                <h2 className="text-2xl font-bold text-charcoal-800 mb-8">Contact Information</h2>
                <div className="space-y-8">
                  {[
                    { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z', title: 'Address', content: '22 Augusta St\nBirmingham B18 6JA, UK' },
                    { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', title: 'Phone', content: '+44 7429 294499', href: 'tel:+447429294499' },
                    { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Opening Hours', content: 'Mon — Fri: 10:00 AM — 7:00 PM\nSaturday: 10:00 AM — 6:00 PM\nSunday: Closed' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-blush-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blush-200 transition-colors">
                        <svg className="w-6 h-6 text-blush-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal-800 mb-1">{item.title}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-charcoal-500 hover:text-blush-500 transition-colors whitespace-pre-line">{item.content}</a>
                        ) : (
                          <p className="text-charcoal-500 whitespace-pre-line">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 bg-blush-50 rounded-2xl aspect-video flex items-center justify-center border border-blush-100">
                  <div className="text-center p-8">
                    <svg className="w-12 h-12 text-blush-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <p className="text-charcoal-500 text-sm mb-3">22 Augusta St, Birmingham B18 6JA</p>
                    <a href="https://maps.google.com/?q=22+Augusta+St,+Birmingham+B18+6JA" target="_blank" rel="noopener noreferrer" className="text-blush-500 text-sm font-medium hover:text-blush-600">Open in Google Maps →</a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={200}>
              <div>
                <h2 className="text-2xl font-bold text-charcoal-800 mb-8">Send a Message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal-600 mb-2">Name</label>
                      <input type="text" id="name" name="name" className="w-full px-5 py-4 bg-blush-50 border border-blush-200 rounded-xl text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal-600 mb-2">Email</label>
                      <input type="email" id="email" name="email" className="w-full px-5 py-4 bg-blush-50 border border-blush-200 rounded-xl text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal-600 mb-2">Phone (optional)</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-5 py-4 bg-blush-50 border border-blush-200 rounded-xl text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all" placeholder="+44..." />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal-600 mb-2">Message</label>
                    <textarea id="message" name="message" rows={5} className="w-full px-5 py-4 bg-blush-50 border border-blush-200 rounded-xl text-charcoal-800 placeholder-charcoal-400 focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all resize-none" placeholder="How can we help you?" />
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-lg">Send Message</button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
