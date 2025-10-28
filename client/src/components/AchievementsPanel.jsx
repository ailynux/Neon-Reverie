import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllAchievements, getTotalPoints, RARITY_COLORS } from '../constants/achievements';
import '../styles/components/AchievementsPanel.css';

const AchievementsPanel = ({ unlockedAchievements, spirits }) => {
  const [isOpen, setIsOpen] = useState(false);
  const allAchievements = getAllAchievements();
  const totalPoints = getTotalPoints(unlockedAchievements);
  const unlockedCount = unlockedAchievements.length;
  const totalCount = allAchievements.length;
  const completionPercentage = Math.round((unlockedCount / totalCount) * 100);

  return (
    <motion.div 
      className="achievements-container"
      drag
      dragMomentum={false}
      dragElastic={0.1}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, type: "spring" }}
    >
      {/* Achievements FAB */}
      <motion.button
        className="achievements-fab"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="achievements-icon">🏆</span>
        {unlockedCount > 0 && (
          <motion.span 
            className="achievements-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            {unlockedCount}
          </motion.span>
        )}
      </motion.button>

      {/* Achievements Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="achievements-panel"
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="achievements-header">
              <div className="header-content">
                <span className="achievements-title glow-orange">ACHIEVEMENTS</span>
                <span className="achievements-progress">{unlockedCount}/{totalCount}</span>
              </div>
              <button 
                className="achievements-close"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
            
            {/* Summary Stats */}
            <div className="achievements-summary">
              <div className="summary-stat">
                <span className="summary-label">Completion</span>
                <span className="summary-value glow-purple">{completionPercentage}%</span>
              </div>
              <div className="summary-stat">
                <span className="summary-label">Total Points</span>
                <span className="summary-value glow-cyan">{totalPoints}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="achievements-progress-bar">
              <motion.div 
                className="progress-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: `${completionPercentage}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            
            {/* Achievements List */}
            <div className="achievements-list">
              {allAchievements.map((achievement, index) => {
                const isUnlocked = unlockedAchievements.includes(achievement.id);
                
                return (
                  <motion.div
                    key={achievement.id}
                    className={`achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="achievement-card-icon">
                      {isUnlocked ? achievement.icon : '🔒'}
                    </div>
                    
                    <div className="achievement-card-info">
                      <div className="achievement-card-header">
                        <span 
                          className="achievement-card-name"
                          style={{ 
                            color: isUnlocked ? RARITY_COLORS[achievement.rarity] : '#606070',
                            textShadow: isUnlocked ? `0 0 10px ${RARITY_COLORS[achievement.rarity]}` : 'none'
                          }}
                        >
                          {achievement.name}
                        </span>
                        {isUnlocked && (
                          <span 
                            className="achievement-card-rarity"
                            style={{ background: RARITY_COLORS[achievement.rarity] }}
                          >
                            {achievement.rarity}
                          </span>
                        )}
                      </div>
                      
                      <div className="achievement-card-description">
                        {achievement.description}
                      </div>
                      
                      {isUnlocked && (
                        <div className="achievement-card-points">
                          +{achievement.points} points
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AchievementsPanel;

