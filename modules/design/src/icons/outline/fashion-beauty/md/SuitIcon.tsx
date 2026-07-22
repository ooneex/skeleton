import type { SVGProps } from "react";

export const SuitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 29L16 12.6667" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M22.7904 6H26C27.6569 6 29 7.34315 29 9V29H3V9C3 7.34315 4.34315 6 6 6H9.20054"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M10.5 2.99999L16 13.3333L21.5 2.99999"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M21 2L24.5 10L21 13.5L22 16L16 21L10 16L11 13.5L7.5 10L11 2H21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M25 24H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
