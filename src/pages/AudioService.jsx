const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Mic, Disc3, Users, Speaker, Headphones, Check } from 'lucide-react';
import ScrollReveal from '../components/rpx/ScrollReveal';
import SectionHeader from '../components/rpx/SectionHeader';

const EVENT_IMG = '/images/Podium.png';
const CONSOLE_IMG = '/images/Mixertafel.jpg';

const audioSets = [
  {
    name: 'Small Event',
    capacity: 'Tot 60 bezoekers',
    description: 'Compact, krachtig geluid voor kleinere locaties, feesten en zakelijke bijeenkomsten.',
    equipment: ['Geluidset', 'Mixer / DSP', 'Alle bekabeling', 'Opzet & Afbouw'],
    ideal: 'Verjaardagen, Borrels, Presentaties',
  },
  {
    name: 'Medium Event',
    capacity: 'Tot 800 bezoekers',
    highlight: true,
    description: 'Professioneel PA-systeem voor middelgrote evenementen, trouwerijen en bedrijfsfeesten.',
    equipment: ['Geluidset', 'Digitale Mixer', 'FOH Engineer', 'Alle bekabeling', 'Opzet & Afbouw'],
    ideal: 'Bruiloften, Bedrijfsfeesten, Festivals',
  },
  {
    name: 'Large Event',
    capacity: 'Tot 2.000 bezoekers',
    description: 'Grootschalig geluidssysteem voor festivals, concerten en grote evenementen.',
    equipment: ['Geluidset', 'Digitale FOH Console', 'Monitor systeem', 'FOH Engineer', 'Rigging & Trussing', 'Opzet & Afbouw'],
    ideal: 'Festivals, Concerten, Grote evenementen',
  },
];

const serviceTypes = [
  {
    icon: Music,
    title: 'Band Mix',
    description: 'Complete geluidsversterking voor live bands. Van monitoring tot FOH — wij zorgen dat elke noot perfect klinkt.',
    features: ['Multitrack mixing', 'In-ear monitoring', 'Stagebox & multicore', 'Soundcheck & line-check', 'Professionele FOH engineer'],
  },
  {
    icon: Disc3,
    title: 'DJ Set',
    description: 'Krachtige, heldere weergave voor DJ-sets. Van deep house tot hardstyle, wij leveren het juiste systeem.',
    features: ['CDJ/Controller setup', 'DJ monitor', 'Subwoofer-zware configuratie', 'Verlichting op aanvraag', 'Technische standby'],
  },
  {
    icon: Mic,
    title: 'Tape Artiest',
    description: 'Geluidsinstallatie geoptimaliseerd voor artiesten die op backing tracks performen. Helder vocaal geluid met volle ondersteuning.',
    features: ['Draadloze microfoon', 'Backing track playback', 'Monitor systeem', 'Vocale effecten', 'Technische begeleiding'],
  },
];

const expansions = [
  'Extra subwoofers',
  'Delay speakers voor grote ruimtes',
  'Verlichting',
  'Hazemachines',
  'Draadloze microfoons',
  'Stroomvoorziening (aggregaat)',
  'Tent- en podium',
  'Meer mogelijk in overleg',
];

export default function AudioService() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={EVENT_IMG} alt="Professioneel geluidssysteem op festival" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/60 to-[#0F0F10]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-40 w-full">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B5121B]">RPX Audio Service</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 leading-tight">
              Perfecte Audio die<br />uw Event Versterkt
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-lg text-white/50 max-w-xl">
              Van intieme feesten tot grootschalige festivals — professionele geluidsoplossingen op maat voor uw evenement.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Audio Sets */}
      <section className="section-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Audio Sets"
            title="Geluidspakketten op Maat"
            description="Schaalbare oplossingen van 60 tot 2.000 bezoekers. Indoor en outdoor, DJ en live band."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {audioSets.map((set, i) => (
              <ScrollReveal key={set.name} delay={i * 0.1}>
                <div className={`rounded-3xl p-8 h-full flex flex-col ${
                  set.highlight
                    ? 'bg-gradient-to-b from-[#B5121B]/20 to-[#232323] border border-[#B5121B]/30'
                    : 'glass'
                }`}>
                  {set.highlight && (
                    <span className="text-xs font-bold text-[#B5121B] uppercase tracking-widest mb-4">Populair</span>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-1">{set.name}</h3>
                  <p className="text-[#B5121B] text-sm font-semibold mb-4">{set.capacity}</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{set.description}</p>

                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest text-white/30 mb-3">Inclusief</p>
                    <ul className="space-y-2 mb-6">
                      {set.equipment.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                          <Check className="w-4 h-4 text-[#B5121B] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-xs text-white/30 mb-4">Ideaal voor: {set.ideal}</p>

                  <Link
                    to="/contact"
                    className={`text-center py-3 rounded-2xl font-semibold transition-all duration-300 ${
                      set.highlight
                        ? 'btn-rpx !px-0'
                        : 'btn-rpx-outline !px-0'
                    }`}
                  >
                    Offerte aanvragen
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Indoor / Outdoor note */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12 glass rounded-2xl p-8 text-center">
              <p className="text-white/60 text-sm leading-relaxed max-w-2xl mx-auto">
                <span className="text-white font-semibold">Indoor vs. Outdoor:</span> Buitenevenementen vereisen meer vermogen door geluidsverlies in open lucht. Wij adviseren altijd het juiste systeem op basis van locatie, bezoekersaantal en type evenement.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Types */}
      <section className="section-anthracite py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Specialisaties"
            title="Voor Elk Type Optreden"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {serviceTypes.map((type, i) => (
              <ScrollReveal key={type.title} delay={i * 0.1}>
                <div className="glass rounded-3xl p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#B5121B]/10 flex items-center justify-center mb-6">
                    <type.icon className="w-7 h-7 text-[#B5121B]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                        <Check className="w-4 h-4 text-[#B5121B] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Expansions */}
      <section className="section-dark py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            label="Uitbreidingen"
            title="Optionele Uitbreidingen"
            description="Breid uw pakket uit met extra apparatuur en diensten voor een onvergetelijk evenement."
          />
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expansions.map((item) => (
                <div key={item} className="flex items-center gap-3 glass rounded-2xl px-6 py-4">
                  <div className="w-2 h-2 rounded-full bg-[#B5121B]" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-anthracite py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Evenement gepland?</h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Vertel ons over uw evenement en wij stellen het perfecte geluidspakket samen.
            </p>
            <Link to="/contact" className="btn-rpx inline-flex items-center gap-2">
              Offerte aanvragen <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}