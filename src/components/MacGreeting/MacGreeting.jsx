import React, { useState, useEffect, useRef } from 'react';
import './MacGreeting.css';

// Continuous, unified Apple "hello" single vector path
const STEM_PART = "M-109.06069946289062,95.92639923095703 C1.9544999599456787,157.6403045654297 103.11389923095703,236.9969940185547 217.881103515625,372.07550048828125 C296,464.2846984863281 337.9999084472656,569.5725708007812 340,642.1939697265625 C341,696.1920166015625 314.6702880859375,737.156005859375 266,737.156005859375 C212,737.156005859375 178,696.1920166015625 157,602.1610107421875 C134,498.82000732421875 117,380.239990234375 74,0";
const BODY_PART = "78.21453094482422,37.160953521728516 C100.22924041748047,230.68260192871094 184,372 291,372 C355,372 395.6745910644531,321 384.1253967285156,248 C377.6238098144531,205 370.0873107910156,161 361.3063049316406,110 C351.0714111328125,46 380.3254089355469,-4 468.96173095703125,-4 C598.2246704101562,-4 739.2435302734375,67.83381652832031 811.4124145507812,179.0941619873047 C836,217 846,251 847,284 C848,344 814,389 754,389 C678,389 620,303 620,193 C620,75 684,-8 819.9180908203125,-8 C1004.7244873046875,-8 1209.4246826171875,213.84754943847656 1303.4808349609375,461.42327880859375 C1330.037353515625,531.3258056640625 1340,596.2349243164062 1340,641.593994140625 C1340,695.3764038085938 1323,736.673583984375 1275,736.673583984375 C1228,736.673583984375 1197,700.1784057617188 1169,642.5543823242188 C1136.1939697265625,575.7216186523438 1111.927734375,479.32598876953125 1102,370.3599853515625 C1077,96.94000244140625 1133,-4 1266.152099609375,-4 C1427.6083984375,-4 1607.1151123046875,220.92921447753906 1698.771728515625,462.18878173828125 C1725.037353515625,531.3258056640625 1735,596.2349243164062 1735,641.593994140625 C1735,695.3764038085938 1718,736.673583984375 1670,736.673583984375 C1623,736.673583984375 1592,700.1784057617188 1564,642.5543823242188 C1531.1939697265625,575.7216186523438 1506.927734375,479.32598876953125 1497,370.3599853515625 C1472,96.94000244140625 1528,-4 1646.906005859375,-4 C1765.623779296875,-4 1830.114990234375,99.48485565185547 1868.77880859375,209.3712158203125 C1907,318 1954,385 2052,385 C2133,385 2197,325 2197,212 C2197,87 2115.90087890625,-7 2013.41845703125,-8 C1923.234130859375,-9 1864,64 1870,174 C1877,296 1951,385 2048,385 C2104,385 2151.03564453125,360.1071472167969 2188,333 C2288.21435546875,259.8928527832031 2365.4287109375,305.0714416503906 2395,377.3571472167969";

// Unbroken, single continuous stroke from 'h' to 'o'
const HELLO_UNBROKEN_PATH = `${STEM_PART} L${BODY_PART}`;

export default function MacGreeting({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissing, setIsDismissing] = useState(false);
  const pathRef = useRef(null);

  // Measure exact SVG path length and start hardware-accelerated draw
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    // Get exact subpixel length from browser geometry engine
    const pathLength = Math.ceil(path.getTotalLength());
    
    // Set exact stroke-dasharray and initial offset (eliminates any dead start delay)
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;
    path.style.setProperty('--hello-path-length', `${pathLength}`);

    // Force style flush before triggering CSS animation
    void path.getBoundingClientRect();

    // Trigger smooth, 60fps single-stroke animation
    path.classList.add('animate-draw');

    // Auto-transition into portfolio after handwriting finishes (~2.2s) + comfortable hold (~1.4s)
    const autoDismissTimer = setTimeout(() => {
      handleDismiss();
    }, 3600);

    return () => clearTimeout(autoDismissTimer);
  }, []);

  const handleDismiss = () => {
    if (isDismissing) return;
    setIsDismissing(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 500); // 500ms smooth dissolve
  };

  // Click anywhere or press any key to enter immediately
  useEffect(() => {
    const handleKeyDown = () => handleDismiss();
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll while splash screen is active
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`mac-greeting-backdrop ${isDismissing ? 'is-dismissing' : ''}`}
      onClick={handleDismiss}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome"
    >
      {/* Center Stage: ONLY the thin, unbroken Apple "hello" handwriting */}
      <div className="mac-pure-hello-stage">
        <svg
          className="mac-apple-hello-svg"
          viewBox="-120 -20 2540 770"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Apple Hello"
        >
          <defs>
            <linearGradient id="appleMacWriteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="30%" stopColor="#2563EB" />
              <stop offset="70%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
          </defs>

          <g transform="scale(1, -1) translate(0, -728.156)">
            {/* Single, continuous Apple handwriting path with balanced medium weight */}
            <path
              ref={pathRef}
              d={HELLO_UNBROKEN_PATH}
              className="apple-hello-unbroken-stroke"
              stroke="url(#appleMacWriteGradient)"
              strokeWidth="30"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
