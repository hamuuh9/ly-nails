'use client';

import { useInView } from '@/hooks/useInView';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in';
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView();

  const animations = {
    'fade-up': 'translate-y-12 opacity-0',
    'fade-left': '-translate-x-12 opacity-0',
    'fade-right': 'translate-x-12 opacity-0',
    'scale-in': 'scale-95 opacity-0',
  };

  const activeClass = {
    'fade-up': 'translate-y-0 opacity-100',
    'fade-left': 'translate-x-0 opacity-100',
    'fade-right': 'translate-x-0 opacity-100',
    'scale-in': 'scale-100 opacity-100',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isInView ? activeClass[animation] : animations[animation]
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
