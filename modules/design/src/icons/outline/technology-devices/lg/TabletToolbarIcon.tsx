import type { SVGProps } from "react";

export const TabletToolbarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M36 3H12C9.23858 3 7 5.23858 7 8V40C7 42.7614 9.23858 45 12 45H36C38.7614 45 41 42.7614 41 40V8C41 5.23858 38.7614 3 36 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14 12C15.1046 12 16 11.1046 16 10C16 8.89543 15.1046 8 14 8C12.8954 8 12 8.89543 12 10C12 11.1046 12.8954 12 14 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M34 40H14C12.8954 40 12 39.1046 12 38V37C12 35.8954 12.8954 35 14 35H34C35.1046 35 36 35.8954 36 37V38C36 39.1046 35.1046 40 34 40Z"
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
