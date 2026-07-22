import type { SVGProps } from "react";

export const EditPolygonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 4.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6 19.5H18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M17.5 7L20.5 17" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M6.5 7L3.5 17" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M9 2H4V7H9V2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M6 17H1V22H6V17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20 2H15V7H20V2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M23 17H18V22H23V17Z"
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
