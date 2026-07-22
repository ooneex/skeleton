import type { SVGProps } from "react";

export const UserBubbleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M40 7H8C5.23858 7 3 9.23858 3 12V30C3 32.7614 5.23858 35 8 35H17L24 44L31 35H40C42.7614 35 45 32.7614 45 30V12C45 9.23858 42.7614 7 40 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 18C25.6569 18 27 16.6569 27 15C27 13.3431 25.6569 12 24 12C22.3431 12 21 13.3431 21 15C21 16.6569 22.3431 18 24 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 22C20.1342 22 17 25.1841 17 29.1113C21.6664 30.2962 26.3336 30.2962 31 29.1113C31 25.1841 27.8658 22 24 22Z"
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
