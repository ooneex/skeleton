import type { SVGProps } from "react";

export const HangingOrnamentsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M27 1V5V4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M5 1V5V4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M7 21H25" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M16 8V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M14 12V8H18V12" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M25 21C25 25.9706 20.9706 30 16 30C11.0294 30 7 25.9706 7 21C7 16.0294 11.0294 12 16 12C20.9706 12 25 16.0294 25 21Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M30 7.8C30 9.3464 28.6569 12 27 12C25.3431 12 24 9.3464 24 7.8C24 6.2536 25.3431 5 27 5C28.6569 5 30 6.2536 30 7.8Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M8 7.8C8 9.3464 6.65685 12 5 12C3.34315 12 2 9.3464 2 7.8C2 6.2536 3.34315 5 5 5C6.65685 5 8 6.2536 8 7.8Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
