import type { SVGProps } from "react";

export const MoveToTopIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="3" y="1" width="18" height="10" rx="3" ry="3" strokeWidth="0" fill="currentColor" />
      <path
        d="m21,17h-2v-1c0-.551-.449-1-1-1h-2v-2h2c1.654,0,3,1.346,3,3v1Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m5,17h-2v-1c0-1.654,1.346-3,3-3h2v2h-2c-.551,0-1,.449-1,1v1Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m8,23h-2c-1.654,0-3-1.346-3-3v-1h2v1c0,.551.449,1,1,1h2v2Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m18,23h-2v-2h2c.551,0,1-.449,1-1v-1h2v1c0,1.654-1.346,3-3,3Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect x="10" y="13" width="4" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="10" y="21" width="4" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
