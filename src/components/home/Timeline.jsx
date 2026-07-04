import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '../rpx/ScrollReveal';
import SectionHeader from '../rpx/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Eerste Consultatie',
    duration: '30–60 minuten',
    description: 'Gratis intake waarin wensen en mogelijkheden worden besproken.',
  },
  {
    number: '02',
    title: 'Offerte & Goedkeuring',
    duration: '1–2 dagen',
    description: 'Offerte op maat waarna de uitvoering wordt ingepland.',
  },
  {
    number: '03',
    title: 'Planning',
    duration: 'Projectafhankelijk',
    description: 'Flexibele planning, ook buiten reguliere werktijden.',
  },
  {
    number: '04',
    title: 'Installatie',
    duration: 'Projectafhankelijk',
    description: 'Professionele uitvoering met oog voor detail.',
  },
  {
    number: '05',
    title: 'Nazorg & Support',
    duration: 'Doorlopend',
    description: 'Onderhoud, ondersteuning en advies waar nodig.',
  },
];

function TimelineStep({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative flex gap-6 lg:gap-10 pb-16 last:pb-0">
      {/* Line */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black flex-shrink-0 z-10 border-2"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            backgroundColor: isInView ? '#B5121B' : 'transparent',
            borderColor: isInView ? '#B5121B' : 'rgba(255,255,255,0.1)',
            color: 'white',
          }}
        >
          {step.number}
        </motion.div>
        {index < steps.length - 1 && (
          <motion.div
            className="w-px flex-1 mt-2 origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ background: 'linear-gradient(to bottom, #B5121B, rgba(181,18,27,0.1))' }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        className="flex-1 pt-2"
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="glass rounded-2xl p-6 lg:p-8">
          <span className="text-xs font-mono text-[#B5121B] tracking-wider">{step.duration}</span>
          <h3 className="text-xl lg:text-2xl font-bold text-white mt-2 mb-3">{step.title}</h3>
          <p className="text-white/50 leading-relaxed">{step.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="section-anthracite py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          label="Werkwijze"
          title="Onze Werkwijze"
          description="Van eerste contact tot doorlopende ondersteuning — een transparant proces in vijf stappen."
        />

        <div className="mt-16">
          {steps.map((step, i) => (
            <TimelineStep key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}