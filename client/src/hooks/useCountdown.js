import { useState, useEffect } from 'react';
import { HALLOWEEN_CONFIG, THEME_CONFIG } from '../constants/config';

/**
 * Custom hook for Halloween countdown logic
 * @returns {Object} - timeLeft object and current theme
 */
export const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [theme, setTheme] = useState('fall');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const halloween = new Date(
        new Date().getFullYear(),
        HALLOWEEN_CONFIG.MONTH,
        HALLOWEEN_CONFIG.DAY,
        HALLOWEEN_CONFIG.HOUR,
        HALLOWEEN_CONFIG.MINUTE,
        HALLOWEEN_CONFIG.SECOND
      );
      
      const now = new Date();
      
      // If Halloween has passed this year, target next year
      if (now > halloween) {
        halloween.setFullYear(halloween.getFullYear() + 1);
      }

      const difference = halloween - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });

        // Dynamic theme based on days remaining
        if (days > THEME_CONFIG.FALL.daysRemaining) {
          setTheme(THEME_CONFIG.FALL.name);
        } else if (days > THEME_CONFIG.TWILIGHT.daysRemaining) {
          setTheme(THEME_CONFIG.TWILIGHT.name);
        } else if (days > THEME_CONFIG.DUSK.daysRemaining) {
          setTheme(THEME_CONFIG.DUSK.name);
        } else {
          setTheme(THEME_CONFIG.MIDNIGHT.name);
        }
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return { timeLeft, theme };
};

export default useCountdown;

