import type { SVGProps } from "react";

export const PajamasIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 27L24 14.8406V15.5073" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M29 21V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M29 26V27.0133"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M38 43H10C7.23858 43 5 40.7614 5 38V10C5 7.23858 7.23858 5 10 5H14L24 15L34 5H38C40.7614 5 43 7.23858 43 10V38C43 40.7614 40.7614 43 38 43Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
