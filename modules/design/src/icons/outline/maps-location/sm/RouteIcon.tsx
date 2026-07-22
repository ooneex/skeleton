import type { SVGProps } from "react";

export const RouteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11 4H18C20.2091 4 22 5.79086 22 8V8C22 10.2091 20.2091 12 18 12H15.7394H15.8303"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M7.93808 12H8H6C3.79086 12 2 13.7909 2 16V16C2 18.2091 3.79086 20 6 20H20H19.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M18 18L20 20L18 22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5 4H7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
