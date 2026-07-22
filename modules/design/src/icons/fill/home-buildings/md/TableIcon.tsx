import type { SVGProps } from "react";

export const TableIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 28.5L3 15L5 15L5 28.5L3 28.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 15L29 28L27 28L27 15L29 15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M31 12H1V17L31 17V12Z" fill="currentColor" />
      <path d="M22 19V24H24L24 19L22 19Z" fill="currentColor" data-color="color-2" />
      <path d="M8 19V24H10L10 19L8 19Z" fill="currentColor" data-color="color-2" />
      <path d="M30.8764 10H1.12354L5.70535 4H26.2945L30.8764 10Z" fill="currentColor" />
    </svg>
  );
};
