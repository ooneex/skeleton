import type { SVGProps } from "react";

export const StarMinusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m12,18.902v-.902c0-1.104.896-2,2-2h4.241l-.249-1.453,5.993-5.841-8.281-1.204L12,0l-3.704,7.502L.015,8.706l5.993,5.841-1.415,8.248,7.407-3.893Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <rect x="14" y="18" width="10" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
