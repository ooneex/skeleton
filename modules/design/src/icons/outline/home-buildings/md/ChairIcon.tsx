import type { SVGProps } from "react";

export const ChairIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21 24V27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M11 24V27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M6 24H26" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M8 14L8 6C8 4.34315 9.34315 3 11 3L21 3C22.6569 3 24 4.34315 24 6L24 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M6 29L6 21C6 19.3431 7.34315 18 9 18L23 18C24.6569 18 26 19.3431 26 21L26 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
