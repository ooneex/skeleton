import type { SVGProps } from "react";

export const SquarePlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m19,2H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3Zm-2,11h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
