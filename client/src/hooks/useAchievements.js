import { useState, useEffect } from 'react';
import { ACHIEVEMENTS, getAllAchievements } from '../constants/achievements';

/**
 * Custom hook for managing achievements
 * @param {Array} spirits - Array of encountered spirits
 * @param {Object} stats - Statistics object
 * @returns {Object} - Achievements data and functions
 */
export const useAchievements = (spirits, stats) => {
  const [unlockedAchievements, setUnlockedAchievements] = useState(() => {
    const saved = localStorage.getItem('unlockedAchievements');
    return saved ? JSON.parse(saved) : [];
  });

  const [newlyUnlocked, setNewlyUnlocked] = useState(null);

  // Check for newly unlocked achievements
  useEffect(() => {
    const checkAchievements = () => {
      const allAchievements = getAllAchievements();
      const newUnlocks = [];

      allAchievements.forEach(achievement => {
        // Skip if already unlocked
        if (unlockedAchievements.includes(achievement.id)) return;

        let isUnlocked = false;

        switch (achievement.requirement.type) {
          case 'total':
            isUnlocked = spirits.length >= achievement.requirement.value;
            break;
          
          case 'unique':
            isUnlocked = stats.uniqueSpirits >= achievement.requirement.value;
            break;
          
          case 'special':
            isUnlocked = checkSpecialRequirement(achievement.requirement.value);
            break;
          
          default:
            break;
        }

        if (isUnlocked) {
          newUnlocks.push(achievement.id);
        }
      });

      if (newUnlocks.length > 0) {
        const updated = [...unlockedAchievements, ...newUnlocks];
        setUnlockedAchievements(updated);
        localStorage.setItem('unlockedAchievements', JSON.stringify(updated));
        
        // Show notification for first new unlock
        if (newUnlocks[0]) {
          const achievement = allAchievements.find(a => a.id === newUnlocks[0]);
          setNewlyUnlocked(achievement);
          
          // Clear notification after 5 seconds
          setTimeout(() => setNewlyUnlocked(null), 5000);
        }
      }
    };

    checkAchievements();
  }, [spirits, stats, unlockedAchievements]);

  const checkSpecialRequirement = (value) => {
    const now = new Date();
    
    switch (value) {
      case 'midnight':
        // Check if last summon was at midnight (11 PM - 1 AM)
        const lastSummonTime = localStorage.getItem('lastSummonTime');
        if (lastSummonTime) {
          const summonDate = new Date(parseInt(lastSummonTime));
          const hour = summonDate.getHours();
          return hour === 0 || hour === 23;
        }
        return false;
      
      case 'halloween':
        // Check if it's October 31st
        return now.getMonth() === 9 && now.getDate() === 31;
      
      case 'themes':
        // Check if user has tried all themes
        const triedThemes = JSON.parse(localStorage.getItem('triedThemes') || '[]');
        return triedThemes.length >= 5;
      
      case 'early':
        // Check if last summon was before 6 AM
        const lastSummon = localStorage.getItem('lastSummonTime');
        if (lastSummon) {
          const summonDate = new Date(parseInt(lastSummon));
          return summonDate.getHours() < 6;
        }
        return false;
      
      case 'pumpkin':
        // Check pumpkin click count
        const clickCount = parseInt(localStorage.getItem('pumpkinClicks') || '0');
        return clickCount >= 10;
      
      default:
        return false;
    }
  };

  const dismissNotification = () => {
    setNewlyUnlocked(null);
  };

  return {
    unlockedAchievements,
    newlyUnlocked,
    dismissNotification,
  };
};

export default useAchievements;

