import type { SVGProps } from "react";

export const MirrorWithFrameIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M15.5 9.5L7 18L8 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M21 12L25 8L24.651 8.34896"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M25 12H29" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M3 12H7" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M3 27H29" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M22 4L10 4C8.34315 4 7 5.34314 7 7L7 20C7 21.6569 8.34315 23 10 23L22 23C23.6569 23 25 21.6569 25 20L25 7C25 5.34315 23.6569 4 22 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 29L3 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M29 3L29 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
