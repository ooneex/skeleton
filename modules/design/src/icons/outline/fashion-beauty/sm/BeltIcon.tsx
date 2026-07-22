import type { SVGProps } from "react";

export const BeltIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M8 12H11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M8 9H2C1.44772 9 1 9.44772 1 10V14C1 14.5523 1.44772 15 2 15H8"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 15H22C22.5523 15 23 14.5523 23 14V10C23 9.44772 22.5523 9 22 9H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 8H8V16H16V8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
