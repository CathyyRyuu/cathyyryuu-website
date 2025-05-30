"use client";
import React from "react";

type RingProgressProps = {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
};

const RingProgress: React.FC<RingProgressProps> = ({
  percentage,
  size = 100,
  strokeWidth = 10,
  label,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <defs>
        <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>

      {/* Background Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#334155" // Tailwind slate-700
        strokeWidth={strokeWidth}
        fill="transparent"
      />

      {/* Progress Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="url(#gradientStroke)"
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />

      {/* Center Text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        transform="rotate(90, 50, 50)"
        style={{
          fill: 'white',
          fontSize: '1.3rem', 
          fontWeight: 400,
        }}
      >
        {label}
      </text>
    </svg>
  );
};

export default RingProgress;
