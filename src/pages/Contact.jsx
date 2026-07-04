import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, ArrowRight, Check } from 'lucide-react';
import ScrollReveal from '../components/rpx/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    naam: '', email: '', telefoon: '', onderwerp: '', bericht: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setSending(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactMethods = [
    {
      icon: Phone,
      label: 'Telefoon',
      value: '+31 6 57440612',
      href: 'tel:+31657440612',
      description: 'Direct contact voor spoedgevallen',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+31 6 57440612',
      href: 'https://wa.me/31657440612',
      description: 'Stuur ons een bericht via WhatsApp',
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'Info@rpxsolutions.nl',
      href: 'mailto:Info@rpxsolutions.nl',
      description: 'Wij reageren binnen 48 uur',
    },
    {
      icon: Clock,
      label: 'Openingstijden',
      value: 'Ma–Vr 08:00–21:00',
      href: null,
      description: 'Zaterdag 10:00–21:00',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B5121B]">Contact</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 leading-tight">
              Neem Contact Op
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-lg text-white/50 max-w-xl mx-auto">
              Heeft u een vraag of wilt u een offerte aanvragen? Wij staan voor u klaar.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-dark pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactMethods.map((method, i) => (
              <ScrollReveal key={method.label} delay={i * 0.1}>
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="glass rounded-2xl p-6 block hover:border-[#B5121B]/30 transition-all duration-300 h-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#B5121B]/10 flex items-center justify-center mb-4">
                      <method.icon className="w-5 h-5 text-[#B5121B]" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">{method.label}</h3>
                    <p className="text-white/70 text-sm font-mono mb-1">{method.value}</p>
                    <p className="text-white/30 text-xs">{method.description}</p>
                  </a>
                ) : (
                  <div className="glass rounded-2xl p-6 h-full">
                    <div className="w-10 h-10 rounded-xl bg-[#B5121B]/10 flex items-center justify-center mb-4">
                      <method.icon className="w-5 h-5 text-[#B5121B]" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">{method.label}</h3>
                    <p className="text-white/70 text-sm font-mono mb-1">{method.value}</p>
                    <p className="text-white/30 text-xs">{method.description}</p>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Form */}
            <ScrollReveal>
              <div className="glass rounded-3xl p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-white mb-2">Stuur ons een bericht</h2>
                <p className="text-white/40 text-sm mb-8">Vul het formulier in en wij nemen zo snel mogelijk contact met u op.</p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#B5121B]/20 flex items-center justify-center mb-6">
                      <Check className="w-8 h-8 text-[#B5121B]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Bericht verzonden!</h3>
                    <p className="text-white/50 text-sm">Wij nemen zo snel mogelijk contact met u op.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-white/40 uppercase tracking-widest mb-2 block">Naam *</label>
                        <input
                          type="text"
                          name="naam"
                          required
                          value={formData.naam}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:border-[#B5121B]/50 focus:outline-none focus:ring-1 focus:ring-[#B5121B]/30 transition-colors"
                          placeholder="Uw naam"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-white/40 uppercase tracking-widest mb-2 block">E-mail *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:border-[#B5121B]/50 focus:outline-none focus:ring-1 focus:ring-[#B5121B]/30 transition-colors"
                          placeholder="uw@email.nl"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-white/40 uppercase tracking-widest mb-2 block">Telefoon</label>
                        <input
                          type="tel"
                          name="telefoon"
                          value={formData.telefoon}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:border-[#B5121B]/50 focus:outline-none focus:ring-1 focus:ring-[#B5121B]/30 transition-colors"
                          placeholder="+31 6 57440612"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-white/40 uppercase tracking-widest mb-2 block">Onderwerp *</label>
                        <select
                          name="onderwerp"
                          required
                          value={formData.onderwerp}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#B5121B]/50 focus:outline-none focus:ring-1 focus:ring-[#B5121B]/30 transition-colors"
                        >
                          <option value="" className="bg-[#232323]">Selecteer onderwerp</option>
                          <option value="installaties" className="bg-[#232323]">Installaties</option>
                          <option value="audio" className="bg-[#232323]">Audio Service</option>
                          <option value="autocare" className="bg-[#232323]">Auto Care</option>
                          <option value="offerte" className="bg-[#232323]">Offerte aanvraag</option>
                          <option value="overig" className="bg-[#232323]">Overig</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-white/40 uppercase tracking-widest mb-2 block">Bericht *</label>
                      <textarea
                        name="bericht"
                        required
                        rows={5}
                        value={formData.bericht}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:border-[#B5121B]/50 focus:outline-none focus:ring-1 focus:ring-[#B5121B]/30 transition-colors resize-none"
                        placeholder="Beschrijf uw project of vraag..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-rpx w-full flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {sending ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Verstuur bericht <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Large CTA */}
      <section className="section-anthracite py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Liever direct bellen?</h2>
            <p className="text-white/50 mb-8">Wij zijn bereikbaar via telefoon en WhatsApp.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+31657440612" className="btn-rpx text-center flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Bel ons
              </a>
              <a
                href="https://wa.me/31657440612"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rpx-outline text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}