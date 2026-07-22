import type { SVGProps } from "react";

export const ChimneyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 7V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 12V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M14 17V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M5 17H19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5 7V22H19V7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 7V3H21V7H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
