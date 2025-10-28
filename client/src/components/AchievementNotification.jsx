import { motion, AnimatePresence } from 'framer-motion';
import { RARITY_COLORS } from '../constants/achievements';
import '../styles/components/AchievementNotification.css';

const AchievementNotification = ({ achievement, onDismiss }) => {
  if (!achievement) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="achievement-notification"
        initial={{ y: -100, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -100, opacity: 0, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <motion.div 
          className="achievement-glow"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            background: `radial-gradient(circle, ${RARITY_COLORS[achievement.rarity]}40, transparent)` 
          }}
        />
        
        <div className="achievement-content">
          <div className="achievement-header">
            <span className="achievement-badge">🏆 ACHIEVEMENT UNLOCKED!</span>
            <button 
              className="achievement-dismiss"
              onClick={onDismiss}
            >
              ✕
            </button>
          </div>
          
          <div className="achievement-body">
            <motion.div 
              className="achievement-icon"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: 3,
              }}
            >
              {achievement.icon}
            </motion.div>
            
            <div className="achievement-info">
              <div 
                className="achievement-name"
                style={{ color: RARITY_COLORS[achievement.rarity] }}
              >
                {achievement.name}
              </div>
              <div className="achievement-description">
                {achievement.description}
              </div>
              <div className="achievement-footer">
                <span 
                  className="achievement-rarity"
                  style={{ 
                    background: RARITY_COLORS[achievement.rarity],
                    boxShadow: `0 0 10px ${RARITY_COLORS[achievement.rarity]}`
                  }}
                >
                  {achievement.rarity.toUpperCase()}
                </span>
                <span className="achievement-points">
                  +{achievement.points} pts
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AchievementNotification;

