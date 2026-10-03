import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import './ArchitectureNode.css';

export default function ArchitectureNode({ node, isLast, isActive, onSelect }) {
  const { step, label, tech, role, description, badge } = node;

  return (
    <div className={`architecture-node-wrapper ${isActive ? 'is-active' : ''}`}>
      <div 
        className="architecture-node-card interactive-node"
        onClick={onSelect}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect();
          }
        }}
        tabIndex={0}
        role="button"
        aria-pressed={isActive}
        aria-label={`${label}: ${tech} - ${description}`}
      >
        <div className="node-top-bar">
          <span className="node-step">{step}</span>
          <span className="node-badge">{badge}</span>
        </div>

        <div className="node-main-content">
          <span className="node-role">{role}</span>
          <h4 className="node-tech-title">{tech}</h4>
          <span className="node-label-sub">{label}</span>
          <p className="node-description">{description}</p>
        </div>

        <div className="node-bottom-indicator">
          <span className="node-live-pulse" />
          <span className="node-active-hint">{isActive ? 'Inspecting Tier' : 'Inspect Details'}</span>
        </div>
      </div>

      {!isLast && (
        <div className="node-connector" aria-hidden="true">
          <div className="connector-line">
            <span className="connector-packet" />
          </div>
          <ArrowRight className="connector-arrow-desktop" size={18} />
          <ArrowDown className="connector-arrow-mobile" size={18} />
        </div>
      )}
    </div>
  );
}
