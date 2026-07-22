import type { SVGProps } from "react";

export const GridEmptyObjBottomRightIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M33 43H30.5C29.1193 43 28 41.8807 28 40.5L28 38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M33 28H30.5C29.1193 28 28 29.1193 28 30.5L28 33"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M38 28H40.5C41.8807 28 43 29.1193 43 30.5V33"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M38 43H40.5C41.8807 43 43 41.8807 43 40.5V38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
