import React from 'react';
import { ArrowUp } from 'lucide-react';
import './ScrollToTop.css';

export default function ScrollToTop({ isScrolled }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top-btn ${isScrolled ? 'is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
    >
      <ArrowUp size={18} />
    </button>
  );
}
