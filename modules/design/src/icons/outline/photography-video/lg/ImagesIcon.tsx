import type { SVGProps } from "react";

export const ImagesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7 43L15 32.5L20.5 38.5L33 21L45 37"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M40 10H8C5.23858 10 3 12.2386 3 15V38C3 40.7614 5.23858 43 8 43H40C42.7614 43 45 40.7614 45 38V15C45 12.2386 42.7614 10 40 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M7 5L41 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15 25C17.2091 25 19 23.2091 19 21C19 18.7909 17.2091 17 15 17C12.7909 17 11 18.7909 11 21C11 23.2091 12.7909 25 15 25Z"
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
