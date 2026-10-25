import React, { useState } from 'react';
import { Language } from '../types';
import { donationTiers } from '../data/donations';
import { translations } from '../data/translations';
import confetti from 'canvas-confetti';
import { Heart, QrCode, Copy, Check, Printer, Sparkles, ShieldCheck, Download, Award } from 'lucide-react';

interface DonationGatewayProps {
  currentLang: Language;
}

export const DonationGateway: React.FC<DonationGatewayProps> = ({ currentLang }) => {
  const [selectedTier, setSelectedTier] = useState<string>(donationTiers[0].id);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState<string>('');
  const [donorPhone, setDonorPhone] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [showReceipt, setShowReceipt] = useState<boolean>(false);
  const [receiptNumber, setReceiptNumber] = useState<string>('');

  const t = translations[currentLang];
  const lang = currentLang;

  const activeTier = donationTiers.find((tier) => tier.id === selectedTier);
  const finalAmount = customAmount ? parseInt(customAmount, 10) || 0 : activeTier?.amount || 250;
  const upiId = 'govansh.goshala@upi';

  // UPI deep link for mobile users
  const upiUrl = `upi://pay?pa=${upiId}&pn=Govansh%20Goshala&am=${finalAmount}&cu=INR&tn=Gau%20Seva%20Donation`;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCompleteDonation = (e: React.FormEvent) => {
    e.preventDefault();
    const newReceiptNum = `GV-${Math.floor(100000 + Math.random() * 900000)}`;
    setReceiptNumber(newReceiptNum);
    setShowReceipt(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Confetti fallback
    }
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <section id="donation" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-400 mb-2">
            <span>{t.donation.badge}</span>
            <span aria-hidden="true">·</span>
            <span>गोसेवा हेच पुण्याचे कार्य</span>
          </div>
          <h2 className="font-serif-vedic text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            {t.donation.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-300 leading-relaxed">
            {t.donation.subtitle}
          </p>
        </div>

        {/* Interactive Donation Wizard */}
        {!showReceipt ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 7 Columns: Preset Tiers & Donor Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <label className="text-sm font-semibold text-stone-200 block">
                  {t.donation.selectedCause}:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {donationTiers.map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => {
                        setSelectedTier(tier.id);
                        setCustomAmount('');
                      }}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedTier === tier.id && !customAmount
                          ? 'bg-amber-500/20 border-amber-400 text-white shadow-xs'
                          : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:bg-stone-800 hover:border-stone-600'
                      }`}
                    >
                      <div className="flex items-baseline justify-between">
                        <span className="text-xl font-bold text-amber-300 tabular-nums">
                          ₹{tier.amount}
                        </span>
                        {selectedTier === tier.id && !customAmount && (
                          <span className="text-xs font-semibold text-amber-400">निवडले</span>
                        )}
                      </div>
                      <p className="mt-1 font-semibold text-sm text-stone-100">
                        {tier.title[lang]}
                      </p>
                      <p className="mt-1 text-xs text-stone-400 line-clamp-2">
                        {tier.description[lang]}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount Field */}
              <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700">
                <label className="text-xs font-medium text-stone-300 block mb-1.5">
                  {t.donation.customAmount}:
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-stone-400 font-bold">₹</span>
                  <input
                    type="number"
                    min="51"
                    placeholder="उदा. ५००, १०००, २१००..."
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      if (e.target.value) setSelectedTier('');
                    }}
                    className="w-full bg-stone-900 border border-stone-600 rounded-lg pl-8 pr-4 py-2 text-white font-medium focus:border-amber-400 focus:outline-hidden text-sm"
                  />
                </div>
              </div>

              {/* Donor Contact Form */}
              <form onSubmit={handleCompleteDonation} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-stone-300 block mb-1">
                      {t.donation.donorNameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="आपले संपूर्ण नाव"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full bg-stone-800/90 border border-stone-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-amber-400 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-stone-300 block mb-1">
                      {t.donation.donorPhoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="१० अंकी मोबाईल नंबर"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      className="w-full bg-stone-800/90 border border-stone-700 rounded-lg px-3.5 py-2.5 text-white text-sm focus:border-amber-400 focus:outline-hidden"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base text-stone-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5 text-stone-950 fill-stone-950" />
                  <span>{t.donation.verifyPaymentBtn}</span>
                </button>
              </form>

            </div>

            {/* Right 5 Columns: Live UPI QR Code & App Intent */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-stone-800/90 rounded-2xl p-6 sm:p-8 border border-stone-700 shadow-xl">
              <div>
                <div className="text-center mb-4">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    {t.donation.scanQrTitle}
                  </span>
                  <div className="mt-1 flex items-center justify-center gap-2">
                    <span className="text-3xl font-extrabold text-white tabular-nums">
                      ₹{finalAmount}
                    </span>
                    <span className="text-xs text-stone-400 font-medium">INR</span>
                  </div>
                </div>

                {/* Simulated Clean High-Contrast UPI QR Code */}
                <div className="bg-white p-5 rounded-2xl w-56 h-56 mx-auto flex flex-col items-center justify-center shadow-lg relative border-4 border-amber-500">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-stone-950" fill="currentColor">
                    {/* QR Frame Markers */}
                    <rect x="5" y="5" width="26" height="26" fill="black" />
                    <rect x="9" y="9" width="18" height="18" fill="white" />
                    <rect x="13" y="13" width="10" height="10" fill="black" />

                    <rect x="69" y="5" width="26" height="26" fill="black" />
                    <rect x="73" y="9" width="18" height="18" fill="white" />
                    <rect x="77" y="13" width="10" height="10" fill="black" />

                    <rect x="5" y="69" width="26" height="26" fill="black" />
                    <rect x="9" y="73" width="18" height="18" fill="white" />
                    <rect x="13" y="77" width="10" height="10" fill="black" />

                    {/* QR Data Matrix Dots */}
                    <rect x="36" y="8" width="5" height="5" />
                    <rect x="46" y="8" width="5" height="5" />
                    <rect x="56" y="8" width="5" height="5" />
                    <rect x="36" y="18" width="5" height="5" />
                    <rect x="48" y="18" width="5" height="5" />
                    <rect x="40" y="28" width="5" height="5" />
                    <rect x="52" y="28" width="5" height="5" />

                    <rect x="8" y="38" width="5" height="5" />
                    <rect x="20" y="38" width="5" height="5" />
                    <rect x="32" y="38" width="5" height="5" />
                    <rect x="44" y="38" width="5" height="5" />
                    <rect x="58" y="38" width="5" height="5" />
                    <rect x="70" y="38" width="5" height="5" />
                    <rect x="82" y="38" width="5" height="5" />

                    <rect x="15" y="48" width="5" height="5" />
                    <rect x="26" y="48" width="5" height="5" />
                    <rect x="48" y="48" width="8" height="8" fill="#D97706" />
                    <rect x="68" y="48" width="5" height="5" />
                    <rect x="80" y="48" width="5" height="5" />

                    <rect x="36" y="58" width="5" height="5" />
                    <rect x="48" y="58" width="5" height="5" />
                    <rect x="60" y="58" width="5" height="5" />
                    <rect x="74" y="58" width="5" height="5" />
                    <rect x="86" y="58" width="5" height="5" />

                    <rect x="36" y="72" width="5" height="5" />
                    <rect x="48" y="72" width="5" height="5" />
                    <rect x="62" y="72" width="5" height="5" />
                    <rect x="76" y="72" width="5" height="5" />
                    <rect x="40" y="84" width="5" height="5" />
                    <rect x="54" y="84" width="5" height="5" />
                    <rect x="68" y="84" width="5" height="5" />
                    <rect x="84" y="84" width="5" height="5" />
                  </svg>
                  <span className="text-[10px] font-bold text-stone-700 mt-1 uppercase tracking-wider">
                    Govansh • GPay / PhonePe
                  </span>
                </div>

                {/* Copy UPI ID */}
                <div className="mt-5 bg-stone-900/90 rounded-xl p-3 border border-stone-700 flex items-center justify-between">
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-stone-400 block">{t.donation.upiIdLabel}:</span>
                    <span className="text-sm font-mono text-amber-300 font-semibold truncate block">
                      {upiId}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyUpi}
                    className="p-2 text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg transition-colors cursor-pointer shrink-0 ml-2"
                    title={t.donation.copyUpi}
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Direct Mobile UPI Pay Button for Phones */}
                <a
                  href={upiUrl}
                  className="mt-3 w-full py-2.5 px-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-95 text-center"
                >
                  <QrCode className="w-4 h-4 text-stone-950" />
                  <span>थेट UPI द्वारे भरा (GPay / PhonePe / BHIM)</span>
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-700/80 text-xs text-stone-400 leading-relaxed text-center">
                <p>{t.donation.taxNote}</p>
              </div>

            </div>

          </div>
        ) : (
          /* Interactive Digital Donor Certificate & Receipt - Mobile Responsive Padding */
          <div className="max-w-2xl mx-auto bg-[#FDFBF7] text-stone-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border-2 sm:border-4 border-amber-600 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="text-center pb-6 border-b-2 border-dashed border-stone-300">
              <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-800 mx-auto flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
                गोवंश गोशाळा व सेंद्रिय शेती ट्रस्ट
              </span>
              <h3 className="font-serif-vedic text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                {t.donation.receiptTitle}
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                पावती क्रमांक: <span className="font-mono font-bold text-stone-800">{receiptNumber}</span> · दिनांक: {new Date().toLocaleDateString('mr-IN')}
              </p>
            </div>

            <div className="py-6 space-y-4 text-sm text-stone-700">
              <div className="flex justify-between items-center py-1.5 border-b border-stone-200">
                <span className="text-stone-500">दानदात्याचे नाव / Donor Name:</span>
                <span className="font-bold text-stone-900 text-base">{donorName || 'सज्जन गोसेवक'}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-stone-200">
                <span className="text-stone-500">मोबाईल क्रमांक / Phone:</span>
                <span className="font-mono font-medium text-stone-900">{donorPhone || '+91 98XXXXXX'}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-stone-200">
                <span className="text-stone-500">दान प्रयोजन / Purpose:</span>
                <span className="font-medium text-stone-900">{activeTier ? activeTier.title[lang] : 'गोमाता चारा व औषध सेवा'}</span>
              </div>
              <div className="flex justify-between items-center py-2 bg-amber-50 rounded-xl px-4 border border-amber-200">
                <span className="font-bold text-stone-900">योगदान रक्कम / Total Amount:</span>
                <span className="text-2xl font-extrabold text-amber-900 tabular-nums">₹{finalAmount}</span>
              </div>
              <p className="text-xs text-stone-600 italic text-center pt-2">
                "आपल्या या पुनीत योगदानाबद्दल अनिता आणि रामकिसन चोपडे व गोवंश परिवार आपले मनःपूर्वक ऋणी आहे."
              </p>
            </div>

            <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setShowReceipt(false)}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              >
                ← नवीन दान करा
              </button>
              <button
                onClick={handlePrintReceipt}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>{t.donation.downloadReceipt}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
