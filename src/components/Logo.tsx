import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '' }) => {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Official Uploaded Logo: Shree Ambhey Motor Driving */}
      <div
        className={`relative flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02] ${
          isDark
            ? 'bg-white px-2.5 py-1.5 rounded-xl shadow-sm border border-neutral-700/60'
            : 'bg-transparent'
        }`}
      >
        <img
          src="/assets/shree-ambhey-logo.png"
          alt="Shree Ambhey Motor Driving School Jaipur Official Logo"
          width="240"
          height="44"
          className="h-9 sm:h-10 md:h-11 w-auto max-w-[200px] sm:max-w-[230px] md:max-w-[260px] object-contain"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
};
