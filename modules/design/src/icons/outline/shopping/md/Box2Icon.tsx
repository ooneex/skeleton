import type { SVGProps } from "react";

export const Box2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 3L13 12V19H19V12L18 3"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M3 12H29" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M29 26L29 12L26.1111 3L5.88889 3L3 12L3 26C3 27.6569 4.34315 29 6 29L26 29C27.6569 29 29 27.6569 29 26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
