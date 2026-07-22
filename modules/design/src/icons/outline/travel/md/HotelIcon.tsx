import type { SVGProps } from "react";

export const HotelIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13 29V23H19V29"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M6 6C6 4.34315 7.34315 3 9 3H23C24.6569 3 26 4.34315 26 6V20.5L28 21.5V29H4L4 21.5L6 20.5V6Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M13 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 18H19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M13 13H11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M13 8H11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 13H19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 8H19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
