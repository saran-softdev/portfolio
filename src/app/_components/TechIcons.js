// Inline SVG icon for each tech
function TechIcon({ name }) {
  const icons = {
    react: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
      </svg>
    ),
    next: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" fill="white" />
        <path d="M9 8v8l8-4.5L9 8z" fill="#0d0d0d" />
      </svg>
    ),
    node: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="#339933" opacity="0.9" />
        <path d="M12 2L3 7l9 5 9-5-9-5z" fill="#33cc33" opacity="0.6" />
      </svg>
    ),
    nest: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M7 6l5 3 5-3-5-3-5 3z" fill="#e0234e" />
        <path d="M7 6v6l5 3V9L7 6z" fill="#c4003d" />
        <path d="M17 6v6l-5 3V9l5-3z" fill="#e0234e" opacity="0.7" />
      </svg>
    ),
    mongo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M12 2C12 2 8 8 8 13a4 4 0 008 0c0-5-4-11-4-11z" fill="#47a248" />
        <path d="M12 13v7" stroke="#47a248" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tailwind: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M12 6c-2.5 0-4 1.25-4.5 3.75C8.5 7.5 9.5 6.75 11 7c.75.1 1.3.65 1.9 1.25C13.85 9.25 14.75 10 16.5 10c2.5 0 4-1.25 4.5-3.75-.5 2.25-1.5 3-3 2.75-.75-.1-1.3-.65-1.9-1.25C15.15 6.75 14.25 6 12.5 6H12zM7.5 12c-2.5 0-4 1.25-4.5 3.75.5-2.25 1.5-3 3-2.75.75.1 1.3.65 1.9 1.25C8.85 15.25 9.75 16 11.5 16c2.5 0 4-1.25 4.5-3.75-.5 2.25-1.5 3-3 2.75-.75-.1-1.3-.65-1.9-1.25C10.65 12.75 9.75 12 8 12H7.5z" fill="#38bdf8" />
      </svg>
    ),
    js: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#f7df1e" />
        <path d="M7 17.5l1.5-1c.3.6.6.9 1.1.9.5 0 .8-.2.8-.9V12h2v5.5c0 1.8-1.1 2.5-2.7 2.5C8.4 20 7.5 19.2 7 17.5z" fill="#0d0d0d" />
        <path d="M14 17.3l1.5-.9c.4.7 1 1.1 1.8 1.1.8 0 1.2-.4 1.2-.9 0-.6-.5-.8-1.4-1.2l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.8 0-1.4 1.1-2.4 2.8-2.4 1.2 0 2.1.4 2.7 1.5l-1.5 1c-.3-.6-.7-.8-1.2-.8-.6 0-.9.3-.9.8 0 .5.3.7 1.2 1.1l.5.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.4 2.6-3.2 2.6-1.8 0-2.9-.9-3.2-2z" fill="#0d0d0d" />
      </svg>
    ),
    ts: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <rect width="24" height="24" rx="3" fill="#3178c6" />
        <path d="M5 12h5M7.5 9v9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 15.5c0 1 .8 1.5 1.8 1.5s1.7-.5 1.7-1.3c0-1-.9-1.2-1.7-1.5-.8-.3-1.8-.6-1.8-1.7C13 11.6 13.8 11 15 11c1 0 1.7.4 2 1.2" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  };
  return icons[name] || null;
}

export { TechIcon };
