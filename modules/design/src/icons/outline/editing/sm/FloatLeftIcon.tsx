import type { SVGProps } from "react";

export const FloatLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M21 15L13 15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 3H3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 21L3 21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 9H13" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M8 9H4C3.44772 9 3 9.44772 3 10V14C3 14.5523 3.44772 15 4 15H8C8.55228 15 9 14.5523 9 14V10C9 9.44772 8.55228 9 8 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
