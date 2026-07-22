import type { SVGProps } from "react";

export const Dresser2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M8 29V31" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M24 29V31" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 16L29 16" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M29 26L29 6C29 4.34315 27.6569 3 26 3L6 3C4.34315 3 3 4.34315 3 6L3 26C3 27.6569 4.34314 29 6 29L26 29C27.6569 29 29 27.6569 29 26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14 8L18 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M14 21L18 21"
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
