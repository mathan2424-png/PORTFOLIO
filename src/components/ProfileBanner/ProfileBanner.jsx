import React, { useState, useEffect, useMemo } from 'react';
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import './ProfileBanner.css';

export default function ProfileBanner({
  eyebrow = 'SOFTWARE DEVELOPER',
  name = 'Mathankumar M',
  typingPhrases,
  tagline = 'Full-Stack MERN Developer specializing in architecting scalable SaaS platforms, enterprise admin dashboards, and high-performance React web applications backed by robust Node.js APIs.',
  email = 'm.mathan2424@gmail.com',
  phone = null,
  location = 'Chennai, India',
  avatarSrc = '/mathan_profile.jpg',
  avatarAlt = 'Mathankumar M - Full-Stack Software Developer',
  className = ''
}) {
  const [copiedKey, setCopiedKey] = useState(null);

  // Default typing phrases designed specifically for Mathankumar
  const phrases = useMemo(() => typingPhrases || [
    "Hello, I'm Mathankumar M",
    "Full-Stack MERN Developer",
   
  ], [typingPhrases]);

  // Smooth Typewriter State
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex] || phrases[0];
    let timer;

    if (!isDeleting && displayedText === currentPhrase) {
      // Word is fully typed: pause to let user read
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

  const handleCopy = (text, key, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => {
        setCopiedKey(null);
      }, 2000);
    }
  };

  return (
    <div className={`profile-banner-card ${className}`} id="profile-card">
      {/* Left Content Area */}
      <div className="profile-banner-left">
        {/* Eyebrow & Status */}
        <div className="profile-banner-eyebrow-row">
          <span className="profile-banner-eyebrow">{eyebrow}</span>
          <span className="profile-banner-status-badge">
            <span className="status-live-dot" />
            <span>MERN Stack</span>
          </span>
        </div>

        {/* Dynamic Typewriter Heading */}
        <div className="profile-banner-heading-wrap">
          <h2 className="profile-banner-name" aria-label={`Hello, I'm ${name}`}>
            <span className="typewriter-text">{displayedText}</span>
            <span className="typewriter-cursor" aria-hidden="true">|</span>
          </h2>
          {/* Hidden accessible text for SEO and Screen Readers */}
          <span className="sr-only">Hello, I'm Mathankumar M - Full-Stack MERN Developer</span>
        </div>

        {/* High-Impact Professional Value Proposition */}
        <p className="profile-banner-tagline">
          {tagline}
        </p>

        {/* 2x2 Contact Grid */}
        <div className="profile-banner-grid">
          {/* Email Item */}
          <div className="profile-info-item">
            <a 
              href={`mailto:${email}`} 
              className="profile-info-link"
              title={`Send email to ${email}`}
            >
              <div className="profile-icon-box">
                <Mail size={18} strokeWidth={2.2} />
              </div>
              <span className="profile-info-text">{email}</span>
            </a>
            <button
              type="button"
              className="profile-copy-btn"
              onClick={(e) => handleCopy(email, 'email', e)}
              aria-label="Copy email address"
              title="Copy email address"
            >
              {copiedKey === 'email' ? <Check size={14} className="copy-success" /> : <Copy size={13} />}
            </button>
          </div>

          {/* Phone Item (Optional) */}
          {phone && (
            <div className="profile-info-item">
              <a 
                href={`tel:${phone.replace(/\s+/g, '')}`} 
                className="profile-info-link"
                title={`Call ${phone}`}
              >
                <div className="profile-icon-box">
                  <Phone size={18} strokeWidth={2.2} />
                </div>
                <span className="profile-info-text">{phone}</span>
              </a>
              <button
                type="button"
                className="profile-copy-btn"
                onClick={(e) => handleCopy(phone, 'phone', e)}
                aria-label="Copy phone number"
                title="Copy phone number"
              >
                {copiedKey === 'phone' ? <Check size={14} className="copy-success" /> : <Copy size={13} />}
              </button>
            </div>
          )}

          {/* Location Item */}
          <div className="profile-info-item">
            <div className="profile-info-static">
              <div className="profile-icon-box">
                <MapPin size={18} strokeWidth={2.2} />
              </div>
              <span className="profile-info-text">{location}</span>
            </div>
          </div>
        </div>

        {/* Copy Feedback Toast */}
        {copiedKey && (
          <div className="profile-copied-toast" role="status" aria-live="polite">
            <Check size={14} />
            <span>Copied {copiedKey} to clipboard!</span>
          </div>
        )}
      </div>

      {/* Right Developer Portrait Area */}
      <div className="profile-banner-right">
        <div className="profile-portrait-wrap">
          {/* Subtle gradient vignette blend on the left edge */}
          <div className="profile-portrait-blend" aria-hidden="true" />
          
          <img
            src={avatarSrc}
            alt={avatarAlt}
            className="profile-portrait-img"
            loading="eager"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.nextElementSibling) {
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }
            }}
          />

          {/* Fallback Illustrated Card if image fails to load */}
          <div className="profile-portrait-fallback" style={{ display: 'none' }}>
            <div className="portrait-fallback-initials">MK</div>
            <span className="portrait-fallback-role">Full-Stack Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
