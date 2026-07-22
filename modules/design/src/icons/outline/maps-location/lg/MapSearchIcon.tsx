import type { SVGProps } from "react";

export const MapSearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M31 23V12V13" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M17 5V36" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M45 26.377V7L31 12L17 5L3 10V41L17 36L24 39.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M35.5 42C39.6421 42 43 38.6421 43 34.5C43 30.3579 39.6421 27 35.5 27C31.3579 27 28 30.3579 28 34.5C28 38.6421 31.3579 42 35.5 42Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M45.5 44.5L41 40L41.5 40.5"
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
