import { motion } from 'framer-motion';
import '../styles/components/FlyingBats.css';

const Bat = ({ delay = 0, startY = 20 }) => {
  const pathVariants = {
    animate: {
      x: ['-10vw', '110vw'],
      y: [startY, startY + Math.random() * 100 - 50, startY + Math.random() * 100 - 50, startY],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 8 + Math.random() * 6,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      className="flying-bat"
      variants={pathVariants}
      animate="animate"
      style={{ top: `${startY}%` }}
    >
      <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.g
          animate={{ 
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Left wing */}
          <path 
            d="M5 15C5 15 2 10 0 10C-2 10 0 15 2 17C4 19 5 15 5 15Z" 
            fill="url(#batGradient)"
            className="bat-wing"
          />
          {/* Right wing */}
          <path 
            d="M35 15C35 15 38 10 40 10C42 10 40 15 38 17C36 19 35 15 35 15Z" 
            fill="url(#batGradient)"
            className="bat-wing"
          />
          {/* Body */}
          <ellipse cx="20" cy="15" rx="8" ry="10" fill="url(#batGradient)" />
          {/* Head */}
          <circle cx="20" cy="12" r="5" fill="url(#batGradient)" />
          {/* Ears */}
          <path d="M17 8L18 5L19 8Z" fill="#ff6b35" />
          <path d="M23 8L22 5L21 8Z" fill="#ff6b35" />
          {/* Eyes */}
          <circle cx="18" cy="12" r="1.5" fill="#ff6b35" className="bat-eye" />
          <circle cx="22" cy="12" r="1.5" fill="#ff6b35" className="bat-eye" />
        </motion.g>
        <defs>
          <linearGradient id="batGradient" x1="0" y1="0" x2="0" y2="30">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

const FlyingBats = () => {
  const batCount = 5;
  
  return (
    <div className="bats-container">
      {[...Array(batCount)].map((_, i) => (
        <Bat 
          key={i} 
          delay={i * 3} 
          startY={10 + (i * 15)} 
        />
      ))}
    </div>
  );
};

export default FlyingBats;

