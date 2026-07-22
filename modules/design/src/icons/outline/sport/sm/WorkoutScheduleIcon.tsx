import type { SVGProps } from "react";

export const WorkoutScheduleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 4V1" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 4V1" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M22 8L2 8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M9 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V11"
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
        d="M13 18H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M13 15C13 14.4477 13.4477 14 14 14H15V22H14C13.4477 22 13 21.5523 13 21V15Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M21 14H22C22.5523 14 23 14.4477 23 15V21C23 21.5523 22.5523 22 22 22H21V14Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
