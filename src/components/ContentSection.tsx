import React from 'react';
import { SectionContent } from '../data/sectionsData';
import { Language } from '../types';
import { Sparkles, CheckCircle, Lightbulb, Share2, Tag } from 'lucide-react';

interface ContentSectionProps {
  section: SectionContent;
  currentLang: Language;
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
  children?: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  section,
  currentLang,
  image,
  children,
}) => {
  return (
    <article 
      id={section.id} 
      className="scroll-mt-24 my-14 bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-10 transition-all"
    >
      {/* Eyebrow badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          <Tag className="w-3 h-3 text-amber-600" />
          {section.badge[currentLang]}
        </span>
      </div>

      {/* Main Section H2 Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 font-['Outfit'] tracking-tight leading-tight mb-4">
        {section.title[currentLang]}
      </h2>

      {/* Lead Paragraph */}
      <p className="text-base sm:text-lg text-stone-700 font-medium leading-relaxed mb-6 pb-6 border-b border-stone-100">
        {section.lead[currentLang]}
      </p>

      {/* Featured Image if present */}
      {image && (
        <figure className="my-6 rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs bg-stone-50">
          <img
            src={image.src}
            alt={image.alt}
            referrerPolicy="no-referrer"
            className="w-full h-56 sm:h-72 object-cover"
            loading="lazy"
          />
          <figcaption className="p-3 text-xs text-stone-500 italic bg-stone-50 border-t border-stone-100">
            {image.caption}
          </figcaption>
        </figure>
      )}

      {/* Main Body Paragraphs */}
      <div className="space-y-4 text-stone-800 text-base leading-relaxed">
        {section.paragraphs.map((p, idx) => (
          <p key={idx} className="text-stone-700">
            {p[currentLang]}
          </p>
        ))}
      </div>

      {/* Children components like tables or calculators */}
      {children}

      {/* Pro Tip Callout Box */}
      {section.proTip && (
        <div className="mt-8 bg-gradient-to-r from-amber-50 to-amber-100/60 rounded-2xl border border-amber-300 p-5 sm:p-6 relative overflow-hidden">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-amber-950 text-base mb-1 font-['Outfit']">
                {section.proTip.title[currentLang]}
              </h3>
              <p className="text-sm text-amber-900/90 leading-relaxed">
                {section.proTip.content[currentLang]}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Key Takeaways Box */}
      {section.keyTakeaways && (
        <div className="mt-6 bg-stone-50 rounded-2xl border border-stone-200 p-5">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-700 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            {currentLang === 'fr' ? 'À Retenir Absolument :' : 'Key Actionable Takeaways:'}
          </h4>
          <ul className="space-y-2 text-sm text-stone-700">
            {section.keyTakeaways[currentLang].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};
