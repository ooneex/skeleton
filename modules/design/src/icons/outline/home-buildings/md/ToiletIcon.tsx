import type { SVGProps } from "react";

export const ToiletIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M6 20H26" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M8 12L8 6C8 4.34315 9.34314 3 11 3L21 3C22.6569 3 24 4.34315 24 6L24 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M11.875 29V25.8L11.2901 25.7303C8.27235 25.3707 6 22.8116 6 19.7725V17C6 16.4477 6.44772 16 7 16L25 16C25.5523 16 26 16.4477 26 17V19.7725C26 22.8116 23.7277 25.3707 20.7099 25.7303L20.125 25.8V29H11.875Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20 7L18 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
