import type { SVGProps } from "react";

export const ApplicationsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 29H23C24.6569 29 26 27.6569 26 26V17H14V5H5C3.34315 5 2 6.34315 2 8V26C2 27.6569 3.34315 29 5 29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M26 2H18V13H29V5C29 3.34315 27.6569 2 26 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M2 17H14V29" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
    </svg>
  );
};
