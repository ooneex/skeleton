import type { SVGProps } from "react";

export const FloppyDiskIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16.414,2H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V7.586l-5.586-5.586Zm-2.414,3h2v4h-2v-4Zm4,14H6v-6h12v6Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
