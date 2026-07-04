import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles, Droplets, Car, Shield } from 'lucide-react';
import ScrollReveal from '../components/rpx/ScrollReveal';
import SectionHeader from '../components/rpx/SectionHeader';

const packages = [
  {
    name: 'Basic',
    price: '€129',
    description: 'Een grondige reiniging en basisbescherming om uw voertuig weer fris te maken.',
    icon: Car,
    features: [
      'Handwas (2-emmer methode)',
      'Velgen reiniging & bescherming',
      'Banden dressing',
      'Buitenste glas reiniging',
      'Interieur stofzuigen',
      'Snelle interieur reiniging',
      'Kunststof dressing',
      'Basis sealant (3 maanden bescherming)',
    ],
    highlight: false,
  },
  {
    name: 'Premium',
    price: '€275',
    description: 'Dieptereiniging met paint correction en langdurige bescherming voor een stralende lak.',
    icon: Droplets,
    features: [
      'Alles uit het Basic pakket',
      'Clay bar decontaminatie',
      'Light paint correction (1-stap)',
      'Interieur dieptereiniging',
      'Leer reiniging & bescherming',
      'Glas reiniging binnen & buiten',
      'Premium sealant (6 maanden bescherming)',
    ],
    highlight: true,
  },
  {
    name: 'Elite',
    price: '€385',
    description: 'Ultieme bescherming met keramische coating en multi-step paint correction.',
    icon: Shield,
    features: [
      'Alles uit het Premium pakket',
      'Multi-step paint correction',
      'Keramische coating (2-3 jaar bescherming)',
      'Velgen keramische coating',
      'Glas coating',
      'Motorruimte reiniging',
      'Detailing inspectie & nazorg',
    ],
    highlight: false,
  },
];

const extras = [
  { name: 'Extra voertuig (2e auto)', note: 'Korting op 2e voertuig bijzelfde adres' },
  { name: 'Velgen aparte behandeling', note: 'Toeslag bij Basic pakket' },
  { name: 'Leer dieptereiniging', note: 'Toeslag bij Basic pakket' },
  { name: 'Dieptereiniging interieur', note: 'Toeslag bij Basic pakket' },
  { name: 'Pickup & return service', note: 'Binnen 25 km gratis' },
  { name: 'Op locatie mogelijk', note: 'Op aanvraag' },
];

export default function DetailingPakketten() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B5121B]">RPX Auto Care</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 leading-tight">
              Detailing Pakketten
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-lg text-white/50 max-w-xl mx-auto">
              Drie pakketten, elk afgestemd op de behoefte van uw voertuig. Van basisreiniging tot keramische bescherming. Zie hieronder onze vanaf prijzen. Voor autobedrijven & zakelijke klanten ook mogelijk voor meerdere voertuigen.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Packages */}
      <section className="section-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.1}>
                <div className={`rounded-3xl p-8 h-full flex flex-col ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-[#B5121B]/20 to-[#232323] border border-[#B5121B]/30'
                    : 'glass'
                }`}>
                  {pkg.highlight && (
                    <span className="text-xs font-bold text-[#B5121B] uppercase tracking-widest mb-4">Populair</span>
                  )}
                  <div className="w-14 h-14 rounded-2xl bg-[#B5121B]/10 flex items-center justify-center mb-6">
                    <pkg.icon className="w-7 h-7 text-[#B5121B]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-3xl font-black text-white mt-2 mb-1">{pkg.price}</p>
                  <p className="text-white/40 text-xs mb-6">incl. btw · per voertuig</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{pkg.description}</p>

                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest text-white/30 mb-3">Inclusief</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
                          <Check className="w-4 h-4 text-[#B5121B] flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className={`text-center py-3 rounded-2xl font-semibold transition-all duration-300 ${
                      pkg.highlight ? 'btn-rpx !px-0' : 'btn-rpx-outline !px-0'
                    }`}
                  >
                    {pkg.name} boeken
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Note */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12 glass rounded-2xl p-8 text-center">
              <p className="text-white/60 text-sm leading-relaxed max-w-2xl mx-auto">
                <span className="text-white font-semibold">Twijfelt u welk pakket past?</span> Wij adviseren u graag persoonlijk. Neem contact op voor een vrijblijvend advies op maat.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Extras */}
      <section className="section-anthracite py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            label="Aanvullend"
            title="Optionele Uitbreidingen"
            description="Breid uw gekozen pakket uit met extra diensten."
          />
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {extras.map((extra) => (
                <div key={extra.name} className="flex items-center justify-between glass rounded-2xl px-6 py-4">
                  <div>
                    <p className="text-white/80 text-sm font-medium">{extra.name}</p>
                    <p className="text-white/30 text-xs mt-0.5">{extra.note}</p>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#B5121B] flex-shrink-0" />
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
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Klaar voor een stralende auto?</h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Boek vandaag nog een afspraak of vraag een vrijblijvende offerte aan.
            </p>
            <Link to="/contact" className="btn-rpx inline-flex items-center gap-2">
              Afspraak maken <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}