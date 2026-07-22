import type { SVGProps } from "react";

export const VestIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 20.0092V38" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M32 5H37C37 11 36 21 43 23V38C43 40.7614 40.7614 43 38 43H29.8462L24.6397 38H24H23.368L18.1538 43H10C7.23858 43 5 40.7614 5 38V23C12 20 11 11 11 5H16L23.6166 20H24H24.3856L32 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M30 33.8V29H37V33.8L33.5 35.5L30 33.8Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M11 33.8V29H18V33.8L14.5 35.5L11 33.8Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
