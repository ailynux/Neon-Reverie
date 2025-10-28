import { useEffect, useRef } from 'react';
import '../styles/components/MatrixRain.css';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);

    const chars = '01ハロウィン👻🎃💀🦇'.split('');

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = '15px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Random color selection
        const colors = ['#b026ff', '#ff6b35', '#00ffff'];
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        
        const x = i * 20;
        const y = drops[i] * 20;
        
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="matrix-rain-canvas"
    />
  );
};

export default MatrixRain;

