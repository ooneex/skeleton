import type { SVGProps } from "react";

export const LetterPIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7 21V3H13.5C16.5376 3 19 5.46243 19 8.5V8.5C19 11.5376 16.5376 14 13.5 14H7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
