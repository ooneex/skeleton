import type { SVGProps } from "react";

export const CirclePlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm5,12h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
