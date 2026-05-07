import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const contentRef = useRef(null);

  const { name, designation, tagline, cta } = portfolioData.hero;

  useEffect(() => {
    // Parallax and Canvas Logic preserved from vanilla JS
    const hero = heroRef.current;
    const heroCanvas = canvasRef.current;
    if (!hero || !heroCanvas) return;

    const ctx = heroCanvas.getContext('2d');
    if (!ctx) return;

    const pointer = { x: 0, y: 0, active: false };
    let width = 0;
    let height = 0;
    const particles = Array.from({ length: 34 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0004,
      vy: (Math.random() - 0.5) * 0.0004,
      r: 1 + Math.random() * 2
    }));

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      heroCanvas.width = width;
      heroCanvas.height = height;
    };

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        const px = p.x * width;
        const py = p.y * height;
        let highlightBoost = 0;
        if (pointer.active) {
          const dx = px - pointer.x;
          const dy = py - pointer.y;
          const d = Math.hypot(dx, dy);
          if (d < 100 && d > 0.01) {
            p.vx += (dx / d) * 0.00003;
            p.vy += (dy / d) * 0.00003;
          }
          if (d < 160) {
            highlightBoost = (160 - d) / 160;
          }
        }
        p.vx *= 0.996;
        p.vy *= 0.996;
        const glowRadius = p.r * (4.4 + highlightBoost * 2.2);
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, glowRadius);
        const innerAlpha = 0.62 + highlightBoost * 0.32;
        const outerAlpha = 0.82 + highlightBoost * 0.18;
        gradient.addColorStop(0, 'rgba(150, 215, 255, ' + innerAlpha + ')');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0.26)');
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(px, py, glowRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = 'rgba(208, 240, 255, ' + outerAlpha + ')';
        ctx.arc(px, py, p.r + highlightBoost * 0.6, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = window.requestAnimationFrame(render);
    };

    const updateParallax = (event) => {
      const rect = hero.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      const content = contentRef.current;
      if (content) {
        content.style.transform = `translate3d(${(relX * 10).toFixed(2)}px, ${(relY * 10).toFixed(2)}px, 0)`;
      }
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const resetParallax = () => {
      pointer.active = false;
      const content = contentRef.current;
      if (content) content.style.transform = "";
    };

    resize();
    render();
    hero.addEventListener('mousemove', updateParallax, { passive: true });
    hero.addEventListener('mouseleave', resetParallax);
    window.addEventListener('resize', resize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      hero.removeEventListener('mousemove', updateParallax);
      hero.removeEventListener('mouseleave', resetParallax);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <canvas className="hero-canvas" aria-hidden="true" ref={canvasRef}></canvas>
      <div className="hero-overlay"></div>
      <div className="hero-content" ref={contentRef}>
        <h1>{name}</h1>
        <p className="designation">{designation}</p>
        <p className="tagline">
          {tagline.split('n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <a className="hero-cta" href={cta.href}>{cta.label}</a>
      </div>
    </section>
  );
};

export default Hero;
