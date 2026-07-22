import type { SVGProps } from "react";

export const PulseChartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M3 3H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <circle cx="6" cy="12" r="1.25" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
      <circle cx="9" cy="9" r="1.25" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
      <circle cx="12" cy="12" r="1.25" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
      <circle cx="15" cy="15" r="1.25" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
      <circle cx="18" cy="12" r="1.25" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
      <circle cx="21" cy="9" r="1.25" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
      <circle cx="3" cy="15" r="1.25" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
      <path
        d="M3 21H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
