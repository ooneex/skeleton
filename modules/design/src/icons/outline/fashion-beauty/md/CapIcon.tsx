import type { SVGProps } from "react";

export const CapIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16.2 3.29999C21.7 4.59999 26 9.19999 26 15V22.3"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M7 19.3C7 19.3 1 21.3 1 23.4C1 25.8 9.5 28.9 14.6 28.9C20.1 28.9 29.3 21.2 29.3 21.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M31 20.3C31 20.3 27.4 23 19 23C10.6 23 7 20.2541 7 20.2541V15C7 8.4 12.4 3 19 3C25.6 3 31 8.4 31 15V20.3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14.5 18C13.1193 18 12 16.6569 12 15C12 13.3431 13.1193 12 14.5 12C15.8807 12 17 13.3431 17 15C17 16.6569 15.8807 18 14.5 18Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
