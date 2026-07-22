import type { SVGProps } from "react";

export const FaceManIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m12,18.5c1.381,0,2.5-1.119,2.5-2.5h-5c0,1.381,1.119,2.5,2.5,2.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="m2.985,10.63c2.62-3.493,7.251.5,12.285-4.054,2.465,3.903,5.715,4.106,5.715,4.106"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-cap="butt"
      />
      <circle cx="8.25" cy="13.25" r="1.25" fill="currentColor" strokeWidth="0" data-color="color-2" data-cap="butt" />
      <circle cx="15.75" cy="13.25" r="1.25" fill="currentColor" strokeWidth="0" data-color="color-2" data-cap="butt" />
      <rect
        x="3"
        y="2"
        width="18"
        height="20"
        rx="9"
        ry="9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
