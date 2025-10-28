/* ========================================
   APPLICATION CONFIGURATION
   Centralized config for easy maintenance
   ======================================== */

// API Configuration
export const API_CONFIG = {
  BASE_URL: 'http://localhost:5199',
  ENDPOINTS: {
    RANDOM_OMEN: '/api/omens/random',
    ALL_OMENS: '/api/omens/all',
  },
  TIMEOUT: 5000,
};

// Halloween Date Configuration
export const HALLOWEEN_CONFIG = {
  MONTH: 9, // October (0-indexed)
  DAY: 31,
  HOUR: 23,
  MINUTE: 59,
  SECOND: 59,
};

// Theme Configuration
export const THEME_CONFIG = {
  FALL: {
    name: 'fall',
    daysRemaining: 20,
    emoji: '🍂',
    label: 'Autumn Approaches',
  },
  TWILIGHT: {
    name: 'twilight',
    daysRemaining: 10,
    emoji: '🌅',
    label: 'Twilight Descends',
  },
  DUSK: {
    name: 'dusk',
    daysRemaining: 3,
    emoji: '🌆',
    label: 'Dusk Settles',
  },
  MIDNIGHT: {
    name: 'midnight',
    daysRemaining: 0,
    emoji: '🌙',
    label: 'Midnight Nears',
  },
};

// Effects Configuration
export const EFFECTS_CONFIG = {
  DEFAULT_STATE: {
    cursorTrail: true,
    matrixRain: false,
    bats: true,
    sound: true,
  },
  PARTICLE_COUNT: 20,
  BAT_COUNT: 5,
  CURSOR_TRAIL_INTERVAL: 50, // ms
  FACTS_ROTATION_INTERVAL: 8000, // ms
};

// LocalStorage Keys
export const STORAGE_KEYS = {
  EFFECTS_PREFERENCES: 'effectsPreferences',
  ENCOUNTERED_SPIRITS: 'encounteredSpirits',
  VISIT_COUNT: 'visitCount',
  LAST_VISIT: 'lastVisit',
};

// Sound Configuration
export const SOUND_CONFIG = {
  SUMMON_START: { frequency: 200, duration: 0.3 },
  SUMMON_MIDDLE: { frequency: 400, duration: 0.2, delay: 200 },
  SUMMON_SUCCESS: { frequency: 600, duration: 0.3 },
  SUMMON_SUCCESS_END: { frequency: 800, duration: 0.2, delay: 150 },
  ERROR: { frequency: 100, duration: 0.5 },
  VOLUME: 0.3,
};

// Animation Durations
export const ANIMATION_DURATIONS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  SCREEN_SHAKE: 500,
};

// Component Settings
export const COMPONENT_CONFIG = {
  FLOATING_GHOSTS: {
    count: 3,
    delays: [0, 5, 10],
  },
  FLYING_BATS: {
    count: 5,
    startYIncrement: 15,
    startYBase: 10,
    delayMultiplier: 3,
  },
  BOUNCING_PUMPKINS: {
    count: 3,
    delays: [0, 0.5, 1],
  },
};

// External Links
export const LINKS = {
  GITHUB: 'https://github.com/ailynux',
  REPO: 'https://github.com/ailynux/neon-reverie',
  ISSUES: 'https://github.com/ailynux/neon-reverie/issues',
};

// Meta Information
export const APP_INFO = {
  NAME: 'Neon Reverie',
  SUBTITLE: 'A HAUNTED TERMINAL EXPERIENCE',
  AUTHOR: 'Ailyn',
  YEAR: new Date().getFullYear(),
  VERSION: '1.0.0',
};

