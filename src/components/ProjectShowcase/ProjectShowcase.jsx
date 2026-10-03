import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../Icons';
import Button from '../Button/Button';
import './ProjectShowcase.css';

export default function ProjectShowcase({ project, index }) {
  const {
    id,
    number,
    title,
    categoryTag,
    subtitle,
    summary,
    image,
    imageAlt,
    layoutStyle,
    theme,
    features,
    technologies,
    details,
    liveUrl,
    codeUrl
  } = project;

  const isEven = index % 2 === 1;

  return (
    <article 
      className={`project-showcase-item layout-${layoutStyle} theme-${theme} ${isEven ? 'is-reversed' : ''}`}
      id={`project-${id}`}
    >
      {/* Editorial Number & Category Header Strip */}
      <div className="showcase-top-strip">
        <div className="showcase-index">
          <span className="index-number">{number}</span>
          <span className="index-divider">/</span>
          <span className="index-category">{categoryTag}</span>
        </div>
        <div className="showcase-tech-summary">
          {technologies.slice(0, 3).map((t) => (
            <span key={t} className="tech-summary-pill">{t}</span>
          ))}
        </div>
      </div>

      {/* Main Grid: Content + Large Browser Showcase */}
      <div className="showcase-grid">
        {/* Information & Architecture Column */}
        <div className="showcase-narrative">
          <div className="showcase-heading-group">
            <h3 className="showcase-title">{title}</h3>
            <h4 className="showcase-subtitle">{subtitle}</h4>
          </div>

          <p className="showcase-summary">{summary}</p>

          {/* Business & Engineering Context */}
          {details && (
            <div className="showcase-context-box">
              <div className="context-block">
                <span className="context-label">The Challenge</span>
                <p className="context-text">{details.clientNeed}</p>
              </div>
              <div className="context-block">
                <span className="context-label">Engineering Execution</span>
                <p className="context-text">{details.engineeringSolution}</p>
              </div>
            </div>
          )}

          {/* Key Feature Architecture Highlights */}
          <div className="showcase-features-section">
            <span className="features-headline">Core Platform Architecture:</span>
            <div className="features-tags-cloud">
              {features.map((feature, i) => (
                <span key={i} className="feature-chip">
                  <span className="feature-chip-dot" />
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Full Technology Stack */}
          <div className="showcase-stack-row">
            <span className="stack-label">Stack:</span>
            <div className="stack-pills">
              {technologies.map((tech) => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="showcase-actions-bar">
            {liveUrl && liveUrl !== '#' ? (
              <Button
                href={liveUrl}
                target="_blank"
                variant="accent"
                size="md"
                icon={ExternalLink}
                ariaLabel={`View live project for ${title}`}
              >
                Live Project
              </Button>
            ) : (
              <Button
                href="#contact"
                variant="primary"
                size="md"
                icon={ArrowUpRight}
                ariaLabel={`Request a live walkthrough for ${title}`}
              >
                Walkthrough Demo
              </Button>
            )}

            {codeUrl && (
              <Button
                href={codeUrl}
                target="_blank"
                variant="outline"
                size="md"
                icon={GithubIcon}
                ariaLabel={`View source code for ${title} on GitHub`}
              >
                View Code
              </Button>
            )}
          </div>
        </div>

        {/* Browser Visual Showcase (Occupies majority of viewport) */}
        <div className="showcase-visual-wrapper">
          <div 
            className="browser-mockup-frame" 
            data-cursor="view"
            role="figure"
            aria-label={`${title} application preview`}
          >
            {/* Realistic Browser Header Bar */}
            <div className="browser-header-bar">
              <div className="browser-window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="browser-address-field">
                <span className="browser-lock-icon">🔒</span>
                <span className="browser-address-text">
                  {id === 'serviq' && 'https://app.serviq.io/admin/restaurants'}
                  {id === 'networth-admin' && 'https://admin.nexusflow.io/access-control'}
                  {id === 'pricouture' && 'https://pricouture.com/collections/autumn-atelier'}
                  {id === 'the-property-guardian' && 'https://the-property-guardian.netlify.app'}
                </span>
              </div>
              <div className="browser-status-chip">
                {id === 'serviq' && <span className="status-live-pill">LIVE SAAS</span>}
                {id === 'networth-admin' && <span className="status-live-pill status-rbac">RBAC CONSOLE</span>}
                {id === 'pricouture' && <span className="status-live-pill status-boutique">BOUTIQUE STORE</span>}
                {id === 'the-property-guardian' && <span className="status-live-pill status-deployed">DEPLOYED</span>}
              </div>
            </div>

            {/* High-Resolution Screenshot Image with Hover Zoom */}
            <div className="browser-viewport-screen">
              <img 
                src={image} 
                alt={imageAlt} 
                className="showcase-screen-img"
                loading="lazy"
              />
              <div className="viewport-overlay-glare" />

              {/* Interactive Floating Badge (art directed) */}
              <div className="floating-tech-badge">
                <span className="pulse-ping" />
                <span className="badge-text">
                  {id === 'serviq' && 'Multi-Tenant Architecture'}
                  {id === 'networth-admin' && 'Role-Based Access Control'}
                  {id === 'pricouture' && 'Responsive React Catalog'}
                  {id === 'the-property-guardian' && 'High-Trust NRI Verification'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
