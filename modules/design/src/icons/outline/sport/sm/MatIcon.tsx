import type { SVGProps } from "react";

export const MatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M2 16L2 7C2 4.79086 3.79086 3 6 3V3C8.20914 3 10 4.79086 10 7L10 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M10 16V16C10 13.7909 8.20914 12 6 12V12C3.79086 12 2 13.7909 2 16V16C2 18.7614 4.23858 21 7 21L20 21C21.1046 21 22 20.1046 22 19L22 7C22 5.89543 21.1046 5 20 5L14 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
