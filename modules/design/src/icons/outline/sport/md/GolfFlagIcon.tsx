import type { SVGProps } from "react";

export const GolfFlagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11 21.5V3L20 7L11.5 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15 17.0151C15.3303 17.0051 15.6638 17 16 17C23.732 17 30 19.6863 30 23C30 26.3137 23.732 29 16 29C8.26801 29 2 26.3137 2 23C2 21.155 3.94305 19.5045 7 18.4039"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11 24.5C12.6569 24.5 14 23.8284 14 23C14 22.1716 12.6569 21.5 11 21.5C9.34315 21.5 8 22.1716 8 23C8 23.8284 9.34315 24.5 11 24.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M21 25C22.1046 25 23 24.1046 23 23C23 21.8954 22.1046 21 21 21C19.8954 21 19 21.8954 19 23C19 24.1046 19.8954 25 21 25Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
