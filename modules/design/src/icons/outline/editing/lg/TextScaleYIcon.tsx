import type { SVGProps } from "react";

export const TextScaleYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 38V12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6 12H26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M39 44L39 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M44 11L39 6L34 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M44 39L39 44L34 39"
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
