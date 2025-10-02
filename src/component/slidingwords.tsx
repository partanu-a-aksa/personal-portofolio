"use client";

import React from "react";

const SlidingWords: React.FC = () => {
  const words = [
    "#Engineer",
    "#Fullstack Web Developer",
    "#Javascript",
    "#Typescript",
    "#HTML",
    "#CSS",
    "#TailwindCSS",
    "#React.JS",
    "#Next.JS",
  ];

  const allWords = [...words, ...words.map((w) => w + "  ")];

  return (
    <div className="w-1/5 overflow-hidden bg-transparent">
      <style>
        {`
@keyframes slideX {
  0% { transform: translateX(0%); }
  20% { transform: translateX(-20%); }
  40% { transform: translateX(-40%); }
  60% { transform: translateX(-60%); }
  80% { transform: translateX(-80%); }
  100% { transform: translateX(-100%); }
}
  .animate-slideX {
  display: flex;
  width: max-content;
  animation: slideX 20s ease-in-out infinite;
}
.inline {
  display: inline-block;
}
`}
      </style>

      <div className="animate-slideX" style={{ display: "flex" }}>
        {allWords.map((word, idx) => (
          <span
            key={idx}
            className="inline"
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#1f2937",
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SlidingWords;
