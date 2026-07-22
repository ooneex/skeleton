import type { SVGProps } from "react";

export const SquarePlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m26,2H6c-2.206,0-4,1.794-4,4v20c0,2.206,1.794,4,4,4h20c2.206,0,4-1.794,4-4V6c0-2.206-1.794-4-4-4Zm-3,15h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
