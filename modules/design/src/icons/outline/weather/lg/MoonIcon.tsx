import type { SVGProps } from "react";

export const MoonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7 22.8465C7 33.977 16.0744 43 27.2683 43C34.8971 43 41.5416 38.809 45 32.6162C43.8492 32.818 42.665 32.9232 41.456 32.9232C30.2622 32.9232 21.1878 23.9002 21.1878 12.7697C21.1878 9.22493 22.1082 5.8939 23.7243 3C14.2201 4.66657 7 12.9181 7 22.8465Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        strokeLinejoin="bevel"
        fill="none"
      />
    </svg>
  );
};
