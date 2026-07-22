import type { SVGProps } from "react";

export const LetterQIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M42 42L29 29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M7 24C7 34.4934 14.6112 43 24 43C33.3888 43 41 34.4934 41 24C41 13.5066 33.3888 5 24 5C14.6112 5 7 13.5066 7 24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
