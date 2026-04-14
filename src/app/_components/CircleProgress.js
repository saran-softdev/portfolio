"use client";

export default function CircleProgress({ value, label, size = 72 }) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Background arc */}
          <circle
            className="progress-ring-bg"
            cx={size / 2}
            cy={size / 2}
            r={radius}
          />
          {/* Filled arc */}
          <circle
            className="progress-ring-fill"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        {/* Percentage text */}
        <span
          className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white font-mono"
          style={{ fontSize: size * 0.18 }}
        >
          {value}%
        </span>
      </div>
      <span className="text-[10px] text-[#666] text-center leading-tight max-w-[60px]">
        {label}
      </span>
    </div>
  );
}
