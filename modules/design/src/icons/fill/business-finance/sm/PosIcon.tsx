import type { SVGProps } from "react";

export const PosIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1C3.34315 1 2 2.34315 2 4V12.2361L3 14.2361V20C3 21.6569 4.34315 23 6 23H7V15C7 12.7909 8.79086 11 11 11H20V4C20 2.34315 18.6569 1 17 1H5ZM6 8H16V4H6V8Z"
        fill="currentColor"
      />
      <path
        d="M23 21C23 22.1046 22.1046 23 21 23L11 23C9.89543 23 9 22.1046 9 21V18H23V21Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M23 16L23 15C23 13.8954 22.1046 13 21 13H11C9.89543 13 9 13.8954 9 15V16H23Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
