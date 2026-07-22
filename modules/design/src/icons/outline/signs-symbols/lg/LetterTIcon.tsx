import type { SVGProps } from "react";

export const LetterTIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 43L24 5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 5L41 5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
