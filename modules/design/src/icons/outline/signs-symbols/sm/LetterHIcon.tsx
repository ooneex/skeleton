import type { SVGProps } from "react";

export const LetterHIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M18 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
