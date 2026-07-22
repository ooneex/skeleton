import type { SVGProps } from "react";

export const BedSingleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 24H29" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M5 14L5 8C5 6.34315 6.34315 5 8 5L24 5C25.6569 5 27 6.34315 27 8L27 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20 9L12 9C11.4477 9 11 9.44771 11 10L11 13C11 13.5523 11.4477 14 12 14L20 14C20.5523 14 21 13.5523 21 13L21 10C21 9.44772 20.5523 9 20 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 27L3 21C3 19.3431 4.34315 18 6 18L26 18C27.6569 18 29 19.3431 29 21L29 27"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
