import React from 'react';

export type WaveVariant = 'hero-wave' | 'gentle-wave' | 'deep-wave' | 'organic-swell';

interface WavyDividerProps {
  fillColor: string; // The color that flows into the next/adjacent section
  flip?: boolean;    // Invert the wave vertically or horizontally
  variant?: WaveVariant;
  className?: string;
}

export const WavyDivider: React.FC<WavyDividerProps> = ({ 
  fillColor, 
  flip = false, 
  variant = 'hero-wave',
  className = '' 
}) => {
  // SVG paths perfectly capturing the fluid organic curved dividers from the reference image
  const getPath = () => {
    switch (variant) {
      case 'hero-wave':
        // Sweeping S-curve matching the reference hero transition
        return "M0,30 C220,105 480,-25 780,55 C960,105 1100,60 1200,40 L1200,120 L0,120 Z";
      case 'deep-wave':
        // Deep flowing curve for major section transitions (e.g. into Instagram strip)
        return "M0,60 C320,130 650,-20 950,75 C1080,115 1150,90 1200,80 L1200,120 L0,120 Z";
      case 'organic-swell':
        // Organic asymmetrical swell creating soft natural flow
        return "M0,45 C180,8 390,95 620,40 C850,-15 1060,85 1200,50 L1200,120 L0,120 Z";
      case 'gentle-wave':
      default:
        // Soft wave for subtle card-to-section blending
        return "M0,40 C280,85 540,15 820,65 C1010,100 1120,45 1200,55 L1200,120 L0,120 Z";
    }
  };

  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none select-none z-10 ${className}`}>
      <svg
        className={`relative block w-full h-12 sm:h-20 md:h-24 lg:h-28 transition-transform duration-500 ${
          flip ? 'rotate-180' : ''
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d={getPath()}
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
