import type { SVGProps } from "react";

export const VideoPlayIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 17L28 24L16 31V17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M31 9H8C5.23858 9 3 11.2386 3 14V34C3 36.7614 5.23858 39 8 39H31C33.7614 39 36 36.7614 36 34V31L45 36V12L36 17V14C36 11.2386 33.7614 9 31 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
