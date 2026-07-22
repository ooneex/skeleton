import type { SVGProps } from "react";

export const RadarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21.6569 10.3431C20.2091 8.89543 18.2091 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C18.2091 24 20.2091 23.1046 21.6569 21.6569"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M25.3333 25.3333L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M25.3333 6.66675L18 14.0001"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 29.3334C23.3638 29.3334 29.3334 23.3639 29.3334 16.0001C29.3334 8.63628 23.3638 2.66675 16 2.66675C8.63622 2.66675 2.66669 8.63628 2.66669 16.0001C2.66669 23.3639 8.63622 29.3334 16 29.3334Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 18.6666C17.4727 18.6666 18.6666 17.4727 18.6666 15.9999C18.6666 14.5272 17.4727 13.3333 16 13.3333C14.5272 13.3333 13.3333 14.5272 13.3333 15.9999C13.3333 17.4727 14.5272 18.6666 16 18.6666Z"
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
