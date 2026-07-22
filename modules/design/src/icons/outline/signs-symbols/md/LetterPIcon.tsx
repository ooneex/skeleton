import type { SVGProps } from "react";

export const LetterPIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 29V3H18C22.4183 3 26 6.58172 26 11V11C26 15.4183 22.4183 19 18 19H9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
