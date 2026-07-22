import type { SVGProps } from "react";

export const ChurchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M8 19L3 22L3 29H8" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M24 19L29 22L29 29H24" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M16 1V10V9.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M13 29V24C13 22.3431 14.3431 21 16 21V21C17.6569 21 19 22.3431 19 24V29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15 14.5V16H17V14.5C17 13.9477 16.5523 13.5 16 13.5C15.4477 13.5 15 13.9477 15 14.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M16 9L8 14V29H24V14L16 9Z" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M13 4L19 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
