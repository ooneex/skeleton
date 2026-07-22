import type { SVGProps } from "react";

export const GrenadeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21.4301 6C22.5346 6 23.4301 5.10457 23.4301 4C23.4301 2.89543 22.5346 2 21.4301 2C20.3255 2 19.4301 2.89543 19.4301 4C19.4301 5.10457 20.3255 6 21.4301 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        data-color="color-2"
        fill="none"
      />
      <path d="M3 15H19" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M23 14.2857C23 10.3693 21.5636 6.78779 19.26 4.63448C18.79 4.19519 18.1527 4 17.5094 4H14H14.2138"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M8 8V3H14V8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M11 22C6.58172 22 3 18.4183 3 14C3 11.815 3.87598 9.80867 5.29591 8.53902C5.72778 8.15285 6.30829 8 6.88763 8H15.1124C15.6917 8 16.2722 8.15285 16.7041 8.53902C18.124 9.80867 19 11.815 19 14C19 18.4183 15.4183 22 11 22Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
