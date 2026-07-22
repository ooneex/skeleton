import type { SVGProps } from "react";

export const TramIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9.5 7L8 2" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M14.5 7L16 2" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M4 14H20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M17.25 18.25C17.25 18.9404 16.6904 19.5 16 19.5C15.3096 19.5 14.75 18.9404 14.75 18.25C14.75 17.5596 15.3096 17 16 17C16.6904 17 17.25 17.5596 17.25 18.25Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M9.5 18.25C9.5 18.9404 8.94036 19.5 8.25 19.5C7.55964 19.5 7 18.9404 7 18.25C7 17.5596 7.55964 17 8.25 17C8.94036 17 9.5 17.5596 9.5 18.25Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M0.999995 14L1.00002 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M23 14L23 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20 22V9C20 7.89543 19.1046 7 18 7H6C4.89543 7 4 7.89543 4 9V22H20Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M5 2H19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
    </svg>
  );
};
