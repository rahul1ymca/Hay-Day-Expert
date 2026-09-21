import React, { useState } from 'react';
import { Language } from '../types';
import { Share2, Check, Copy, X, MessageCircle, Twitter, Facebook, Send } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, currentLang }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://hayday-astuces.pro';
  const shareTitle = currentLang === 'fr' 
    ? 'Astuces Hay Day 2026 : Le Guide Ultime (Pièces, Diamants & Wheating)'
    : 'Hay Day Tips & Tricks 2026: The Ultimate Guide for Coins & Diamonds';

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle} - ${currentUrl}`)}`, '_blank');
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(currentUrl)}&hashtags=HayDay,Gaming,Astuces`, '_blank');
  };

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white rounded-3xl border border-stone-200 shadow-2xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
            <Share2 className="w-4 h-4" />
          </div>
          <h3 className="text-xl font-extrabold text-stone-900 font-['Outfit']">
            {currentLang === 'fr' ? 'Partager ce guide Hay Day' : 'Share this Hay Day Guide'}
          </h3>
        </div>

        <p className="text-xs text-stone-500 mb-6">
          {currentLang === 'fr'
            ? 'Envoyez ces astuces à vos voisins de derby ou vos amis fermiers pour booster votre voisinage !'
            : 'Send these pro tips to your derby neighborhood buddies to boost your collective farm ranking!'}
        </p>

        {/* Social Share Buttons */}
        <div className="grid grid-cols-3 gap-2.5 mb-6">
          <button
            onClick={shareWhatsApp}
            className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 text-emerald-800 text-xs font-bold transition-all cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span>WhatsApp</span>
          </button>

          <button
            onClick={shareTwitter}
            className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-sky-50 hover:bg-sky-100/80 border border-sky-200/80 text-sky-800 text-xs font-bold transition-all cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-xs">
              <Twitter className="w-5 h-5" />
            </div>
            <span>X / Twitter</span>
          </button>

          <button
            onClick={shareFacebook}
            className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-blue-50 hover:bg-blue-100/80 border border-blue-200/80 text-blue-800 text-xs font-bold transition-all cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <Facebook className="w-5 h-5" />
            </div>
            <span>Facebook</span>
          </button>
        </div>

        {/* Copy Link Section */}
        <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200/80 flex items-center justify-between gap-2">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="bg-transparent text-xs text-stone-600 w-full outline-none truncate font-mono select-all"
          />
          <button
            onClick={handleCopy}
            className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{currentLang === 'fr' ? 'Copié !' : 'Copied!'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{currentLang === 'fr' ? 'Copier' : 'Copy'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
