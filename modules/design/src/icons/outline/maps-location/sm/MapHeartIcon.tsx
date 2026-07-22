import type { SVGProps } from "react";

export const MapHeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15.5 10V6V7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8.5 2.51807V18" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M22 10V3.5L15.5 6L8.5 2.5L2 5V20.5L8.5 18V16.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M18 22.5C19.109 22 23 19.229 23 16.689C23 15.204 21.794 14 20.308 14C19.328 14 18.596 14.614 18 15.303C17.405 14.613 16.672 14 15.692 14C14.205 14 13 15.204 13 16.689C13 19.229 16.891 22 18 22.5Z"
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
