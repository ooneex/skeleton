import type { SVGProps } from "react";

export const ClonePlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13 18V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8 13L18 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9 23L9 26C9 27.6569 10.3431 29 12 29L26 29C27.6569 29 29 27.6569 29 26L29 12C29 10.3431 27.6569 9 26 9L23 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M6 23L20 23C21.6569 23 23 21.6569 23 20L23 6C23 4.34315 21.6569 3 20 3L6 3C4.34315 3 3 4.34314 3 6L3 20C3 21.6569 4.34315 23 6 23Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
