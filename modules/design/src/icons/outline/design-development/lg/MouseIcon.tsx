import type { SVGProps } from "react";

export const MouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M7 20L20 22" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M28 22L41 20" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M20 17H28" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M20 22H28" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M24 3L24 12" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M7 20L7 28C7 37.3888 14.6112 45 24 45C33.3888 45 41 37.3888 41 28L41 20C41 10.6112 33.3888 3 24 3C14.6112 3 7 10.6112 7 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20 16L20 23C20 25.2091 21.7909 27 24 27C26.2091 27 28 25.2091 28 23L28 16C28 13.7909 26.2091 12 24 12C21.7909 12 20 13.7909 20 16Z"
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
