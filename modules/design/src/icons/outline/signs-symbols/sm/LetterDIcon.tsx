import type { SVGProps } from "react";

export const LetterDIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6 3V21H11C15.9706 21 20 16.9706 20 12C20 7.02944 15.9706 3 11 3H6Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
