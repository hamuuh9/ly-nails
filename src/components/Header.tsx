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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11">
              <div className="absolute inset-0 bg-gradient-to-br from-blush-300 to-blush-400 rounded-full rotate-6 group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-blush-400 to-rose-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg font-serif">L</span>
              </div>
            </div>
            <div>
              <span className="text-xl font-bold text-charcoal-800 tracking-tight">
                Ly<span className="text-blush-500">Nails</span>
              </span>
              <span className="block text-[10px] text-charcoal-400 -mt-1 tracking-widest uppercase">Birmingham</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-charcoal-600 hover:text-blush-600 transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blush-400 to-rose-400 group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+447429294499" className="text-charcoal-500 hover:text-blush-600 text-sm font-medium transition-colors">
              +44 7429 294499
            </a>
            <Link href="/booking" className="btn-primary text-sm">
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center"
          >
            <div className="flex flex-col space-y-1.5">
              <span className={`block w-6 h-0.5 bg-charcoal-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-charcoal-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-4 h-0.5 bg-charcoal-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : 'ml-auto'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-6 bg-white/95 backdrop-blur-md border-t border-blush-100">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-charcoal-600 hover:text-blush-600 font-medium py-3 px-4 rounded-xl hover:bg-blush-50 transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Link href="/booking" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center mt-4 text-sm">
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
