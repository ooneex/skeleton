export type FileUploadProgressPropsType = {
  progress: number;
};

/** Multi-ring animated progress indicator shown while a file upload simulation is running. */
export const FileUploadProgress = ({ progress }: FileUploadProgressPropsType) => (
  <div className="relative h-16 w-16">
    <svg
      aria-label={`Upload progress: ${Math.round(progress)}%`}
      className="h-full w-full"
      fill="none"
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Upload Progress Indicator</title>

      <defs>
        <mask id="progress-mask">
          <rect fill="black" height="240" width="240" />
          <circle
            cx="120"
            cy="120"
            fill="white"
            r="120"
            strokeDasharray={`${(progress / 100) * 754}, 754`}
            transform="rotate(-90 120 120)"
          />
        </mask>
      </defs>

      <style>
        {`
                    @keyframes rotate-cw {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    @keyframes rotate-ccw {
                        from { transform: rotate(360deg); }
                        to { transform: rotate(0deg); }
                    }
                    .g-spin circle {
                        transform-origin: 120px 120px;
                    }
                    .g-spin circle:nth-child(1) { animation: rotate-cw 8s linear infinite; }
                    .g-spin circle:nth-child(2) { animation: rotate-ccw 8s linear infinite; }
                    .g-spin circle:nth-child(3) { animation: rotate-cw 8s linear infinite; }
                    .g-spin circle:nth-child(4) { animation: rotate-ccw 8s linear infinite; }
                    .g-spin circle:nth-child(5) { animation: rotate-cw 8s linear infinite; }
                    .g-spin circle:nth-child(6) { animation: rotate-ccw 8s linear infinite; }
                    .g-spin circle:nth-child(7) { animation: rotate-cw 8s linear infinite; }
                    .g-spin circle:nth-child(8) { animation: rotate-ccw 8s linear infinite; }
                    .g-spin circle:nth-child(9) { animation: rotate-cw 8s linear infinite; }
                    .g-spin circle:nth-child(10) { animation: rotate-ccw 8s linear infinite; }
                    .g-spin circle:nth-child(11) { animation: rotate-cw 8s linear infinite; }
                    .g-spin circle:nth-child(12) { animation: rotate-ccw 8s linear infinite; }
                    .g-spin circle:nth-child(13) { animation: rotate-cw 8s linear infinite; }
                    .g-spin circle:nth-child(14) { animation: rotate-ccw 8s linear infinite; }

                    .g-spin circle:nth-child(2n) { animation-delay: 0.2s; }
                    .g-spin circle:nth-child(3n) { animation-delay: 0.3s; }
                    .g-spin circle:nth-child(5n) { animation-delay: 0.5s; }
                    .g-spin circle:nth-child(7n) { animation-delay: 0.7s; }
                `}
      </style>

      <g className="g-spin" mask="url(#progress-mask)" strokeDasharray="18% 40%" strokeWidth="10">
        <circle cx="120" cy="120" opacity="0.95" r="150" stroke="var(--color-spinner-pink)" />
        <circle cx="120" cy="120" opacity="0.95" r="140" stroke="var(--color-spinner-yellow)" />
        <circle cx="120" cy="120" opacity="0.95" r="130" stroke="var(--color-spinner-cyan)" />
        <circle cx="120" cy="120" opacity="0.95" r="120" stroke="var(--color-spinner-rose)" />
        <circle cx="120" cy="120" opacity="0.95" r="110" stroke="var(--color-spinner-green)" />
        <circle cx="120" cy="120" opacity="0.95" r="100" stroke="var(--color-spinner-blue)" />
        <circle cx="120" cy="120" opacity="0.95" r="90" stroke="var(--color-spinner-amber)" />
        <circle cx="120" cy="120" opacity="0.95" r="80" stroke="var(--color-spinner-magenta)" />
        <circle cx="120" cy="120" opacity="0.95" r="70" stroke="var(--color-spinner-lemon)" />
        <circle cx="120" cy="120" opacity="0.95" r="60" stroke="var(--color-spinner-teal)" />
        <circle cx="120" cy="120" opacity="0.95" r="50" stroke="var(--color-spinner-fuchsia)" />
        <circle cx="120" cy="120" opacity="0.95" r="40" stroke="var(--color-spinner-lime)" />
        <circle cx="120" cy="120" opacity="0.95" r="30" stroke="var(--color-spinner-azure)" />
        <circle cx="120" cy="120" opacity="0.95" r="20" stroke="var(--color-spinner-orange)" />
      </g>
    </svg>
  </div>
);
FileUploadProgress.displayName = "FileUploadProgress";
