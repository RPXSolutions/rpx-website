const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Wrench, Eye, Heart, Star } from 'lucide-react';
import ScrollReveal from '../components/rpx/ScrollReveal';
import SectionHeader from '../components/rpx/SectionHeader';
import AnimatedCounter from '../components/rpx/AnimatedCounter';

const HERO_IMG ='/images/Hero.png';

const values = [
  {
    icon: Eye,
    title: 'Onze Visie',
    description: 'RPX Solutions streeft ernaar de standaard te zetten voor technische dienstverlening in Nederland. Wij geloven dat technologie naadloos moet integreren in het dagelijks leven — onzichtbaar waar het kan, maar altijd betrouwbaar en krachtig wanneer het nodig is.',
  },
  {
    icon: Users,
    title: 'Onze Achtergrond',
    description: 'Ontstaan uit passie voor techniek en kwaliteit, combineert RPX Solutions jarenlange ervaring in installaties, professionele audio en voertuigverzorging. Wat begon als een specialisme groeide uit tot een veelzijdig bedrijf dat meerdere technische disciplines onder één dak verenigt.',
  },
  {
    icon: Heart,
    title: 'Maatwerk & Klantgerichtheid',
    description: 'Elk project is uniek. Daarom nemen wij de tijd om uw wensen grondig te begrijpen voordat we aan de slag gaan. Geen standaardoplossingen, maar maatwerk dat aansluit op uw specifieke situatie, budget en wensen.',
  },
  {
    icon: Shield,
    title: 'Waarom RPX',
    description: 'Door meerdere technische disciplines te combineren in één bedrijf, bieden wij een unieke service. U heeft één aanspreekpunt voor al uw technische behoeften, van beveiligingscamera\'s tot geluidssystemen en voertuigonderhoud. Persoonlijk contact en korte lijnen maken het verschil.',
  },
  {
    icon: Wrench,
    title: 'Onze Werkwijze',
    description: 'Van het eerste adviesgesprek tot de nazorg — wij hanteren een gestructureerde aanpak die garandeert dat elk project soepel verloopt. Transparante communicatie, flexibele planning en oog voor detail kenmerken onze werkwijze.',
  },
  {
    icon: Star,
    title: 'Kwaliteit & Betrouwbaarheid',
    description: 'Wij werken uitsluitend met premium materialen en bewezen technologieën. Ons vakbekwaam personeel wordt continu bijgeschoold in de nieuwste technieken en methoden. Het resultaat: installaties waar u jarenlang zorgeloos van geniet.',
  },
];

export default function OverOns() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="RPX Solutions team en werkzaamheden" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/60 to-[#0F0F10]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-40 w-full">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B5121B]">Over Ons</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 leading-tight">
              Technisch Vakmanschap,<br />Persoonlijke Benadering
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-lg text-white/50 max-w-xl">
              RPX Solutions combineert meerdere technische disciplines in één bedrijf, met behoud van persoonlijk klantcontact.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="section-light py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-xl lg:text-2xl text-[#0F0F10]/70 leading-relaxed font-light">
              Bij RPX Solutions geloven wij dat <span className="text-[#0F0F10] font-semibold">betrouwbaarheid</span>, <span className="text-[#0F0F10] font-semibold">flexibiliteit</span> en <span className="text-[#0F0F10] font-semibold">vakmanschap</span> de basis vormen van elke succesvolle samenwerking. Door installaties, audio en auto care te combineren, bieden wij een uniek serviceconcept met één vertrouwd aanspreekpunt.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div>
                <div className="text-3xl lg:text-4xl font-black text-[#0F0F10]">
                  <AnimatedCounter end={3} />
                </div>
                <p className="text-[#0F0F10]/40 text-sm mt-1">Disciplines</p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-black text-[#0F0F10]">
                  <AnimatedCounter end={5} suffix="+" />
                </div>
                <p className="text-[#0F0F10]/40 text-sm mt-1">Jaar ervaring</p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-black text-[#0F0F10]">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <p className="text-[#0F0F10]/40 text-sm mt-1">Tevredenheid</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.05}>
                <div className="glass rounded-3xl p-8 lg:p-10 h-full group hover:border-[#B5121B]/20 transition-colors duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-[#B5121B]/10 flex items-center justify-center mb-6 group-hover:bg-[#B5121B] transition-colors duration-500">
                    <value.icon className="w-6 h-6 text-[#B5121B] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/50 leading-relaxed">{value.description}</p>
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
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Laten we kennismaken</h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Benieuwd wat RPX Solutions voor u kan betekenen? Neem vrijblijvend contact op.
            </p>
            <Link to="/contact" className="btn-rpx inline-flex items-center gap-2">
              Neem contact op <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}