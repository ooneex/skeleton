import type { SVGProps } from "react";

export const TreesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29.6095 16.25L29 17.25L35.8571 6L44.2381 22.5L41.1905 23.25L45 34.5H37.8889L37.381 41"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M18.3905 16.25L19 17.25L12.1429 6L3.7619 22.5L6.80952 23.25L3 34.5H10.1111L10.619 41"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15.75 23.25L24 6L32.25 23.25L29.25 24L33 37.5H24H15L18.75 24L15.75 23.25Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 37.5V42"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
