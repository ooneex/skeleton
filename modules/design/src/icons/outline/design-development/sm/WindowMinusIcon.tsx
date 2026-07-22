import type { SVGProps } from "react";

export const WindowMinusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <line
        x1="15"
        y1="13"
        x2="9"
        y2="13"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        ry="2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle cx="5" cy="7" r="1" fill="currentColor" strokeWidth="0" data-color="color-2" data-cap="butt" />
      <circle cx="8" cy="7" r="1" fill="currentColor" strokeWidth="0" data-color="color-2" data-cap="butt" />
    </svg>
  );
};
