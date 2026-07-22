import type { SVGProps } from "react";

export const FarmIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M37 43L26 34" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M28 27V24.5C28 22.567 29.567 21 31.5 21V21C33.433 21 35 22.567 35 24.5V27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M15 32H5H5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M5 12H21" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M26 42.9455V34H37V42.9455"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M20 32L20 43H43V32" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M15 43H5V11C5 6.58172 8.58172 3 13 3C17.4183 3 21 6.58172 21 11V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M42.5 17.5L31.5 13L20.5 17.5L19 27L31.5 27L44 27L42.5 17.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
