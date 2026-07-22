import type { SVGProps } from "react";

export const SuitcaseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 7V2H22V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M2 23V29H30V23M13 19H5C3.34315 19 2 17.6569 2 16V7H30V16C30 17.6569 28.6569 19 27 19H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M19 17H13V21C13 22.6569 14.3431 24 16 24C17.6569 24 19 22.6569 19 21V17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
