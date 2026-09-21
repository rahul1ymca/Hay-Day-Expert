import React, { useState } from 'react';
import { Language } from '../types';
import { Calculator, Sparkles, TrendingUp, CheckCircle, Package, Clock } from 'lucide-react';

interface WheatingCalculatorProps {
  currentLang: Language;
}

export const WheatingCalculator: React.FC<WheatingCalculatorProps> = ({ currentLang }) => {
  const [plots, setPlots] = useState<number>(60);
  const [durationMinutes, setDurationMinutes] = useState<number>(30);

  // Calculations
  const cycles = Math.floor(durationMinutes / 2); // Wheat takes 2 minutes
  const totalHarvests = plots * cycles;
  const netWheatProduced = plots * cycles; // Each plot uses 1 seed, gives 2 wheat => net +1 per plot per cycle
  const estimatedRareDrops = Math.max(1, Math.round(totalHarvests / 38)); // ~1 drop per 38 harvested plots
  const coinsAtMaxPrice = Math.round((netWheatProduced / 10) * 36);
  const coinsInstantSale = Math.round((netWheatProduced / 10) * 10);
  const xpGained = totalHarvests * 1; // 1 XP per wheat cut

  return (
    <div id="calculateur-wheating" className="my-12 bg-gradient-to-br from-emerald-500/10 via-amber-500/10 to-transparent p-6 sm:p-8 rounded-3xl border border-emerald-500/20 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-stone-200">
        <div>
          <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            {currentLang === 'fr' ? 'Outil Interactif 2026' : 'Interactive Tool 2026'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-['Outfit']">
            {currentLang === 'fr' ? '4. Simulateur de Rendement du Wheating' : '4. Wheating Yield Simulator'}
          </h3>
          <p className="text-sm text-stone-600 mt-1">
            {currentLang === 'fr'
              ? 'Calculez vos drops d\'outils rares (boulons, planches, scotch) et vos pièces générées selon vos parcelles.'
              : 'Calculate your rare tool drops (bolts, planks, tapes) and coin yields based on your field count.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-stone-200/90 shadow-xs space-y-5">
          {/* Plots Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-stone-800">
                {currentLang === 'fr' ? 'Nombre de parcelles de culture :' : 'Number of Field Plots:'}
              </label>
              <span className="font-extrabold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200 text-sm">
                {plots} {currentLang === 'fr' ? 'champs' : 'plots'}
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="150"
              step="5"
              value={plots}
              onChange={(e) => setPlots(Number(e.target.value))}
              className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[11px] text-stone-600 mt-1 font-medium">
              <span>20 (Niveau 15)</span>
              <span>60 (Niveau 35)</span>
              <span>100+ (Niveau 60+)</span>
            </div>
          </div>

          {/* Duration Buttons */}
          <div>
            <label className="block text-sm font-bold text-stone-800 mb-2">
              {currentLang === 'fr' ? 'Durée de la session de jeu :' : 'Farming Session Duration:'}
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[15, 30, 60, 120].map((mins) => (
                <button
                  key={mins}
                  onClick={() => setDurationMinutes(mins)}
                  className={`py-2 px-1 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                    durationMinutes === mins
                      ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                      : 'bg-stone-50 hover:bg-amber-50 text-stone-700 border-stone-200'
                  }`}
                >
                  {mins >= 60 ? `${mins / 60}h` : `${mins}m`}
                </button>
              ))}
            </div>
          </div>

          {/* Summary Details */}
          <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80 text-xs space-y-1.5 text-stone-600">
            <div className="flex justify-between">
              <span>{currentLang === 'fr' ? 'Cycles de 2 min :' : '2-min Cycles:'}</span>
              <span className="font-bold text-stone-900">{cycles} récoltes</span>
            </div>
            <div className="flex justify-between">
              <span>{currentLang === 'fr' ? 'Total épis fauchés :' : 'Total Crops Cut:'}</span>
              <span className="font-bold text-stone-900">{totalHarvests.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>{currentLang === 'fr' ? 'XP gagnée :' : 'XP Earned:'}</span>
              <span className="font-bold text-emerald-700">+{xpGained.toLocaleString()} XP</span>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Rare Tools Drop Card */}
          <div className="bg-white p-5 rounded-2xl border border-amber-300 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase text-amber-800 tracking-wider">
                  {currentLang === 'fr' ? 'Outils Rares Estimés' : 'Estimated Rare Tools'}
                </span>
                <span className="text-xl">📦</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-amber-900 font-['Outfit']">
                ~{estimatedRareDrops}
              </div>
              <p className="text-xs text-stone-500 mt-1">
                {currentLang === 'fr'
                  ? 'Boulons, planches, scotch, vis, clous, haches et scies'
                  : 'Bolts, planks, tapes, screws, nails, axes, and saws'}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{currentLang === 'fr' ? 'Soit 1 outil toutes les 2-3 minutes !' : '1 rare tool every 2-3 mins!'}</span>
            </div>
          </div>

          {/* Coins Yield Card */}
          <div className="bg-white p-5 rounded-2xl border border-emerald-300 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase text-emerald-800 tracking-wider">
                  {currentLang === 'fr' ? 'Gain de Pièces Échoppe' : 'Coins Roadside Yield'}
                </span>
                <span className="text-xl">💰</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-700 font-['Outfit']">
                +{coinsAtMaxPrice.toLocaleString()}
              </div>
              <p className="text-xs text-stone-500 mt-1">
                {currentLang === 'fr'
                  ? `Au prix max (36 pièces / 10 blés). En vente rapide (10 pièces) : +${coinsInstantSale.toLocaleString()} pièces.`
                  : `At max price (36 coins / 10 wheat). Quick sale (10 coins): +${coinsInstantSale.toLocaleString()} coins.`}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-stone-500">
              <Clock className="w-3.5 h-3.5" />
              <span>{currentLang === 'fr' ? 'Vente quasi-instantanée' : 'Nearly instant selling'}</span>
            </div>
          </div>

          {/* Actionable Advice Box */}
          <div className="sm:col-span-2 bg-amber-50/70 border border-amber-200/80 p-4 rounded-2xl text-xs sm:text-sm text-stone-700 space-y-1.5">
            <div className="font-bold text-amber-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{currentLang === 'fr' ? 'Conseil d\'exécution :' : 'Execution Tip:'}</span>
            </div>
            <p>
              {currentLang === 'fr'
                ? 'Avant de lancer cette session, vérifiez que votre Silo a au moins 60 places de réserve. Dès que vous avez 100 blés récoltés, mettez-les en vente à 10 pièces dans les 3 premières boîtes pour ne jamais bloquer la récolte.'
                : 'Before launching this session, verify your Silo has at least 60 open slots. The moment you harvest 100 wheat, list them for 10 coins in your front boxes to avoid full silo bottlenecks.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
