import type { SVGProps } from "react";

export const LetterTIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 29V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5 3L27 3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
