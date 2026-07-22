import type { SVGProps } from "react";

export const LetterDIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11 5V43H21C31.4934 43 40 34.4934 40 24C40 13.5066 31.4934 5 21 5H11Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
