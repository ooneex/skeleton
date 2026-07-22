import type { SVGProps } from "react";

export const BorderTopRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polyline
        points="3 3 21 3 21 21"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <circle cx="12" cy="12" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="12" cy="21" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="12" cy="16.5" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="12" cy="7.5" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="16.5" cy="21" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="7.5" cy="21" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="16.5" cy="12" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="7.5" cy="12" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="3" cy="21" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="3" cy="12" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="3" cy="16.5" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="3" cy="7.5" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
    </svg>
  );
};
