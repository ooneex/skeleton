import type { SVGProps } from "react";

export const LetterJIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7 20V21C7 25.4183 10.5817 29 15 29V29C19.4183 29 23 25.4183 23 21V3H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
