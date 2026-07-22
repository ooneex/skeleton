import type { SVGProps } from "react";

export const LetterTIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5 3H19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
