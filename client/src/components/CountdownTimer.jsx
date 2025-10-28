import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/components/CountdownTimer.css';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [theme, setTheme] = useState('fall');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const halloween = new Date(new Date().getFullYear(), 9, 31, 23, 59, 59);
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
        if (days > 20) {
          setTheme('fall');
        } else if (days > 10) {
          setTheme('twilight');
        } else if (days > 3) {
          setTheme('dusk');
        } else {
          setTheme('midnight');
        }
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className={`countdown-container theme-${theme}`}>
      <motion.div
        className="countdown-wrapper"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="countdown-title glow-orange flicker"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          🎃 HALLOWEEN COUNTDOWN 🎃
        </motion.h1>

        <div className="time-display">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="time-unit box-glow-purple"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
            >
              <motion.div 
                className="time-value glow-purple"
                key={unit.value}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {String(unit.value).padStart(2, '0')}
              </motion.div>
              <div className="time-label">{unit.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="theme-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="glow-cyan">
            {theme === 'fall' && '🍂 Autumn Approaches'}
            {theme === 'twilight' && '🌅 Twilight Descends'}
            {theme === 'dusk' && '🌆 Dusk Settles'}
            {theme === 'midnight' && '🌙 Midnight Nears'}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CountdownTimer;

