import type { SVGProps } from "react";

export const SquareUserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 17.5C18.2091 17.5 20 15.7091 20 13.5C20 11.2909 18.2091 9.5 16 9.5C13.7909 9.5 12 11.2909 12 13.5C12 15.7091 13.7909 17.5 16 17.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M7 29C7.45379 24.5082 11.31 21 16 21C20.69 21 24.5462 24.5082 25 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M29 26L29 6C29 4.34315 27.6569 3 26 3L6 3C4.34315 3 3 4.34315 3 6L3 26C3 27.6569 4.34315 29 6 29L26 29C27.6569 29 29 27.6569 29 26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
