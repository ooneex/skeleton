import type { SVGProps } from "react";

export const SandwichIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M3 19H29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 9V8C3 6.34315 4.34315 5 6 5H26C27.6569 5 29 6.34315 29 8V9H3Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M3 23V24C3 25.6569 4.34315 27 6 27H26C27.6569 27 29 25.6569 29 24V23H3Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M3 14C3 14 4.53344 15 5.6 15C7.72178 15 8.68329 13 10.8 13C12.9167 13 13.8782 15 16 15C18.1163 15 19.0781 13 21.2 13C23.3167 13 24.2782 15 26.4 15C27.4666 15 29 14 29 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
