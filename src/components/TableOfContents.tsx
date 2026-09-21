import React, { useEffect, useState } from 'react';
import { TocItem, Language } from '../types';
import { 
  Coins, 
  Gem, 
  Wheat, 
  Calculator, 
  UserCheck, 
  TrendingUp, 
  Award, 
  AlertTriangle, 
  HelpCircle,
  Clock,
  ArrowRight,
  ListOrdered
} from 'lucide-react';

interface TableOfContentsProps {
  items: TocItem[];
  currentLang: Language;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items, currentLang }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coins': return <Coins className="w-5 h-5 text-amber-600" />;
      case 'Gem': return <Gem className="w-5 h-5 text-sky-600" />;
      case 'Wheat': return <Wheat className="w-5 h-5 text-amber-500" />;
      case 'Calculator': return <Calculator className="w-5 h-5 text-emerald-600" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-purple-600" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case 'Award': return <Award className="w-5 h-5 text-yellow-600" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5 text-rose-600" />;
      case 'HelpCircle': return <HelpCircle className="w-5 h-5 text-indigo-600" />;
      default: return <ListOrdered className="w-5 h-5 text-stone-600" />;
    }
  };

  return (
    <nav 
      id="sommaire" 
      aria-label="Table des matières pas à pas" 
      className="my-10 bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
            <ListOrdered className="w-4 h-4" />
            <span>{currentLang === 'fr' ? 'Sommaire Interactif' : 'Interactive Contents'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit']">
            {currentLang === 'fr' ? 'Table des Matières Pas à Pas' : 'Step-by-Step Table of Contents'}
          </h2>
        </div>
        <div className="text-xs text-stone-500 bg-stone-50 border border-stone-200/70 px-3 py-1.5 rounded-xl self-start sm:self-auto font-medium">
          {currentLang === 'fr' ? '9 Sections d\'Experts • Liens directs' : '9 Expert Sections • Jump Links'}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-6">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group flex items-start gap-3.5 p-4 rounded-2xl border transition-all duration-200 no-underline text-inherit ${
                isActive
                  ? 'bg-amber-50/80 border-amber-400 ring-2 ring-amber-400/20 shadow-xs'
                  : 'bg-stone-50/50 hover:bg-amber-50/40 border-stone-200/80 hover:border-amber-300'
              }`}
            >
              {/* Step Number Badge & Icon */}
              <div className="flex flex-col items-center">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shadow-xs transition-colors ${
                  isActive ? 'bg-amber-500 text-white' : 'bg-white text-stone-700 border border-stone-200 group-hover:border-amber-400'
                }`}>
                  {item.stepNumber}
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="text-[11px] text-stone-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.readTimeMinutes} min
                  </span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-stone-900 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
                  {item.title[currentLang]}
                </h3>
              </div>

              {/* Jump Arrow */}
              <div className="text-stone-400 group-hover:text-amber-600 transition-transform group-hover:translate-x-0.5 pt-1">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
