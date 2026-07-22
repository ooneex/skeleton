import type { SVGProps } from "react";

export const ArrowsConvergeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13 9L5 9C3.34315 9 2 10.3431 2 12L2 25C2 26.6569 3.34315 28 5 28L27 28C28.6569 28 30 26.6569 30 25L30 12C30 10.3431 28.6569 9 27 9L19 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M24 4L19 9L24 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M8 4L13 9L8 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
