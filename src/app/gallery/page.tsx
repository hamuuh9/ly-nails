'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const categories = ['All', 'Nail Art', 'Extensions', 'Gel Polish', 'French', 'Minimalist'];

const galleryItems = [
  { id: 1, category: 'Nail Art', title: 'Floral Nail Art', emoji: '🌸' },
  { id: 2, category: 'Extensions', title: 'Long Square Extensions', emoji: '💅' },
  { id: 3, category: 'French', title: 'Classic French Tips', emoji: '🤍' },
  { id: 4, category: 'Gel Polish', title: 'Rose Pink Gel', emoji: '🌹' },
  { id: 5, category: 'Minimalist', title: 'Simple Line Art', emoji: '✨' },
  { id: 6, category: 'Nail Art', title: 'Abstract Design', emoji: '🎨' },
  { id: 7, category: 'Extensions', title: 'Stiletto Extensions', emoji: '💎' },
  { id: 8, category: 'Gel Polish', title: 'Deep Burgundy', emoji: '🍷' },
  { id: 9, category: 'French', title: 'Coloured French Tips', emoji: '🌈' },
  { id: 10, category: 'Nail Art', title: 'Glitter Accent', emoji: '✨' },
  { id: 11, category: 'Minimalist', title: 'Nude with Gold Line', emoji: '💛' },
  { id: 12, category: 'Gel Polish', title: 'Matte Black', emoji: '🖤' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? galleryItems : galleryItems.filter((i) => i.category === activeCategory);

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
                Portfolio
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="gradient-text">Gallery</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Browse our collection of nail designs. Every set is crafted with precision and creativity.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="relative py-8 bg-gray-900 border-b border-white/5 sticky top-20 z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/25'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 50}>
                <div className="group relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-rose-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-500/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl group-hover:scale-125 transition-transform duration-500">
                      {item.emoji}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-rose-400 text-sm">{item.category}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="relative py-24 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Follow Us on <span className="gradient-text">Instagram</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              See our latest work and get inspired by following @lynailsbirmingham.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              @lynailsbirmingham
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
