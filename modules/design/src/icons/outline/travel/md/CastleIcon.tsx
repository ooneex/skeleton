import type { SVGProps } from "react";

export const CastleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 22V19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8 22H3V29H8" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M29 22V19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M24 22H29V29H24" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M13 29V24C13 22.3431 14.3431 21 16 21V21C17.6569 21 19 22.3431 19 24V29"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M8 12V29H24V12" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M24 17H22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M13 16H12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M26 12V3H22V7H18V3H14V7H10V3H6V12H26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
