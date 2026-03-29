import Link from 'next/link';

const footerLinks = {
  services: [
    { name: 'Nail Extensions', href: '/services' },
    { name: 'Gel Polish', href: '/services' },
    { name: 'Nail Art', href: '/services' },
    { name: 'Manicure', href: '/services' },
    { name: 'Pedicure', href: '/services' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book Now', href: '/booking' },
  ],
};

const socialLinks = [
  { name: 'Instagram', icon: 'IG', href: '#' },
  { name: 'Facebook', icon: 'FB', href: '#' },
  { name: 'TikTok', icon: 'TK', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl font-serif">L</span>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white tracking-tight">
                  Ly<span className="text-rose-400">Nails</span>
                </span>
                <span className="block text-xs text-rose-300/50 -mt-1 tracking-widest uppercase">Birmingham</span>
              </div>
            </Link>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm">
              Birmingham&apos;s favourite nail salon. 4.9 stars, 368+ happy clients. Expert nail art, extensions, and manicures.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-11 h-11 bg-white/5 hover:bg-gradient-to-br hover:from-rose-500 hover:to-pink-500 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-rose-500/25"
                  aria-label={social.name}
                >
                  <span className="text-xs font-bold text-white/60 hover:text-white">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 mr-3" />
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 mr-3" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 mr-3" />
              Visit Us
            </h4>
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">22 Augusta St</p>
                  <p className="text-gray-500 text-sm">Birmingham B18 6JA, UK</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+447429294499" className="text-gray-400 hover:text-rose-400 text-sm transition-colors">
                  +44 7429 294499
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Mon-Fri: 10AM-7PM</p>
                  <p className="text-gray-500 text-sm">Sat: 10AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Ly Nails Birmingham. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-rose-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-rose-400 text-sm transition-colors">Terms</a>
            <div className="flex items-center space-x-1 text-gray-600 text-sm">
              <span>Made with</span>
              <svg className="w-4 h-4 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
