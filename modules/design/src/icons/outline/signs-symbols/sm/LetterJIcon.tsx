import type { SVGProps } from "react";

export const LetterJIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6 15V15.5C6 18.5376 8.46243 21 11.5 21V21C14.5376 21 17 18.5376 17 15.5V3H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
