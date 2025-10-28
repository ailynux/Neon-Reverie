import { motion } from 'framer-motion';
import './SpiderWeb.css';

const SpiderWeb = ({ position = 'top-left' }) => {
  return (
    <div className={`spider-web ${position}`}>
      <svg viewBox="0 0 200 200" className="web-svg">
        <defs>
          <radialGradient id="webGradient">
            <stop offset="0%" stopColor="rgba(176, 38, 255, 0.6)" />
            <stop offset="100%" stopColor="rgba(176, 38, 255, 0.1)" />
          </radialGradient>
        </defs>
        
        {/* Web strands */}
        <g className="web-strands" stroke="url(#webGradient)" strokeWidth="1" fill="none">
          {/* Radial strands */}
          <line x1="100" y1="100" x2="100" y2="0" />
          <line x1="100" y1="100" x2="170" y2="30" />
          <line x1="100" y1="100" x2="200" y2="100" />
          <line x1="100" y1="100" x2="170" y2="170" />
          <line x1="100" y1="100" x2="100" y2="200" />
          <line x1="100" y1="100" x2="30" y2="170" />
          <line x1="100" y1="100" x2="0" y2="100" />
          <line x1="100" y1="100" x2="30" y2="30" />
          
          {/* Circular strands */}
          <circle cx="100" cy="100" r="30" />
          <circle cx="100" cy="100" r="60" />
          <circle cx="100" cy="100" r="90" />
        </g>
      </svg>
      
      {/* Animated spider */}
      <motion.div
        className="spider"
        animate={{
          y: [0, 30, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30">
          {/* Spider body */}
          <ellipse cx="15" cy="15" rx="8" ry="10" fill="#1a1a1a" />
          <circle cx="15" cy="10" r="6" fill="#0a0a0a" />
          
          {/* Eyes */}
          <circle cx="12" cy="9" r="2" fill="#ff6b35" className="spider-eye" />
          <circle cx="18" cy="9" r="2" fill="#ff6b35" className="spider-eye" />
          
          {/* Legs */}
          <g stroke="#1a1a1a" strokeWidth="2" fill="none">
            <path d="M8 12 Q2 10, 0 8" />
            <path d="M8 15 Q2 15, 0 15" />
            <path d="M8 18 Q2 20, 0 22" />
            
            <path d="M22 12 Q28 10, 30 8" />
            <path d="M22 15 Q28 15, 30 15" />
            <path d="M22 18 Q28 20, 30 22" />
          </g>
        </svg>
        
        {/* Web strand spider hangs from */}
        <div className="spider-strand" />
      </motion.div>
    </div>
  );
};

const SpiderWebDecorations = () => {
  return (
    <>
      <SpiderWeb position="top-left" />
      <SpiderWeb position="top-right" />
    </>
  );
};

export default SpiderWebDecorations;

