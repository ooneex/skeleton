import type { SVGProps } from "react";

export const SpeakerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 26C19.0376 26 21.5 23.5376 21.5 20.5C21.5 17.4624 19.0376 15 16 15C12.9624 15 10.5 17.4624 10.5 20.5C10.5 23.5376 12.9624 26 16 26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 11C17.3807 11 18.5 9.88071 18.5 8.5C18.5 7.11929 17.3807 6 16 6C14.6193 6 13.5 7.11929 13.5 8.5C13.5 9.88071 14.6193 11 16 11Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M24 2L8 2C6.34315 2 5 3.34315 5 5L5 27C5 28.6569 6.34315 30 8 30L24 30C25.6569 30 27 28.6569 27 27L27 5C27 3.34315 25.6569 2 24 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 21.5C16.5523 21.5 17 21.0523 17 20.5C17 19.9477 16.5523 19.5 16 19.5C15.4477 19.5 15 19.9477 15 20.5C15 21.0523 15.4477 21.5 16 21.5Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
      />
    </svg>
  );
};
