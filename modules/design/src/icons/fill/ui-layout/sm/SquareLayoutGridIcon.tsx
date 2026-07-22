import type { SVGProps } from "react";

export const SquareLayoutGridIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="m11,11V2h-6c-1.654,0-3,1.346-3,3v6h9Z" strokeWidth="0" fill="currentColor" />
      <path d="m13,11h9v-6c0-1.654-1.346-3-3-3h-6v9Z" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path d="m11,13H2v6c0,1.654,1.346,3,3,3h6v-9Z" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path d="m13,13v9h6c1.654,0,3-1.346,3-3v-6h-9Z" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
