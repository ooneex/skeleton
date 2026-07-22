import type { SVGProps } from "react";

export const LetterHIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 24H37" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M11 5V43" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M37 5V43" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
