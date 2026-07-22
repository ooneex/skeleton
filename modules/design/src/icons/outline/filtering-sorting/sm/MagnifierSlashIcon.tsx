import type { SVGProps } from "react";

export const MagnifierSlashIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <line
        x1="20.5"
        y1="20.5"
        x2="15"
        y2="15"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m16.892,8.766c.071.401.108.813.108,1.234,0,3.866-3.134,7-7,7-.421,0-.833-.037-1.234-.108"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m5.05,14.95c-1.267-1.267-2.05-3.017-2.05-4.95,0-3.866,3.134-7,7-7,1.933,0,3.683.783,4.95,2.05"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="18"
        y1="2"
        x2="2"
        y2="18"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
    </svg>
  );
};
