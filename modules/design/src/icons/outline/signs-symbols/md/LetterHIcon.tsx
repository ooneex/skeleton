import type { SVGProps } from "react";

export const LetterHIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M7 16H25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 3V29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M25 3V29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
