import type { SVGProps } from "react";

export const PilcrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M20 2H8C5.23858 2 3 4.23858 3 7V7C3 9.76142 5.23858 12 8 12H10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
