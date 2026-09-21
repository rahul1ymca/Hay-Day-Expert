import { TocItem, FaqItem, ChecklistTask, ItemProfitData, Language } from '../types';

export const blogMetadata = {
  version: '2026.1',
  publishDate: '10 Janvier 2026',
  updateDate: '20 Septembre 2026',
  readingTimeMinutes: 14,
  viewsCount: '148,920',
  rating: '4.95 / 5',
  author: {
    name: 'Équipe Hay Day Pro & Maîtres Fermiers',
    role: {
      fr: 'Experts certifiés jeux de simulation Supercell',
      en: 'Certified Supercell simulation game masters',
    },
  },
};

export const tableOfContentsData: TocItem[] = [
  {
    id: 'pieces-argent',
    stepNumber: 1,
    title: {
      fr: 'Gagner des Millions de Pièces d\'Or Rapidement',
      en: 'Earn Millions of Gold Coins Fast',
    },
    shortTitle: {
      fr: 'Pièces d\'Or Rapides',
      en: 'Fast Gold Coins',
    },
    icon: 'Coins',
    readTimeMinutes: 3,
    category: 'Économie',
  },
  {
    id: 'diamants-gratuits',
    stepNumber: 2,
    title: {
      fr: 'Obtenir des Diamants Gratuits sans Dépenser 1€',
      en: 'Get Free Diamonds Without Spending a Cent',
    },
    shortTitle: {
      fr: 'Diamants Gratuits',
      en: 'Free Diamonds',
    },
    icon: 'Gem',
    readTimeMinutes: 3,
    category: 'Ressources Rares',
  },
  {
    id: 'wheating-grange-silo',
    stepNumber: 3,
    title: {
      fr: 'La Méthode du Wheating & Agrandir Grange/Silo',
      en: 'The Wheating Secret & Barn/Silo Expansion',
    },
    shortTitle: {
      fr: 'Wheating & Stockage',
      en: 'Wheating & Storage',
    },
    icon: 'Wheat',
    readTimeMinutes: 3,
    category: 'Stratégie Drop',
  },
  {
    id: 'calculateur-wheating',
    stepNumber: 4,
    title: {
      fr: 'Simulateur Interactif : Rendement du Wheating',
      en: 'Interactive Simulator: Wheating Yields',
    },
    shortTitle: {
      fr: 'Simulateur Blé',
      en: 'Wheat Simulator',
    },
    icon: 'Calculator',
    readTimeMinutes: 2,
    category: 'Outil Pratique',
  },
  {
    id: 'tom-coursier',
    stepNumber: 5,
    title: {
      fr: 'Optimiser Tom le Coursier (Objets les Plus Rentables)',
      en: 'Maximize Tom the Errand Boy (Best Items to Order)',
    },
    shortTitle: {
      fr: 'Astuces Tom',
      en: 'Tom The Errand Boy',
    },
    icon: 'UserCheck',
    readTimeMinutes: 2,
    category: 'Rentabilité',
  },
  {
    id: 'monter-niveau-xp',
    stepNumber: 6,
    title: {
      fr: 'Monter de Niveau sans Bloquer son Économie (XP vs Pièces)',
      en: 'Fast Level Up Strategy (XP vs Coin Balance)',
    },
    shortTitle: {
      fr: 'Niveaux & XP',
      en: 'Levels & XP',
    },
    icon: 'TrendingUp',
    readTimeMinutes: 2,
    category: 'Progression',
  },
  {
    id: 'derby-vallee-animaux',
    stepNumber: 7,
    title: {
      fr: 'Dominer le Derby, la Vallée et les Animaux de Compagnie',
      en: 'Master the Derby, Valley and Farm Sanctuary Pets',
    },
    shortTitle: {
      fr: 'Derby & Animaux',
      en: 'Derby & Pets',
    },
    icon: 'Award',
    readTimeMinutes: 2,
    category: 'Communauté',
  },
  {
    id: 'erreurs-debutants',
    stepNumber: 8,
    title: {
      fr: 'Les 7 Erreurs Critiques qui Ruinent Votre Progression',
      en: 'The 7 Critical Mistakes Ruining Your Progress',
    },
    shortTitle: {
      fr: 'Erreurs à Éviter',
      en: 'Mistakes to Avoid',
    },
    icon: 'AlertTriangle',
    readTimeMinutes: 2,
    category: 'Sécurité de Jeu',
  },
  {
    id: 'faq-hayday',
    stepNumber: 9,
    title: {
      fr: 'Foire Aux Questions (FAQ) – Réponses aux Joueurs',
      en: 'Frequently Asked Questions (FAQ) – Player Answers',
    },
    shortTitle: {
      fr: 'FAQ Hay Day',
      en: 'Hay Day FAQ',
    },
    icon: 'HelpCircle',
    readTimeMinutes: 2,
    category: 'Support',
  },
];

