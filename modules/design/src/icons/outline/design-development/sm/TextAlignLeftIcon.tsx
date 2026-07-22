import type { SVGProps } from "react";

export const TextAlignLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M21 15L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 3H3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M11 21H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M11 9H3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
    </svg>
  );
};
