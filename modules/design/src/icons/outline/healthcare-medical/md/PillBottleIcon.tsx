import type { SVGProps } from "react";

export const PillBottleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 14V26C5 27.6569 6.34315 29 8 29H24C25.6569 29 27 27.6569 27 26V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M16 10V7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M23 10V7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 10V7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M22 16H10V24H22V16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M29 3H3V10H29V3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
