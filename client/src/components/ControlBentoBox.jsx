import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EffectsToggle from './EffectsToggle';
import ThemeSwitcher from './ThemeSwitcher';
import SpiritStatistics from './SpiritStatistics';
import AchievementsPanel from './AchievementsPanel';
import SharePanel from './SharePanel';
import '../styles/components/ControlBentoBox.css';

const ControlBentoBox = ({ 
  effects, 
  setEffects, 
  currentTheme, 
  changeTheme,
  spirits,
  unlockedAchievements,
  stats
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activePanel, setActivePanel] = useState(null);

  const controls = [
    { 
      id: 'effects', 
      icon: '⚙️', 
      label: 'Effects',
      color: 'var(--neon-purple)',
      component: EffectsToggle,
      props: { effects, setEffects }
    },
    { 
      id: 'themes', 
      icon: '🎨', 
      label: 'Themes',
      color: 'var(--neon-orange)',
      component: ThemeSwitcher,
      props: { currentTheme, onThemeChange: changeTheme }
    },
    { 
      id: 'stats', 
      icon: '📊', 
      label: 'Stats',
      color: 'var(--neon-cyan)',
      component: SpiritStatistics,
      props: { spirits }
    },
    { 
      id: 'achievements', 
      icon: '🏆', 
      label: 'Badges',
      color: 'var(--neon-orange)',
      component: AchievementsPanel,
      props: { unlockedAchievements, spirits }
    },
    { 
      id: 'share', 
      icon: '📤', 
      label: 'Share',
      color: 'var(--neon-cyan)',
      component: SharePanel,
      props: { spirits, unlockedAchievements, stats }
    },
  ];

  return (
    <motion.div 
      className="bento-box-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      {/* Collapse/Expand Button */}
      <motion.button
        className="bento-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={isExpanded ? "Collapse Controls" : "Expand Controls"}
      >
        <motion.span
          animate={{ rotate: isExpanded ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? '◀' : '▶'}
        </motion.span>
      </motion.button>

      {/* Bento Grid */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="bento-grid"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {controls.map((control, index) => {
              const Component = control.component;
              const badge = control.id === 'achievements' 
                ? unlockedAchievements.length 
                : control.id === 'stats' 
                  ? spirits.length 
                  : null;

              return (
                <motion.div
                  key={control.id}
                  className="bento-item"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 + (index * 0.05) }}
                >
                  {/* Pass through the individual control component directly */}
                  <Component {...control.props} />
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ControlBentoBox;

