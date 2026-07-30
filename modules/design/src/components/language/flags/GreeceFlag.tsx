import type { SVGProps } from "react";

export const GreeceFlag = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" {...props}>
      <title>greece</title>
      <g>
        <path
          fill="var(--color-flag-greece-blue)"
          d="M48,40c0,1.105-0.895,2-2,2H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h44c1.105,0,2,0.895,2,2V40z"
        />
        <rect x="20" y="10" fill="var(--color-flag-greece-white)" width="28" height="4" />
        <rect x="20" y="18" fill="var(--color-flag-greece-white)" width="28" height="4" />
        <polygon
          fill="var(--color-flag-greece-white)"
          points="12,14 12,6 8,6 8,14 0,14 0,18 8,18 8,26 0,26 0,30 48,30 48,26 12,26 12,18 20,18 20,14 "
        />
        <rect y="34" fill="var(--color-flag-greece-white)" width="48" height="4" />
      </g>
    </svg>
  );
};

GreeceFlag.displayName = "GreeceFlag";
