import type { SVGProps } from "react";

export const SquareInfoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        ry="2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <circle cx="12" cy="7.25" r="1.25" fill="currentColor" strokeWidth="0" data-color="color-2" data-cap="butt" />
    </svg>
  );
};