export const profitableItemsList: ItemProfitData[] = [
  {
    name: { fr: 'Bague en diamant', en: 'Diamond Ring' },
    level: 40,
    maxPrice: 824,
    costEstimate: 280,
    netProfit: 544,
    building: { fr: 'Bijouterie', en: 'Jewelry Stand' },
    recommendation: 'essential',
  },
  {
    name: { fr: 'Couverture', en: 'Blanket' },
    level: 59,
    maxPrice: 1098,
    costEstimate: 360,
    netProfit: 738,
    building: { fr: 'Métier à tisser', en: 'Loom' },
    recommendation: 'essential',
  },
  {
    name: { fr: 'Robe violette', en: 'Violet Dress' },
    level: 25,
    maxPrice: 327,
    costEstimate: 110,
    netProfit: 217,
    building: { fr: 'Machine à coudre', en: 'Sewing Machine' },
    recommendation: 'high',
  },
  {
    name: { fr: 'Tarte aux pommes', en: 'Apple Pie' },
    level: 28,
    maxPrice: 270,
    costEstimate: 95,
    netProfit: 175,
    building: { fr: 'Four à tarte', en: 'Pie Oven' },
    recommendation: 'high',
  },
  {
    name: { fr: 'Pizza épicée', en: 'Spicy Pizza' },
    level: 37,
    maxPrice: 226,
    costEstimate: 85,
    netProfit: 141,
    building: { fr: 'Four à pizza', en: 'Pizza Oven' },
    recommendation: 'medium',
  },
  {
    name: { fr: 'Burger au bacon', en: 'Bacon Burger' },
    level: 18,
    maxPrice: 180,
    costEstimate: 70,
    netProfit: 110,
    building: { fr: 'Grill', en: 'BBQ Grill' },
    recommendation: 'medium',
  },
];

export const dailyChecklistData: ChecklistTask[] = [
  {
    id: 'task-wheat',
    title: { fr: 'Session de Wheating matinale (15 min)', en: 'Morning Wheating Session (15 min)' },
    description: {
      fr: 'Plantez et coupez du blé pour récolter 5 à 10 outils rares (boulons, planches, scotch).',
      en: 'Plant and harvest wheat to collect 5-10 rare tools (bolts, planks, tapes).',
    },
    rewardTag: { fr: '+5 Outils rares & 500 pièces', en: '+5 Rare tools & 500 coins' },
    category: 'daily',
  },
  {
    id: 'task-cinema',
    title: { fr: 'Regarder les 4 bandes-annonces du facteur', en: 'Watch Mailman\'s 4 Movie Trailers' },
    description: {
      fr: 'Disponible près de la boîte aux lettres pour récupérer diamants, boosters et bons précieux.',
      en: 'Available near the mailbox for free diamonds, boosters, and vouchers.',
    },
    rewardTag: { fr: '1-2 Diamants & Matériaux', en: '1-2 Diamonds & Materials' },
    category: 'daily',
  },
  {
    id: 'task-mystery-box',
    title: { fr: 'Ouvrir le coffre mystère gratuit de sa ferme et chez les voisins', en: 'Open Free Mystery Boxes (Home & Friends)' },
    description: {
      fr: 'Un coffre gratuit s\'ouvre par jour sans diamants. Cliquez sur les fermes du journal pour en trouver.',
      en: 'One box opens daily for free without diamonds. Check newspaper farms for more.',
    },
    rewardTag: { fr: 'Diamants ou Matériaux BEM', en: 'Diamonds or BEM tools' },
    category: 'daily',
  },
  {
    id: 'task-mine',
    title: { fr: 'Exploiter 10 charges à la mine pour les diamants', en: 'Mine 10 charges for free daily diamonds' },
    description: {
      fr: 'La mine offre jusqu\'à 10 diamants par jour avec de la dynamite, du TNT ou des pelles.',
      en: 'The mine grants up to 10 diamonds daily with dynamite, TNT, or shovels.',
    },
    rewardTag: { fr: 'Jusqu\'à 10 Diamants + Minerais', en: 'Up to 10 Diamonds + Ores' },
    category: 'daily',
  },
  {
    id: 'task-pets',
    title: { fr: 'Nourrir les animaux de compagnie (chiens, chats, chevaux)', en: 'Feed Sanctuary Pets (Dogs, Cats, Horses)' },
    description: {
      fr: 'Réveillez vos animaux avec le sifflet après les avoir nourris pour déclencher des drops d\'outils et beaucoup d\'XP.',
      en: 'Wake pets with the whistle after feeding for rare tool drops and massive XP.',
    },
    rewardTag: { fr: '+300 XP & Outils aléatoires', en: '+300 XP & Random tools' },
    category: 'daily',
  },
  {
    id: 'task-tom',
    title: { fr: 'Utiliser Tom le coursier toutes les 2 heures', en: 'Command Tom the Errand Boy every 2 hours' },
    description: {
      fr: 'Si Tom est actif, commandez des bagues en diamant ou des couvertures au prix de gros pour les revendre.',
      en: 'If Tom is active, order 9 diamond rings or blankets at wholesale price to resell.',
    },
    rewardTag: { fr: '+5,000 à +7,000 pièces net', en: '+5,000 to +7,000 net coins' },
    category: 'hourly',
  },
];

