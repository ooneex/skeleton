import type { SVGProps } from "react";

export const SpinningBikeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M8.80959 14.7201L5 9" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M15 8L3 21H2.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M3 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M20 2L19 4H14.618C13.8747 4 13.3912 4.78231 13.7236 5.44722L18 14L17.75 13.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M1 21H6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M19 22C21.2091 22 23 20.2091 23 18C23 15.7909 21.2091 14 19 14C16.7909 14 15 15.7909 15 18C15 20.2091 16.7909 22 19 22Z"
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
