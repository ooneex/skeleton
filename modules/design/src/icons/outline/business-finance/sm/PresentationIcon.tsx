import type { SVGProps } from "react";

export const PresentationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5.5 6C6.605 6 7.5 5.105 7.5 4C7.5 2.895 6.605 2 5.5 2C4.395 2 3.5 2.895 3.5 4C3.5 5.105 4.395 6 5.5 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M21 13V5C21 3.89543 20.1045 3 19 3H12"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M23 17H12"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M18 21.5L15 17L15.3333 17.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8.49939 13L7.49999 22H3.49959L3.09955 15.5L1.49939 14.6875L2.06326 11.4805C2.31547 10.0461 3.5615 9 5.01794 9H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
