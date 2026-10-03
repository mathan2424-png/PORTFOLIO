import React, { useState, useMemo } from 'react';
import { projectCategories, featuredProjects } from '../../data/projects';
import ProjectFilter from '../../components/ProjectFilter/ProjectFilter';
import ProjectShowcase from '../../components/ProjectShowcase/ProjectShowcase';
import './Projects.css';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  // React state filtering with zero page reload
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return featuredProjects;
    }
    return featuredProjects.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <section id="work" className="section section-bg-subtle projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="projects-section-header">
          <div className="header-meta-group">
            <span className="eyebrow-badge">FLAGSHIP CASE STUDIES</span>
            <h2 className="section-title-huge">
              REAL-WORLD<br />
              PRODUCTS & PLATFORMS.
            </h2>
            <p className="section-subline">
              Selected work built around real business requirements. Each platform demonstrates full-stack architecture, clean component hierarchies, and practical client functionality.
            </p>
          </div>

          {/* Project Filter (React state driven) */}
          <ProjectFilter
            categories={projectCategories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* Editorial Showcases List */}
        <div className="showcases-feed">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectShowcase
                key={project.id}
                project={project}
                index={index}
              />
            ))
          ) : (
            <div className="empty-category-card">
              <p>No featured projects found under "{activeCategory}". Please select another category above.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
