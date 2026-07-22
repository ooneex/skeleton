import type { SVGProps } from "react";

export const BellIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19.1333 38.9046L19.146 38.85C19.058 39.221 19 39.602 19 40C19 42.761 21.239 45 24 45C26.761 45 29 42.761 29 40C29 39.603 28.942 39.221 28.854 38.85L28.8744 38.9387"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M42 37V34C42 34 37 30 37 20V16C37 8.82 31.18 3 24 3C16.82 3 11 8.82 11 16V20C11 30 6 34 6 34V37C18 39.667 30 39.667 42 37Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
