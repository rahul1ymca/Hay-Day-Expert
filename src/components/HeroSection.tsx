import React from 'react';
import { Language } from '../types';
import { blogMetadata } from '../data/blogContent';
import { Sparkles, Calendar, Clock, Star, Eye, ShieldCheck, ArrowDown, Search } from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onScrollToToc: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  searchQuery,
  onSearchChange,
  onScrollToToc,
}) => {
  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-b from-amber-50/70 via-[#faf8f2] to-[#faf8f2] border-b border-amber-900/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category & Status Eyebrow */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1 bg-amber-500/15 text-amber-900 border border-amber-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            {currentLang === 'fr' ? 'Édition Mise à Jour 2026' : 'Updated 2026 Edition'}
          </span>
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-2.5 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            {currentLang === 'fr' ? '100% Sans Triche / Conforme Supercell' : '100% Legit & Fair Play'}
          </span>
        </div>

        {/* Primary SEO H1 Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-stone-950 font-['Outfit'] tracking-tight leading-tight mb-4">
          {currentLang === 'fr' ? (
            <>
              Astuces Hay Day 2026 : Le Guide Ultime pour{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-emerald-700">
                Pièces, Diamants & Niveaux Rapides
              </span>
            </>
          ) : (
            <>
              Hay Day Tips & Tricks 2026: The Ultimate Guide for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-emerald-700">
                Coins, Diamonds & Fast Levels
              </span>
            </>
          )}
        </h1>

        {/* Sub-headline description */}
        <p className="text-lg sm:text-xl text-stone-700 leading-relaxed max-w-3xl mb-6">
          {currentLang === 'fr'
            ? 'Vous manquez de pièces d\'or pour vos machines ? Votre grange déborde ? Découvrez les meilleures astuces Hay Day testées et vérifiées : la technique secrète du wheating, le filon des diamants gratuits, l\'exploitation optimale de Tom le coursier et les erreurs à bannir.'
            : 'Struggling for gold coins to buy production buildings? Barn always full? Discover the highest-yield Hay Day strategies: wheating mechanics, diamond mining loops, Tom errand boy optimizations, and beginner traps to eliminate.'}
        </p>

        {/* Meta details (Author, Read time, Date, Rating) */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-stone-600 pb-6 border-b border-stone-200">
          <div className="flex items-center gap-1.5 font-medium">
            <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold">
              HD
            </div>
            <span>{blogMetadata.author.name}</span>
          </div>

          <div className="flex items-center gap-1 text-stone-500">
            <Calendar className="w-4 h-4 text-stone-400" />
            <span>
              {currentLang === 'fr'
                ? `Actualisé le ${blogMetadata.updateDate}`
                : `Updated ${blogMetadata.updateDate}`}
            </span>
          </div>

          <div className="flex items-center gap-1 text-stone-500">
            <Clock className="w-4 h-4 text-stone-400" />
            <span>
              {currentLang === 'fr'
                ? `${blogMetadata.readingTimeMinutes} min de lecture`
                : `${blogMetadata.readingTimeMinutes} min read`}
            </span>
          </div>

          <div className="flex items-center gap-1 text-amber-700 font-semibold bg-amber-100/70 px-2 py-0.5 rounded-md">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{blogMetadata.rating} (1,480+ avis)</span>
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className="bg-white p-3.5 rounded-2xl border border-stone-200/80 shadow-xs hover:border-amber-400 transition-colors">
            <span className="text-2xl mb-1 block">💰</span>
            <div className="font-extrabold text-stone-900 text-base font-['Outfit']">500 000+</div>
            <div className="text-xs text-stone-500">
              {currentLang === 'fr' ? 'Pièces / jour à l\'échoppe' : 'Coins / day roadside shop'}
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-stone-200/80 shadow-xs hover:border-amber-400 transition-colors">
            <span className="text-2xl mb-1 block">💎</span>
            <div className="font-extrabold text-stone-900 text-base font-['Outfit']">10 à 15 / sem</div>
            <div className="text-xs text-stone-500">
              {currentLang === 'fr' ? 'Diamants gratuits réels' : 'Real free diamonds'}
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-stone-200/80 shadow-xs hover:border-amber-400 transition-colors">
            <span className="text-2xl mb-1 block">🌾</span>
            <div className="font-extrabold text-stone-900 text-base font-['Outfit']">2 Minutes</div>
            <div className="text-xs text-stone-500">
              {currentLang === 'fr' ? 'Cycle express Wheating' : 'Wheating cycle drop'}
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-stone-200/80 shadow-xs hover:border-amber-400 transition-colors">
            <span className="text-2xl mb-1 block">🛡️</span>
            <div className="font-extrabold text-stone-900 text-base font-['Outfit']">0 € Dépensé</div>
            <div className="text-xs text-stone-500">
              {currentLang === 'fr' ? '100% Free-to-Play' : '100% Free-to-Play'}
            </div>
          </div>
        </div>

        {/* Quick Search & Filter bar for tips */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={
                currentLang === 'fr'
                  ? 'Rechercher une astuce (ex: blé, diamants, Tom, grange, silo)...'
                  : 'Search any tip (e.g., wheat, diamonds, Tom, barn, silo)...'
              }
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 shadow-xs transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onScrollToToc}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <span>{currentLang === 'fr' ? 'Voir le Sommaire' : 'Jump to Contents'}</span>
              <ArrowDown className="w-4 h-4" />
            </button>
            <a
              href="#calculateur-wheating"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold text-sm rounded-xl transition-all"
            >
              <span>{currentLang === 'fr' ? 'Simulateur' : 'Calculator'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
