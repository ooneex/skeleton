import type { SVGProps } from "react";

export const SimCardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8 29L24 29C25.6569 29 27 27.6569 27 26L27 6C27 4.34315 25.6569 3 24 3L14.1222 3C13.3133 3 12.5387 3.32666 11.9741 3.90589L5.85182 10.1862C5.30567 10.7464 5 11.4979 5 12.2803L5 26C5 27.6569 6.34314 29 8 29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M15 20H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M21 24H11L11 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M11 16H21L21 20"
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
