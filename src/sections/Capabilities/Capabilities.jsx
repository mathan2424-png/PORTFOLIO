import React from 'react';
import { capabilities } from '../../data/experience';
import './Capabilities.css';

export default function Capabilities() {
  return (
    <section className="section capabilities-section">
      <div className="container">
        {/* Large Rounded Glass Container */}
        <div className="glass-section-container capabilities-glass-card">
          {/* Section Header */}
          <div className="section-header">
            <span className="eyebrow-badge">ENGINEERING VALUE</span>
            <h2 className="section-title-huge">
              WHAT I <span className="text-accent-highlight">BRING.</span>
            </h2>
            <p className="section-subline">
              Practical capabilities anchored in real product delivery, frontend precision, and reliable full-stack execution.
            </p>
          </div>

          {/* Large Typography Capability Rows */}
          <div className="capabilities-list">
            {capabilities.map((item) => (
              <div key={item.number} className="capability-row">
                <div className="capability-index-col">
                  <span className="capability-num">{item.number}</span>
                </div>

                <div className="capability-title-col">
                  <h3 className="capability-title">{item.title}</h3>
                  <span className="capability-statement">{item.statement}</span>
                </div>

                <div className="capability-desc-col">
                  <p className="capability-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
