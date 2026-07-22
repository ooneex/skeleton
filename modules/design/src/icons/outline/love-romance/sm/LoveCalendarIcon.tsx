import type { SVGProps } from "react";

export const LoveCalendarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M22 8L2 8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M17 4V1" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 4V1" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M9.5 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M7.25 15.5C7.94036 15.5 8.5 14.9404 8.5 14.25C8.5 13.5596 7.94036 13 7.25 13C6.55964 13 6 13.5596 6 14.25C6 14.9404 6.55964 15.5 7.25 15.5Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M17 21.5C18.109 21 22 18.229 22 15.689C22 14.204 20.794 13 19.308 13C18.328 13 17.596 13.614 17 14.303C16.405 13.613 15.672 13 14.692 13C13.205 13 12 14.204 12 15.689C12 18.229 15.891 21 17 21.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
