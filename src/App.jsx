import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import WhatIBuild from './sections/WhatIBuild/WhatIBuild';
import Skills from './sections/Skills/Skills';
import Architecture from './sections/Architecture/Architecture';
import Projects from './sections/Projects/Projects';
import MoreWork from './sections/MoreWork/MoreWork';
import Experience from './sections/Experience/Experience';
import Process from './sections/Process/Process';
import CodeSection from './sections/Code/Code';
import Capabilities from './sections/Capabilities/Capabilities';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useScrollProgress } from './hooks/useScrollProgress';
import './App.css';

export default function App() {
  const { scrollProgress, isScrolled } = useScrollProgress();

  return (
    <div className="portfolio-app">
      {/* Atmospheric Ambient Canvas Layer (Fluid 3D Glass Wallpaper + Refraction Overlay) */}
      <div className="atmospheric-canvas-bg" aria-hidden="true">
        <div className="canvas-bg-image" />
        <div className="canvas-bg-overlay" />
        <div className="canvas-blob canvas-blob-1" />
        <div className="canvas-blob canvas-blob-2" />
        <div className="canvas-blob canvas-blob-3" />
        <div className="canvas-grid-overlay" />
      </div>


      {/* Top Reading Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Reading progress"
      />

      {/* Floating Pill Glass Navbar */}
      <Navbar isScrolled={isScrolled} />

      {/* Main Art-Directed Content Flow */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 4. What I Build (4 Layered Product Blocks) */}
        <WhatIBuild />

        {/* 5. Engineering Stack & Technology Strip */}
        <Skills />

        {/* 6. Full-Stack Architecture Pipeline */}
        <Architecture />

        {/* 7. Featured Real-World Products & Platforms */}
        <Projects />

        {/* 8. More Client Work Rows */}
        <MoreWork />

        {/* 9. Professional Experience Timeline */}
        <Experience />

        {/* 10. How I Build Web Products */}
        <Process />

        {/* 11. Built With Code (Dark Contrast Section) */}
        <CodeSection />

        {/* 12. Capabilities (What I Bring) */}
        <Capabilities />

        {/* 13. Large Glass Contact Section */}
        <Contact />
      </main>

      {/* 14. Minimal Glass Footer */}
      <Footer />
    </div>
  );
}
