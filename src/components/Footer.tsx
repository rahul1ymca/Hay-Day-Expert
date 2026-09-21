import React from 'react';
import { Language } from '../types';
import { ArrowUp, Heart, Shield, Globe, Sparkles } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-400 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🌾</span>
              <span className="text-xl font-black text-white font-['Outfit']">
                Astuces Hay Day 2026
              </span>
              <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Cloudflare Ready
              </span>
            </div>
            <p className="text-xs text-stone-400 max-w-md">
              {currentLang === 'fr'
                ? 'Le guide stratégique non-officiel le plus complet pour maximiser vos pièces, vos diamants et votre production sans micro-transactions.'
                : 'The most comprehensive unofficial strategic guide to maximizing gold coins, diamonds, and farm output without microtransactions.'}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold transition-all cursor-pointer border border-stone-700"
          >
            <ArrowUp className="w-4 h-4" />
            <span>{currentLang === 'fr' ? 'Haut de page' : 'Back to Top'}</span>
          </button>
        </div>

        {/* Semantic SEO Keywords Ribbon */}
        <div className="py-6 border-b border-stone-800/60 text-xs">
          <div className="text-stone-500 font-bold mb-2 uppercase tracking-wider text-[11px]">
            {currentLang === 'fr' ? 'Thématiques Clés du Guide :' : 'Key Guide Topics:'}
          </div>
          <div className="flex flex-wrap gap-2 text-stone-400">
            <span className="bg-stone-800/80 px-2.5 py-1 rounded-lg">astuces hay day 2026</span>
            <span className="bg-stone-800/80 px-2.5 py-1 rounded-lg">gagner pièces hay day</span>
            <span className="bg-stone-800/80 px-2.5 py-1 rounded-lg">diamants gratuits hay day</span>
            <span className="bg-stone-800/80 px-2.5 py-1 rounded-lg">méthode wheating blé</span>
            <span className="bg-stone-800/80 px-2.5 py-1 rounded-lg">agrandir grange et silo</span>
            <span className="bg-stone-800/80 px-2.5 py-1 rounded-lg">tom le coursier astuces</span>
            <span className="bg-stone-800/80 px-2.5 py-1 rounded-lg">derby voisinage hay day</span>
            <span className="bg-stone-800/80 px-2.5 py-1 rounded-lg">prix max échoppe hay day</span>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © 2026 Astuces Hay Day France. {currentLang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'} Hay Day est une marque déposée de Supercell Oy. Ce site est un guide indépendant réalisé par des fans.
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <Shield className="w-3.5 h-3.5" />
              <span>SSL Sécurisé</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
