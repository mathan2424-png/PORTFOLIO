import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Button from '../Button/Button';
import './Navbar.css';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Stack', href: '#stack' },
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar({ isScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'what-i-build', 'stack', 'work', 'experience', 'contact'];
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          const mappedSection = sections[i] === 'what-i-build' ? 'about' : sections[i];
          setActiveSection(mappedSection);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Lock body scroll on mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Floating Pill Glass Nav Container */}
        <div className="navbar-pill-wrapper">
          {/* Left: Brand Identity */}
          <a
            href="#home"
            className="navbar-brand"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            aria-label="M. Mathan Kumar Homepage"
          >
            <span className="brand-monogram">MK</span>
            <div className="brand-text-col">
              <span className="brand-name">M. Mathan Kumar</span>
              <span className="brand-role">MERN Stack Developer</span>
            </div>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="navbar-desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <li key={item.name} className="nav-item">
                    <a
                      href={item.href}
                      className={`nav-link ${isActive ? 'is-active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.href);
                      }}
                    >
                      {item.name}
                      {isActive && <span className="nav-active-pill" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: CTA & Mobile Toggle */}
          <div className="navbar-actions">
            <div className="nav-cta-desktop">
              <Button
                href="#contact"
                variant="accent"
                size="sm"
                icon={ArrowUpRight}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                ariaLabel="Contact M. Mathan Kumar"
              >
                Let’s Talk →
              </Button>
            </div>

            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Floating Glass Mobile Navigation Menu */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-menu-eyebrow">NAVIGATION</div>
          <ul className="mobile-nav-list">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.name} className="mobile-nav-item">
                <a
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                >
                  <span className="mobile-link-num">0{index + 1}</span>
                  <span className="mobile-link-text">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-bottom">
            <Button
              href="#contact"
              variant="accent"
              size="lg"
              icon={ArrowUpRight}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="w-full-btn"
            >
              Let’s Talk →
            </Button>

            <div className="mobile-presence-tag">
              <span className="presence-dot" />
              <span>Open to MERN Stack Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
