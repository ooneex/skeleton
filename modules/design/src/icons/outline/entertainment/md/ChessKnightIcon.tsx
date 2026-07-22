import type { SVGProps } from "react";

export const ChessKnightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M23.5 24C27.521 12.5 21.6277 2.98485 10 3.00002V5.49999L4 12L5.5 15L12 13C15.2378 19.1552 8.52096 19 8.52096 24.0238"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M11 8C10.4477 8 10 8.44772 10 9C10 9.55228 10.4477 10 11 10C11.5523 10 12 9.55228 12 9C12 8.44772 11.5523 8 11 8Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M24 24H8C6.34315 24 5 25.3431 5 27V29H27V27C27 25.3431 25.6569 24 24 24Z"
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
