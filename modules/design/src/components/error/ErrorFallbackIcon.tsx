import type { SVGProps } from "react";

export const ErrorFallbackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="220" width="280" viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="err-bg-glow" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.12" />
          <stop offset="50%" stopColor="#f97316" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#eab308" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="err-shield" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="err-shield-inner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fca5a5" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="err-orb-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="err-orb-amber" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="err-orb-emerald" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="err-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#f97316" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#eab308" stopOpacity="0.05" />
        </linearGradient>
        <filter id="err-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="err-soft-glow">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Background glow */}
        <circle cx="140" cy="100" r="90" fill="url(#err-bg-glow)" />

        {/* Outer rings */}
        <circle
          cx="140"
          cy="100"
          r="85"
          stroke="url(#err-ring)"
          strokeWidth="0.5"
          opacity="0.4"
          strokeDasharray="4 6"
        />
        <circle
          cx="140"
          cy="100"
          r="75"
          stroke="url(#err-ring)"
          strokeWidth="0.5"
          opacity="0.25"
          strokeDasharray="3 8"
        />

        {/* Floating orbs */}
        {/* Blue orb top-left */}
        <circle cx="52" cy="42" r="10" fill="url(#err-orb-blue)" />
        <circle cx="52" cy="42" r="10" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
        <circle cx="49" cy="39" r="2.5" fill="#93c5fd" opacity="0.4" />

        {/* Amber orb top-right */}
        <circle cx="228" cy="55" r="8" fill="url(#err-orb-amber)" />
        <circle cx="228" cy="55" r="8" stroke="#f59e0b" strokeWidth="0.5" opacity="0.3" />
        <circle cx="226" cy="53" r="2" fill="#fcd34d" opacity="0.4" />

        {/* Emerald orb bottom-left */}
        <circle cx="42" cy="150" r="7" fill="url(#err-orb-emerald)" />
        <circle cx="42" cy="150" r="7" stroke="#10b981" strokeWidth="0.5" opacity="0.3" />
        <circle cx="40" cy="148" r="1.8" fill="#6ee7b7" opacity="0.4" />

        {/* Small purple orb bottom-right */}
        <circle cx="240" cy="140" r="5" fill="#8b5cf6" opacity="0.25" />
        <circle cx="240" cy="140" r="5" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.2" />

        {/* Small rose orb */}
        <circle cx="70" cy="88" r="4" fill="#f43f5e" opacity="0.2" />

        {/* Tiny accent dots */}
        <circle cx="190" cy="35" r="2.5" fill="#f97316" opacity="0.2" />
        <circle cx="85" cy="170" r="2" fill="#3b82f6" opacity="0.15" />
        <circle cx="210" cy="168" r="3" fill="#a855f7" opacity="0.15" />
        <circle cx="260" cy="95" r="2" fill="#10b981" opacity="0.15" />
        <circle cx="25" cy="105" r="2.5" fill="#f59e0b" opacity="0.12" />

        {/* Central shield shape */}
        <g filter="url(#err-glow)">
          <path
            d="M140 30 L185 52 L185 108 Q185 142 140 170 Q95 142 95 108 L95 52 Z"
            fill="url(#err-shield)"
            stroke="#dc2626"
            strokeWidth="1.5"
            opacity="0.85"
          />
        </g>

        {/* Shield inner highlight */}
        <path
          d="M140 38 L179 57 L179 108 Q179 137 140 162 Q101 137 101 108 L101 57 Z"
          fill="url(#err-shield-inner)"
          stroke="#fca5a5"
          strokeWidth="0.5"
          opacity="0.4"
        />

        {/* Lightning bolt on shield */}
        <path
          d="M148 58 L132 95 L143 95 L130 138 L156 88 L144 88 Z"
          fill="white"
          opacity="0.9"
          stroke="white"
          strokeWidth="1"
        />

        {/* Radiating lines from shield */}
        <line x1="80" y1="60" x2="65" y2="50" stroke="#ef4444" strokeWidth="1" opacity="0.2" />
        <line x1="200" y1="60" x2="215" y2="50" stroke="#ef4444" strokeWidth="1" opacity="0.2" />
        <line x1="82" y1="130" x2="65" y2="140" stroke="#f97316" strokeWidth="1" opacity="0.15" />
        <line x1="198" y1="130" x2="215" y2="140" stroke="#f97316" strokeWidth="1" opacity="0.15" />

        {/* Sparkle crosses */}
        {/* Top-right sparkle */}
        <line x1="205" y1="38" x2="205" y2="48" stroke="#f59e0b" strokeWidth="1.5" opacity="0.3" />
        <line x1="200" y1="43" x2="210" y2="43" stroke="#f59e0b" strokeWidth="1.5" opacity="0.3" />

        {/* Bottom-left sparkle */}
        <line x1="60" y1="165" x2="60" y2="173" stroke="#3b82f6" strokeWidth="1.5" opacity="0.2" />
        <line x1="56" y1="169" x2="64" y2="169" stroke="#3b82f6" strokeWidth="1.5" opacity="0.2" />

        {/* Top-left sparkle */}
        <line x1="88" y1="30" x2="88" y2="36" stroke="#a855f7" strokeWidth="1" opacity="0.2" />
        <line x1="85" y1="33" x2="91" y2="33" stroke="#a855f7" strokeWidth="1" opacity="0.2" />

        {/* Floating broken connection lines */}
        <path d="M30 70 L48 78" stroke="#ef4444" strokeWidth="1" opacity="0.15" strokeDasharray="2 3" />
        <path d="M232 75 L250 68" stroke="#f97316" strokeWidth="1" opacity="0.12" strokeDasharray="2 3" />
        <path d="M225 165 L248 172" stroke="#6366f1" strokeWidth="1" opacity="0.1" strokeDasharray="2 3" />

        {/* Shadow under shield */}
        <ellipse cx="140" cy="185" rx="50" ry="5" fill="#ef4444" opacity="0.08" />
      </g>
    </svg>
  );
};
ErrorFallbackIcon.displayName = "ErrorFallbackIcon";
