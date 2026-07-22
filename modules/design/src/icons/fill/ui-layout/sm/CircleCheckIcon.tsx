import type { SVGProps } from "react";

export const CircleCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm-1.951,16.463l-4.463-4.463,1.414-1.414,2.951,2.951,6.955-7.948,1.505,1.317-8.362,9.557Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
