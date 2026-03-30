'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const categories = ['All', 'Nail Art', 'Extensions', 'Gel Polish', 'French', 'Minimalist'];
const galleryItems = [
  { id: 1, category: 'Nail Art', title: 'Floral Nail Art', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80' },
  { id: 2, category: 'Extensions', title: 'Long Square Extensions', image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&q=80' },
  { id: 3, category: 'French', title: 'Classic French Tips', image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80' },
  { id: 4, category: 'Gel Polish', title: 'Rose Pink Gel', image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&q=80' },
  { id: 5, category: 'Minimalist', title: 'Simple Line Art', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80' },
  { id: 6, category: 'Nail Art', title: 'Abstract Design', image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80' },
  { id: 7, category: 'Extensions', title: 'Stiletto Extensions', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80' },
  { id: 8, category: 'Gel Polish', title: 'Deep Burgundy', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80' },
  { id: 9, category: 'French', title: 'Coloured French Tips', image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&q=80' },
  { id: 10, category: 'Nail Art', title: 'Glitter Accent', image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&q=80' },
  { id: 11, category: 'Minimalist', title: 'Nude with Gold Line', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80' },
  { id: 12, category: 'Gel Polish', title: 'Matte Black', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80' },
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
              <p className="text-lg text-charcoal-500">Browse our collection of nail designs. Every set is crafted with precision.</p>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 50}>
                <div className="group relative aspect-square bg-blush-100 rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-soft-lg transition-all duration-500">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream-200/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-charcoal-800 font-semibold">{item.title}</p>
                    <p className="text-blush-500 text-sm">{item.category}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Follow Us on <span className="text-gold-300">Instagram</span></h2>
            <p className="text-white/90 mb-10 text-lg">@lynailsbirmingham</p>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-gold">@lynailsbirmingham</a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
