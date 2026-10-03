import React from 'react';
import { ArrowUp } from 'lucide-react';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-monogram">MK</span>
            <div>
              <h2 className="footer-name">M. Mathan Kumar</h2>
              <p className="footer-role">MERN Stack Developer</p>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer Quick Navigation">
            <ul className="footer-links-list">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#stack" className="footer-link">Stack</a></li>
              <li><a href="#work" className="footer-link">Work</a></li>
              <li><a href="#experience" className="footer-link">Experience</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </nav>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span className="back-to-top-text">Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom-row">
          <div className="footer-social-wrapper">
            <SocialLinks variant="subtle" showLabels={true} />
          </div>

          <div className="footer-meta">
            <span className="footer-location">Based in Chennai, India</span>
            <span className="footer-copyright">© 2026 M. Mathan Kumar. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
