import React from 'react';
import { UserCheck, Compass, Layers, ArrowUpRight } from 'lucide-react';
import Button from '../../components/Button/Button';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        {/* Master Clean Glass Container */}
        <div className="about-card">
          
          {/* Header & Narrative Block */}
          <div className="about-header-block">
            {/* Small Label */}
            <div className="about-eyebrow-pill">
              <span className="about-eyebrow-dot" aria-hidden="true" />
              <span className="about-eyebrow-text">A LITTLE ABOUT ME</span>
            </div>

            {/* Main Heading */}
            <h2 className="about-heading">
              Turning Ideas Into <span className="about-heading-accent">Practical Web Solutions.</span>
            </h2>

            {/* Natural Introduction Narrative */}
            <div className="about-intro-text">
              <p>
                I am a <strong>MERN Stack Developer</strong> based in Chennai, focused on building clean, reliable, and user-friendly web applications. I bridge intuitive React user interfaces with structured Node.js backends and resilient MongoDB databases to deliver software that solves actual operational needs.
              </p>
              <p>
                Rather than treating frontend and backend as separate silos, I engineer end-to-end features with attention to responsive layouts, authenticated API endpoints, role-based access permissions, and efficient data modeling. My goal is always to deliver software that is straightforward to use, easy to maintain, and ready for production deployment.
              </p>
            </div>
          </div>

          {/* Three Compact Information Cards: Role, Development Focus, Tech Stack */}
          <div className="about-cards-grid">
            {/* Card 1: Role */}
            <div className="about-info-card">
              <div className="info-card-header">
                <div className="info-card-icon-box">
                  <UserCheck size={20} className="info-icon" />
                </div>
                <span className="info-card-tag">ROLE</span>
              </div>
              <h3 className="info-card-title">Full-Stack MERN Developer</h3>
              <p className="info-card-desc">
                Engineering complete web solutions from interactive frontend components to backend server controllers and database schemas.
              </p>
              <div className="info-card-pills">
                <span className="info-pill">Frontend UI</span>
                <span className="info-pill">REST APIs</span>
                <span className="info-pill">Database Modeling</span>
              </div>
            </div>

            {/* Card 2: Development Focus */}
            <div className="about-info-card">
              <div className="info-card-header">
                <div className="info-card-icon-box">
                  <Compass size={20} className="info-icon" />
                </div>
                <span className="info-card-tag">FOCUS</span>
              </div>
              <h3 className="info-card-title">Development Focus</h3>
              <p className="info-card-desc">
                Building responsive web platforms, practical enterprise admin portals, multi-role dashboards, and clean authenticated workflows.
              </p>
              <div className="info-card-pills">
                <span className="info-pill">Admin Dashboards</span>
                <span className="info-pill">SaaS Applications</span>
                <span className="info-pill">Responsive Design</span>
              </div>
            </div>

            {/* Card 3: Tech Stack */}
            <div className="about-info-card">
              <div className="info-card-header">
                <div className="info-card-icon-box">
                  <Layers size={20} className="info-icon" />
                </div>
                <span className="info-card-tag">TECH STACK</span>
              </div>
              <h3 className="info-card-title">Core Technologies</h3>
              <p className="info-card-desc">
                Leveraging the JavaScript ecosystem with modern tools to deliver fast, modular, and maintainable production codebases.
              </p>
              <div className="info-card-pills">
                <span className="info-pill">React.js</span>
                <span className="info-pill">Node.js</span>
                <span className="info-pill">Express</span>
                <span className="info-pill">MongoDB</span>
                <span className="info-pill">JavaScript (ES6+)</span>
                <span className="info-pill">REST APIs</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="about-footer-strip">
            <span className="about-footer-text">
              Interested in collaborating or discussing a project?
            </span>
            <div className="about-footer-actions">
              <Button
                href="#projects"
                variant="accent"
                size="sm"
                icon={ArrowUpRight}
                ariaLabel="View Projects"
              >
                View Projects
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="sm"
                ariaLabel="Get in Touch"
              >
                Get in Touch
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
