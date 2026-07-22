import type { SVGProps } from "react";

export const ShopIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m19,13v7c0,.551-.448,1-1,1h-4v-5h-4v5h-4c-.552,0-1-.449-1-1v-7h-2v7c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3v-7h-2Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m19.579,1H4.421L1.056,6.855l.102.395c.569,2.208,2.561,3.75,4.843,3.75,1.086,0,2.138-.363,3-1.018,1.725,1.311,4.275,1.311,6,0,.862.655,1.914,1.018,3,1.018,2.282,0,4.273-1.542,4.843-3.75l.102-.395-3.365-5.855Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
