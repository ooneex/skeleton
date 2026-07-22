import type { SVGProps } from "react";

export const IndentIncreaseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M21 15L13 15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 3H3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 21L3 21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 9H13" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M4.5 16L8.5 12L4.5 8"
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
