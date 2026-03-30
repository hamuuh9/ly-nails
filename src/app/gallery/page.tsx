'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const categories = ['All', 'Nail Art', 'French Tips', 'Floral', '3D Design', 'Valentine'];
const galleryItems = [
  { id: 1, category: 'Valentine', title: 'Valentine Red Tips with Hearts & XOXO', image: '/images/ly-nails-1.jpg' },
  { id: 2, category: 'Nail Art', title: 'Black French Tips with Cross Charms', image: '/images/ly-nails-2.jpg' },
  { id: 3, category: 'Floral', title: 'Pink Ombre Floral Design', image: '/images/ly-nails-3.jpg' },
  { id: 4, category: '3D Design', title: 'Pink with Gold Accents & 3D Flowers', image: '/images/ly-nails-4.jpg' },
  { id: 5, category: 'Nail Art', title: 'Black & Pink Hearts with Gold Studs', image: '/images/ly-nails-5.jpg' },
  { id: 6, category: '3D Design', title: 'Pink with Gold Frames & Stars', image: '/images/ly-nails-6.jpg' },
  { id: 7, category: 'French Tips', title: 'Pink & White French with 3D Flowers', image: '/images/ly-nails-7.jpg' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? galleryItems : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-cream-50 via-blush-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-blush-100 text-blush-600 text-sm font-medium rounded-full mb-4">Portfolio</span>
              <h1 className="text-5xl md:text-6xl font-bold text-charcoal-900 mb-6">Our <span className="gradient-text">Gallery</span></h1>
              <p className="text-lg text-charcoal-500">Browse our collection of real nail designs by Ly. Every set is crafted with precision and creativity.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-blush-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category ? 'bg-gradient-to-r from-blush-400 to-rose-400 text-white shadow-soft' : 'bg-blush-50 text-charcoal-500 hover:bg-blush-100 hover:text-blush-600'}`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-blush-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 80}>
                <div className="group relative aspect-[4/5] bg-blush-100 rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold text-lg">{item.title}</p>
                    <p className="text-blush-200 text-sm">{item.category}</p>
                  </div>
                  {/* Ly's Nails watermark */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                      <p className="text-charcoal-800 text-xs font-semibold">Ly&apos;s Nails</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blush-400 via-blush-500 to-rose-400 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Love What You See?</h2>
            <p className="text-white/90 mb-10 text-lg">Book your appointment and let Ly create something beautiful for you.</p>
            <Link href="/booking" className="btn-gold text-lg">Book Now</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
