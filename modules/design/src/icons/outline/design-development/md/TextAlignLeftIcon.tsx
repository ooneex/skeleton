import type { SVGProps } from "react";

export const TextAlignLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M29 20L3 20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M29 4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M15 28H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15 12H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
