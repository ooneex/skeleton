import type { SVGProps } from "react";

export const MilitaryCampIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 9V1H22V5H16.0761"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M3 15H29" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M23.2222 29C18.1667 25.4062 16 21.1134 16 16C16 21.1134 13.8333 25.4062 8.77778 29H3V12C3 10.3431 4.34315 9 6 9H26C27.6569 9 29 10.3431 29 12L29 29H23.2222Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path d="M10 19H7V22H10V19Z" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
      <path d="M25 19H22V22H25V19Z" fill="currentColor" data-color="color-2" data-cap="butt" data-stroke="none" />
    </svg>
  );
};
