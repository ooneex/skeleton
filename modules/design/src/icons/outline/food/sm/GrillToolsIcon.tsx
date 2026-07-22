import type { SVGProps } from "react";

export const GrillToolsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 15V2" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M6 15V10" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M21 2H13V10H21V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M4 15H8V20C8 21.1046 7.10457 22 6 22C4.89543 22 4 21.1046 4 20V15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15 15H19V20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20V15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9 2V7C9 8.65685 7.65685 10 6 10V10C4.34315 10 3 8.65685 3 7V2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
