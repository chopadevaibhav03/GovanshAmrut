import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('interestOption1');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const t = translations[currentLang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone
      .replace(/[०-९]/g, (digit) => String(digit.charCodeAt(0) - 0x0966))
      .replace(/\D/g, '');
    const nationalPhone = digits.length === 12 && digits.startsWith('91')
      ? digits.slice(2)
      : digits.length === 11 && digits.startsWith('0')
        ? digits.slice(1)
        : digits;

    if (!/^[6-9]\d{9}$/.test(nationalPhone)) {
      setFormError(t.contact.phoneValidation);
      return;
    }

    const trimmedEmail = email.trim();
    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setFormError(t.contact.emailValidation);
      return;
    }

    const interestOptions = [
      { value: 'interestOption1', label: t.contact.interestOption1 },
      { value: 'interestOption2', label: t.contact.interestOption2 },
      { value: 'interestOption3', label: t.contact.interestOption3 },
      { value: 'interestOption4', label: t.contact.interestOption4 },
    ];
    const selectedInterest = interestOptions.find((option) => option.value === interest)?.label ?? interest;
    const whatsappMessage = [
      'नमस्कार, मला गोवंश वेबसाइटवरून संपर्क करायचा आहे.',
      '',
      `${t.contact.nameLabel}: ${name.trim()}`,
      `${t.contact.phoneLabel}: ${phone.trim()}`,
      `${t.contact.emailLabel}: ${trimmedEmail || '-'}`,
      `${t.contact.interestLabel}: ${selectedInterest}`,
      `${t.contact.messageLabel}: ${message.trim()}`,
    ].join('\n');
    const url = `https://wa.me/917263823539?text=${encodeURIComponent(whatsappMessage)}`;

    setFormError('');
    setWhatsappUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-700 mb-2">
            <span>{t.contact.badge}</span>
            <span aria-hidden="true">·</span>
            <span>गोशाळा दर्शन व संवाद</span>
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Easy Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-stone-200 shadow-xs">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-vedic text-2xl font-bold text-stone-900">
                  {t.contact.whatsappReadyTitle}
                </h3>
                <p className="text-stone-600 max-w-md mx-auto text-sm leading-relaxed">
                  {t.contact.whatsappNextStep}
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  {t.contact.openWhatsapp}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormError('');
                  }}
                  className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-xl transition-colors cursor-pointer"
                >
                  {t.contact.sendAnotherMessage}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      {t.contact.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="आपले संपूर्ण नाव"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-stone-900 text-sm focus:bg-white focus:border-amber-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      {t.contact.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      inputMode="tel"
                      required
                      placeholder="१० अंकी मोबाईल नंबर"
                      value={phone}
                      autoComplete="tel"
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setFormError('');
                      }}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-stone-900 text-sm focus:bg-white focus:border-amber-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      placeholder="ईमेल पत्ता (ऐच्छिक)"
                      value={email}
                      autoComplete="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setFormError('');
                      }}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-stone-900 text-sm focus:bg-white focus:border-amber-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      {t.contact.interestLabel}
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-stone-900 text-sm focus:bg-white focus:border-amber-500 focus:outline-hidden"
                    >
                      <option value="interestOption1">{t.contact.interestOption1}</option>
                      <option value="interestOption2">{t.contact.interestOption2}</option>
                      <option value="interestOption3">{t.contact.interestOption3}</option>
                      <option value="interestOption4">{t.contact.interestOption4}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    {t.contact.messageLabel} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="आपल्या शंका, भेटीची वेळ किंवा उत्पादनांची मागणी येथे लिहा..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-stone-900 text-sm focus:bg-white focus:border-amber-500 focus:outline-hidden resize-none"
                  />
                </div>

                {formError && (
                  <p role="alert" className="text-sm text-red-700">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.submitBtn}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Sanctuary Info & Phone Callers */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Founders Direct Helpline */}
            <div className="bg-white rounded-3xl p-7 border border-stone-200 shadow-xs">
              <h3 className="font-serif-vedic text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-700" />
                <span>{t.contact.helplineTitle}</span>
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+917263833539"
                  className="p-3.5 rounded-xl bg-amber-50/70 hover:bg-amber-100 border border-amber-200/60 flex items-center justify-between text-stone-900 transition-colors"
                >
                  <div>
                    <span className="text-xs text-stone-500 block">गोशाळा प्रमुख (कॉल व व्हॉट्सअ‍ॅप):</span>
                    <span className="text-sm font-bold font-mono text-amber-900">{t.contact.phone1}</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-amber-600 text-white rounded-md">
                    कॉल करा
                  </span>
                </a>

                <a
                  href="tel:+918975060028"
                  className="p-3.5 rounded-xl bg-emerald-50/70 hover:bg-emerald-100 border border-emerald-200/60 flex items-center justify-between text-stone-900 transition-colors"
                >
                  <div>
                    <span className="text-xs text-stone-500 block">सेंद्रिय शेती मार्गदर्शक:</span>
                    <span className="text-sm font-bold font-mono text-emerald-900">{t.contact.phone2}</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-700 text-white rounded-md">
                    कॉल करा
                  </span>
                </a>
              </div>
            </div>

            {/* Address & Timings */}
            <div className="bg-white rounded-3xl p-7 border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-vedic text-base font-bold text-stone-900">
                    {t.contact.addressTitle}
                  </h4>
                  <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                    {t.contact.addressText}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-vedic text-base font-bold text-stone-900">
                    {t.contact.timingTitle}
                  </h4>
                  <p className="text-sm text-stone-600 mt-1">
                    {t.contact.timingText}
                  </p>
                </div>
              </div>

              {/* Quick WhatsApp chat prompt */}
              <div className="pt-3 border-t border-stone-100">
                <a
                  href="https://wa.me/917263823539?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A4%BE%E0%A4%B0!%20%E0%A4%AE%E0%A4%B2%E0%A4%BE%20%E0%A4%97%E0%A5%8B%E0%A4%B5%E0%A4%82%E0%A4%B6%20%E0%A4%97%E0%A5%8B%E0%A4%B6%E0%A4%BE%E0%A4%B3%E0%A5%87%E0%A4%B2%E0%A4%BE%20%E0%A4%AD%E0%A5%87%E0%A4%9F%20%E0%A4%A6%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AF%E0%A4%9A%E0%A5%80%20%E0%A4%86%E0%A4%B9%E0%A5%87."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>थेट व्हॉट्सअ‍ॅपवर बोला (WhatsApp Chat)</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
