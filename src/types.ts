export type Language = 'fr' | 'en';

export interface TocItem {
  id: string;
  stepNumber: number;
  title: Record<Language, string>;
  shortTitle: Record<Language, string>;
  icon: string;
  readTimeMinutes: number;
  category: string;
}

export interface ProTip {
  title: Record<Language, string>;
  content: Record<Language, string>;
  badge?: string;
}

export interface FaqItem {
  question: Record<Language, string>;
  answer: Record<Language, string>;
  category: string;
}

export interface ChecklistTask {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  rewardTag: Record<Language, string>;
  category: 'daily' | 'hourly' | 'weekly';
}

export interface ItemProfitData {
  name: Record<Language, string>;
  level: number;
  maxPrice: number;
  costEstimate: number;
  netProfit: number;
  building: Record<Language, string>;
  recommendation: 'essential' | 'high' | 'medium';
}
