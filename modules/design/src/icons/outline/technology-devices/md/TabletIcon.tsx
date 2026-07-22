import type { SVGProps } from "react";

export const TabletIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 2H8C6.34315 2 5 3.34315 5 5V27C5 28.6569 6.34315 30 8 30H24C25.6569 30 27 28.6569 27 27V5C27 3.34315 25.6569 2 24 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 27C16.9665 27 17.75 26.2165 17.75 25.25C17.75 24.2835 16.9665 23.5 16 23.5C15.0335 23.5 14.25 24.2835 14.25 25.25C14.25 26.2165 15.0335 27 16 27Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
