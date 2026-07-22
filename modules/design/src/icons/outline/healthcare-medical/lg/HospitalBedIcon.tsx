import type { SVGProps } from "react";

export const HospitalBedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 36H45" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M3 17H13C15.7614 17 18 19.2386 18 22V26"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M3 26H45" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 9V41" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M45 21L45 41" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M29 8V2H35V8H41V14H35V20H29V14H23V8H29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
