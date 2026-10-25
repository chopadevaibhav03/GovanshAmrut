import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, Heart, ArrowRight, ShieldCheck, Sun, Leaf, Award } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onOpenDonation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenDonation }) => {
  const t = translations[currentLang];

  return (
    <section className="relative overflow-hidden bg-stone-900 text-white min-h-[580px] lg:min-h-[640px] flex flex-col justify-between">
      {/* Background Photography with Rich Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_gir_cow_pasture_1792948905101.jpg"
          alt="Majestic Indian Desi Gir Cow grazing in lush green organic pasture at sunrise"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered Warm Scrim for WCAG AA Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/75 to-stone-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 my-auto w-full">
        <div className="max-w-3xl space-y-6">
          {/* Unboxed Metadata Kicker (Anti-Pill Rule) */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-amber-300">
            <span className="flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-amber-400" />
              <span>अहिंसा (Ahimsa)</span>
            </span>
            <span aria-hidden="true" className="text-amber-400/60">·</span>
            <span>सेंद्रिय शेती (ZBNF Organic)</span>
            <span aria-hidden="true" className="text-amber-400/60">·</span>
            <span>शुद्ध गिर गोवंश (A2 Dairy)</span>
          </div>

          {/* Primary Headline with Balance */}
          <h1 className="font-serif-vedic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
            {t.hero.heading}
          </h1>

          {/* Descriptive Narrative */}
          <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl font-normal">
            {t.hero.description}
          </p>

          {/* Action CTAs - Full-width stacked on mobile, row on tablet/desktop */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-900/30 hover:shadow-xl transition-all active:scale-95 cursor-pointer whitespace-nowrap text-center"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenDonation}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/25 backdrop-blur-sm transition-all active:scale-95 cursor-pointer whitespace-nowrap text-center"
            >
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400/50" />
              <span>{t.hero.ctaSecondary}</span>
            </button>
          </div>

          {/* Founders & Agronomist Mentorship Badge */}
          <div className="pt-4 flex items-center gap-3 text-xs sm:text-sm text-stone-300">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <p>
              संस्थापक: <strong className="text-amber-200 font-semibold">अनिता आणि रामकिसन चोपडे</strong> (Under Agronomist Advisory Guidance)
            </p>
          </div>
        </div>
      </div>

      {/* Full-width 4-Column Proof & Trust Strip below Hero */}
      <div className="relative z-10 w-full bg-stone-950/80 backdrop-blur-md border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-white tracking-tight">{t.hero.stats.stat1Value}</p>
                <p className="text-xs text-stone-400">{t.hero.stats.stat1Label}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Sun className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-white tracking-tight">{t.hero.stats.stat2Value}</p>
                <p className="text-xs text-stone-400">{t.hero.stats.stat2Label}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-lime-500/20 border border-lime-500/30 flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 text-lime-400" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-white tracking-tight">{t.hero.stats.stat3Value}</p>
                <p className="text-xs text-stone-400">{t.hero.stats.stat3Label}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-white tracking-tight">{t.hero.stats.stat4Value}</p>
                <p className="text-xs text-stone-400">{t.hero.stats.stat4Label}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
