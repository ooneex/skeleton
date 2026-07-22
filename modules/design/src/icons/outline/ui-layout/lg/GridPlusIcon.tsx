import type { SVGProps } from "react";

export const GridPlusIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M35.5 28V43"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M43 35.5L28 35.5"
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
