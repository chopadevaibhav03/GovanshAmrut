import React from 'react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showSubtitle = true, size = 'md' }) => {
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-14 h-14' : 'w-10 h-10';
  const titleSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Emblem */}
      <div className={`relative ${iconSize} shrink-0 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-emerald-700 p-0.5 shadow-sm`}>
        <div className="w-full h-full rounded-full bg-[#FDFBF7] flex items-center justify-center overflow-hidden p-1">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Golden Radiating Sun Horizon */}
            <circle cx="50" cy="50" r="45" fill="#FEF3C7" />
            <path d="M50 8 V20 M50 80 V92 M8 50 H20 M80 50 H92 M20 20 L28 28 M72 72 L80 80 M20 80 L28 72 M72 28 L80 20" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
            
            {/* Green Fertile Field Base */}
            <path d="M12 68 C 30 58, 70 58, 88 68 C 88 80, 75 90, 50 90 C 25 90, 12 80, 12 68 Z" fill="#15803D" opacity="0.9" />
            
            {/* Stylized Indigenous Gir Cow Silhouette with prominent hump & graceful head */}
            <path
              d="M30 68 C 30 60, 34 52, 40 48 C 42 42, 44 34, 48 30 C 51 30, 53 34, 53 40 C 56 36, 61 35, 66 38 C 70 41, 71 46, 68 50 C 65 54, 62 55, 60 57 C 58 60, 58 65, 58 68 Z"
              fill="#92400E"
            />
            {/* Characteristic Gir Curved Horn */}
            <path d="M64 39 C 68 34, 71 30, 70 24 C 67 27, 65 33, 62 36" fill="#78350F" />
            {/* Dewlap / Galakambal drape */}
            <path d="M60 50 C 61 58, 56 63, 50 65" stroke="#92400E" strokeWidth="2" strokeLinecap="round" />
            {/* Cow eye */}
            <circle cx="63" cy="42" r="1.5" fill="#FEF3C7" />
            
            {/* Sprouting Organic Green Leaf */}
            <path d="M50 78 C 50 72, 44 68, 38 70 C 38 76, 44 78, 50 78 Z" fill="#4ADE80" />
            <path d="M50 78 C 50 72, 56 68, 62 70 C 62 76, 56 78, 50 78 Z" fill="#22C55E" />
          </svg>
        </div>
      </div>

      {/* Brand Typographic Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className={`font-serif-vedic ${titleSize} font-bold tracking-tight text-stone-900`}>
            गोवंश
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] sm:text-xs font-medium text-emerald-800 tracking-normal -mt-0.5 whitespace-nowrap">
            देशी गाय गोशाळा व सेंद्रिय शेती
          </span>
        )}
      </div>
    </div>
  );
};
