import type { SVGProps } from "react";

export const RingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15 2L17 6" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M10 6H22" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M18.0283 10.1916L18.25 10L22 6.5V4.5L19 2H13L10 4.5L10 6.5L13.75 10L13.9577 10.1916"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M26 20C26 25.5228 21.5228 30 16 30C10.4772 30 6 25.5228 6 20C6 14.4772 10.4772 10 16 10C21.5228 10 26 14.4772 26 20Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
