import type { SVGProps } from "react";

export const MapIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M31 12V43" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M17 5V36" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M3 10L17 5L31 12L45 7V38L31 43L17 36L3 41V10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
