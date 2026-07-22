import type { SVGProps } from "react";

export const GrillToolsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M23 20V3" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M9 20V13" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M27 3H19V14H27V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M20 20H26V26C26 27.6569 24.6569 29 23 29C21.3431 29 20 27.6569 20 26V20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M6 20H12V26C12 27.6569 10.6569 29 9 29C7.34315 29 6 27.6569 6 26V20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M13 3V9C13 11.2091 11.2091 13 9 13V13C6.79086 13 5 11.2091 5 9V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
