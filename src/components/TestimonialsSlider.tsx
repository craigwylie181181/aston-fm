'use client';

import { useRef } from 'react';

export default function TestimonialsSlider({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (left: number) => trackRef.current?.scrollBy({ left, behavior: 'smooth' });

  return (
    <div className="testimonials-slider">
      <button className="testimonials-arrow testimonials-arrow-left" onClick={() => scroll(-400)} aria-label="Previous testimonial">&lsaquo;</button>
      <div className="testimonials-track" ref={trackRef}>
        {children}
      </div>
      <button className="testimonials-arrow testimonials-arrow-right" onClick={() => scroll(400)} aria-label="Next testimonial">&rsaquo;</button>
    </div>
  );
}
