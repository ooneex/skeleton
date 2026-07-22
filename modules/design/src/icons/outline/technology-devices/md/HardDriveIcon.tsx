import type { SVGProps } from "react";

export const HardDriveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 28L27 28C28.6569 28 30 26.6569 30 25L30 19L27.9005 6.50296C27.6578 5.05817 26.407 4 24.942 4L7.05804 4C5.59299 4 4.34223 5.05817 4.0995 6.50297L2 19L2 25C2 26.6569 3.34315 28 5 28Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M2 19H30" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path
        d="M24 23H8"
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
