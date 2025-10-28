import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/components/CursorTrail.css';

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let intervalId;
    
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const createTrail = () => {
      const colors = ['#b026ff', '#ff6b35', '#00ffff', '#ff10f0'];
      const newTrail = {
        id: Date.now() + Math.random(),
        x: mousePos.x,
        y: mousePos.y,
        color: colors[Math.floor(Math.random() * colors.length)]
      };

      setTrails(prev => [...prev, newTrail].slice(-15)); // Keep only last 15
    };

    window.addEventListener('mousemove', handleMouseMove);
    intervalId = setInterval(createTrail, 50);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(intervalId);
    };
  }, [mousePos]);

  return (
    <div className="cursor-trail-container">
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            className="trail-particle"
            initial={{ 
              x: trail.x - 5,
              y: trail.y - 5,
              scale: 1,
              opacity: 0.8
            }}
            animate={{ 
              scale: 0,
              opacity: 0
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background: trail.color,
              boxShadow: `0 0 20px ${trail.color}`
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorTrail;

