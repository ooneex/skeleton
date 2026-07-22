import type { SVGProps } from "react";

export const VanityMirrorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 38V45" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M10.5 24.5L30.5 4.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M28 21L37.5 11.5L36.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M24 33C32.2843 33 39 26.2843 39 18C39 9.71573 32.2843 3 24 3C15.7157 3 9 9.71573 9 18C9 26.2843 15.7157 33 24 33Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M44 18C44 29.0457 35.0457 38 24 38C12.9543 38 4 29.0457 4 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 45H32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
