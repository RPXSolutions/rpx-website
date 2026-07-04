import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function SectionHeader({ label, title, description, light = false, center = true }) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-16`}>
      {label && (
        <ScrollReveal>
          <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-[#B5121B]' : 'text-[#B5121B]'
          }`}>
            {label}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black mt-4 leading-tight ${
          light ? 'text-[#0F0F10]' : 'text-white'
        }`}>
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p className={`mt-4 text-lg max-w-2xl ${center ? 'mx-auto' : ''} leading-relaxed ${
            light ? 'text-[#0F0F10]/60' : 'text-white/50'
          }`}>
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}