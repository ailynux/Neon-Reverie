import { useState, useEffect } from 'react';
import { DEFAULT_THEME, getThemeById } from '../constants/themes';

/**
 * Custom hook for managing app theme
 * @returns {Object} - Current theme and setter function
 */
export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Load saved theme from localStorage
    const savedThemeId = localStorage.getItem('selectedTheme');
    return savedThemeId ? getThemeById(savedThemeId) : DEFAULT_THEME;
  });

  // Apply theme colors to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    const colors = currentTheme.colors;

    // Update CSS custom properties
    root.style.setProperty('--neon-purple', colors.primary);
    root.style.setProperty('--neon-orange', colors.secondary);
    root.style.setProperty('--neon-cyan', colors.accent);
    root.style.setProperty('--neon-pink', colors.highlight);
    
    root.style.setProperty('--bg-darkest', colors.bgDarkest);
    root.style.setProperty('--bg-dark', colors.bgDark);
    root.style.setProperty('--bg-medium', colors.bgMedium);
    
    root.style.setProperty('--text-primary', colors.textPrimary);
    root.style.setProperty('--text-secondary', colors.textSecondary);
    
    root.style.setProperty('--soft-purple', colors.softPrimary);
    root.style.setProperty('--soft-orange', colors.softSecondary);
    root.style.setProperty('--soft-cyan', colors.softAccent);

    // Save to localStorage
    localStorage.setItem('selectedTheme', currentTheme.id);
  }, [currentTheme]);

  const changeTheme = (themeId) => {
    const newTheme = getThemeById(themeId);
    setCurrentTheme(newTheme);
  };

  return { currentTheme, changeTheme };
};

export default useTheme;

