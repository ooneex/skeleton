import type { SVGProps } from "react";

export const DogHouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 21V16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path d="M4 21V8.54545" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" fill="none" data-cap="butt" />
      <path
        d="M20 8.54545V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M1 11L12 2L23 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M2 21H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M10 9H14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
