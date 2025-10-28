import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/components/BouncingPumpkins.css';

const Pumpkin = ({ delay, onClick }) => {
  const [isGlowing, setIsGlowing] = useState(false);

  const handleClick = () => {
    setIsGlowing(true);
    onClick();
    setTimeout(() => setIsGlowing(false), 1000);
  };

  return (
    <motion.div
      className={`bouncing-pumpkin ${isGlowing ? 'glowing' : ''}`}
      onClick={handleClick}
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: [0, -20, 0],
        opacity: 1,
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        },
        rotate: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        },
        opacity: {
          duration: 0.5
        }
      }}
      whileHover={{ scale: 1.2, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" className="pumpkin-svg">
        <defs>
          <radialGradient id="pumpkinGradient">
            <stop offset="0%" stopColor="#ff8c00" />
            <stop offset="100%" stopColor="#ff6b35" />
          </radialGradient>
          <radialGradient id="glowGradient">
            <stop offset="0%" stopColor="#ffff00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff6b35" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Glow effect when clicked */}
        {isGlowing && (
          <circle cx="30" cy="30" r="35" fill="url(#glowGradient)" className="pumpkin-glow" />
        )}
        
        {/* Pumpkin body */}
        <g className="pumpkin-body">
          <ellipse cx="30" cy="32" rx="22" ry="20" fill="url(#pumpkinGradient)" />
          
          {/* Ridges */}
          <path d="M30 12 Q30 32, 30 52" stroke="#d35400" strokeWidth="2" fill="none" />
          <path d="M20 14 Q18 32, 16 50" stroke="#d35400" strokeWidth="1.5" fill="none" />
          <path d="M40 14 Q42 32, 44 50" stroke="#d35400" strokeWidth="1.5" fill="none" />
        </g>
        
        {/* Stem */}
        <rect x="27" y="8" width="6" height="8" rx="2" fill="#4a7c59" />
        <path d="M33 8 Q36 6, 38 8" stroke="#4a7c59" strokeWidth="2" fill="none" />
        
        {/* Jack-o-lantern face */}
        <g className="pumpkin-face">
          {/* Eyes */}
          <path d="M18 25 L22 22 L26 25 L22 28 Z" fill="#000" />
          <path d="M34 25 L38 22 L42 25 L38 28 Z" fill="#000" />
          
          {/* Nose */}
          <path d="M28 32 L30 28 L32 32 Z" fill="#000" />
          
          {/* Mouth */}
          <path 
            d="M15 36 Q18 38, 21 36 Q24 34, 27 36 Q30 38, 33 36 Q36 34, 39 36 Q42 38, 45 36" 
            stroke="#000" 
            strokeWidth="2.5" 
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </motion.div>
  );
};

const BouncingPumpkins = () => {
  const [clickCount, setClickCount] = useState(0);

  const handlePumpkinClick = () => {
    setClickCount(prev => prev + 1);
    
    // Track pumpkin clicks for achievements
    const currentClicks = parseInt(localStorage.getItem('pumpkinClicks') || '0');
    localStorage.setItem('pumpkinClicks', (currentClicks + 1).toString());
    
    // Play a fun sound
    if (window.AudioContext || window.webkitAudioContext) {
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 400 + (clickCount * 50);
        oscillator.type = 'square';
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
      } catch (e) {
        console.warn('Audio not supported:', e);
      }
    }
  };

  return (
    <div className="pumpkins-container">
      <Pumpkin delay={0} onClick={handlePumpkinClick} />
      <Pumpkin delay={0.5} onClick={handlePumpkinClick} />
      <Pumpkin delay={1} onClick={handlePumpkinClick} />
    </div>
  );
};

export default BouncingPumpkins;

