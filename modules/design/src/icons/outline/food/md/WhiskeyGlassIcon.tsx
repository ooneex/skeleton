import type { SVGProps } from "react";

export const WhiskeyGlassIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M28 13.5C23 15.5 20.2525 14.8667 16 13.5C11.7475 12.1333 9 11.5 4 13.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M11 24L8.00001 21L12.2427 16.7574L16.4853 21L13.4853 24"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M4 24L28 24" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M4 3V26C4 27.6569 5.34315 29 7 29H25C26.6569 29 28 27.6569 28 26V3H4Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
