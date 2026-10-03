import React from 'react';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import './Timeline.css';

export default function Timeline({ experiences }) {
  return (
    <div className="experience-timeline">
      {experiences.map((exp, index) => (
        <div key={index} className="timeline-item">
          {/* Left timeline track marker */}
          <div className="timeline-track" aria-hidden="true">
            <span className="timeline-node-dot" />
            <span className="timeline-line" />
          </div>

          {/* Timeline Card */}
          <div className="timeline-card">
            <div className="timeline-header">
              <div className="timeline-title-row">
                <span className="timeline-company">{exp.company}</span>
                <span className="timeline-role-pill">{exp.role}</span>
              </div>
              <div className="timeline-meta-row">
                <span className="meta-item">
                  <MapPin size={13} className="meta-icon" />
                  {exp.location}
                </span>
                <span className="meta-item">
                  <Calendar size={13} className="meta-icon" />
                  {exp.period}
                </span>
              </div>
            </div>

            <p className="timeline-summary">{exp.summary}</p>

            <div className="timeline-focus-section">
              <span className="focus-label">Core Focus Areas:</span>
              <div className="focus-pills">
                {exp.focusAreas.map((area, i) => (
                  <span key={i} className="focus-pill">{area}</span>
                ))}
              </div>
            </div>

            <ul className="timeline-bullets" role="list">
              {exp.details.map((detail, i) => (
                <li key={i} className="timeline-bullet-item">
                  <CheckCircle2 size={15} className="bullet-icon" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="timeline-tech-stack">
              <span className="tech-label">Environment:</span>
              <div className="tech-tags">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="exp-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
