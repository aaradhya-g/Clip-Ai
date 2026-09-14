import React, { useEffect, useState } from 'react';
import './LandingPage.css';

export default function LandingPage({ onGetStarted }) {
  const [gridSize, setGridSize] = useState(0);

  useEffect(() => {
    const calculateGrid = () => {
      // 120px is the grid-template-columns/rows size in CSS
      const cols = Math.ceil(window.innerWidth / 120);
      const rows = Math.ceil(window.innerHeight / 120);
      setGridSize(cols * rows);
    };

    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  return (
    <div className="landing-container">
      <nav className="landing-nav">
        <div className="nav-brand">ClipAI</div>
        <div className="nav-links">
          <button className="nav-auth-btn" onClick={onGetStarted}>Login / Signup</button>
        </div>
      </nav>
      <div className="grid-background">
        {Array.from({ length: gridSize }).map((_, i) => (
          <div 
            key={i} 
            className="grid-cell" 
            onMouseEnter={(e) => {
              const cell = e.target;
              if (!cell.classList.contains('active')) {
                cell.classList.add('active');
                setTimeout(() => {
                  cell.classList.remove('active');
                }, 5000);
              }
            }}
          />
        ))}
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">Hours of <span className="cursive-text golden">Video</span></h1>
        <p className="hero-subtitle"><u>Seconds of insight.</u> Our most intelligent model helps you bring any idea to life.</p>
        
        <div className="hero-buttons">
          <button className="btn-get-started" onClick={onGetStarted}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
