import type { SVGProps } from "react";

export const GridEmptyObjBottomRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="2" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <rect x="13" y="2" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="13" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <path
        d="m16.5,22h-1.5c-1.103,0-2-.897-2-2v-1.5h2v1.5h1.5v2Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m20,22h-1.5v-2h1.5v-1.5h2v1.5c0,1.103-.897,2-2,2Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m22,16.5h-2v-1.5h-1.5v-2h1.5c1.103,0,2,.897,2,2v1.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m15,16.5h-2v-1.5c0-1.103.897-2,2-2h1.5v2h-1.5v1.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
