import type { SVGProps } from "react";

export const WorkoutScheduleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 0H18V3H16V0Z" fill="currentColor" />
      <path d="M6 0H8V3H6V0Z" fill="currentColor" />
      <path
        d="M7.25 15.5C7.94036 15.5 8.5 14.9404 8.5 14.25C8.5 13.5596 7.94036 13 7.25 13C6.55964 13 6 13.5596 6 14.25C6 14.9404 6.55964 15.5 7.25 15.5Z"
        fill="currentColor"
      />
      <path
        d="M16 6H18V3H20C21.6569 3 23 4.34315 23 6V9V12H21V9H3V18C3 18.5523 3.44772 19 4 19H10V21H4C2.34315 21 1 19.6569 1 18V6C1 4.34315 2.34315 3 4 3H6V6H8V3H16V6Z"
        fill="currentColor"
      />
      <path d="M24 17V19H12V17H24Z" fill="currentColor" data-color="color-2" />
      <path
        d="M13 15C13 14.4477 13.4477 14 14 14H15V22H14C13.4477 22 13 21.5523 13 21V15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M21 14H22C22.5523 14 23 14.4477 23 15V21C23 21.5523 22.5523 22 22 22H21V14Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
