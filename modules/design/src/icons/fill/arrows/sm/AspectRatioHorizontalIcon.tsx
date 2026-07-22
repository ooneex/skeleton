import type { SVGProps } from "react";

export const AspectRatioHorizontalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m20,3H4c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h16c1.654,0,3-1.346,3-3V6c0-1.654-1.346-3-3-3Zm-10,15h-6v-6h2v4h4v2Zm10-6h-2v-4h-4v-2h6v6Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
