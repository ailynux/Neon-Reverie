import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStatistics } from '../hooks/useStatistics';
import '../styles/components/SpiritStatistics.css';

const SpiritStatistics = ({ spirits }) => {
  const [isOpen, setIsOpen] = useState(false);
  const stats = useStatistics(spirits);

  const getProgressPercentage = () => {
    // Assuming there are ~20 different possible spirits
    const totalPossibleSpirits = 20;
    return Math.min((stats.uniqueSpirits / totalPossibleSpirits) * 100, 100);
  };

  return (
    <motion.div 
      className="stats-container"
      drag
      dragMomentum={false}
      dragElastic={0.1}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, type: "spring" }}
    >
      {/* Stats FAB */}
      <motion.button
        className="stats-fab"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="stats-icon">📊</span>
        {stats.totalSpirits > 0 && (
          <motion.span 
            className="stats-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            {stats.totalSpirits}
          </motion.span>
        )}
      </motion.button>

      {/* Stats Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="stats-panel"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="stats-header">
              <span className="stats-title glow-cyan">STATISTICS</span>
              <button 
                className="stats-close"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
            
            {stats.totalSpirits === 0 ? (
              <div className="stats-empty">
                <span className="empty-icon">👻</span>
                <p>No spirits collected yet!</p>
                <p className="empty-hint">Start summoning to see your stats</p>
              </div>
            ) : (
              <div className="stats-content">
                {/* Main Stats Grid */}
                <div className="stats-grid">
                  <motion.div 
                    className="stat-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="stat-icon">🎃</div>
                    <div className="stat-value glow-orange">{stats.totalSpirits}</div>
                    <div className="stat-label">Total Spirits</div>
                  </motion.div>

                  <motion.div 
                    className="stat-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="stat-icon">✨</div>
                    <div className="stat-value glow-purple">{stats.uniqueSpirits}</div>
                    <div className="stat-label">Unique Types</div>
                  </motion.div>

                  <motion.div 
                    className="stat-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="stat-icon">📈</div>
                    <div className="stat-value glow-cyan">{stats.collectionRate}</div>
                    <div className="stat-label">Per Day</div>
                  </motion.div>
                </div>

                {/* Collection Progress */}
                <motion.div 
                  className="progress-section"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="progress-header">
                    <span>Collection Progress</span>
                    <span className="glow-purple">{Math.round(getProgressPercentage())}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${getProgressPercentage()}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <div className="progress-label">
                    {stats.uniqueSpirits} / ~20 spirit types discovered
                  </div>
                </motion.div>

                {/* Most Common Spirit */}
                {stats.mostCommon && (
                  <motion.div 
                    className="most-common-section"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="section-title">
                      <span>👑 Most Summoned</span>
                      <span className="glow-orange">×{stats.mostCommonCount}</span>
                    </div>
                    <div className="most-common-card">
                      <div className="most-common-text">{stats.mostCommon}</div>
                    </div>
                  </motion.div>
                )}

                {/* Recent Spirits */}
                {stats.recentSpirits.length > 0 && (
                  <motion.div 
                    className="recent-section"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="section-title">⏱️ Recently Summoned</div>
                    <div className="recent-list">
                      {stats.recentSpirits.map((spirit, index) => (
                        <motion.div
                          key={index}
                          className="recent-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + (index * 0.05) }}
                        >
                          <span className="recent-bullet">•</span>
                          <span className="recent-text">{spirit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Fun Facts */}
                <motion.div 
                  className="fun-facts"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="fact-item">
                    🌟 You've summoned {stats.totalSpirits} spirits!
                  </div>
                  {stats.totalSpirits >= 10 && (
                    <div className="fact-item">
                      🎯 Double digits! You're a spirit master!
                    </div>
                  )}
                  {stats.totalSpirits >= 25 && (
                    <div className="fact-item">
                      🔥 25+ spirits! That's legendary!
                    </div>
                  )}
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SpiritStatistics;

