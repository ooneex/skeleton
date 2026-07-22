import type { SVGProps } from "react";

export const MobileToolbarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11 26H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 2L10 2C8.34315 2 7 3.34315 7 5L7 27C7 28.6569 8.34315 30 10 30L22 30C23.6569 30 25 28.6569 25 27L25 5C25 3.34315 23.6569 2 22 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M17.75 6.5L14.25 6.5C14.1119 6.5 14 6.38807 14 6.25C14 6.11193 14.1119 6 14.25 6L17.75 6C17.8881 6 18 6.11193 18 6.25C18 6.38807 17.8881 6.5 17.75 6.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
