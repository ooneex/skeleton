import type { SVGProps } from "react";

export const UserContactIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M28 27L28 5C28 3.34315 26.6569 2 25 2L7 2C5.34314 2 4 3.34315 4 5L4 27C4 28.6569 5.34314 30 6.99999 30L25 30C26.6569 30 28 28.6569 28 27Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 14C17.6569 14 19 12.6569 19 11C19 9.34315 17.6569 8 16 8C14.3431 8 13 9.34315 13 11C13 12.6569 14.3431 14 16 14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M16 17C12.6863 17 10 19.6863 10 23L11.1493 23.2873C14.3341 24.0835 17.6659 24.0835 20.8507 23.2873L22 23C22 19.6863 19.3137 17 16 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
