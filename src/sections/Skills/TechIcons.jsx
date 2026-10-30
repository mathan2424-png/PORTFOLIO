import React from 'react';

/**
 * Authentic Technology Brand Icons with official brand colors and vector geometry.
 */

export function ReactIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={className} aria-label="React logo">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function JavaScriptIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="JavaScript logo">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M7.2 17.5c.7.9 1.6 1.4 2.8 1.4 1.5 0 2.4-.8 2.4-2.5V8.5H10.1v7.8c0 .7-.3 1.1-.9 1.1-.5 0-.8-.3-1.1-.7l-.9.8zm6.5-.3c.8.9 1.9 1.4 3.2 1.4 1.4 0 2.4-.7 2.4-1.8 0-1.2-.9-1.6-2.4-2.2-1.7-.8-2.9-1.6-2.9-3.4 0-1.8 1.4-3.2 3.5-3.2 1.3 0 2.3.4 3.1 1.3l-1.1 1.4c-.6-.6-1.3-1-2-1-.9 0-1.4.5-1.4 1.2 0 .9.7 1.3 2.1 1.8 1.9.8 3.2 1.7 3.2 3.6 0 2-1.6 3.3-3.8 3.3-1.7 0-3-.7-3.8-2l1.1-1.4z"
        fill="#000000"
      />
    </svg>
  );
}

export function HtmlIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="HTML5 logo">
      <path d="M3 2l1.9 18.2L12 22.5l7.1-2.3L21 2H3z" fill="#E44D26" />
      <path d="M12 3.8v16.9l5.5-1.8L19.1 3.8H12z" fill="#F16529" />
      <path d="M7 6.5h10l-.3 2.5H9.6l.2 2.2h6.8l-.7 7.3-3.9 1.1-3.9-1.1-.3-3.1h2.3l.1 1.6 1.8.5 1.8-.5.2-3.3H7.4L7 6.5z" fill="#FFFFFF" />
    </svg>
  );
}

export function CssIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="CSS3 logo">
      <path d="M3 2l1.9 18.2L12 22.5l7.1-2.3L21 2H3z" fill="#1572B6" />
      <path d="M12 3.8v16.9l5.5-1.8L19.1 3.8H12z" fill="#33A9DC" />
      <path d="M7 6.5h10l-.3 2.5h-7.1l.2 2.2h7l-.7 7.3-4.1 1.1-4.1-1.1-.3-3.1h2.4l.1 1.6 1.9.5 1.9-.5.3-3.4H9.6v-2.2h6.8l.2-2.5H7V6.5z" fill="#FFFFFF" />
    </svg>
  );
}

export function ViteIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="Vite logo">
      <defs>
        <linearGradient id="vite-grad-a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="vite-grad-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEA83" />
          <stop offset="15%" stopColor="#FFDD35" />
          <stop offset="100%" stopColor="#FFA800" />
        </linearGradient>
      </defs>
      <path
        d="M21.7 4.2L12.7 20.3C12.4 20.8 11.6 20.8 11.3 20.3L2.3 4.2C2 3.6 2.5 3 3.1 3.1L12 4.8L20.9 3.1C21.5 3 22 3.6 21.7 4.2Z"
        fill="url(#vite-grad-a)"
      />
      <path
        d="M14.4 2.8L8.6 12.3H12.3L10.2 20.5L16.8 10.3H13L15.3 2.8C15.4 2.4 14.8 2.3 14.4 2.8Z"
        fill="url(#vite-grad-b)"
      />
    </svg>
  );
}

export function NodeIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Node.js logo">
      <path
        d="M12 2.1l9.1 5.2v10.4L12 22.9l-9.1-5.2V7.3L12 2.1z"
        fill="#5FA04E"
      />
      <path
        d="M12 4.5l7 4v7l-7 4-7-4v-7l7-4z"
        fill="#339933"
        opacity="0.3"
      />
      <path
        d="M14.5 10.8c-.3-.2-.7-.3-1.1-.3-.6 0-.9.3-.9.6 0 .4.4.5 1 .7 1 .3 1.8.8 1.8 1.8 0 1.1-.9 1.8-2.2 1.8-.8 0-1.5-.3-2-.7l.6-.9c.4.3.9.5 1.4.5.6 0 1-.3 1-.7 0-.4-.4-.5-1-.7-.9-.3-1.8-.7-1.8-1.8 0-1 .8-1.7 2.1-1.7.7 0 1.3.2 1.7.5l-.6.9z"
        fill="#FFFFFF"
      />
      <circle cx="8.5" cy="12" r="1.2" fill="#FFFFFF" />
    </svg>
  );
}

export function ExpressIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Express.js logo">
      <rect width="24" height="24" rx="5" fill="#18181B" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800"
        fontSize="12.5"
        letterSpacing="-0.5px"
      >
        ex
      </text>
    </svg>
  );
}

export function RestApiIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-label="REST API icon">
      <rect x="2" y="3.5" width="20" height="17" rx="4" fill="#0284C7" />
      <path
        d="M6 9h3M6 12h5M6 15h3M15 9l3 3-3 3M18 12h-4"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MongoDbIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="MongoDB logo">
      <path
        d="M12 2C11.5 3.5 7 10 7 14.5c0 3.3 2.2 6.3 5 7.5 2.8-1.2 5-4.2 5-7.5C17 10 12.5 3.5 12 2z"
        fill="#47A248"
      />
      <path
        d="M12 2.5v19.4c2.6-1.2 4.5-4 4.5-7.4 0-4.4-4.2-10.7-4.5-12z"
        fill="#499D4A"
      />
      <path
        d="M11.9 21.8c-.1-1.3-.1-18.5 0-19.1.1.6.1 17.8 0 19.1z"
        fill="#FFFFFF"
        opacity="0.4"
      />
    </svg>
  );
}

