import type { SVGProps } from "react";

export const PramIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 9.00001L19.2277 3.72187" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M3 9V7C3 5.89543 2.10457 5 1 5V5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M21 9V8C21 4.68629 18.3137 2 15 2H13V9"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M17 23C15.8954 23 15 22.1046 15 21C15 19.8954 15.8954 19 17 19C18.1046 19 19 19.8954 19 21C19 22.1046 18.1046 23 17 23Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M7 23C5.89543 23 5 22.1046 5 21C5 19.8954 5.89543 19 7 19C8.10457 19 9 19.8954 9 21C9 22.1046 8.10457 23 7 23Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M7 16H17C19.2091 16 21 14.2091 21 12V9H3V12C3 14.2091 4.79086 16 7 16Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
