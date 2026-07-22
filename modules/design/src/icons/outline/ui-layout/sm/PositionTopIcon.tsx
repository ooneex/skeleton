import type { SVGProps } from "react";

export const PositionTopIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="21" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="16.5" cy="21" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="7.5" cy="21" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="21" cy="21" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="3" cy="21" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="21" cy="12" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="21" cy="16.5" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="3" cy="12" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="3" cy="16.5" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <rect
        x="3"
        y="3"
        width="18"
        height="5"
        transform="translate(24 11) rotate(180)"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
    </svg>
  );
};
