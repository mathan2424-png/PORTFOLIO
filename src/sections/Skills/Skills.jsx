import React, { useState } from 'react';
import {
  Monitor,
  Server,
  Database,
  Code2,
  Wrench,
  ArrowRight,
  ChevronUp,
  Sparkles,
  Terminal,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import {
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  ReactIcon,
  ViteIcon,
  NodeIcon,
  ExpressIcon,
  RestApiIcon,
  MongoDbIcon,
  PythonIcon,
  CIcon,
  GitIcon,
  GitHubIcon,
  VsCodeIcon,
  PostmanIcon,
  VercelIcon
} from './TechIcons';
import './Skills.css';

const categoryData = {
  frontend: {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Build beautiful and responsive user interfaces',
    icon: Monitor,
    theme: 'blue',
    technologies: [
      { name: 'HTML5', icon: HtmlIcon, role: 'Semantic markup & accessibility standards' },
      { name: 'CSS3', icon: CssIcon, role: 'Modern CSS Grid, Flexbox & clamp scales' },
      { name: 'JavaScript', icon: JavaScriptIcon, role: 'ES6+ syntax, asynchronous promises & DOM' },
      { name: 'React.js', icon: ReactIcon, role: 'Component architecture, custom hooks & virtual DOM' },
      { name: 'Vite', icon: ViteIcon, role: 'Instant Hot Module Replacement & Rollup bundling' }
    ],
    insight: 'React + Vite gives a fast development experience with superior performance and a simple setup.',
    insightIcon: Sparkles
  },

  backend: {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'Powering the application logic and APIs',
    icon: Server,
    theme: 'green',
    technologies: [
      { name: 'Node.js', icon: NodeIcon, role: 'Non-blocking event loop & runtime services' },
      { name: 'Express.js', icon: ExpressIcon, role: 'REST route controllers & middleware pipelines' },
      { name: 'REST APIs', icon: RestApiIcon, role: 'Stateless HTTP design, status codes & JSON serialization' }
    ],
    insight: 'Building secure and scalable APIs with Node.js and Express.js following REST principles.',
    insightIcon: Terminal
  },

  database: {
    id: 'database',
    title: 'Database',
    subtitle: 'Store and manage data efficiently',
    icon: Database,
    theme: 'cyan',
    technologies: [
      { name: 'MongoDB', icon: MongoDbIcon, role: 'NoSQL document modeling, indexing & aggregation pipelines' }
    ],
    insight: 'Using MongoDB for flexible, scalable and easy data management.',
    insightIcon: CheckCircle2
  },

  programming: {
    id: 'programming',
    title: 'Programming Languages',
    subtitle: 'Write clean and efficient code',
    icon: Code2,
    theme: 'indigo',
    technologies: [
      { name: 'JavaScript', icon: JavaScriptIcon, role: 'Core scripting engine across browser and server' },
      { name: 'Python', icon: PythonIcon, role: 'Algorithmic problem solving & backend automation scripts' },
      { name: 'C', icon: CIcon, role: 'Procedural systems programming & memory pointer optimization' }
    ],
    insight: 'From web development to problem solving, these languages help me build and understand better.',
    insightIcon: Terminal
  },

  tools: {
    id: 'tools',
    title: 'Tools & Version Control',
    subtitle: 'Work smarter, not harder',
    icon: Wrench,
    theme: 'purple',
    technologies: [
      { name: 'Git', icon: GitIcon, role: 'Distributed version control & branching strategies' },
      { name: 'GitHub', icon: GitHubIcon, role: 'Remote repositories, pull requests & code review' },
      { name: 'VS Code', icon: VsCodeIcon, role: 'Primary developer IDE, debugging & workspace configs' },
      { name: 'Postman', icon: PostmanIcon, role: 'REST endpoint testing & request inspection' },
      { name: 'Vercel', icon: VercelIcon, role: 'Continuous deployment (CD) & global edge routing' }
    ],
    insight: 'These tools help me collaborate, test, debug and deploy with ease.',
    insightIcon: ShieldCheck
  }
};

export default function Skills() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleDetails = (id) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  const renderCard = (catKey, customClass = '') => {
    const cat = categoryData[catKey];
    const HeaderIcon = cat.icon;
    const InsightIcon = cat.insightIcon;
    const isExpanded = expandedCard === cat.id;

    return (
      <div key={cat.id} className={`stack-cat-card stack-theme-${cat.theme} ${customClass}`}>
        {/* Card Header */}
        <div className="stack-cat-header">
          <div className="stack-cat-header-left">
            <div className={`stack-cat-icon-box box-${cat.theme}`} aria-hidden="true">
              <HeaderIcon size={22} />
            </div>
            <div className="stack-cat-titles">
              <h3 className="stack-cat-title">{cat.title}</h3>
              <span className="stack-cat-subtitle">{cat.subtitle}</span>
            </div>
          </div>

          <button
            type="button"
            className="stack-cat-action-btn"
            onClick={() => toggleDetails(cat.id)}
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? 'Hide' : 'View'} details for ${cat.title}`}
          >
            <span>{isExpanded ? 'Hide details' : 'View details'}</span>
            {isExpanded ? (
              <ChevronUp size={14} className="action-arrow" />
            ) : (
              <ArrowRight size={14} className="action-arrow" />
            )}
          </button>
        </div>

        {/* Technology Icons Shelf (Horizontally Aligned Mini Cards) */}
        <div className="stack-tech-shelf">
          <div className={`stack-tech-items-grid grid-${cat.id}`}>
            {cat.technologies.map((tech) => {
              const TechIconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="tech-mini-card"
                  tabIndex={0}
                  role="article"
                  aria-label={`${tech.name}: ${tech.role}`}
                >
                  <div className="tech-mini-icon-wrap">
                    <TechIconComponent size={34} />
                  </div>
                  <span className="tech-mini-name">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expandable Technical Implementation Drawer */}
        <div className={`stack-details-drawer ${isExpanded ? 'is-open' : ''}`}>
          <div className="stack-details-inner">
            <h4 className="details-drawer-heading">Implementation Breakdown</h4>
            <ul className="details-list">
              {cat.technologies.map((tech) => (
                <li key={tech.name} className="details-list-item">
                  <strong className="details-tech-name">{tech.name}:</strong>
                  <span className="details-tech-role">{tech.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Insight Callout Banner */}
        <div className={`stack-cat-insight insight-${cat.theme}`}>
          <InsightIcon size={16} className="insight-icon" aria-hidden="true" />
          <span className="insight-text">{cat.insight}</span>
        </div>
      </div>
    );
  };

  return (
    <section id="stack" className="section stack-section" aria-label="My Engineering Stack">
      <div className="container stack-container">
        {/* Section Header */}
        <div className="stack-header-block">
          <div className="stack-eyebrow-pill">
            <span className="stack-eyebrow-dot" aria-hidden="true" />
            <span className="stack-eyebrow-text">TECHNICAL CAPABILITIES</span>
          </div>

          <h2 className="stack-heading">
            MY ENGINEERING <span className="stack-heading-accent">STACK.</span>
          </h2>

          <p className="stack-subline">
            Technologies and toolchains I work with across client-side interfaces, server APIs, and persistent database architectures.
          </p>
        </div>

        {/* Category Cards Layout matching reference UI */}
        <div className="stack-cards-wrapper">
          {/* Top Row: Frontend Development & Backend Development (2 Columns) */}
          <div className="stack-cards-row stack-cards-row-top">
            {renderCard('frontend', 'card-frontend')}
            {renderCard('backend', 'card-backend')}
          </div>

          {/* Bottom Row: Database, Programming Languages & Tools (3 Columns) */}
          <div className="stack-cards-row stack-cards-row-bottom">
            {renderCard('database', 'card-database')}
            {renderCard('programming', 'card-programming')}
            {renderCard('tools', 'card-tools')}
          </div>
        </div>
      </div>
    </section>
  );
}
