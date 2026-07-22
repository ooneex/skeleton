import type { SVGProps } from "react";

export const HardDriveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M37 33H11"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8 41L40 41C42.7614 41 45 38.7614 45 36L45 28L41.9606 11.1142C41.5319 8.73276 39.4594 7 37.0396 7L24 7L10.9604 7C8.5406 7 6.4681 8.73276 6.03944 11.1142L3 28L3 36C3 38.7614 5.23858 41 8 41Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M3 28H45" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
    </svg>
  );
};
