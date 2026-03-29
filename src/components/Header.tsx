'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-900/80 backdrop-blur-xl shadow-2xl shadow-rose-500/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg font-serif">L</span>
              </div>
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-tight">
                Ly<span className="text-rose-400">Nails</span>
              </span>
              <span className="block text-[10px] text-rose-300/70 -mt-1 tracking-widest uppercase">Birmingham</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-400 group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Book Now CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+447429294499"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              +44 7429 294499
            </a>
            <Link
              href="/booking"
              className="relative px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold text-sm rounded-full overflow-hidden group"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <div className="flex flex-col space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : 'ml-auto'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 bg-gray-900/95 backdrop-blur-xl border-t border-white/5">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Link
            href="/booking"
            onClick={() => setIsOpen(false)}
            className="btn-primary w-full text-center mt-4 text-sm"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
