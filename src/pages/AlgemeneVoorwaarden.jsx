import React from 'react';
import ScrollReveal from '../components/rpx/ScrollReveal';

export default function AlgemeneVoorwaarden() {
  return (
    <section className="section-dark pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B5121B]">Juridisch</span>
          <h1 className="text-4xl font-black text-white mt-4 mb-8">Algemene Voorwaarden</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="prose prose-invert prose-sm max-w-none text-white/60 space-y-6">
            <h3 className="text-white font-semibold text-lg">Artikel 1 — Definities</h3>
            <p>In deze algemene voorwaarden wordt verstaan onder RPX Solutions: de eenmanszaak RPX Solutions, gevestigd in Nederland en ingeschreven bij de Kamer van Koophandel.</p>
            <h3 className="text-white font-semibold text-lg">Artikel 2 — Toepasselijkheid</h3>
            <p>Deze voorwaarden zijn van toepassing op elk aanbod van RPX Solutions en op elke overeenkomst tussen RPX Solutions en de opdrachtgever.</p>
            <h3 className="text-white font-semibold text-lg">Artikel 3 — Offertes</h3>
            <p>Alle offertes zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld. Een offerte is geldig gedurende 30 dagen na dagtekening.</p>
            <h3 className="text-white font-semibold text-lg">Artikel 4 — Uitvoering</h3>
            <p>RPX Solutions zal de overeenkomst naar beste inzicht en vermogen uitvoeren, overeenkomstig de eisen van goed vakmanschap.</p>
            <h3 className="text-white font-semibold text-lg">Artikel 5 — Garantie</h3>
            <p>RPX Solutions garandeert dat de geleverde diensten aan de overeenkomst beantwoorden en voldoen aan de in het aanbod vermelde specificaties.</p>
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <p>Vragen over onze algemene voorwaarden? Neem contact op via <a href="mailto:info@rpxsolutions.nl" className="text-[#B5121B] hover:underline">info@rpxsolutions.nl</a>.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}