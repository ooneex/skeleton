import type { SVGProps } from "react";

export const AddItemIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="24 4 20 4 20 0 18 0 18 4 14 4 14 6 18 6 18 10 20 10 20 6 24 6 24 4"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m20,12v4H5V5c0-.551.449-1,1-1h6v-2h-6c-1.654,0-3,1.346-3,3v13c0,1.654,1.346,3,3,3h13c1.654,0,3-1.346,3-3v-6h-2Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
