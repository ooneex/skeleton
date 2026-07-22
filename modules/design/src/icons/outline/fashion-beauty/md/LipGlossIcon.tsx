import type { SVGProps } from "react";

export const LipGlossIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18 24H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M9 10V20" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M6 6.8C6 7.64869 6.31607 8.46263 6.87868 9.06274C7.44129 9.66286 8.20435 10 9 10C9.79565 10 10.5587 9.66286 11.1213 9.06274C11.6839 8.46263 12 7.64869 12 6.8C12 5.04 10.6575 2 9 2C7.3425 2 6 5.04 6 6.8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M18 27C18 28.1046 18.8954 29 20 29H26C27.1046 29 28 28.1046 28 27L28 13H18L18 27Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M4.00001 27C4.00001 28.1046 4.89544 29 6.00001 29H12C13.1046 29 14 28.1046 14 27L14 20H4L4.00001 27Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
