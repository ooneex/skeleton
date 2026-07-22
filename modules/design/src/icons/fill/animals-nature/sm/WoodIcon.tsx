import type { SVGProps } from "react";

export const WoodIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2V12L4 9L2 11L8 19V22H12V15H14V22H21L22 3.5L18 3L16 7.5L14 1.5L8 2ZM14 10H12V13H14V10Z"
        fill="currentColor"
      />
    </svg>
  );
};
