import type { SVGProps } from "react";

export const FarmerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m12,5v-1c0-1.654-1.346-3-3-3h-3c-1.654,0-3,1.346-3,3v1H1v2h2v.5c0,2.481,2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5v-.5h2v-2h-2Zm-2,2.5c0,1.378-1.121,2.5-2.5,2.5s-2.5-1.122-2.5-2.5v-.5h5v.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m10,13h-5c-2.757,0-5,2.243-5,5v5h15v-5c0-2.757-2.243-5-5-5Zm0,2v3h-5v-3h5Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m22,4v5c0,.551-.448,1-1,1v-6h-2v6c-.552,0-1-.449-1-1v-5h-2v5c0,1.654,1.346,3,3,3h2c1.654,0,3-1.346,3-3v-5h-2Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect x="19" y="14" width="2" height="9" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
