import type { SVGProps } from "react";

export const CameraClockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 12.5V18H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M30 25L30 10C30 8.34315 28.6569 7 27 7L23 7L20 3L12 3L9 7L5 7C3.34315 7 2 8.34315 2 10L2 25C2 26.6569 3.34315 28 5 28L27 28C28.6569 28 30 26.6569 30 25Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
