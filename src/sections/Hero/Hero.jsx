import React, { useState, useEffect, useMemo } from 'react';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import mathanPhoto from '../../assets/images/mathan_profile.jpg';
import './Hero.css';

export default function Hero() {
  // Default typing phrases from the original ProfileBanner
  const phrases = useMemo(() => [
    "Hello, I'm Mathankumar M",
    "Full-Stack MERN Developer",
  ], []);

  // Initialize with the full greeting so it displays immediately on load
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("Hello, I'm Mathankumar M");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex] || phrases[0];
    let timer;

    if (!isDeleting && displayedText === currentPhrase) {
      // Pause to let user read the complete phrase
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && displayedText === '') {
      // Word is fully deleted: brief pause, then advance to next phrase
      timer = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 400);
    } else if (isDeleting) {
      // Deleting characters one by one
      timer = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
      }, 35);
    } else {
      // Typing characters one by one
      timer = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
      }, 70);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex, phrases]);

  return (
    <section id="home" className="section hero-section">
      <div className="container hero-container">
        {/* Left Column: Eyebrow, Typewriter Headline, Tagline, Meta & CTA Buttons */}
        <div className="hero-content-col">
          {/* Eyebrow & Status Row */}
          <div className="hero-eyebrow-row">
            <span className="hero-eyebrow-text">SOFTWARE DEVELOPER</span>
            <div className="hero-status-pill">
              <span className="hero-status-dot" />
              <span className="hero-status-label">MERN STACK</span>
            </div>
          </div>

          {/* Dynamic Typewriter Heading (strictly non-wrapping) */}
          <div className="hero-headline-wrap">
            <h1 className="hero-headline" aria-label="Hello, I'm Mathankumar M - Full-Stack MERN Developer">
              <span className="hero-typewriter-text">{displayedText}</span>
              <span className="hero-typewriter-cursor" aria-hidden="true">|</span>
            </h1>
          </div>

          {/* Value Proposition Description */}
          <p className="hero-tagline">
            Full-Stack MERN Developer specializing in architecting scalable SaaS platforms, enterprise admin dashboards, and high-performance React web applications backed by robust Node.js APIs.
          </p>

          {/* Direct Contact & Location Meta */}
          <div className="hero-meta-row">
            <a 
              href="mailto:mathankumar2467@gmail.com" 
              className="hero-meta-item hero-meta-link"
              title="Send email to mathankumar2467@gmail.com"
            >
              <Mail size={16} className="hero-meta-icon" />
              <span>mathankumar2467@gmail.com</span>
            </a>

            <span className="hero-meta-divider" aria-hidden="true" />

            <div className="hero-meta-item">
              <MapPin size={16} className="hero-meta-icon" />
              <span>Chennai, India</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="hero-cta-group">
            <a 
              href="#projects" 
              className="hero-btn-primary"
              aria-label="View Projects"
            >
              <span>View Projects</span>
              <ArrowUpRight size={17} className="btn-arrow-icon" />
            </a>

            <a 
              href="#contact" 
              className="hero-btn-secondary"
              aria-label="Contact Me"
            >
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Right Column: Master Rounded Portrait Stage */}
        <div className="hero-visual-col">
          <div className="hero-photo-stage">
            {/* Ambient Floating Glass Accent Chips matching reference image */}
            <div className="hero-accent-chip chip-top-right" aria-hidden="true" />
            <div className="hero-accent-chip chip-mid-left" aria-hidden="true" />

            {/* Master Photo Card with Refined Glass Framing */}
            <div className="hero-photo-card">
              <img
                src={mathanPhoto}
                alt="M. Mathan Kumar - MERN Stack Developer"
                className="hero-photo-img"
                loading="eager"
              />
              <div className="hero-photo-glass-rim" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
