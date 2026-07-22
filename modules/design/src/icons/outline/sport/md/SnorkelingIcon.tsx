import type { SVGProps } from "react";

export const SnorkelingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29 4V21.5C29 25.6421 25.6421 29 21.5 29C17.8716 29 14.8449 26.4234 14.15 23H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 8C3 6.34314 4.34315 5 6 5H22C23.6569 5 25 6.34315 25 8V11.8026C25 13.1389 24.1161 14.3141 22.8323 14.6848L18.2778 16L15.6119 12.3708C14.8127 11.2828 13.1873 11.2828 12.3881 12.3708L9.72222 16L5.1677 14.6848C3.88385 14.3141 3 13.1389 3 11.8026V8Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M15 23H13C11.8954 23 11 22.1046 11 21C11 19.8954 11.8954 19 13 19H15C16.1046 19 17 19.8954 17 21C17 22.1046 16.1046 23 15 23Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
