import type { SVGProps } from "react";

export const ChessKnightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M17.7955 18C18.0625 17.209 18.2584 16.3865 18.378 15.5441C18.7194 13.1402 18.4254 10.678 17.5317 8.4557C15.8297 4.22372 11.6721 1.99377 7 2V4L3 8.14003L4.5 10.5L9 9C11.295 13.4572 7.61272 14.5784 5.85283 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M18.5 18H5.5C4.67157 18 4 18.6716 4 19.5V22H20V19.5C20 18.6716 19.3284 18 18.5 18Z"
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
