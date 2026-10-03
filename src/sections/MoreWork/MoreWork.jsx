import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { additionalProjects } from '../../data/projects';
import './MoreWork.css';

export default function MoreWork() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="section section-bg-white more-work-section">
      <div className="container">
        {/* Section Header */}
        <div className="more-work-header-row">
          <div>
            <span className="eyebrow-badge">ADDITIONAL CLIENT WORK</span>
            <h2 className="more-work-title">MORE WORK</h2>
          </div>
          <p className="more-work-header-desc">
            Commercial web solutions, event portals, and enterprise websites engineered for client credibility and speed.
          </p>
        </div>

        {/* Elegant Horizontal Rows */}
        <div className="more-work-rows-container">
          {additionalProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div
                key={project.id}
                className={`more-work-row ${isExpanded ? 'is-active' : ''}`}
                onMouseEnter={() => setExpandedId(project.id)}
                onMouseLeave={() => setExpandedId(null)}
                onClick={() => setExpandedId(isExpanded ? null : project.id)}
                tabIndex={0}
                role="region"
                aria-expanded={isExpanded}
                aria-label={`${project.title} - ${project.type}`}
              >
                <div className="row-main-bar">
                  <div className="row-ident">
                    <span className="row-num">{project.number}</span>
                    <h3 className="row-project-name">{project.title}</h3>
                  </div>

                  <div className="row-type-col">
                    <span className="row-type-label">{project.type}</span>
                  </div>

                  <div className="row-tech-col">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="row-tech-pill">{tech}</span>
                    ))}
                  </div>

                  <div className="row-action-col">
                    <span className="row-arrow-circle">
                      <ArrowUpRight size={18} className="row-arrow" />
                    </span>
                  </div>
                </div>

                {/* Smooth Expandable Description Row */}
                <div className="row-drawer-content">
                  <div className="drawer-inner">
                    <p className="row-description">{project.description}</p>
                    <div className="row-drawer-actions">
                      <span className="row-category-pill">{project.category}</span>
                      <a
                        href={project.link !== '#' ? project.link : '#contact'}
                        className="row-link"
                        aria-label={`Inquire about ${project.title}`}
                      >
                        <span>Project Details</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
