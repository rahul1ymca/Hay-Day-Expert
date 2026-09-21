import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { tableOfContentsData } from './data/blogContent';
import { sectionsContentData } from './data/sectionsData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TableOfContents } from './components/TableOfContents';
import { ContentSection } from './components/ContentSection';
import { WheatingCalculator } from './components/WheatingCalculator';
import { ShopProfitTable } from './components/ShopProfitTable';
import { DailyChecklist } from './components/DailyChecklist';
import { FaqAccordion } from './components/FaqAccordion';
import { ShareModal } from './components/ShareModal';
import { Footer } from './components/Footer';
import { Share2, ArrowUp, Sparkles, FilterX } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync html lang attribute
  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Track scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  const scrollToToc = () => {
    const el = document.getElementById('sommaire');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter sections if user searches
  const filteredSectionIds = Object.keys(sectionsContentData).filter((key) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const sec = sectionsContentData[key];
    return (
      sec.title[currentLang].toLowerCase().includes(q) ||
      sec.lead[currentLang].toLowerCase().includes(q) ||
      sec.badge[currentLang].toLowerCase().includes(q) ||
      sec.paragraphs.some((p) => p[currentLang].toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-[#faf8f2] text-[#2c2620] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Sticky Header Navigation */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        onOpenShare={() => setIsShareOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        currentLang={currentLang}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onScrollToToc={scrollToToc}
      />

      {/* Main Single Page Article Container */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Step-by-Step Table of Contents (Sommaire interactif avec jump links) */}
        <TableOfContents
          items={tableOfContentsData}
          currentLang={currentLang}
        />

        {/* Search status notification if searching */}
        {searchQuery.trim() && (
          <div className="my-6 p-4 bg-amber-100/70 border border-amber-300 rounded-2xl flex items-center justify-between gap-3 text-sm text-amber-950">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>
                {currentLang === 'fr'
                  ? `Résultats pour : "${searchQuery}" (${filteredSectionIds.length} sections trouvées)`
                  : `Results for: "${searchQuery}" (${filteredSectionIds.length} sections matched)`}
              </span>
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 cursor-pointer"
            >
              <FilterX className="w-3.5 h-3.5" />
              <span>{currentLang === 'fr' ? 'Effacer le filtre' : 'Clear search'}</span>
            </button>
          </div>
        )}

        {/* Section 1: Pièces d'or rapides */}
        {filteredSectionIds.includes('pieces-argent') && (
          <ContentSection
            section={sectionsContentData['pieces-argent']}
            currentLang={currentLang}
            image={{
              src: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&auto=format&fit=crop&q=80',
              alt: "Vente de récoltes fraîches à l'échoppe de la ferme Hay Day",
              caption: currentLang === 'fr' 
                ? "L'Échoppe au prix maximum est jusqu'à 3 fois plus rentable que les commandes de camion."
                : "Roadside Shop at maximum price pays up to 3x more gold than truck orders.",
            }}
          />
        )}

        {/* Section 2: Diamants gratuits */}
        {filteredSectionIds.includes('diamants-gratuits') && (
          <ContentSection
            section={sectionsContentData['diamants-gratuits']}
            currentLang={currentLang}
            image={{
              src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80',
              alt: "Minerais précieux et diamants de mine Hay Day",
              caption: currentLang === 'fr'
                ? "La mine vous rapporte jusqu'à 10 diamants gratuits par jour grâce aux pelles et charges de TNT."
                : "The mine delivers up to 10 free diamonds daily through shovels and TNT charges.",
            }}
          />
        )}

        {/* Section 3: Wheating & Agrandir Grange/Silo */}
        {filteredSectionIds.includes('wheating-grange-silo') && (
          <ContentSection
            section={sectionsContentData['wheating-grange-silo']}
            currentLang={currentLang}
            image={{
              src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&auto=format&fit=crop&q=80',
              alt: "Champs de blé doré prêts pour le wheating Hay Day",
              caption: currentLang === 'fr'
                ? "Le blé ne met que 2 minutes à pousser : chaque cycle déclenche un drop d'outil rare BEM ou SEM."
                : "Wheat matures in only 2 minutes: every cycle triggers rare BEM or SEM tool drops.",
            }}
          />
        )}

        {/* Section 4: Simulateur Interactif Wheating */}
        <WheatingCalculator currentLang={currentLang} />

        {/* Section 5: Tom le Coursier & Tableau de rentabilité */}
        {filteredSectionIds.includes('tom-coursier') && (
          <ContentSection
            section={sectionsContentData['tom-coursier']}
            currentLang={currentLang}
            image={{
              src: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80',
              alt: "Pièces d'or et commerce lucratif avec Tom",
              caption: currentLang === 'fr'
                ? "Commandez des bagues en diamant ou des couvertures avec Tom pour des marges nettes colossales."
                : "Order diamond rings or blankets via Tom for massive resale profit margins.",
            }}
          >
            {/* Embedded Profit Table for Roadside Shop & Tom */}
            <ShopProfitTable currentLang={currentLang} />
          </ContentSection>
        )}

        {/* Section 6: Monter de Niveau & XP */}
        {filteredSectionIds.includes('monter-niveau-xp') && (
          <ContentSection
            section={sectionsContentData['monter-niveau-xp']}
            currentLang={currentLang}
          />
        )}

        {/* Interactive Daily Checklist Tool */}
        <DailyChecklist currentLang={currentLang} />

        {/* Section 7: Derby, Vallée et Animaux */}
        {filteredSectionIds.includes('derby-vallee-animaux') && (
          <ContentSection
            section={sectionsContentData['derby-vallee-animaux']}
            currentLang={currentLang}
            image={{
              src: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1200&auto=format&fit=crop&q=80',
              alt: "Animaux paisibles de la ferme",
              caption: currentLang === 'fr'
                ? "Nourrissez vos animaux de compagnie chaque jour pour récolter de l'XP propre et des outils sans stress."
                : "Feed your sanctuary pets daily for reliable XP spikes and bonus items.",
            }}
          />
        )}

        {/* Section 8: Les 7 Erreurs Critiques */}
        {filteredSectionIds.includes('erreurs-debutants') && (
          <ContentSection
            section={sectionsContentData['erreurs-debutants']}
            currentLang={currentLang}
          />
        )}

        {/* Section 9: FAQ Accordion (matching Schema.org FAQPage) */}
        <FaqAccordion currentLang={currentLang} />
      </main>

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-2xl bg-white border border-stone-300 text-stone-800 flex items-center justify-center shadow-lg hover:bg-amber-50 hover:border-amber-400 transition-all cursor-pointer transform hover:scale-105"
            aria-label="Retour en haut"
            title={currentLang === 'fr' ? 'Haut de page' : 'Back to top'}
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <button
          onClick={() => setIsShareOpen(true)}
          className="w-12 h-12 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center shadow-lg transition-all cursor-pointer transform hover:scale-105"
          aria-label="Partager le guide"
          title={currentLang === 'fr' ? 'Partager ce guide' : 'Share this guide'}
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        currentLang={currentLang}
      />

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}
