import type { SVGProps } from "react";

export const EditPolygonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 9H31" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 39H38" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M35 13L42 35" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M13 13L6 35" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M17 5H9V13H17V5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 35H2V43H10V35Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M39 5H31V13H39V5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M46 35H38V43H46V35Z"
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
