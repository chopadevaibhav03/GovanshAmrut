import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Logo } from './Logo';
import { Heart, Globe, Menu, X, ChevronDown, Check, Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenDonation: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenDonation,
  theme,
  onToggleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = translations[currentLang];

  const languages: { code: Language; label: string; fullLabel: string }[] = [
    { code: 'mr', label: 'मराठी', fullLabel: 'मराठी (Marathi)' },
    { code: 'hi', label: 'हिंदी', fullLabel: 'हिंदी (Hindi)' },
    { code: 'en', label: 'English', fullLabel: 'English' }
  ];

  const currentLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#products', label: t.nav.products },
    { href: '#donation', label: t.nav.donation },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#blogs', label: t.nav.blogs },
    { href: '#contact', label: t.nav.contact }
  ];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 md:gap-8">
        
        {/* Zone 1: Brand Wordmark (Without English name as requested) */}
        <a href="#" className="whitespace-nowrap shrink-0 group transition-transform active:scale-95">
          <Logo size="md" showSubtitle={true} />
        </a>

        {/* Zone 2: 4-6 concise single-line text links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-lg px-2 py-1 hover:bg-stone-100 hover:text-amber-800 transition-colors relative after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Dropdown Selector + Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">

          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-stone-100/90 hover:bg-stone-200/80 border border-stone-200 text-stone-800 transition-colors cursor-pointer"
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            aria-pressed={theme === 'dark'}
            title={theme === 'light' ? 'Dark theme' : 'Light theme'}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          
          {/* Language Dropdown Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-100/90 hover:bg-stone-200/80 border border-stone-200 text-stone-800 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-2xs"
              aria-expanded={langDropdownOpen}
              aria-label="भाषा निवडा / Select Language"
            >
              <Globe className="w-4 h-4 text-amber-700 shrink-0" />
              <span className="font-medium text-stone-900">{currentLangObj.label}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-stone-500 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl border border-stone-200 shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 text-[11px] font-semibold text-stone-400 uppercase tracking-wider border-b border-stone-100">
                  भाषा / Language
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full px-3.5 py-2 text-left text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                      currentLang === lang.code
                        ? 'bg-amber-50 text-amber-900 font-bold'
                        : 'text-stone-700 hover:bg-stone-50 hover:text-stone-900 font-medium'
                    }`}
                  >
                    <span>{lang.fullLabel}</span>
                    {currentLang === lang.code && (
                      <Check className="w-4 h-4 text-amber-700 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary Action Button - Responsive on mobile */}
          <button
            onClick={onOpenDonation}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 rounded-full shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
          >
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white/80" />
            <span className="hidden xs:inline sm:inline">{t.nav.donateNow}</span>
            <span className="xs:hidden sm:hidden">दान</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in duration-150">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-100 hover:text-amber-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-3">
            {/* Dropdown Manner Language Selector on Mobile */}
            <div className="px-1 space-y-1.5">
              <label htmlFor="mobile-lang-select" className="text-xs font-semibold text-stone-600 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-amber-700" />
                <span>भाषा निवडा / Choose Language (Dropdown):</span>
              </label>
              <div className="relative">
                <select
                  id="mobile-lang-select"
                  value={currentLang}
                  onChange={(e) => {
                    onLanguageChange(e.target.value as Language);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-white border border-stone-300 rounded-xl px-4 py-2.5 text-stone-900 font-semibold text-sm appearance-none focus:outline-hidden focus:border-amber-600 cursor-pointer shadow-xs pr-10"
                >
                  <option value="mr">मराठी (Marathi)</option>
                  <option value="hi">हिंदी (Hindi)</option>
                  <option value="en">English</option>
                </select>
                <ChevronDown className="w-4 h-4 text-stone-500 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
            </div>

            <div className="pt-2 px-1 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonation();
                }}
                className="flex-1 py-2.5 text-center font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Heart className="w-4 h-4 fill-white" />
                {t.nav.donateNow}
              </button>
              <a
                href="tel:+917263833539"
                className="p-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl flex items-center justify-center"
                title="कॉल करा (7263833539)"
              >
                <span className="text-xs font-bold font-mono text-emerald-800 px-1">7263833539</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
