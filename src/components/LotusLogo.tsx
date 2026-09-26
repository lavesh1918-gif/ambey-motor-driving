import React from 'react';

interface LotusLogoProps {
  className?: string;
  size?: number;
  dark?: boolean;
}

export const LotusLogo: React.FC<LotusLogoProps> = ({
  className = '',
  size = 40,
  dark = false,
}) => {
  const strokeColor = dark ? '#ffffff' : '#111827';
  const bgColor = dark ? '#111827' : '#ffffff';
  const textColor = dark ? '#ffffff' : '#111827';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      width={size}
      height={size}
      className={`inline-block flex-shrink-0 select-none ${className}`}
      aria-label="Lotus Web Studio Logo"
    >
      {/* Outer Circle Ring */}
      <circle
        cx="150"
        cy="150"
        r="140"
        fill={bgColor}
        stroke={strokeColor}
        strokeWidth="7"
      />

      {/* Lotus & L Monogram */}
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* L Stem */}
        <path
          d="M 108 62 C 108 62 128 66 132 100 L 132 132 C 132 142 142 146 156 148 C 166 150 176 154 180 156 C 160 154 136 148 124 140 C 112 132 108 116 108 94 Z"
          fill={textColor}
          stroke="none"
        />

        {/* Central Lotus Petal */}
        <path
          d="M 144 114 C 140 84 158 64 168 92 C 172 106 160 120 144 114 Z"
          fill="none"
          stroke={strokeColor}
          strokeWidth="5"
        />

        {/* Right Top Petal */}
        <path
          d="M 154 118 C 168 98 196 90 192 114 C 188 128 166 130 154 118 Z"
          fill="none"
          stroke={strokeColor}
          strokeWidth="5"
        />

        {/* Right Bottom Petal */}
        <path
          d="M 152 132 C 172 122 198 128 190 148 C 180 158 160 148 152 132 Z"
          fill="none"
          stroke={strokeColor}
          strokeWidth="5"
        />
      </g>

      {/* Typography: LOTUS */}
      <text
        x="150"
        y="208"
        textAnchor="middle"
        fontFamily="'Outfit', system-ui, sans-serif"
        fontWeight="900"
        fontSize="38"
        letterSpacing="3"
        fill={textColor}
      >
        LOTUS
      </text>

      {/* Typography: WEB STUDIO */}
      <text
        x="150"
        y="238"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontWeight="600"
        fontSize="15"
        letterSpacing="4"
        fill={textColor}
      >
        WEB STUDIO
      </text>
    </svg>
  );
};
