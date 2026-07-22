import type { SVGProps } from "react";

export const PunchingBagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16.7148 2L19 8" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M15.2852 2L13 8" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M10 25H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 13H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 11C22 9.34315 20.6569 8 19 8H16H13C11.3431 8 10 9.34315 10 11V27C10 28.6569 11.3431 30 13 30H19C20.6569 30 22 28.6569 22 27V11Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M10 1.99997H22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
