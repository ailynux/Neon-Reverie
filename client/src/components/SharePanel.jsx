import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTotalPoints } from '../constants/achievements';
import '../styles/components/SharePanel.css';

const SharePanel = ({ spirits, unlockedAchievements, stats }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const totalPoints = getTotalPoints(unlockedAchievements);

  const getShareText = () => {
    return `🎃 I've summoned ${stats.totalSpirits} spirits in Neon Reverie! 👻\n` +
           `✨ ${stats.uniqueSpirits} unique types discovered\n` +
           `🏆 ${unlockedAchievements.length} achievements unlocked (${totalPoints} points)\n` +
           `🔮 Check it out and summon your own spirits!`;
  };

  const getShareUrl = () => {
    return window.location.href;
  };

  const shareToX = () => {
    const text = encodeURIComponent(getShareText());
    const url = encodeURIComponent(getShareUrl());
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const shareToFacebook = () => {
    const url = encodeURIComponent(getShareUrl());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareToReddit = () => {
    const title = encodeURIComponent(`I've summoned ${stats.totalSpirits} spirits in Neon Reverie!`);
    const url = encodeURIComponent(getShareUrl());
    window.open(`https://reddit.com/submit?title=${title}&url=${url}`, '_blank');
  };

  const shareToDiscord = () => {
    // Discord doesn't have a direct share link, so we copy formatted text
    const discordText = `🎃 **Neon Reverie - Spirit Collection**\n` +
                       `👻 Spirits Summoned: **${stats.totalSpirits}**\n` +
                       `✨ Unique Types: **${stats.uniqueSpirits}**\n` +
                       `🏆 Achievements: **${unlockedAchievements.length}** (${totalPoints} points)\n` +
                       `🔮 ${getShareUrl()}`;
    
    navigator.clipboard.writeText(discordText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareToWhatsApp = () => {
    const text = encodeURIComponent(getShareText() + '\n' + getShareUrl());
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const shareToTelegram = () => {
    const text = encodeURIComponent(getShareText());
    const url = encodeURIComponent(getShareUrl());
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  };

  const copyToClipboard = () => {
    const fullText = getShareText() + '\n\n' + getShareUrl();
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareOptions = [
    { 
      id: 'x', 
      name: 'X (Twitter)', 
      icon: '𝕏', 
      color: '#000000',
      action: shareToX 
    },
    { 
      id: 'facebook', 
      name: 'Facebook', 
      icon: '📘', 
      color: '#1877f2',
      action: shareToFacebook 
    },
    { 
      id: 'reddit', 
      name: 'Reddit', 
      icon: '🤖', 
      color: '#ff4500',
      action: shareToReddit 
    },
    { 
      id: 'discord', 
      name: 'Discord', 
      icon: '💬', 
      color: '#5865f2',
      action: shareToDiscord 
    },
    { 
      id: 'whatsapp', 
      name: 'WhatsApp', 
      icon: '💚', 
      color: '#25d366',
      action: shareToWhatsApp 
    },
    { 
      id: 'telegram', 
      name: 'Telegram', 
      icon: '✈️', 
      color: '#0088cc',
      action: shareToTelegram 
    },
    { 
      id: 'copy', 
      name: 'Copy Link', 
      icon: '📋', 
      color: '#8b5cf6',
      action: copyToClipboard 
    },
  ];

  return (
    <motion.div 
      className="share-container"
      drag
      dragMomentum={false}
      dragElastic={0.1}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.8, type: "spring" }}
    >
      {/* Share FAB */}
      <motion.button
        className="share-fab"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span 
          className="share-icon"
          animate={copied ? {
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          } : {}}
          transition={{ duration: 0.3 }}
        >
          {copied ? '✓' : '📤'}
        </motion.span>
      </motion.button>

      {/* Share Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="share-panel"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="share-header">
              <span className="share-title glow-cyan">SHARE YOUR STATS</span>
              <button 
                className="share-close"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
            
            {/* Preview Stats */}
            <div className="share-preview">
              <div className="preview-stat">
                <span className="preview-icon">👻</span>
                <span className="preview-value">{stats.totalSpirits}</span>
                <span className="preview-label">Spirits</span>
              </div>
              <div className="preview-stat">
                <span className="preview-icon">✨</span>
                <span className="preview-value">{stats.uniqueSpirits}</span>
                <span className="preview-label">Types</span>
              </div>
              <div className="preview-stat">
                <span className="preview-icon">🏆</span>
                <span className="preview-value">{unlockedAchievements.length}</span>
                <span className="preview-label">Badges</span>
              </div>
            </div>

            {/* Share Options Grid */}
            <div className="share-options">
              {shareOptions.map((option, index) => (
                <motion.button
                  key={option.id}
                  className="share-option"
                  onClick={option.action}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    borderColor: `${option.color}40`
                  }}
                >
                  <span className="option-icon">{option.icon}</span>
                  <span className="option-name">{option.name}</span>
                  {option.id === 'copy' && copied && (
                    <motion.span 
                      className="copied-badge"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      ✓
                    </motion.span>
                  )}
                  {option.id === 'discord' && copied && (
                    <motion.span 
                      className="copied-badge"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      ✓
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Info Text */}
            <div className="share-info">
              {copied ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="success-message"
                >
                  ✓ Copied to clipboard!
                </motion.p>
              ) : (
                <p>Share your spooky collection with friends! 👻</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SharePanel;

