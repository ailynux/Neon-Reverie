import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllThemes } from '../constants/themes';
import '../styles/components/ThemeSwitcher.css';

const ThemeSwitcher = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const themes = getAllThemes();

  const handleThemeSelect = (themeId) => {
    onThemeChange(themeId);
    setIsOpen(false);
    
    // Track tried themes for achievements
    const triedThemes = JSON.parse(localStorage.getItem('triedThemes') || '[]');
    if (!triedThemes.includes(themeId)) {
      triedThemes.push(themeId);
      localStorage.setItem('triedThemes', JSON.stringify(triedThemes));
    }
  };

  return (
    <motion.div 
      className="theme-switcher-container"
      drag
      dragMomentum={false}
      dragElastic={0.1}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
    >
      {/* Theme Button */}
      <motion.button
        className="theme-fab"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          background: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.secondary})`
        }}
      >
        <span className="theme-icon">🎨</span>
      </motion.button>

      {/* Theme Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="theme-panel"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="theme-header">
              <span className="theme-title">THEMES</span>
              <button 
                className="theme-close"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
            
            <div className="theme-list">
              {themes.map((theme, index) => (
                <motion.button
                  key={theme.id}
                  className={`theme-option ${currentTheme.id === theme.id ? 'active' : ''}`}
                  onClick={() => handleThemeSelect(theme.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="theme-preview">
                    <div 
                      className="preview-dot" 
                      style={{ background: theme.colors.primary }}
                    />
                    <div 
                      className="preview-dot" 
                      style={{ background: theme.colors.secondary }}
                    />
                    <div 
                      className="preview-dot" 
                      style={{ background: theme.colors.accent }}
                    />
                  </div>
                  <div className="theme-info">
                    <span className="theme-name">{theme.name}</span>
                    <span className="theme-desc">{theme.description}</span>
                  </div>
                  {currentTheme.id === theme.id && (
                    <motion.span 
                      className="theme-check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      ✓
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ThemeSwitcher;

