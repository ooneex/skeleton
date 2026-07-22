import type { SVGProps } from "react";

export const GridSearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        width="15"
        height="15"
        rx="2.5"
        transform="matrix(1 0 0 -1 5 43)"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        data-cap="butt"
      />
      <rect
        width="15"
        height="15"
        rx="2.5"
        transform="matrix(1 0 0 -1 5 20)"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        data-cap="butt"
      />
      <rect
        width="15"
        height="15"
        rx="2.5"
        transform="matrix(1 0 0 -1 28 20)"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M35 42C38.866 42 42 38.866 42 35C42 31.134 38.866 28 35 28C31.134 28 28 31.134 28 35C28 38.866 31.134 42 35 42Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M44 44L40 40L40.5 40.5"
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
