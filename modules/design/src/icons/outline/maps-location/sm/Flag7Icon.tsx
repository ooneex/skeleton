import type { SVGProps } from "react";

export const Flag7Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 8H21L19 13L21 18H11V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M4 4H14V14H4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4 22V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
    </svg>
  );
};
