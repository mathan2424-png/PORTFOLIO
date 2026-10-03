import React, { useState } from 'react';
import { architectureFlow } from '../../data/skills';
import ArchitectureNode from '../../components/ArchitectureNode/ArchitectureNode';
import './Architecture.css';

export default function Architecture() {
  const [activeStepIndex, setActiveStepIndex] = useState(1); // default to React Frontend
  const activeNode = architectureFlow[activeStepIndex];

  return (
    <section id="architecture" className="section architecture-section">
      <div className="container">
        {/* Large Rounded Glass Container */}
        <div className="glass-section-container architecture-glass-card">
          {/* Section Header */}
          <div className="section-header">
            <span className="eyebrow-badge">FULL-STACK SYSTEM DESIGN</span>
            <h2 className="section-title-huge">
              ENGINEERED FROM<br />
              <span className="text-accent-highlight">INTERFACE TO DATABASE.</span>
            </h2>
            <p className="section-subline">
              An interactive end-to-end architecture flow communicating how client triggers, state trees, REST APIs, Express controllers, and MongoDB collections operate as an integrated platform.
            </p>
          </div>

          {/* Interactive Flow Diagram */}
          <div className="architecture-diagram-container">
            <div className="architecture-nodes-track">
              {architectureFlow.map((node, index) => (
                <ArchitectureNode
                  key={node.step}
                  node={node}
                  isLast={index === architectureFlow.length - 1}
                  isActive={activeStepIndex === index}
                  onSelect={() => setActiveStepIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Selected Tier Deep-Dive Inspector Panel */}
          <div className="architecture-inspector-card">
            <div className="inspector-header">
              <div className="inspector-tier-title">
                <span className="inspector-step-badge">STEP {activeNode.step}</span>
                <h3 className="inspector-name">{activeNode.tech}</h3>
                <span className="inspector-role-pill">{activeNode.role}</span>
              </div>
              <div className="inspector-live-tag">
                <span className="pulse-green-dot" />
                <span>Tier Active</span>
              </div>
            </div>

            <div className="inspector-body-grid">
              <div className="inspector-col">
                <span className="col-label">Responsibility</span>
                <p className="col-desc">{activeNode.description}</p>
              </div>

              <div className="inspector-col">
                <span className="col-label">Production Implementation</span>
                <ul className="principles-list">
                  {activeNode.step === '01' && (
                    <>
                      <li>• Fluid responsive layouts tested across 320px mobile to 4K displays</li>
                      <li>• Accessible UI primitives with touch-friendly touch targets</li>
                    </>
                  )}
                  {activeNode.step === '02' && (
                    <>
                      <li>• Modular React component trees with isolated hooks and reactive state</li>
                      <li>• Optimistic UI updates with instant user feedback and error boundaries</li>
                    </>
                  )}
                  {activeNode.step === '03' && (
                    <>
                      <li>• Clean RESTful resource paths using standard HTTP status codes</li>
                      <li>• JWT Bearer tokens passed safely in Authorization request headers</li>
                    </>
                  )}
                  {activeNode.step === '04' && (
                    <>
                      <li>• Express route controllers with centralized error-handling middlewares</li>
                      <li>• Role-Based Access Control (RBAC) ensuring tenant and admin data security</li>
                    </>
                  )}
                  {activeNode.step === '05' && (
                    <>
                      <li>• Mongoose schemas with validation constraints, indexing, and timestamps</li>
                      <li>• Multi-tenant collection isolation and fast query aggregation</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
