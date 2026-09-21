import React, { useState, useEffect } from 'react';
import { Language, ChecklistTask } from '../types';
import { dailyChecklistData } from '../data/blogContent';
import { CheckSquare, Square, RotateCcw, Award, CheckCircle2 } from 'lucide-react';

interface DailyChecklistProps {
  currentLang: Language;
}

export const DailyChecklist: React.FC<DailyChecklistProps> = ({ currentLang }) => {
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('hayday_daily_tasks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('hayday_daily_tasks', JSON.stringify(completedTasks));
    } catch {
      // storage unavailable
    }
  }, [completedTasks]);

  const toggleTask = (id: string) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const resetAll = () => {
    setCompletedTasks({});
  };

  const completedCount = Object.values(completedTasks).filter(Boolean).length;
  const totalCount = dailyChecklistData.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="my-10 bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
            <Award className="w-3.5 h-3.5" />
            {currentLang === 'fr' ? 'Routine Optimisée' : 'Daily Optimization'}
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-['Outfit']">
            {currentLang === 'fr' ? 'Checklist Quotidienne du Fermier Efficace' : 'Daily Pro Farmer Checklist'}
          </h3>
        </div>

        <button
          onClick={resetAll}
          className="flex items-center gap-1 text-xs text-stone-500 hover:text-amber-800 transition-colors self-start sm:self-auto cursor-pointer font-medium"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{currentLang === 'fr' ? 'Réinitialiser' : 'Reset checklist'}</span>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 bg-stone-100 rounded-full h-3 overflow-hidden p-0.5">
        <div
          className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <div className="flex justify-between items-center text-xs text-stone-500 mb-6 font-medium">
        <span>
          {currentLang === 'fr'
            ? `${completedCount} sur ${totalCount} actions accomplies (${progressPercent}%)`
            : `${completedCount} of ${totalCount} completed (${progressPercent}%)`}
        </span>
        {progressPercent === 100 && (
          <span className="text-emerald-700 font-bold flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" />
            {currentLang === 'fr' ? 'Ferme optimisée pour aujourd\'hui !' : 'Farm peak performance achieved!'}
          </span>
        )}
      </div>

      {/* Checklist items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {dailyChecklistData.map((task) => {
          const isDone = !!completedTasks[task.id];
          return (
            <div
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                isDone
                  ? 'bg-emerald-50/60 border-emerald-300 text-stone-600'
                  : 'bg-stone-50/50 hover:bg-amber-50/40 border-stone-200 text-stone-800'
              }`}
            >
              <button 
                type="button"
                className="pt-0.5 text-stone-400 hover:text-emerald-600 focus:outline-none"
                aria-label={isDone ? "Marquer non fait" : "Marquer fait"}
              >
                {isDone ? (
                  <CheckSquare className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                ) : (
                  <Square className="w-5 h-5" />
                )}
              </button>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className={`font-bold text-sm leading-snug ${isDone ? 'line-through text-stone-500' : 'text-stone-900'}`}>
                    {task.title[currentLang]}
                  </h4>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-white border border-stone-200 text-stone-600 shrink-0">
                    {task.rewardTag[currentLang]}
                  </span>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {task.description[currentLang]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
