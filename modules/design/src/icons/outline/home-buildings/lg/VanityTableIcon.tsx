import type { SVGProps } from "react";

export const VanityTableIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 11L12 23L12.5 22.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M26 21L35.5 11.5L34.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M12 27V15C12 8.37258 17.3726 3 24 3V3C30.6274 3 36 8.37258 36 15V27"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M37 41V45H34L32 41"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M11 41V45H14L16 41"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9 41L39 41C41.2091 41 43 39.2091 43 37L43 31C43 28.7909 41.2091 27 39 27L9 27C6.79086 27 5 28.7909 5 31L5 37C5 39.2091 6.79086 41 9 41Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20 34L28 34"
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
