import type { SVGProps } from "react";

export const CeilingLightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M15 16V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 2V4V3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9 8H8V10H9V8ZM9 10H15V8H9V10Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M15 9.38813V7C15 5.34315 13.6569 4 12 4V4C10.3431 4 9 5.34315 9 7V9.38813L2 13V16H22V13L15 9.38813Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
