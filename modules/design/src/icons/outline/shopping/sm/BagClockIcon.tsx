import type { SVGProps } from "react";

export const BagClockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polyline
        data-cap="butt"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        points="20.862,13.9 20,7 4,7 2,23 18,23 "
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
      <polyline
        data-color="color-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeMiterlimit="10"
        points=" 18,16 18,18 20,18 "
        strokeLinejoin="miter"
      />
      <circle
        data-color="color-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeMiterlimit="10"
        cx="18"
        cy="18"
        r="5"
        strokeLinejoin="miter"
      />
      <path
        data-color="color-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeMiterlimit="10"
        d="M8,10V5 c0-2.2,1.8-4,4-4l0,0c2.2,0,4,1.8,4,4v5"
        strokeLinejoin="miter"
      />
    </svg>
  );
};
