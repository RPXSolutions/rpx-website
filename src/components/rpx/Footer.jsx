import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Installaties', path: '/installaties' },
  { label: 'Audio Service', path: '/audio-service' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Over Ons', path: '/over-ons' },
  { label: 'Contact', path: '/contact' },
  
];

const legalLinks = [
  { label: 'Privacybeleid', path: '/privacybeleid' },
  { label: 'Algemene voorwaarden', path: '/algemene-voorwaarden' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-black tracking-tight text-white">
                RPX<span className="text-[#B5121B]">.</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Uw partner voor audio & installaties. Vakbekwame technische oplossingen voor particulier en zakelijk.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-[#B5121B]/20 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-[#B5121B]/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-[#B5121B]/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/31657440612"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-[#25D366]/20 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Navigatie</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/40 text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/30 text-xs hover:text-white/60 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#B5121B] mt-0.5 flex-shrink-0" />
                <a href="tel:+31657440612" className="text-white/60 text-sm font-mono hover:text-white transition-colors">
                  +31 6 57440612
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#B5121B] mt-0.5 flex-shrink-0" />
                <a href="mailto:Info@rpxsolutions.nl" className="text-white/60 text-sm font-mono hover:text-white transition-colors">
                  Info@rpxsolutions.nl
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B5121B] mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm">Nederland,
                KVK: 1234567</span>
              </li>
            </ul>
          </div>

          {/* Openingstijden */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Openingstijden</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Maandag – Vrijdag</span>
                <span className="text-white/70 font-mono">08:00 – 21:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Zaterdag</span>
                <span className="text-white/70 font-mono">10:00 – 21:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">Zondag</span>
                <span className="text-white/70 font-mono">Gesloten</span>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#B5121B]" />
                  <span className="text-white/40 text-xs">Flexibele tijden op afspraak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-mono">
            © 2026 RPX Solutions. Alle rechten voorbehouden.
          </p>
          <p className="text-white/20 text-xs">
            Professionele technische oplossingen
          </p>
        </div>
      </div>
    </footer>
  );
}