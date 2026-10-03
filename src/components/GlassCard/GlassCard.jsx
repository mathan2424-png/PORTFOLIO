import React from 'react';
import './GlassCard.css';

export default function GlassCard({
  children,
  className = '',
  variant = 'default', // 'default' | 'elevated' | 'subtle' | 'accent'
  interactive = false,
  onClick,
  ...props
}) {
  const classes = `glass-card glass-card-${variant} ${interactive ? 'is-interactive' : ''} ${className}`.trim();

  return (
    <div className={classes} onClick={onClick} {...props}>
      <div className="glass-card-inner">
        {children}
      </div>
      <div className="glass-card-highlight" aria-hidden="true" />
    </div>
  );
}
