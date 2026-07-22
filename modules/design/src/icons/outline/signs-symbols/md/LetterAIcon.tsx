import type { SVGProps } from "react";

export const LetterAIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 19L23 19" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M5.16906 29H5L15.2667 3H16.7333L27 29H26.8553"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
