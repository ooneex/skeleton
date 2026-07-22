import type { SVGProps } from "react";

export const HangingOrnamentsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M6 16H18" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M12 8V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M20 1L20 4V3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4 1L4 4V3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M11 10V8H13V10" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M18 16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16C6 12.6863 8.68629 10 12 10C15.3137 10 18 12.6863 18 16Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M22 6C22 7.10457 21.1046 9 20 9C18.8954 9 18 7.10457 18 6C18 4.89543 18.8954 4 20 4C21.1046 4 22 4.89543 22 6Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M6 6C6 7.10457 5.10457 9 4 9C2.89543 9 2 7.10457 2 6C2 4.89543 2.89543 4 4 4C5.10457 4 6 4.89543 6 6Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
