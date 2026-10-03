import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import './SkillGroup.css';

export default function SkillGroup({ group }) {
  const { number, category, subtitle, skills } = group;
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="skill-group-card">
      <div className="skill-group-header">
        <span className="skill-group-number">{number}</span>
        <div className="skill-group-titles">
          <h3 className="skill-group-category">{category}</h3>
          <span className="skill-group-subtitle">{subtitle}</span>
        </div>
      </div>

      <ul className="skill-items-list" role="list">
        {skills.map((skill, index) => {
          const isHovered = activeSkill === skill.name;
          return (
            <li
              key={index}
              className={`skill-item-row ${isHovered ? 'is-expanded' : ''}`}
              onMouseEnter={() => setActiveSkill(skill.name)}
              onMouseLeave={() => setActiveSkill(null)}
              onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
              tabIndex={0}
              role="button"
              aria-expanded={isHovered}
              aria-label={`${skill.name}: ${skill.desc}`}
            >
              <div className="skill-item-header">
                <span className="skill-name">{skill.name}</span>
                <ChevronRight size={14} className="skill-chevron-icon" />
              </div>
              
              <div className="skill-desc-reveal">
                <p className="skill-desc-text">{skill.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
