import type { SVGProps } from "react";

export const TextSizeIncreaseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 27V5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6 5H26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M20 16L30 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M25 21L25 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
