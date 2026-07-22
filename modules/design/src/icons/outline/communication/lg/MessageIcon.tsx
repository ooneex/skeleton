import type { SVGProps } from "react";

export const MessageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M40 5H8C5.23858 5 3 7.23858 3 10V30C3 32.7614 5.23858 35 8 35H13.5V43.5L27 35H40C42.7614 35 45 32.7614 45 30V10C45 7.23858 42.7614 5 40 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
