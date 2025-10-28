import { useState } from 'react';
import CountdownTimer from './components/CountdownTimer';
import SummonSpirits from './components/SummonSpirits';
import GhostContainer from './components/FloatingGhost';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Scanline effect for retro terminal feel */}
      <div className="scanline"></div>
      
      {/* Floating ghosts in background */}
      <GhostContainer />
      
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
          <SummonSpirits />
        </main>

        <footer className="app-footer">
          <p className="footer-text">
            <span className="glow-orange">👻</span>
            {' '}Built with React + C# + Dark Magic{' '}
            <span className="glow-orange">🎃</span>
          </p>
          <p className="footer-subtext">
            Made with 💜 for Halloween {new Date().getFullYear()}
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

