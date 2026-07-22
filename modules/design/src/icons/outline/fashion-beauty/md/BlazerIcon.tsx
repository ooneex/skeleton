import type { SVGProps } from "react";

export const BlazerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22.3469 6L26 6C27.6569 6 29 7.34315 29 9V29H3V9C3 7.34315 4.34315 6 6 6H9.67621"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path d="M10.6314 3.06017L15.1697 15.5532" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M21.3651 3.07342L16.8365 15.5331" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M13 29V18L24 11L21 2H11L8 11L15.8867 16.0234L15.6015 15.8419"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M17 21V21.0133"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 25V25.0133"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
