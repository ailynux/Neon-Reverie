import { motion } from 'framer-motion';
import './FloatingGhost.css';

const FloatingGhost = ({ delay = 0 }) => {
  return (
    <motion.div
      className="floating-ghost"
      initial={{ opacity: 0, y: 100 }}
      animate={{ 
        opacity: [0, 0.6, 0.4, 0.7, 0.3],
        y: [-100, -200, -150, -250, -300],
        x: [0, 50, -30, 40, -20]
      }}
      transition={{
        duration: 15,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M30 10C20 10 10 20 10 35C10 50 10 60 10 70C10 75 12 75 15 72C18 69 20 69 23 72C26 75 28 75 30 72C32 69 34 69 37 72C40 75 42 75 45 72C48 69 50 75 50 70C50 60 50 50 50 35C50 20 40 10 30 10Z" 
          fill="url(#ghostGradient)"
          className="ghost-body"
        />
        <circle cx="22" cy="30" r="3" fill="#000" className="ghost-eye" />
        <circle cx="38" cy="30" r="3" fill="#000" className="ghost-eye" />
        <path 
          d="M25 40C25 40 27 42 30 42C33 42 35 40 35 40" 
          stroke="#000" 
          strokeWidth="2" 
          strokeLinecap="round"
          className="ghost-mouth"
        />
        <defs>
          <linearGradient id="ghostGradient" x1="30" y1="10" x2="30" y2="75">
            <stop offset="0%" stopColor="#b026ff" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#ff10f0" stopOpacity="0.6"/>
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

const GhostContainer = () => {
  return (
    <div className="ghost-container">
      <FloatingGhost delay={0} />
      <FloatingGhost delay={5} />
      <FloatingGhost delay={10} />
    </div>
  );
};

export default GhostContainer;

