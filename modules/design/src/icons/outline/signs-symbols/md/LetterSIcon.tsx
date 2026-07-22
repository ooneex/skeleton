import type { SVGProps } from "react";

export const LetterSIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M23 3H13.5C9.91015 3 7 5.91015 7 9.5V9.5C7 13.0899 9.91015 16 13.5 16H18.5C22.0899 16 25 18.9101 25 22.5V22.5C25 26.0899 22.0899 29 18.5 29H9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
