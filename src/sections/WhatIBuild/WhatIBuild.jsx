import React from 'react';
import { Layout, Layers, Server, Globe, ArrowUpRight } from 'lucide-react';
import { whatIBuild } from '../../data/experience';
import GlassCard from '../../components/GlassCard/GlassCard';
import './WhatIBuild.css';

const iconMap = {
  Layout: Layout,
  Layers: Layers,
  Server: Server,
  Globe: Globe
};

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="section what-i-build-section">
      <div className="container what-i-build-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow-badge">PRODUCT SPECIALIZATIONS</span>
          <h2 className="section-title-huge">
            WHAT I <span className="text-accent-highlight">BUILD.</span>
          </h2>
          <p className="section-subline">
            Focused on production-ready software solutions built with modular frontend architectures and robust backend foundations.
          </p>
        </div>

        {/* 4 Premium Layered Blocks */}
        <div className="what-i-build-grid">
          {whatIBuild.map((item) => {
            const Icon = iconMap[item.iconName] || Layout;
            return (
              <GlassCard
                key={item.number}
                className="build-block-card"
                interactive={true}
              >
                <div className="build-card-content">
                  <div className="build-card-top">
                    <span className="build-num">{item.number}</span>
                    <div className="build-icon-wrapper">
                      <Icon size={24} className="build-icon" />
                    </div>
                  </div>

                  <div className="build-card-body">
                    <h3 className="build-title">{item.title}</h3>
                    <span className="build-subtitle">{item.subtitle}</span>
                    <p className="build-desc">{item.description}</p>
                  </div>

                  <div className="build-card-footer">
                    <div className="build-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="build-tag-pill">{tag}</span>
                      ))}
                    </div>
                    <span className="build-arrow-indicator" aria-hidden="true">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
