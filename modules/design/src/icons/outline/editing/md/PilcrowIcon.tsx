import type { SVGProps } from "react";

export const PilcrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M22 3V29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M13 3V29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M27 3H9C5.68629 3 3 5.68629 3 9V9C3 12.3137 5.68629 15 9 15H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