export function PythonIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Python logo">
      <path
        d="M11.9 2c-3.1 0-5.1.7-5.1 2.7v2.1h5.2v.7H4.7c-2 0-3.7 1.4-3.7 3.4 0 2.2 1.3 3.5 3.5 3.5h1.5v-2.1c0-1.7 1.4-3.1 3.1-3.1h5.3c1.4 0 2.6-1.1 2.6-2.6V4.7C17 2.7 15 2 11.9 2zm-1.4 1.7a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z"
        fill="#3776AB"
      />
      <path
        d="M12.1 22c3.1 0 5.1-.7 5.1-2.7v-2.1h-5.2v-.7h7.3c2 0 3.7-1.4 3.7-3.4 0-2.2-1.3-3.5-3.5-3.5H18v2.1c0 1.7-1.4 3.1-3.1 3.1H9.6c-1.4 0-2.6 1.1-2.6 2.6v1.9c0 2 2 2.7 5.1 2.7zm1.4-1.7a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function CIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="C Language logo">
      <path
        d="M12 2L2.5 7.5v11L12 24l9.5-5.5v-11L12 2z"
        fill="#00599C"
      />
      <path
        d="M12 4.2l7.6 4.4v8.8L12 21.8l-7.6-4.4V8.6L12 4.2z"
        fill="#0B132B"
        opacity="0.35"
      />
      <path
        d="M15.4 8.7l-1.5 1.5c-.5-.5-1.1-.8-1.9-.8-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.4-.3 1.9-.8l1.5 1.5c-.9.9-2.1 1.4-3.4 1.4-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1c1.3 0 2.5.5 3.4 1.4z"
        fill="#659AD2"
      />
    </svg>
  );
}

export function GitIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Git logo">
      <path
        d="M22.6 10.7L13.3 1.4c-.6-.6-1.5-.6-2.1 0L9.3 3.3l2.7 2.7c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.6 2.6c.6-.2 1.3-.1 1.8.4.7.7.7 1.9 0 2.6s-1.9.7-2.6 0c-.5-.5-.6-1.3-.4-1.8L13 9.4v5.3c.2.1.4.3.5.5.7.7.7 1.9 0 2.6s-1.9.7-2.6 0-1.9-.7 0-2.6c.2-.2.5-.4.8-.5V9.3c-.3-.1-.6-.3-.8-.5-.5-.5-.6-1.3-.4-1.8L7.8 4.3 1.4 10.7c-.6.6-.6 1.5 0 2.1l9.3 9.3c.6.6 1.5.6 2.1 0l9.8-9.8c.6-.7.6-1.6 0-2.1z"
        fill="#F05032"
      />
      <circle cx="12" cy="18" r="1.5" fill="#FFFFFF" />
      <circle cx="12" cy="8" r="1.5" fill="#FFFFFF" />
      <circle cx="17" cy="12" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

export function GitHubIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#181717" className={className} aria-label="GitHub logo">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function VsCodeIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Visual Studio Code logo">
      <path
        fill="#0065A9"
        d="M17.6 2.1L12.5 6.9 7.4 3 2.8 5.2c-.5.2-.8.8-.8 1.3v11c0 .5.3 1.1.8 1.3l4.6 2.2 5.1-3.9 5.1 4.8c.4.4 1 .5 1.5.2l4-2.1c.5-.3.8-.8.8-1.3V5.3c0-.5-.3-1-.8-1.3l-4-2.1c-.5-.3-1.1-.2-1.6.2z"
      />
      <path
        fill="#007ACC"
        d="M17.5 2.1l-10 7.8L2.8 5.2c-.5-.2-.8-.2-.8.3v13c0 .5.3.5.8.3l4.7-4.7 10 7.8c.5.4 1.2.1 1.2-.5V2.6c0-.6-.7-.9-1.2-.5z"
      />
      <path
        fill="#1F9CF0"
        d="M17.5 2.1v19.8l4.5-2.4c.5-.3.8-.8.8-1.3V5.8c0-.5-.3-1-.8-1.3l-4.5-2.4z"
      />
      <path
        fill="#0065A9"
        d="M7.5 9.9l10-7.8v7.8l-6 4.7-4-4.7z"
      />
    </svg>
  );
}

export function PostmanIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Postman logo">
      <circle cx="12" cy="12" r="11" fill="#FF6C37" />
      <path
        d="M16.5 8.2c-.4-.5-1.1-.6-1.6-.2l-5.4 4.1-1.8-1.3c-.5-.4-1.2-.3-1.6.2s-.3 1.2.2 1.6l2.6 2c.2.2.5.3.8.3.3 0 .6-.1.8-.3l6.2-4.8c.5-.4.6-1.1.2-1.6z"
        fill="#FFFFFF"
      />
      <circle cx="16" cy="14" r="1.5" fill="#FFFFFF" />
      <circle cx="8" cy="8" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

export function VercelIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-label="Vercel logo">
      <rect width="24" height="24" rx="5" fill="#000000" />
      <path d="M12 5.5L19.5 18.5H4.5L12 5.5Z" fill="#FFFFFF" />
    </svg>
  );
}

