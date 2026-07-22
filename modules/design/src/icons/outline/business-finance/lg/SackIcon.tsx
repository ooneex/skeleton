import type { SVGProps } from "react";

export const SackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M27 17.5L24 14.5L21 17.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M23.9999 45C13.2304 45 5.66663 41.6723 5.66663 32.7102C5.66663 26.1921 11.338 18.0494 18 13.5H29.9999C36.6619 18.0494 42.3333 26.1921 42.3333 32.7102C42.3333 41.6723 34.7695 45 23.9999 45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M18 13.5L13 4.5L18 3L24 8L30.0001 3L35 4.5L30 13.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M26.8571 25L23 25C21.3431 25 20 26.3431 20 28V28C20 29.6569 21.3431 31 23 31H25C26.6569 31 28 32.3431 28 34V34C28 35.6569 26.6569 37 25 37H21.1429"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 39V37"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 25V23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
