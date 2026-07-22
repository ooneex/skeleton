import type { SVGProps } from "react";

export const TrophyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M25 5H29V9C29 11.2091 27.2091 13 25 13H24.7661"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M7.00002 5H3.00002V9C3.00002 11.2091 4.79088 13 7.00002 13H7.23334"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M16 20.0001V25" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M7 3V11C7 15.9706 11.0294 20 16 20C20.9706 20 25 15.9706 25 11V3H7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M22 29H10V28C10 26.3431 11.3431 25 13 25H19C20.6569 25 22 26.3431 22 28V29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
