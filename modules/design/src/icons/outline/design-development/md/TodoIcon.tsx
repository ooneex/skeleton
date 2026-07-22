import type { SVGProps } from "react";

export const TodoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9.99707 3L8 3C6.34315 3 5 4.34314 5 6L5 27C5 28.6569 6.34314 30 8 30L24 30C25.6569 30 27 28.6569 27 27L27 6C27 4.34315 25.6569 3 24 3L22.0059 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M10 6V3C10 1.89543 10.8954 1 12 1H20C21.1046 1 22 1.89543 22 3V6H10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10 17L14 21L22 13"
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
