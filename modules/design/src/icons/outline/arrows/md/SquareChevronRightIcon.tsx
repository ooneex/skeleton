import type { SVGProps } from "react";

export const SquareChevronRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6 29H26C27.6569 29 29 27.6569 29 26V6C29 4.34315 27.6569 3 26 3H6C4.34315 3 3 4.34315 3 6V26C3 27.6569 4.34315 29 6 29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14 22L20 16L14 10"
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
