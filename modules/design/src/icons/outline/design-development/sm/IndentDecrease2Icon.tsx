import type { SVGProps } from "react";

export const IndentDecrease2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M20 9L17 12L20 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M3 9H12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 3H12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 15H12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 21H12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
