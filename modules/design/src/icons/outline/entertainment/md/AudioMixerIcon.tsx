import type { SVGProps } from "react";

export const AudioMixerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M25 22V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M25 10V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M30 24L30 8C30 6.34315 28.6569 5 27 5L5 5C3.34315 5 2 6.34314 2 8L2 24C2 25.6569 3.34314 27 5 27L27 27C28.6569 27 30 25.6569 30 24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M13 23C16.866 23 20 19.866 20 16C20 12.134 16.866 9 13 9C9.13401 9 6 12.134 6 16C6 19.866 9.13401 23 13 23Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M13 17C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15C12.4477 15 12 15.4477 12 16C12 16.5523 12.4477 17 13 17Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="M24 15H26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
