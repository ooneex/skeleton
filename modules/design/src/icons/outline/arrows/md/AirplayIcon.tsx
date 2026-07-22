import type { SVGProps } from "react";

export const AirplayIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M26 26H27C28.6569 26 30 24.6569 30 23V7C30 5.34315 28.6569 4 27 4H5C3.34315 4 2 5.34315 2 7V23C2 24.6569 3.34315 26 5 26H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M9 29H23L16 18L9 29Z"
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
