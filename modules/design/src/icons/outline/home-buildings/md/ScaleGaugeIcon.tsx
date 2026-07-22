import type { SVGProps } from "react";

export const ScaleGaugeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M19 13L16.0001 18H14.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M25 17.4211L25 16C25 11.0294 20.9706 7 16 7C11.0294 7 7 11.0294 7 16L7 17.4211C7 17.7408 7.2592 18 7.57895 18L24.4211 18C24.7408 18 25 17.7408 25 17.4211Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M26 3L6 3C4.34315 3 3 4.34315 3 6L3 26C3 27.6569 4.34315 29 6 29L26 29C27.6569 29 29 27.6569 29 26L29 6C29 4.34315 27.6569 3 26 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
