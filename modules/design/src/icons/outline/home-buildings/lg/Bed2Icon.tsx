import type { SVGProps } from "react";

export const Bed2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M45 26V19C45 16.2386 42.7614 14 40 14H21V26"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M3 36H45" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 26H45" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 9V41" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M45 26L45 41" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M12 22C14.2091 22 16 20.2091 16 18C16 15.7909 14.2091 14 12 14C9.79086 14 8 15.7909 8 18C8 20.2091 9.79086 22 12 22Z"
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
