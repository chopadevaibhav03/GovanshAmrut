import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Maximize2, X, Eye } from 'lucide-react';

interface PhotoGalleryProps {
  currentLang: Language;
}

interface GalleryItem {
  id: string;
  category: 'herd' | 'methods' | 'farm';
  image: string;
  title: {
    mr: string;
    hi: string;
    en: string;
  };
  desc: {
    mr: string;
    hi: string;
    en: string;
  };
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ currentLang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'herd' | 'methods' | 'farm'>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const t = translations[currentLang];
  const lang = currentLang;

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      category: 'herd',
      image: '/src/assets/images/hero_gir_cow_pasture_1792948905101.jpg',
      title: {
        mr: 'सकाळच्या सूर्यप्रकाशात मोकळ्या कुरणात चरणाऱ्या गिर गाई',
        hi: 'प्रातःकालीन सूर्यकिरणों में हरे चरागाहों में विचरण करती गिर गायें',
        en: 'Indigenous Gir Cows Grazing in Morning Pasture'
      },
      desc: {
        mr: 'नैसर्गिक गवतावर चरणारी आमची शुद्ध देशी गिर गोमाता आणि तिची सूर्यकेतू नाडी.',
        hi: 'प्राकृतिक औषधीय घास पर विचरण करती शुद्ध नस्ल की गिर गाय।',
        en: 'Free-grazing sacred Gir cows absorbing solar rays on open organic pasture.'
      }
    },
    {
      id: '2',
      category: 'methods',
      image: '/src/assets/images/traditional_bilona_ghee_1792948906344.jpg',
      title: {
        mr: 'मातीच्या मडक्यात लाकडी रवीने पारंपारिक बिलोना मंथन',
        hi: 'मिट्टी के पात्र में लकड़ी के बिलोने द्वारा पारंपरिक दही मंथन',
        en: 'Artisanal Wooden Bilona Churning in Clay Pot'
      },
      desc: {
        mr: 'अनिता चोपडे यांच्या देखरेखीखाली चालणारी प्राचीन ५-संस्कार पद्धत.',
        hi: 'पारंपरिक चूल्हे और मथनी से ताजे मक्खन का निष्कर्षण।',
        en: 'Centuries-old slow two-way curd churning that preserves medicinal live enzymes.'
      }
    },
    {
      id: '3',
      category: 'farm',
      image: '/src/assets/images/organic_farm_gokrupa_1792948906345.jpg',
      title: {
        mr: 'गोकृपा अमृत आणि जीवामृताने लहलहणारी सेंद्रिय शेती',
        hi: 'गोकृपा अमृत और जीवामृत से लहलहाते विषमुक्त जैविक खेत',
        en: 'Lush Thriving Chemical-Free Organic Farm Fields'
      },
      desc: {
        mr: 'मातीच्या मडक्यांत तयार केलेले जिवाणू कल्चर आणि काळ्या कसदार मातीतील पीक.',
        hi: 'केंचुओं और देशी सूक्ष्मजीवों के सहयोग से बिना यूरिया की हरी-भरी फसलें।',
        en: 'Rich organic soil enriched with natural fermented Gokrupa Amrut bio-enhancers.'
      }
    },
    {
      id: '4',
      category: 'herd',
      image: '/src/assets/images/goshala_herd_shelter_1792948906856.jpg',
      title: {
        mr: 'गोवंश गोशाळेतील स्वच्छ निवारा आणि आनंदी वासरे',
        hi: 'गोवंश गोशाला का खुला स्वच्छ प्रांगण एवं खेलती बछिया',
        en: 'Humane Open Shelter Sanctuary and Happy Calves'
      },
      desc: {
        mr: 'कडुनिंबाच्या सावलीखाली हिरवा चारा खाणारा गोवंश व सुरक्षित वातावरण.',
        hi: 'नीम के पेड़ों की छांव में स्वस्थ आहार और ममतामयी देखरेख।',
        en: 'Cruelty-free shelter where elderly non-milking cows and calves live in joy.'
      }
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-700 mb-2">
            <span>{t.gallery.badge}</span>
            <span aria-hidden="true">·</span>
            <span>गोसेवा दर्शन</span>
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
            {t.gallery.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Filter Tabs - Scrollable on mobile */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 p-1.5 bg-stone-200/60 rounded-xl max-w-full overflow-x-auto">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.gallery.all}
          </button>
          <button
            onClick={() => setActiveCategory('herd')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'herd'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.gallery.herd}
          </button>
          <button
            onClick={() => setActiveCategory('methods')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'methods'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.gallery.methods}
          </button>
          <button
            onClick={() => setActiveCategory('farm')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === 'farm'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.gallery.farm}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title[lang]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent flex flex-col justify-end p-6 text-white transition-opacity">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-vedic text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 mt-1 line-clamp-1">
                      {item.desc[lang]}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 ml-3 group-hover:bg-amber-500 transition-colors">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="h-[60vh] bg-black">
              <img
                src={activePhoto.image}
                alt={activePhoto.title[lang]}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 bg-stone-900 text-white">
              <h3 className="font-serif-vedic text-xl font-bold text-amber-300">
                {activePhoto.title[lang]}
              </h3>
              <p className="text-sm text-stone-300 mt-2 leading-relaxed">
                {activePhoto.desc[lang]}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
