import React from 'react';
import { MessageCircle, Zap, GraduationCap, Building2, Clock, Headphones, ThumbsUp } from 'lucide-react';
import ScrollReveal from '../rpx/ScrollReveal';
import SectionHeader from '../rpx/SectionHeader';

const reasons = [
  {
    icon: MessageCircle,
    title: 'Advies',
    description: 'Wij focussen op klantgerichtheid en denken graag mee voor het realiseren van uw project.',
  },
  {
    icon: Zap,
    title: 'Directe Communicatie',
    description: 'Direct, snel contact en advies voor uw project.',
  },
  {
    icon: GraduationCap,
    title: 'Vakbekwaam Personeel',
    description: 'Continu geschoold in nieuwste technologieën en methoden.',
  },
  {
    icon: Building2,
    title: 'KvK Geregistreerd',
    description: 'Officieel geregistreerd Nederlands bedrijf.',
  },
  {
    icon: Clock,
    title: 'Flexibele Tijden',
    description: 'Flexibele werktijden afgestemd op uw planning. Ook buiten reguliere kantoortijden.',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Technische ondersteuning telefonisch, online, WhatsApp of op locatie.',
  },
  {
    icon: ThumbsUp,
    title: 'Tevredenheidsgarantie',
    description: 'Wij zijn pas tevreden als u dat bent.',
  },
  {
    icon: MessageCircle,
    title: 'Vragen?',
    description: 'Voor vragen kunt u altijd terecht bij ons! per mail, Whatsapp of telefonisch.',
  },
];

export default function WhyRPX() {
  return (
    <section className="section-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Waarom RPX"
          title="Waarom kiezen voor RPX Solutions?"
          description="Vakmanschap, betrouwbaarheid en klantgerichtheid staan bij ons centraal."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 0.05}>
              <div className="group p-6 rounded-2xl bg-white border border-black/5 hover:border-[#B5121B]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[#B5121B]/5 h-full">
                <div className="w-12 h-12 rounded-2xl bg-[#0F0F10] flex items-center justify-center mb-5 group-hover:bg-[#B5121B] transition-colors duration-500">
                  <reason.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0F0F10] mb-2">{reason.title}</h3>
                <p className="text-[#0F0F10]/50 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}