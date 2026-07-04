import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../rpx/ScrollReveal';

export default function CTASection() {
  return (
    <section className="section-dark py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B5121B]">
            Klaar om te beginnen?
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-4 leading-tight">
            Laat ons uw project<br />tot leven brengen
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Neem vandaag nog contact op voor een vrijblijvend adviesgesprek. Wij denken graag met u mee.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-rpx text-center flex items-center justify-center gap-2 group">
              Offerte aanvragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+31657440612" className="btn-rpx-outline text-center">
              Bel direct
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}