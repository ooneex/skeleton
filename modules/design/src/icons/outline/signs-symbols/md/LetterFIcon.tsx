import type { SVGProps } from "react";

export const LetterFIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 16H18.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 29V3H25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
