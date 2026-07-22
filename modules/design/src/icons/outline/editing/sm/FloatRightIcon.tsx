import type { SVGProps } from "react";

export const FloatRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 15L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 3H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 21L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 9H11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M20 9H16C15.4477 9 15 9.44772 15 10V14C15 14.5523 15.4477 15 16 15H20C20.5523 15 21 14.5523 21 14V10C21 9.44772 20.5523 9 20 9Z"
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
