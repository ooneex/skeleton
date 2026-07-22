import type { SVGProps } from "react";

export const ChimneyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 17V23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20 10V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20 23V29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M6 23H26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6 17H26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6 9.98636V29H26V9.98636" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M3 10V3H30V10H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
