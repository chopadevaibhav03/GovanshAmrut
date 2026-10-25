import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sun, ShieldAlert, Heart, Moon, Sparkles, CheckCircle2, Droplets, Zap } from 'lucide-react';

interface HealthBenefitsGuideProps {
  currentLang: Language;
}

export const HealthBenefitsGuide: React.FC<HealthBenefitsGuideProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FDFBF7] to-amber-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-700 mb-2">
            <span>{t.healthGuide.badge}</span>
            <span aria-hidden="true">·</span>
            <span>आरोग्य रहस्य</span>
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
            {t.healthGuide.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.healthGuide.subtitle}
          </p>
        </div>

        {/* 2-Column Focus: Suryaketu Nadi & A1 vs A2 Protein Science */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Suryaketu Nadi */}
          <div className="bg-white rounded-2xl p-7 border border-amber-200/80 shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 mb-5">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-serif-vedic mb-3">
              {t.healthGuide.suryaketuTitle}
            </h3>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              {t.healthGuide.suryaketuDesc}
            </p>
            <div className="mt-5 pt-4 border-t border-amber-100 flex items-center gap-2 text-xs text-amber-800 font-medium">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>नैसर्गिक सुवर्ण क्षार • ओमेगा फॅटी अ‍ॅसिड • दाणेदार सुवास</span>
            </div>
          </div>

          {/* Card 2: A1 vs A2 Protein Comparison */}
          <div className="bg-white rounded-2xl p-7 border border-emerald-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 mb-5">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-serif-vedic mb-3">
              {t.healthGuide.a1a2Title}
            </h3>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              {t.healthGuide.a1a2Desc}
            </p>
            <div className="mt-5 pt-4 border-t border-emerald-100 flex items-center gap-2 text-xs text-emerald-800 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>प्रोलिन-६७ बॉण्ड • शून्य BCM-7 • सुपाच्य पोषण</span>
            </div>
          </div>

        </div>

        {/* Daily Routine Guide - Morning, Noon, Night */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 border border-stone-200 shadow-sm">
          <div className="max-w-2xl mb-8">
            <h3 className="font-serif-vedic text-2xl font-bold text-stone-900">
              {t.healthGuide.dailyHabitsTitle}
            </h3>
            <p className="text-sm text-stone-600 mt-1">
              प्राचीन आयुर्वेदातील दिनचर्या आणि स्वस्थवृत्त नियमांचे आधुनिक पालन.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Morning */}
            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    सकाळची वेळ (Morning)
                  </span>
                  <Sun className="w-5 h-5 text-amber-600" />
                </div>
                <h4 className="text-base font-bold text-stone-900 mb-2 font-serif-vedic">
                  {t.healthGuide.habit1Title}
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {t.healthGuide.habit1Desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-200/50 text-xs font-medium text-amber-900">
                लिव्हर डिटॉक्स व पचन सुधारणा
              </div>
            </div>

            {/* Noon */}
            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    दुपारची वेळ (Noon)
                  </span>
                  <Zap className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="text-base font-bold text-stone-900 mb-2 font-serif-vedic">
                  {t.healthGuide.habit2Title}
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {t.healthGuide.habit2Desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-200/50 text-xs font-medium text-emerald-900">
                सांध्यांना वंगण व पोषक घटक शोषण
              </div>
            </div>

            {/* Night */}
            <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-200/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                    रात्रीची वेळ (Night)
                  </span>
                  <Moon className="w-5 h-5 text-sky-600" />
                </div>
                <h4 className="text-base font-bold text-stone-900 mb-2 font-serif-vedic">
                  {t.healthGuide.habit3Title}
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {t.healthGuide.habit3Desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-sky-200/50 text-xs font-medium text-sky-900">
                गाढ झोप, मेंदू पोषण व मायग्रेन आराम
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
