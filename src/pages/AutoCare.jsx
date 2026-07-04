const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Volume2, Gauge, Speaker, Radio, Sparkles, Droplets, Car, Check } from 'lucide-react';
import ScrollReveal from '../components/rpx/ScrollReveal';
import SectionHeader from '../components/rpx/SectionHeader';

const CAR_AUDIO_IMG ='/images/Subwoofer en versterker.png';
const DSP_IMG = '/images/Dsp.png';
const DETAIL_IMG = '/images/Polijst.png';
const COATING_IMG ='/images/Auto.png';

const audioServices = [
  {
    icon: Radio,
    title: 'DSP',
    description: 'Digital Signal Processing voor optimale klankweergave. Wij stemmen uw systeem af op de akoestiek van uw voertuig voor een studiokwaliteit ervaring.',
    image: DSP_IMG,
  },
  {
    icon: Gauge,
    title: 'Versterkers',
    description: 'Installatie van high-end versterkers die uw luidsprekers aansturen met zuiver, onvervormd vermogen.',
    image: CAR_AUDIO_IMG,
  },
  {
    icon: Volume2,
    title: 'Subwoofers',
    description: 'Custom subwoofer installaties voor diepe, strakke bas. Van sealed tot ported behuizingen, op maat gemaakt voor uw auto.',
    image: CAR_AUDIO_IMG,
  },
  {
    icon: Speaker,
    title: 'Speaker Upgrades',
    description: 'Vervang uw fabrieksspeakers door premium componenten voor een dramatische verbetering in geluidskwaliteit.',
    image: DSP_IMG,
  },
];

const detailingServices = [
  {
    icon: Sparkles,
    title: 'Paint Correction',
    description: 'Machine polijsten verwijdert krassen, swirls en oxidatie. Meerdere stappen polijstproces voor een perfecte lak.',
    steps: ['Lakbeoordeling', 'Clay bar behandeling', 'Multi-stap polijsten', 'Finishing polish', 'Sealant of coating'],
  },
  {
    icon: Droplets,
    title: 'Keramische Coatings',
    description: 'Langdurige bescherming met professionele keramische coatings. Hydrofobe werking, UV-bescherming en extreme glans.',
    steps: ['Lak decontaminatie', 'Paint correction', 'IPA wipe-down', 'Coating applicatie', 'Uitharding & inspectie'],
  },
  {
    icon: Car,
    title: 'Interieur Detailing',
    description: 'Dieptereiniging van het volledige interieur. Leer, stof, kunststof en glas worden vakkundig behandeld.',
    steps: ['Stofzuigen & uitblazen', 'Stoomreiniging', 'Leerbehandeling', 'Kunststof dressing', 'Glas polijsten'],
  },
  {
    icon: Sparkles,
    title: 'Exterieur Detailing',
    description: 'Complete buitenreiniging en bescherming. Van velgen tot dak, elk oppervlak wordt behandeld.',
    steps: ['Pre-wash & foam', 'Handwas', 'Decontaminatie', 'Polijsten', 'Wax of sealant'],
  },
];

export default function AutoCare() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={COATING_IMG} alt="Premium auto care en detailing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/60 to-[#0F0F10]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-40 w-full">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B5121B]">RPX Auto Care</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 leading-tight">
              Premium Voertuig<br />Audio & Detailing
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-lg text-white/50 max-w-xl">
              Van DSP-installaties tot keramische coatings — wij behandelen uw voertuig met de precisie die het verdient.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Vehicle Audio */}
      <section className="section-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Voertuig Audio"
            title="Audio Upgrades"
            description="Professionele audio-installaties die uw rijervaring transformeren."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audioServices.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="group rounded-3xl overflow-hidden relative h-[320px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="w-10 h-10 rounded-xl bg-[#B5121B]/20 flex items-center justify-center mb-3">
                      <service.icon className="w-5 h-5 text-[#B5121B]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailing */}
      <section className="section-light py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Detailing"
            title="Car Detailing Services"
            description="Professionele reiniging, correctie en bescherming voor uw voertuig."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {detailingServices.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 border border-black/5 hover:shadow-xl hover:shadow-[#B5121B]/5 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F0F10] flex items-center justify-center mb-5">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F0F10] mb-3">{service.title}</h3>
                  <p className="text-[#0F0F10]/50 text-sm leading-relaxed mb-6">{service.description}</p>
                  <p className="text-xs uppercase tracking-widest text-[#0F0F10]/30 mb-3">Processtappen</p>
                  <ul className="space-y-2">
                    {service.steps.map((step, si) => (
                      <li key={step} className="flex items-center gap-3 text-sm text-[#0F0F10]/70">
                        <span className="w-5 h-5 rounded-full bg-[#B5121B]/10 text-[#B5121B] text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {si + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-anthracite py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Uw voertuig verdient het beste</h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Bekijk onze detailing pakketten of neem contact op voor een vrijblijvend adviesgesprek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/detailing-pakketten" className="btn-rpx inline-flex items-center gap-2">
                Bekijk pakketten <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-rpx-outline inline-flex items-center gap-2">
                Afspraak maken
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}