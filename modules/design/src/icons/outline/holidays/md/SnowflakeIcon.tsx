import type { SVGProps } from "react";

export const SnowflakeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21.5 2.5L16 8.00002L10.5 2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M21.5 29.5L16 24L10.5 29.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16 2V30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M30.4413 14.0131L22.9282 12L24.9413 4.48684"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M7.05866 27.5131L9.0718 20L1.55866 17.9869"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M28.1244 9L3.87565 23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M24.9413 27.5131L22.9282 20L30.4413 17.9868"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M1.55866 14.0131L9.0718 12L7.05866 4.48686"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M28.1244 23L3.87565 9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
