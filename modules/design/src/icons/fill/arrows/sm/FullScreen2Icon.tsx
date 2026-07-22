import type { SVGProps } from "react";

export const FullScreen2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="m4,9h-2v-4c0-1.654,1.346-3,3-3h4v2h-4c-.552,0-1,.449-1,1v4Z" strokeWidth="0" fill="currentColor" />
      <path d="m22,9h-2v-4c0-.551-.448-1-1-1h-4v-2h4c1.654,0,3,1.346,3,3v4Z" strokeWidth="0" fill="currentColor" />
      <path d="m19,22h-4v-2h4c.552,0,1-.449,1-1v-4h2v4c0,1.654-1.346,3-3,3Z" strokeWidth="0" fill="currentColor" />
      <path d="m9,22h-4c-1.654,0-3-1.346-3-3v-4h2v4c0,.551.448,1,1,1h4v2Z" strokeWidth="0" fill="currentColor" />
      <rect x="7" y="7" width="10" height="10" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
