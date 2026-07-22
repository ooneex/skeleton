import type { SVGProps } from "react";

export const SuitcaseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M15 10V3H33V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M19.5 28H8C5.23858 28 3 25.7614 3 23V10H45V23C45 25.7614 42.7614 28 40 28H28.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M28 25H20V29.5C20 31.7091 21.7909 33.5 24 33.5C26.2091 33.5 28 31.7091 28 29.5V25Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 33V43H45V33"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
