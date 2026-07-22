import type { SVGProps } from "react";

export const ClockCoinsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M31 22.5V27.5C31 29.433 27.866 31 24 31C20.134 31 17 29.433 17 27.5V22.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 22.7022 6.70964 28.3045 13 29.6778"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 26C27.866 26 31 24.433 31 22.5C31 20.567 27.866 19 24 19C20.134 19 17 20.567 17 22.5C17 24.433 20.134 26 24 26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 8V16H7"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
