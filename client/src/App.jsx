import { useState, useEffect } from 'react';
import CountdownTimer from './components/CountdownTimer';
import SummonSpirits from './components/SummonSpirits';
import GhostContainer from './components/FloatingGhost';
import FlyingBats from './components/FlyingBats';
import CursorTrail from './components/CursorTrail';
import MatrixRain from './components/MatrixRain';
import SpookyFacts from './components/SpookyFacts';
import EffectsToggle from './components/EffectsToggle';
import SpiderWebDecorations from './components/SpiderWeb';
import BouncingPumpkins from './components/BouncingPumpkins';
import './App.css';

function App() {
  const [effects, setEffects] = useState({
    cursorTrail: true,
    matrixRain: false,
    bats: true,
    sound: true
  });

  const [shake, setShake] = useState(false);

  // Load saved preferences
  useEffect(() => {
    const saved = localStorage.getItem('effectsPreferences');
    if (saved) {
      try {
        setEffects(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load preferences:', e);
      }
    }
  }, []);

  // Save preferences
  useEffect(() => {
    localStorage.setItem('effectsPreferences', JSON.stringify(effects));
  }, [effects]);

  // Screen shake effect
  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className={`app ${shake ? 'shake' : ''}`}>
      {/* Scanline effect for retro terminal feel */}
      <div className="scanline"></div>
      
      {/* Effects Toggle Panel */}
      <EffectsToggle effects={effects} setEffects={setEffects} />
      
      {/* Conditional Effects */}
      {effects.matrixRain && <MatrixRain />}
      {effects.cursorTrail && <CursorTrail />}
      {effects.bats && <FlyingBats />}
      
      {/* Floating ghosts in background */}
      <GhostContainer />
      
      {/* Spider webs decoration */}
      <SpiderWebDecorations />
      
      {/* Bouncing pumpkins */}
      <BouncingPumpkins />
      
      {/* Main content */}
      <div className="content">
        <header className="app-header">
          <div className="glitch-wrapper">
            <h1 className="app-title glow-purple flicker" data-text="NEON REVERIE">
              NEON REVERIE
            </h1>
          </div>
          <p className="app-subtitle glow-cyan">
            // A HAUNTED TERMINAL EXPERIENCE
          </p>
        </header>

        <main className="app-main">
          <CountdownTimer />
          <SpookyFacts />
          <SummonSpirits soundEnabled={effects.sound} onSummon={triggerShake} />
        </main>

        <footer className="app-footer">
          <p className="footer-text">
            <span className="glow-orange">👻</span>
            {' '}Built with React + C# + Dark Magic{' '}
            <span className="glow-orange">🎃</span>
          </p>
          <p className="footer-subtext">
            Created with 💜 by{' '}
            <a 
              href="https://github.com/ailynux" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link glow-purple"
            >
              Ailyn
            </a>
            {' '}for Halloween {new Date().getFullYear()}
          </p>
        </footer>
      </div>

      {/* Particle effects */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

