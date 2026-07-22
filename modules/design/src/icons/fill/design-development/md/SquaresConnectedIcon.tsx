import type { SVGProps } from "react";

export const SquaresConnectedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="1" y="1" width="10" height="10" strokeWidth="0" fill="currentColor" />
      <rect x="21" y="21" width="10" height="10" strokeWidth="0" fill="currentColor" />
      <path
        d="m19,27h-10c-2.206,0-4-1.794-4-4v-10h2v10c0,1.103.897,2,2,2h10v2Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m27,19h-2v-10c0-1.103-.897-2-2-2h-10v-2h10c2.206,0,4,1.794,4,4v10Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
