import type { SVGProps } from "react";

export const ChessKnightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M36 38C42.078 19.7046 31.5764 2.97589 14 3.00003V7.00003L5 16.5L7.01545 21.0303L17.5 18.5C22.3942 28.2924 12 30.0076 12 38"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M15.5 14C16.3284 14 17 13.3284 17 12.5C17 11.6716 16.3284 11 15.5 11C14.6716 11 14 11.6716 14 12.5C14 13.3284 14.6716 14 15.5 14Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M15.5 13C15.7761 13 16 12.7761 16 12.5C16 12.2239 15.7761 12 15.5 12C15.2239 12 15 12.2239 15 12.5C15 12.7761 15.2239 13 15.5 13Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M37 38H11C8.79086 38 7 39.7909 7 42V45H41V42C41 39.7909 39.2091 38 37 38Z"
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
