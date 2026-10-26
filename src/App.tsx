/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ProductsSection } from './components/ProductsSection';
import { HealthBenefitsGuide } from './components/HealthBenefitsGuide';
import { DonationGateway } from './components/DonationGateway';
import { PhotoGallery } from './components/PhotoGallery';
import { BlogsSection } from './components/BlogsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Phone, MessageSquare, Heart } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('govansh_lang');
    return (saved === 'mr' || saved === 'hi' || saved === 'en') ? saved : 'mr';
  });

  useEffect(() => {
    localStorage.setItem('govansh_lang', currentLang);
  }, [currentLang]);

  const handleOpenDonation = () => {
    const el = document.getElementById('donation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* 3-Zone Top Bar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenDonation={handleOpenDonation}
      />

      {/* Main Content Stream */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenDonation={handleOpenDonation}
        />

        {/* About Founders Anita & Ramkisan Chopade and Agronomist Advisory */}
        <AboutUs currentLang={currentLang} />

        {/* Gir Cow Products (A2 Bilona Ghee, Gokrupa Amrut, Bio-waste manure, etc.) */}
        <ProductsSection currentLang={currentLang} />

        {/* Health Benefits, Suryaketu Nadi & A1 vs A2 Science */}
        <HealthBenefitsGuide currentLang={currentLang} />

        {/* Interactive Cow Shelter Donation Gateway (UPI QR & Receipt Generator) */}
        <DonationGateway currentLang={currentLang} />

        {/* Photo Gallery: Herd, Artisanal Churning & Sustainable Farmlands */}
        <PhotoGallery currentLang={currentLang} />

        {/* Educational Blogs & ZBNF Farming Guides */}
        <BlogsSection currentLang={currentLang} />

        {/* Testimonials from Vaibhav Chopade & Govind Deshmukh */}
        <TestimonialsSection currentLang={currentLang} />

        {/* Contact Form & Visit Booking */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Persistent Floating Assist Buttons for Rural / Senior Non-Technical Users */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
        {/* Direct Call Button (7263833539) */}
        <a
          href="tel:+917263833539"
          className="pointer-events-auto w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-amber-600 hover:bg-amber-700 text-white shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="रामकिसन चोपडे यांना थेट कॉल करा (+91 72638 33539)"
          aria-label="Call Ramkisan Chopade directly"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Direct WhatsApp Chat Button (7263823539) */}
        <a
          href="https://wa.me/917263823539?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A4%BE%E0%A4%B0!%20%E0%A4%AE%E0%A4%B2%E0%A4%BE%20%E0%A4%97%E0%A5%8B%E0%A4%B5%E0%A4%82%E0%A4%B6%20%E0%A4%97%E0%A5%8B%E0%A4%B6%E0%A4%BE%E0%A4%B3%E0%A5%87%E0%A4%AC%E0%A4%A6%E0%A5%8D%E0%A4%A4%E0%A4%B2%20%E0%A4%AE%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%A4%E0%A5%80%20%E0%A4%B9%E0%A4%B5%E0%A5%80%20%E0%A4%86%E0%A4%B9%E0%A5%87."
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="व्हॉट्सअ‍ॅपवर बोला (+91 72638 23539)"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">व्हॉट्सअ‍ॅप मदत</span>
        </a>
      </div>
    </div>
  );
}
