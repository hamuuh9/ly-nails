'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const team = [
  {
    name: 'Ly',
    role: 'Founder & Lead Nail Artist',
    bio: 'With over 5 years of experience and a passion for nail artistry, Ly founded Ly Nails to bring premium nail care to Birmingham. Known for her attention to detail and creative designs.',
  },
];

const milestones = [
  { year: '2019', event: 'Ly Nails opens its doors on Augusta Street' },
  { year: '2020', event: 'Reached 100 happy clients milestone' },
  { year: '2021', event: 'Expanded services with gel extensions & nail art' },
  { year: '2023', event: 'Hit 4.9-star rating with 300+ reviews' },
  { year: '2024', event: 'Celebrating 368+ satisfied clients and counting' },
];

export default function AboutPage() {
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
                About Us
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="gradient-text">Ly Nails</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Birmingham&apos;s favourite nail salon — where artistry, care, and quality come together to create beautiful nails.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <span className="inline-block px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="section-title">Born from <span className="gradient-text">Passion</span></h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Ly Nails was born from a simple belief: everyone deserves beautiful nails without compromising on quality or breaking the bank. Founded by Ly in Birmingham, our studio has quickly become one of the most loved nail salons in the area.
                  </p>
                  <p>
                    What started as a small, passion-driven venture has grown into a thriving studio thanks to the trust and loyalty of our amazing clients. With a 4.9-star Google rating and over 368 glowing reviews, we&apos;re proud to be Birmingham&apos;s go-to destination.
                  </p>
                  <p>
                    Every appointment is a chance to create something beautiful. We take the time to understand your vision and bring it to life.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={200}>
              <div className="relative bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-3xl border border-white/5 p-12 aspect-square flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl" />
                <div className="relative text-center">
                  <div className="text-9xl mb-6 animate-float">💅</div>
                  <p className="text-3xl font-bold text-white mb-2">Since 2019</p>
                  <p className="text-gray-400">Birmingham, UK</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border border-rose-500/10 rounded-full animate-spin-slow" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 bg-gray-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4.9*', label: 'Google Rating' },
              { value: '368+', label: 'Reviews' },
              { value: '5+', label: 'Years Experience' },
              { value: '1000+', label: 'Nails Designed' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Ly */}
      <section className="relative py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-4">
                The Artist
              </span>
              <h2 className="section-title">Meet <span className="gradient-text">Ly</span></h2>
              <p className="section-subtitle">
                The creative hands behind every beautiful set of nails.
              </p>
            </div>
          </AnimatedSection>

          {team.map((member) => (
            <AnimatedSection key={member.name}>
              <div className="max-w-2xl mx-auto">
                <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-3xl p-12 text-center">
                  <div className="w-28 h-28 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-rose-500/25">
                    <span className="text-white text-4xl font-bold font-serif">{member.name[0]}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-rose-400 font-medium mb-8">{member.role}</p>
                  <p className="text-gray-400 leading-relaxed text-lg">{member.bio}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-4">
                Journey
              </span>
              <h2 className="section-title">Our <span className="gradient-text">Timeline</span></h2>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={milestone.year} delay={index * 100}>
                <div className="flex items-start space-x-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-rose-500/20 to-pink-500/20 border border-rose-500/30 rounded-2xl flex items-center justify-center text-rose-400 font-bold text-sm shrink-0 group-hover:from-rose-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-500">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-px h-16 bg-gradient-to-b from-rose-500/30 to-transparent mt-2" />
                    )}
                  </div>
                  <div className="pt-3">
                    <p className="text-white font-medium group-hover:text-rose-400 transition-colors">{milestone.event}</p>
                  </div>
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
              Ready to Experience <span className="gradient-text">Ly Nails</span>?
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              Book your appointment and see why hundreds of clients trust us.
            </p>
            <Link href="/booking" className="btn-primary text-lg">
              Book Now
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
