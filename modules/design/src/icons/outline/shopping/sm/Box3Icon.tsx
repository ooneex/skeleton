import type { SVGProps } from "react";

export const Box3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18.146 10.0994L6 4"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M13 13V22.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M23 7.5L13 13L1 7" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M23 7.5V15.3676C23 16.0701 22.6314 16.7212 22.029 17.0826L13 22.5L2.10557 17.0528C1.428 16.714 1 16.0215 1 15.2639L1 6.5L11 1.5L23 7.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};
