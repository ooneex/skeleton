import type { SVGProps } from "react";

export const TogglesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13 21C17.4183 21 21 17.4183 21 13C21 8.58172 17.4183 5 13 5C8.58172 5 5 8.58172 5 13C5 17.4183 8.58172 21 13 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M35 43C30.5817 43 27 39.4183 27 35C27 30.5817 30.5817 27 35 27C39.4183 27 43 30.5817 43 35C43 39.4183 39.4183 43 35 43Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M5 13C5 8.58172 8.58172 5 13 5H35C39.4183 5 43 8.58172 43 13C43 17.4183 39.4183 21 35 21H13C8.58172 21 5 17.4183 5 13Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M43 35C43 30.5817 39.4183 27 35 27H13C8.58172 27 5 30.5817 5 35C5 39.4183 8.58172 43 13 43H35C39.4183 43 43 39.4183 43 35Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
