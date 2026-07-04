const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Wifi, Music, Car } from 'lucide-react';
import ScrollReveal from '../rpx/ScrollReveal';
import SectionHeader from '../rpx/SectionHeader';

const services = [
  {
    title: 'RPX Installaties',
    description: 'Camera systemen, netwerken, audio, televisie en vastgoedonderhoud. Complete technische installaties voor woning en bedrijf.',
    image: '/images/zakelijke diensten.png',
    icon: Wifi,
    path: '/installaties',
    stats: ['Camera\'s', 'Netwerken', 'Audio', 'TV'],
  },
  {
    title: 'RPX Audio Service',
    description: 'Professionele geluidsinstallaties voor evenementen, festivals, bands en DJ-sets. Van kleine sets tot grootschalig.',
    image: '/images/Mixertafel.jpg',
    icon: Music,
    path: '/audio-service',
    stats: ['Live Bands', 'DJ Sets', 'Festivals', 'FOH'],
  },
  {
    title: 'RPX Auto Care',
    description: 'Premium voertuig-audio upgrades en detailing. Van DSP-installaties tot keramische coatings en polijstwerk.',
    image:  '/images/Auto.png',
    icon: Car,
    path: '/auto-care',
    stats: ['DSP', 'Subwoofers', 'Coatings', 'Detailing'],
  },
];

export default function ServiceTriad() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="section-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Onze Diensten"
          title="Drie Disciplines, Één Partner"
          description="Van technische installaties tot live audio en voertuigverzorging — RPX Solutions combineert expertise in één bedrijf."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <Link
                to={service.path}
                className="group block relative rounded-3xl overflow-hidden h-[480px]"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: hovered === i ? 1.05 : 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-[#B5121B]" />
                    </div>
                    <motion.div
                      animate={{ x: hovered === i ? 0 : -10, opacity: hovered === i ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-[#B5121B]" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{service.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.stats.map((stat) => (
                      <span
                        key={stat}
                        className="text-xs font-medium text-white/40 bg-white/5 px-3 py-1 rounded-full"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}