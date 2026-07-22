import type { SVGProps } from "react";

export const BaggageClaimIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M33 8V32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15 32V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M19 8L19 3H29V8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M7 12C7 9.79086 8.79086 8 11 8H37C39.2091 8 41 9.79086 41 12V28C41 30.2091 39.2091 32 37 32H11C8.79086 32 7 30.2091 7 28V12Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M5 40C5 38.3431 6.34315 37 8 37H40C41.6569 37 43 38.3431 43 40V40C43 41.6569 41.6569 43 40 43H8C6.34315 43 5 41.6569 5 40V40Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M20 13H28V18H20V13Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
