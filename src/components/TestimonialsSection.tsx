import React from 'react';
import { Language } from '../types';
import { testimonials } from '../data/testimonials';
import { translations } from '../data/translations';
import { Star, Quote, CheckCircle } from 'lucide-react';

interface TestimonialsSectionProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const lang = currentLang;

  return (
    <section className="py-20 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-700 mb-2">
            <span>{t.testimonials.badge}</span>
            <span aria-hidden="true">·</span>
            <span>प्रत्यक्ष शेतकरी व ग्राहक अनुभव</span>
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
            {t.testimonials.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-amber-300 transition-colors"
            >
              <div>
                {/* Rating Stars and Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-200" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-stone-700 leading-relaxed italic">
                  "{item.quote[lang]}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                  {item.name.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-stone-900 text-sm truncate font-serif-vedic">
                      {item.name}
                    </h4>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  </div>
                  <p className="text-xs text-amber-800 font-medium truncate">
                    {item.role[lang]}
                  </p>
                  <p className="text-[11px] text-stone-400 truncate">
                    {item.location[lang]}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
