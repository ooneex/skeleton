import type { SVGProps } from "react";

export const NotFoundIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="140" width="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="nf-page" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-primary-500)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--color-primary-600)" stopOpacity="0.03" />
        </linearGradient>
        <linearGradient id="nf-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-secondary-500)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-secondary-700)" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="nf-glass-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-secondary-500)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--color-secondary-700)" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Shadow under page */}
        <ellipse cx="72" cy="122" rx="32" ry="4" fill="var(--color-primary-600)" opacity="0.06" />

        {/* Back page */}
        <rect
          x="38"
          y="14"
          width="56"
          height="72"
          rx="4"
          fill="var(--color-primary-500)"
          stroke="var(--color-primary-500)"
          strokeWidth="1.5"
          opacity="0.1"
        />

        {/* Main page */}
        <rect
          x="30"
          y="20"
          width="56"
          height="72"
          rx="4"
          fill="url(#nf-page)"
          stroke="var(--color-primary-500)"
          strokeWidth="1.5"
          opacity="0.3"
        />

        {/* Content lines on page */}
        <line x1="42" y1="38" x2="70" y2="38" stroke="var(--color-primary-500)" strokeWidth="2" opacity="0.15" />
        <line x1="42" y1="46" x2="64" y2="46" stroke="var(--color-primary-500)" strokeWidth="2" opacity="0.12" />
        <line x1="42" y1="54" x2="56" y2="54" stroke="var(--color-primary-500)" strokeWidth="2" opacity="0.08" />

        {/* Dashed empty line */}
        <line
          x1="42"
          y1="66"
          x2="70"
          y2="66"
          stroke="var(--color-primary-500)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.1"
        />
        <line
          x1="42"
          y1="74"
          x2="60"
          y2="74"
          stroke="var(--color-primary-500)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.07"
        />

        {/* Magnifying glass */}
        <circle cx="92" cy="90" r="20" fill="url(#nf-glass-fill)" stroke="url(#nf-glass)" strokeWidth="2.5" />
        <line x1="106" y1="104" x2="118" y2="116" stroke="url(#nf-glass)" strokeWidth="3.5" />

        {/* Question mark inside magnifier */}
        <path d="M87 85a5.5 5.5 0 1 1 5.5 5.5v3" stroke="var(--color-secondary-500)" strokeWidth="2.5" opacity="0.6" />
        <circle cx="92.5" cy="97" r="1.2" fill="var(--color-secondary-500)" opacity="0.6" />

        {/* Floating particles */}
        <circle cx="18" cy="30" r="2.5" fill="var(--color-primary-500)" opacity="0.12" />
        <circle cx="120" cy="24" r="2" fill="var(--color-secondary-500)" opacity="0.15" />
        <circle cx="12" cy="80" r="1.5" fill="var(--color-primary-600)" opacity="0.08" />
        <circle cx="24" cy="112" r="2" fill="var(--color-secondary-500)" opacity="0.1" />
        <circle cx="126" cy="60" r="1.5" fill="var(--color-primary-500)" opacity="0.1" />

        {/* Sparkle accents */}
        <line x1="108" y1="38" x2="108" y2="44" stroke="var(--color-secondary-500)" strokeWidth="1.5" opacity="0.2" />
        <line x1="105" y1="41" x2="111" y2="41" stroke="var(--color-secondary-500)" strokeWidth="1.5" opacity="0.2" />

        <line x1="20" y1="52" x2="20" y2="56" stroke="var(--color-primary-500)" strokeWidth="1.5" opacity="0.15" />
        <line x1="18" y1="54" x2="22" y2="54" stroke="var(--color-primary-500)" strokeWidth="1.5" opacity="0.15" />
      </g>
    </svg>
  );
};
NotFoundIcon.displayName = "NotFoundIcon";
