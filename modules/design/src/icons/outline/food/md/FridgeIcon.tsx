import type { SVGProps } from "react";

export const FridgeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M5 13H27" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M24 2L8 2C6.34315 2 5 3.34315 5 5L5 27C5 28.6569 6.34315 30 8 30L24 30C25.6569 30 27 28.6569 27 27L27 5C27 3.34315 25.6569 2 24 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10 18L10 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 7L10 8"
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
