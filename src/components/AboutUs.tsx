import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { HeartHandshake, Microscope, Sparkles, CheckCircle2, Users } from 'lucide-react';

interface AboutUsProps {
  currentLang: Language;
}

export const AboutUs: React.FC<AboutUsProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="about" className="py-20 bg-[#FDFBF7] relative overflow-hidden">
      {/* Subtle organic texture background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-700 mb-2">
            <span>{t.about.badge}</span>
            <span aria-hidden="true">·</span>
            <span>अहिंसा व गोसेवा</span>
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
            {t.about.title}
          </h2>
          <p className="mt-3 text-lg text-stone-600 leading-relaxed">
            {t.about.intro}
          </p>
        </div>

        {/* 2-Column Split: Founders Story & Goshala Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left Column: Founders & Agronomist narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            {/* Founders Box */}
            <div className="bg-white rounded-2xl p-7 border border-stone-200 shadow-xs relative overflow-hidden">
              <div className="w-1.5 h-full bg-amber-500 absolute left-0 top-0 hidden" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 text-amber-800">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 font-serif-vedic">
                    {t.about.foundersTitle}
                  </h3>
                  <p className="mt-2 text-stone-700 leading-relaxed text-sm sm:text-base">
                    {t.about.foundersStory}
                  </p>
                </div>
              </div>
            </div>

            {/* Agronomist Mentorship Box */}
            <div className="bg-white rounded-2xl p-7 border border-stone-200 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-800">
                  <Microscope className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 font-serif-vedic">
                    {t.about.agronomistTitle}
                  </h3>
                  <p className="mt-2 text-stone-700 leading-relaxed text-sm sm:text-base">
                    {t.about.agronomistStory}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Goshala Herd Photo with Scrim & Caption */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md h-full min-h-[360px] group">
              <img
                src="/src/assets/images/goshala_herd_shelter_1792948906856.jpg"
                alt="Govansh Goshala shelter with Gir cows and calves eating fresh green fodder"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
                  गोवंश गोशाळा परिसर
                </span>
                <p className="text-sm font-medium text-stone-200">
                  खुल्या आणि स्वच्छ गोशाळेत आनंदाने विसावलेला देशी गिर गोवंश आणि खेळणारी वासरे.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Guiding Pillars / Principles */}
        <div className="pt-8 border-t border-stone-200">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-serif-vedic text-2xl font-bold text-stone-900">
              {t.about.missionHeading}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-stone-50/80 rounded-xl p-6 border border-stone-200/90 hover:bg-white hover:border-amber-300 transition-all">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-4 font-bold text-lg">
                १
              </div>
              <h4 className="text-lg font-bold text-stone-900 mb-2 font-serif-vedic">
                {t.about.principle1Title}
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                {t.about.principle1Desc}
              </p>
            </div>

            <div className="bg-stone-50/80 rounded-xl p-6 border border-stone-200/90 hover:bg-white hover:border-amber-300 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4 font-bold text-lg">
                २
              </div>
              <h4 className="text-lg font-bold text-stone-900 mb-2 font-serif-vedic">
                {t.about.principle2Title}
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                {t.about.principle2Desc}
              </p>
            </div>

            <div className="bg-stone-50/80 rounded-xl p-6 border border-stone-200/90 hover:bg-white hover:border-amber-300 transition-all">
              <div className="w-10 h-10 rounded-lg bg-lime-100 flex items-center justify-center text-lime-700 mb-4 font-bold text-lg">
                ३
              </div>
              <h4 className="text-lg font-bold text-stone-900 mb-2 font-serif-vedic">
                {t.about.principle3Title}
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                {t.about.principle3Desc}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
