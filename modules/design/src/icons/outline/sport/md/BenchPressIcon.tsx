import type { SVGProps } from "react";

export const BenchPressIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M23 8V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M29 8H31" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 24H22" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M2 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 29V24L13 19H19L22 24V29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 8H25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M29 3L29 13" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
