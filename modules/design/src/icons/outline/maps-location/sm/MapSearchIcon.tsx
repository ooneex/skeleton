import type { SVGProps } from "react";

export const MapSearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15.5 9V6V7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8.5 2.51807V18" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M22 10.5V3.5L15.5 6L8.5 2.5L2 5V20.5L8.5 18L10.4102 18.9551"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M17.5 20C19.433 20 21 18.433 21 16.5C21 14.567 19.433 13 17.5 13C15.567 13 14 14.567 14 16.5C14 18.433 15.567 20 17.5 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22.5 21.5001L19.975 18.9751"
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
