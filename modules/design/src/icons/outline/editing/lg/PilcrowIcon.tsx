import type { SVGProps } from "react";

export const PilcrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M33 5L33 43" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M20 5V43" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M41 5L14 5C9.02944 5 5 9.02944 5 14V14C5 18.9706 9.02944 23 14 23H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
