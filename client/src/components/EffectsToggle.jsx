import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/components/EffectsToggle.css';

const EffectsToggle = ({ effects, setEffects }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const toggles = [
    { key: 'cursorTrail', label: 'Cursor Trail', icon: '✨' },
    { key: 'matrixRain', label: 'Matrix Rain', icon: '🌧️' },
    { key: 'bats', label: 'Flying Bats', icon: '🦇' },
    { key: 'sound', label: 'Sound FX', icon: '🔊' }
  ];

  const handleToggle = (key) => {
    setEffects(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const activeCount = Object.values(effects).filter(Boolean).length;

  return (
    <motion.div 
      className="effects-toggle-container"
      drag
      dragMomentum={false}
      dragElastic={0.1}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      {/* Minimized Button */}
      <motion.button
        className="toggle-fab"
        onClick={() => !isDragging && setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="fab-icon">⚙️</span>
        {activeCount > 0 && (
          <motion.span 
            className="fab-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            {activeCount}
          </motion.span>
        )}
      </motion.button>

      {/* Expanded Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="toggle-panel"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="panel-header">
              <span className="panel-title glow-purple">EFFECTS</span>
              <button 
                className="panel-close"
                onClick={() => setIsExpanded(false)}
              >
                ✕
              </button>
            </div>
            
            <div className="toggle-list">
              {toggles.map((toggle, index) => (
                <motion.button
                  key={toggle.key}
                  className={`toggle-button ${effects[toggle.key] ? 'active' : ''}`}
                  onClick={() => handleToggle(toggle.key)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="toggle-icon">{toggle.icon}</span>
                  <span className="toggle-label">{toggle.label}</span>
                  <div className={`toggle-switch ${effects[toggle.key] ? 'on' : 'off'}`}>
                    <div className="toggle-slider" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EffectsToggle;

