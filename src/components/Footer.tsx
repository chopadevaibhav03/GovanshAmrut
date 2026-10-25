import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Logo } from './Logo';
import { Heart, Phone, MapPin, Mail } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Shloka Banner */}
        <div className="text-center pb-12 border-b border-stone-800 max-w-2xl mx-auto">
          <p className="font-serif-vedic text-2xl sm:text-3xl font-bold text-amber-400 tracking-wide">
            ॥ {t.footer.shloka} ॥
          </p>
          <p className="text-xs sm:text-sm text-stone-400 mt-2 italic leading-relaxed">
            "{t.footer.shlokaMeaning}"
          </p>
        </div>

        {/* 4-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" showSubtitle={true} className="brightness-125" />
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              {t.footer.aboutShort}
            </p>
            <p className="text-xs text-stone-500">
              संस्थापक: अनिता आणि रामकिसन चोपडे
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-vedic text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">आमच्याबद्दल (About Us)</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition-colors">ए२ बिलोना तूप व उत्पादने</a></li>
              <li><a href="#donation" className="hover:text-amber-400 transition-colors">गोसेवा दान (Cow Shelter Donation)</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">छायाचित्र दालन (Gallery)</a></li>
              <li><a href="#blogs" className="hover:text-amber-400 transition-colors">सेंद्रिय शेती व गोविज्ञान लेख</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif-vedic text-sm font-bold text-white uppercase tracking-wider">
              गोशाळा संपर्क
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>मु. पो. भर जहागीर, ता. रिसोड, जि. वाशिम, महाराष्ट्र - ४४४५०६</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+917263833539" className="hover:text-white transition-colors font-mono">
                  +91 72638 33539 (रामकिसन चोपडे)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+918975060028" className="hover:text-white transition-colors font-mono">
                  +91 89750 60028 (अनिता चोपडे)
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>{t.footer.copyright}</p>
          <p className="flex items-center gap-1.5 text-stone-400">
            <span>{t.footer.madeFor}</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
