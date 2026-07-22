import type { SVGProps } from "react";

export const VideoPlayIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21 6H5C3.34315 6 2 7.34315 2 9V23C2 24.6569 3.34315 26 5 26H21C22.6569 26 24 24.6569 24 23V21L30 24V8L24 11V9C24 7.34315 22.6569 6 21 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11 12L18 16L11 20V12Z"
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
