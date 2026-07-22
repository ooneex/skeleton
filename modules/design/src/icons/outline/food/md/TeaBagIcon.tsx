import type { SVGProps } from "react";

export const TeaBagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M26 21V7.5C26 3.91015 23.0899 1 19.5 1V1C15.9101 1 13 3.91015 13 7.5V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M18 29H4V14L8 8H18L22 14V17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M30 21H22V29H30V21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11 13L15 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
