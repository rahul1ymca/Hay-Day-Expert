import React, { useState } from 'react';
import { FaqItem, Language } from '../types';
import { faqList } from '../data/blogContent';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

interface FaqAccordionProps {
  currentLang: Language;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ currentLang }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-hayday" className="scroll-mt-24 my-14 bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-5 border-b border-stone-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5 mb-1">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            {currentLang === 'fr' ? 'Questions Fréquentes des Joueurs' : 'Frequently Asked Questions'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-['Outfit']">
            {currentLang === 'fr' ? 'Foire Aux Questions (FAQ) Hay Day' : 'Hay Day FAQ & Community Answers'}
          </h2>
        </div>
        <div className="text-xs text-stone-500 bg-stone-50 px-3 py-1.5 rounded-xl border border-stone-200">
          {currentLang === 'fr' ? 'Réponses Validées 2026' : '2026 Verified Answers'}
        </div>
      </div>

      <div className="divide-y divide-stone-100">
        {faqList.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="py-4 first:pt-0 last:pb-0">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-left flex items-center justify-between gap-4 py-2 text-stone-900 hover:text-amber-800 transition-colors focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-amber-100/70 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0">
                    Q{idx + 1}
                  </span>
                  <span className="font-extrabold text-base sm:text-lg font-['Outfit']">
                    {item.question[currentLang]}
                  </span>
                </div>
                <div className={`p-1.5 rounded-full text-stone-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-600 bg-amber-50' : ''}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {isOpen && (
                <div className="mt-3 pl-10 pr-4 text-stone-600 text-sm sm:text-base leading-relaxed animate-fadeIn">
                  <p className="bg-stone-50/70 p-4 rounded-2xl border border-stone-200/60">
                    {item.answer[currentLang]}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
