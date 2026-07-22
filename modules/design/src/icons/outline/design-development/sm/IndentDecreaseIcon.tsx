import type { SVGProps } from "react";

export const IndentDecreaseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 15L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 3H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 21L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 9H11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M19.5 16L15.5 12L19.5 8"
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
