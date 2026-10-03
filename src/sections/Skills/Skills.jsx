import React from 'react';
import { engineeringStack, techStripItems } from '../../data/skills';
import SkillGroup from '../../components/SkillGroup/SkillGroup';
import './Skills.css';

export default function Skills() {
  return (
    <section id="stack" className="section skills-section">
      <div className="container">
        {/* Large Rounded Glass Section */}
        <div className="glass-section-container skills-glass-card">
          {/* Section Header */}
          <div className="section-header">
            <span className="eyebrow-badge">TECHNICAL CAPABILITIES</span>
            <h2 className="section-title-huge">
              MY ENGINEERING <span className="text-accent-highlight">STACK.</span>
            </h2>
            <p className="section-subline">
              Technologies and toolchains I work with across client-side interfaces, server APIs, and persistent database architectures. Hover over any skill to reveal its specific implementation role.
            </p>
          </div>

          {/* 4 Group Asymmetric Grid */}
          <div className="skills-grid">
            {engineeringStack.map((group) => (
              <SkillGroup key={group.number} group={group} />
            ))}
          </div>

          {/* Premium Horizontal Technology Strip */}
          <div className="tech-strip-wrapper">
            <div className="tech-strip-header">
              <span className="tech-strip-title">TECHNOLOGY STRIP</span>
            </div>
            <div className="tech-strip-pills">
              {techStripItems.map((tech) => (
                <div key={tech.name} className="tech-strip-chip">
                  <span className="tech-chip-symbol">●</span>
                  <span className="tech-chip-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
