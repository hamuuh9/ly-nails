'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const team = [{ name: 'Ly', role: 'Founder & Lead Nail Artist', bio: 'With over 5 years of experience and a passion for nail artistry, Ly founded Ly Nails to bring premium nail care to Birmingham. Known for her attention to detail and creative designs.' }];
const milestones = [
  { year: '2019', event: 'Ly Nails opens on Augusta Street' },
  { year: '2020', event: 'Reached 100 happy clients' },
  { year: '2021', event: 'Expanded with gel extensions & nail art' },
  { year: '2023', event: 'Hit 4.9-star rating with 300+ reviews' },
  { year: '2024', event: 'Celebrating 368+ satisfied clients' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-cream-50 via-blush-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-blush-100 text-blush-600 text-sm font-medium rounded-full mb-4">About Us</span>
              <h1 className="text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">About <span className="gradient-text">Ly Nails</span></h1>
              <p className="text-lg text-charcoal-500 leading-relaxed">Birmingham&apos;s favourite nail salon — where artistry, care, and quality come together.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <span className="inline-block px-4 py-1.5 bg-blush-100 text-blush-600 text-sm font-medium rounded-full mb-4">Our Story</span>
                <h2 className="section-title">Born from <span className="gradient-text">Passion</span></h2>
                <div className="space-y-4 text-charcoal-600 leading-relaxed">
                  <p>Ly Nails was born from a simple belief: everyone deserves beautiful nails without compromising on quality. Founded by Ly in Birmingham, our studio has quickly become one of the most loved nail salons in the area.</p>
                  <p>With a 4.9-star Google rating and over 368 glowing reviews, we&apos;re proud to be Birmingham&apos;s go-to destination. Every appointment is a chance to create something beautiful.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="relative bg-gradient-to-br from-blush-100 to-cream-100 rounded-3xl aspect-square overflow-hidden shadow-soft">
                <Image src="/images/ly-nails-6.jpg" alt="Ly Nails studio" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-cream-100/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-0 right-0 text-center">
                  <p className="text-3xl font-bold text-charcoal-800 mb-1">Since 2019</p>
                  <p className="text-charcoal-600">Birmingham, UK</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blush-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ value: '4.9*', label: 'Google Rating' }, { value: '368+', label: 'Reviews' }, { value: '5+', label: 'Years Experience' }, { value: '1000+', label: 'Nails Designed' }].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-blush-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Ly */}
      <section className="py-24 bg-gradient-to-b from-white to-blush-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-blush-100 text-blush-600 text-sm font-medium rounded-full mb-4">The Artist</span>
              <h2 className="section-title">Meet <span className="gradient-text">Ly</span></h2>
            </div>
          </AnimatedSection>
          {team.map((member) => (
            <AnimatedSection key={member.name}>
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-3xl p-12 text-center shadow-soft border border-blush-100">
                  <div className="w-28 h-28 bg-gradient-to-br from-blush-400 to-rose-400 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
                    <span className="text-white text-4xl font-bold font-serif">{member.name[0]}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-charcoal-800 mb-2">{member.name}</h3>
                  <p className="text-blush-500 font-medium mb-8">{member.role}</p>
                  <p className="text-charcoal-600 leading-relaxed text-lg">{member.bio}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-gold-100 text-gold-700 text-sm font-medium rounded-full mb-4">Journey</span>
              <h2 className="section-title">Our <span className="gradient-text">Timeline</span></h2>
            </div>
          </AnimatedSection>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={milestone.year} delay={index * 100}>
                <div className="flex items-start space-x-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-blush-100 to-cream-100 border border-blush-200 rounded-2xl flex items-center justify-center text-blush-600 font-bold text-sm shrink-0 group-hover:from-blush-400 group-hover:to-rose-400 group-hover:text-white transition-all duration-500">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && <div className="w-px h-16 bg-gradient-to-b from-blush-200 to-transparent mt-2" />}
                  </div>
                  <div className="pt-3">
                    <p className="text-charcoal-700 font-medium group-hover:text-blush-600 transition-colors">{milestone.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blush-400 via-blush-500 to-rose-400 text-white relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience <span className="text-gold-300">Ly Nails</span>?</h2>
            <p className="text-white/90 mb-10 text-lg">Book your appointment and see why hundreds of clients trust us.</p>
            <Link href="/booking" className="btn-gold text-lg">Book Now</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
