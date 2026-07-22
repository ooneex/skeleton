import type { SVGProps } from "react";

export const LetterEIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M7 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M18 3H7V21H18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
