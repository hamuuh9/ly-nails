import Link from 'next/link';

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
      <section className="pt-32 pb-16 bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">Ly Nails</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Birmingham&apos;s favourite nail salon — where artistry, care, and quality come together to create beautiful nails that make you feel confident.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Ly Nails was born from a simple belief: everyone deserves beautiful nails without compromising on quality or breaking the bank. Founded by Ly in Birmingham, our studio has quickly become one of the most loved nail salons in the area.
                </p>
                <p>
                  What started as a small, passion-driven venture has grown into a thriving studio thanks to the trust and loyalty of our amazing clients. With a 4.9-star Google rating and over 368 glowing reviews, we&apos;re proud to be Birmingham&apos;s go-to destination for nail artistry.
                </p>
                <p>
                  Every appointment is a chance to create something beautiful. We take the time to understand your vision and bring it to life — whether that&apos;s a classic French manicure, bold nail art, or elegant extensions.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">💅</div>
                <p className="text-2xl font-bold text-gray-800">Since 2019</p>
                <p className="text-gray-600 mt-2">Birmingham, UK</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-rose-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4.9', label: 'Google Rating' },
              { value: '368+', label: 'Reviews' },
              { value: '5+', label: 'Years Experience' },
              { value: '1000+', label: 'Nails Designed' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-rose-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Ly */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet the Artist</h2>
            <p className="section-subtitle">
              The creative hands behind every beautiful set of nails at Ly Nails.
            </p>
          </div>

          {team.map((member) => (
            <div key={member.name} className="max-w-3xl mx-auto">
              <div className="card p-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">{member.name[0]}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-rose-500 font-medium mb-6">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Key moments from the Ly Nails story.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-start space-x-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 font-bold text-sm shrink-0">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-16 bg-rose-200 mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <p className="text-gray-700 font-medium">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Ly Nails?
          </h2>
          <p className="text-gray-400 mb-8">
            Book your appointment and see why hundreds of clients trust us with their nails.
          </p>
          <Link href="/booking" className="btn-primary text-lg px-8 py-4">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
