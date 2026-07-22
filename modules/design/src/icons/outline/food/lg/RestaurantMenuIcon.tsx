import type { SVGProps } from "react";

export const RestaurantMenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M7 37H38" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M33 3H12C9.23858 3 7 5.23858 7 8V40C7 42.7614 9.23858 45 12 45H33C35.7614 45 38 42.7614 38 40V8C38 5.23858 35.7614 3 33 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M43 7V41"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M31 31V10H30C27.7909 10 26 11.7909 26 14V25H30.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 31V21V21.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 21C19.2091 21 21 18.5376 21 15.5C21 12.4624 19.2091 10 17 10C14.7909 10 13 12.4624 13 15.5C13 18.5376 14.7909 21 17 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
