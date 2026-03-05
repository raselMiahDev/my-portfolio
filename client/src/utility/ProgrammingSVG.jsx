import React from 'react';

const ProgrammingSVG = () => {
  return (
    <svg
      className="w-full h-full opacity-30 dark:opacity-20"
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background geometric pattern */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0.2" />
        </linearGradient>
        
        <pattern id="pattern1" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="2" fill="#3B82F6" fillOpacity="0.3" />
        </pattern>
      </defs>

      {/* Background rectangles */}
      <rect width="100%" height="100%" fill="url(#grad1)" />
      
      {/* Code brackets */}
      <g transform="translate(200, 200)" opacity="0.4">
        <text x="0" y="0" fontSize="120" fill="#3B82F6" fontWeight="bold">{'<'}</text>
        <text x="80" y="0" fontSize="120" fill="#8B5CF6" fontWeight="bold">{'>'}</text>
      </g>
      
      <g transform="translate(500, 500)" opacity="0.4">
        <text x="0" y="0" fontSize="120" fill="#8B5CF6" fontWeight="bold">{'</'}</text>
        <text x="100" y="0" fontSize="120" fill="#EC4899" fontWeight="bold">{'>'}</text>
      </g>

      {/* Curly braces */}
      <g transform="translate(600, 200)" opacity="0.3">
        <text x="0" y="0" fontSize="100" fill="#3B82F6">{'{'}</text>
        <text x="60" y="0" fontSize="100" fill="#8B5CF6">{'}'}</text>
      </g>

      {/* Code snippets */}
      <g transform="translate(150, 600)" opacity="0.3">
        <text x="0" y="0" fontSize="24" fill="#3B82F6" fontFamily="monospace">function() {'{}'}</text>
        <text x="0" y="40" fontSize="24" fill="#8B5CF6" fontFamily="monospace">console.log()</text>
        <text x="0" y="80" fontSize="24" fill="#EC4899" fontFamily="monospace">import React</text>
      </g>

      {/* Floating circles */}
      <circle cx="300" cy="150" r="40" fill="#3B82F6" fillOpacity="0.1" />
      <circle cx="500" cy="300" r="60" fill="#8B5CF6" fillOpacity="0.1" />
      <circle cx="200" cy="500" r="50" fill="#EC4899" fillOpacity="0.1" />
      <circle cx="650" cy="400" r="70" fill="#3B82F6" fillOpacity="0.1" />

      {/* Paths/Lines representing connections */}
      <path
        d="M200 200 Q 300 150, 400 200 T 600 250"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeOpacity="0.2"
        fill="none"
        strokeDasharray="5,5"
      />
      
      <path
        d="M150 400 Q 250 350, 350 400 T 550 450"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeOpacity="0.2"
        fill="none"
        strokeDasharray="5,5"
      />

      {/* Dots pattern */}
      <rect width="100%" height="100%" fill="url(#pattern1)" />
    </svg>
  );
};

export default ProgrammingSVG;