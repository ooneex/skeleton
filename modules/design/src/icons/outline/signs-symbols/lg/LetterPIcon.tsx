import type { SVGProps } from "react";

export const LetterPIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 43V5H27C33.0751 5 38 9.92487 38 16V16C38 22.0751 33.0751 27 27 27H14.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