export const faqList: FaqItem[] = [
  {
    category: 'Économie',
    question: {
      fr: 'Comment avoir des millions de pièces rapidement sans dépenser d\'argent réel ?',
      en: 'How to earn millions of coins fast without spending real money?',
    },
    answer: {
      fr: 'La règle numéro un est d\'ignorer les commandes de camion et de bateau standard si votre but est l\'or. Vendez absolument TOUT à votre échoppe au prix maximum. Pratiquez le wheating pour revendre le blé et les matériaux excédentaires. Dès le niveau 40, achetez des bagues avec Tom pour les revendre au prix fort (+544 pièces de bénéfice net par unité).',
      en: 'Rule #1 is ignoring standard truck and boat orders when your priority is gold. Sell EVERYTHING in your Roadside Shop at maximum price. Practice wheating to sell surplus crops and tools. From level 40, buy rings with Tom and resell them for huge profits (+544 net coins profit per item).',
    },
  },
  {
    category: 'Diamants',
    question: {
      fr: 'Quelle est la meilleure utilisation possible de mes diamants ?',
      en: 'What is the absolute best use of diamonds in Hay Day?',
    },
    answer: {
      fr: 'Ne dépensez JAMAIS de diamants pour accélérer une récolte ou terminer un gâteau. Investissez TOUS vos diamants dans l\'agrandissement des files d\'attente de production : en priorité la laiterie, la sucrerie, le moulin à aliments et le fournil. Cela permet à vos machines de tourner pendant la nuit sans interruption.',
      en: 'NEVER spend diamonds rushing crops or instant finishing crafts. Invest EVERY single diamond into unlocking production queue slots: priority goes to the Dairy, Sugar Mill, Feed Mill, and Bakery so your machines run all night while you sleep.',
    },
  },
  {
    category: 'Grange & Silo',
    question: {
      fr: 'Pourquoi ai-je toujours trop de boulons et jamais de planches de grange ?',
      en: 'Why do I always have tons of bolts and zero barn planks?',
    },
    answer: {
      fr: 'C\'est l\'algorithme d\'asymétrie de Supercell : le jeu a tendance à donner plus d\'exemplaires du matériau que vous possédez déjà en plus grande quantité, et à bloquer celui qui est le plus bas. Pour débloquer la situation, équilibrez vos stocks en vendant le surplus à vos amis de voisinage ou en échangeant dans des groupes fiables.',
      en: 'This is Supercell\'s asymmetry algorithm: the game tends to drop more of the item you already have in excess and slows down drops for your lowest item. To unblock drops, balance inventory by selling surplus to trusted neighborhood buddies.',
    },
  },
  {
    category: 'Tom le Coursier',
    question: {
      fr: 'Quel est l\'objet le plus rentable à faire chercher par Tom ?',
      en: 'What is the most profitable item to order from Tom?',
    },
    answer: {
      fr: 'Avant le niveau 40 : les haches et les scies pour nettoyer votre terrain, ou les robes violettes. Du niveau 40 au niveau 58 : les bagues en diamant (Diamond Rings). À partir du niveau 59 : les couvertures (Blankets), qui se revendent 1 098 pièces chacune. Achetez-en 9 toutes les 2 heures pour amasser une fortune.',
      en: 'Before level 40: axes and saws to clear trees, or violet dresses. From level 40 to 58: Diamond Rings. Level 59+: Blankets, which resell at 1,098 coins each. Buy 9 every 2 hours to accumulate a massive fortune.',
    },
  },
  {
    category: 'Pêche & Lac',
    question: {
      fr: 'Comment gagner facilement 50+ diamants avec la zone de pêche ?',
      en: 'How to easily get 50+ free diamonds from the Fishing Zone?',
    },
    answer: {
      fr: 'Ouvrez votre livre de pêche sur le ponton. Chaque fois que vous pêchez une nouvelle espèce de poisson à un poids record (bronze, argent, or), cliquez sur le poisson clignotant pour réclamer entre 1 et 3 diamants immédiatement. Avec 43 espèces et plusieurs paliers, cela représente plus de 400 diamants gratuits au total !',
      en: 'Open your fishing logbook on the dock. Each time you hook a new species at a record weight class (bronze, silver, gold), tap the bouncing fish to claim 1 to 3 diamonds. With 43 species, that adds up to over 400 free diamonds total!',
    },
  },
];
