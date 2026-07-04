import React from 'react';
import ScrollReveal from '../components/rpx/ScrollReveal';

export default function Privacybeleid() {
  return (
    <section className="section-dark pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B5121B]">Juridisch</span>
          <h1 className="text-4xl font-black text-white mt-4 mb-8">Privacybeleid</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="prose prose-invert prose-sm max-w-none text-white/60 space-y-6">
            <p>RPX Solutions respecteert de privacy van alle gebruikers van haar website en draagt er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld.</p>
            <h3 className="text-white font-semibold text-lg">Gebruik van verzamelde gegevens</h3>
            <p>Wanneer u via ons contactformulier een bericht stuurt, gebruiken wij de door u verstrekte gegevens uitsluitend om contact met u op te nemen over uw aanvraag.</p>
            <h3 className="text-white font-semibold text-lg">Bewaartermijn</h3>
            <p>Wij bewaren uw gegevens niet langer dan strikt noodzakelijk is voor de doeleinden waarvoor uw gegevens worden verzameld.</p>
            <h3 className="text-white font-semibold text-lg">Delen met derden</h3>
            <p>RPX Solutions verstrekt uw persoonsgegevens alléén aan derden indien dit nodig is voor de uitvoering van een overeenkomst met u, of om te voldoen aan een wettelijke verplichting.</p>
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <p>Heeft u vragen over ons privacybeleid? Neem dan contact met ons op via <a href="mailto:info@rpxsolutions.nl" className="text-[#B5121B] hover:underline">info@rpxsolutions.nl</a>.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}