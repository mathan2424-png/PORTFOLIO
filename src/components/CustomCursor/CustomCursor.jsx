import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default'); // 'default', 'click', 'view', 'hidden'
  const [isTouchDevice] = useState(() => {
    return typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  });

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const projectTarget = target.closest('[data-cursor="view"]');
      const interactiveTarget = target.closest('button, a, input, select, textarea, [role="button"], [role="tab"], .interactive-node');

      if (projectTarget) {
        setCursorState('view');
      } else if (interactiveTarget) {
        setCursorState('click');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseLeave = () => setCursorState('hidden');
    const handleMouseEnter = () => setCursorState('default');

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouchDevice]);

  // Smooth lerp for trailing ring
  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, position.x, 0.2),
        y: lerp(prev.y, position.y, 0.2)
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || cursorState === 'hidden') {
    return null;
  }

  return (
    <>
      {/* Central dot */}
      <div
        className={`custom-cursor-dot ${cursorState}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`
        }}
      />

      {/* Trailing Ring with VIEW or CLICK text */}
      <div
        className={`custom-cursor-ring ${cursorState}`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`
        }}
      >
        {cursorState === 'view' && <span className="cursor-label">VIEW</span>}
        {cursorState === 'click' && <span className="cursor-label">CLICK</span>}
      </div>
    </>
  );
}
