import { useState, useEffect } from 'react';

/**
 * Custom hook for calculating spirit statistics
 * @param {Array} spirits - Array of encountered spirits
 * @returns {Object} - Statistics data
 */
export const useStatistics = (spirits) => {
  const [stats, setStats] = useState({
    totalSpirits: 0,
    uniqueSpirits: 0,
    mostCommon: null,
    mostCommonCount: 0,
    recentSpirits: [],
    collectionRate: 0,
    sessionStats: {
      todayCount: 0,
      weekCount: 0,
    }
  });

  useEffect(() => {
    if (!spirits || spirits.length === 0) {
      setStats({
        totalSpirits: 0,
        uniqueSpirits: 0,
        mostCommon: null,
        mostCommonCount: 0,
        recentSpirits: [],
        collectionRate: 0,
        sessionStats: { todayCount: 0, weekCount: 0 }
      });
      return;
    }

    // Count occurrences of each spirit
    const spiritCounts = {};
    spirits.forEach(spirit => {
      spiritCounts[spirit] = (spiritCounts[spirit] || 0) + 1;
    });

    // Find most common spirit
    let mostCommon = null;
    let mostCommonCount = 0;
    Object.entries(spiritCounts).forEach(([spirit, count]) => {
      if (count > mostCommonCount) {
        mostCommon = spirit;
        mostCommonCount = count;
      }
    });

    // Get unique spirits
    const uniqueSpirits = Object.keys(spiritCounts).length;

    // Get recent spirits (last 5)
    const recentSpirits = spirits.slice(-5).reverse();

    // Calculate collection rate (spirits per day since first spirit)
    const firstSpiritDate = localStorage.getItem('firstSpiritDate');
    let collectionRate = 0;
    if (firstSpiritDate) {
      const daysSinceFirst = Math.max(1, Math.floor((Date.now() - parseInt(firstSpiritDate)) / (1000 * 60 * 60 * 24)));
      collectionRate = (spirits.length / daysSinceFirst).toFixed(2);
    } else {
      localStorage.setItem('firstSpiritDate', Date.now().toString());
      collectionRate = spirits.length;
    }

    setStats({
      totalSpirits: spirits.length,
      uniqueSpirits,
      mostCommon,
      mostCommonCount,
      recentSpirits,
      collectionRate: parseFloat(collectionRate),
      sessionStats: {
        todayCount: spirits.length, // Simplified for now
        weekCount: spirits.length
      }
    });
  }, [spirits]);

  return stats;
};

export default useStatistics;

