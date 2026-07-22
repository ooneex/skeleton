import type { SVGProps } from "react";

export const Shirt4Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 14V43" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M34 7H38C40.7614 7 43 9.23858 43 12V38C43 40.7614 40.7614 43 38 43H10C7.23858 43 5 40.7614 5 38V12C5 9.23858 7.23858 7 10 7H14"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M14 3L24 13.5L34 3" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M34 3V18H33L24 14L15 18H14V3H34Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};
