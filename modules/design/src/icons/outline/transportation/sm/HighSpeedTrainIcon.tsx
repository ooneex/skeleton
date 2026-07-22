import type { SVGProps } from "react";

export const HighSpeedTrainIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13 4L10 11H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M21 4L13.0769 4C6.95931 4 2 8.95931 2 15.0769V15.0769C2 15.5867 2.41328 16 2.92308 16L21 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M17 8H17.01" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M23 8H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
