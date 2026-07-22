import type { SVGProps } from "react";

export const ApronIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M20 14H22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M2 14H4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M8.36652 8H15.6056"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M20 22H4V11H4.44444C6.65358 11 8.44444 9.20914 8.44444 7V5.55556C8.44444 3.59188 10.0363 2 12 2C13.9637 2 15.5556 3.59188 15.5556 5.55556V7C15.5556 9.20914 17.3464 11 19.5556 11H20V22Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9 14H15V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V14Z"
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
