import React from 'react';
import { Language } from '../types';
import { profitableItemsList } from '../data/blogContent';
import { DollarSign, TrendingUp, Sparkles, Building2 } from 'lucide-react';

interface ShopProfitTableProps {
  currentLang: Language;
}

export const ShopProfitTable: React.FC<ShopProfitTableProps> = ({ currentLang }) => {
  return (
    <div className="my-8 bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-8 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5 mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
            {currentLang === 'fr' ? 'Tableau Comparatif Échoppe & Tom' : 'Roadside Shop & Tom Profit Matrix'}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-['Outfit']">
            {currentLang === 'fr' ? 'Les Objets les Plus Rentables de Hay Day' : 'The Most Profitable Items in Hay Day'}
          </h3>
        </div>
        <div className="text-xs text-stone-500 bg-stone-50 px-3 py-1.5 rounded-xl border border-stone-200">
          {currentLang === 'fr' ? 'Prix Maximum Officiel Supercell' : 'Official Supercell Max Prices'}
        </div>
      </div>

      <div className="overflow-x-auto -mx-6 sm:mx-0">
        <table className="w-full text-left border-collapse min-w-[580px]">
          <thead>
            <tr className="border-b border-stone-200 text-xs font-bold text-stone-500 uppercase tracking-wider bg-stone-50/70">
              <th className="py-3 px-4 rounded-l-xl">{currentLang === 'fr' ? 'Objet' : 'Item'}</th>
              <th className="py-3 px-3">{currentLang === 'fr' ? 'Niveau' : 'Level'}</th>
              <th className="py-3 px-3">{currentLang === 'fr' ? 'Bâtiment' : 'Building'}</th>
              <th className="py-3 px-3 text-right">{currentLang === 'fr' ? 'Prix Max' : 'Max Price'}</th>
              <th className="py-3 px-3 text-right">{currentLang === 'fr' ? 'Achat Tom (Est.)' : 'Tom Buy (Est.)'}</th>
              <th className="py-3 px-4 text-right rounded-r-xl">{currentLang === 'fr' ? 'Profit Net (x9)' : 'Net Profit (x9)'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-sm">
            {profitableItemsList.map((item, idx) => {
              const profitTimesNine = item.netProfit * 9;
              return (
                <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>{item.name[currentLang]}</span>
                    {item.recommendation === 'essential' && (
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                        TOP 1
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-3 text-stone-600 font-medium">
                    Niv. {item.level}
                  </td>
                  <td className="py-3.5 px-3 text-stone-600 text-xs">
                    {item.building[currentLang]}
                  </td>
                  <td className="py-3.5 px-3 text-right font-extrabold text-stone-900 font-mono">
                    {item.maxPrice.toLocaleString()} 🪙
                  </td>
                  <td className="py-3.5 px-3 text-right text-stone-500 font-mono text-xs">
                    ~{item.costEstimate} 🪙
                  </td>
                  <td className="py-3.5 px-4 text-right font-extrabold text-emerald-700 font-mono">
                    +{profitTimesNine.toLocaleString()} 🪙
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-stone-100 flex flex-col sm:flex-row justify-between text-xs text-stone-500 gap-2">
        <span>* Calcul basé sur 9 unités rapportées par Tom le coursier toutes les 2 heures.</span>
        <span className="font-semibold text-amber-800">
          {currentLang === 'fr' ? 'Conseil : Ne vendez jamais ces items au camion !' : 'Rule: Never sell these high-tier items to trucks!'}
        </span>
      </div>
    </div>
  );
};
