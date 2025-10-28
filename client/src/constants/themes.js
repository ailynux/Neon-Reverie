/* ========================================
   THEME CONFIGURATIONS
   Multiple color schemes for different vibes
   ======================================== */

export const THEMES = {
  HALLOWEEN: {
    id: 'halloween',
    name: '🎃 Halloween',
    colors: {
      primary: '#b026ff',      // Neon Purple
      secondary: '#ff6b35',    // Neon Orange
      accent: '#00ffff',       // Neon Cyan
      highlight: '#ff10f0',    // Neon Pink
      
      bgDarkest: '#0a0a0f',
      bgDark: '#13131a',
      bgMedium: '#1a1a2e',
      
      textPrimary: '#e0e0e0',
      textSecondary: '#a0a0b0',
      
      // Soft colors for readability
      softPrimary: '#c084fc',
      softSecondary: '#ff9d6b',
      softAccent: '#7dd3fc',
    },
    description: 'Classic spooky neon vibes'
  },
  
  VAMPIRE: {
    id: 'vampire',
    name: '🧛 Vampire',
    colors: {
      primary: '#dc143c',      // Crimson Red
      secondary: '#8b0000',    // Dark Red
      accent: '#ffd700',       // Gold
      highlight: '#ff4500',    // Blood Orange
      
      bgDarkest: '#0f0000',
      bgDark: '#1a0000',
      bgMedium: '#2d0a0a',
      
      textPrimary: '#ffebeb',
      textSecondary: '#ffb3b3',
      
      softPrimary: '#ff6b6b',
      softSecondary: '#ff4444',
      softAccent: '#ffdd99',
    },
    description: 'Blood red and gothic elegance'
  },
  
  WITCH: {
    id: 'witch',
    name: '🧙 Witch',
    colors: {
      primary: '#9370db',      // Medium Purple
      secondary: '#2e8b57',    // Sea Green
      accent: '#ffa500',       // Orange
      highlight: '#ff69b4',    // Hot Pink
      
      bgDarkest: '#0a0f0a',
      bgDark: '#131a13',
      bgMedium: '#1e2e1e',
      
      textPrimary: '#e0ffe0',
      textSecondary: '#b3e6b3',
      
      softPrimary: '#b399ff',
      softSecondary: '#66cc88',
      softAccent: '#ffbb66',
    },
    description: 'Mystical greens and purples'
  },
  
  CYBERPUNK: {
    id: 'cyberpunk',
    name: '🤖 Cyberpunk',
    colors: {
      primary: '#00ffff',      // Cyan
      secondary: '#ff00ff',    // Magenta
      accent: '#ffff00',       // Yellow
      highlight: '#00ff00',    // Lime Green
      
      bgDarkest: '#000510',
      bgDark: '#0a0a1f',
      bgMedium: '#1a1a3e',
      
      textPrimary: '#e0ffff',
      textSecondary: '#99ffff',
      
      softPrimary: '#66ffff',
      softSecondary: '#ff66ff',
      softAccent: '#ffff66',
    },
    description: 'Futuristic neon cityscape'
  },
  
  GHOST: {
    id: 'ghost',
    name: '👻 Ghost',
    colors: {
      primary: '#e6e6fa',      // Lavender
      secondary: '#b0c4de',    // Light Steel Blue
      accent: '#f0e68c',       // Khaki
      highlight: '#d8bfd8',    // Thistle
      
      bgDarkest: '#0f0f12',
      bgDark: '#18181f',
      bgMedium: '#2a2a35',
      
      textPrimary: '#f0f0ff',
      textSecondary: '#c8c8dd',
      
      softPrimary: '#c9c9f5',
      softSecondary: '#9eb4d4',
      softAccent: '#e8d87a',
    },
    description: 'Ethereal and ghostly whites'
  },
};

export const DEFAULT_THEME = THEMES.HALLOWEEN;

export const getThemeById = (id) => {
  return Object.values(THEMES).find(theme => theme.id === id) || DEFAULT_THEME;
};

export const getAllThemes = () => {
  return Object.values(THEMES);
};

