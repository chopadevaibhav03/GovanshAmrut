import React from 'react';
import { Product, Language } from '../types';
import { translations } from '../data/translations';
import { X, Check, MessageSquare, Sparkles, ChefHat, HeartPulse, Clock, ShieldCheck } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  currentLang: Language;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  currentLang,
  onClose
}) => {
  if (!product) return null;

  const t = translations[currentLang];
  const lang = currentLang;

  const whatsappMessage = encodeURIComponent(
    `नमस्कार! मी गोवंश वेबसाइटवरून संपर्क करत आहे. मला '${product.name[lang]}' (किंमत: ₹${product.price} / ${product.unit[lang]}) बद्दल माहिती हवी आहे / खरेदी करायचे आहे.`
  );
  const whatsappUrl = `https://wa.me/917263823539?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-[#FDFBF7] rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-stone-200 shadow-2xl flex flex-col">
        
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 bg-[#FDFBF7]/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-700">
              {product.category === 'dairy' ? 'A2 दुग्ध उत्पादन' : product.category === 'bio_farming' ? 'सेंद्रिय शेती उत्पादन' : 'नैसर्गिक आरोग्य'}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-serif-vedic leading-tight">
              {product.name[lang]}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-8">
          
          {/* Hero Banner with Product Image & Quick Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-5 h-52 rounded-xl overflow-hidden border border-stone-200 shadow-xs">
              <img
                src={product.image}
                alt={product.name[lang]}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="sm:col-span-7 space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-stone-900 tabular-nums">
                  ₹{product.price}
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  / {product.unit[lang]}
                </span>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                {product.fullDesc[lang]}
              </p>
              
              {/* Purity Badges (Anti-Pill: Unboxed inline tags) */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-stone-600 font-medium">
                {product.keyFeatures[lang].map((feature, idx) => (
                  <span key={idx} className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{feature}</span>
                    {idx < product.keyFeatures[lang].length - 1 && <span className="text-stone-300 ml-1.5">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section 1: Traditional Preparation Method */}
          <div className="bg-stone-50/90 rounded-xl p-5 border border-stone-200/80">
            <div className="flex items-center gap-2 mb-3 text-amber-800 font-bold">
              <ChefHat className="w-5 h-5" />
              <h4 className="font-serif-vedic text-base sm:text-lg">
                {t.products.prepMethodTitle}
              </h4>
            </div>
            <div className="space-y-2.5">
              {product.preparationMethod[lang].map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-stone-700">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Health & Ayurvedic Benefits */}
          <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100">
            <div className="flex items-center gap-2 mb-3 text-emerald-900 font-bold">
              <HeartPulse className="w-5 h-5 text-emerald-700" />
              <h4 className="font-serif-vedic text-base sm:text-lg">
                {t.products.healthBenefitsTitle}
              </h4>
            </div>
            <ul className="grid grid-cols-1 gap-2.5">
              {product.healthBenefits[lang].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Daily Usage Instructions */}
          <div className="bg-amber-50/40 rounded-xl p-5 border border-amber-100">
            <div className="flex items-center gap-2 mb-2 text-amber-900 font-bold">
              <Clock className="w-5 h-5 text-amber-700" />
              <h4 className="font-serif-vedic text-base sm:text-lg">
                {t.products.dailyUsageTitle}
              </h4>
            </div>
            <p className="text-sm text-stone-700 leading-relaxed">
              {product.dailyUsage[lang]}
            </p>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="sticky bottom-0 z-20 bg-[#FDFBF7] px-6 py-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-stone-500">
            थेट शेतकरी कुटुंब व गोशाळेकडून घरपोच सेवा उपलब्ध.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            >
              {t.products.close}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.products.orderOnWhatsapp}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
