import type { SVGProps } from "react";

export const MapPositionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M31 20.5V12V13" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M17 5V36" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M45 22V7L31 12L17 5L3 10V41L17 36L30 42.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M37 38C40.866 38 44 34.866 44 31C44 27.134 40.866 24 37 24C33.134 24 30 27.134 30 31C30 34.866 33.134 38 37 38Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M37 38V45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
