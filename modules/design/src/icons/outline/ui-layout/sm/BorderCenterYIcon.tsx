import type { SVGProps } from "react";

export const BorderCenterYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <circle cx="21" cy="7.5" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="21" cy="16.5" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="12" cy="7.5" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="12" cy="16.5" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="21" cy="3" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="21" cy="21" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="3" cy="7.5" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="3" cy="16.5" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="3" cy="3" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="3" cy="21" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="12" cy="3" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="16.5" cy="3" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="7.5" cy="3" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="12" cy="21" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="16.5" cy="21" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="7.5" cy="21" r="1" strokeWidth="0" fill="currentColor" data-cap="butt" />
    </svg>
  );
};
