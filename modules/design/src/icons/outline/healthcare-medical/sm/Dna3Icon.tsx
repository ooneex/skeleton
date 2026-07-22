import type { SVGProps } from "react";

export const Dna3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M20 2H17L7 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M20 12H17L7 22H4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M20 22H17L14.8253 19.8253"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M4 2H7L9.17506 4.17506"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M20 12H17L14.8254 9.82535" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4 12H7L9.17506 14.1751" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
