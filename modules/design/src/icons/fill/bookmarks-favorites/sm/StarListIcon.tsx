import type { SVGProps } from "react";

export const StarListIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="13" y="21" width="10" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m11.417,19.209c-.258-.337-.417-.752-.417-1.209v-2c0-1.104.896-2,2-2h5.554l5.431-5.294-8.281-1.204L12,0l-3.704,7.502L.015,8.706l5.993,5.841-1.415,8.248,6.823-3.586Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <rect x="13" y="16" width="10" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
