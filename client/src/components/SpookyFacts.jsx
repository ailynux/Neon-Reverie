import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SpookyFacts.css';

const facts = [
  "💀 The first computer bug was an actual moth found in 1947",
  "🎃 JavaScript was created in just 10 days",
  "👻 The term 'bug' dates back to Thomas Edison in 1878",
  "🦇 The average person eats 8 spiders in their sleep per year... (just kidding!)",
  "💜 Halloween originated from the Celtic festival Samhain",
  "🔮 The fear of Halloween is called Samhainophobia",
  "🕷️ The first Halloween celebration in the US was in the 1840s",
  "🌙 Full moons on Halloween are rare - last one was in 2020",
  "👁️ Ireland is believed to be the birthplace of Halloween",
  "🎭 Black cats were once believed to be witches in disguise",
  "⚡ The longest line of code ever written is 432 million lines",
  "🕸️ There are more possible games of chess than atoms in the universe",
  "💻 The first computer programmer was a woman - Ada Lovelace",
  "🎃 Americans spend $10 billion on Halloween annually",
  "👻 The world's heaviest pumpkin weighed 2,624 pounds"
];

const SpookyFacts = () => {
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact(prev => (prev + 1) % facts.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="spooky-facts-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentFact}
          className="fact-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="fact-icon">📚</span>
          <p className="fact-text glow-cyan">{facts[currentFact]}</p>
        </motion.div>
      </AnimatePresence>
      
      <div className="fact-indicators">
        {facts.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentFact ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SpookyFacts;

