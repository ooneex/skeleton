import type { SVGProps } from "react";

export const FaceSoldierIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7 31L7.15472 32C8.62996 39.9667 15.6108 45.5 24 45.5C32.3892 45.5 39.37 39.9667 40.8453 32L41 31"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M24 3C11.8497 3 3 12.6431 3 24.5385V31H5.61484C7.65936 31 9.4979 29.7552 10.2572 27.857L11 26H37L37.7428 27.857C38.5021 29.7552 40.3406 31 42.3852 31H45V24.5385C45 12.6431 36.1503 3 24 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M20 34H28" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M20 13L24 9L28 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20 20L24 16L28 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
