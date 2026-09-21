const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Wifi, Globe, Volume2, Tv, Wrench, Building, Hammer } from 'lucide-react';
import ScrollReveal from '../components/rpx/ScrollReveal';
import SectionHeader from '../components/rpx/SectionHeader';

const CAMERA_IMG ='/images/zakelijke diensten.png';
const NETWORK_IMG ='/images/Accespoint.png';
const WIFI_IMG = '/images/Patchkast.jpg';
const TV_IMG = '/images/Televisie.png';
const AUDIO_IMG = '/images/Audio installatie.png';
const HERO_IMG = '/images/Vastgoedonderhoud.jpg';

const services = [
  {
    icon: Camera,
    title: 'Camera Systemen',
    description: 'Professionele IP-camerasystemen voor beveiliging en monitoring. Complete oplossingen met NVR, nachtzicht en remote toegang via uw smartphone.',
    benefits: ['IP-camera installatie', 'NVR configuratie', 'Remote monitoring', 'Nachtzicht systemen'],
    image: CAMERA_IMG,
  },
  {
    icon: Wifi,
    title: 'Netwerken',
    description: 'Betrouwbare bekabelde en draadloze netwerkinfrastructuur. Van CAT6 bekabeling tot enterprise-grade WiFi access points.',
    benefits: ['CAT6/CAT7 bekabeling', 'WiFi access points', 'Netwerk switches', 'Patchpanelen'],
    image: NETWORK_IMG,
  },
  {
    icon: Globe,
    title: 'Internet',
    description: 'Optimale internetverbindingen en WiFi-dekking door het gehele pand. Mesh-netwerken en professionele access points.',
    benefits: ['Kabel aanleg', 'WiFi optimalisatie', 'Router configuratie'],
    image: WIFI_IMG,
  },
  {
    icon: Volume2,
    title: 'Audio',
    description: 'Inbouw- en opbouwgeluidsinstallaties voor woningen en bedrijven. Multi-room audio, soundbars en volledige surround systemen.',
    benefits: ['Multi-room audio', 'Surround sound', 'Inbouw speakers', 'Streaming integratie'],
    image: AUDIO_IMG,
  },
  {
    icon: Tv,
    title: 'Televisie',
    description: 'Professionele TV-montage en installatie. Verborgen bekabeling, soundbar integratie en smart home koppeling.',
    benefits: ['Wandmontage', 'Verborgen bekabeling', 'Smart TV setup', 'HDMI distributie'],
    image: TV_IMG,
  },
  {
    icon: Wrench,
    title: 'Vastgoedonderhoud',
    description: 'Technisch onderhoud voor vastgoed en VvE\'s. Preventief en correctief onderhoud aan technische installaties.',
    benefits: ['Elektra Installatie', 'Storingsdienst', 'Preventief onderhoud', 'Reparatie Werkzaamheden'],
    image: HERO_IMG,
  },
  {
    icon: Building,
    title: 'Zakelijke Diensten',
    description: 'Volledige technische installaties voor bedrijfspanden, kantoren en winkels. Beveiligingssystemen, netwerk en AV-oplossingen.',
    benefits: ['Kantoorinrichting', 'AV voor Vergaderruimtes', 'Beveiligingssystemen', 'Onderhoudscontracten', 'Technische dienst werkzaamheden' ],
    image: NETWORK_IMG,
  },
  {
    icon: Hammer,
    title: 'Montage & Afwerking',
    description: 'Strakke montage en professionele afwerking. Van kabelgoten tot inbouwoplossingen — alles netjes weggewerkt.',
    benefits: ['Kabelmanagement', 'Inbouwoplossingen', 'Wandafwerking', 'Oplevering', 'Elektra en Domotica'],
    image: TV_IMG,
  },
];

export default function Installaties() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={CAMERA_IMG} alt="Professionele installaties" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/60 to-[#0F0F10]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-40 w-full">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B5121B]">RPX Installaties</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 leading-tight">
              Technische Installaties<br />op Maat
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-lg text-white/50 max-w-xl">
              Complete technische oplossingen voor particulier en zakelijk. Van camerasystemen tot netwerken en audiovisuele installaties.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, i) => (
              <ScrollReveal key={service.title}>
                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}>
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="rounded-3xl overflow-hidden aspect-video">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#B5121B]/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-[#B5121B]" />
                      </div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-white/50 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-8">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-sm text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#B5121B]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-[#B5121B] font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Offerte aanvragen <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
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
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Klaar voor een professionele installatie?</h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">Neem contact op voor een vrijblijvende offerte. Wij komen graag bij u langs voor een adviesgesprek.</p>
            <Link to="/contact" className="btn-rpx inline-flex items-center gap-2">
              Neem contact op <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}