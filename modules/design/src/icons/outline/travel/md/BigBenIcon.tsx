import type { SVGProps } from "react";

export const BigBenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19 7V6.33628L12 2L5 6.33628V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M5 7H19" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M29 23L17 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12 30V26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M19 2V19H5V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M17 19V30H7V19" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M17 30H29V19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M24 30V19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
