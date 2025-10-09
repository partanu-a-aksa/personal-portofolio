"use client";

import React from "react";

const SlidingWords: React.FC = () => {
  const words = [
    "#Scientist",
    "#Engineer",
    "#Programmer",
    "#Fullstack Web Developer",
    "#Businessman",
    "#Video Game Enthusiast",
  ];

  const allWords = [...words, ...words.map((word) => word + "  ")];

  return (
    <div className="w-1/2 overflow-hidden bg-transparent">
      {" "}
      <style>
        {`
          @keyframes slideX {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-slideX {
            display: flex;
            width: max-content;
            animation: slideX 20s linear infinite;
          }
          .inline {
            display: inline-block;
          }
        `}
      </style>
      <div className="animate-slideX">
        {allWords.map((word, idx) => (
          <span
            key={idx}
            className="inline"
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#1f2937",
              whiteSpace: "nowrap",
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
