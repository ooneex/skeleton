import type { SVGProps } from "react";

export const Html5Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M3 4H45L40.5 40.9182L23.9999 45.5L7.5 40.9182L3 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M36 11H11.7245L13 22H35L33.5 35.5L24 38L14.5 35.5L14 31"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
