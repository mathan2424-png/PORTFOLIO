import React from 'react';
import { ArrowUpRight, Code2, Server, Database, ShieldCheck, Sparkles, Target, Layers } from 'lucide-react';
import Button from '../../components/Button/Button';
import ProfileBanner from '../../components/ProfileBanner/ProfileBanner';
import mathanPhoto from '../../assets/images/mathan_profile.jpg';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Developer Profile Banner (Exact UI from Reference) */}
        <div className="about-banner-wrapper">
          <ProfileBanner
            eyebrow="SOFTWARE DEVELOPER"
            name="Mathankumar M"
            typingPhrases={[
              "Hello, I'm Mathankumar M",
              "Full-Stack MERN Developer",
            ]}
            tagline="Full-Stack MERN Developer specializing in architecting scalable SaaS platforms, enterprise admin dashboards, and high-performance React web applications backed by robust Node.js APIs."
            email="m.mathan2424@gmail.com"
            location="Chennai, India"
            avatarSrc={mathanPhoto}
          />
        </div>

        {/* Large Rounded Glass Container: FROM IDEAS TO WORKING PRODUCTS */}
        <div className="glass-section-container about-glass-card">
          {/* iOS 18 Luxury Frosted Optical Glow Layers */}
          <div className="about-optical-ambient" aria-hidden="true">
            <div className="optical-glow optical-glow-1" />
            <div className="optical-glow optical-glow-2" />
            <div className="optical-glow optical-glow-3" />
          </div>

          <div className="about-two-col-layout">
            {/* Left Column: Heading, Pipeline & Proof of Work */}
            <div className="about-left-column">
              <div className="about-eyebrow-row">
                <span className="eyebrow-badge">
                  <Sparkles size={12} className="text-accent" />
                  <span>ENGINEERING PHILOSOPHY</span>
                </span>
              </div>

              <h2 className="about-large-heading">
                FROM IDEAS<br />
                TO WORKING<br />
                <span className="text-accent-highlight">PRODUCTS.</span>
              </h2>

              <p className="about-heading-substatement">
                Bridging modern reactive user interfaces with robust server-side controllers, authenticated APIs, and production database systems.
              </p>

              {/* Product Transformation Journey Pipeline */}
              <div className="about-pipeline-card">
                <div className="pipeline-item">
                  <div className="pipeline-step-badge">01</div>
                  <div className="pipeline-content">
                    <span className="pipeline-title">System Architecture & Schema</span>
                    <span className="pipeline-desc">Deconstructing business workflows into scalable data models & API routes.</span>
                  </div>
                </div>

                <div className="pipeline-connector-line" aria-hidden="true" />

                <div className="pipeline-item">
                  <div className="pipeline-step-badge">02</div>
                  <div className="pipeline-content">
                    <span className="pipeline-title">Modular Frontend & API Integration</span>
                    <span className="pipeline-desc">Engineering reactive React component trees with async data handling.</span>
                  </div>
                </div>

                <div className="pipeline-connector-line" aria-hidden="true" />

                <div className="pipeline-item">
                  <div className="pipeline-step-badge">03</div>
                  <div className="pipeline-content">
                    <span className="pipeline-title">Production Delivery & Security</span>
                    <span className="pipeline-desc">Role-based access control, responsive perfection & clean performance.</span>
                  </div>
                </div>
              </div>

              {/* Engineering Stats Row */}
              <div className="about-stats-grid">
                <div className="about-stat-chip">
                  <span className="stat-chip-num">4+</span>
                  <span className="stat-chip-lbl">Production-Grade Web Products</span>
                </div>
                <div className="about-stat-chip">
                  <span className="stat-chip-num">100%</span>
                  <span className="stat-chip-lbl">End-to-End MERN Stack Focus</span>
                </div>
              </div>
            </div>

            {/* Right Column: Professional Narrative, 4 Pillars & Focus */}
            <div className="about-right-column">
              <p className="about-lead-text">
                I’m <strong>Mathankumar M</strong>, a Full-Stack MERN Developer focused on turning real-world business challenges into dependable, responsive, and production-ready web products.
              </p>

              <p className="about-secondary-text">
                My approach to software engineering starts with operational reality. Instead of building isolated concept landing pages, I engineer comprehensive platforms that validate user inputs, enforce role permissions, communicate through structured RESTful APIs, and deliver fast, reliable user experiences under load.
              </p>

              {/* 4 Engineering Pillars Grid */}
              <div className="about-pillars-container">
                <span className="pillars-section-title">Core Full-Stack Pillars:</span>
                <div className="about-pillars-grid">
                  {/* Pillar 1: Frontend */}
                  <div className="pillar-card">
                    <div className="pillar-icon-box">
                      <Code2 size={20} className="text-accent" />
                    </div>
                    <div className="pillar-info">
                      <h3 className="pillar-heading">Frontend Engineering</h3>
                      <p className="pillar-sub">
                        Reusable React component architectures, intuitive state trees, and pixel-precise cross-device responsiveness.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 2: Backend */}
                  <div className="pillar-card">
                    <div className="pillar-icon-box">
                      <Server size={20} className="text-accent" />
                    </div>
                    <div className="pillar-info">
                      <h3 className="pillar-heading">Backend & REST APIs</h3>
                      <p className="pillar-sub">
                        Structured Node.js & Express controllers, resilient error handling, and secure asynchronous endpoints.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 3: Database */}
                  <div className="pillar-card">
                    <div className="pillar-icon-box">
                      <Database size={20} className="text-accent" />
                    </div>
                    <div className="pillar-info">
                      <h3 className="pillar-heading">Schema & Persistence</h3>
                      <p className="pillar-sub">
                        MongoDB Mongoose schemas, indexed relationships, and end-to-end CRUD operations across collections.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 4: Admin & Governance */}
                  <div className="pillar-card">
                    <div className="pillar-icon-box">
                      <ShieldCheck size={20} className="text-accent" />
                    </div>
                    <div className="pillar-info">
                      <h3 className="pillar-heading">Admin & Governance</h3>
                      <p className="pillar-sub">
                        Multi-tenant SaaS dashboards, granular Role-Based Access Control (RBAC), and security audit logs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Currently Focused On Panel */}
              <div className="about-focus-panel">
                <div className="focus-panel-top">
                  <Target size={16} className="text-accent" />
                  <span className="focus-panel-title">Active Engineering Focus:</span>
                </div>
                <div className="focus-chips-row">
                  <div className="focus-chip">
                    <span className="focus-bullet" />
                    <strong>Multi-Tenant SaaS</strong>
                  </div>
                  <div className="focus-chip">
                    <span className="focus-bullet" />
                    <strong>Admin Dashboards</strong>
                  </div>
                  <div className="focus-chip">
                    <span className="focus-bullet" />
                    <strong>REST API Architecture</strong>
                  </div>
                  <div className="focus-chip">
                    <span className="focus-bullet" />
                    <strong>React 19 Ecosystem</strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="about-action-row">
                <Button
                  href="#projects"
                  variant="accent"
                  size="md"
                  icon={ArrowUpRight}
                  ariaLabel="View Featured Projects"
                >
                  View Featured Projects →
                </Button>
                <Button
                  href="#contact"
                  variant="secondary"
                  size="md"
                  icon={Layers}
                  ariaLabel="Let's Discuss Solutions"
                >
                  Let’s Connect →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
