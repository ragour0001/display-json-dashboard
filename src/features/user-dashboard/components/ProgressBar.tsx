"use client";

interface ProgressBarProps {
  progress: number; // 0-100
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <>
      <style>{`
        .progress-bar-wrapper {
          display: flex;
          height: 16px;
          align-items: center;
          gap: 8px;
          align-self: stretch;
          border-radius: 64px;
          background: #e0e0e0;
        }

        .progress-bar-svg {
          width: 100%;
          height: 16px;
        }
      `}</style>
      <div className="progress-bar-wrapper">
        <svg
          width="865"
          height="16"
          viewBox="0 0  16"
          // viewBox="0 0 865 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="progress-bar-svg"
        >
          <rect width="865" height="16" rx="8" fill="#E0E0E0" />
          <rect
            width={`${(progress / 100) * 865}`}
            height="16"
            rx="8"
            fill="url(#paint0_linear_1155_12611)"
          />

          {/* Progress dots */}
          <circle cx="39" cy="8" r="2" fill="white" />
          <circle cx="179" cy="8" r="2" fill="#EDF5FF" />
          <circle cx="345" cy="8" r="2" fill="#EDF5FF" />
          <circle cx="588" cy="8" r="2" fill="white" />

          <defs>
            <linearGradient
              id="paint0_linear_1155_12611"
              x1="176.837"
              y1="7.74193"
              x2="671.432"
              y2="-132.461"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1EAF28" />
              <stop offset="0.155968" stopColor="#17F026" />
              <stop offset="0.262748" stopColor="#14B91F" />
              <stop offset="0.37534" stopColor="#4EAC54" />
              <stop offset="0.559898" stopColor="#1DC929" />
              <stop offset="0.750284" stopColor="#1CC827" />
              <stop offset="1" stopColor="#15951D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
