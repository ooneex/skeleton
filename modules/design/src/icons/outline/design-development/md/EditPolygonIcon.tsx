import type { SVGProps } from "react";

export const EditPolygonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 26H25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M24 9.00012L28 23.0001" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M8 9.00012L3.66675 22.6667" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M11 3H5V9H11V3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7 23H1V29H7V23Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M27 3H21V9H27V3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M31 23H25V29H31V23Z"
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
