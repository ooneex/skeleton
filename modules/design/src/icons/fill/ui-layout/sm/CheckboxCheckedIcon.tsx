import type { SVGProps } from "react";

export const CheckboxCheckedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m19,2H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3Zm-8.951,15.463l-4.463-4.463,1.414-1.414,2.951,2.951,6.955-7.948,1.505,1.317-8.362,9.557Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
