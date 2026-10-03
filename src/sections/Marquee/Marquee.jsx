import React from 'react';
import './Marquee.css';

const MARQUEE_ITEMS = [
  'REACT',
  'NODE.JS',
  'EXPRESS',
  'MONGODB',
  'REST API',
  'JAVASCRIPT',
  'GIT',
  'RESPONSIVE WEB',
  'REACT ROUTER',
  'POSTMAN',
  'VITE'
];

export default function Marquee() {
  return (
    <div className="technical-marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {/* Render twice for seamless continuous loop */}
        <div className="marquee-content">
          {MARQUEE_ITEMS.map((item, index) => (
            <span key={index} className="marquee-item">
              <span className="marquee-dot">◆</span>
              <span className="marquee-text">{item}</span>
            </span>
          ))}
        </div>
        <div className="marquee-content">
          {MARQUEE_ITEMS.map((item, index) => (
            <span key={`dup-${index}`} className="marquee-item">
              <span className="marquee-dot">◆</span>
              <span className="marquee-text">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
