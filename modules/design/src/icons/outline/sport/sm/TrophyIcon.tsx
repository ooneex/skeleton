import type { SVGProps } from "react";

export const TrophyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18 3H22V6C22 7.65685 20.6569 9 19 9H18"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M6 3H2V6C2 7.65685 3.34315 9 5 9H6"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M12 14V18" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M6 3V8C6 11.3137 8.68629 14 12 14C15.3137 14 18 11.3137 18 8V3H6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 22H8V21C8 19.3431 9.34315 18 11 18H13C14.6569 18 16 19.3431 16 21V22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
