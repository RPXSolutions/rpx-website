import React from 'react';
import AnimatedCounter from '../rpx/AnimatedCounter';
import ScrollReveal from '../rpx/ScrollReveal';

const stats = [
  { value: 5, suffix: '+', label: 'Jaar ervaring' },
  { value: 100, suffix: '%', label: 'Klanttevredenheid' },
  { value: 2, suffix: '', label: 'Disciplines' },
  { value: 7, suffix: '/7', label: 'Dagen bereikbaar' },
];

export default function StatsSection() {
  return (
    <section className="section-dark py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/40 text-sm font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}