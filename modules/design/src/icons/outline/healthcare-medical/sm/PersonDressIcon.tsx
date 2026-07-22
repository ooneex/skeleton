import type { SVGProps } from "react";

export const PersonDressIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m5,14.5l3.213-5.05c.188-.295.446-.547.759-.702,2.018-.997,4.037-.998,6.055,0,.313.155.571.407.759.702l3.215,5.05"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="3"
        r="2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <polyline
        points="14.75 9 14.5 12 16 18 12 18 8 18 9.5 12 9.25 9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="10"
        y1="18"
        x2="10"
        y2="23"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="14"
        y1="18"
        x2="14"
        y2="23"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m15.5,4h.25c1.518,0,2.75,1.232,2.75,2.75v.25h-.25c-1.518,0-2.75-1.232-2.75-2.75v-.25h0Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
        data-cap="butt"
      />
    </svg>
  );
};
