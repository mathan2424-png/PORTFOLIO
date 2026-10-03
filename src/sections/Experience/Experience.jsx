import React from 'react';
import { professionalExperience } from '../../data/experience';
import Timeline from '../../components/Timeline/Timeline';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section section-bg-white experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow-badge">TRACK RECORD</span>
          <h2 className="section-title-huge">EXPERIENCE</h2>
          <p className="section-subline">
            Professional background and real-world internship experience contributing to web interfaces, frontend logic, and collaborative team development.
          </p>
        </div>

        {/* Elegant Timeline */}
        <div className="experience-container">
          <Timeline experiences={professionalExperience} />
        </div>
      </div>
    </section>
  );
}
