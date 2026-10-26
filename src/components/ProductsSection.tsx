import React, { useState } from 'react';
import { Product, Language } from '../types';
import { products } from '../data/products';
import { translations } from '../data/translations';
import { ProductDetailModal } from './ProductDetailModal';
import { MessageSquare, Info, Sparkles, ChevronRight, Check } from 'lucide-react';

interface ProductsSectionProps {
  currentLang: Language;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ currentLang }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'dairy' | 'bio_farming' | 'wellness'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const t = translations[currentLang];
  const lang = currentLang;

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="py-20 bg-stone-100/60 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-700 mb-2">
            <span>{t.products.badge}</span>
            <span aria-hidden="true">·</span>
            <span>अमृततुल्य गो-उत्पादने</span>
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
            {t.products.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.products.subtitle}
          </p>
        </div>

        {/* Filter Controls (Horizontally scrollable on mobile, wrapped on larger screens) */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 p-1.5 bg-stone-200/60 rounded-xl max-w-full overflow-x-auto">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.products.filterAll}
          </button>
          <button
            onClick={() => setActiveFilter('dairy')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'dairy'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.products.filterDairy}
          </button>
          <button
            onClick={() => setActiveFilter('bio_farming')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'bio_farming'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.products.filterBio}
          </button>
          <button
            onClick={() => setActiveFilter('wellness')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'wellness'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.products.filterWellness}
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const whatsappMsg = encodeURIComponent(
              `नमस्कार! मी गोवंश वेबसाइटवरून संपर्क करत आहे. मला '${product.name[lang]}' (किंमत: ₹${product.price} / ${product.unit[lang]}) बद्दल माहिती हवी आहे किंवा ऑर्डर करायचे आहे.`
            );
            const whatsappUrl = `https://wa.me/917263823539?text=${whatsappMsg}`;

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  {/* Product Visual Container */}
                  <div className="relative h-56 overflow-hidden bg-stone-100">
                    <img
                      src={product.image}
                      alt={product.name[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-amber-200 text-xs font-semibold px-2.5 py-1 rounded-md">
                      {product.category === 'dairy' ? 'A2 दुग्ध उत्पादन' : product.category === 'bio_farming' ? 'सेंद्रिय शेती' : 'आरोग्य व स्वच्छता'}
                    </div>
                  </div>

                  {/* Product Details Content */}
                  <div className="p-6">
                    <h3 className="font-serif-vedic text-xl font-bold text-stone-900 leading-snug group-hover:text-amber-800 transition-colors">
                      {product.name[lang]}
                    </h3>

                    {/* Price and Unit */}
                    <div className="mt-2.5 flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-stone-900 tabular-nums">
                        ₹{product.price}
                      </span>
                      <span className="text-xs text-stone-500 font-medium">
                        / {product.unit[lang]}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-stone-600 line-clamp-3 leading-relaxed">
                      {product.shortDesc[lang]}
                    </p>

                    {/* Key Benefits Preview */}
                    <div className="mt-4 pt-3 border-t border-stone-100 space-y-1.5">
                      {product.healthBenefits[lang].slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 space-y-2.5">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-2.5 px-4 text-xs sm:text-sm font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100/80 border border-amber-200 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Info className="w-4 h-4 text-amber-700" />
                    <span>{t.products.viewBenefits}</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.products.orderOnWhatsapp}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        currentLang={currentLang}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
