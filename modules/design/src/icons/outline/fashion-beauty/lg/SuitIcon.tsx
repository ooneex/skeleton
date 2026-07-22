import type { SVGProps } from "react";

export const SuitIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 21L33.0831 4.06494" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M34.6582 7H38C40.7614 7 43 9.23858 43 12V43H5V12C5 9.23858 7.23858 7 10 7H13.228"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M32.5 3L38 13L30 20L32.5 22.5L24 31L15.5 22.5L18 20L10 13L15.5 3H32.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M24 43V21L14.9247 4.07947" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M37 35H30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
