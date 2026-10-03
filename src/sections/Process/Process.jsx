import React from 'react';
import { developmentProcess } from '../../data/experience';
import './Process.css';

export default function Process() {
  return (
    <section className="section process-section">
      <div className="container">
        {/* Large Rounded Glass Container */}
        <div className="glass-section-container process-glass-card">
          {/* Section Header */}
          <div className="section-header">
            <span className="eyebrow-badge">WORKFLOW METHODOLOGY</span>
            <h2 className="section-title-huge">
              HOW I BUILD <span className="text-accent-highlight">WEB PRODUCTS.</span>
            </h2>
            <p className="section-subline">
              A disciplined, production-minded development sequence from initial business discovery to deployed, tested software.
            </p>
          </div>

          {/* Connected Horizontal Timeline on Desktop / Vertical on Mobile */}
          <div className="process-timeline-wrapper">
            <div className="process-horizontal-line" aria-hidden="true" />
            
            <div className="process-steps-grid">
              {developmentProcess.map((step) => (
                <div key={step.number} className="process-step-node">
                  <div className="step-number-container">
                    <span className="step-giant-number">{step.number}</span>
                    <span className="step-track-pin" />
                  </div>

                  <div className="step-content-card">
                    <h3 className="step-title">{step.title}</h3>
                    <span className="step-subtitle">{step.subtitle}</span>

                    <ul className="step-points-list" role="list">
                      {step.points.map((pt, i) => (
                        <li key={i} className="step-point-item">
                          <span className="step-bullet" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="step-summary-desc">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
