import type { SVGProps } from "react";

export const Heading1Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M28 26V6H26.5L20 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M15 16H3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 6V26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M15 6V26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
