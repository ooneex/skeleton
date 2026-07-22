import type { SVGProps } from "react";

export const GridRectCircleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
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
        transform="matrix(1 0 0 -1 28 43)"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M12.5 43C16.6421 43 20 39.6421 20 35.5C20 31.3579 16.6421 28 12.5 28C8.35786 28 5 31.3579 5 35.5C5 39.6421 8.35786 43 12.5 43Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M35.5 20C39.6421 20 43 16.6421 43 12.5C43 8.35786 39.6421 5 35.5 5C31.3579 5 28 8.35786 28 12.5C28 16.6421 31.3579 20 35.5 20Z"
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
