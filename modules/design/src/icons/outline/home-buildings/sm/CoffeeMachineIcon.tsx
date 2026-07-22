import type { SVGProps } from "react";

export const CoffeeMachineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 17H5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M3 13H5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M9 9V21H3V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M17 9V11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M13 15.8571L13 17C13 19.2091 14.7909 21 17 21C19.2091 21 21 19.2091 21 17L21 15.8571C21 15.3838 20.6162 15 20.1429 15L13.8571 15C13.3838 15 13 15.3838 13 15.8571Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M18 3H3V9H21V6C21 4.34315 19.6569 3 18 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
