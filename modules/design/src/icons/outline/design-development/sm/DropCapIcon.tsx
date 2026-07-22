import type { SVGProps } from "react";

export const DropCapIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M4 8H9" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M14 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M14 3H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 15H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M3.59398 10H3.5L5.9 3H6.5H7.1L9.5 10H9.39772"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
