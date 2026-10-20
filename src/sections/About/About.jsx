import React from 'react';
import { ArrowUpRight, Code2, Server, Database, ShieldCheck, Target, Layers, Workflow } from 'lucide-react';
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

          <div className="about-card-inner">
            {/* Tier 1: Aligned Master Header Spread */}
            <div className="about-header-split">
              {/* Left Column: Eyebrow, Aligned 3-Line Title & Philosophy */}
              <div className="about-header-primary">


                <h2 className="about-large-heading">
                  <span className="heading-line">FROM IDEAS</span>
                  <span className="heading-line">TO WORKING</span>
                  <span className="heading-line text-accent-highlight">PRODUCTS.</span>
                </h2>

                <p className="about-heading-substatement">
                  Bridging modern reactive user interfaces with robust server-side controllers, authenticated APIs, and production database systems.
                </p>
              </div>

              {/* Right Column: Aligned Professional Bio Narrative & Actions */}
              <div className="about-header-secondary">


                <p className="about-lead-text">
                  I’m <strong>Mathankumar M</strong>, a Full-Stack MERN Developer focused on turning real-world business challenges into dependable, responsive, and production-ready web products.
                </p>

                <p className="about-secondary-text">
                  My approach to software engineering starts with operational reality. Instead of building isolated concept landing pages, I engineer comprehensive platforms that validate user inputs, enforce role permissions, communicate through structured RESTful APIs, and deliver fast, reliable user experiences under load.
                </p>

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

            {/* Glowing Frosted Glass Hairline Divider */}
            <div className="about-glass-divider" aria-hidden="true" />

            {/* Tier 2: The Modern Engineering Engine & Full-Stack Pillars */}
            <div className="about-showcase-wrapper">
              
              {/* Section 2A: The 3-Step Execution Pipeline */}
              <div className="about-pipeline-showcase">
                <div className="showcase-header">
                  <div className="showcase-header-left">
                    <span className="showcase-badge">
                      <Workflow size={13} className="badge-icon" />
                      <span>THE TRANSFORMATION PIPELINE</span>
                    </span>
                    <h3 className="showcase-title">01 - 03 Execution Flow</h3>
                  </div>
                  <div className="showcase-header-meta">
                    <span className="live-pulse-dot" />
                    <span>Systematic Delivery Cycle</span>
                  </div>
                </div>

                {/* 3 Step Interactive Process Grid */}
                <div className="pipeline-steps-grid">
                  {/* Step 01 */}
                  <div className="pipeline-step-card">
                    <div className="step-card-glass-glow" />
                    <div className="step-card-top">
                      <div className="step-num-pill">01</div>
                      <span className="step-phase-tag">PHASE 1 • ARCHITECTURE</span>
                    </div>
                    <div className="step-card-body">
                      <h4 className="step-card-heading">System Architecture & Schema</h4>
                      <p className="step-card-desc">
                        Deconstructing business workflows into scalable data models & API routes.
                      </p>
                    </div>
                    <div className="step-card-pills">
                      <span className="step-mini-tag">Data Models</span>
                      <span className="step-mini-tag">API Routes</span>
                    </div>
                  </div>

                  {/* Step 02 */}
                  <div className="pipeline-step-card">
                    <div className="step-card-glass-glow" />
                    <div className="step-card-top">
                      <div className="step-num-pill">02</div>
                      <span className="step-phase-tag">PHASE 2 • INTERFACE</span>
                    </div>
                    <div className="step-card-body">
                      <h4 className="step-card-heading">Modular Frontend & API Integration</h4>
                      <p className="step-card-desc">
                        Engineering reactive React component trees with async data handling.
                      </p>
                    </div>
                    <div className="step-card-pills">
                      <span className="step-mini-tag">React Trees</span>
                      <span className="step-mini-tag">Async Handling</span>
                    </div>
                  </div>

                  {/* Step 03 */}
                  <div className="pipeline-step-card">
                    <div className="step-card-glass-glow" />
                    <div className="step-card-top">
                      <div className="step-num-pill">03</div>
                      <span className="step-phase-tag">PHASE 3 • PRODUCTION</span>
                    </div>
                    <div className="step-card-body">
                      <h4 className="step-card-heading">Production Delivery & Security</h4>
                      <p className="step-card-desc">
                        Role-based access control, responsive perfection & clean performance.
                      </p>
                    </div>
                    <div className="step-card-pills">
                      <span className="step-mini-tag">RBAC Security</span>
                      <span className="step-mini-tag">Clean Perf</span>
                    </div>
                  </div>
                </div>

                {/* Metrics Highlight Banner */}
                <div className="pipeline-metrics-banner">
                  <div className="metric-cell">
                    <div className="metric-num-wrap">
                      <span className="metric-val">4+</span>
                    </div>
                    <div className="metric-text-group">
                      <span className="metric-label">Production-Grade Web Products</span>
                      <span className="metric-sub">Deployed full-stack systems</span>
                    </div>
                  </div>
                  
                  <div className="metric-cell-divider" aria-hidden="true" />

                  <div className="metric-cell">
                    <div className="metric-num-wrap">
                      <span className="metric-val">100%</span>
                    </div>
                    <div className="metric-text-group">
                      <span className="metric-label">End-to-End MERN Stack Focus</span>
                      <span className="metric-sub">MongoDB • Express • React • Node.js</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2B: CORE FULL-STACK PILLARS */}
              <div className="about-pillars-showcase">
                <div className="showcase-header">
                  <div className="showcase-header-left">
                    <span className="showcase-badge">
                      <Layers size={13} className="badge-icon" />
                      <span>CORE FULL-STACK PILLARS</span>
                    </span>
                    <h3 className="showcase-title">Architectural Focus</h3>
                  </div>
                  <span className="showcase-caption">Specialized Competencies</span>
                </div>

                {/* 4 Pillars Bento Grid */}
                <div className="pillars-bento-grid">
                  {/* Pillar 1: Frontend */}
                  <div className="pillar-bento-card pillar-card-frontend">
                    <div className="pillar-top-row">
                      <div className="pillar-icon-box icon-cyan">
                        <Code2 size={20} />
                      </div>
                      <span className="pillar-category-tag">UI / UX ARCHITECTURE</span>
                    </div>
                    <div className="pillar-body">
                      <h4 className="pillar-name">Frontend Engineering</h4>
                      <p className="pillar-description">
                        Reusable React component architectures, intuitive state trees, and pixel-precise cross-device responsiveness.
                      </p>
                    </div>
                    <div className="pillar-tags-row">
                      <span className="pillar-tag">React 19</span>
                      <span className="pillar-tag">State Trees</span>
                      <span className="pillar-tag">Responsive UI</span>
                    </div>
                  </div>

                  {/* Pillar 2: Backend */}
                  <div className="pillar-bento-card pillar-card-backend">
                    <div className="pillar-top-row">
                      <div className="pillar-icon-box icon-indigo">
                        <Server size={20} />
                      </div>
                      <span className="pillar-category-tag">API & RUNTIME</span>
                    </div>
                    <div className="pillar-body">
                      <h4 className="pillar-name">Backend & REST APIs</h4>
                      <p className="pillar-description">
                        Structured Node.js & Express controllers, resilient error handling, and secure asynchronous endpoints.
                      </p>
                    </div>
                    <div className="pillar-tags-row">
                      <span className="pillar-tag">Node.js</span>
                      <span className="pillar-tag">Express Controllers</span>
                      <span className="pillar-tag">REST APIs</span>
                    </div>
                  </div>

                  {/* Pillar 3: Database */}
                  <div className="pillar-bento-card pillar-card-db">
                    <div className="pillar-top-row">
                      <div className="pillar-icon-box icon-purple">
                        <Database size={20} />
                      </div>
                      <span className="pillar-category-tag">SCHEMA & PERSISTENCE</span>
                    </div>
                    <div className="pillar-body">
                      <h4 className="pillar-name">Schema & Persistence</h4>
                      <p className="pillar-description">
                        MongoDB Mongoose schemas, indexed relationships, and end-to-end CRUD operations across collections.
                      </p>
                    </div>
                    <div className="pillar-tags-row">
                      <span className="pillar-tag">MongoDB</span>
                      <span className="pillar-tag">Mongoose</span>
                      <span className="pillar-tag">CRUD Operations</span>
                    </div>
                  </div>

                  {/* Pillar 4: Admin & Governance */}
                  <div className="pillar-bento-card pillar-card-admin">
                    <div className="pillar-top-row">
                      <div className="pillar-icon-box icon-emerald">
                        <ShieldCheck size={20} />
                      </div>
                      <span className="pillar-category-tag">GOVERNANCE & ACCESS</span>
                    </div>
                    <div className="pillar-body">
                      <h4 className="pillar-name">Admin & Governance</h4>
                      <p className="pillar-description">
                        Multi-tenant SaaS dashboards, granular Role-Based Access Control (RBAC), and security audit logs.
                      </p>
                    </div>
                    <div className="pillar-tags-row">
                      <span className="pillar-tag">Multi-Tenant SaaS</span>
                      <span className="pillar-tag">RBAC</span>
                      <span className="pillar-tag">Audit Logs</span>
                    </div>
                  </div>
                </div>

                {/* Active Engineering Focus Ribbon */}
                <div className="active-focus-ribbon">
                  <div className="focus-ribbon-left">
                    <div className="focus-radar-pulse">
                      <span className="radar-wave" />
                      <Target size={15} className="radar-icon" />
                    </div>
                    <span className="focus-ribbon-title">Active Engineering Focus:</span>
                  </div>
                  <div className="focus-ribbon-tags">
                    <div className="focus-interactive-pill">
                      <span className="pill-dot" />
                      <span>Multi-Tenant SaaS</span>
                    </div>
                    <div className="focus-interactive-pill">
                      <span className="pill-dot" />
                      <span>Admin Dashboards</span>
                    </div>
                    <div className="focus-interactive-pill">
                      <span className="pill-dot" />
                      <span>REST API Architecture</span>
                    </div>
                    <div className="focus-interactive-pill">
                      <span className="pill-dot" />
                      <span>React 19 Ecosystem</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
