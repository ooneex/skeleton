import type { SVGProps } from "react";

export const Bicycle3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M33.5 16.5L24 31H21.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M29 10H37.5C39.433 10 41 11.567 41 13.5C41 15.0344 40.0126 16.3382 38.6386 16.8106"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <circle
        cx="10"
        cy="31"
        r="8"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <circle
        cx="38"
        cy="31"
        r="8"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 14L22.4315 29.6193C22.7025 30.2774 22.2186 31 21.5068 31H11.1232C10.2773 31 9.81351 30.0152 10.3522 29.3631L18.5 19.5L33.7845 16.4663"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M13 14H20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M38 31L32 10H27" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
