import type { SVGProps } from "react";

export const SignClosedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6 6L12 1.5L18 6"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M4 21L2 21L2 6L22 6L22 21L20 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M7 17C7 19.7614 9.23858 22 12 22C13.807 22 15.3901 21.0415 16.2685 19.6051C16.3125 19.5333 16.2503 19.4448 16.1669 19.4559C15.9487 19.485 15.7261 19.5 15.5 19.5C12.7386 19.5 10.5 17.2614 10.5 14.5C10.5 13.6954 10.6901 12.9351 11.0277 12.2617C11.0655 12.1865 11.002 12.0989 10.9198 12.117C8.67765 12.6107 7 14.6094 7 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15 10H18V10.5L15 13.5L15 14H18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
