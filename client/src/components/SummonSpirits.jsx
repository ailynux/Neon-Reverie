import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/components/SummonSpirits.css';

const API_URL = 'http://localhost:5199/api/omens';

// Sound effects using Web Audio API
const playSound = (frequency, duration, enabled) => {
  if (!enabled) return;
  
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  } catch (e) {
    console.warn('Audio not supported:', e);
  }
};

const SummonSpirits = ({ soundEnabled = true, onSummon }) => {
  const [currentOmen, setCurrentOmen] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [encounteredSpirits, setEncounteredSpirits] = useState([]);
  const [showCollection, setShowCollection] = useState(false);
  const [error, setError] = useState('');

  // Load encountered spirits from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('encounteredSpirits');
    if (saved) {
      try {
        setEncounteredSpirits(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load spirits:', e);
      }
    }
  }, []);

  // Save to localStorage whenever spirits change
  useEffect(() => {
    if (encounteredSpirits.length > 0) {
      localStorage.setItem('encounteredSpirits', JSON.stringify(encounteredSpirits));
    }
  }, [encounteredSpirits]);

  const summonSpirit = async () => {
    setIsLoading(true);
    setError('');
    setCurrentOmen('');

    // Play summoning sound
    playSound(200, 0.3, soundEnabled);
    setTimeout(() => playSound(400, 0.2, soundEnabled), 200);
    
    // Trigger shake effect
    if (onSummon) onSummon();

    try {
      const response = await fetch(`${API_URL}/random`);
      
      if (!response.ok) {
        throw new Error('Failed to summon spirit');
      }

      const data = await response.json();
      const newOmen = data.omen;
      
      setCurrentOmen(newOmen);

      // Play success sound
      playSound(600, 0.3, soundEnabled);
      setTimeout(() => playSound(800, 0.2, soundEnabled), 150);

      // Add to collection if not already there
      if (!encounteredSpirits.includes(newOmen)) {
        setEncounteredSpirits(prev => [...prev, newOmen]);
      }
    } catch (err) {
      console.error('Error summoning spirit:', err);
      setError('⚠️ The spirits are not responding. Make sure the API is running on http://localhost:5199');
      
      // Play error sound
      playSound(100, 0.5, soundEnabled);
    } finally {
      setIsLoading(false);
    }
  };

  const clearCollection = () => {
    if (window.confirm('Are you sure you want to release all encountered spirits?')) {
      setEncounteredSpirits([]);
      localStorage.removeItem('encounteredSpirits');
      setCurrentOmen('');
    }
  };

  return (
    <div className="summon-container">
      <motion.div
        className="summon-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          className="summon-button box-glow-orange"
          onClick={summonSpirit}
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? (
            <span className="loading">
              <span className="glow-orange">👻 SUMMONING...</span>
            </span>
          ) : (
            <span className="glow-orange">🔮 SUMMON SPIRITS 🔮</span>
          )}
        </motion.button>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              className="error-message"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {error}
            </motion.div>
          )}

          {currentOmen && !error && (
            <motion.div
              className="omen-display box-glow-purple"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ type: "spring", stiffness: 200 }}
              key={currentOmen}
            >
              <motion.p 
                className="omen-text glow-purple"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {currentOmen}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="collection-section">
          <motion.button
            className="collection-toggle"
            onClick={() => setShowCollection(!showCollection)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="glow-cyan">
              👁️ SPIRITS ENCOUNTERED ({encounteredSpirits.length})
            </span>
          </motion.button>

          <AnimatePresence>
            {showCollection && (
              <motion.div
                className="collection-list"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {encounteredSpirits.length === 0 ? (
                  <p className="empty-message">No spirits encountered yet... 👻</p>
                ) : (
                  <>
                    <div className="spirits-grid">
                      {encounteredSpirits.map((spirit, index) => (
                        <motion.div
                          key={index}
                          className="spirit-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <span className="spirit-number">#{index + 1}</span>
                          <span className="spirit-text">{spirit}</span>
                        </motion.div>
                      ))}
                    </div>
                    <motion.button
                      className="clear-button"
                      onClick={clearCollection}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🗑️ Release All Spirits
                    </motion.button>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default SummonSpirits;

