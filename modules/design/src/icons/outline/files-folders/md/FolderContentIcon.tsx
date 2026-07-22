import type { SVGProps } from "react";

export const FolderContentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M27 9V3H5V5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 12V26C3 27.6569 4.34315 29 6 29H26C27.6569 29 29 27.6569 29 26V16C29 14.3431 27.6569 13 26 13H17.3L13.4 9H6C4.34315 9 3 10.3431 3 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
