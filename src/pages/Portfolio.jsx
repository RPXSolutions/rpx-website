const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, MapPin, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/rpx/ScrollReveal';
import SectionHeader from '../components/rpx/SectionHeader';

const categories = [
  'Alles',
  'Camera systemen',
  'Netwerken',
  'Audio installaties',
  'TV installaties',
  'Live Audio',
  'Audio upgrades',
  'Detailing',
];

const projects = [
  {
    title: 'Beveiligingssysteem',
    category: 'Camera systemen',
    description: 'Complete IP-camera installatie met 8 camera\'s, NVR en remote monitoring voor een vrijstaande villa.',
    services: ['IP Camera\'s', 'NVR', 'Bekabeling', 'App configuratie'],
    location: 'Den Haag',
    image: 'https://media.db.com/images/public/6a4173a6805d7de819ea1133/6753877e0_generated_10defdfe.png',
    aspect: 'landscape',
  },
  {
    title: 'Enterprise Netwerk Kantoorpand',
    category: 'Netwerken',
    description: 'Volledige netwerkinfrastructuur voor een kantoor met 50 werkplekken. CAT6 bekabeling, managed switches en enterprise WiFi.',
    services: ['CAT6 Bekabeling', 'Managed Switches', 'WiFi Access Points', 'Server rack'],
    location: 'Rotterdam',
    image: 'https://media.db.com/images/public/6a4173a6805d7de819ea1133/1844796fb_generated_f3088090.png',
    aspect: 'landscape',
  },
  {
    title: 'Multi-room Audio Penthouse',
    category: 'Audio installaties',
    description: 'Sonos multi-room installatie met inbouw speakers in 6 kamers, volledig geïntegreerd met domotica.',
    services: ['Inbouw Speakers', 'Sonos Integratie', 'Bekabeling', 'Domotica'],
    location: 'Amsterdam',
    image: 'https://media.db.com/images/public/6a4173a6805d7de819ea1133/84e0c655d_generated_d904c33e.png',
    aspect: 'portrait',
  },
  {
    title: 'Home Cinema & TV Wall',
    category: 'TV installaties',
    description: '85 inch TV-montage met verborgen bekabeling, Sonos Arc soundbar en Philips Ambilight integratie.',
    services: ['TV Montage', 'Soundbar', 'Verborgen Bekabeling', 'Smart Home'],
    location: 'Den Haag',
    image: 'https://media.db.com/images/public/6a4173a6805d7de819ea1133/73d9eb510_generated_f7b10f3c.png',
    aspect: 'landscape',
  },
  {
    title: 'Festival Geluid Kingsday',
    category: 'Live Audio',
    description: 'Volledige PA-installatie voor Koningsdagfestival met 2.000 bezoekers. Line array systeem met FOH engineer.',
    services: ['Line Array', 'FOH', 'Monitor Systeem', 'Stroomvoorziening'],
    location: 'Raamsdonkveer',
    image: 'https://media.db.com/images/public/6a4173a6805d7de819ea1133/c57efe521_generated_d21cb55d.png',
    aspect: 'landscape',
  },
  {
    title: 'Ford Focus RS Subwoofer installatie',
    category: 'Audio upgrades',
    description: 'Complete audio upgrade met DSP, versterker, component speakers en subwoofer.',
    services: ['DSP', 'Versterker', 'Component Speakers', 'Custom Sub'],
    location: 'Goirle',
    image: 'https://media.db.com/images/public/6a4173a6805d7de819ea1133/1d1d89e27_generated_c828d570.png',
    aspect: 'portrait',
  },
  {
    title: 'Ceramic Coating Mercedes AMG',
    category: 'Detailing',
    description: 'Volledige paint correction gevolgd door 3-laags keramische coating. Inclusief velgen coating en glascoating.',
    services: ['Paint Correction', 'Ceramic Coating', 'Velgen', 'Glas'],
    location: 'Breda',
    image: 'https://media.db.com/images/public/6a4173a6805d7de819ea1133/f9107cba0_generated_97712632.png',
    aspect: 'landscape',
  },
  {
    title: 'Bruiloft Geluid & DJ Setup',
    category: 'Live Audio',
    description: 'PA-systeem en DJ-setup voor een bruiloft met 200 gasten. Inclusief draadloze microfoon voor speeches.',
    services: ['PA Systeem', 'DJ Setup', 'Draadloze Mic', 'Verlichting'],
    location: 'Gouda',
    image: 'https://media.db.com/images/public/6a4173a6805d7de819ea1133/84e0c655d_generated_d904c33e.png',
    aspect: 'landscape',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Alles');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeCategory === 'Alles'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Portfolio"
            title="Onze Projecten"
            description="Een selectie van recente projecten die ons vakmanschap en onze veelzijdigheid tonen."
          />

          {/* Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#B5121B] text-white'
                      : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid */}
      <section className="section-dark pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`${project.aspect === 'portrait' ? 'md:row-span-2' : ''}`}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group block rounded-3xl overflow-hidden relative w-full text-left h-full min-h-[300px]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs text-[#B5121B] font-semibold uppercase tracking-wider">{project.category}</span>
                      <h3 className="text-lg font-bold text-white mt-1 mb-1">{project.title}</h3>
                      <div className="flex items-center gap-1 text-white/40 text-xs">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0F0F10]/95 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#232323] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-xl flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="Sluiten"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <span className="text-xs text-[#B5121B] font-semibold uppercase tracking-wider">{selectedProject.category}</span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mt-2 mb-2">{selectedProject.title}</h2>
                <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
                  <MapPin className="w-4 h-4" />
                  {selectedProject.location}
                </div>
                <p className="text-white/60 leading-relaxed mb-8">{selectedProject.description}</p>

                <h4 className="text-xs uppercase tracking-widest text-white/30 mb-3">Uitgevoerde diensten</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.services.map((s) => (
                    <span key={s} className="text-xs font-medium text-white/60 bg-white/5 px-4 py-2 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  onClick={() => setSelectedProject(null)}
                  className="btn-rpx inline-flex items-center gap-2"
                >
                  Vergelijkbaar project? <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}