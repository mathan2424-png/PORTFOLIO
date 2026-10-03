import React from 'react';
import './ProjectFilter.css';

export default function ProjectFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="project-filter-container" role="tablist" aria-label="Filter projects by category">
      <div className="project-filter-pills">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`filter-pill-btn ${isActive ? 'is-active' : ''}`}
              onClick={() => onSelectCategory(category)}
            >
              <span className="filter-pill-text">{category}</span>
              {isActive && <span className="filter-active-indicator" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
