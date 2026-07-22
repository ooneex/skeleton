import type { SVGProps } from "react";

export const Slacks2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M39 19L32 16V9" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M9 19L16 16V9" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M20 9V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M28 9V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 9H39" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M39 45H29.25L25.5 20H22.5L18.75 45H9V3H39V45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};
