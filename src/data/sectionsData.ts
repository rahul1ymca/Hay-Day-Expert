import { Language } from '../types';

export interface SectionContent {
  id: string;
  badge: { fr: string; en: string };
  title: { fr: string; en: string };
  lead: { fr: string; en: string };
  paragraphs: { fr: string; en: string }[];
  proTip?: {
    title: { fr: string; en: string };
    content: { fr: string; en: string };
  };
  keyTakeaways?: { fr: string[]; en: string[] };
}

export const sectionsContentData: Record<string, SectionContent> = {
  'pieces-argent': {
    id: 'pieces-argent',
    badge: { fr: 'Économie & Richesse', en: 'Economy & Wealth' },
    title: {
      fr: '1. Comment Gagner des Millions de Pièces d\'Or Rapidement',
      en: '1. How to Earn Millions of Gold Coins Rapidly',
    },
    lead: {
      fr: 'Dans Hay Day, manquer de pièces d\'or est le principal frein pour acheter les machines de production (comme la fabrique de pâtes ou la bijouterie). Voici la méthode infaillible pour devenir millionnaire sans forcer.',
      en: 'In Hay Day, lacking gold coins is the #1 bottleneck preventing you from buying new production buildings. Here is the foolproof strategy to stack millions of coins naturally.',
    },
    paragraphs: [
      {
        fr: 'Beaucoup de joueurs commettent l\'erreur fatale de vider leur grange pour les commandes de camion et de bateau. Sachez que le camion offre une compensation en pièces inférieure de 30% à 50% par rapport à la vente directe à l\'Échoppe ! Le camion donne de l\'XP, mais il vous appauvrit.',
        en: 'Many players commit the fatal error of emptying their barn for truck and boat orders. Truck orders yield 30% to 50% LESS gold than selling directly in your Roadside Shop! The truck gives XP, but it leaves you broke.',
      },
      {
        fr: 'La règle d\'or des joueurs d\'élite : tout ce que vous produisez doit être vendu à votre Échoppe au PRIX MAXIMUM. Le marché mondial de Hay Day est constamment sous tension et quasi n\'importe quel produit fini s\'arrache en quelques minutes si vous cochez la publicité gratuite.',
        en: 'The golden rule of elite players: everything you produce should be listed in your Roadside Shop at MAXIMUM PRICE. The global newspaper market is always starving for goods and almost any crafted item sells within minutes with a free ad.',
      },
      {
        fr: 'Pour la nuit, lancez des cultures longues à haute rentabilité : tomates (6 heures), fraises (8 heures) ou citrouilles (3 heures). Au réveil, récoltez et remplissez vos boîtes d\'échoppe pour encaisser des milliers de pièces au petit déjeuner.',
        en: 'Before sleeping, plant long high-yield crops: tomatoes (6h), strawberries (8h), or pumpkins (3h). When you wake up, harvest and fill your shop boxes to cash in thousands of coins before breakfast.',
      },
    ],
    proTip: {
      title: {
        fr: 'Astuce Secrète : L\'Événement Visiteurs de la Ferme x2 Pièces',
        en: 'Secret Trick: 2x Coins Farm Visitor Event',
      },
      content: {
        fr: 'Surveillez le calendrier des événements ! Lorsque l\'événement "Visiteurs de la ferme double pièces" arrive, faites le plein de votre objet le plus cher (couvertures ou smoothies). Les petits visiteurs paieront le double du prix habituel, soit encore plus cher que le prix max de l\'échoppe ! C\'est ainsi que les experts génèrent 1 à 3 millions de pièces en une seule journée.',
        en: 'Watch the event calendar! When the "2x Coins Farm Visitors" event goes live, stockpile your most expensive item (blankets or smoothies). Visitors pay double their regular rate—even higher than roadside shop max price! That is how veteran players pocket 1 to 3 million coins in a single afternoon.',
      },
    },
    keyTakeaways: {
      fr: [
        'Vendez TOUT au prix maximum à votre échoppe avec la publicité active.',
        'Refusez les commandes de camion qui ne rapportent que peu de pièces.',
        'Plantez fraises, tomates et cacao la nuit pour une récolte dorée le matin.',
        'Exploitez les jours d\'événement double pièces avec vos stocks d\'objets premium.',
      ],
      en: [
        'Sell EVERYTHING at maximum price in your roadside shop with active ads.',
        'Trash truck orders that offer poor coin rewards.',
        'Plant strawberries, tomatoes, and cocoa overnight for fat morning profits.',
        'Capitalize on double coin visitor days with stockpiled high-value goods.',
      ],
    },
  },
  'diamants-gratuits': {
    id: 'diamants-gratuits',
    badge: { fr: 'Ressource Précieuse', en: 'Precious Currency' },
    title: {
      fr: '2. Obtenir des Diamants Gratuits sans Dépenser 1 Centime',
      en: '2. Get Free Diamonds Without Spending a Single Cent',
    },
    lead: {
      fr: 'Les diamants sont la monnaie royale de Hay Day. Nul besoin de sortir votre carte bancaire : le jeu regorge de filons secrets pour accumuler plus de 50 à 80 diamants par mois en pur free-to-play.',
      en: 'Diamonds are the royal currency of Hay Day. No credit card is needed: the game is filled with hidden mechanics to stack 50 to 80 free diamonds every month as pure F2P.',
    },
    paragraphs: [
      {
        fr: '1. Le filon de la Mine : Débloquée au niveau 24, la mine est une mine d\'or... de diamants ! En utilisant des pelles, pioches, bâtons de dynamite et charges de TNT, vous pouvez extraire jusqu\'à 10 diamants gratuits par jour. Les pelles possèdent le taux de drop de diamant le plus élevé.',
        en: '1. The Mine Secret: Unlocked at level 24, the mine is a literal diamond factory! Using shovels, pickaxes, dynamite, and TNT, you can pull up to 10 free diamonds daily. Shovels boast the highest diamond drop percentage.',
      },
      {
        fr: '2. Le carnet secret du pêcheur : Chaque nouvelle espèce pêchée dans les différents cercles d\'eau vous offre 1, 2 ou 3 diamants selon son poids record (bronze, argent, or). Pensez à fabriquer des leurres de couleur (verts, bleus, violets, dorés) pour attraper les espèces rares. Plus de 400 diamants vous y attendent !',
        en: '2. The Fisherman\'s Logbook: Every newly caught fish species recorded at higher weight tiers (bronze, silver, gold) awards 1, 2, or 3 diamonds directly in the dock logbook. Craft colored lures to snare rare species: over 400 cumulative diamonds are up for grabs!',
      },
      {
        fr: '3. Les bandes-annonces de cinéma : À côté de votre boîte aux lettres, cliquez chaque matin sur le ticket rose de cinéma. Regarder ces 4 courtes vidéos vous donne très souvent 1 à 2 diamants, des boosters et des matériaux d\'agrandissement gratuits.',
        en: '3. The Daily Cinema Tickets: Beside your mailbox, tap the pink movie ticket every morning. Watching these 4 quick trailers reliably gifts 1 to 2 diamonds, valuable boosters, and free expansion tools.',
      },
    ],
    proTip: {
      title: {
        fr: 'Investissement Obligatoire : Dans quoi dépenser vos diamants ?',
        en: 'Mandatory Rule: Where to actually spend your diamonds?',
      },
      content: {
        fr: 'Ne gaspillez jamais vos diamants pour accélérer une récolte ou ouvrir un coffre mystère fermé. Votre SEUL investissement rentable est d\'ajouter des emplacements de production dans vos usines clés : laiterie, sucrerie, fournil et moulin d\'aliments. 9 emplacements débloqués permettent de fabriquer du fromage et du sucre en continu pendant que vous dormez !',
        en: 'Never waste diamonds rushing crafts or opening locked 3-diamond mystery chests. Your ONLY wise investment is expanding queue slots on bottleneck machines: Dairy, Sugar Mill, Bakery, and Feed Mill. 9 slots let you produce butter, cheese, and sugar all night long.',
      },
    },
    keyTakeaways: {
      fr: [
        'Mine : jusqu\'à 10 diamants/jour (privilégiez les pelles).',
        'Livre de pêche : réclamez vos gemmes sur chaque nouvelle prise record.',
        'Réalisations de la ferme : consultez régulièrement le panneau pour récupérer des dizaines de gemmes.',
        'Priorité absolue : débloquer les files d\'attente de la sucrerie et de la laiterie.',
      ],
      en: [
        'Mine: extract up to 10 diamonds/day (shovels offer best rates).',
        'Fishing logbook: claim diamonds for every weight record.',
        'Farm house achievements: complete milestones for huge diamond rewards.',
        'Top spending priority: expand slots on Dairy and Sugar Mill.',
      ],
    },
  },
  'wheating-grange-silo': {
    id: 'wheating-grange-silo',
    badge: { fr: 'Stratégie Maître', en: 'Master Strategy' },
    title: {
      fr: '3. La Méthode Secrète du Wheating & Agrandir Grange/Silo',
      en: '3. The Wheating Method & Expanding Barn/Silo Capacity',
    },
    lead: {
      fr: 'Le manque d\'espace dans la grange (Barn) et le silo est la plus grande frustration des joueurs. Le "Wheating" est la technique officielle la plus puissante pour obtenir des dizaines d\'outils rares par heure.',
      en: 'Running out of storage space in your Barn and Silo is the #1 pain point in Hay Day. "Wheating" is the undisputed, proven technique to farm dozens of rare expansion tools per hour.',
    },
    paragraphs: [
      {
        fr: 'Le principe mathématique du jeu : Chaque fois que vous récoltez un certain nombre de parcelles (environ 30 à 60 récoltes selon votre niveau), l\'algorithme de Hay Day génère automatiquement un DROP d\'objet rare : boulons, planches, rubans adhésifs (BEM), clous, vis, panneaux de bois (SEM), haches ou scies.',
        en: 'The underlying game mathematics: Every time you harvest a certain threshold of field plots (approx 30 to 60 crops depending on your level), Hay Day\'s code triggers an automatic RARE DROP: bolts, planks, duct tapes (BEM), nails, screws, wood panels (SEM), axes, or saws.',
      },
      {
        fr: 'Pourquoi le blé ? Le blé ne coûte quasiment rien et ne met que 2 MINUTES à pousser. En plantant du blé sur 60 ou 80 parcelles en continu, vous déclenchez 1 à 2 drops d\'outils toutes les 2 minutes ! Sur une session d\'une heure, cela représente 30 à 50 outils gratuits.',
        en: 'Why Wheat? Wheat costs virtually nothing and matures in just 2 MINUTES. By sowing wheat across 60 to 80 plots non-stop, you trigger 1 to 2 rare drops every 120 seconds! In a 1-hour session, that yields 30 to 50 free expansion tools.',
      },
      {
        fr: 'Comment écouler le blé sans engorger votre silo : Mettez vos paquets de 10 blés en vente à 10 pièces à votre échoppe : ils se vendent instantanément aux autres joueurs qui font de la farine ou nourrissent leurs bêtes. Vous pouvez aussi en vendre à 36 pièces (prix max) en mettant une annonce toutes les 5 minutes.',
        en: 'How to dump wheat without overflowing your Silo: List stacks of 10 wheat for 10 coins in your shop: they sell in seconds to buyers making flour or animal feed. You can also list some at 36 coins (max price) whenever your free newspaper ad refreshes.',
      },
    ],
    proTip: {
      title: {
        fr: 'Casser l\'Algorithme d\'Asymétrie : La Règle d\'Équilibre',
        en: 'Breaking the Asymmetry Algorithm: The Balance Rule',
      },
      content: {
        fr: 'Avez-vous remarqué que vous avez toujours 35 boulons mais seulement 2 rubans adhésifs ? Le code de Hay Day favorise le matériau dont vous avez le plus d\'exemplaires ! Pour rétablir un taux de drop équilibré, vendez ou échangez vos boulons excédentaires avec votre voisinage pour maintenir vos quantités proches (ex: 15 boulons, 14 planches, 13 scotchs). Vous recevrez alors de nouveau des scotchs régulièrement.',
        en: 'Ever noticed having 35 bolts but only 2 duct tapes? Hay Day\'s drop algorithm is programmed to favor the item you hoard the most! To rebalance your drop chances, sell or swap excess bolts with neighborhood buddies to keep counts level (e.g. 15 bolts, 14 planks, 13 tapes). Your missing tools will start dropping again.',
      },
    },
    keyTakeaways: {
      fr: [
        'Plantez du blé sur 100% de vos parcelles libres (2 minutes de temps de pousse).',
        'Vendez le blé à 10 pièces le lot de 10 pour un déstockage instantané.',
        'Gardez vos compteurs de matériaux BEM équilibrés pour éviter le blocage d\'algorithme.',
        'Conservez les haches et scies pour nettoyer vos parcelles mortes.',
      ],
      en: [
        'Plant wheat on 100% of available field plots (2 minute cycle).',
        'Sell wheat at 10 coins per stack of 10 for instant clearance.',
        'Keep BEM material stacks evenly balanced to prevent algorithm bias.',
        'Stockpile axes and saws to clean dead berry bushes and trees.',
      ],
    },
  },
  'tom-coursier': {
    id: 'tom-coursier',
    badge: { fr: 'Partenaire VIP', en: 'VIP Errand Boy' },
    title: {
      fr: '5. Optimiser Tom le Coursier (Objets les Plus Rentables)',
      en: '5. Maximize Tom the Errand Boy (Most Profitable Items)',
    },
    lead: {
      fr: 'Tom est le jeune garçon qui dort près de la route. Au niveau 14, il vous est offert gratuitement pendant 3 jours. C\'est l\'atout le plus puissant du jeu pour amasser une fortune si vous savez exactement quoi commander.',
      en: 'Tom is the young boy resting near the roadside. At level 14, he works for free for 3 full days. He is your greatest money-making asset if you know what to order.',
    },
    paragraphs: [
      {
        fr: 'Le fonctionnement de Tom : Toutes les 2 heures, vous pouvez lui demander de chercher un objet de votre choix. Il revient avec 3 offres (souvent 9 unités au prix de gros le plus bas possible). Vous l\'achetez à bas prix, puis vous le revendez immédiatement au PRIX MAXIMUM dans votre échoppe.',
        en: 'How Tom works: Every 2 hours, you send him to find any item of your choice. He returns with 3 offers (almost always 9 units at rock-bottom wholesale prices). You buy them cheap, then immediately resell them at MAXIMUM PRICE in your roadside shop.',
      },
      {
        fr: 'Les meilleurs objets selon votre niveau :',
        en: 'The most profitable items sorted by level tier:',
      },
      {
        fr: '• Niveau 14 à 39 : Demandez des haches et des scies pour couper tous les arbres et buissons morts, ou le produit fini le plus cher que vous pouvez fabriquer (comme le fromage de chèvre ou les robes violettes).',
        en: '• Levels 14 to 39: Order axes and saws to clear dead trees, or the most expensive finished good unlocked (such as goat cheese or violet dresses).',
      },
      {
        fr: '• Niveau 40 à 58 : La bague en diamant ! Tom vous trouve 9 bagues pour environ 2 500 pièces. Revendez-les dans votre échoppe pour 7 416 pièces (824 pièces l\'unité). C\'est un bénéfice net de près de 5 000 pièces toutes les 2 heures !',
        en: '• Levels 40 to 58: Diamond Rings! Tom finds 9 rings for around 2,500 coins. Resell them in your shop for 7,416 coins (824 each). That is almost 5,000 net profit every 2 hours!',
      },
      {
        fr: '• Niveau 59 et plus : La couverture (Blanket) ! Le graal absolu de Hay Day. Tom vous en rapporte 9 pour ~3 200 pièces. Revente au prix max : 9 882 pièces ! Répétez 5 fois dans la journée pour encaisser plus de 33 000 pièces de pur profit.',
        en: '• Levels 59+: Blankets! The holy grail of Hay Day commerce. Tom brings 9 blankets for ~3,200 coins. Reselling at max price brings 9,882 coins! Repeat 5 times a day to pocket over 33,000 pure profit coins daily.',
      },
    ],
    proTip: {
      title: {
        fr: 'Astuce Alarme : Ne ratez aucun cycle de Tom',
        en: 'Alarm Clock Trick: Never miss a Tom cycle',
      },
      content: {
        fr: 'Activez une alarme ou une notification de 2 heures sur votre téléphone dès que Tom part en sieste. Sur une journée de 14 heures d\'éveil, vous pouvez réaliser 7 commandes, ce qui représente plus de 50 000 pièces de bénéfice net ou 63 scies/haches.',
        en: 'Set a 2-hour reminder on your phone the moment Tom falls asleep. In a 14-hour active day, that grants 7 dispatches—generating over 50,000 net coins or 63 saws/axes.',
      },
    },
  },
  'monter-niveau-xp': {
    id: 'monter-niveau-xp',
    badge: { fr: 'Progression Stratégique', en: 'Strategic Progression' },
    title: {
      fr: '6. Monter de Niveau sans Bloquer son Économie (XP vs Pièces)',
      en: '6. Level Up Without Going Broke (XP vs Coins Balance)',
    },
    lead: {
      fr: 'Monter de niveau trop vite est le piège numéro 1 qui pousse les joueurs à abandonner. Débloquer de nouvelles machines sans avoir les pièces pour les acheter paralyse votre progression.',
      en: 'Leveling up too fast is the #1 trap causing players to quit. Unlocking new machines without having enough coins to buy them completely paralyzes your farm.',
    },
    paragraphs: [
      {
        fr: 'Pourquoi l\'XP aveugle est dangereuse : Chaque nouveau niveau débloque des bâtiments coûteux (extracteur de jus, pâtisserie, bar à soupes...). Si vous n\'avez pas les pièces, vous ne pouvez pas fabriquer les nouveaux ingrédients demandés par le bateau, les clients et le derby. Ralentissez vos gains d\'XP jusqu\'à posséder au moins 100 000 à 200 000 pièces d\'avance.',
        en: 'Why blind XP farming is dangerous: Every level-up unlocks costly machines (Juice Press, Cake Oven, Soup Kitchen...). Without coins, you cannot build them, leaving you unable to fulfill boat and customer orders. Slow down XP until you maintain a safety bank of 100k-200k coins.',
      },
      {
        fr: 'Les meilleures sources d\'XP saines : Réveiller les animaux de compagnie (chiens, chats, chevaux, lapins) offre d\'énormes bouffées d\'XP gratuites et des matériaux. Les bateaux choisis (ceux avec des caisses faciles) donnent également des bons de couleur précieux.',
        en: 'The healthiest XP sources: Waking sanctuary pets (dogs, cats, horses, bunnies) awards substantial free XP bursts alongside rare tool drops. Selective boats (only easy-to-fill crates) also provide colored vouchers.',
      },
    ],
    keyTakeaways: {
      fr: [
        'Ayez toujours assez de pièces en réserve avant de passer un palier de machine.',
        'Nourrissez vos animaux de compagnie quotidiennement pour une XP propre.',
        'Envoyez les bateaux trop complexes à vide sans regret.',
      ],
      en: [
        'Always maintain cash reserves before unlocking new machinery.',
        'Feed sanctuary pets daily for safe, clean XP spikes.',
        'Cast off tedious or unprofitable boats empty without hesitation.',
      ],
    },
  },
  'derby-vallee-animaux': {
    id: 'derby-vallee-animaux',
    badge: { fr: 'Multijoueur & Événements', en: 'Multiplayer & Events' },
    title: {
      fr: '7. Dominer le Derby, la Vallée et les Animaux de Compagnie',
      en: '7. Master the Neighborhood Derby, Valley & Pets',
    },
    lead: {
      fr: 'Le jeu en communauté transforme Hay Day : le Derby hebdomadaire et les saisons de Vallée offrent les récompenses les plus prestigieuses du jeu (décorations exclusives, permis d\'extension, parchemins).',
      en: 'Community play elevates Hay Day: weekly Derbies and Valley seasons yield the rarest rewards in the entire game (exclusive decos, expansion permits, blueprints).',
    },
    paragraphs: [
      {
        fr: 'La règle d\'or du Derby 320 : Dans un voisinage compétitif (Ligue des Champions), supprimez sans pitié toutes les tâches inférieures à 320 points du panneau de liège. Les tâches de minage (99 minerais), de récolte de blé rapide et d\'aide aux voisins se terminent en moins de 10 minutes !',
        en: 'The Golden 320 Derby Rule: In competitive Champions League neighborhoods, ruthlessly trash any task below 320 points. Mining tasks (99 ores), fast crop harvesting, and help tasks can be finished in under 10 minutes!',
      },
      {
        fr: 'La Vallée : Ramassez les animaux échappés (girafes, éléphants, zèbres) pour remplir votre camion et obtenir des centaines de jetons colorés. Utilisez ces jetons pour acheter des rouleaux de permis d\'extension (Land Permits), qui sont impossibles à acheter avec des pièces.',
        en: 'The Valley Strategy: Collect escaped sanctuary animals (giraffes, elephants, zebras) onto your delivery truck to earn hundreds of colored tokens. Spend tokens on Expansion Permits, which cannot be bought with coins.',
      },
    ],
    keyTakeaways: {
      fr: [
        'Ne réalisez que des tâches à 320 points au Derby.',
        'Stockez de la dynamite avant le début du Derby pour finir les tâches de mine en 3 minutes.',
        'Priorisez l\'achat de permis d\'extension dans la boutique de la Vallée.',
      ],
      en: [
        'Only accept 320-point tasks during the Derby.',
        'Hoard mining tools before Derby kickoff to instantly clear 320-pt mining tasks.',
        'Prioritize Expansion Permits in the Valley token shop.',
      ],
    },
  },
  'erreurs-debutants': {
    id: 'erreurs-debutants',
    badge: { fr: 'Guide Anti-Échec', en: 'Failure Prevention' },
    title: {
      fr: '8. Les 7 Erreurs Critiques qui Ruinent Votre Progression',
      en: '8. The 7 Critical Mistakes Ruining Your Progress',
    },
    lead: {
      fr: 'Même après plusieurs mois de jeu, de nombreux fermiers stagnent à cause de mauvaises habitudes. Évitez ces 7 erreurs fatales pour garder une ferme prospère et fluide.',
      en: 'Even after months of playing, many farmers hit brick walls due to subtle bad habits. Avoid these 7 fatal traps to keep your farm thriving effortlessly.',
    },
    paragraphs: [
      {
        fr: '1. Semer la dernière graine : Ne tombez jamais à 0 unité d\'une culture rare (coton, soja, piments). Si cela arrive, vous devrez chercher dans le journal ou dépenser des diamants pour en racheter ! Gardez toujours au moins 3 à 5 graines de chaque plante.',
        en: '1. Sowing your last seed: Never plant down to 0 units of slow crops (cotton, soy, chili). If you run out, you must scour newspapers or spend precious diamonds to restart! Always keep a reserve buffer of 3-5 seeds.',
      },
      {
        fr: '2. Planter trop d\'arbres sans scies : Planter 50 pommiers ou caféiers sans avoir de scies en stock transformera votre ferme en cimetière d\'arbres morts desséchés. Plantez uniquement le nombre d\'arbres que vous êtes capable d\'abattre.',
        en: '2. Planting orchards without saws: Sowing 50 apple or coffee bushes without saw reserves turns your paradise into a depressing dead-wood graveyard. Only plant what you have cutting tools to clear.',
      },
      {
        fr: '3. Encombrer la grange avec des matériaux de terrain : Les actes notariés, pieux et masses prennent une place folle. Ne stockez pas d\'outils de terrain si votre grange déborde ; concentrez-vous à 100% sur les matériaux de grange et de silo (BEM & SEM).',
        en: '3. Choking storage with Land Expansion items: Land deeds, stakes, and mallets consume tons of space. Sell off excess land materials until your Barn capacity is comfortable; focus 100% on BEM and SEM.',
      },
      {
        fr: '4. Ouvrir les coffres mystères verrouillés : Les boîtes qui demandent 3 diamants pour s\'ouvrir ne rapportent presque jamais leur coût. Fermez la fenêtre immédiatement en cliquant sur la croix.',
        en: '4. Opening locked mystery chests: Boxes demanding 3 diamonds to pry open rarely refund their investment. Tap the X icon and walk away.',
      },
    ],
    keyTakeaways: {
      fr: [
        'Conservez toujours une réserve minimale de chaque graine dans votre silo.',
        'Ne plantez d\'arbres fruitiers que si vous possédez des scies et des haches en stock.',
        'Rejoignez un voisinage solidaire pour échanger vos doublons de matériaux.',
      ],
      en: [
        'Always maintain a baseline seed bank for every crop.',
        'Never plant fruit trees without matching saws and axes on hand.',
        'Join an active, supportive neighborhood to trade tool duplicates.',
      ],
    },
  },
};
