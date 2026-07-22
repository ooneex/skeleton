import type { SVGProps } from "react";

export const SuitcasePlayIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 11V3H32V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M3 38L3 16C3 13.2386 5.23708 11 7.9985 11L40.0081 11C42.7695 11 45 13.2386 45 16L45 38C45 40.7614 42.7735 43 40.0121 43L7.98791 43C5.22649 43 3 40.7614 3 38Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M19 18.75L33 27L19 35.25V18.75Z"
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
