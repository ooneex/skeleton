import type { SVGProps } from "react";

export const MapLockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15.5 8.74219V6V6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8.5 2.51807V18" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M22 9V3.5L15.5 6L8.5 2.5L2 5V20.5L8.5 18L10 18.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M22 17H15C14.4477 17 14 17.4477 14 18V21C14 21.5523 14.4477 22 15 22H22C22.5523 22 23 21.5523 23 21V18C23 17.4477 22.5523 17 22 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 17V14.5C16 13.119 17.119 12 18.5 12C19.881 12 21 13.119 21 14.5V17"
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
