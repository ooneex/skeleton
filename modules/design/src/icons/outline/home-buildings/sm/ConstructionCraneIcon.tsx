import type { SVGProps } from "react";

export const ConstructionCraneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 5H3V9H5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M19 18V9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M9 9H21V6L9 5V4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M5 21V3H9V21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 21H11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 18L17 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
