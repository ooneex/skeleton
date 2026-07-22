import type { SVGProps } from "react";

export const AudioJackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M18 6H23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M8 6H7C4.79086 6 3 7.79086 3 10V10C3 12.2091 4.79086 14 7 14H17.5C19.433 14 21 15.567 21 17.5V17.5C21 19.433 19.433 21 17.5 21H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M18 9H11C9.34315 9 8 7.65685 8 6C8 4.34315 9.34315 3 11 3H18V9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
