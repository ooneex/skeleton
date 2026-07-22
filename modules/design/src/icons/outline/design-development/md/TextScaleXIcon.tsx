import type { SVGProps } from "react";

export const TextScaleXIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 4H23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M3 25L29 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M25 29L29 25L25 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7 29L3.00001 25L7 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
