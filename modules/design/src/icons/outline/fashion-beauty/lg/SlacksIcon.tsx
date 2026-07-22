import type { SVGProps } from "react";

export const SlacksIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M31 9V14C31 16.7614 33.2386 19 36 19H39"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 9V14C17 16.7614 14.7614 19 12 19H9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M14.5 32L13.5 45L13.5455 44.4089"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M33.5 32L34.5 45L34.4508 44.3608"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M24 9V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 9H39" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M39 45H29.25L25.5 20H22.5L18.75 45H9V3H39V45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};
