import type { SVGProps } from "react";

export const CrownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M2.5 15H21.5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M17 9.78125L22 6.1875L21.144 17.1556C21.0627 18.1967 20.1942 19 19.15 19H4.84998C3.80577 19 2.9373 18.1967 2.85605 17.1556L2 6.1875L7 9.78125L12 3L17 9.78125Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
