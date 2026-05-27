import React, { useState } from 'react';

const testimonials = [
  {
    quote:
      "Together, we're enabling NVIDIA developers to design, test, and safely deploy AI-powered vehicles with greater confidence and scale.",
    author: 'Xinzhou Wu',
    role: 'Vice President, Head of Automotive, NVIDIA'
  },
  {
    quote:
      "AZON-AI's Data-Driven Autonomy Development Toolchain provides a fast, measurable, and trusted path to our goal of delivering safe and scalable autonomous systems.",
    author: 'Peter Vaughan Schmidt',
    role: 'CEO'
  },
  {
    quote:
      'At Woven, we verify and validate all of the software that we put into a vehicle before we put it out on the road.',
    author: 'George Kellerman',
    role: 'VP Engineering & Data Science'
  }
];

export default function TestimonialsSection({ theme, isDark }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme.bgAlt} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Customer Testimonials</h2>
          <p className={theme.textMuted}>Trusted by industry leaders worldwide</p>
        </div>
        <div className={`border rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto ${theme.card}`}>
          <div className="text-5xl text-[#af7ed4] mb-4">"</div>
          <p className={`text-lg sm:text-xl mb-6 leading-relaxed ${theme.textSubtle}`}>{testimonials[activeTestimonial].quote}</p>
          <div className={`border-t pt-4 ${theme.border}`}>
            <p className="font-bold">{testimonials[activeTestimonial].author}</p>
            <p className={`text-sm ${theme.textMuted}`}>{testimonials[activeTestimonial].role}</p>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTestimonial(i)}
              className={`h-2 rounded-full transition-all ${i === activeTestimonial ? 'w-8 bg-[#af7ed4]' : `w-2 ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
