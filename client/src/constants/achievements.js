/* ========================================
   ACHIEVEMENTS SYSTEM
   Unlock badges for various milestones
   ======================================== */

export const ACHIEVEMENTS = {
  FIRST_SPIRIT: {
    id: 'first_spirit',
    name: 'First Contact',
    description: 'Summon your first spirit',
    icon: '👻',
    requirement: { type: 'total', value: 1 },
    rarity: 'common',
    points: 10,
  },
  
  SPIRIT_COLLECTOR: {
    id: 'spirit_collector',
    name: 'Spirit Collector',
    description: 'Summon 10 spirits',
    icon: '🎃',
    requirement: { type: 'total', value: 10 },
    rarity: 'common',
    points: 25,
  },
  
  SPIRIT_MASTER: {
    id: 'spirit_master',
    name: 'Spirit Master',
    description: 'Summon 25 spirits',
    icon: '🔮',
    requirement: { type: 'total', value: 25 },
    rarity: 'rare',
    points: 50,
  },
  
  LEGENDARY_SUMMONER: {
    id: 'legendary_summoner',
    name: 'Legendary Summoner',
    description: 'Summon 50 spirits',
    icon: '⭐',
    requirement: { type: 'total', value: 50 },
    rarity: 'epic',
    points: 100,
  },
  
  ULTIMATE_MYSTIC: {
    id: 'ultimate_mystic',
    name: 'Ultimate Mystic',
    description: 'Summon 100 spirits',
    icon: '💫',
    requirement: { type: 'total', value: 100 },
    rarity: 'legendary',
    points: 250,
  },
  
  VARIETY_SEEKER: {
    id: 'variety_seeker',
    name: 'Variety Seeker',
    description: 'Discover 5 unique spirit types',
    icon: '🌈',
    requirement: { type: 'unique', value: 5 },
    rarity: 'common',
    points: 20,
  },
  
  DIVERSITY_EXPERT: {
    id: 'diversity_expert',
    name: 'Diversity Expert',
    description: 'Discover 10 unique spirit types',
    icon: '✨',
    requirement: { type: 'unique', value: 10 },
    rarity: 'rare',
    points: 50,
  },
  
  COMPLETE_COLLECTION: {
    id: 'complete_collection',
    name: 'Complete Collection',
    description: 'Discover all spirit types',
    icon: '👑',
    requirement: { type: 'unique', value: 20 },
    rarity: 'legendary',
    points: 500,
  },
  
  NIGHT_OWL: {
    id: 'night_owl',
    name: 'Night Owl',
    description: 'Summon a spirit at midnight',
    icon: '🌙',
    requirement: { type: 'special', value: 'midnight' },
    rarity: 'rare',
    points: 30,
  },
  
  HALLOWEEN_SPIRIT: {
    id: 'halloween_spirit',
    name: 'Halloween Spirit',
    description: 'Summon on October 31st',
    icon: '🎃',
    requirement: { type: 'special', value: 'halloween' },
    rarity: 'epic',
    points: 100,
  },
  
  THEME_EXPLORER: {
    id: 'theme_explorer',
    name: 'Theme Explorer',
    description: 'Try all 5 color themes',
    icon: '🎨',
    requirement: { type: 'special', value: 'themes' },
    rarity: 'common',
    points: 25,
  },
  
  SPEED_SUMMONER: {
    id: 'speed_summoner',
    name: 'Speed Summoner',
    description: 'Summon 5 spirits in under 1 minute',
    icon: '⚡',
    requirement: { type: 'special', value: 'speed' },
    rarity: 'rare',
    points: 40,
  },
  
  DEDICATED: {
    id: 'dedicated',
    name: 'Dedicated',
    description: 'Visit the app 7 days in a row',
    icon: '📅',
    requirement: { type: 'special', value: 'streak' },
    rarity: 'epic',
    points: 75,
  },
  
  EARLY_BIRD: {
    id: 'early_bird',
    name: 'Early Bird',
    description: 'Summon a spirit before 6 AM',
    icon: '🌅',
    requirement: { type: 'special', value: 'early' },
    rarity: 'uncommon',
    points: 20,
  },
  
  PUMPKIN_ENTHUSIAST: {
    id: 'pumpkin_enthusiast',
    name: 'Pumpkin Enthusiast',
    description: 'Click a pumpkin 10 times',
    icon: '🎃',
    requirement: { type: 'special', value: 'pumpkin' },
    rarity: 'common',
    points: 15,
  },
};

export const RARITY_COLORS = {
  common: '#9ca3af',
  uncommon: '#3b82f6',
  rare: '#8b5cf6',
  epic: '#ec4899',
  legendary: '#f59e0b',
};

export const getAllAchievements = () => {
  return Object.values(ACHIEVEMENTS);
};

export const getAchievementById = (id) => {
  return Object.values(ACHIEVEMENTS).find(achievement => achievement.id === id);
};

export const getTotalPoints = (unlockedAchievements) => {
  return unlockedAchievements.reduce((total, id) => {
    const achievement = getAchievementById(id);
    return total + (achievement?.points || 0);
  }, 0);
};

