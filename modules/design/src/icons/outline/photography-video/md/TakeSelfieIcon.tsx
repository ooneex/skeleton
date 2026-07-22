import type { SVGProps } from "react";

export const TakeSelfieIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M3 10V6C3 4.34315 4.34315 3 6 3H10"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M29 22V26C29 27.6569 27.6569 29 26 29H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10 29H6C4.34315 29 3 27.6569 3 26V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 16C17.933 16 19.5 14.433 19.5 12.5C19.5 10.567 17.933 9 16 9C14.067 9 12.5 10.567 12.5 12.5C12.5 14.433 14.067 16 16 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M25.5 12V1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M31 6.5L20 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 19C12.6489 19 9.84774 21.3548 9.16107 24.5L9.97425 24.8567C13.8148 26.5414 18.1852 26.5414 22.0257 24.8567L22.8389 24.5C22.1522 21.3548 19.3511 19 16 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
