import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { Share2, Globe, BookOpen, ChevronDown, Check, Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang, onOpenShare }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sommaire', label: currentLang === 'fr' ? 'Sommaire' : 'Contents' },
    { href: '#pieces-argent', label: currentLang === 'fr' ? 'Pièces d\'Or' : 'Gold Coins' },
    { href: '#diamants-gratuits', label: currentLang === 'fr' ? 'Diamants' : 'Diamonds' },
    { href: '#wheating-grange-silo', label: currentLang === 'fr' ? 'Wheating' : 'Wheating' },
    { href: '#calculateur-wheating', label: currentLang === 'fr' ? 'Simulateur' : 'Calculator' },
    { href: '#tom-coursier', label: currentLang === 'fr' ? 'Tom' : 'Tom' },
    { href: '#faq-hayday', label: currentLang === 'fr' ? 'FAQ' : 'FAQ' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? 'bg-[#faf8f2]/95 backdrop-blur-md shadow-sm border-b border-amber-900/10' : 'bg-[#faf8f2]'
    }`}>
      {/* Scroll Progress Bar */}
      <div className="w-full h-1 bg-amber-100 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-emerald-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
          aria-label="Reading progress"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo & Brand */}
        <a 
          href="#"
          className="flex items-center gap-2.5 text-inherit no-underline group focus:outline-none"
          id="nav-brand-link"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center shadow-sm text-xl transform group-hover:scale-105 transition-transform">
            🌾
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg text-stone-900 tracking-tight font-['Outfit']">
                Astuces Hay Day
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                2026
              </span>
            </div>
            <p className="text-[11px] text-stone-500 font-medium hidden sm:block">
              {currentLang === 'fr' ? 'Le Guide Ultime de la Ferme' : 'The Ultimate Farm Guide'}
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold text-stone-700">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 rounded-lg hover:text-amber-800 hover:bg-amber-100/60 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher Button (FR <-> EN) */}
          <button
            id="lang-toggle-btn"
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 hover:border-amber-400 bg-white text-stone-800 text-xs font-bold shadow-xs hover:shadow transition-all cursor-pointer"
            title={currentLang === 'fr' ? 'Switch to English' : 'Passer en Français'}
          >
            <Globe className="w-3.5 h-3.5 text-amber-600" />
            <span className="uppercase">{currentLang === 'fr' ? 'FR' : 'EN'}</span>
            <span className="text-stone-300">|</span>
            <span className="text-stone-500 font-normal">{currentLang === 'fr' ? 'EN' : 'FR'}</span>
          </button>

          {/* Share Button */}
          <button
            id="nav-share-btn"
            onClick={onOpenShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs hover:shadow transition-all cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {currentLang === 'fr' ? 'Partager' : 'Share'}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-100"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 py-3 shadow-lg">
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-stone-800 hover:bg-amber-50 hover:text-amber-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
