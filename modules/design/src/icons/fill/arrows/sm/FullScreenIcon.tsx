import type { SVGProps } from "react";

export const FullScreenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="5" y="7" width="14" height="10" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path d="m3,10H1v-4c0-1.654,1.346-3,3-3h4v2h-4c-.551,0-1,.449-1,1v4Z" strokeWidth="0" fill="currentColor" />
      <path d="m23,10h-2v-4c0-.551-.449-1-1-1h-4v-2h4c1.654,0,3,1.346,3,3v4Z" strokeWidth="0" fill="currentColor" />
      <path d="m20,21h-4v-2h4c.551,0,1-.449,1-1v-4h2v4c0,1.654-1.346,3-3,3Z" strokeWidth="0" fill="currentColor" />
      <path d="m8,21h-4c-1.654,0-3-1.346-3-3v-4h2v4c0,.551.449,1,1,1h4v2Z" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
